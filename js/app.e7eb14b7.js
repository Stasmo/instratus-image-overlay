(function(e){function t(t){for(var s,i,o=t[0],c=t[1],l=t[2],f=0,u=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/instratus-image-overlay/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},2:function(e,t){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Image Overlay")])],1),a("v-main",[a("v-row",[a("v-col",[a("v-card",{staticClass:"mx-6 mt-6"},[a("v-card-text",[a("v-row",[a("v-col",[a("h3",[e._v("Project Details")]),a("v-text-field",{attrs:{label:"Company Name"},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}}),a("v-text-field",{attrs:{label:"Project Name"},model:{value:e.project,callback:function(t){e.project=t},expression:"project"}}),a("v-text-field",{attrs:{label:"Font Size"},model:{value:e.fontSize,callback:function(t){e.fontSize=t},expression:"fontSize"}})],1),a("v-col",[a("h3",[e._v("Text Color")]),a("v-color-picker",{staticClass:"ma-auto mt-4",attrs:{mode:"hexa"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)],1),a("v-row",[a("v-col",[a("h3",[e._v("CSV file")]),a("v-subheader",[e._v('Columns should be "file,description,location". No spaces, all lowercase.')]),a("v-file-input",{attrs:{accept:".csv",label:"Select CSV file",clearable:""},model:{value:e.csvFile,callback:function(t){e.csvFile=t},expression:"csvFile"}})],1),a("v-col",[a("h3",[e._v("Image files")]),a("v-subheader",[e._v('Make sure image names match the "file" column exactly, including upper and lower case.')]),a("v-file-input",{attrs:{accept:"image/*",label:"Select images",multiple:""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)],1),a("v-row",[a("v-col",[e.files?a("v-data-table",{attrs:{items:e.fileData,headers:e.headers},scopedSlots:e._u([{key:"item.alerts",fn:function(t){var s=t.item;return e._l(s.alerts,(function(t){return a("v-alert",{key:t.name,attrs:{border:"left",type:t.type}},[e._v(" "+e._s(t.name)+" ")])}))}},{key:"item.url",fn:function(e){var t=e.item;return[a("img",{attrs:{src:t.url,alt:"",height:"50px"}})]}},{key:"item.actions",fn:function(t){var s=t.item;return[a("v-btn",{on:{click:function(t){return e.preview(s)}}},[e._v("Preview")])]}},{key:"item.top",fn:function(t){var s=t.item;return[a("v-switch",{model:{value:s.top,callback:function(t){e.$set(s,"top",t)},expression:"item.top"}})]}}],null,!1,336622481)}):e._e(),a("v-btn",{attrs:{color:"primary",disabled:!e.fileData||!e.fileData.length,loading:e.loadingDownload},on:{click:e.download}},[e._v("Download")])],1)],1),e.showProgressBar?a("v-row",[a("v-col",[a("v-progress-linear",{attrs:{value:100*e.progress/e.fileData.length,indeterminate:e.progressIndeterminate}}),e.progressIndeterminate?a("div",[e._v("Generating zip file")]):a("div",[e._v("Stamping files: "+e._s(this.progress)+"/"+e._s(this.fileData.length))])],1)],1):e._e()],1)],1)],1)],1),a("v-dialog",{attrs:{transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Preview of image with text")]),a("v-card-text",[a("img",{attrs:{src:e.previewImage,alt:""}})]),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{text:""},on:{click:function(e){t.value=!1}}},[e._v("Close")])],1)],1)]}}]),model:{value:e.previewDialog,callback:function(t){e.previewDialog=t},expression:"previewDialog"}})],1),a("canvas",{attrs:{id:"canvas"}},[a("p",[e._v("We apologize, your browser does not support canvas at this time!")])])],1)},n=[],i=a("1da1"),o=a("5530"),c=a("b85c"),l=(a("96cf"),a("b0c0"),a("d81d"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("99af"),a("ac1f"),a("1276"),a("a4d3"),a("e01a"),a("86ec")),d=a("c1df"),f=a("bb01"),u={mounted:function(){},data:function(){return{company:"Instratus",project:"Test",drawer:null,csvFile:null,files:null,color:"#16bbee",fontSize:null,alerts:[],previewDialog:!1,showProgressBar:!1,progressIndeterminate:!1,loadingDownload:!1,progress:0,previewImage:"",headers:[{text:"Name",value:"name"},{text:"Created At",value:"created"},{text:"Thumbnail",value:"url",align:"end"},{text:"Description",value:"description"},{text:"Location",value:"location"},{text:"Top?",value:"top"},{text:"Alerts",value:"alerts"},{text:"Actions",value:"actions",align:"end"}]}},watch:{fileData:function(e){this.alerts=[];var t,a=Object(c["a"])(e);try{for(a.s();!(t=a.n()).done;){var s=t.value;s.created||this.alerts.push({type:"warning",name:"Image "+s.name+" missing date"})}}catch(r){a.e(r)}finally{a.f()}},csvFile:function(e){var t=this,a=new FileReader;a.onload=function(){var e=l(a.result,{columns:!0,skip_empty_lines:!0});t.csvData=e.reduce((function(e,t){return e[t.file]=t,e}),{}),t.files&&t.processFileData()},a.readAsText(e)}},computed:{fileData:function(){var e=[];return this.files&&(e=this.processFileData()),console.log(e),e}},methods:{processFileData:function(){var e=this;return this.files&&this.files.map((function(t){var a={name:t.name,created:null,url:URL.createObjectURL(t),file:t,description:"",top:!1,alerts:[]};return e.csvData&&e.csvData[t.name]&&(a=Object(o["a"])(Object(o["a"])({},a),e.csvData[t.name])),window.EXIF.getData(t,(function(){return a.exif=this.exifdata,a.details=this,this.exifdata?this.exifdata.DateTimeOriginal?void(a.created=this.exifdata&&d(this.exifdata.DateTimeOriginal,"YYYY:MM:DD HH:mm:ss")):a.alerts=[{type:"warning",name:"No date in exif data"}]:a.alerts=[{type:"warning",name:"Missing exif data"}]})),a}))},download:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,s,r,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadingDownload=!0,a=new f,s=a.folder("images"),e.progress=0,e.showProgressBar=!0,console.log(e.fileData),r=Object(c["a"])(e.fileData),t.prev=7,r.s();case 9:if((n=r.n()).done){t.next=18;break}return i=n.value,t.next=13,e.addTextToImage(i);case 13:o=t.sent,s.file(i.name,o.split(",")[1],{base64:!0}),e.fileData[e.progress++]=null;case 16:t.next=9;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](7),r.e(t.t0);case 23:return t.prev=23,r.f(),t.finish(23);case 26:e.progressIndeterminate=!0,a.generateAsync({type:"blob"}).then((function(t){window.saveAs(t,"".concat(e.company,"-").concat(e.project,"-stamped-images-").concat(Date.now(),".zip")),e.showProgressBar=!1,e.loadingDownload=!1,e.progressIndeterminate=!1,e.progress=0}));case 28:case"end":return t.stop()}}),t,null,[[7,20,23,26]])})))()},preview:function(e){this.addTextToImage(e),this.previewDialog=!0},addTextToImage:function(e){var t=this;return new Promise((function(a){var s=document.getElementById("canvas"),r=s.getContext("2d"),n=new Image;n.onload=function(){s.height=n.height,s.width=n.width,r.drawImage(n,0,0),r.fillStyle=t.color,r.strokeStyle="black",r.lineWidth=4;var i=Math.floor(t.fontSize||.025*n.height);i<5&&(i=5);var o=7,c=(i+5)*(o-1);e.top&&(c=n.height-i-5),r.font=i+"pt Calibri",r.strokeText(t.company,5,n.height-c),r.fillText(t.company,5,n.height-c),r.strokeText(t.project,5,n.height-c+i+5),r.fillText(t.project,5,n.height-c+i+5),r.strokeText(e.name,5,n.height-c+2*(i+5)),r.fillText(e.name,5,n.height-c+2*(i+5)),r.strokeText(e.location,5,n.height-c+3*(i+5)),r.fillText(e.location,5,n.height-c+3*(i+5)),r.strokeText(e.description,5,n.height-c+4*(i+5)),r.fillText(e.description,5,n.height-c+4*(i+5)),e.created&&(r.strokeText(e.created.format("LLL"),5,n.height-c+5*(i+5)),r.fillText(e.created.format("LLL"),5,n.height-c+5*(i+5)));var l=s.toDataURL(e.details.type);t.previewImage=l,r.clearRect(0,0,s.width,s.height),s.height=0,s.width=0,a(l)},n.src=e.url}))}}},b=u,p=a("2877"),v=a("6544"),j=a.n(v),m=a("0798"),h=a("7496"),g=a("40dc"),w=a("5bc1"),y=a("8336"),x=a("b0af"),k=a("99d9"),D=a("62ad"),T=a("03a4"),_=a("8fea"),z=a("169a"),O=a("23a7"),V=a("f6c4"),S=a("8e36"),I=a("0fd9"),C=a("e0c7"),P=a("b73d"),F=a("8654"),L=a("71d9"),A=a("2a7f"),M=Object(p["a"])(b,r,n,!1,null,null,null),B=M.exports;j()(M,{VAlert:m["a"],VApp:h["a"],VAppBar:g["a"],VAppBarNavIcon:w["a"],VBtn:y["a"],VCard:x["a"],VCardActions:k["a"],VCardText:k["b"],VCol:D["a"],VColorPicker:T["a"],VDataTable:_["a"],VDialog:z["a"],VFileInput:O["a"],VMain:V["a"],VProgressLinear:S["a"],VRow:I["a"],VSubheader:C["a"],VSwitch:P["a"],VTextField:F["a"],VToolbar:L["a"],VToolbarTitle:A["a"]});var N=a("f309");s["a"].use(N["a"]);var R=new N["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:R,render:function(e){return e(B)}}).$mount("#app")}});
//# sourceMappingURL=app.e7eb14b7.js.map