(function(e){function t(t){for(var n,i,c=t[0],o=t[1],l=t[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);f&&f(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/instratus-image-overlay/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},2:function(e,t){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Image Overlay")])],1),a("v-main",[a("v-row",[a("v-col",[a("v-card",{staticClass:"mx-6 mt-6"},[a("v-card-text",[a("v-row",[a("v-col",[a("h3",[e._v("Project Details")]),a("v-text-field",{attrs:{label:"Company Name"},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}}),a("v-text-field",{attrs:{label:"Project Name"},model:{value:e.project,callback:function(t){e.project=t},expression:"project"}}),a("v-text-field",{attrs:{label:"Font Size"},model:{value:e.fontSize,callback:function(t){e.fontSize=t},expression:"fontSize"}})],1),a("v-col",[a("h3",[e._v("Text Color")]),a("v-color-picker",{staticClass:"ma-auto mt-4",attrs:{mode:"hexa"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)],1),a("v-row",[a("v-col",[a("h3",[e._v("CSV file")]),a("v-file-input",{attrs:{accept:".csv",label:"Select CSV file"},model:{value:e.csvFile,callback:function(t){e.csvFile=t},expression:"csvFile"}})],1),a("v-col",[a("h3",[e._v("Image files")]),a("v-file-input",{attrs:{accept:"image/*",label:"Select images",multiple:""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)],1),e.files?a("v-data-table",{attrs:{items:e.fileData,headers:e.headers},scopedSlots:e._u([{key:"item.alerts",fn:function(t){var n=t.item;return e._l(n.alerts,(function(t){return a("v-alert",{key:t.name,attrs:{border:"left",type:t.type}},[e._v(" "+e._s(t.name)+" ")])}))}},{key:"item.url",fn:function(e){var t=e.item;return[a("img",{attrs:{src:t.url,alt:"",height:"50px"}})]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-btn",{on:{click:function(t){return e.preview(n)}}},[e._v("Preview")])]}},{key:"item.top",fn:function(t){var n=t.item;return[a("v-switch",{model:{value:n.top,callback:function(t){e.$set(n,"top",t)},expression:"item.top"}})]}}],null,!1,336622481)}):e._e(),a("v-btn",{attrs:{color:"primary",disabled:!e.fileData||!e.fileData.length},on:{click:e.download}},[e._v("Download")])],1)],1)],1)],1),a("v-dialog",{attrs:{transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Preview of image with text")]),a("v-card-text",[a("img",{attrs:{src:e.previewImage,alt:""}})]),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{text:""},on:{click:function(e){t.value=!1}}},[e._v("Close")])],1)],1)]}}]),model:{value:e.previewDialog,callback:function(t){e.previewDialog=t},expression:"previewDialog"}})],1),a("canvas",{attrs:{id:"canvas"}},[a("p",[e._v("We apologize, your browser does not support canvas at this time!")])])],1)},r=[],i=a("1da1"),c=a("5530"),o=a("b85c"),l=(a("96cf"),a("b0c0"),a("d81d"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("99af"),a("ac1f"),a("1276"),a("a4d3"),a("e01a"),a("86ec")),f=a("c1df"),d=a("bb01"),u={mounted:function(){},data:function(){return{company:"Instratus",project:"Test",drawer:null,csvFile:null,files:null,color:"#16bbee",fontSize:null,alerts:[],previewDialog:!1,previewImage:"",headers:[{text:"Name",value:"name"},{text:"Created At",value:"created"},{text:"Thumbnail",value:"url",align:"end"},{text:"Description",value:"description"},{text:"Top?",value:"top"},{text:"Alerts",value:"alerts"},{text:"Actions",value:"actions",align:"end"}]}},watch:{fileData:function(e){this.alerts=[];var t,a=Object(o["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.created||this.alerts.push({type:"warning",name:"Image "+n.name+" missing date"})}}catch(s){a.e(s)}finally{a.f()}},csvFile:function(e){var t=this,a=new FileReader;a.onload=function(){var e=l(a.result,{columns:!0,skip_empty_lines:!0});t.csvData=e.reduce((function(e,t){return e[t.file]=t,e}),{})},a.readAsText(e)}},computed:{fileData:function(){var e=this;return this.files&&this.files.map((function(t){var a={name:t.name,created:null,url:URL.createObjectURL(t),file:t,description:"",top:!1,alerts:[]};return e.csvData&&e.csvData[t.name]&&(a=Object(c["a"])(Object(c["a"])({},a),e.csvData[t.name])),window.EXIF.getData(t,(function(){return a.exif=this.exifdata,a.details=this,this.exifdata?this.exifdata.DateTimeOriginal?void(a.created=this.exifdata&&f(this.exifdata.DateTimeOriginal,"YYYY:MM:DD HH:mm:ss")):a.alerts=[{type:"warning",name:"No date in exif data"}]:a.alerts=[{type:"warning",name:"Missing exif data"}]})),a}))}},methods:{download:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=new d,n=a.folder("images"),s=Object(o["a"])(e.fileData),t.prev=3,s.s();case 5:if((r=s.n()).done){t.next=13;break}return i=r.value,t.next=9,e.addTextToImage(i);case 9:c=t.sent,n.file(i.name,c.split(",")[1],{base64:!0});case 11:t.next=5;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](3),s.e(t.t0);case 18:return t.prev=18,s.f(),t.finish(18);case 21:a.generateAsync({type:"blob"}).then((function(t){window.saveAs(t,"".concat(e.company,"-").concat(e.project,"-stamped-images-").concat(Date.now(),".zip"))}));case 22:case"end":return t.stop()}}),t,null,[[3,15,18,21]])})))()},preview:function(e){this.addTextToImage(e),this.previewDialog=!0},addTextToImage:function(e){var t=this;return new Promise((function(a){var n=document.getElementById("canvas"),s=n.getContext("2d"),r=new Image;r.onload=function(){n.height=r.height,n.width=r.width,s.drawImage(r,0,0),s.fillStyle=t.color,s.strokeStyle="black",s.lineWidth=4;var i=Math.floor(t.fontSize||.025*r.height);i<5&&(i=5);var c=7,o=(i+5)*(c-1);e.top&&(o=r.height-i-5),s.font=i+"pt Calibri",s.strokeText(t.company,5,r.height-o),s.fillText(t.company,5,r.height-o),s.strokeText(t.project,5,r.height-o+i+5),s.fillText(t.project,5,r.height-o+i+5),s.strokeText(e.name,5,r.height-o+2*(i+5)),s.fillText(e.name,5,r.height-o+2*(i+5)),s.strokeText(e.location,5,r.height-o+3*(i+5)),s.fillText(e.location,5,r.height-o+3*(i+5)),s.strokeText(e.description,5,r.height-o+4*(i+5)),s.fillText(e.description,5,r.height-o+4*(i+5)),e.created&&(s.strokeText(e.created.format("LLL"),5,r.height-o+5*(i+5)),s.fillText(e.created.format("LLL"),5,r.height-o+5*(i+5)));var l=n.toDataURL(e.details.type);t.previewImage=l,s.clearRect(0,0,n.width,n.height),n.height=0,n.width=0,a(l)},r.src=e.url}))}}},b=u,j=a("2877"),p=a("6544"),v=a.n(p),m=a("0798"),h=a("7496"),g=a("40dc"),y=a("5bc1"),x=a("8336"),k=a("b0af"),w=a("99d9"),T=a("62ad"),z=a("03a4"),D=a("8fea"),_=a("169a"),O=a("23a7"),V=a("f6c4"),S=a("0fd9"),C=a("b73d"),I=a("8654"),P=a("71d9"),A=a("2a7f"),F=Object(j["a"])(b,s,r,!1,null,null,null),L=F.exports;v()(F,{VAlert:m["a"],VApp:h["a"],VAppBar:g["a"],VAppBarNavIcon:y["a"],VBtn:x["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["b"],VCol:T["a"],VColorPicker:z["a"],VDataTable:D["a"],VDialog:_["a"],VFileInput:O["a"],VMain:V["a"],VRow:S["a"],VSwitch:C["a"],VTextField:I["a"],VToolbar:P["a"],VToolbarTitle:A["a"]});var M=a("f309");n["a"].use(M["a"]);var R=new M["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:R,render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.694e94a8.js.map