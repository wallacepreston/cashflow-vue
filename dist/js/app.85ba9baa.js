(function(e){function t(t){for(var n,l,s=t[0],u=t[1],i=t[2],f=0,v=[];f<s.length;f++)l=s[f],r[l]&&v.push(r[l][0]),r[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(v.length)v.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var u=a[s];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var c=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("1356"),r=a.n(n);r.a},1356:function(e,t,a){},"20ab":function(e,t,a){e.exports=a.p+"img/re-cashflow-logo.5c456bb2.png"},2278:function(e,t,a){},"468c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("NavBar"),a("router-view",{key:e.$route.fullPath})],1)],1)},l=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",[a("v-btn",{attrs:{to:{name:"home"},"active-class":"",flat:"",large:""}},[a("v-toolbar-title",[e._v("RE Cashflow Calculator")])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},e._l(e.menu,function(t){return a("v-btn",{key:t.link.name,attrs:{to:t.link,exact:"",flat:""}},[e._v(e._s(t.title))])}),1),a("v-menu",{staticClass:"hidden-md-and-up"},[a("v-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),a("v-list",e._l(e.menu,function(t){return a("v-list-tile",{key:t.link.name},[a("v-btn",{attrs:{to:t.link,exact:"",flat:""}},[e._v(e._s(t.title))])],1)}),1)],1)],1)},u=[],i={data:function(){return{menu:[{link:{name:"home"},title:"Home"},{link:{name:"calculate"},title:"Calculate"}]}}},c=i,f=(a("7669"),a("2877")),v=a("6544"),d=a.n(v),h=a("8336"),p=a("8860"),b=a("ba95"),m=a("e449"),y=a("9910"),g=a("71d9"),x=a("2a7f"),k=a("706c"),w=Object(f["a"])(c,s,u,!1,null,"3c9f147b",null),_=w.exports;d()(w,{VBtn:h["a"],VList:p["a"],VListTile:b["a"],VMenu:m["a"],VSpacer:y["a"],VToolbar:g["a"],VToolbarItems:x["a"],VToolbarSideIcon:k["a"],VToolbarTitle:x["b"]});var C={components:{NavBar:_}},P=C,V=(a("034f"),a("7496")),O=Object(f["a"])(P,o,l,!1,null,null,null),H=O.exports;d()(O,{VApp:V["a"]});var E=a("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("20ab"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        Welcome to RE Cashflow\n      ")])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.homeOptions,function(t,a){return n("v-btn",{key:a,staticClass:"subheading mx-3",attrs:{color:"primary",to:t.url}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),1)],1)],1)],1)},Y=[],j={data:function(){return{homeOptions:[{text:"Home",url:"/"},{text:"Calculate",url:"/calculate"},{text:"About",url:"/about"}]}}},T=j,$=a("a523"),A=a("0e8f"),D=a("adda"),F=a("a722"),M=Object(f["a"])(T,S,Y,!1,null,null,null),R=M.exports;d()(M,{VBtn:h["a"],VContainer:$["a"],VFlex:A["a"],VImg:D["a"],VLayout:F["a"]});var B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.yearsArr.length?[a("v-card",{attrs:{raised:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{items:e.yearsArr,headers:e.yearsHeaders,"rows-per-page-items":e.rowsPerPageItems},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v("$"+e._s(t.item.annualRealEstateCashFlow))]),a("td",[e._v("$"+e._s(t.item.currCash))]),a("td",[e._v(e._s(t.item.currYear))]),a("td",[e._v(e._s(t.item.houseCount))]),a("td",[e._v("$"+e._s(t.item.portfolioValue))])]}}],null,!1,351766205)})],1)]:e._e(),[a("v-form",{ref:"form"},[a("v-layout",{attrs:{"align-start":"","justify-center":"",row:"",wrap:""}},[a("v-flex",[a("v-text-field",{attrs:{label:"Starting Savings"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.startingSavings,callback:function(t){e.startingSavings=t},expression:"startingSavings"}}),a("v-text-field",{attrs:{label:"Saving Per Year"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.savingPerYear,callback:function(t){e.savingPerYear=t},expression:"savingPerYear"}}),a("v-text-field",{attrs:{label:"Cashflow Per House"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.cashflowPerHouse,callback:function(t){e.cashflowPerHouse=t},expression:"cashflowPerHouse"}}),a("v-text-field",{attrs:{label:"House Count"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.houseCount,callback:function(t){e.houseCount=t},expression:"houseCount"}}),a("v-text-field",{attrs:{label:"Number of Years"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.numYears,callback:function(t){e.numYears=t},expression:"numYears"}}),a("v-text-field",{attrs:{label:"Cash Down Per House"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)}},model:{value:e.cashDownPerHouse,callback:function(t){e.cashDownPerHouse=t},expression:"cashDownPerHouse"}}),a("v-btn",{attrs:{color:"primary"},on:{click:e.calculate}},[e._v("Calculate")])],1)],1)],1)]],2)},I=[],L=(a("c5f6"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2e4;n=Number(n);var l=1,s=+e,u=4*+o,i=0,c=[];while(l<=+r){i=+a*+n,s=s+ +t+i;var f=Math.floor(+s/+o);s>o&&(n+=f,s-=o*f);var v=.75*u*+n,d={currYear:l,currCash:s,houseCount:n,portfolioValue:v,annualRealEstateCashFlow:i};c.push(d),l++}return c}),N={data:function(){return{startingSavings:"",savingPerYear:"",cashflowPerHouse:"",houseCount:"",numYears:"",cashDownPerHouse:"",yearsArr:[],yearsHeaders:[{text:"Annual Real Estate Cashflow",value:"annualRealEstateCashFlow",sortable:!1},{text:"Cash",value:"currCash",sortable:!1},{text:"Year",value:"currYear",sortable:!1},{text:"House Count",value:"houseCount",sortable:!1},{text:"Portfolio Value",value:"portfolioValue",sortable:!1}],rowsPerPageItems:[10,20,30,40],pagination:{rowsPerPage:20}}},methods:{calculate:function(){var e=L(this.startingSavings,this.savingPerYear,this.cashflowPerHouse,this.houseCount,this.numYears,this.cashDownPerHouse);this.yearsArr=e,console.log(this.yearsArr)}}},J=N,W=(a("bb2f"),a("b0af")),q=a("8fea"),z=a("4bd4"),G=a("2677"),K=Object(f["a"])(J,B,I,!1,null,"17a70007",null),Q=K.exports;d()(K,{VBtn:h["a"],VCard:W["a"],VDataTable:q["a"],VFlex:A["a"],VForm:z["a"],VLayout:F["a"],VTextField:G["a"]}),n["a"].use(E["a"]);var U=new E["a"]({mode:"history",routes:[{path:"/",name:"home",component:R},{path:"/calculate",name:"calculate",component:Q}]});n["a"].config.productionTip=!1,new n["a"]({router:U,render:function(e){return e(H)}}).$mount("#app")},7669:function(e,t,a){"use strict";var n=a("468c"),r=a.n(n);r.a},bb2f:function(e,t,a){"use strict";var n=a("2278"),r=a.n(n);r.a}});
//# sourceMappingURL=app.85ba9baa.js.map