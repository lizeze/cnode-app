webpackJsonp([1],{BSAW:function(t,e){},"GE/O":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topBar clearfix"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("nav",[a("ol",{staticStyle:{"list-style":"none"}},t._l(t.navList,function(e){return a("li",{key:e.text},[a("a",{attrs:{href:"#"}},[t._v(t._s(e.text))])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"searchBox "},[e("input",{attrs:{type:"text"}})])}]};var i={name:"App",components:{TopBar:a("VU/8")({name:"topBar",data:function(){return{navList:[{text:"首页"},{text:"新手入门"},{text:"API"},{text:"关于"},{text:"注册"},{text:"登陆"}]}}},s,!1,function(t){a("k2xd")},"data-v-5ed6fbd1",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("top-bar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")(i,r,!1,function(t){a("h1ej")},null,null).exports,o=a("/ocq"),l={name:"noreply",data:function(){return{topicData:{type:Array}}},created:function(){var t=this;this.axiosGetDev("/topic/noreply").then(function(e){t.topicData=e.data})}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"noreply"},[a("div",{staticClass:"header"},[t._v("\n    无人回复的话题\n  ")]),t._v(" "),a("div",{staticClass:"content"},[a("ul",t._l(t.topicData,function(e,n){return a("li",{key:n,staticClass:"content-item"},[a("a",{attrs:{href:"#"}},[t._v(" "+t._s(e.title))])])}),0)])])},staticRenderFns:[]};var v=a("VU/8")(l,u,!1,function(t){a("GE/O")},"data-v-f79e7ec6",null).exports,d={name:"author",props:{userInfo:{type:Object}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"author"},[a("div",{staticClass:"header"},[t._v("\n    个人信息\n  ")]),t._v(" "),a("div",{staticClass:"profile"},[a("div",{staticClass:"usercard"},[a("div",{staticClass:"avatar"},[a("a",{attrs:{href:"#"}},[a("img",{staticStyle:{width:"48px",height:"48px"},attrs:{src:t.userInfo.avatar_url,alt:"头像"}})])]),t._v(" "),a("div",{staticClass:"loginName"},[a("a",{attrs:{href:""}},[t._v("\n          "+t._s(t.userInfo.loginname)+"\n        ")])]),t._v(" "),a("div",{staticClass:"score"},[t._v(" 积分："+t._s(t.userInfo.score))]),t._v(" "),a("p",{staticClass:"signature"},[t._v("“ 这家伙很懒，什么个性签名都没有留下。”")])])])])},staticRenderFns:[]};var p=a("VU/8")(d,f,!1,function(t){a("cRHE")},"data-v-ad978df8",null).exports,_={name:"othertopic",props:{userInfo:{type:Object}},methods:{open:function(t){this.$router.push({name:"detail",params:{id:t}})},getStatus:function(t){var e=t.split("/");return e[e.length-1]}},watch:{$route:function(t){this.$router.go(0)}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"othertopic"},[a("div",{staticClass:"header"},[t._v("\n      作者其他话题\n    ")]),t._v(" "),a("div",{staticClass:"content"},[a("ul",t._l(t.userInfo.recent_topics,function(e){return a("li",{key:e.id,staticClass:"content-item"},[a("a",{attrs:{href:"#"},on:{click:function(a){a.stopPropagation(),a.preventDefault(),t.$emit("title-click",e.id)}}},[t._v(" "+t._s(e.title))])])}),0)])])},staticRenderFns:[]};var m=a("VU/8")(_,h,!1,function(t){a("VYWR")},"data-v-099af7be",null).exports,C={name:"topicdetail",props:{article:{type:Object}},methods:{DateMinus:function(t){var e=new Date(t),a=(new Date).getTime()-e.getTime();return parseInt(a/864e5)}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warpper clearfix"},[a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",{staticClass:"top"},[t._v("置顶")]),t._v("\n      "+t._s(t.article.title)+"\n      "),a("div",{staticClass:"describe"},[a("span",{staticClass:"item"}),t._v("\n        发布于"+t._s(t.DateMinus(t.article.create_at))+"天前\n        "),a("span",{staticClass:"item"}),t._v("\n        作者"+t._s(t.article.author.loginname)+"\n        "),a("span",{staticClass:"item"}),t._v("\n        "+t._s(t.article.visit_count)+"次浏览\n        "),a("span",{staticClass:"item"}),t._v("最后一次编辑9天前\n      ")]),t._v(" "),a("div",{staticClass:"border1px"})]),t._v(" "),a("article",{staticClass:"article",domProps:{innerHTML:t._s(t.article.content)}})]),t._v(" "),a("div",{staticClass:"panels"})])},staticRenderFns:[]};var g={components:{Othertopic:m,Author:p,Noreply:v,topicDetail:a("VU/8")(C,x,!1,function(t){a("TenP")},"data-v-7db45d95",null).exports},data:function(){return{article:{author:{loginname:""}},userInfo:{}}},created:function(){this.loadTopic(this.$route.params.id,!0)},methods:{titleClick:function(t){this.loadTopic(t,!1)},loadTopic:function(t,e){var a=this;this.axiosGet("/topic/"+t).then(function(t){a.article=t.data,e&&a.axiosGet("/user/"+a.article.author.loginname).then(function(t){a.userInfo=t.data})})},DateMinus:function(t){var e=new Date(t),a=(new Date).getTime()-e.getTime();return parseInt(a/864e5)}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warpper clearfix"},[a("div",{staticClass:"content"},[a("topicDetail",{attrs:{article:t.article}})],1),t._v(" "),a("div",{staticClass:"panels"},[a("div",{staticClass:"panel"},[a("author",{attrs:{"user-info":t.userInfo}})],1),t._v(" "),a("div",{staticClass:"panel"},[a("othertopic",{attrs:{"user-info":t.userInfo},on:{"title-click":t.titleClick}})],1),t._v(" "),a("div",{staticClass:"panel"},[a("noreply",{attrs:{"user-info":t.userInfo}})],1)])])},staticRenderFns:[]};var b=a("VU/8")(g,y,!1,function(t){a("ft7N")},"data-v-04b44fb3",null).exports,D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"topBar"},[a("ol",{staticClass:"clearfix",staticStyle:{"list-style":"none"}},t._l(t.navList,function(e){return a("li",{key:e.id},[a("a",{class:{topBarActive:t.active==e.id},attrs:{href:"#"},on:{click:function(a){t.changeNav(e)}}},[t._v(t._s(e.text))])])}),0)]),t._v(" "),a("section",[a("ol",{staticStyle:{"list-style":"none"}},t._l(t.topicList,function(e){return a("li",{key:e.id,staticClass:"clearfix"},[a("div",{staticClass:"portrai"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})])]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticStyle:{width:"60px"}},[a("span",{staticClass:"leftCount"},[t._v(t._s(e.reply_count))]),a("span",{staticClass:"count_seperator"},[t._v("/")]),a("span",{staticClass:"rightCount"},[t._v(t._s(e.visit_count))])]),t._v(" "),e.top?a("span",{staticClass:"tab top"},[t._v("置顶")]):t._e(),t._v(" "),e.top?t._e():a("span",{staticClass:"tab topic "},[t._v("\n             "+t._s(t.getTab(e.tab))+"\n\n          ")]),t._v(" "),a("router-link",{staticClass:"title",attrs:{title:e.title,to:{name:"detail",params:{id:e.id}}}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)])}),0)])])},staticRenderFns:[]};var k={name:"index",components:{Noreply:v,MainContent:a("VU/8")({name:"MainContent",methods:{changePage:function(t){this.loadData(t)},loadData:function(t){var e=this;this.axiosGet("topics?pageNumber="+t+"&limit=50").then(function(t){e.topicList=t.data})},changeNav:function(t){this.active=t.id},getTab:function(t){switch(t){case"ask":return"问答";case"share":return"共享";case"good":return"精华";case"job":return"招聘"}}},mounted:function(){this.loadData(1)},data:function(){return{active:0,navList:[{text:"全部",id:0},{text:"精华",id:1},{text:"分享",id:2},{text:"问答",id:3},{text:"招聘",id:4},{text:"客户端测试",id:5}],topicList:[]}}},D,!1,function(t){a("lJ7Y")},"data-v-76728b02",null).exports},data:function(){return{userInfo:{}}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container clearfix"},[e("div",{staticClass:"contents"},[e("MainContent")],1),this._v(" "),e("div",{staticClass:"cards"},[this._m(0),this._v(" "),e("div",{staticClass:"card"},[e("noreply")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"inner"},[a("p",[t._v(" CNode：Node.js专业中文社区")]),t._v(" "),a("div",[t._v("您可以 "),a("a",{attrs:{href:"#"}},[t._v("登陆")]),t._v(" 或 "),a("a",{attrs:{href:"#"}},[t._v("注册")]),t._v(",也可以")]),t._v(" "),a("a",{attrs:{href:"#"}},[a("span",[t._v(" 通过 GitHub 登录")])])])])}]};var $=a("VU/8")(k,w,!1,function(t){a("BSAW")},"data-v-b3e21a60",null).exports;n.a.use(o.a);var E=new o.a({mode:"history",routes:[{path:"/",name:"Index",component:$},{path:"/detail/:id",name:"detail",component:b}]}),I=a("//Fk"),T=a.n(I),R=a("mtWM"),N=a.n(R),j={install:function(){n.a.prototype.axiosGet=function(t){return new T.a(function(e,a){N.a.get("https://cnodejs.org/api/v1/"+t).then(function(t){e(t.data)}).finally()})},n.a.prototype.axiosGetDev=function(t,e){return new T.a(function(e,a){N.a.get(t).then(function(t){e(t.data)}).finally()})}}},V={install:function(){var t=this;n.a.prototype.getLoginUser=function(e){return new T.a(function(a,n){t.axiosGet("/user/"+e).then(function(t){a(t.data)})})}}};n.a.config.productionTip=!1,n.a.use(V),n.a.use(j),new n.a({el:"#app",router:E,render:function(t){return t(c)}})},TenP:function(t,e){},VYWR:function(t,e){},cRHE:function(t,e){},ft7N:function(t,e){},h1ej:function(t,e){},k2xd:function(t,e){},lJ7Y:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f60365fc0ebf291dab46.js.map