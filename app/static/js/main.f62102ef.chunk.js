(this.webpackJsonpmyblog=this.webpackJsonpmyblog||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/avatar.75814896.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/articles.d3813e85.svg"},54:function(e,t,a){e.exports=a.p+"static/media/books.ee127b99.svg"},55:function(e,t,a){e.exports=a.p+"static/media/membership.ddbc7eaf.svg"},57:function(e,t,a){e.exports=a(92)},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),i=a(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(14),o=a(56),m=a(48),u=a(6),d=a.n(u),p=a(25),E=a(13),h=a(50),v="FETCH_REQUEST",f="FETCH_SUCCESS",g="FETCH_ERROR",b="SAVE_ARTICLE";function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N={data:[],loading:!1,error:void 0,savedData:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return O({},e,{loading:!0});case f:return O({},e,{loading:!1,data:t.payload});case g:return O({},e,{error:t.message,loading:!1});case b:var a=e.savedData.concat(t.payload);return O({},e,{savedData:a});default:return e}},w=a(27),k=a.n(w),x=a(51),S=a.n(x);k.a.defaults.withCredentials=!0,k.a.defaults.transformRequest=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S.a.stringify(e)},k.a.defaults.baseURL="";var C=k.a,T=function(e){var t=e.page,a=void 0===t?1:t,n=e.limit,r=void 0===n?10:n;return C.get("/api/articles",{params:{page:a,limit:r}})},A=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return C.get("/api/article/".concat(e),{params:{md:t}})};function R(e){return{type:v,payload:e.payload}}function _(e){return{type:g,message:e}}var D=d.a.mark(M),I=d.a.mark(L),H=d.a.mark(P);function M(e){var t,a,n,r,c;return d.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,t=e.payload,a=t.page,n=t.limit,l.next=4,Object(E.b)(T,{page:a,limit:n});case 4:if(!(r=l.sent).error){l.next=10;break}return l.next=8,Object(E.d)(_(r.error));case 8:l.next=12;break;case 10:return l.next=12,Object(E.d)((i=r.data.data.items,{type:f,payload:i}));case 12:l.next=19;break;case 14:return l.prev=14,l.t0=l.catch(0),c=l.t0 instanceof Error&&l.t0.stack?l.t0.stack:"\u4e0d\u77e5\u540d\u9519\u8bef",l.next=19,Object(E.d)(_(c));case 19:case"end":return l.stop()}var i}),D,null,[[0,14]])}function L(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.e)(v,M);case 2:case"end":return e.stop()}}),I)}function P(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.c)(L)]);case 2:case"end":return e.stop()}}),H)}var F=d.a.mark(q),U=function(e){return Object(s.c)({article:j,router:Object(p.b)(e)})};function q(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.c)(P)]);case 2:case"end":return e.stop()}}),F)}var B=a(17),Y=a(12),W=a(16),G=a(53),J=a.n(G),z=a(54),Q=a.n(z),V=a(55),X=a.n(V),Z=(a(87),function(e){return r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("h1",{className:"logo"},"Feng`s Blog"),r.a.createElement("div",{className:"header-content"},r.a.createElement("div",{className:"header-content-nav"},r.a.createElement("ul",{className:"header-content-nav-link"},r.a.createElement("li",{className:"home"},r.a.createElement(W.b,{to:"/home"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:Q.a,alt:""})),r.a.createElement("div",{className:"title"},"HOME"),r.a.createElement("div",{className:"desc"}," all the news showing "))),r.a.createElement("li",{className:"article"},r.a.createElement(W.b,{to:"/article"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:J.a,alt:""})),r.a.createElement("div",{className:"title"}," ARTICLE"),r.a.createElement("div",{className:"desc"},"Development & some thought"))),r.a.createElement("li",{className:"about"},r.a.createElement(W.b,{to:"/about"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:X.a,alt:""})),r.a.createElement("div",{className:"title"},"ABOUT"),r.a.createElement("div",{className:"desc"},"knowing more about me")))))))}),$=a(19),K=a(20),ee=a(21),te=a(23),ae=a(22),ne=a(24),re=a(31),ce=a.n(re),le=function(e){var t=e.data;return r.a.createElement("div",{className:"article-list-item"},r.a.createElement("div",{className:"article-header"},r.a.createElement("div",{className:"article-header-img"},r.a.createElement("img",{src:ce.a,alt:""})),r.a.createElement("span",{className:"article-header-time"},t.createdAt.replace(/[TZ]/gi," ").replace(/\.\d+/,""))),r.a.createElement("div",{className:"article-content"},r.a.createElement(W.a,{to:"/detail/".concat(t._id)},r.a.createElement("h2",{className:"article-content-title"},t.title)),r.a.createElement("p",{className:"article-content-summary"},t.summary)),r.a.createElement("div",{className:"article-info"},r.a.createElement("div",{className:"comment"},r.a.createElement("svg",{className:"icon","aria-hidden":"true"},r.a.createElement("use",{xlinkHref:"#icon-message-detail"})),r.a.createElement("div",{className:"comment-count"},t.commentCount)),r.a.createElement("div",{className:"category"},r.a.createElement("svg",{className:"icon","aria-hidden":"true"},r.a.createElement("use",{xlinkHref:"#icon-category_find_icon"})),r.a.createElement("div",{className:"category-name"},t.category.name))))},ie=function(){return r.a.createElement("div",{className:"git-list-item"},"All things are difficult before they are easy.")},se=(a(88),function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(te.a)(this,Object(ae.a)(t).call(this,e))).state={loading:a.props.loading},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){var e=Object($.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchRequest({type:v,payload:{page:1,limit:20}});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading||0===this.props.data.length?"":r.a.createElement("div",{className:"home-wrapper"},r.a.createElement("section",{className:"introduction"},r.a.createElement("div",{className:"introduction-wrapper"},r.a.createElement("p",{className:"title"},"HI,WELCOME TO MY BLOG"),r.a.createElement("p",null,"MY,NAME IS ",r.a.createElement("span",{className:"name"},"\u8303\u5251\u5cf0")),r.a.createElement("p",null,"I'AM A beginner OF FRONT-END Developing"))),r.a.createElement("div",{className:"article-list"},this.props.data.slice(0,4).map((function(e){return r.a.createElement(le,{data:e,key:e._id})}))),r.a.createElement("div",{className:"git-list"},r.a.createElement(ie,null),r.a.createElement("div",{className:"say"},r.a.createElement("div",null,"STAY HUNGRY, STAY FOOLISH"))))}}]),t}(n.Component)),oe={fetchRequest:R},me=Object(B.c)((function(e){var t=e.article;return{data:t.data,loading:t.loading}}),oe)(se),ue=(a(89),function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(te.a)(this,Object(ae.a)(t).call(this,e))).state={data:void 0,loading:!0},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){var e=Object($.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.history.location.pathname.split("detail/")[1],e.next=3,A(t);case 3:null!==(a=e.sent).data.data?this.setState({loading:!1,data:a.data.data}):(this.setState({loading:!1}),this.props.history.push("/"));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.data?r.a.createElement("div",{className:"detail-wrapper"},r.a.createElement("aside",{className:"detail-author-info"},r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement("img",{src:ce.a,alt:""})),r.a.createElement("h3",null," about me"),r.a.createElement("article",null,"\u6211\u662f\u4e00\u4e2a\u81ea\u5b66\u8005,\u4e5f\u662f\u4e00\u4e2a\u521d\u5b66\u8005,\u76ee\u6807\u662f\u6210\u4e3a\u4e00\u4e2a\u4e13\u4e1a\u7684\u524d\u7aef\u5de5\u7a0b\u5e08")),r.a.createElement("section",{className:"detail-content"},r.a.createElement("p",{className:"detail-content-time"},this.state.data.createdAt),r.a.createElement("p",{className:"category"},r.a.createElement("svg",{className:"icon","aria-hidden":"true"},r.a.createElement("use",{xlinkHref:"#icon-category_find_icon"})),r.a.createElement("span",{className:"category-name"},this.state.data.category.name)),r.a.createElement("h2",{className:"detail-content-title"},this.state.data.title),r.a.createElement("hr",null),r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:this.state.data.content}}))):""}}]),t}(n.Component)),de=function(e){var t=e.data;return r.a.createElement("section",{className:"articles-list-item"},r.a.createElement("h2",null,t.title),r.a.createElement("span",null,t.createdAt.replace(/[tz]/gi," ").replace(/\.\d+/,"")),r.a.createElement("p",null,t.summary),r.a.createElement("span",null,"\u5206\u7c7b:",t.category.name)," ",r.a.createElement("br",null),r.a.createElement("span",null,"\u89c2\u770b:",t.viewCount),r.a.createElement("br",null),r.a.createElement("span",null,"\u8bc4\u8bba:",t.commentCount),r.a.createElement("br",null),r.a.createElement(W.b,{to:"/home"},"\u9605\u8bfb\u66f4\u591a"))},pe=(a(90),function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(te.a)(this,Object(ae.a)(t).call(this,e))).state={loading:a.props.loading},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){var e=Object($.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.data,n=t.loading,a&&0!==a.length){e.next=6;break}return this.setState({loading:n}),e.next=5,this.props.fetchRequest({type:v,payload:{page:1,limit:20}});case 5:this.setState({loading:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.loading,t=this.props.data;return e||0===t.length?r.a.createElement("span",null,"Loading"):r.a.createElement("section",{className:"articles-wrapper"},t.map((function(e){return r.a.createElement(de,{data:e,key:e._id})})))}}]),t}(n.Component)),Ee={fetchRequest:R},he=Object(B.c)((function(e){var t=e.article;return{data:t.data,loading:t.loading}}),Ee)(pe),ve=function(){return r.a.createElement("div",null,"helloworld")},fe=function(){return r.a.createElement("div",{className:"footer-wrapper"},r.a.createElement("a",{href:"http://www.beian.miit.gov.cn/"},r.a.createElement("span",null,"\xa9 2019 \u773c\u524d\u6709\u6761\u6cb3 ")," ",r.a.createElement("span",null," ",r.a.createElement("i",null)," \u7ca4ICP\u590719139935\u53f7")))},ge=function(e){e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/home",component:me}),r.a.createElement(Y.b,{path:"/detail/:id",component:ue}),r.a.createElement(Y.b,{path:"/article",component:he}),r.a.createElement(Y.b,{path:"/about",component:ve}),r.a.createElement(Y.a,{from:"/",to:"/home"})),r.a.createElement(fe,null))},be=function(e){var t=e.store,a=e.history;return r.a.createElement(B.a,{store:t},r.a.createElement(p.a,{history:a},r.a.createElement(ge,{history:a})))},ye=(a(91),window.INITIAL_REDUX_STATE),Oe=Object(i.a)(),Ne=function(e,t){var a=Object(o.a)(),n=Object(s.e)(U(e),t,Object(s.d)(Object(s.a)(Object(m.a)(e),a)));return a.run(q),n}(Oe,ye);l.a.render(r.a.createElement(be,{store:Ne,history:Oe}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.f62102ef.chunk.js.map