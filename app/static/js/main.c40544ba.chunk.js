(this.webpackJsonpmyblog=this.webpackJsonpmyblog||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/articles.d3813e85.svg"},108:function(e,t,a){e.exports=a.p+"static/media/books.ee127b99.svg"},109:function(e,t,a){e.exports=a.p+"static/media/membership.ddbc7eaf.svg"},112:function(e,t,a){e.exports=a(194)},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),s=a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(18),o=a(111),m=a(91),u=a(8),d=a.n(u),p=a(46),E=a(15),h=a(104),v="FETCH_REQUEST",f="FETCH_SUCCESS",g="FETCH_ERROR",b="SAVE_ARTICLE";function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={data:[],page:1,totalPage:0,loading:!1,error:void 0,savedData:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return N({},e,{loading:!0});case f:return N({},e,{loading:!1,data:e.data.concat(t.payload.data),totalPage:t.payload.totalPage,page:t.payload.page});case g:return N({},e,{error:t.message,loading:!1});case b:var a=e.savedData.concat(t.payload);return N({},e,{savedData:a});default:return e}},j=a(48),k=a.n(j),x=a(105),C=a.n(x);k.a.defaults.withCredentials=!0,k.a.defaults.transformRequest=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C.a.stringify(e)},k.a.defaults.baseURL="";var P=k.a,R=function(e){var t=e.page,a=e.limit;return P.get("/api/articles",{params:{page:t,limit:a}})},S=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return P.get("/api/article/".concat(e),{params:{md:t}})};function T(e){return{type:e.type,payload:e.payload}}function _(e){return{type:g,message:e}}var A=d.a.mark(H),D=d.a.mark(I),M=d.a.mark(q);function H(e){var t,a,n,r,c,l,s,i,o;return d.a.wrap((function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,t=e.payload?e.payload:{page:1},a=t.page,n=10,m.next=5,Object(E.b)(R,{page:a,limit:n});case 5:if(r=m.sent,c=r.data.data,l=c.items,s=c.totalCount,i=Math.ceil(s/n),!r.error){m.next=13;break}return m.next=11,Object(E.d)(_(r.error));case 11:m.next=15;break;case 13:return m.next=15,Object(E.d)({type:f,payload:{data:l,totalPage:i,page:a}});case 15:m.next=22;break;case 17:return m.prev=17,m.t0=m.catch(0),o=m.t0 instanceof Error&&m.t0.stack?m.t0.stack:"\u4e0d\u77e5\u540d\u9519\u8bef",m.next=22,Object(E.d)(_(o));case 22:case"end":return m.stop()}}),A,null,[[0,17]])}function I(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.e)(v,H);case 2:case"end":return e.stop()}}),D)}function q(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.c)(I)]);case 2:case"end":return e.stop()}}),M)}var F=d.a.mark(U),L=function(e){return Object(i.c)({article:w,router:Object(p.b)(e)})};function U(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.c)(q)]);case 2:case"end":return e.stop()}}),F)}var B=a(21),Y=a(14),W=a(20),G=a(107),J=a.n(G),z=a(108),Q=a.n(z),V=a(109),X=a.n(V),Z=(a(141),function(e){return r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("h1",{className:"logo"},"Feng`s Blog"),r.a.createElement("div",{className:"header-content"},r.a.createElement("div",{className:"header-content-nav"},r.a.createElement("ul",{className:"header-content-nav-link"},r.a.createElement("li",{className:"home"},r.a.createElement(W.b,{to:"/home"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:Q.a,alt:""})),r.a.createElement("div",{className:"title"},"HOME"),r.a.createElement("div",{className:"desc"}," all the news showing "))),r.a.createElement("li",{className:"article"},r.a.createElement(W.b,{to:"/article"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:J.a,alt:""})),r.a.createElement("div",{className:"title"}," ARTICLE"),r.a.createElement("div",{className:"desc"},"Development & some thought"))),r.a.createElement("li",{className:"about"},r.a.createElement(W.b,{to:"/about"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:X.a,alt:""})),r.a.createElement("div",{className:"title"},"ABOUT"),r.a.createElement("div",{className:"desc"},"knowing more about me")))))))}),$=a(30),K=a(35),ee=a(36),te=a(41),ae=a(37),ne=a(42),re=a(56),ce=a.n(re),le=function(e){var t=e.data;return r.a.createElement("div",{className:"article-list-item"},r.a.createElement("div",{className:"article-header"},r.a.createElement("div",{className:"article-header-img"},r.a.createElement("img",{src:ce.a,alt:""})),r.a.createElement("span",{className:"article-header-time"},t.createdAt.replace(/[TZ]/gi," ").replace(/\.\d+/,""))),r.a.createElement("div",{className:"article-content"},r.a.createElement(W.a,{to:"/detail/".concat(t._id)},r.a.createElement("h2",{className:"article-content-title"},t.title)),r.a.createElement("p",{className:"article-content-summary"},t.summary)),r.a.createElement("div",{className:"article-info"},r.a.createElement("div",{className:"comment"},r.a.createElement("svg",{className:"icon","aria-hidden":"true"},r.a.createElement("use",{xlinkHref:"#icon-message-detail"})),r.a.createElement("div",{className:"comment-count"},t.commentCount)),r.a.createElement("div",{className:"category"},r.a.createElement("svg",{className:"icon","aria-hidden":"true"},r.a.createElement("use",{xlinkHref:"#icon-category_find_icon"})),r.a.createElement("div",{className:"category-name"},t.category.name))))},se=function(){return r.a.createElement("div",{className:"git-list-item"},"All things are difficult before they are easy.")},ie=(a(142),function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(te.a)(this,Object(ae.a)(t).call(this,e))).state={loading:a.props.loading},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){var e=Object($.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchRequest({type:v,payload:{page:1}});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading||0===this.props.data.length?"":r.a.createElement("div",{className:"home-wrapper"},r.a.createElement("section",{className:"introduction"},r.a.createElement("div",{className:"introduction-wrapper"},r.a.createElement("p",{className:"title"},"HI,WELCOME TO MY BLOG"),r.a.createElement("p",null,"MY,NAME IS ",r.a.createElement("span",{className:"name"},"\u8303\u5251\u5cf0")),r.a.createElement("p",null,"I'AM A beginner OF FRONT-END Developing"))),r.a.createElement("div",{className:"article-list"},this.props.data.reverse().slice(0,4).map((function(e){return r.a.createElement(le,{data:e,key:e._id})}))),r.a.createElement("div",{className:"git-list"},r.a.createElement(se,null),r.a.createElement("div",{className:"say"},r.a.createElement("div",null,"STAY HUNGRY, STAY FOOLISH"))))}}]),t}(n.Component)),oe={fetchRequest:T},me=Object(B.c)((function(e){var t=e.article;return{data:t.data,loading:t.loading}}),oe)(ie),ue=(a(143),function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(te.a)(this,Object(ae.a)(t).call(this,e))).state={data:void 0,loading:!0},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){var e=Object($.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.history.location.pathname.split("detail/")[1],e.next=3,S(t);case 3:null!==(a=e.sent).data.data?this.setState({loading:!1,data:a.data.data}):(this.setState({loading:!1}),this.props.history.push("/"));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.data?r.a.createElement("div",{className:"detail-wrapper"},r.a.createElement("aside",{className:"detail-author-info"},r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement("img",{src:ce.a,alt:""})),r.a.createElement("h3",null," about me"),r.a.createElement("article",null,"\u6211\u662f\u4e00\u4e2a\u81ea\u5b66\u8005,\u4e5f\u662f\u4e00\u4e2a\u521d\u5b66\u8005,\u76ee\u6807\u662f\u6210\u4e3a\u4e00\u4e2a\u4e13\u4e1a\u7684\u524d\u7aef\u5de5\u7a0b\u5e08")),r.a.createElement("section",{className:"detail-content"},r.a.createElement("p",{className:"detail-content-time"},this.state.data.createdAt),r.a.createElement("p",{className:"category"},r.a.createElement("svg",{className:"icon","aria-hidden":"true"},r.a.createElement("use",{xlinkHref:"#icon-category_find_icon"})),r.a.createElement("span",{className:"category-name"},this.state.data.category.name)),r.a.createElement("h2",{className:"detail-content-title"},this.state.data.title),r.a.createElement("hr",null),r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:this.state.data.content}}))):""}}]),t}(n.Component)),de=a(79),pe=function(e){var t=e.data;return r.a.createElement("section",{className:"articles-list-item"},r.a.createElement(W.a,{to:"/detail/".concat(t._id)},r.a.createElement("h2",{className:"list-item-title"},t.title)),r.a.createElement("span",{className:"list-item-time"},t.createdAt.replace(/[tz]/gi," ").replace(/\.\d+/,"")),r.a.createElement("p",{className:"list-item-summary"},t.summary),r.a.createElement("span",{className:"list-item-category"},"\u5206\u7c7b:",t.category.name)," ",r.a.createElement("br",null),r.a.createElement("span",{className:"list-item-view-count"},"\u89c2\u770b:",t.viewsCount),r.a.createElement("br",null),r.a.createElement("span",{className:"list-item-comment-count"},"\u8bc4\u8bba:",t.commentCount),r.a.createElement("br",null))},Ee=(a(192),function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(te.a)(this,Object(ae.a)(t).call(this,e))).handleClick=Object($.a)(d.a.mark((function e(){var t,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.totalPage,r=t.page,c=t.fetchRequest,e.next=3,c({type:v,payload:{page:r+1}});case 3:n<=r&&a.setState({showMore:!1});case 4:case"end":return e.stop()}}),e)}))),a.state={showMore:!0},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){var e=Object($.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.props.data)&&0!==t.length){e.next=4;break}return e.next=4,this.props.fetchRequest({type:v});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.data,a=e.loading,n=this.state.showMore;return t&&0!==t.length?r.a.createElement("section",{className:"articles-wrapper"},r.a.createElement(de.a,{delay:1e3,className:"queue-simple"},t.map((function(e){return r.a.createElement(pe,{data:e,key:e._id})}))),r.a.createElement(de.a,{delay:600,className:"queue-simple"},n?r.a.createElement("div",{className:"loading",onClick:this.handleClick},a?r.a.createElement("svg",{className:"icon","aria-hidden":"true"},r.a.createElement("use",{xlinkHref:"#icon-loading"})):"\u52a0\u8f7d\u66f4\u591a"):"")):""}}]),t}(n.Component)),he={fetchRequest:T},ve=Object(B.c)((function(e){var t=e.article;return{data:t.data,loading:t.loading,totalPage:t.totalPage,page:t.page}}),he)(Ee),fe=function(){return r.a.createElement("div",null,"helloworld")},ge=function(){return r.a.createElement("div",{className:"footer-wrapper"},r.a.createElement("a",{href:"http://www.beian.miit.gov.cn/"},r.a.createElement("span",null,"\xa9 2019 \u773c\u524d\u6709\u6761\u6cb3 ")," ",r.a.createElement("span",null," ",r.a.createElement("i",null)," \u7ca4ICP\u590719139935\u53f7")))},be=function(e){e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/home",component:me}),r.a.createElement(Y.b,{path:"/detail/:id",component:ue}),r.a.createElement(Y.b,{path:"/article",component:ve}),r.a.createElement(Y.b,{path:"/about",component:fe}),r.a.createElement(Y.a,{from:"/",to:"/home"})),r.a.createElement(ge,null))},ye=function(e){var t=e.store,a=e.history;return r.a.createElement(B.a,{store:t},r.a.createElement(p.a,{history:a},r.a.createElement(be,{history:a})))},Ne=(a(193),window.INITIAL_REDUX_STATE),Oe=Object(s.a)(),we=function(e,t){var a=Object(o.a)(),n=Object(i.e)(L(e),t,Object(i.d)(Object(i.a)(Object(m.a)(e),a)));return a.run(U),n}(Oe,Ne);l.a.render(r.a.createElement(ye,{store:we,history:Oe}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){e.exports=a.p+"static/media/avatar.75814896.jpg"}},[[112,1,2]]]);
//# sourceMappingURL=main.c40544ba.chunk.js.map