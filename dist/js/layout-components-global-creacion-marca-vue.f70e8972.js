(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-components-global-creacion-marca-vue","layout-components-cruds-crearmarca-vue"],{2621:function(a,t,e){"use strict";e("f3eb")},2775:function(a,t,e){"use strict";e("454b")},"2a7f":function(a,t,e){"use strict";e.d(t,"a",(function(){return n}));var r=e("71d9"),c=e("80d2");const n=Object(c["i"])("v-toolbar__title"),o=Object(c["i"])("v-toolbar__items");r["a"]},"454b":function(a,t,e){},"6cea":function(a,t,e){"use strict";e.r(t);var r=e("8336"),c=e("62ad"),n=e("132d"),o=e("0fd9"),s=function(){var a=this,t=a._self._c;return t("div",{staticClass:"pa-3",staticStyle:{width:"64%"}},[t(o["a"],[t(c["a"],{attrs:{"align-self":"end",cols:"2"}},[t(o["a"],[t(r["a"],{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","shift","m"],expression:"['ctrl', 'shift', 'm']"}],attrs:{elevation:"0",dark:"",rounded:""},on:{shortkey:function(t){a.dialogmarca=!a.dialogmarca},click:function(t){a.dialogmarca=!a.dialogmarca}}},[t(n["a"],{attrs:{left:"",large:"",dark:""}},[a._v("mdi-plus")]),a._v(" Marca ")],1)],1)],1)],1),t("crearmarca",{attrs:{dialogmarca:a.dialogmarca},on:{"update:dialogmarca":function(t){a.dialogmarca=t}}})],1)},i=[],l=e("bfdd"),d={name:"crearlist",components:{crearmarca:l["default"]},methods:{},data:()=>({dialogmarca:!1})},m=d,u=(e("2775"),e("2877")),f=Object(u["a"])(m,s,i,!1,null,"06ffa7fc",null);t["default"]=f.exports},"700c":function(a,t,e){"use strict";function r(a){a=a.toLowerCase();var t=a.split(" "),e=[];for(let r=0;r<t.length;r++)e.push(t[r].charAt(0).toUpperCase()+t[r].slice(1));return e.join(" ")}e.d(t,"a",(function(){return r}))},"99e0":function(a,t,e){"use strict";e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return s})),e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return l}));var r=e("bc3a"),c=e.n(r),n=e("c0d6");function o(a){return new Promise((t,e)=>{c.a.get("api/marca").then(e=>{const r=e.data,c=e.status;r.forEach(t=>{let e={id:t.id,nombre_marca:t.nombre_marca};e&&a.push(e)}),t({stats:c,marcaArray:a})}).catch(a=>{console.log(a),e(a)})})}function s(a){c.a.post("api/marca",a,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{"Created"===a.statusText&&n["a"].commit("setsuccess",!0)}).catch(a=>{console.log(a.message),n["a"].commit("setdanger",!0)})}function i(a){c.a.delete("api/marca/"+a).catch(a=>console.log(a))}function l(a){c.a.put(a).then(a=>{}).catch(a=>console.log(a))}c.a.defaults.withCredentials=!0,c.a.defaults.baseURL="http://"+window.location.hostname+":8000"},bfdd:function(a,t,e){"use strict";e.r(t);var r=e("8336"),c=e("b0af"),n=e("99d9"),o=e("62ad"),s=e("169a"),i=e("132d"),l=e("0fd9"),d=e("2fa4"),m=e("8654"),u=e("a844"),f=e("71d9"),p=e("2a7f"),h=function(){var a=this,t=a._self._c;return t(s["a"],{attrs:{"content-class":"elevation-0","max-width":"40rem",persistent:"",dark:this.$store.getters.hasdarkflag},model:{value:a.dialogmarca,callback:function(t){a.dialogmarca=t},expression:"dialogmarca"}},[t(c["a"],{staticClass:"cont-card",attrs:{elevation:"2"},on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.submit()}}},[t(f["a"],{attrs:{dark:this.$store.getters.hasdarkflag,flat:"",color:"transparent"}},[t(r["a"],{directives:[{name:"shortkey",rawName:"v-shortkey",value:["esc"],expression:"['esc']"}],attrs:{icon:"",color:"dark"},on:{shortkey:function(t){return a.onClose()},click:function(t){return a.onClose()}}},[t(i["a"],[a._v("mdi-close")])],1),t(p["a"],[a._v("Crear marcas")])],1),t(l["a"],[t(o["a"],{attrs:{sm:"6",md:"12",lx:"13"}},[t(m["a"],{attrs:{counter:10,label:"Nombre marca",required:""},model:{value:a.nombre_marca,callback:function(t){a.nombre_marca=t},expression:"nombre_marca"}})],1)],1),t(l["a"],[t(o["a"],[t(u["a"],{attrs:{counter:120,color:"teal"},scopedSlots:a._u([{key:"label",fn:function(){return[t("div",[a._v("Descripción marca "),t("small",[a._v("(opcional)")])])]},proxy:!0}]),model:{value:a.descripcion_marca,callback:function(t){a.descripcion_marca=t},expression:"descripcion_marca"}})],1)],1),t(n["a"],[t(d["a"]),t(r["a"],{attrs:{color:"grey darken-2",outlined:""},on:{click:a.clear}},[a._v(" Limpiar ")]),t(r["a"],{directives:[{name:"shortkey",rawName:"v-shortkey",value:["enter"],expression:"['enter']"}],staticClass:"mr-4",attrs:{color:"yellow darken-2",outlined:""},on:{shortkey:a.submit,click:function(t){return a.submit()}}},[a._v(" Guardar marca ")])],1)],1)],1)},b=[],v=e("99e0"),_=e("c0d6"),k=e("700c"),g={name:"crearmarca",props:{dialogmarca:{default:!1}},data:()=>({nombre_marca:"",descripcion_marca:""}),methods:{onClose(){this.$emit("update:dialogmarca",!1)},submit(){_["a"].commit("setsuccess",null),_["a"].commit("setdanger",null),this.nombre_marca=Object(k["a"])(this.nombre_marca);const a=new FormData;a.append("nombre_marca",this.nombre_marca),a.append("descripcion_marca",this.descripcion_marca),Object(v["d"])(a),this.clear()},clear(){this.nombre_marca="",this.descripcion_marca=""}}},y=g,w=(e("2621"),e("2877")),x=Object(w["a"])(y,h,b,!1,null,"6d46e5e2",null);t["default"]=x.exports},f3eb:function(a,t,e){}}]);
//# sourceMappingURL=layout-components-global-creacion-marca-vue.f70e8972.js.map