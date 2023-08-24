(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-components-cruds-creartravesa-o-vue"],{"169a":function(t,e,s){"use strict";s("368e");var i=s("480e"),a=s("4ad4"),n=s("b848"),o=s("75eb"),r=s("e707"),l=s("e4d3"),c=s("21be"),d=s("a293"),h=s("58df"),u=s("d9bd"),v=s("80d2");const m=Object(h["a"])(n["a"],o["a"],r["a"],l["a"],c["a"],a["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(u["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(v["h"])(this.maxWidth),width:Object(v["h"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},"2a7f":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s("71d9"),a=s("80d2");const n=Object(a["i"])("v-toolbar__title"),o=Object(a["i"])("v-toolbar__items");i["a"]},"368e":function(t,e,s){},"3c93":function(t,e,s){},"55fc":function(t,e,s){"use strict";s("c56c")},"615b":function(t,e,s){},"62ad":function(t,e,s){"use strict";s("4b85");var i=s("2b0e"),a=s("d9f7"),n=s("80d2");const o=["sm","md","lg","xl"],r=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>o.reduce((t,e)=>(t["offset"+Object(n["F"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>o.reduce((t,e)=>(t["order"+Object(n["F"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+="-"+s}return"col"!==t||""!==s&&!0!==s?(i+="-"+s,i.toLowerCase()):i.toLowerCase()}}const u=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:n}){let o="";for(const a in e)o+=String(e[a]);let r=u.get(o);if(!r){let t;for(t in r=[],d)d[t].forEach(s=>{const i=e[s],a=h(t,s,i);a&&r.push(a)});const s=r.some(t=>t.startsWith("col-"));r.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(o,r)}return t(e.tag,Object(a["a"])(s,{class:r}),i)}})},9367:function(t,e,s){"use strict";s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return r})),s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return c}));var i=s("bc3a"),a=s.n(i),n=s("c0d6");function o(t){return new Promise((e,s)=>{a.a.get("api/travesano").then(s=>{const i=s.data,a=s.status;i.forEach(e=>{let s={id:e.id,nombre_travesano:e.nombre_travesano};s&&t.push(s)}),e({stats:a,travesanoArray:t})}).catch(t=>{console.log(t),s(t)})})}function r(t){a.a.post("api/travesano",t).then(t=>{"Created"===t.statusText&&n["a"].commit("setsuccess",!0)}).catch(t=>{console.log(t.message),t&&n["a"].commit("setdanger",!0)})}function l(t){a.a.delete("api/travesano/"+t).catch(t=>console.log(t))}function c(t){a.a.put(t).then(t=>{}).catch(t=>console.log(t))}a.a.defaults.withCredentials=!0,a.a.defaults.baseURL="http://"+window.location.hostname+":8000"},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return l}));var i=s("b0af"),a=s("80d2");const n=Object(a["i"])("v-card__actions"),o=Object(a["i"])("v-card__subtitle"),r=Object(a["i"])("v-card__text"),l=Object(a["i"])("v-card__title");i["a"]},ae32:function(t,e,s){"use strict";s.r(e);var i=s("8336"),a=s("b0af"),n=s("99d9"),o=s("62ad"),r=s("169a"),l=s("132d"),c=s("0fd9"),d=s("2fa4"),h=s("8654"),u=s("71d9"),v=s("2a7f"),m=function(){var t=this,e=t._self._c;return e(r["a"],{attrs:{"content-class":"elevation-0","max-width":"28rem",persistent:"",dark:this.$store.getters.hasdarkflag},model:{value:t.dialogtravesaño,callback:function(e){t.dialogtravesaño=e},expression:"dialogtravesaño"}},[e(a["a"],{staticClass:"cont-card",attrs:{elevation:"2"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()}}},[e(u["a"],{attrs:{dark:this.$store.getters.hasdarkflag,flat:"",color:"transparent"}},[e(i["a"],{directives:[{name:"shortkey",rawName:"v-shortkey",value:["esc"],expression:"['esc']"}],attrs:{icon:"",color:"dark"},on:{shortkey:t.onClose,click:t.onClose}},[e(l["a"],[t._v(" mdi-close ")])],1),e(v["a"],[t._v("Crear travesaño")])],1),e(c["a"],[e(o["a"],{attrs:{sm:"6",md:"12",lx:"13"}},[e(h["a"],{attrs:{counter:10,type:"number",label:"Travesaño",required:""},model:{value:t.nombre_travesano,callback:function(e){t.nombre_travesano=e},expression:"nombre_travesano"}})],1)],1),e(n["a"],[e(d["a"]),e(i["a"],{attrs:{color:"grey darken-2",outlined:""},on:{click:t.clear}},[t._v(" Limpiar ")]),e(i["a"],{staticClass:"mr-4",attrs:{color:"yellow darken-2",outlined:""},on:{click:t.submit}},[t._v(" Guardar travesaño")])],1)],1)],1)},f=[],y=s("c0d6"),g=s("9367"),p={name:"crearmarca",props:{"dialogtravesaño":{default:!1}},data:()=>({nombre_travesano:null}),methods:{onClose(){this.$emit("update:dialogtravesaño",!1)},submit(){y["a"].commit("setsuccess",null),y["a"].commit("setdanger",null);let t={nombre_travesano:this.nombre_travesano};const e=new FormData;e.append("nombre_travesano",this.nombre_travesano),Object(g["d"])(t),this.clear()},clear(){this.nombre_travesano=null}}},b=p,w=(s("55fc"),s("2877")),k=Object(w["a"])(b,m,f,!1,null,"c954796a",null);e["default"]=k.exports},b0af:function(t,e,s){"use strict";s("615b");var i=s("10d2"),a=s("297c"),n=s("1c87"),o=s("58df");e["a"]=Object(o["a"])(a["a"],n["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const t={...i["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},c56c:function(t,e,s){},e707:function(t,e,s){"use strict";s("3c93");var i=s("a9ad"),a=s("7560"),n=s("f2e7"),o=s("58df"),r=Object(o["a"])(i["a"],a["a"],n["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),l=r,c=s("80d2"),d=s("2b0e");e["a"]=d["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(c["u"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(c["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c["y"].up,c["y"].pageup],s=[c["y"].down,c["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!s.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const s=e.shiftKey||e.deltaX?"x":"y",i="y"===s?e.deltaY:e.deltaX||e.deltaY;let a,n;"y"===s?(a=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(a=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,r=i>0;return!(a||!o)||(!(n||!r)||!(!a&&!n)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=Object(c["g"])(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,s=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(s,e))||!this.shouldScroll(e,t)}for(let s=0;s<e.length;s++){const i=e[s];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(c["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=layout-components-cruds-creartravesa-o-vue.5c115736.js.map