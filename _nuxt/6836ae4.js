(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(t,e,n){},102:function(t,e,n){},103:function(t,e,n){},104:function(t,e,n){},151:function(t,e,n){"use strict";n.r(e);var l=n(43),r=n(154),o={components:{pageSection:n(42).default,logoShort:r.default,primaryButton:l.default},props:{menu:{type:Array,default:function(){return[]}},social:{type:Array,default:function(){return[]}}}},c=(n(273),n(4)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",{staticClass:"bg-gray-900 md:py-24 text-white p-4"},[n("div",{staticClass:"container mx-auto h-full"},[n("div",{staticClass:"flex flex-col h-full"},[n("div",{staticClass:"footer-jumbotron my-24"},[n("div",{staticClass:"font-light"},[n("h2",{staticClass:"text-4xl md:text-6xl font-extra-light mb-0 leading-none"},[t._v("\n            We Are\n          ")]),t._v(" "),n("p",{staticClass:"lg:text-200 text-6xl font-extra-light leading-tight mb-10"},[t._v("\n            Ready\n          ")])]),t._v(" "),n("primary-button",{attrs:{href:"#"}},[t._v("\n          Lets talk\n        ")])],1),t._v(" "),n("div",{staticClass:"footer-nav my-auto font-light leading-8"},[n("div",{staticClass:"flex flex-wrap flex-row"},[n("div",{staticClass:"w-full md:w-1/4"},[n("logo-short")],1),t._v(" "),n("div",{staticClass:"md:w-1/4"}),t._v(" "),n("div",{staticClass:"md:w-1/6 w-1/2 py-6 md:py-0"},[n("ul",{attrs:{id:"footer-menu"}},t._l(t.menu,(function(e,i){return n("li",{key:i},[n("nuxt-link",{attrs:{to:e.link}},[t._v("\n                  "+t._s(e.text)+"\n                ")])],1)})),0)]),t._v(" "),n("div",{staticClass:"md:w-1/6 py-6 w-1/2"},[n("ul",t._l(t.social,(function(e,i){return n("li",{key:i},[n("a",{class:"footer-social "+e.type,attrs:{href:e.link}},[t._v(t._s(e.text))])])})),0)]),t._v(" "),n("div",{staticClass:"md:w-1/4 pt-6"},[n("p",[n("span",{staticClass:"mr-4"},[t._v("T:")]),t._v(" "),n("a",{attrs:{href:"tel:081213657170"}},[t._v("081213657170")])]),t._v(" "),n("p",[n("span",{staticClass:"md:mr-4"},[t._v("E:")]),t._v(" "),n("a",{attrs:{href:"mailto:hello@meridiastudio.com"}},[t._v("hello@meridiastudio.com")])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PrimaryButton:n(43).default,LogoShort:n(154).default,PageSection:n(42).default})},152:function(t,e,n){"use strict";n.r(e);n(34);var l={components:{logo:n(153).default},props:{height:{type:String,default:"h-20"},menu:{type:Array,default:function(){return[]}},fadeUp:{type:Boolean,default:!1}},data:function(){return{showNav:!1,navBlock:""}},computed:{bgColor:function(){return"dark"===this.$store.state.headerTheme?"bg-gray-900":"bg-white"},textColor:function(){return"dark"===this.$store.state.headerTheme?"text-white":"text-gray-900"},mobileNavToggleColor:function(){return"dark"===this.$store.state.headerTheme?"bg-white":"bg-gray-900"}},methods:{toggleNav:function(){var t=this;this.showNav?(this.showNav=!1,setTimeout((function(){t.navBlock=""}),500)):(this.navBlock="flex",setTimeout((function(){t.showNav=!0}),100))},hideNav:function(){var t=this;this.showNav=!1,setTimeout((function(){t.navBlock=""}),500)}}},r=(n(272),n(4)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{class:"nav-wrapper flex z-50 "+t.bgColor+" fixed md:relative inset-x-0 z-100 h-20 items-center px-3",style:{top:t.fadeUp&&!t.showNav?"-80px":"0"}},[n("div",{staticClass:"w-full container relative mx-auto"},[n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"lg:w-1/4 xl:w-1/5"},[n("div",{staticClass:"flex items-center"},[n("nuxt-link",{staticClass:"block lg:mr-4",attrs:{to:"/"}},[n("logo",{class:t.textColor+" "+(t.showNav?"opacity-0":"opacity-100")+" transition duration-500 ease-in-out h-10"})],1)],1)]),t._v(" "),n("div",{staticClass:"ml-auto"},[n("div",{class:"nav-content "+(t.showNav?"active":"")+" "+t.navBlock+" fixed md:static "+t.bgColor+" pt-8 md:pt-0 w-full"},[n("ul",{class:t.textColor+" flex flex-col md:flex-row font-light",attrs:{id:"main-menu"}},t._l(t.menu,(function(e,i){return n("li",{key:i},[n("nuxt-link",{attrs:{to:e.link},on:{click:t.toggleNav}},[t._v("\n                  "+t._s(e.text)+"\n                ")])],1)})),0)]),t._v(" "),n("div",{staticClass:"nav-toggle block md:hidden px-3",on:{click:t.toggleNav}},t._l(3,(function(i){return n("span",{key:i,class:t.mobileNavToggleColor+" block"})})),0)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(153).default})},153:function(t,e,n){"use strict";n.r(e);var l=n(4),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 182.086 55.112"}},[e("path",{staticClass:"fill-current",attrs:{"fill-rule":"evenodd",d:"M60.77.948H40.032q-6.3 8.152-12.6 16.3l18.591 21.728L33.55 55.112h20.738L66.89 38.8 48.3 17.08zm97.944 32.774v-.356H156.9v.356h.716v1.857h.373v-1.857zm2.741 1.857v-2.213h-.51l-.708 1.69-.716-1.69h-.5v2.213h.365v-1.621l.682 1.621h.322l.691-1.63v1.63zM84.944 18.98l-.017.047-5.76-13.85C77.416.969 76.884.952 72.595.952h-1.609V25.98h4.658V8.578l7.2 17.4h4.2l7.2-17.4v17.4H98.9V.952h-1.608c-4.285 0-4.817.017-6.571 4.225l-5.76 13.85zm20.914-3.659a3.76 3.76 0 0 1 3.882-3.427c2.685 0 3.813 1.694 3.886 3.427zm8.227 4.517a3.838 3.838 0 0 1-3.955 2.646 4.227 4.227 0 0 1-4.375-3.955h12.422c0-.069.073-.776.073-1.445 0-5.576-3.213-9-8.578-9-4.448 0-8.544 3.6-8.544 9.14 0 5.859 4.2 9.282 8.969 9.282A7.822 7.822 0 0 0 118 21zM156.934.425h-4.624v9.917c-.493-.918-1.9-2.153-4.907-2.153-4.9 0-8.33 3.989-8.33 9.072 0 5.259 3.53 9.145 8.471 9.145a5.447 5.447 0 0 0 4.873-2.436 12.264 12.264 0 0 0 .176 2.012h4.482c-.069-.708-.142-1.977-.142-3.144zM143.8 17.26c0-3.105 1.9-4.873 4.306-4.873s4.272 1.733 4.272 4.838c0 3.14-1.87 4.975-4.272 4.975-2.466 0-4.306-1.835-4.306-4.94zm20.49 8.72V8.613h-4.69V25.98zm-5.255-23.05a2.9 2.9 0 1 0 2.9-2.93 2.9 2.9 0 0 0-2.9 2.93zm7.485 18.319c0 2.719 2.26 5.224 5.966 5.224A5.807 5.807 0 0 0 177.6 23.9a11.64 11.64 0 0 0 .176 2.085h4.306a19.286 19.286 0 0 1-.21-2.754v-8.549c0-3.491-2.05-6.6-7.553-6.6-4.662 0-7.167 3-7.45 5.718l4.165.879a3.084 3.084 0 0 1 3.32-2.822c1.977 0 2.93 1.025 2.93 2.26 0 .6-.317 1.094-1.308 1.235l-4.268.635c-2.893.428-5.188 2.156-5.188 5.262zm6.953 1.729a2.038 2.038 0 0 1-2.26-2.012 2.192 2.192 0 0 1 2.153-2.187l3.92-.6v.776c0 3.07-1.836 4.022-3.813 4.022zM84.759 36.094l2.226-2.08a7.191 7.191 0 0 0-2.471-3.032 9.149 9.149 0 0 0-5.271-1.463 8.412 8.412 0 0 0-5.087 1.681 7.316 7.316 0 0 0-2.745 4.032 6.2 6.2 0 0 0-.18 1.488c0 3.659 2.5 5.863 5.911 6.605l3.564.776a4.743 4.743 0 0 1 3.727 2.861 3.833 3.833 0 0 1 .21 1.261 4.008 4.008 0 0 1-.313 1.583 3.964 3.964 0 0 1-1.784 1.922 6.933 6.933 0 0 1-3.3.733 5.937 5.937 0 0 1-5.537-3.127 6.426 6.426 0 0 1-.648-1.973L70.6 49.656a7.972 7.972 0 0 0 2.818 3.74 9.845 9.845 0 0 0 5.855 1.711 9.335 9.335 0 0 0 5.426-1.6 6.993 6.993 0 0 0 2.741-3.839 6.557 6.557 0 0 0 .232-1.729 6.474 6.474 0 0 0-.733-3.071 7.94 7.94 0 0 0-5.563-3.714l-3.744-.811a3.882 3.882 0 0 1-3.406-3.877 4.056 4.056 0 0 1 .442-1.857 5.054 5.054 0 0 1 4.641-2.556 5.551 5.551 0 0 1 4.028 1.536 5.427 5.427 0 0 1 1.422 2.505zm9.6-3.363h-2.544v2.5a2.618 2.618 0 0 1-2.857 2.869h-.673v2.5h3.247v9.565c0 2.831 1.626 4.589 4.482 4.589a8.569 8.569 0 0 0 1.407-.116c.193-.034.407-.077.6-.133v-2.344a6.551 6.551 0 0 1-1.055.086c-1.784 0-2.612-.8-2.612-2.574V40.6h3.667v-2.5h-3.663zM112.4 54.58h2.685a28.45 28.45 0 0 1-.146-2.9V38.1h-2.819v9.985c0 2.711-1.45 4.589-4.272 4.589s-4.1-2.012-4.1-4.624V38.1h-2.822v10.441c0 3.693 2.273 6.567 6.108 6.567a5.3 5.3 0 0 0 4.791-2.445l.468-.9v1.012c0 .227.009.459.017.686.013.253.03.51.051.763.016.12.025.236.039.356zm18.71 0h2.728a26.28 26.28 0 0 1-.146-2.9V29.518h-2.788V41.5l-.476-1.162a4.03 4.03 0 0 0-1.587-1.827 6.24 6.24 0 0 0-3.376-.875 7.307 7.307 0 0 0-4.6 1.574 8.969 8.969 0 0 0-3.2 7.073 9.117 9.117 0 0 0 2.887 7.021 7.394 7.394 0 0 0 4.911 1.733 5.943 5.943 0 0 0 3.187-.871 5.147 5.147 0 0 0 1.853-2.029l.468-.939v1.33c0 .455.021.914.06 1.364.026.229.047.461.082.688zm-10.551-8.3a6.366 6.366 0 0 1 2.393-5.349 4.947 4.947 0 0 1 2.869-.866 4.808 4.808 0 0 1 2.908.909 6.348 6.348 0 0 1 2.209 5.233c0 2.1-.691 4.4-2.518 5.619a4.708 4.708 0 0 1-2.638.772 4.855 4.855 0 0 1-3.032-.982 6.611 6.611 0 0 1-2.189-5.331zm20.237 8.3V38.1h-2.792v16.48zm-3.53-23.157a2.134 2.134 0 1 0 2.115-2.153 2.117 2.117 0 0 0-2.113 2.153zm14.866 6.142c-5.023 0-8.437 3.822-8.437 8.754s3.393 8.789 8.437 8.789 8.437-3.843 8.437-8.789-3.412-8.754-8.435-8.754zm0 15.072a5.445 5.445 0 0 1-2.269-.48 5.249 5.249 0 0 1-2.355-2.132 7.895 7.895 0 0 1-.009-7.373 5.225 5.225 0 0 1 2.333-2.123 5.6 5.6 0 0 1 4.6 0 5.225 5.225 0 0 1 2.333 2.123 7.895 7.895 0 0 1-.009 7.373 5.249 5.249 0 0 1-2.355 2.132 5.445 5.445 0 0 1-2.267.48zM130.89 8.54a10.919 10.919 0 0 0-1.094-.069c-1.484 0-3.882.425-4.941 2.719V8.613H120.3V25.98h4.7v-7.944c0-3.74 2.08-4.907 4.482-4.907a7.267 7.267 0 0 1 1.411.142zm6.21 17.44V8.613h-4.7V25.98zm-5.263-23.05a2.9 2.9 0 1 0 2.9-2.93 2.9 2.9 0 0 0-2.9 2.93zM33.34.948q-10.4.006-20.738 0Q6.3 9.1 0 17.255l18.594 21.721L6.121 55.112h20.738L39.461 38.8l-18.59-21.72zM13.734 17.255l18.594 21.721-8.175 10.577-6.747.017 8.325-10.77L7.137 17.08l8.171-10.573 6.747-.017zm27.43 0l18.593 21.721-8.175 10.577-6.747.017 8.321-10.77-18.589-21.72 8.171-10.573 6.747-.017z"}})])}),[],!1,null,null,null);e.default=component.exports},154:function(t,e,n){"use strict";n.r(e);var l=n(4),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"64.379",height:"57.213",viewBox:"0 0 64.379 57.213"}},[e("path",{attrs:{fill:"#fefefe",d:"M61.163.395V0h-2.088v.395h.846V2.6h.395V.395zm-3.1 5.022h-4.235c-3.1.056-6.15.056-9.2.056H43.22v-.056h-2.539c-.79 0-1.636.056-2.426.056-4.006 5.191-8.012 10.382-12.075 15.573l17.774 20.707-11.906 15.46h4.232c3.1 0 4.457-.056 7.5-.056h1.42v.056h6.658c4.006-5.247 8.069-10.438 12.075-15.629L46.154 20.877zm-26.18 0h-4.292c-3.047.056-6.094.056-9.2.056h-1.408l.056-.056H14.5c-.846 0-1.636.056-2.483.056L0 21.046l17.773 20.707-11.905 15.46H10.1c3.047 0 4.4-.056 7.5-.056h1.411l-.056.056h6.714c4.006-5.247 8.012-10.438 12.018-15.629l-17.77-20.707zM13.147 21.046l17.717 20.707-7.786 10.1-6.432.056L24.6 41.584 6.827 20.877l7.786-10.1 6.432-.056zm26.18 0L57.1 41.753l-7.843 10.1-6.432.056 7.956-10.325-17.773-20.707 7.843-10.1 6.432-.056zM64.379 2.6V0h-.621l-.79 1.975L62.122 0h-.564v2.6h.395V.677l.79 1.918h.395l.79-1.918V2.6z"}})])}),[],!1,null,null,null);e.default=component.exports},157:function(t,e,n){"use strict";var l=n(0),r=n(229);l.a.use(r.a)},158:function(t,e,n){"use strict";var l=n(0),r=n(227),o=n.n(r);l.a.use(o.a)},230:function(t,e,n){"use strict";n(34);var l=n(152),r=n(151),o=n(74),c={components:{headerSection:l.default,footerSection:r.default,error:o.default},data:function(){return{pageYOffset:0,recordingScroll:!0,lastScroll:0,error:!1,menu:[{text:"Projects",link:"/projects"},{text:"Capabilities",link:"/capabilities"},{text:"Contacts",link:"/contact"}],social:[{text:"Instagram",type:"instagram",link:"https://www.instagram.com/meridiastudio/"},{text:"Behance",type:"behance",link:"https://www.behance.net/meridiastudio"},{text:"Dribble",type:"dribble",link:"https://dribbble.com/meridiastudio"}]}},computed:{headerHeight:function(){return this.pageYOffset>100?"h-20":"h-24"},fadeUp:function(){return this.pageYOffset>100&&this.pageYOffset>=this.lastScroll}},watch:{$route:function(t){this.$refs.headerMenu.hideNav()}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){this.error=!1},methods:{onError:function(code){this.error=404},handleScroll:function(){var t=this;this.recordingScroll&&(this.recordingScroll=!1,this.lastScroll=window.pageYOffset,setTimeout((function(){t.recordingScroll=!0}),500)),this.pageYOffset=window.pageYOffset}}},f=(n(274),n(4)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header-section",{ref:"headerMenu",attrs:{height:t.headerHeight,"fade-up":t.fadeUp,menu:t.menu}}),t._v(" "),n("div",{staticClass:"page container mx-auto"},[t.error?n("error",{attrs:{title:404==t.error?"Page Not Found":"An Error has Occured"}}):n("Nuxt",{on:{error:t.onError}})],1),t._v(" "),n("footer-section",{attrs:{menu:t.menu,social:t.social}})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{HeaderSection:n(152).default,Error:n(74).default,FooterSection:n(151).default})},232:function(t,e,n){n(233),t.exports=n(234)},267:function(t,e,n){"use strict";var l=n(99);n.n(l).a},268:function(t,e,n){"use strict";var l=n(100);n.n(l).a},271:function(t,e,n){},272:function(t,e,n){"use strict";var l=n(102);n.n(l).a},273:function(t,e,n){"use strict";var l=n(103);n.n(l).a},274:function(t,e,n){"use strict";var l=n(104);n.n(l).a},275:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return r}));var l=function(){return{headerTheme:"dark"}},r={SET_HEADER_THEME:function(t,e){t.headerTheme=e}}},33:function(t,e,n){"use strict";var l={components:{errorSection:n(74).default},props:{error:{type:Object,default:function(){return{}}}},layout:"default"},r=n(4),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("error-section",{attrs:{title:404===this.error.statusCode?"Page Not Found":"An Error Has Been Ocurred"}})],1)}),[],!1,null,null,null);e.a=component.exports},42:function(t,e,n){"use strict";n.r(e);n(267);var l=n(4),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("section",[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},43:function(t,e,n){"use strict";n.r(e);n(268);var l=n(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"bg-gradient-to-r primary-button from-indigo-600 to-indigo-800 overflow-hidden mx-auto py-4 rounded-3rem px-12 relative mt-8",on:{click:function(e){return t.$emit("click",e)}}},[n("span",{staticClass:"text-white relative text-sm md:text-lg font-medium",staticStyle:{"z-index":"2"}},[t._t("default")],2),t._v(" "),n("span",{staticClass:"bg-gradient-to-l from-indigo-600 opacity-0 to-indigo-800 inset-0 rounded-3rem transition-all opacity-0 duration-500 ease-in-out block absolute w-full h-full"})])}),[],!1,null,null,null);e.default=component.exports},74:function(t,e,n){"use strict";n.r(e);var l=n(42),r=n(43),o={components:{pageSection:l.default,primaryButton:r.default},props:{title:{type:String,default:"An Error Has Been Ocurred"}}},c=n(4),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("page-section",{staticClass:"h-screen"},[e("div",{staticClass:"text-center flex h-full"},[e("div",{staticClass:"mx-auto my-auto"},[e("h1",{staticClass:"text-3xl mb-16"},[this._v("\n        "+this._s(this.title)+"\n      ")]),this._v(" "),e("primary-button",{attrs:{href:"/"}},[this._v("\n        Back to Home\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PrimaryButton:n(43).default,PageSection:n(42).default})},99:function(t,e,n){}},[[232,8,2,9]]]);