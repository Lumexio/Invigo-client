(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-layouts-default-vue"],{"263c":function(t,a,i){"use strict";i("31f7")},"31f7":function(t,a,i){},7496:function(t,a,i){"use strict";i("df86");var e=i("7560"),s=i("58df");a["a"]=Object(s["a"])(e["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const a=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[a])}})},"7b3d":function(t,a,i){"use strict";i.r(a);var e=i("7496"),s=i("a523"),r=(i("bd0c"),i("d10f")),n=r["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:a,right:i,footer:e,insetFooter:s,bottom:r,left:n}=this.$vuetify.application;return{paddingTop:a+t+"px",paddingRight:i+"px",paddingBottom:e+s+r+"px",paddingLeft:n+"px"}}},render(t){const a={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,a,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),o=function(){var t=this,a=t._self._c;return a(e["a"],{class:[!0===this.$store.getters.hasdarkflag?"black-main":"white-main"]},[a("sidebar"),a(n,{staticClass:"background"},[a(s["a"],{class:[!0===this.$store.getters.hasdarkflag?"black-main":"white-main"],attrs:{fluid:""}},[a("router-view")],1)],1)],1)},d=[],l=i("945e"),c={name:"defaultLayout",components:{sidebar:l["default"]}},p=c,u=(i("263c"),i("2877")),f=Object(u["a"])(p,o,d,!1,null,"8d95bf14",null);a["default"]=f.exports},a523:function(t,a,i){"use strict";i("20f6"),i("4b85");var e=i("2b0e");function s(t){return e["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(a,{props:i,data:e,children:s}){e.staticClass=`${t} ${e.staticClass||""}`.trim();const{attrs:r}=e;if(r){e.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const a=r[t];return t.startsWith("data-")?(e.attrs[t]=a,!1):a||"string"===typeof a});t.length&&(e.staticClass+=" "+t.join(" "))}return i.id&&(e.domProps=e.domProps||{},e.domProps.id=i.id),a(i.tag,e,s)}})}var r=i("d9f7");a["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:i,children:e}){let s;const{attrs:n}=i;return n&&(i.attrs={},s=Object.keys(n).filter(t=>{if("slot"===t)return!1;const a=n[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a})),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(s||[])}),e)}})},bd0c:function(t,a,i){},df86:function(t,a,i){}}]);
//# sourceMappingURL=layout-layouts-default-vue.204e73f3.js.map