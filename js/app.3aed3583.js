(function(){var e={3333:function(e,t,n){"use strict";var o=n(6369),r=n(8499),a=n.n(r),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],s={created(){this.$store.commit("addrouter",this.$router)}},u=s,m=n(1001),d=(0,m.Z)(u,i,c,!1,null,null,null),l=d.exports,h=n(1120),p=n(3822),f=n(2415);o["default"].use(p.ZP);var v=new p.ZP.Store({state:{routerList:[],userInfo:{}},getters:{},mutations:{setRouterAuthority(e,t){e.routerList=t},setUserInfo(e,t){e.userInfo=t},clearPersistedData(e){e.routerList=[],e.userInfo={}},addrouter(e,t){function o(e){return e.map((e=>{const t={path:e.path||"",name:e.name||"",meta:e.meta||{},component:()=>n(9331)(`./views${e.component}`)};return e.redirect&&(t.redirect=e.redirect),e.children&&e.children.length>0&&(t.children=o(e.children)),t}))}o(e.routerList).forEach((e=>{t.addRoute("main",e)})),t.addRoute({path:"*",redirect:()=>localStorage.getItem("token")?(console.log("有token"),"/home/echart1"):(console.log("无token"),"/login"),meta:{title:"重定向"}}),t.onReady((()=>{}))}},actions:{},modules:{},plugins:[(0,f.Z)({key:"allData",storage:window.localStorage})]}),g=(n(7658),n(7634)),b=n.n(g);let w=[],y=[],k=[],x={title:{text:"用户统计"},legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],axisLabel:{lineStyle:{color:"#17b3a3"}},axisLine:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLabel:{lineStyle:{color:"#17b3a3"}}}],series:[{name:"新增用户",type:"bar",data:[5,10,12,60,65,53,53]},{name:"活跃用户",type:"bar",data:[200,500,550,800,550,770,170]}],color:["#2ec7c9","#b6a2de"]};for(let O=1;O<20;O++)w.push({date:b().Random.datetime("yyyy-MM-dd"),name:b().Random.cname(),address:b().Random.city()});for(let O=1;O<7;O++)y.push({name:"今日支付订单",value:Math.ceil(1e4*Math.random()-1),icon:"success",color:b().Random.color()});for(let O=1;O<8;O++)k.push({oppo:Math.ceil(1e4*Math.random()-1),vivo:Math.ceil(1e4*Math.random()-1),"三星":Math.ceil(1e4*Math.random()-1),"小米":Math.ceil(1e4*Math.random()-1),"苹果":Math.ceil(1e4*Math.random()-1),"魅族":Math.ceil(1e4*Math.random()-1)});b().mock("/api/home/tableData",(()=>b().mock({code:200,message:"请求成功",data:w}))),b().mock("/api/home/orderData",(()=>b().mock({code:200,message:"请求成功",data:y}))),b().mock("/api/home/getLineChartData",(()=>b().mock({code:200,message:"请求成功",data:k}))),b().mock("/api/home/zhuzhuangtu",(()=>b().mock({code:200,message:"请求成功",data:x})));let M=[];for(let O=1;O<150;O++)M.push({date1:function(){const e=new Date("2023-01-01"),t=new Date("2023-12-31"),n=e.getTime()+Math.random()*(t.getTime()-e.getTime()),o=new Date(n),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=r[o.getDay()],c=a[o.getMonth()],s=o.getDate(),u=o.getFullYear();return`${i} ${c} ${s} ${u} 00:00:00 GMT+0800 (中国标准时间)`},name:b().Random.cname(),address:b().Random.city(),age:Math.ceil(50*Math.random()-1),gender:Math.ceil(2*Math.random()-1),id:crypto.randomUUID()});b().mock("/api/mall/add","post",(e=>{let t=JSON.parse(e.body).id;return console.log(t),t?(M.forEach(((n,o)=>{n.id==t&&(M[o]=JSON.parse(e.body))})),b().mock({code:200,message:"修改成功"})):(M.unshift({...JSON.parse(e.body),id:crypto.randomUUID()}),b().mock({code:200,message:"添加成功"}))})),b().mock("/api/user/tableData","post",(e=>{let{page:t,limit:n}=JSON.parse(e.body),o=(t-1)*n,r=t*n,a=M.length,i=M.slice(o,r),c=JSON.parse(e.body).searchName;return c?(i=M.filter(((e,t)=>-1!=e.name.indexOf(c))),a=i.length,i=i.slice(o,r),b().mock({code:200,message:"请求成功",data:{arr:i,total:a}})):b().mock({code:200,message:"请求成功",data:{arr:i,total:a}})})),b().mock("/api/user/deleteTableData","post",(e=>{let t=Object.values(JSON.parse(e.body));return t.forEach(((e,t)=>{M.forEach(((t,n)=>{e===t.id&&M.splice(n,1)}))})),b().mock({code:200,message:"删除成功",data:M})})),b().mock("/api/login","post",(e=>{let{username:t,password:n}=JSON.parse(e.body);return"admin"==t&&"admin"==n?b().mock({code:200,message:"登录成功",data:{userInfo:{permissions:["SuperAdmin","GeneralAdmin"],username:"admin",password:"admin",name:"SuperAdmin",identity:"超级管理员",LastLandingSite:"天津市",LastLandingTime:"2023-08-01 12:00:00"},token:crypto.randomUUID(),menuData:[{path:"home",name:"home",icon:"s-home",redirect:"/home/echart1",meta:{title:"首页",requireAuth:!0},component:"/Home/index.vue",children:[{path:"echart1",name:"echart1",meta:{title:"图表1",requireAuth:!0},component:"/Home/compoents/echart1.vue"},{path:"echart2",name:"echart2",meta:{title:"图表2",requireAuth:!0},component:"/Home/compoents/echart2.vue"},{path:"echart3",name:"echart3",meta:{title:"图表3",requireAuth:!0},component:"/Home/compoents/echart3.vue"}]},{path:"user",name:"user",icon:"user",meta:{title:"用户",requireAuth:!0},component:"/User/index.vue"},{path:"mall",name:"mall",icon:"video-play",meta:{title:"商城",requireAuth:!0},component:"/Mall/index.vue"},{path:"page1",name:"page1",icon:"setting",meta:{title:"其他1",requireAuth:!0},component:"/Other/otherOne.vue"},{path:"page2",name:"page2",icon:"setting",meta:{title:"其他2",requireAuth:!0},component:"/Other/otherTwo.vue"}]}}):"admin1"==t&&"admin1"==n?b().mock({code:200,message:"登录成功",data:{userInfo:{permissions:["GeneralAdmin"],username:"admin1",password:"admin1",name:"GeneralAdmin",identity:"普通管理员",LastLandingSite:"北京市",LastLandingTime:"2021-08-01 12:00:00"},token:crypto.randomUUID(),menuData:[{path:"home",name:"home",redirect:"/home/echart1",icon:"s-home",meta:{title:"首页",requireAuth:!0},component:"/Home/index.vue",children:[{path:"echart1",name:"echart1",meta:{title:"图表1",requireAuth:!0},component:"/Home/compoents/echart1.vue"},{path:"echart2",name:"echart2",meta:{title:"图表2",requireAuth:!0},component:"/Home/compoents/echart2.vue"},{path:"echart3",name:"echart3",meta:{title:"图表3",requireAuth:!0},component:"/Home/compoents/echart3.vue"}]},{path:"user",name:"user",icon:"user",meta:{title:"用户",requireAuth:!0},component:"/User/index.vue"},{path:"mall",name:"mall",icon:"video-play",meta:{title:"商城",requireAuth:!0},component:"/Mall/index.vue"}]}}):b().mock({code:400,message:"用户名或密码错误",data:null})})),o["default"].directive("permission",{inserted(e,t){const{value:n}=t,o=v.state.userInfo.permissions;-1===o.indexOf(n)&&e.parentNode.removeChild(e)}}),o["default"].use(a()),o["default"].config.productionTip=!1,new o["default"]({router:h.Z,store:v,render:e=>e(l)}).$mount("#app")},1120:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var o=n(6369),r=n(2631);o["default"].use(r.ZP);const a=[{path:"/",name:"main",redirect:"/home/echart1",meta:{title:"总路由"},component:()=>n.e(337).then(n.bind(n,6337)),children:[]},{path:"/login",name:"login",meta:{title:"登录"},component:()=>Promise.all([n.e(138),n.e(281)]).then(n.bind(n,9281))},{path:"/register",name:"register",meta:{title:"注册"},component:()=>n.e(970).then(n.bind(n,7970))},{path:"/forget",name:"forget",meta:{title:"忘记密码"},component:()=>n.e(135).then(n.bind(n,135))}],i=new r.ZP({mode:"hash",base:"",routes:a});function c(){const e=new r.ZP({mode:"history",base:"",routes:[{path:"/",name:"main",redirect:"/home/echart1",meta:{title:"总路由"},component:()=>n.e(337).then(n.bind(n,6337)),children:[]},{path:"/login",name:"login",meta:{title:"登录"},component:()=>Promise.all([n.e(138),n.e(281)]).then(n.bind(n,9281))},{path:"/register",name:"register",meta:{title:"注册"},component:()=>n.e(970).then(n.bind(n,7970))},{path:"/forget",name:"forget",meta:{title:"忘记密码"},component:()=>n.e(135).then(n.bind(n,135))}]});i.matcher=e.matcher}i.beforeEach(((e,t,n)=>{localStorage.getItem("token")||"/login"===e.path?n():e.meta.requireAuth?n("/login"):n()})),t.Z=i},9331:function(e,t,n){var o={"./views/Forget":[135,135],"./views/Forget/":[135,135],"./views/Forget/index":[135,135],"./views/Forget/index.vue":[135,135],"./views/Home":[2138,138,938],"./views/Home/":[2138,138,938],"./views/Home/compoents/echart1":[6954,138,43,954],"./views/Home/compoents/echart1.vue":[6954,138,43,954],"./views/Home/compoents/echart2":[5245,138,43,245],"./views/Home/compoents/echart2.vue":[5245,138,43,245],"./views/Home/compoents/echart3":[2464,43,464],"./views/Home/compoents/echart3.vue":[2464,43,464],"./views/Home/index":[2138,138,938],"./views/Home/index.vue":[2138,138,938],"./views/Login":[9281,138,281],"./views/Login/":[9281,138,281],"./views/Login/index":[9281,138,281],"./views/Login/index.vue":[9281,138,281],"./views/Main":[6337,337],"./views/Main/":[6337,337],"./views/Main/index":[6337,337],"./views/Main/index.vue":[6337,337],"./views/Mall":[4848,848],"./views/Mall/":[4848,848],"./views/Mall/index":[4848,848],"./views/Mall/index.vue":[4848,848],"./views/Other/otherOne":[7612,612],"./views/Other/otherOne.vue":[7612,612],"./views/Other/otherTwo":[3767,767],"./views/Other/otherTwo.vue":[3767,767],"./views/Placeholder":[6727,727],"./views/Placeholder.vue":[6727,727],"./views/Register":[7970,970],"./views/Register/":[7970,970],"./views/Register/index":[7970,970],"./views/Register/index.vue":[7970,970],"./views/User":[7119,138,119],"./views/User/":[7119,138,119],"./views/User/index":[7119,138,119],"./views/User/index.vue":[7119,138,119]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=9331,e.exports=r}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(m=0;m<e.length;m++){o=e[m][0],r=e[m][1],a=e[m][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(m--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{43:"a8d364a8",119:"6778b6cc",135:"31804b0a",138:"16381b0b",245:"2de540d3",281:"aa01e7db",337:"41ca6115",464:"10acddc0",612:"308c0a20",727:"47ace19b",767:"9b6bbe85",848:"ef70fe51",938:"c547a2f9",954:"583bb1b6",970:"79a1e1aa"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{119:"07be18fe",245:"2033101a",281:"89dcc9e6",337:"29b23d55",464:"cadb20ce",848:"dc6520f5",938:"d5e140cf",954:"d1128a1e"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="admin2:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),m=0;m<u.length;m++){var d=u[m];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[r];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,a.parentNode&&a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return r();e(o,c,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={119:1,245:1,281:1,337:1,464:1,848:1,938:1,954:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),c=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var m=s(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(m)},o=self["webpackChunkadmin2"]=self["webpackChunkadmin2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3333)}));o=n.O(o)})();
//# sourceMappingURL=app.3aed3583.js.map