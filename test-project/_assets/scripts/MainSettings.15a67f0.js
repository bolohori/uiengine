"use strict";(self.webpackChunk_uiengine_ui=self.webpackChunk_uiengine_ui||[]).push([[466],{558:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(5698),i=r(9105),l=r(3177),s=r(387);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={components:{ContentHeader:l.Z},data:function(){return{hljsOptions:["agate","androidstudio","arduino-light","arta","ascetic","atelier-cave-dark","atelier-cave-light","atelier-dune-dark","atelier-dune-light","atelier-estuary-dark","atelier-estuary-light","atelier-forest-dark","atelier-forest-light","atelier-heath-dark","atelier-heath-light","atelier-lakeside-dark","atelier-lakeside-light","atelier-plateau-dark","atelier-plateau-light","atelier-savanna-dark","atelier-savanna-light","atelier-seaside-dark","atelier-seaside-light","atelier-sulphurpool-dark","atelier-sulphurpool-light","atom-one-dark","atom-one-light","brown-paper","codepen-embed","color-brewer","darcula","dark","default","docco","dracula","far","foundation","github-gist","github","googlecode","grayscale","gruvbox-dark","gruvbox-light","hopscotch","hybrid","idea","ir-black","kimbie.dark","kimbie.light","magula","mono-blue","monokai-sublime","monokai","obsidian","ocean","paraiso-dark","paraiso-light","pojoaque","purebasic","qtcreator_dark","qtcreator_light","railscasts","rainbow","routeros","school-book","solarized-dark","solarized-light","sunburst","tomorrow-night-blue","tomorrow-night-bright","tomorrow-night-eighties","tomorrow-night","tomorrow","vs","vs2015","xcode","xt256","zenburn"]}},computed:n(n({},(0,i.Se)("state",["config"])),{},{locale:{get:(0,i.Se)("preferences",["locale"]).locale,set:function(e){this.setLocale(e)}},localeOptions:function(){return Object.keys(s.l).reduce((function(e,t){var r=(s.l[t]._meta||{}).title;return e[t]=r||t,e}),{})},previewModeOptions:function(){return{breakpoints:this.$options.filters.localize("settings.breakpoints"),viewports:this.$options.filters.localize("settings.viewports")}},previewMode:{get:(0,i.Se)("preferences",["previewMode"]).previewMode,set:function(e){this.setPreviewMode(e)}},hljs:{get:(0,i.Se)("preferences",["hljs"]).hljs,set:function(e){this.setHljs(e),this.$root.$emit("setting-hljs",e)}},title:function(){return this.$options.filters.localize("settings.title")},hasPreviewModes:function(){var e=this.config.ui;return!!(e&&e.breakpoints&&e.viewports)}}),methods:n({},(0,i.OI)("preferences",["setLocale","setPreviewMode","setHljs"])),metaInfo:function(){return{title:this.title}}},u=(0,r(8272).Z)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"page"},[r("ContentHeader",{staticClass:"uie-sob-l",attrs:{title:e.title}}),e._v(" "),r("article",{staticClass:"content"},[r("div",{staticClass:"row"},[r("label",{staticClass:"uie-select-label",attrs:{for:"locale"}},[e._v("\n        "+e._s(e._f("localize")("settings.locale"))+"\n      ")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.locale,expression:"locale"}],attrs:{id:"locale-select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.locale=t.target.multiple?r:r[0]}}},e._l(e.localeOptions,(function(t,a){return r("option",{key:a,domProps:{value:a,selected:e.locale===a}},[e._v("\n          "+e._s(t)+"\n        ")])})),0)]),e._v(" "),e.hasPreviewModes?r("div",{staticClass:"row"},[r("label",{staticClass:"uie-select-label",attrs:{for:"previewMode"}},[e._v("\n        "+e._s(e._f("localize")("settings.preview_mode"))+"\n      ")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.previewMode,expression:"previewMode"}],attrs:{id:"previewMode-select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.previewMode=t.target.multiple?r:r[0]}}},e._l(e.previewModeOptions,(function(t,a){return r("option",{key:a,domProps:{value:a,selected:e.previewMode===a}},[e._v("\n          "+e._s(t)+"\n        ")])})),0)]):e._e(),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"uie-select-label",attrs:{for:"hljs"}},[e._v("\n        "+e._s(e._f("localize")("settings.hljs"))+"\n      ")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.hljs,expression:"hljs"}],attrs:{id:"hljs-select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.hljs=t.target.multiple?r:r[0]}}},e._l(e.hljsOptions,(function(t){return r("option",{key:t,domProps:{value:t,selected:e.hljs===t}},[e._v("\n          "+e._s(e._f("titleize")(t))+"\n        ")])})),0)]),e._v(" "),e._m(0)])],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",{staticClass:"hljs",attrs:{lang:"html"}},[r("span",{staticClass:"hljs-tag"},[e._v("<"),r("span",{staticClass:"hljs-name"},[e._v("label")]),e._v(" "),r("span",{staticClass:"hljs-attr"},[e._v("for")]),e._v("="),r("span",{staticClass:"hljs-string"},[e._v('"name"')]),e._v(">")]),e._v("Name"),r("span",{staticClass:"hljs-tag"},[e._v("</"),r("span",{staticClass:"hljs-name"},[e._v("label")]),e._v(">")])])}],!1,null,"6fc520fe",null).exports}}]);