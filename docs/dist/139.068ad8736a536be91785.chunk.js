webpackJsonp([139],{1062:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("i-article",t._l(t.navigate.components,function(e){return i("div",{staticClass:"overview"},[i("h3",[t._v(t._s(e.title+" "+e.type))]),t._v(" "),i("Row",t._l(e.list,function(e){return i("i-col",{key:e.path,attrs:{span:t.span}},[i("router-link",{attrs:{to:e.path}},[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"overview-card-img"},[i("img",{attrs:{src:t.filePath+e.img}})])])],1)],1)}),1)],1)}),0)},a=[];n._withStripped=!0;var o={render:n,staticRenderFns:a};e.default=o},1158:function(t,e){},567:function(t,e,i){"use strict";function n(t){c||i(1158)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(914),o=i.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);var l=i(1062),r=i.n(l),c=!1,p=i(74),u=n,d=p(o.a,r.a,!1,u,null,null);d.options.__file="src/views/guide/overview.vue",e.default=d.exports},586:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={guide:[{title:"介绍",titleEn:"Introduction",path:"/docs/guide/introduce"},{title:"实践",titleEn:"Practice",path:"/docs/guide/case"},{title:"设计原则",titleEn:"Design Principles",path:"/docs/guide/design"},{title:"布局",titleEn:"Navigation Examples",path:"/docs/guide/layout"},{title:"参与贡献",titleEn:"Contributing Guide",path:"/docs/guide/standard"}],beforeComponents:[{title:"安装",titleEn:"Installation",path:"/docs/guide/install"},{title:"快速上手",titleEn:"Quick Start",path:"/docs/guide/start"},{title:"全局配置",titleEn:"Global Options",path:"/docs/guide/global"},{title:"国际化",titleEn:"Internationalization",path:"/docs/guide/i18n"},{title:"定制主题",titleEn:"Customize Theme",path:"/docs/guide/theme"},{title:"iView Loader",titleEn:"iView Loader",path:"/docs/guide/iview-loader"},{title:"在 Nuxt.js 中使用",titleEn:"Using in Nuxt.js",path:"https://dev.iviewui.com/articles/1024499044308881408",target:"_blank"},{title:"更新日志",titleEn:"Change Log",path:"/docs/guide/update"}],components:[{type:"Basic",title:"基础",list:[{title:"Color 色彩",path:"/components/color",img:"color.png",icon:"ios-color-fill-outline"},{title:"Font 字体",path:"/components/font",img:"font.png",icon:"ios-at-outline"},{title:"Button 按钮",path:"/components/button",img:"button.png",icon:"logo-youtube"},{title:"Icon 图标",path:"/components/icon",img:"icon.png",icon:"ios-heart-outline"}]},{type:"Layout",title:"布局",list:[{title:"Grid 栅格",path:"/components/grid",img:"grid.png",icon:"ios-grid-outline"},{title:"Layout 布局",path:"/components/layout",img:"layout-new.png",icon:"ios-browsers-outline"},{title:"Card 卡片",path:"/components/card",img:"card.png",icon:"ios-card-outline"},{title:"Collapse 折叠面板",path:"/components/collapse",img:"collapse.png",icon:"ios-albums-outline"},{title:"Split 面板分割",path:"/components/split",img:"split.png",icon:"ios-square-outline"},{title:"Divider 分割线",path:"/components/divider",img:"divider.png",icon:"ios-remove"},{title:"Cell 单元格",path:"/components/cell",img:"cell.png",icon:"ios-list-box-outline"}]},{type:"Navigation",title:"导航",list:[{title:"Menu 导航菜单",path:"/components/menu",img:"menu.png",icon:"ios-menu"},{title:"Tabs 标签页",path:"/components/tabs",img:"tabs.png",icon:"ios-more-outline"},{title:"Dropdown 下拉菜单",path:"/components/dropdown",img:"dropdown.png",icon:"md-arrow-dropdown"},{title:"Page 分页",path:"/components/page",img:"page.png",icon:"ios-book-outline"},{title:"Breadcrumb 面包屑",path:"/components/breadcrumb",img:"breadcrumb.png",icon:"ios-arrow-forward"},{title:"Badge 徽标数",path:"/components/badge",img:"badge.png",icon:"md-square"},{title:"Anchor 锚点",path:"/components/anchor",img:"anchor.png",icon:"md-link"},{title:"Steps 步骤条",path:"/components/steps",img:"steps.png",icon:"ios-checkmark-circle-outline"},{title:"LoadingBar 加载进度条",path:"/components/loading-bar",img:"loading-bar.png",icon:"ios-remove"}]},{type:"Form",title:"表单",list:[{title:"Input 输入框",path:"/components/input",img:"input.png",icon:"ios-create-outline"},{title:"Radio 单选框",path:"/components/radio",img:"radio.png",icon:"ios-radio-button-on"},{title:"Checkbox 多选框",path:"/components/checkbox",img:"checkbox.png",icon:"ios-checkbox-outline"},{title:"Switch 开关",path:"/components/switch",img:"switch.png",icon:"ios-switch"},{title:"Table 表格",path:"/components/table",img:"table.png",icon:"ios-grid"},{title:"Select 选择器",path:"/components/select",img:"select.png",icon:"ios-arrow-down"},{title:"AutoComplete 自动完成",path:"/components/auto-complete",img:"auto-complete.png",icon:"md-list"},{title:"Slider 滑块",path:"/components/slider",img:"slider.png",icon:"md-remove"},{title:"DatePicker 日期选择器",path:"/components/date-picker",img:"date-picker.png",icon:"ios-calendar-outline"},{title:"TimePicker 时间选择器",path:"/components/time-picker",img:"time-picker.png",icon:"ios-time-outline"},{title:"Cascader 级联选择",path:"/components/cascader",img:"cascader.png",icon:"ios-more-outline"},{title:"Transfer 穿梭框",path:"/components/transfer",img:"transfer.png",icon:"ios-swap"},{title:"InputNumber 数字输入框",path:"/components/input-number",img:"input-number.png",icon:"ios-calculator"},{title:"Rate 评分",path:"/components/rate",img:"rate.png",icon:"ios-star"},{title:"Upload 上传",path:"/components/upload",img:"upload.png",icon:"ios-cloud-upload-outline"},{title:"ColorPicker 颜色选择器",path:"/components/color-picker",img:"color-picker.png",icon:"ios-color-palette-outline"},{title:"Form 表单",path:"/components/form",img:"form.png",icon:"ios-list-box-outline"}]},{type:"View",title:"视图",list:[{title:"Alert 警告提示",path:"/components/alert",img:"alert.png",icon:"ios-information-circle-outline"},{title:"Message 全局提示",path:"/components/message",img:"message.png",icon:"ios-alert-outline"},{title:"Notice 通知提醒",path:"/components/notice",img:"notice.png",icon:"ios-notifications-outline"},{title:"Modal 对话框",path:"/components/modal",img:"modal.png",icon:"ios-text-outline"},{title:"Drawer 抽屉",path:"/components/drawer",img:"modal.png",icon:"md-list"},{title:"Tree 树形控件",path:"/components/tree",img:"tree.png",icon:"ios-git-network"},{title:"Tooltip 文字提示",path:"/components/tooltip",img:"tooltip.png",icon:"md-text"},{title:"Poptip 气泡提示",path:"/components/poptip",img:"poptip.png",icon:"ios-chatboxes-outline"},{title:"Progress 进度条",path:"/components/progress",img:"progress.png",icon:"ios-remove"},{title:"Avatar 头像",path:"/components/avatar",img:"avatar.png",icon:"ios-contact-outline"},{title:"Tag 标签",path:"/components/tag",img:"tag.png",icon:"md-pricetag"},{title:"Carousel 走马灯",path:"/components/carousel",img:"carousel.png",icon:"ios-film-outline"},{title:"Timeline 时间轴",path:"/components/timeline",img:"timeline.png",icon:"md-more"},{title:"Time 相对时间",path:"/components/time",img:"time.png",icon:"ios-clock-outline"}]},{type:"Chart",title:"图表",list:[{title:"Circle 进度环",path:"/components/circle",img:"circle.png",icon:"ios-radio-button-off"}]},{type:"Other",title:"其它",list:[{title:"Affix 图钉",path:"/components/affix",img:"affix.png",icon:"logo-pinterest"},{title:"BackTop 返回顶部",path:"/components/back-top",img:"back-top.png",icon:"ios-arrow-up"},{title:"Spin 加载中",path:"/components/spin",img:"spin.png",icon:"ios-loading"},{title:"Scroll 无限滚动",path:"/components/scroll",img:"scroll.png",icon:"ios-more"}]}],practice:[{title:"实践案例",titleEn:"Practical Cases",path:"/docs/practice/case"}],live:[{title:"最新课程",path:"/live"}]};e.default=n},591:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(111),a=function(t){return t&&t.__esModule?t:{default:t}}(n),o={env:a.default,filePath:"https://file.iviewui.com/file/",version:59,liveVersion:3};"development"===o.env&&(o.filePath="http://127.0.0.1:9800/overview/"),e.default=o},592:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{handleChange:function(t){"iview3.x"===t?window.location.href="https://www.iviewui.com":"iview-weapp"===t?(_hmt.push(["_trackEvent","menu-weapp","click"]),window.location.href="https://weapp.iviewui.com?from=iview"):"inmap"===t&&(_hmt.push(["_trackEvent","menu-inmap","click"]),window.location.href="http://inmap.talkingdata.com?from=iview")}}}},593:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(586),o=n(a),s=i(591),l=n(s),r=i(49),c=n(r),p=i(610),u=n(p);e.default={inject:["app"],components:{ApplicationMenu:u.default},props:{activeKey:String},data:function(){return{search:"",navigateList:[],liveDot:!1,currentActiveKey:this.activeKey,searchText:this.$t("index.search"),notFoundText:this.$t("index.notFound"),lang:this.$lang}},watch:{activeKey:function(t){this.currentActiveKey=t},currentActiveKey:function(t){this.$emit("on-change",t)}},methods:{handleSearch:function(t){var e=this;"en-US"===this.lang&&(t+="-en"),this.search="",this.$refs.select.setQuery(""),this.$nextTick(function(){setTimeout(function(){e.$router.push(t)},300)})},handleSelect:function(t){var e=this;if("dev"!==t){var i="zh-CN"===this.lang?"":"-en";"donate"===t?c.default.$emit("on-donate-show"):"github"===t?window.open("https://github.com/iview/iview"):"guide"===t?this.$router.push(o.default.guide[0].path+i):"component"===t?this.$router.push(o.default.beforeComponents[0].path+i):"practice"===t?this.$router.push(o.default.practice[0].path+i):"cli"===t?this.$router.push("/cli"+i):"live"===t?this.$router.push("/live"):"iview-loader"===t?this.$router.push("/docs/guide/iview-loader"+i):"iview-admin"===t?window.open("https://github.com/iview/iview-admin"):"iview-area"===t?window.open("https://github.com/iview/iview-area"):"iview-editor"===t&&window.open("https://github.com/iview/iview-editor"),this.$nextTick(function(){e.updateActiveNav()})}},updateActiveNav:function(){var t=["/docs/guide/install","/docs/guide/start","/docs/guide/i18n","/docs/guide/theme","/docs/guide/iview-loader","/overview","/docs/guide/update"],e=this.$route.path;e.indexOf("component")>-1||t.indexOf(e)>-1?this.currentActiveKey="component":e.indexOf("practice")>-1?this.currentActiveKey="practice":e.indexOf("live")>-1?this.currentActiveKey="live":this.currentActiveKey="guide"},handleChangeLang:function(){var t="zh-CN"===this.lang?"en-US":"zh-CN",e=this.$route.path.indexOf("-en")>-1?this.$route.path.split("-en")[0]:this.$route.path+"-en";c.default.$emit("on-change-lang",t,e)},handleVersion:function(t){1==t&&(window.location.href="http://v1.iviewui.com"),2==t&&(window.location.href="http://v2.iviewui.com")},handleGoToGitHub:function(){_hmt.push(["_trackEvent","menu-go-github","click"]),window.open("https://github.com/iview/iview")},handleGoToTwitter:function(){_hmt.push(["_trackEvent","menu-go-twitter","click"]),window.open("https://twitter.com/iViewUI")},handleGoToMenu:function(t){return"zh-CN"===this.lang?t:t+"-en"},handleToggleSetting:function(){this.app.handleOpenSetting()}},created:function(){this.lang=this.$lang;for(var t=[],e=0;e<o.default.components.length;e++)for(var i=0;i<o.default.components[e].list.length;i++)t.push(o.default.components[e].list[i]);this.navigateList=t;var n=window.localStorage.getItem("liveVersion");this.liveDot=!n||n<l.default.liveVersion}}},594:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(624),o=n(a),s=i(586),l=(n(s),i(611)),r=n(l),c=i(49),p=n(c);e.default={inject:["app"],components:{Navigate:o.default,navMenu:r.default},data:function(){return{list:[],need_api:!1,donate:!1,ask:!1,activeKey:"",lang:this.$lang,adCarousel:0,ad_index:this.app.ad_index}},methods:{handleModalClose:function(){this.donate=!1},handleAskClose:function(){this.ask=!1},updateActiveNav:function(){var t=["/docs/guide/install","/docs/guide/install-en","/docs/guide/start","/docs/guide/start-en","/docs/guide/i18n","/docs/guide/i18n-en","/docs/guide/theme","/docs/guide/theme-en","/docs/guide/iview-loader","/docs/guide/iview-loader-en","/overview","/overview-en","/docs/guide/update","/docs/guide/update-en","/docs/guide/global","/docs/guide/global-en"],e=this.$route.path;e.indexOf("component")>-1||t.indexOf(e)>-1?this.activeKey="component":e.indexOf("practice")>-1?this.activeKey="practice":e.indexOf("live")>-1?this.activeKey="live":this.activeKey="guide"},handleNavMenuChange:function(t){this.activeKey=t},handleClickLink:function(t){var e=document.getElementById(t).offsetTop;window.location.hash=t;var i=e+15;"API"===t&&(i-=150),window.scrollTo(0,i)},handleAsideAd:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_hmt.push(["_trackEvent",t,"click"]),e&&(this.ask=!0)},handleClickAsk:function(){_hmt.push(["_trackEvent","ask_issue_dev","click"])}},created:function(){this.lang=this.$lang},mounted:function(){var t=this;this.updateActiveNav();var e=this.$slots.default[0].elm.querySelectorAll(".example");if(e.length){this.need_api=!0;for(var i=0;i<e.length;i++){var n=e[i].querySelectorAll("header span a")[0].getAttribute("href").replace("#",""),a=e[i].querySelectorAll("header span a")[0].getAttribute("data-title").replace("#","");this.list.push({title:a,path:n})}}else{this.need_api=!1;for(var o=this.$slots.default[0].elm.querySelectorAll(".anchor"),s=0;s<o.length;s++){var l=o[s].querySelectorAll("h2")[0];if(l){var r=l.innerHTML,c=o[s].querySelectorAll("h2")[0].getAttribute("id");this.list.push({title:r,path:c})}}}p.default.$on("on-donate-show",function(){t.donate=!0})}}},595:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return Math.random()>.5?-1:1}Object.defineProperty(e,"__esModule",{value:!0});var o=i(586),s=n(o),l=i(591),r=n(l),c=i(49),p=n(c),u=i(187),d=n(u);e.default={inject:["app"],components:{adSend:d.default},props:{type:{type:[String,Number]}},data:function(){return{navigate:s.default,showDot:!1,activeKey:this.$route.path,lang:this.$lang,showAd:!1,adCarousel:0,adCarouselShow:!1}},computed:{carouselList:function(){return(this.app.adList4||[]).sort(a)}},methods:{handleDonate:function(){p.default.$emit("on-donate-show")},handleSelect:function(t){var e=this;"en-US"===this.lang&&(t+="-en"),this.$nextTick(function(){e.$router.push(t)})},handleAd:function(){_hmt.push(["_trackEvent","vue-juejin","click"]),window.open("https://juejin.im/welcome/frontend?utm_source=iview&utm_medium=banner&utm_content=huoyue&utm_campaign=q4_website")},handleAdBmqb:function(){_hmt.push(["_trackEvent","vue-bmqb","click"]),window.open("https://www.bmqb.com/a/jobs?from=iview")},handleBuy:function(t){"taobao"===t?window.open("https://detail.tmall.com/item.htm?id=559480603657"):"jd"===t?window.open("https://item.jd.com/12215519.html"):"video"===t?window.open("https://segmentfault.com/ls/1650000011074057"):"dangdang"===t&&window.open("http://product.dangdang.com/25180286.html")},handleGoToMenu:function(t){return"zh-CN"===this.lang?t:t+"-en"},handleAsideAd:function(t){_hmt.push(["_trackEvent",t,"click"])},handleChangeAdAffix:function(t){this.adCarousel=0,this.adCarouselShow=t}},created:function(){this.lang=this.$lang;var t="zh-CN"===this.lang?this.$route.path:this.$route.path.split("-en")[0];this.activeKey=t},mounted:function(){var t=window.localStorage.getItem("version");this.showDot=!t||t<r.default.version}}},604:function(t,e,i){t.exports=i.p+"e1cf12c07bf6458992569e67927d767e.png"},605:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Menu",{attrs:{mode:"horizontal","active-name":t.currentActiveKey},on:{"on-select":t.handleSelect}},[n("div",{staticClass:"wrapper-header-nav"},[n("router-link",{staticClass:"wrapper-header-nav-logo",attrs:{to:"/"}},[n("img",{attrs:{src:i(604)}})]),t._v(" "),n("ApplicationMenu"),t._v(" "),n("div",{staticClass:"wrapper-header-nav-search"},[n("i-select",{ref:"select",attrs:{filterable:"",placeholder:t.searchText,"not-found-text":t.notFoundText},on:{"on-change":t.handleSearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},t._l(t.navigateList,function(e){return n("i-option",{key:e.path,attrs:{value:e.path}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.title.split(" ")[0]))]],2)}),1)],1),t._v(" "),n("div",{staticClass:"wrapper-header-nav-list"},[n("Menu-item",{attrs:{name:"guide",to:t.handleGoToMenu("/docs/guide/introduce")}},[t._v("\n                "+t._s(t.$t("index.guide"))+"\n            ")]),t._v(" "),n("Menu-item",{attrs:{name:"component",to:t.handleGoToMenu("/docs/guide/install")}},[t._v("\n                "+t._s(t.$t("index.component"))+"\n            ")]),t._v(" "),"zh-CN"===t.lang?n("Menu-item",{attrs:{name:"live",to:t.handleGoToMenu("/live")}},[n("Badge",{attrs:{dot:t.liveDot,offset:[20,0]}},[t._v("\n                    "+t._s(t.$t("index.live"))+"\n                ")])],1):t._e(),t._v(" "),"zh-CN"===t.lang?n("Menu-item",{attrs:{name:"dev",to:"//dev.iviewui.com",target:"_blank"}},[t._v("\n                社区\n                ")]):t._e(),t._v(" "),n("Submenu",{attrs:{name:"ecosystem"}},[n("template",{slot:"title"},[t._v("\n                    "+t._s(t.$t("index.ecosystem"))+"\n                ")]),t._v(" "),n("Menu-item",{attrs:{name:"cli",to:t.handleGoToMenu("/cli")}},[t._v("\n                    "+t._s(t.$t("index.cli"))+"\n                ")]),t._v(" "),n("Menu-item",{attrs:{name:"iview-loader",to:t.handleGoToMenu("/docs/guide/iview-loader")}},[t._v("\n                    iView Loader\n                ")]),t._v(" "),n("Menu-item",{attrs:{name:"iview-admin"}},[t._v("\n                    iView Admin\n                ")]),t._v(" "),n("Menu-item",{attrs:{name:"iview-area"}},[t._v("\n                    iView Area\n                ")]),t._v(" "),n("Menu-item",{attrs:{name:"iview-editor"}},[t._v("\n                    iView Editor\n                ")])],2),t._v(" "),n("Select",{staticStyle:{width:"60px",margin:"0 10px"},attrs:{size:"small",value:"3"},on:{"on-change":t.handleVersion}},[n("Option",{attrs:{value:"3"}},[t._v("3.x")]),t._v(" "),n("Option",{attrs:{value:"2"}},[t._v("2.x")]),t._v(" "),n("Option",{attrs:{value:"1"}},[t._v("1.x")])],1),t._v(" "),n("ButtonGroup",{attrs:{size:"small"}},[n("Button",{attrs:{icon:"logo-github"},on:{click:t.handleGoToGitHub}}),t._v(" "),"zh-CN"!==t.lang?n("Button",{attrs:{icon:"logo-twitter"},on:{click:t.handleGoToTwitter}}):t._e(),t._v(" "),n("Button",{attrs:{icon:"ios-settings"},on:{click:t.handleToggleSetting}}),t._v(" "),n("Button",{on:{click:t.handleChangeLang}},["zh-CN"===t.lang?[t._v("EN")]:[t._v("中文")]],2)],1)],1)],1)])},a=[];n._withStripped=!0;var o={render:n,staticRenderFns:a};e.default=o},606:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"apps"},[i("Dropdown",{attrs:{transfer:"",trigger:"click"},on:{"on-click":t.handleChange}},[i("img",{staticClass:"apps-menu",attrs:{src:"https://file.iviewui.com/icon/application.png"}}),t._v(" "),i("Icon",{staticClass:"apps-arrow",attrs:{type:"ios-arrow-down"}}),t._v(" "),i("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[i("DropdownItem",{attrs:{name:"iview"}},[i("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/iview.png"}}),t._v(" "),i("span",{staticClass:"apps-name"},[t._v("iView")])]),t._v(" "),i("DropdownItem",{attrs:{name:"iview-weapp"}},[i("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/iview.png"}}),t._v(" "),i("span",{staticClass:"apps-name"},[t._v("iView Weapp")])]),t._v(" "),i("DropdownItem",{attrs:{name:"inmap"}},[i("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/inmap.png"}}),t._v(" "),i("span",{staticClass:"apps-name"},[t._v("inMap")])])],1)],1)],1)},a=[];n._withStripped=!0;var o={render:n,staticRenderFns:a};e.default=o},607:function(t,e){},608:function(t,e){},609:function(t,e,i){t.exports=i.p+"2ecd3b0452aa197097d5131afacab7b8.png"},610:function(t,e,i){"use strict";function n(t){c||i(608)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(592),o=i.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);var l=i(606),r=i.n(l),c=!1,p=i(74),u=n,d=p(o.a,r.a,!1,u,null,null);d.options.__file="src/components/applications.vue",e.default=d.exports},611:function(t,e,i){"use strict";function n(t){c||i(607)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(593),o=i.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);var l=i(605),r=i.n(l),c=!1,p=i(74),u=n,d=p(o.a,r.a,!1,u,null,null);d.options.__file="src/components/menu.vue",e.default=d.exports},612:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigate"},["zh-CN"===t.lang?[t._l(t.app.adList1,function(e){return n("a",{key:e.id,staticClass:"asd asd-mb",attrs:{href:e.link,target:"_blank"},on:{click:function(i){t.handleAsideAd(e.id)}}},[n("div",{staticClass:"asd-main"},[n("img",{attrs:{src:e.img}})])])}),t._v(" "),n("Affix",{staticClass:"asd-affix",attrs:{"offset-top":64},on:{"on-change":t.handleChangeAdAffix}},[t.app.adList4.length&&t.adCarouselShow?n("Carousel",{attrs:{autoplay:"","autoplay-speed":5e3,"radius-dot":"",arrow:"never"},model:{value:t.adCarousel,callback:function(e){t.adCarousel=e},expression:"adCarousel"}},t._l(t.carouselList,function(e){return n("CarouselItem",{key:e.id},[n("a",{staticClass:"asd asd-mb",attrs:{href:e.link,target:"_blank"},on:{click:function(i){t.handleAsideAd(e.id)}}},[n("div",{staticClass:"asd-main asd-main-no-opacity"},[n("img",{attrs:{src:e.img}})])])])}),1):t._e()],1)]:t._e(),t._v(" "),"guide"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey}},t._l(t.navigate.guide,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path)}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]],2)}),1):t._e(),t._v(" "),"component"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey}},[t._l(t.navigate.beforeComponents,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path),target:e.target}},["更新日志"!==e.title?["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]]:t._e(),t._v(" "),"更新日志"===e.title?[n("Badge",{attrs:{dot:t.showDot}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]],2)]:t._e()],2)}),t._v(" "),n("div",{staticClass:"navigate-group"},[t._v(t._s(t.$t("index.component")))]),t._v(" "),t._l(t.navigate.components,function(e){return n("Menu-group",{key:e.type,attrs:{title:"zh-CN"===t.lang?e.title:e.type}},t._l(e.list,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path)}},[n("i",{staticClass:"ivu-icon",class:"ivu-icon-"+e.icon}),t._v(" "),"zh-CN"===t.lang?[t._v("\n                    "+t._s(e.title.split(" ")[0])+"\n                    "),n("span",{staticClass:"navigate-group-span"},[t._v(t._s(e.title.split(" ")[1]))])]:[t._v(t._s(e.title.split(" ")[0]))]],2)}),1)})],2):t._e(),t._v(" "),"practice"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey}},t._l(t.navigate.practice,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path)}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]],2)}),1):t._e(),t._v(" "),"live"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey}},t._l(t.navigate.live,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path)}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]],2)}),1):t._e(),t._v(" "),n("Modal",{attrs:{width:"900",title:"《Vue.js 实战》现已开售","footer-hide":""},model:{value:t.showAd,callback:function(e){t.showAd=e},expression:"showAd"}},[n("div",{staticClass:"i-article"},[n("Row",[n("Col",{attrs:{span:"10"}},[n("img",{staticStyle:{display:"block",width:"90%",margin:"0 auto"},attrs:{src:i(622)}})]),t._v(" "),n("Col",{attrs:{span:"14"}},[n("div",{staticStyle:{padding:"32px"}},[n("Alert",[t._v("\n                            《Vue.js 实战》\n                            "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",{staticStyle:{"margin-top":"6px"}},[t._v("本书由 Vue.js 作者 "),n("strong",[t._v("尤雨溪")]),t._v(" 作推荐序，TalkingData 研发副总裁马骥、W3cplus.com 站长 大漠、在线回声前端技术专家 justjavac（迷渡）、laravel-china.org 站长 Summer 联合推荐。")]),t._v(" "),n("p",{staticStyle:{"margin-top":"6px"}},[t._v("作者：TalkingData 可视化架构师 & iView 作者 梁灏（Aresn）")]),t._v(" "),n("p",{staticStyle:{"margin-top":"6px"}},[t._v("图书介绍：本书以 Vue.js 2.0 为基础，以项目实战的方式来引导读者渐进式学习 Vue.js。通过本书的学习，读者能够掌握 Vue.js 框架主要 API 的使用方法、自定义指令、组件开发、单文件组件、Render 函数、使用 Webpack 开发可复用的单页面富应用等。本书特点是示例丰富，侧重实战，适用于刚接触或即将接触 Vue.js 的开发者，也适用于对 Vue.js 有过开发经验，但需要进一步提升的开发者。")])])]),t._v(" "),n("div",{staticStyle:{"margin-top":"12px"}},[n("Row",{attrs:{gutter:16}},[n("i-col",{attrs:{span:"8"}},[n("Button",{attrs:{icon:"ios-cart",type:"warning",size:"large",long:""},on:{click:function(e){t.handleBuy("taobao")}}},[t._v("天猫购买")])],1),t._v(" "),n("i-col",{attrs:{span:"8"}},[n("Button",{attrs:{icon:"ios-cart",type:"error",size:"large",long:""},on:{click:function(e){t.handleBuy("jd")}}},[t._v("京东购买")])],1),t._v(" "),n("i-col",{attrs:{span:"8"}},[n("Button",{attrs:{icon:"ios-cart",type:"info",size:"large",long:""},on:{click:function(e){t.handleBuy("dangdang")}}},[t._v("当当购买")])],1)],1)],1)],1)])],1)],1)])],2)},a=[];n._withStripped=!0;var o={render:n,staticRenderFns:a};e.default=o},613:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper-header"},[n("nav-menu",{attrs:{"active-key":t.activeKey},on:{"on-change":t.handleNavMenuChange}})],1),t._v(" "),n("div",{staticClass:"wrapper-container"},[n("Row",[n("i-col",{staticClass:"wrapper-navigate",attrs:{span:"4"}},[n("Navigate",{attrs:{type:t.activeKey}})],1),t._v(" "),n("i-col",{attrs:{span:"17"}},[n("div",{staticClass:"wrapper-content ivu-article"},[t._t("default")],2)]),t._v(" "),n("i-col",{attrs:{span:"3"}},[n("Affix",{attrs:{"offset-top":75}},[t.list.length?n("div",{staticClass:"catalogue"},[n("Anchor",{attrs:{"show-ink":""}},[t._l(t.list,function(t){return n("AnchorLink",{key:t.path,attrs:{href:"#"+t.path,title:t.title}})}),t._v(" "),t.need_api?n("AnchorLink",{attrs:{"scroll-offset":140,href:"#API",title:"API"}}):t._e()],2)],1):t._e(),t._v(" "),"zh-CN"===t.lang?[n("div",{staticStyle:{"margin-top":"20px"}}),t._v(" "),t._l(t.app.adList2,function(e){return n("a",{key:e.id,staticClass:"wrapper-aside wrapper-aside-no-padding",attrs:{href:e.link,target:"_blank"},on:{click:function(i){t.handleAsideAd(e.id)}}},[n("img",{attrs:{src:e.img}})])})]:t._e()],2)],1)],1)],1)]),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-main"},[n("Row",[n("i-col",{attrs:{span:"5"}},[n("h4",[n("Icon",{attrs:{type:"logo-github"}}),t._v("\n                        GitHub\n                    ")],1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/iview/iview",target:"_blank"}},[t._v("iView")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/iview/iview-cli",target:"_blank"}},[t._v("iView Cli")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/iview/iview-admin",target:"_blank"}},[t._v("iView Admin")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/iview/iview-doc",target:"_blank"}},[t._v("iView Doc")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/iview/iview-project",target:"_blank"}},[t._v("iView Project")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/iview/vue-cli-plugin-iview",target:"_blank"}},[t._v("iView Plugin")])])])]),t._v(" "),n("i-col",{attrs:{span:"5"}},[n("h4",[n("Icon",{attrs:{type:"ios-link"}}),t._v("\n                        "+t._s(t.$t("index.links"))+"\n                    ")],1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.talkingdata.com/",target:"_blank"}},[t._v("TalkingData")]),t._v(" - "+t._s(t.$t("index.td"))+"\n                        ")]),t._v(" "),n("li",[n("a",{attrs:{href:"http://mi.talkingdata.com/",target:"_blank"}},[t._v("Marketing Intelligence")]),t._v(" - "+t._s(t.$t("index.td_mi"))+"\n                        ")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/TalkingData/inmap/",target:"_blank"}},[t._v("inMap")]),t._v(" - "+t._s(t.$t("index.inmap"))+"\n                        ")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/TalkingData/Fregata",target:"_blank"}},[t._v("Fregata")]),t._v(" - "+t._s(t.$t("index.Fregata"))+"\n                        ")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/TalkingData/Myna",target:"_blank"}},[t._v("Myna")]),t._v(" - "+t._s(t.$t("index.Myna"))+"\n                        ")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/TalkingData/owl",target:"_blank"}},[t._v("OWL")]),t._v(" - "+t._s(t.$t("index.OWL"))+"\n                        ")])])]),t._v(" "),n("i-col",{attrs:{span:"5",offset:"2"}},[n("h4",[n("Icon",{attrs:{type:"ios-chatbubbles"}}),t._v("\n                        "+t._s(t.$t("index.community"))+"\n                    ")],1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/iview/iview/issues",target:"_blank"}},[t._v(t._s(t.$t("index.feedback")))])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.iviewui.com/new-issue",target:"_blank"}},[t._v(t._s(t.$t("index.bug")))])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/iview/iview",target:"_blank"}},[t._v(t._s(t.$t("index.chat")))])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://segmentfault.com/t/iview",target:"_blank"}},[t._v("SegmentFault")])])])]),t._v(" "),n("i-col",{attrs:{span:"5",offset:"2"}},[n("div",{staticClass:"footer-aside"},[n("div",{staticClass:"footer-logo"},[n("img",{attrs:{src:i(609)}})]),t._v(" "),n("div",{staticClass:"footer-author"},[n("a",{attrs:{href:"https://www.maoyun.tv/?ref=iview",target:"_blank"}},[n("img",{attrs:{src:i(620)}})])]),t._v(" "),n("div",{staticClass:"footer-version"},[n("p",[t._v("提供 CDN 赞助")])])])])],1)],1)]),t._v(" "),n("Modal",{attrs:{title:"成为 iView 赞助商",width:"600","class-name":"vertical-center-modal"},on:{"on-ok":t.handleModalClose,"on-cancel":t.handleModalClose},model:{value:t.donate,callback:function(e){t.donate=e},expression:"donate"}},[n("div",{staticClass:"ivu-article"},[n("p",[t._v("如果您有品牌推广、活动推广、招聘推广、社区合作的需求，欢迎联系我们。")]),t._v(" "),n("p",[t._v("联系邮箱 "),n("a",{attrs:{href:"mailto:admin@aresn.com"}},[t._v("admin@aresn.com")]),t._v(" 咨询。")]),t._v(" "),n("p",[t._v("位置如下图所示：")]),t._v(" "),n("div",[t.donate?n("Carousel",{attrs:{autoplay:"","autoplay-speed":5e3,dots:"outside"},model:{value:t.adCarousel,callback:function(e){t.adCarousel=e},expression:"adCarousel"}},[n("CarouselItem",[n("div",{staticClass:"demo-carousel",staticStyle:{height:"300px"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:i(617)}})])]),t._v(" "),n("CarouselItem",[n("div",{staticClass:"demo-carousel",staticStyle:{height:"300px"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:i(619)}})])]),t._v(" "),n("CarouselItem",[n("div",{staticClass:"demo-carousel",staticStyle:{height:"300px"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:i(618)}})])])],1):t._e()],1)])]),t._v(" "),n("Modal",{attrs:{title:"免费加入 iView 官方QQ群参与讨论","class-name":"vertical-center-modal"},model:{value:t.ask,callback:function(e){t.ask=e},expression:"ask"}},[n("div",{staticClass:"ivu-article"},[n("p",[t._v("免费加入官方QQ讨论群，交流 iView 技术问题。")]),t._v(" "),n("p",[t._v("群号："),n("strong",[t._v("71434987")])]),t._v(" "),n("p",[t._v("二维码：")]),t._v(" "),n("p",[n("img",{staticStyle:{display:"block",width:"50%",margin:"0 auto"},attrs:{src:i(621)}})]),t._v(" "),n("p",[n("Alert",{attrs:{"show-icon":""}},[t._v("仅限开发者加入，请勿讨论与技术无关的问题，比如发招聘信息等。")])],1)])]),t._v(" "),"zh-CN"===t.lang?n("a",{staticClass:"ask-question",attrs:{href:"https://dev.iviewui.com/issues",target:"_blank"},on:{click:t.handleClickAsk}},[n("Icon",{attrs:{type:"ios-help-circle",size:"14"}}),t._v(" "),n("p",[t._v("提问")])],1):t._e()],1)},a=[];n._withStripped=!0;var o={render:n,staticRenderFns:a};e.default=o},614:function(t,e){},615:function(t,e){},616:function(t,e){},617:function(t,e,i){t.exports=i.p+"94416d41087844182891022a115a01e3.png"},618:function(t,e,i){t.exports=i.p+"80c8e17284316dc453eba1dd3a890461.png"},619:function(t,e,i){t.exports=i.p+"f282bbb92addcd518c9f16f335282303.png"},620:function(t,e,i){t.exports=i.p+"03bef374939110930f4388ff6733c24f.png"},621:function(t,e,i){t.exports=i.p+"7f551d020ba6ef5dcf75a7bd8cf3fac0.png"},622:function(t,e,i){t.exports=i.p+"95627fb77ea1c0e6d51d75cd2d63ccb9.png"},623:function(t,e,i){"use strict";function n(t){c||i(616)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(594),o=i.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);var l=i(613),r=i.n(l),c=!1,p=i(74),u=n,d=p(o.a,r.a,!1,u,null,null);d.options.__file="src/components/article.vue",e.default=d.exports},624:function(t,e,i){"use strict";function n(t){c||(i(615),i(614))}Object.defineProperty(e,"__esModule",{value:!0});var a=i(595),o=i.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);var l=i(612),r=i.n(l),c=!1,p=i(74),u=n,d=p(o.a,r.a,!1,u,"data-v-39279dfe",null);d.options.__file="src/components/navigate.vue",e.default=d.exports},914:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(591),o=n(a),s=i(586),l=n(s),r=i(623),c=n(r);e.default={components:{iArticle:c.default},props:{},data:function(){return{navigate:l.default,filePath:o.default.filePath,span:8}},computed:{},mounted:function(){this.updateSpin(),window.addEventListener("resize",this.updateSpin,!1)},beforeDestroy:function(){window.removeEventListener("resize",this.updateSpin,!1)},methods:{updateSpin:function(){var t=document.body.clientWidth;this.span=t>1440?6:8}}}}});