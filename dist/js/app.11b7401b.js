(function(e){function t(t){for(var n,s,l=t[0],u=t[1],i=t[2],f=0,h=[];f<l.length;f++)s=l[f],r[s]&&h.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(h.length)h.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var u=a[l];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var c=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("1356"),r=a.n(n);r.a},1356:function(e,t,a){},"1c49":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("router-view",{key:e.$route.fullPath})],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav",attrs:{id:"nav"}},[a("nav",[a("router-link",{attrs:{to:{name:"hello-world"}}},[e._v("Hello World")]),e._v("|\n    "),a("router-link",{attrs:{to:{name:"calculate"}}},[e._v("Calculate")]),e._v("|\n  ")],1)])},u=[],i={},c=i,f=(a("f0f0"),a("2877")),h=Object(f["a"])(c,l,u,!1,null,"5945279e",null),v=h.exports,d={components:{NavBar:v}},y=d,p=(a("034f"),Object(f["a"])(y,o,s,!1,null,null,null)),m=p.exports,b=a("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        Welcome to Vuetify\n      ")]),n("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),n("br"),e._v("please join our online\n        "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1)],1)],1)},g=[],w={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},_=w,k=a("6544"),C=a.n(k),P=a("a523"),j=a("0e8f"),O=a("adda"),V=a("a722"),H=Object(f["a"])(_,x,g,!1,null,null,null),E=H.exports;C()(H,{VContainer:P["a"],VFlex:j["a"],VImg:O["a"],VLayout:V["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.yearsArr.length?[a("v-card",{attrs:{raised:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{items:e.yearsArr,headers:e.yearsHeaders,"rows-per-page-items":e.rowsPerPageItems},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v("$"+e._s(t.item.annualRealEstateCashFlow))]),a("td",[e._v("$"+e._s(t.item.currCash))]),a("td",[e._v(e._s(t.item.currYear))]),a("td",[e._v(e._s(t.item.houseCount))]),a("td",[e._v("$"+e._s(t.item.portfolioValue))])]}}],null,!1,351766205)})],1)]:e._e(),[a("v-form",{ref:"form"},[a("v-layout",{attrs:{"align-start":"","justify-center":"",row:"",wrap:""}},[a("v-flex",[a("v-text-field",{attrs:{label:"Starting Savings"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.startingSavings,callback:function(t){e.startingSavings=t},expression:"startingSavings"}}),a("v-text-field",{attrs:{label:"Saving Per Year"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.savingPerYear,callback:function(t){e.savingPerYear=t},expression:"savingPerYear"}}),a("v-text-field",{attrs:{label:"Cashflow Per House"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.cashflowPerHouse,callback:function(t){e.cashflowPerHouse=t},expression:"cashflowPerHouse"}}),a("v-text-field",{attrs:{label:"House Count"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.houseCount,callback:function(t){e.houseCount=t},expression:"houseCount"}}),a("v-text-field",{attrs:{label:"Number of Years"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.numYears,callback:function(t){e.numYears=t},expression:"numYears"}}),a("v-text-field",{attrs:{label:"Cash Down Per House"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.cashDownPerHouse,callback:function(t){e.cashDownPerHouse=t},expression:"cashDownPerHouse"}}),a("v-btn",{attrs:{color:"primary"},on:{click:e.calculate}},[e._v("Calculate")])],1)],1)],1)]],2)},S=[],D=(a("c5f6"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2e4;n=Number(n);var s=1,l=+e,u=4*+o,i=0,c=[];while(s<=+r){i=+a*+n,l=l+ +t+i;var f=Math.floor(+l/+o);l>o&&(n+=f,l-=o*f);var h=.75*u*+n,v={currYear:s,currCash:l,houseCount:n,portfolioValue:h,annualRealEstateCashFlow:i};c.push(v),s++}return c}),F={data:function(){return{startingSavings:"",savingPerYear:"",cashflowPerHouse:"",houseCount:"",numYears:"",cashDownPerHouse:"",yearsArr:[],yearsHeaders:[{text:"Annual Real Estate Cashflow",value:"annualRealEstateCashFlow",sortable:!1},{text:"Cash",value:"currCash",sortable:!1},{text:"Year",value:"currYear",sortable:!1},{text:"House Count",value:"houseCount",sortable:!1},{text:"Portfolio Value",value:"portfolioValue",sortable:!1}],rowsPerPageItems:[10,20,30,40],pagination:{rowsPerPage:20}}},methods:{calculate:function(){var e=D(this.startingSavings,this.savingPerYear,this.cashflowPerHouse,this.houseCount,this.numYears,this.cashDownPerHouse);this.yearsArr=e,console.log(this.yearsArr)}}},$=F,A=a("8336"),M=a("b0af"),N=a("8fea"),T=a("4bd4"),L=a("2677"),I=Object(f["a"])($,Y,S,!1,null,"22c13a38",null),R=I.exports;C()(I,{VBtn:A["a"],VCard:M["a"],VDataTable:N["a"],VFlex:j["a"],VForm:T["a"],VLayout:V["a"],VTextField:L["a"]}),n["a"].use(b["a"]);var q=new b["a"]({mode:"history",routes:[{path:"/",name:"hello-world",component:E},{path:"/calculate",name:"calculate",component:R}]});n["a"].config.productionTip=!1,new n["a"]({router:q,render:function(e){return e(m)}}).$mount("#app")},"9b19":function(e,t,a){e.exports=a.p+"img/logo.63a7d78d.svg"},f0f0:function(e,t,a){"use strict";var n=a("1c49"),r=a.n(n);r.a}});
//# sourceMappingURL=app.11b7401b.js.map