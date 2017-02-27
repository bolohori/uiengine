const path = require('path')
const R = require('ramda')
const Config = require('./configuration')
const Builder = require('./builder')
const Navigation = require('./navigation')
const Component = require('./component')
const Variation = require('./variation')
const Page = require('./page')
const Theme = require('./theme')
const Connector = require('./connector')
const PageUtil = require('./util/page')
const ComponentUtil = require('./util/component')
const VariationUtil = require('./util/variation')

// set the state in this modules scope so that we
// can access it when handling incremental changes
let state = {}

async function setupStateWithOptions (options = {}) {
  if (typeof options.config === 'string') {
    const config = await Config.read(options.config, options)
    return { config }
  } else {
    return Promise.reject('Please provide the config file path with the options.')
  }
}

async function generate (options) {
  // 0. setup
  state = await setupStateWithOptions(options)

  const setupTheme = Theme.setup(state)
  const setupAdapters = Connector.setup(state)
  await Promise.all([setupTheme, setupAdapters])

  // 1. data fetching
  const fetchPages = Page.fetchAll(state)
  const fetchComponents = Component.fetchAll(state)
  const fetchVariations = Variation.fetchAll(state)
  const [pages, components, variations] = await Promise.all([fetchPages, fetchComponents, fetchVariations])

  state = R.assoc('pages', pages, state)
  state = R.assoc('components', components, state)
  state = R.assoc('variations', variations, state)

  // 2. transformations
  const navigation = await Navigation.fetch(state)

  state = R.assoc('navigation', navigation, state)

  // 3. output
  const generateSite = Builder.generateSite(state)
  const dumpState = Builder.dumpState(state)
  await Promise.all([generateSite, dumpState])

  return state
}

async function generateIncrementForChangedFile (options, filePath) {
  const { components, pages } = state.config.source
  const file = path.relative('.', filePath)

  // TODO: Add handler for template changes

  const pageId = pages ? PageUtil.pageFilePathToPageId(pages, filePath) : undefined
  const componentId = components ? ComponentUtil.componentFilePathToComponentId(components, filePath) : undefined
  let variationId = components ? VariationUtil.variationFilePathToVariationId(components, filePath) : undefined

  // TODO: Remove this quickfix and rebuild all variation
  // files belonging to the meta variation markdown file.
  if (variationId && variationId.endsWith('.md')) {
    variationId = undefined
  }

  if (pageId) {
    await regeneratePage(pageId)
    return { file, type: 'page', item: pageId }
  } else if (variationId) {
    await regenerateVariation(variationId, componentId)
    return { file, type: 'variation', item: variationId }
  } else if (componentId) {
    await Connector.registerComponentFile(state, filePath)
    await regenerateComponent(componentId)
    return { file, type: 'component', item: componentId }
  } else {
    await generate(options)
    return { file, type: 'site', item: state.config.name }
  }
}

async function fetchAndAssocPage (id) {
  const page = await Page.fetchById(state, id)
  state = R.assocPath(['pages', id], page, state)
  return page
}

async function fetchAndAssocVariation (id) {
  const variation = await Variation.fetchById(state, id)
  state = R.assocPath(['variations', id], variation, state)
  return variation
}

async function fetchAndAssocNavigation () {
  const navigation = await Navigation.fetch(state)
  state = R.assoc('navigation', navigation, state)
  return navigation
}

async function updateComponent (id) {
  const component = await Component.fetchById(state, id)
  state = R.assocPath(['components', id], component, state)
  return component
}

async function regeneratePage (id) {
  await fetchAndAssocPage(id)
  await fetchAndAssocNavigation()

  const buildPage = Builder.generatePage(state, id)
  const copyFiles = Builder.copyPageFiles(state, id)

  await Promise.all([buildPage, copyFiles])
}

async function regenerateVariation (id, componentId) {
  await fetchAndAssocVariation(id)

  const buildVariation = Builder.generateVariation(state, id)
  const buildPages = Builder.generatePagesHavingComponent(state, componentId)
  await Promise.all([buildPages, buildVariation])
}

async function regenerateComponent (id) {
  const { variationIds } = await updateComponent(id)
  const fetchAndAssocVariations = R.map(fetchAndAssocVariation, variationIds)
  await Promise.all(fetchAndAssocVariations)

  const buildPages = Builder.generatePagesHavingComponent(state, id)
  const buildVariations = Builder.generateComponentVariations(state, id)
  await Promise.all([buildPages, buildVariations])
}

module.exports = {
  generate,
  generateIncrementForChangedFile
}
