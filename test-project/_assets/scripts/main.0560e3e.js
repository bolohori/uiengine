(self.webpackChunk_uiengine_ui=self.webpackChunk_uiengine_ui||[]).push([[179],{5768:function(e){e.exports=function(e,t,n){var r=t.split(".").reduce((function(e,t){return e&&e[t]}),e);return r&&n?r.replace(/%\{(.+?)\}/g,(function(e,r){var i=n[r];return i||(console.warn("[UIengine]",'Missing interpolation "'.concat(r,'" for key "').concat(t,'"!')),"[".concat(r,"]"))})):r||(console.warn("[UIengine]",'Missing localization for key "'.concat(t,'"!')),"[".concat(t,"]"))}},5497:function(e,t,n){"use strict";var r=n(8101),i=n(6847),o=n(8834),a=n.n(o),s=n(6810),c=n.n(s),l=n(2653),u=n(835),p=n(6452);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={mixins:[n(830).Z],data:function(){return{query:"",isThemesActive:!1}},computed:d(d({},(0,p.Se)("state",["navigation"])),(0,p.Se)("preferences",["locale","navigationCollapsed","searchCollapsed"])),created:function(){var e=this;this.$root.$on("modal-close",(function(){e.isThemesActive=!1}))},methods:d(d({},(0,p.OI)("preferences",["setNavigationCollapsed","setSearchCollapsed","setCurrentTheme"])),{},{search:function(){var e=this.query.trim();e.length&&this.$router.push({name:"search",params:{query:e}})},setCurrentThemeAll:function(){this.setCurrentTheme({id:"_all",title:this.$options.filters.localize("options.all_themes")})},toggleSearch:function(){var e=this;this.setSearchCollapsed(!this.searchCollapsed),this.searchCollapsed||window.requestAnimationFrame((function(){e.$refs.searchfield.focus()}))}})},h=n(8272),g=(0,h.Z)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"topbar"},[n("button",{staticClass:"topbar__toggle topbar__toggle--menu",attrs:{title:e._f("localize")("navigation.toggle"),"aria-expanded":e._f("bool2string")(!e.navigationCollapsed),type:"button","aria-controls":"navigation-root","data-test-navtoggle":""},on:{click:function(t){return t.preventDefault(),e.setNavigationCollapsed(!e.navigationCollapsed)}}},[n("AppIcon",{staticClass:"topbar__icon",attrs:{symbol:"burger"}})],1),e._v(" "),n("form",{staticClass:"topbar__search",class:{"topbar__search--collapsed":e.searchCollapsed},on:{submit:function(t){return t.preventDefault(),e.search.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"searchfield",staticClass:"topbar__searchfield",attrs:{type:"search",placeholder:"Search",name:"query","aria-label":e._f("localize")("search.label"),"data-test-searchfield":""},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})]),e._v(" "),e.themes&&e.themes.length>1?n("div",{staticClass:"topbar__theme",attrs:{"data-test-theme-switch":""}},[n("button",{staticClass:"topbar__theme-toggle",attrs:{title:e._f("localize")("options.toggle"),"aria-expanded":e._f("bool2string")(e.isThemesActive),type:"button","data-test-theme-switch-current":""},on:{click:function(t){t.stopPropagation(),e.isThemesActive=!e.isThemesActive}}},[e._v("\n      "+e._s(e.currentTheme.title)+"\n\n      "),n("AppIcon",{staticClass:"topbar__theme-toggle-icon",attrs:{symbol:"caret-down"}})],1),e._v(" "),n("div",{staticClass:"topbar__theme-options",class:{"topbar__theme-options--active":e.isThemesActive}},[n("div",{staticClass:"topbar__theme-options-inner"},[e._l(e.themes,(function(t){return n("button",{key:t.id,staticClass:"topbar__theme-option",attrs:{type:"button","aria-selected":e.currentTheme.id===t.id,"data-test-theme-switch-id":t.id},on:{click:function(n){return e.setCurrentTheme(t)}}},[e._v("\n          "+e._s(t.title)+"\n        ")])})),e._v(" "),n("button",{staticClass:"topbar__theme-option topbar__theme-option--all",attrs:{type:"button","aria-selected":e.displayAllThemes,"data-test-theme-switch-all":""},on:{click:function(t){return e.setCurrentThemeAll()}}},[e._v("\n          "+e._s(e._f("localize")("options.all_themes"))+"\n        ")])],2)])]):e._e(),e._v(" "),n("button",{staticClass:"topbar__toggle topbar__toggle--search",attrs:{title:e._f("localize")("search.toggle"),type:"button"},on:{click:function(t){return t.preventDefault(),e.toggleSearch.apply(null,arguments)}}},[n("AppIcon",{staticClass:"topbar__icon",attrs:{symbol:"search"}})],1)])}),[],!1,null,"0778ce28",null).exports;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={computed:_(_({},(0,p.Se)("state",["config","navigation"])),(0,p.Se)("preferences",["locale","navigationCollapsed"]))},y=(0,h.Z)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.navigation?n("nav",{staticClass:"navigation",attrs:{id:"navigation",hidden:e.navigationCollapsed,"data-test-navigation":""}},[n("RouterLink",{staticClass:"navigation__project-details",attrs:{to:e.navigation.index,"active-class":"","exact-active-class":""}},[e.config.logo?n("img",{staticClass:"navigation__project-logo",attrs:{src:e.config.logo}}):e._e(),e._v(" "),n("h1",{staticClass:"navigation__project-name"},[e._v("\n      "+e._s(e.config.name)+"\n    ")])]),e._v(" "),e.navigation.index.childIds?n("AppNavigationTree",{attrs:{id:"navigation-root",items:e.navigation.index.childIds,navigation:e.navigation,level:0}}):e._e()],1):e._e()}),[],!1,null,"6937a9e1",null).exports;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={computed:C(C(C({},(0,p.Se)("state",["config","navigation"])),(0,p.Se)("preferences",["locale"])),{},{lastUpdate:function(){return new Date(this.config.update).toLocaleString(this.locale)},navItem:function(){var e=this.$route.meta.navItemId;return this.navigation[e]},prevPage:function(){return this.findPrevPage(this.$route.meta.navItemId,!0)},nextPage:function(){return this.findNextPage(this.$route.meta.navItemId,!0)}}),methods:{findPrevPage:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e){var r=this.navigation[e];if(r){var i=r.childIds,o=r.prevSiblingId,a=r.parentId;return!n&&i?this.findPrevPage(i[i.length-1],!1,!1):t||r.isStructural?o?this.findPrevPage(o,!1,!1):a?this.findPrevPage(a,!1,!0):void 0:r}}},findNextPage:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e){var r=this.navigation[e];if(r){var i=r.childIds,o=r.nextSiblingId,a=r.parentId;return t||r.isStructural?!n&&i?this.findNextPage(i[0]):o?this.findNextPage(o):a?this.findNextPage(a,!0,!0):void 0:r}}}}},j=n(4956),P=n.n(j),I=(0,h.Z)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[e.prevPage||e.nextPage?n("p",{staticClass:"footer__nav"},[e.prevPage?n("RouterLink",{staticClass:"footer__prevlink",attrs:{to:e.prevPage,"data-test-footer-prevlink":""}},[n("AppIcon",{attrs:{symbol:"caret-left"}}),e._v("\n      "+e._s(e.prevPage.title)+"\n    ")],1):e._e(),e._v(" "),e.nextPage?n("RouterLink",{staticClass:"footer__nextlink",attrs:{to:e.nextPage,"data-test-footer-nextlink":""}},[e._v("\n      "+e._s(e.nextPage.title)+"\n      "),n("AppIcon",{attrs:{symbol:"caret-right"}})],1):e._e()],1):e._e(),e._v(" "),n("div",[e.config.copyright?n("p",{staticClass:"footer__copyright",attrs:{"data-test-footer-copyright":""},domProps:{innerHTML:e._s(e.config.copyright)}}):e._e(),e._v(" "),e.config.version?n("p",{staticClass:"footer__version",attrs:{"data-test-footer-version":""}},[e._v("\n      "+e._s(e._f("localize")("footer.version"))+" "+e._s(e.config.version)+" –\n      "+e._s(e._f("localize")("footer.last_update"))+" "+e._s(e.lastUpdate)+".\n    ")]):e._e()])])}),[],!1,null,"cdcd25a2",null);"function"==typeof P()&&P()(I);var k=I.exports,S={computed:(0,p.Se)("state",["navigation"]),metaInfo:function(){var e=this.$route.meta,t=e.navItemId,n=e.navItemTitle,r=this.navigation[t];return{title:r?r.title:n}}},T=(0,h.Z)(S,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"main"},[t("RouterView")],1)}),[],!1,null,null,null).exports;function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=document.documentElement,D=document.getElementById("hljs"),$=D.getAttribute("data-tmpl"),E={components:{AppTopbar:g,AppNavigation:y,AppFooter:k,AppMain:T},computed:x(x({},(0,p.Se)("preferences",["currentTheme"])),{},{themeId:function(){return this.currentTheme&&this.currentTheme.id}}),created:function(){var e=this;this.$root.$on("setting-hljs",this.setHljs),this.$store.watch((function(){return e.$store.getters["preferences/currentTheme"]}),this.setCurrentTheme);var t=this.$store.getters["preferences/hljs"];t&&this.setHljs(t),this.setCurrentTheme(this.currentTheme)},methods:{closeModals:function(){this.$root.$emit("modal-close")},setHljs:function(e){D.setAttribute("href",$.replace("%s",e))},setCurrentTheme:function(e){A.setAttribute("data-theme",e.id)}},metaInfo:function(){var e=this.$store.getters["state/config"],t=e?e.name:"";return e&&e.version&&(t+=" (".concat(e.version,")")),{titleTemplate:function(e){return e?"".concat(e," • ").concat(t):t}}}},N=(0,h.Z)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout",attrs:{id:"app"},on:{click:e.closeModals}},[n("AppTopbar"),e._v(" "),n("AppNavigation"),e._v(" "),n("AppMain"),e._v(" "),n("AppFooter")],1)}),[],!1,null,null,null).exports,q=n(4719),M=n(3191),z=n(6500);r.Z.use(q.Z);var U=function(e){if("documentation"===e)return M.default;var t=(0,z.upcaseFirstChar)(e);return function(){return n(1393)("./Main"+t)}},F=window.UIengine.state.config.ui,L=F.base,H=F.mode,R=new q.Z({mode:H||"history",base:L||"/",scrollBehavior:function(e,t,n){return e.hash?{selector:e.hash}:n||{x:0,y:0}},routes:[{name:"search",path:"/_search/:query",props:!0,component:U("search"),meta:{navItemId:"_search"}},{name:"settings",path:"/_settings/",component:U("settings"),meta:{navItemId:"_settings"}},{path:"*",component:U("notFound")}]}),B=R,K=function(e){var t=Object.keys(e).map((function(t){var n=e[t];return{path:n.path,component:U(n.type),meta:{navItemId:n.id,navItemTitle:n.title},props:{id:n.itemId}}}));R.addRoutes(t)};K(window.UIengine.state.navigation);var V=function(e){var t,n,r=e.navigation;return n="Settings",r[t="settings"]={id:t,itemId:t,parentId:"index",path:"/_".concat(t,"/"),type:t,localizedTitleKey:"".concat(t,".title"),title:n},r.index.childIds.push(t),e},W={namespaced:!0,state:V(window.UIengine.state),getters:{pages:function(e){return e.pages},config:function(e){return e.config},plugins:function(e){return e.plugins},components:function(e){return e.components},navigation:function(e){return e.navigation}},mutations:{setState:function(e,t){for(var n in t=V(t))e[n]=t[n];var r=t.navigation;r&&K(r)}},actions:{}},J=n(4556),G=window.UIengine.state.config,Q=G.ui,X=G.themes,Y={hljs:document.getElementById("hljs").getAttribute("data-default"),locale:document.documentElement.getAttribute("lang"),currentTheme:X&&X[0],navigationCollapsed:!1,navigationItemsCollapsed:{},searchCollapsed:!0,previewWidths:{},previewMode:Q&&Q.defaultPreviewMode||"breakpoints"},ee={namespaced:!0,state:Object.keys(Y).reduce((function(e,t){var n=Y[t];return e[t]=function(e,t){var n=window.sessionStorage.getItem("uiengine/".concat(e));return n?JSON.parse(n):t}(t,n),e}),{}),getters:Object.keys(Y).reduce((function(e,t){return e[t]=function(e){return e[t]},e}),{}),mutations:Object.keys(Y).reduce((function(e,t){var n=(0,z.upcaseFirstChar)(t);return e["set".concat(n)]=function(e,n){!function(e,t){t||"boolean"==typeof t?window.sessionStorage.setItem("uiengine/".concat(e),JSON.stringify(t)):window.sessionStorage.removeItem("uiengine/".concat(e))}(t,n),e[t]=function(e){return"object"===(0,J.Z)(e)?e instanceof Array?e:Object.assign({},e):e}(n)},e}),{}),actions:{}};r.Z.use(p.ZP);var te={state:W,preferences:ee},ne=new p.ZP.Store({modules:te}),re=n(5768),ie=n.n(re),oe=n(387);r.Z.filter("dasherize",z.dasherize),r.Z.filter("upcaseFirstChar",z.upcaseFirstChar),r.Z.filter("titleize",z.titleize),r.Z.filter("bool2string",(function(e){return e?"true":"false"})),r.Z.filter("localize",(function(e,t){var n=ne.getters["preferences/locale"],r=oe.l[n];return ie()(r,e,t)}));var ae={props:{title:{type:String,default:""},symbol:{type:String,required:!0}},computed:{symbolHref:function(){return"#".concat(this.symbol)}}},se=(0,h.Z)(ae,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"icon",attrs:{title:e.title,role:"presentation","aria-hidden":"true",focusable:"false"}},[n("use",{attrs:{"xlink:href":e.symbolHref}})])}),[],!1,null,"498522e7",null).exports,ce={props:{navigation:{type:Object,required:!0},items:{type:Array,required:!0},level:{type:Number,required:!0}},computed:{levelClass:function(){return"navigation__tree--level-".concat(this.level)},navigationItems:function(){var e=this;return this.items.filter((function(t){return void 0!==e.navigation[t]}))}}},le=(0,h.Z)(ce,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"navigation__tree",class:e.levelClass},[e._l(e.navigationItems,(function(t){return n("AppNavigationItem",{key:t,attrs:{navigation:e.navigation,item:e.navigation[t],level:e.level}})})),e._v(" "),e._t("default")],2)}),[],!1,null,"e330ca40",null).exports;function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe={props:{navigation:{type:Object,required:!0},item:{type:Object,required:!0},level:{type:Number,required:!0}},computed:pe(pe({},(0,p.Se)("preferences",["navigationItemsCollapsed"])),{},{children:function(){return this.item.childIds},isCurrentPage:function(){return this.$route.path===this.item.path},isCollapsed:function(){return void 0!==this.navigationItemsCollapsed[this.item.id]?this.navigationItemsCollapsed[this.item.id]:this.item.collapsed||!1},title:function(){var e=this.item,t=e.title,n=e.localizedTitleKey;return n?this.$options.filters.localize(n):t},classes:function(){var e=["navigation__item--level-".concat(this.level)];return this.children&&e.push("navigation__item--children"),this.isCollapsed&&e.push("navigation__item--collapsed"),this.isCurrentPage&&e.push("navigation__item--current"),e}}),methods:pe(pe({},(0,p.OI)("preferences",["setNavigationItemsCollapsed"])),{},{setCollapsed:function(e){var t=this.navigationItemsCollapsed;t[this.item.id]=e,this.setNavigationItemsCollapsed(t),e||this.$refs.children.$el.querySelector("a.navigation__link").focus()}})},de=(0,h.Z)(fe,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"navigation__item",class:e.classes,attrs:{"data-test-navitem-id":e.item.id}},[e.item.isStructural?n("span",{staticClass:"navigation__link"},[e._v("\n    "+e._s(e.title)+"\n  ")]):n("RouterLink",{staticClass:"navigation__link",attrs:{to:e.item}},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),e.children?n("button",{staticClass:"navigation__itemtoggle",attrs:{"aria-expanded":e._f("bool2string")(!e.isCollapsed),title:e._f("localize")("navigation.toggle"),type:"button","aria-haspopup":"true"},on:{click:function(t){return t.preventDefault(),e.setCollapsed(!e.isCollapsed)}}},[n("AppIcon",{staticClass:"navigation__icon",attrs:{symbol:"caret-down"}})],1):e._e(),e._v(" "),e.children?n("AppNavigationTree",{ref:"children",attrs:{navigation:e.navigation,items:e.children,level:e.level+1,"data-test-navtree-id":e.item.id}}):e._e()],1)}),[],!1,null,"0325e07b",null).exports,ve=n(1675);r.Z.component("AppIcon",se),r.Z.component("AppNavigationTree",le),r.Z.component("AppNavigationItem",de),r.Z.component("ContentProperty",ve.Z);var he=(window.UIengine.state.config.ui||{}).analyticsId;if(n.p=window.UIengine.base,r.Z.config.productionTip=!1,r.Z.use(i.Z),he&&r.Z.use(a(),{id:he,router:B,autoTracking:{exception:!0,exceptionLogs:!1},debug:{sendHitTask:!0}}),new r.Z({el:"#app",router:B,store:ne,components:{App:N},mounted:function(){this.$nextTick((function(){(0,l.Z)({observeChanges:!0,observeRootSelector:"main.main"})}))},template:"<App/>"}),new(c())("[data-clipboard-text]").on("error",(function(e){console.error("[UIengine]","Clipboard error:",e)})),document.getElementById("__bs_script__")){var ge=0;!function e(){var t=(window.___browserSync___||{}).socket;t?(t.on("uiengine:state:update",(function(e){ne.commit("state/setState",e)})),console.debug("[UIengine]","Connection to browser-sync socket established.")):ge<=10?(setTimeout(e,100),ge++):console.warn("[UIengine]","Could not connect to browser-sync socket.")}()}},9693:function(e,t){"use strict";t.Z={methods:{findFileLink:function(e){var t=!!window.___browserSync___,n=e.readmeFile,r=e.sourceFile,i=e.sourcePath,o=n||r||i;if(t){var a=this.config.source.base;return"vscode://file/".concat(a,"/").concat(o)}var s=this.config.ui.repoBaseUrl;return s?"".concat(s).concat(o):null}}}},830:function(e,t,n){"use strict";var r=n(835),i=n(6452);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z={computed:a(a(a({},(0,i.Se)("state",["config"])),(0,i.Se)("preferences",["currentTheme"])),{},{displayAllThemes:function(){return"_all"===this.currentTheme.id},displayedThemes:function(){return this.displayAllThemes?this.themes:[this.currentTheme]},themes:function(){return this.config.themes}})}},387:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var r=n(6796),i=n.n(r),o=window.UIengine,a=o.state.config.ui,s=o.locales,c=a&&a.locales?a.locales:{},l=i()(s,c)},3177:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r={components:{ContentHeading:n(8887).Z},props:{title:{type:String,default:null},level:{type:Number,default:1}}},i=(0,n(8272).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"contentheader"},[e.title?n("ContentHeading",[e._v("\n    "+e._s(e.title)+"\n  ")]):e._e(),e._v(" "),e._t("default")],2)}),[],!1,null,"eaea4294",null).exports},8887:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r={props:{level:{type:Number,default:1}},render:function(e){return e("h".concat(this.level),{class:"contentheader__title"},this.$slots.default)}},i=(0,n(8272).Z)(r,undefined,undefined,!1,null,null,null).exports},1675:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r={props:{id:{type:String,required:!0},property:{type:Object,required:!0},displayDescription:{type:Boolean,required:!0}},computed:{propertyType:function(){var e=this.property,t=e.value,n=e.type;return["Array","Object"].includes(n)&&t?"".concat(this.property.type,"[").concat(t.type||t,"]"):this.property.type},description:function(){return this.property.description},required:function(){return this.property.required?"*":""},defaultValue:function(){return this.property.default}}},i=(0,n(8272).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",{staticClass:"property__name"},[e._v("\n    "+e._s(e.id)+"\n  ")]),e._v(" "),n("td",{staticClass:"property__type"},[e._v("\n    "+e._s(e.propertyType)+"\n  ")]),e._v(" "),e.displayDescription?n("td",{staticClass:"property__description"},[e._v("\n    "+e._s(e.description)+"\n  ")]):e._e(),e._v(" "),n("td",{staticClass:"property__required"},[e._v("\n    "+e._s(e.required)+"\n  ")]),e._v(" "),n("td",{staticClass:"property__default"},[e._v("\n    "+e._s(e.defaultValue)+"\n  ")])])}),[],!1,null,"d4d827e4",null).exports},3391:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r={props:{tag:{type:String,required:!0}},computed:{target:function(){return{name:"search",params:{query:this.tag}}}}},i=(0,n(8272).Z)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("RouterLink",{staticClass:"tag",attrs:{to:e.target}},[e._v("\n  "+e._s(e.tag)+"\n")])}),[],!1,null,"372e3e56",null).exports},8510:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=/^<h1.*?>.*<\/h1>/,i={props:{item:{type:Object,default:null}},computed:{renderedContent:function(){var e=this.item,t=e.content,n=e.isTitleFromHeading;return t?n?t.replace(r,"").trim():t:null}},methods:{handleLinkClicks:function(e){for(var t=e.target;t&&"A"!==t.tagName;)t=t.parentNode;if(t&&t.matches(".content a:not([href*='://'])")&&t.href){var n=e.altKey,r=e.ctrlKey,i=e.metaKey,o=e.shiftKey,a=e.button,s=e.defaultPrevented;if(i||n||r||o)return;if(s)return;if(void 0!==a&&0!==a)return;if(t&&t.getAttribute){var c=t.getAttribute("target");if(/\b_blank\b/i.test(c))return}var l=window.UIengine.state.config.ui.base,u=new RegExp("^".concat(l)),p=new URL(t.href).pathname,f=window.location.pathname,d=p.replace(u,"/"),v=f.replace(u,"/");void 0!==this.$router.resolve(d).resolved.meta.navItemId&&!(v===d)&&e.preventDefault&&(e.preventDefault(),this.$router.push(d))}}}},o=(0,n(8272).Z)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item.content?n("article",{staticClass:"content",domProps:{innerHTML:e._s(e.renderedContent)},on:{click:e.handleLinkClicks}}):e._e()}),[],!1,null,null,null).exports},3191:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(835),i=n(6452),o=n(9693),a=n(3177),s=n(8510),c=n(3391);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={components:{ContentHeader:a.Z,ContentText:s.Z,ContentTag:c.Z},mixins:[o.Z],props:{id:{type:String,required:!0}},computed:u(u({},(0,i.Se)("state",["pages","config"])),{},{page:function(){return this.pages[this.id]},fileLink:function(){return this.findFileLink(this.page)}})},f=(0,n(8272).Z)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"page"},[n("ContentHeader",{attrs:{title:e.page.title}},[e._l(e.page.tags,(function(e){return n("ContentTag",{key:e,staticClass:"uie-sob-m",attrs:{tag:e}})})),e._v(" "),e.fileLink?n("div",{staticClass:"contentheader__options"},[n("a",{staticClass:"contentheader__action",attrs:{href:e.fileLink,"aria-label":e._f("localize")("options.edit")}},[n("AppIcon",{attrs:{symbol:"pencil"}})],1)]):e._e()],2),e._v(" "),n("ContentText",{attrs:{item:e.page}})],1)}),[],!1,null,null,null).exports},4956:function(){},1393:function(e,t,n){var r={"./MainComponent":[5401,556,941,970,375,674],"./MainComponent.vue":[5401,556,941,970,375,674],"./MainDocumentation":[3191],"./MainDocumentation.vue":[3191],"./MainNotFound":[8366,233],"./MainNotFound.vue":[8366,233],"./MainSearch":[2316,556,372],"./MainSearch.vue":[2316,556,372],"./MainSettings":[558,466],"./MainSettings.vue":[558,466],"./MainTemplate":[3379,556,941,970,375,773],"./MainTemplate.vue":[3379,556,941,970,375,773],"./MainTokens":[102,556,970,262],"./MainTokens.vue":[102,556,970,262]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=1393,e.exports=i},6500:function(e,t,n){const r=n(6636),i=/^<h1.*?>(.*?)<\/h1>/;e.exports={crossPlatformPath:e=>e.replace(/\\/g,"/"),dasherize:e=>String(e).replace(/\W+/gi,"-"),titleize:e=>e.split(/\W+/gi).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),upcaseFirstChar:e=>e.charAt(0).toUpperCase()+e.slice(1),lowercaseFirstChar:e=>e.charAt(0).toLowerCase()+e.slice(1),hasContent:e=>!!e&&e.replace(i,"").trim().length>0,replaceTemplateComments:(e,t)=>Object.keys(t).reduce(((e,n)=>{const r=new RegExp(`\x3c!--\\s?uiengine:${n}\\s?--\x3e`,"gi"),i=t[n];return e.replace(r,i||"")}),e),titleFromContentHeading:e=>{const[,t]=e&&e.match(i)||[];return t&&r(t,"all")}}}},function(e){e.O(0,[179],(function(){[556,941,970,375,674,233,372,466,773,262].map(e.E)}),5);e.O(0,[556,418],(function(){return t=5497,e(e.s=t);var t}));e.O()}]);