(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0584":function(t,e,n){t.exports=n.p+"img/oneplus.fdb03a79.jpg"},"2d1e":function(t,e,n){var a={"./bose.jpg":"f778","./game.jpg":"cdc8","./headphone.jpg":"6de1","./logitech.jpg":"d104","./oneplus.jpg":"0584","./xbox.jpg":"99e2"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="2d1e"},"3d64":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white"}},[a("div",{staticClass:"d-flex align-center"},[a("v-btn",{staticClass:"px-0 mx-0",attrs:{text:""},on:{click:function(e){return t.goTo()}}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Logo",contain:"",src:n("cf05"),transition:"scale-transition",width:"100"}})],1)],1),a("v-spacer"),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAuthenticated,expression:"!isAuthenticated"}]},[a("v-btn",{attrs:{text:"",color:"success"},on:{click:t.openSignIn}},[a("span",{staticClass:"mr-2"},[t._v("Sign In")])]),a("v-btn",{attrs:{text:"",color:"warning"},on:{click:t.openSignUp}},[a("span",{staticClass:"mr-2"},[t._v("Sign up")])]),a("v-icon",{staticClass:"ml-2",attrs:{color:"black"},on:{click:t.goTo}},[t._v("mdi-home")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isAuthenticated,expression:"isAuthenticated"}]},[a("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"ma-2",attrs:{outlined:""}},n),[t._v(" "+t._s(t.getUserName)+" "),a("v-icon",{attrs:{right:""}},[t._v("mdi-account-circle")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:t.openSignOut}},[a("v-list-item-title",[t._v("Sign Out")])],1)],1)],1)],1)],1),a("v-content",[a("v-container",[a("v-card",[a("v-toolbar",{staticClass:"blue",attrs:{flat:"",height:"150"}},[a("v-toolbar-title",{staticClass:"white--text mx-auto"},[a("h2",[t._v("Rewards")])])],1),a("v-card-text",{staticClass:"grey lighten-3"},[a("v-sheet",{staticClass:"mx-auto grey lighten-3"},[a("router-view"),a("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)],1),t.openDSignUp?a("signUpForm",{attrs:{dialogSignUp:t.openDSignUp},on:{closeDSU:function(e){return t.closeDSU(e)}}}):t._e(),t.openDSignIn?a("signInForm",{attrs:{dialogSignIn:t.openDSignIn},on:{closeDSI:function(e){return t.closeDSI(e)}}}):t._e(),t.openDSignOut?a("signOutForm",{attrs:{dialogSignOut:t.openDSignOut},on:{closeDSOut:function(e){return t.closeDSOut(e)}}}):t._e()],1)],1),a("v-card",{attrs:{height:"200px"}},[a("v-footer",{attrs:{color:"black lighten-2","v_bind:padless":"false",absolute:!1,height:"200px"}},[a("v-row",{attrs:{justify:"center","no-gutters":""}},[a("v-col",{staticClass:"py-4 text-center white--text",attrs:{cols:"12"}},[a("strong",[t._v("Terms and Conditions | Privacy Policy | "+t._s((new Date).getFullYear()))])])],1)],1)],1)],1)},o=[],i=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dSignUp,callback:function(e){t.dSignUp=e},expression:"dSignUp"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.closeD(!1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-toolbar-title",[n("strong",[t._v("Sign Up Form")])]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.closeD(!1)}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1),n("v-card-title",[n("v-container",[n("span",{staticClass:"headline"},[n("strong",[t._v("Sign up in Razz-Rewards to redeem prizes.")])])])],1),n("v-card-text",[n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,type:"text",rules:[t.rules.minName,t.rules.required],label:"Name *"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),n("v-text-field",{attrs:{type:"text",rules:[t.rules.required,t.rules.email],label:"E-mail *",counter:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),n("v-text-field",{attrs:{"append-icon":t.showPwd?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.showPwd?"text":"password",name:"input-10-1",label:"Password",hint:"At least 6 characters",counter:""},on:{"click:append":function(e){t.showPwd=!t.showPwd}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),n("v-text-field",{attrs:{"append-icon":t.showRePwd?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min,t.rules.pwdMatch],type:t.showRePwd?"text":"password",name:"input-10-1",label:"Confirm Password",hint:"At least 6 characters",counter:""},on:{"click:append":function(e){t.showRePwd=!t.showRePwd}},model:{value:t.rePwd,callback:function(e){t.rePwd=e},expression:"rePwd"}}),n("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"Do you agree? *",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),n("small",[t._v("*indicates required field")])],1)],1),n("v-card-actions",[n("v-container",[n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("Submit")]),n("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v("Clear")])],1)],1)],1)],1),n("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" "),n("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},c=[],l=(n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),u=n("d4ec"),d=n("bee2"),p=n("bc3a"),v=n.n(p),f="api/users/",m=function(){function t(){Object(u["a"])(this,t)}return Object(d["a"])(t,null,[{key:"createUser",value:function(t){return new Promise(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("".concat(f,"create/"),{name:t.name,email:t.email,password:t.password});case 3:r=e.sent,n(r.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"findUser",value:function(t){return new Promise(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("".concat(f,"find/"),{email:t});case 3:r=e.sent,n(r.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}}]),t}(),g=m,b={name:"sign-up-form",props:["dialogSignUp"],created:function(){this.dSignUp=this.dialogSignUp},data:function(){var t=this;return{showPwd:!1,showRePwd:!1,snackbar:!1,text:"",timeout:3e3,dSignUp:!1,valid:!0,rePwd:"",user:{name:"",email:"",password:""},rules:{required:function(t){return!!t||"Required."},minName:function(t){return t&&t.length<=10||"Required"},email:function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"},min:function(t){return t&&t.length>=6||"Min 6 characters"},pwdMatch:function(e){return t.user.password===e||"Password dont match"}},checkbox:!1}},methods:{validate:function(){var t=this;this.$refs.form.validate()&&g.findUser(this.user.email).then((function(e){e?(t.snackbar=!0,t.text="User already exists!"):g.createUser(t.user).then((function(e){"ok"===e&&(t.reset(),t.closeD(!0))}),(function(t){console.log(t)}))}),(function(t){console.log(t)}))},reset:function(){this.$refs.form.reset()},closeD:function(t){this.dSignUp=!1,this.$emit("closeDSU",{dSignUp:this.dSignUp,snack:t})}},computed:{}},h=b,x=n("2877"),w=n("6544"),y=n.n(w),k=n("8336"),S=n("b0af"),O=n("99d9"),_=n("ac7c"),C=n("a523"),D=n("169a"),V=n("4bd4"),j=n("132d"),P=n("2db4"),I=n("2fa4"),E=n("8654"),U=n("71d9"),z=n("2a7f"),T=Object(x["a"])(h,s,c,!1,null,null,null),R=T.exports;y()(T,{VBtn:k["a"],VCard:S["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VCheckbox:_["a"],VContainer:C["a"],VDialog:D["a"],VForm:V["a"],VIcon:j["a"],VSnackbar:P["a"],VSpacer:I["a"],VTextField:E["a"],VToolbar:U["a"],VToolbarItems:z["a"],VToolbarTitle:z["b"]});var $=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dSignIn,callback:function(e){t.dSignIn=e},expression:"dSignIn"}},[n("v-card",[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("strong",[t._v("Sign In")])]),n("v-spacer"),n("div",[n("v-icon",{on:{click:t.closeD}},[t._v("mdi-close")])],1)],1),n("v-card-text",[n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{type:"text",rules:[t.rules.required,t.rules.email],label:"E-mail *"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),n("v-text-field",{attrs:{"append-icon":t.showPwd?"mdi-eye":"mdi-eye-off",rules:[t.rules.required],type:t.showPwd?"text":"password",name:"input-10-1",label:"Password *"},on:{"click:append":function(e){t.showPwd=!t.showPwd}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),n("p",{directives:[{name:"show",rawName:"v-show",value:t.snackbar,expression:"snackbar"}],staticClass:"red--text"},[t._v(t._s(t.text))])],1)],1),n("v-card-actions",{staticClass:"pb-6"},[n("v-spacer"),n("v-btn",{staticClass:"mr-2",attrs:{disabled:!t.valid,color:"success"},on:{click:t.login}},[t._v("login")]),n("v-btn",{staticClass:"mr-4",on:{click:t.closeD}},[t._v("Cancel")])],1)],1)],1)],1)},A=[],q=n("2f62");function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B={name:"sign-in-form",props:["dialogSignIn"],created:function(){this.dSignIn=this.dialogSignIn},data:function(){return{showPwd:!1,snackbar:!1,text:"* The username or password is incorrect.",timeout:3e3,dSignIn:!1,valid:!0,user:{email:"",password:""},rules:{required:function(t){return!!t||"Required."},email:function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}}}},methods:N({},Object(q["b"])(["auth_login"]),{login:function(){var t=this;this.$refs.form.validate()&&this.auth_login(this.user).then((function(){t.isAuthenticated?t.closeD():t.snackbar=!0}))},reset:function(){this.$refs.form.reset()},closeD:function(){this.dSignIn=!1,this.snackbar=!1,this.$emit("closeDSI",this.dSignIn)}}),computed:Object(q["c"])(["isAuthenticated"])},M=B,L=Object(x["a"])(M,$,A,!1,null,null,null),Q=L.exports;y()(L,{VBtn:k["a"],VCard:S["a"],VCardActions:O["a"],VCardText:O["b"],VContainer:C["a"],VDialog:D["a"],VForm:V["a"],VIcon:j["a"],VSpacer:I["a"],VTextField:E["a"],VToolbar:U["a"],VToolbarTitle:z["b"]});var Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dSignOut,callback:function(e){t.dSignOut=e},expression:"dSignOut"}},[n("v-card",[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("strong",[t._v("Sign Out")])]),n("v-spacer"),n("div",[n("v-icon",{on:{click:t.closeD}},[t._v("mdi-close")])],1)],1),n("v-card-text",[n("v-container",[n("p",[t._v("Are you sure to sign out?")])])],1),n("v-card-actions",{staticClass:"pb-6"},[n("v-spacer"),n("v-btn",{staticClass:"mr-2",attrs:{color:"success"},on:{click:t.fLogout}},[t._v("logout")]),n("v-btn",{staticClass:"mr-4",on:{click:t.closeD}},[t._v("Cancel")])],1)],1)],1)],1)},J=[];function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var K={name:"sign-out-form",props:["dialogSignOut"],created:function(){this.dSignOut=this.dialogSignOut},data:function(){return{text:"User created successfully!",timeout:3e3,dSignOut:!1}},methods:H({},Object(q["b"])(["logout"]),{fLogout:function(){var t=this;this.logout().then((function(){t.closeD()}))},closeD:function(){this.dSignOut=!1,this.$emit("closeDSOut",this.dSignOut)}})},W=K,X=Object(x["a"])(W,Y,J,!1,null,null,null),Z=X.exports;function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}y()(X,{VBtn:k["a"],VCard:S["a"],VCardActions:O["a"],VCardText:O["b"],VContainer:C["a"],VDialog:D["a"],VIcon:j["a"],VSpacer:I["a"],VToolbar:U["a"],VToolbarTitle:z["b"]});var nt={name:"App",components:{SignUpForm:R,SignInForm:Q,SignOutForm:Z},data:function(){return{component:"PrizeDetail",openDSignUp:!1,openDSignIn:!1,openDSignOut:!1,snackbar:!1,timeout:5e3,text:"User created successfully!"}},created:function(){var t=this;window.addEventListener("beforeunload",(function(){t.logout().then((function(){console.log("ok")}))}),!1)},methods:et({},Object(q["b"])(["logout"]),{openSignUp:function(){this.openDSignUp=!0},openSignIn:function(){this.openDSignIn=!0},openSignOut:function(){this.openDSignOut=!0},goTo:function(){this.$router.push({name:"Rewards"})},closeDSU:function(t){t.snack&&(this.snackbar=t.snack),this.openDSignUp=t.dSignUp},closeDSI:function(t){this.openDSignIn=t},closeDSOut:function(t){this.openDSignOut=t}}),computed:Object(q["c"])(["isAuthenticated","getUserName"])},at=nt,rt=n("7496"),ot=n("40dc"),it=n("62ad"),st=n("a75b"),ct=n("553a"),lt=n("adda"),ut=n("8860"),dt=n("da13"),pt=n("5d23"),vt=n("e449"),ft=n("0fd9"),mt=n("8dd9"),gt=Object(x["a"])(at,r,o,!1,null,null,null),bt=gt.exports;y()(gt,{VApp:rt["a"],VAppBar:ot["a"],VBtn:k["a"],VCard:S["a"],VCardText:O["b"],VCol:it["a"],VContainer:C["a"],VContent:st["a"],VFooter:ct["a"],VIcon:j["a"],VImg:lt["a"],VList:ut["a"],VListItem:dt["a"],VListItemTitle:pt["b"],VMenu:vt["a"],VRow:ft["a"],VSheet:mt["a"],VSnackbar:P["a"],VSpacer:I["a"],VToolbar:U["a"],VToolbarTitle:z["b"]});var ht=n("f309");a["a"].use(ht["a"]);var xt=new ht["a"]({}),wt=n("8c4f"),yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",{staticClass:"pt-0"},[n("p",{staticClass:"text-center my-6 title"},[t._v("Here is the full list of prizes that you can win.")]),n("v-row",{attrs:{"no-gutters":""}},t._l(t.rewards,(function(e,a){return n("v-col",{key:e._id,staticClass:"px-3 py-3",attrs:{cols:"12",sm:"4",item:e,index:a}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",height:"400"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.image}}),n("v-card-text",{staticClass:"text--primary"},[n("h2",{staticClass:"text-center my-8"},[t._v(t._s(e.name))])]),n("v-card-actions",[n("v-btn",{staticClass:"yellow darken-1 px-5 mx-auto",attrs:{rounded:"",large:""},on:{click:function(n){return t.prizeDetail(e._id)}}},[t._v("Reedem")])],1)],1)],1)})),1)],1)},kt=[],St=(n("d81d"),"api/rewards/"),Ot=function(){function t(){Object(u["a"])(this,t)}return Object(d["a"])(t,null,[{key:"getRewards",value:function(){return new Promise(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,n){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get(St);case 3:a=t.sent,r=a.data,e(r.map((function(t){return t}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getRewardById",value:function(t){return new Promise(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(n,a){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("".concat(St,"prize/"),{id:t});case 3:r=e.sent,o=r.data,n(o),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),a(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"updateQuantityById",value:function(t){return new Promise(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.put(St,{id:t});case 3:r=e.sent,n(r.data),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("request",e.t0),a(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}}]),t}(),_t=Ot,Ct={name:"RewardsComponent",data:function(){return{rewards:[],error:"",text:""}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_t.getRewards();case 3:t.rewards=e.sent,t.rewards.map((function(t){t.image=n("2d1e")("./".concat(t.image,".jpg"))})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0.message;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{prizeDetail:function(t){this.$router.push({name:"PrizeDetail",params:{id:t}})}}},Dt=Ct,Vt=Object(x["a"])(Dt,yt,kt,!1,null,null,null),jt=Vt.exports;y()(Vt,{VBtn:k["a"],VCard:S["a"],VCardActions:O["a"],VCardText:O["b"],VCol:it["a"],VContent:st["a"],VImg:lt["a"],VRow:ft["a"]});var Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{col:"12",sm:"6"}},[n("v-img",{attrs:{src:t.imgUrl,cover:"",height:"330"}})],1),n("v-col",{attrs:{col:"12",sm:"6"}},[n("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline mb-1 text-center mt-5"},[n("strong",[t._v(t._s(t.prizeDetail.name))])]),n("v-divider",{staticClass:"my-5 flex-out"}),n("br"),n("v-btn",{staticClass:"yellow darken-1 px-5 mx-auto",attrs:{rounded:"","max-width":"100",disabled:0==t.prizeDetail.quantity},on:{click:function(e){return t.openModal(t.prizeDetail._id)}}},[t._v("Reedem")]),n("v-divider",{staticClass:"my-5 flex-out"}),n("p",{staticClass:"text-center",class:{"red--text":0==t.prizeDetail.quantity}},[t._v(t._s(t.prizeDetail.quantity)+" left in stock")])],1)],1)],1)],1)],1),n("v-divider",{staticClass:"my-5"}),n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{col:"12",sm:"2"}},[n("h2",[n("strong",[t._v("Description")])])]),n("v-col",{attrs:{col:"12",sm:"10"}},[n("p",{staticClass:"body-1"},[t._v(t._s(t.prizeDetail.description))])])],1),t.dialog?n("confirmDialog",{attrs:{dialog:t.dialog,prize:t.prizeDetail},on:{closePrizeD:function(e){return t.closePrizeD(e)}}}):t._e(),t.openS||t.openE?n("congratsDialog",{attrs:{openS:t.openS,openE:t.openE},on:{closeSE:function(e){return t.closeSE(e)}}}):t._e(),n("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" "),n("v-btn",{attrs:{color:"green",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},It=[],Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.onDialog,callback:function(e){t.onDialog=e},expression:"onDialog"}},[n("v-card",[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"headline py-8"},[n("div",{staticClass:"mx-auto"},[n("strong",[t._v("Are you Sure?")])])]),n("v-spacer"),n("div",[n("v-icon",{on:{click:t.closeDialog}},[t._v("mdi-close")])],1)],1),n("div",{staticClass:"mx-auto",staticStyle:{width:"200px"}},[n("v-avatar",{attrs:{size:"200"}},[n("v-img",{attrs:{src:t.imageUrl,alt:t.prizeDetail.image,cover:""}})],1)],1),n("v-card-text",{staticClass:"text-center body-1 pb-0 pt-5"},[t._v("Reedem for flyaway")]),n("v-card-text",{staticClass:"text-center body-2"},[n("strong",[t._v("Quantity")]),t._v(" "+t._s(t.prizeDetail.quantity)+" ")]),n("v-card-actions",{staticClass:"pb-5"},[n("div",{staticClass:"mx-auto"},[n("v-btn",{staticClass:"yellow darken-2 mx-2",attrs:{width:"100",rounded:"",disabled:0==t.prizeDetail.quantity},on:{click:function(e){return t.updateQuantity(t.prizeDetail._id)}}},[t._v("Yes")]),n("v-btn",{staticClass:"grey lighten-2 mx-2",attrs:{width:"100",rounded:""},on:{click:t.closeDialog}},[t._v("Cancel")])],1)])],1)],1)],1)},Ut=[],zt={props:["dialog","prize"],data:function(){return{onDialog:!1,openS:!1,openE:!1}},created:function(){this.onDialog=this.dialog},methods:{updateQuantity:function(t){var e=this;_t.updateQuantityById(t).then((function(t){t?e.openS=!0:e.openE=!0,e.closeDialog()}))},closeDialog:function(){this.onDialog=!1,this.$emit("closePrizeD",{onDialog:!1,openS:this.openS,openE:this.openE})}},computed:{prizeDetail:function(){return this.prize},imageUrl:function(){return n("2d1e")("./".concat(this.prizeDetail.image,".jpg"))}}},Tt=zt,Rt=n("8212"),$t=Object(x["a"])(Tt,Et,Ut,!1,null,null,null),At=$t.exports;y()($t,{VAvatar:Rt["a"],VBtn:k["a"],VCard:S["a"],VCardActions:O["a"],VCardText:O["b"],VDialog:D["a"],VIcon:j["a"],VImg:lt["a"],VSpacer:I["a"],VToolbar:U["a"],VToolbarTitle:z["b"]});var qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.openSuccess,callback:function(e){t.openSuccess=e},expression:"openSuccess"}},[n("v-card",[n("v-card-title",{staticClass:"headline pt-8 pb-4",attrs:{"primary-title":""}},[n("strong",{staticClass:"mx-auto"},[t._v("Congratulation!")])]),n("v-card-text",{staticClass:"text-center body-1 pb-0 pt-5"},[t._v("You reedemed")]),n("v-card-text",{staticClass:"text-center body-1"},[t._v("Flyaway.")]),n("v-card-actions",{staticClass:"pb-8"},[n("div",{staticClass:"mx-auto"},[n("v-btn",{staticClass:"yellow darken-2 mx-2",attrs:{rounded:""},on:{click:function(e){return t.goTo()}}},[t._v("More Prizes")])],1)])],1)],1)],1),n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.openError,callback:function(e){t.openError=e},expression:"openError"}},[n("v-card",[n("v-card-title",{staticClass:"headline pt-8 pb-4",attrs:{"primary-title":""}},[n("strong",{staticClass:"mx-auto"},[t._v("Ups!")])]),n("v-card-text",{staticClass:"text-center body-1 pb-0 pt-5"},[t._v("Sorry your redeemed was not posible.")]),n("v-card-text",{staticClass:"text-center body-1 pb-0"},[t._v(" There is "),n("strong",[t._v("0")]),t._v(" left stock. ")]),n("v-card-text",{staticClass:"text-center body-1"},[t._v("Go to more prizes and try again.")]),n("v-card-actions",{staticClass:"pb-8"},[n("div",{staticClass:"mx-auto"},[n("v-btn",{staticClass:"yellow darken-2 mx-2",attrs:{rounded:""},on:{click:function(e){return t.goTo()}}},[t._v("More Prizes")])],1)])],1)],1)],1)])},Ft=[],Nt={props:["openS","openE"],data:function(){return{openSuccess:!1,openError:!1}},created:function(){this.openSuccess=this.openS,this.openError=this.openE},methods:{goTo:function(){this.openSuccess=!1,this.openError=!1,this.$emit("closeSE",!1),this.$router.push({name:"Rewards"})}}},Bt=Nt,Mt=Object(x["a"])(Bt,qt,Ft,!1,null,null,null),Lt=Mt.exports;y()(Mt,{VBtn:k["a"],VCard:S["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VDialog:D["a"]});var Qt={name:"PrizeDetail",components:{confirmDialog:At,congratsDialog:Lt},data:function(){return{prizeDetail:{},imgUrl:"",openS:!1,openE:!1,dialog:!1,msn:"",error:"",quantity:0,text:"",timeout:3e3,snackbar:!1}},beforeRouteEnter:function(t,e,n){_t.getRewardById(t.params.id).then((function(t){n((function(e){e.setData(t)}))}),(function(t){n((function(e){e.setError(t)}))}))},methods:{openModal:function(){this.isAuthenticated?this.dialog=!0:(this.text="Sign in is necesary to redeem prizes!",this.snackbar=!0)},setData:function(t){this.prizeDetail=t,this.imgUrl=n("2d1e")("./".concat(t.image,".jpg"))},setQuantity:function(t){this.quantity=t},setError:function(t){this.error=t},closePrizeD:function(t){this.dialog=t.onDialog,this.openS=t.openS,this.openE=t.openE},closeSE:function(t){this.openS=t,this.openE=t}},updated:function(){var t=this;_t.getRewardById(this.prizeDetail._id).then((function(e){t.setData(e)}),(function(e){t.setError(e)}))},computed:Object(q["c"])(["isAuthenticated"])},Yt=Qt,Jt=(n("fdd5"),n("ce7e")),Gt=Object(x["a"])(Yt,Pt,It,!1,null,null,null),Ht=Gt.exports;y()(Gt,{VBtn:k["a"],VCard:S["a"],VCol:it["a"],VContainer:C["a"],VDivider:Jt["a"],VImg:lt["a"],VListItem:dt["a"],VListItemContent:pt["a"],VListItemTitle:pt["b"],VRow:ft["a"],VSnackbar:P["a"]});var Kt="api/users/",Wt={token:localStorage.getItem("user-token")||"",status:"",userName:""},Xt={isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status},getUserName:function(t){return t.userName}},Zt={auth_login:function(t,e){var n=t.commit;return new Promise((function(t,a){v.a.post("".concat(Kt,"auth/"),{email:e.email,password:e.password}).then((function(e){var a=e.data._id;localStorage.setItem("user-token",a),n("auth_success",e.data),t(e)}),(function(t){n("auth_error",t),localStorage.removeItem("user-token"),a(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t){e("auth_logout"),localStorage.removeItem("user-token"),t()}))}},te={auth:function(t){t.status="success"},auth_success:function(t,e){t.status="success",t.token=e._id,t.userName=e.name},auth_error:function(t){t.status="error"},auth_logout:function(t){t.status="",t.token="",t.userName=""}},ee={state:Wt,getters:Xt,actions:Zt,mutations:te};a["a"].use(q["a"]);var ne=new q["a"].Store({modules:{auth:ee}});a["a"].use(wt["a"]),a["a"].config.productionTip=!1;var ae=new wt["a"]({routes:[{path:"/",component:jt,name:"Rewards"},{path:"/prize/detail/:id",component:Ht,name:"PrizeDetail",props:!1}]});new a["a"]({vuetify:xt,router:ae,store:ne,render:function(t){return t(bt)}}).$mount("#app")},"6de1":function(t,e,n){t.exports=n.p+"img/headphone.3dd75f64.jpg"},"99e2":function(t,e,n){t.exports=n.p+"img/xbox.f461149f.jpg"},cdc8:function(t,e,n){t.exports=n.p+"img/game.86a3740c.jpg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.bcb3102b.png"},d104:function(t,e,n){t.exports=n.p+"img/logitech.a34135ef.jpg"},f778:function(t,e,n){t.exports=n.p+"img/bose.015a4601.jpg"},fdd5:function(t,e,n){"use strict";var a=n("3d64"),r=n.n(a);r.a}});
//# sourceMappingURL=app.c8dacc70.js.map