(this["webpackJsonpnc-news-2"]=this["webpackJsonpnc-news-2"]||[]).push([[0],{14:function(e,t){e.exports={ROOT:"https://nc-news-sql-dentednerd.herokuapp.com/api",USERNAME:"northcoder"}},50:function(e,t,n){e.exports=n(77)},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(25),i=n.n(c),o=n(22),l=n(9),s=n(19),u=n(42),m=n(12),p={articles:[],selectedArticle:{},selectedComments:[],loading:!1,error:null,selectedTopic:null};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;if(!t)return e;if("FETCH_ARTICLES_REQUESTS"===t.type){var n=Object.assign({},e);return n.loading=!0,n}if("FETCH_ARTICLES_SUCCESS"===t.type){var r=Object.assign({},e);return r.articles=t.payload,r.loading=!1,r}if("FETCH_ARTICLES_ERROR"===t.type){var a=Object.assign({},e);return a.articles=[],a.loading=!1,a.error=t.error,a}if("FETCH_ARTICLES_BY_ID_REQUESTS"===t.type){var c=Object.assign({},e);return c.loading=!0,c}if("FETCH_ARTICLES_BY_ID_SUCCESS"===t.type){var i=Object.assign({},e);return i.selectedArticle=t.payload,i.loading=!1,i}if("FETCH_ARTICLES_BY_ID_ERROR"===t.type){var o=Object.assign({},e);return o.articles=[],o.selectedArticle={},o.loading=!1,o.error=t.error,o}if("FETCH_ARTICLES_BY_USER_REQUESTS"===t.type){var l=Object.assign({},e);return l.articles=[],l.selectedArticle={},l.loading=!0,l}if("FETCH_ARTICLES_BY_USER_SUCCESS"===t.type){var s=Object.assign({},e);return s.articles=t.payload,s.loading=!1,s}if("FETCH_ARTICLES_BY_USER_ERROR"===t.type){var u=Object.assign({},e);return u.articles=[],u.selectedArticle={},u.loading=!1,u.error=t.error,u}if("FETCH_COMMENTS_BY_ARTICLE_ID_REQUESTS"===t.type){var m=Object.assign({},e);return m.loading=!0,m}if("FETCH_COMMENTS_BY_ARTICLE_ID_SUCCESS"===t.type){var f=Object.assign({},e);return f.selectedComments=t.payload,f.loading=!1,f}if("FETCH_COMMENTS_BY_ARTICLE_ID_ERROR"===t.type){var d=Object.assign({},e);return d.articles=[],d.selectedArticle={},d.selectedComments={},d.loading=!1,d.error=t.error,d}if("FETCH_COMMENTS_BY_USER_REQUESTS"===t.type){var E=Object.assign({},e);return E.loading=!0,E}if("FETCH_COMMENTS_BY_USER_SUCCESS"===t.type){var h=Object.assign({},e);return h.selectedComments=t.payload,h.loading=!1,h}if("FETCH_COMMENTS_BY_USER_ERROR"===t.type){var _=Object.assign({},e);return _.articles=[],_.selectedArticle={},_.selectedComments={},_.loading=!1,_.error=t.error,_}if("ADD_COMMENTS_BY_ARTICLE_ID_POST"===t.type){var g=Object.assign({},e);return g.loading=!0,g}if("ADD_COMMENTS_BY_ARTICLE_ID_SUCCESS"===t.type){var b=Object.assign({},e);return b.selectedComments=b.selectedComments.push(t.payload),b.loading=!1,b}if("ADD_COMMENTS_BY_ARTICLE_ID_ERROR"===t.type){var O=Object.assign({},e);return O.articles=[],O.selectedArticle={},O.selectedComments={},O.loading=!1,O.error=t.error,O}if("ARTICLE_VOTE_UP_REQUEST"===t.type){var C=Object.assign({},e);return C.loading=!0,C}if("ARTICLE_VOTE_UP_SUCCESS"===t.type){var y=Object.assign({},e);return y.loading=!1,y.selectedArticle.votes++,y}if("ARTICLE_VOTE_UP_ERROR"===t.type){var S=Object.assign({},e);return S.error=t.error,S}if("ARTICLE_VOTE_DOWN_REQUEST"===t.type){var v=Object.assign({},e);return v.loading=!0,v}if("ARTICLE_VOTE_DOWN_SUCCESS"===t.type){var R=Object.assign({},e);return R.loading=!1,R.selectedArticle.votes--,R}if("ARTICLE_VOTE_DOWN_ERROR"===t.type){var T=Object.assign({},e);return T.error=t.error,T}if("FETCH_USER_REQUESTS"===t.type){var j=Object.assign({},e);return j.loading=!0,j}if("FETCH_USER_SUCCESS"===t.type){var x=Object.assign({},e);return x.user=t.payload,x.loading=!1,x}if("FETCH_USER_ERROR"===t.type){var A=Object.assign({},e);return A.user={},A.loading=!1,A.error=t.error,A}if("FETCH_ALL_USERS_REQUESTS"===t.type){var w=Object.assign({},e);return w.loading=!0,w}if("FETCH_ALL_USERS_SUCCESS"===t.type){var U=Object.assign({},e);return U.allUsers=t.payload,U.loading=!1,U}if("FETCH_ALL_USERS_ERROR"===t.type){var I=Object.assign({},e);return I.allUsers={},I.loading=!1,I.error=t.error,I}return e},d=n(1),E=n(2),h=n(4),_=n(5),g=n(7),b=n(6),O=n(8),C=n(10),y=n(24),S=n.n(y),v=n(43),R=n.n(v);function T(){var e=Object(d.a)(["\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 1rem;\n  margin-right: 0.5rem;\n"]);return T=function(){return e},e}function j(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0;\n  color: #ccc;\n  a {\n    color: #a0c9d7;\n  }\n"]);return j=function(){return e},e}S.a.extend(R.a);var x=E.a.div(j()),A=E.a.img(T()),w=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.users||!this.props.username)return null;var t=this.props.users.filter((function(t){return t.username===e.props.username}))[0],n=S()(this.props.time).format("H:mm, Do MMMM YYYY");return a.a.createElement(x,null,a.a.createElement(A,{src:t.avatar_url,alt:t.name}),a.a.createElement("span",null,a.a.createElement(C.a,{to:"/users/".concat(t.username)},t.name),this.props.topic&&a.a.createElement(C.a,{to:"/topics/".concat(this.props.topic)}," in ",this.props.topic),this.props.time&&" at ".concat(n)),"\xa0")}}]),t}(a.a.Component);w.defaultProps={username:""};var U=Object(l.b)((function(e){return{users:e.allUsers,loading:e.loading}}))(w);function I(){var e=Object(d.a)(['\n  position: relative;\n  background-color: #fff;\n  border: solid 1px #eee;\n  border-radius: 1rem;\n  margin-bottom: 1rem;\n  box-shadow: 0.25rem 0.25rem 0.25rem #ddd;\n  padding: 2rem;\n  width: calc(100% - 4rem);\n  overflow: hidden;\n  transition: all 0.25s;\n\n  &:hover {\n    box-shadow: 0.1rem 0.1rem 0.1rem #ccc;\n    transition: all 0.25s;\n  }\n\n  h2 {\n    font-family: "Zilla Slab", serif;\n    font-size: 1.5rem;\n    font-weight: 600;\n    text-decoration: none;\n    margin: 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  img.header {\n    aspect-ratio: 16 / 9;\n    width: calc(100% + 4rem);\n    margin: -2rem 0 1rem -2rem;\n  }\n']);return I=function(){return e},e}function L(){var e=Object(d.a)(["\n  text-decoration: none;\n"]);return L=function(){return e},e}var B=Object(E.a)(C.a)(L()),D=Object(E.a)("article")(I()),F=function(e){var t=e.article;if(!t)return null;return a.a.createElement(D,null,a.a.createElement("img",{className:"header",src:{football:"https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",cooking:"https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",coding:"https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"}[t.topic],alt:t.title}),a.a.createElement(U,{username:t.author,topic:t.topic,time:t.created_at}),a.a.createElement(B,{to:"/articles/".concat(t.article_id)},a.a.createElement("h2",null,t.title)))};function M(){var e=Object(d.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 1rem;\n  width: 100%;\n  margin-bottom: 1rem;\n\n  @media(min-width: 768px) {\n    flex-flow: row nowrap;\n    justify-content: space-between;\n  }\n\n  img.header {\n    margin: -2rem 0 1rem -2rem;\n    width: calc(100% + 4rem);\n    object-fit: cover;\n    height: 15rem;\n  }\n"]);return M=function(){return e},e}var k=E.a.section(M()),H=function(e){var t=e.articles;return a.a.createElement(k,null,t.sort((function(e,t){return e.article_id-t.article_id})).filter((function(e){return"football"===e.topic})).map((function(e,t){return t>0?null:a.a.createElement(F,{article:e,key:e.article_id})})),t.filter((function(e){return"cooking"===e.topic})).map((function(e,t){return t>0?null:a.a.createElement(F,{article:e,key:e.article_id})})),t.filter((function(e){return"coding"===e.topic})).map((function(e,t){return t>0?null:a.a.createElement(F,{article:e,key:e.article_id})})))};H.defaultProps={articles:[]};var Y=H;function N(){var e=Object(d.a)(["\n  font-size: 3rem;\n  color: #fff;\n  text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000;\n  text-align: center;\n  margin: 0 auto 1rem auto;\n"]);return N=function(){return e},e}var Q=E.a.h2(N()),P=function(e){var t=e.children;return a.a.createElement(Q,null,t)};function V(){var e=Object(d.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 1rem;\n  width: 100%;\n  margin-bottom: 1rem;\n\n  @media(min-width: 768px) {\n    flex-flow: row nowrap;\n    justify-content: space-between;\n  }\n\n  img.header {\n    margin: -2rem 0 1rem -2rem;\n    width: calc(100% + 4rem);\n    object-fit: cover;\n    height: 15rem;\n  }\n"]);return V=function(){return e},e}var z=E.a.section(V()),W=function(e){var t=e.articles,n=e.topic,r=t.filter((function(e){return e.topic===n})).sort((function(e,t){return t.votes-e.votes})).slice(0,4);return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,n),r.length>3&&a.a.createElement(F,{article:r[0]}),a.a.createElement(z,{currentArticles:r},r.slice(r.length>3?1:0,4).map((function(e){return a.a.createElement(F,{article:e,key:e.article_id})}))))};W.defaultProps={articles:[]};var q=W,G=n(13),J=n.n(G),Z=n(14);function K(){return function(e){e({type:"FETCH_ARTICLES_REQUESTS"}),J.a.get("".concat(Z.ROOT,"/articles")).then((function(t){e({type:"FETCH_ARTICLES_SUCCESS",payload:t.data.articles})})).catch((function(t){e({type:"FETCH_ARTICLES_ERROR",payload:t})}))}}function X(e){return function(t){t({type:"FETCH_ARTICLES_BY_TOPIC_REQUESTS"}),J.a.get("".concat(Z.ROOT,"/articles?topic=").concat(e)).then((function(e){t({type:"FETCH_ARTICLES_BY_TOPIC_SUCCESS",payload:e.data.articles})})).catch((function(e){t({type:"FETCH_ARTICLES_BY_TOPIC_ERROR",payload:e})}))}}function $(e){return function(t){t(function(e){return{type:"FETCH_ARTICLES_BY_ID_REQUESTS",id:e}}(e)),J.a.get("".concat(Z.ROOT,"/articles/").concat(e)).then((function(e){t({type:"FETCH_ARTICLES_BY_ID_SUCCESS",payload:e.data.article})})).catch((function(e){t({type:"FETCH_ARTICLES_BY_ID_ERROR",payload:e})}))}}function ee(e){return function(t){t({type:"FETCH_ARTICLES_BY_USER_REQUESTS",id:e}),J.a.get("".concat(Z.ROOT,"/articles/by/").concat(e)).then((function(e){t({type:"FETCH_ARTICLES_BY_USER_SUCCESS",payload:e.data.articles})})).catch((function(e){t({type:"FETCH_ARTICLES_BY_USER_ERROR",payload:e})}))}}function te(e){return function(t){t({type:"FETCH_COMMENTS_BY_USER_REQUESTS",id:e}),J.a.get("".concat(Z.ROOT,"/comments/by/").concat(e)).then((function(e){t({type:"FETCH_COMMENTS_BY_USER_SUCCESS",payload:e.data.comments})})).catch((function(e){t({type:"FETCH_COMMENTS_BY_USER_ERROR",payload:e})}))}}function ne(e){return function(t){t(function(e){return{type:"FETCH_COMMENTS_BY_ARTICLE_ID_REQUESTS",id:e}}(e)),J.a.get("".concat(Z.ROOT,"/articles/").concat(e,"/comments")).then((function(e){t({type:"FETCH_COMMENTS_BY_ARTICLE_ID_SUCCESS",payload:e.data.comments})})).catch((function(e){t({type:"FETCH_COMMENTS_BY_ARTICLE_ID_ERROR",payload:e})}))}}function re(e,t){return function(n){n(function(e,t){return{type:"ADD_COMMENTS_BY_ARTICLE_ID_POST",id:e,comment:t}}(e,t)),J.a.post("".concat(Z.ROOT,"/articles/").concat(e,"/comments"),t).then((function(e){n({type:"ADD_COMMENTS_BY_ARTICLE_ID_SUCCESS",payload:e.data.comments})})).catch((function(e){n({type:"ADD_COMMENTS_BY_ARTICLE_ID_ERROR",payload:e})}))}}function ae(e){return function(t){t(function(e){return{type:"ARTICLE_VOTE_UP_REQUEST",payload:e}}()),J.a.put("".concat(Z.ROOT,"/articles/").concat(e,"?vote=up")).then((function(e){t({type:"ARTICLE_VOTE_UP_SUCCESS"})})).catch((function(e){t({type:"ARTICLE_VOTE_UP_ERROR",payload:e})}))}}function ce(e){return function(t){t(function(e){return{type:"ARTICLE_VOTE_DOWN_REQUEST",payload:e}}()),J.a.put("".concat(Z.ROOT,"/articles/").concat(e,"?vote=down")).then((function(e){t({type:"ARTICLE_VOTE_DOWN_SUCCESS"})})).catch((function(e){t({type:"ARTICLE_VOTE_DOWN_ERROR",payload:e})}))}}function ie(){return function(e){e({type:"FETCH_ALL_USERS_REQUESTS"}),J.a.get("".concat(Z.ROOT,"/users")).then((function(t){e({type:"FETCH_ALL_USERS_SUCCESS",payload:t.data.users})})).catch((function(t){e({type:"FETCH_ALL_USERS_ERROR",payload:t})}))}}function oe(e){return function(t){t({type:"FETCH_USER_BY_USERNAME_REQUESTS"}),J.a.get("".concat(Z.ROOT,"/users/").concat(e)).then((function(e){t({type:"FETCH_USER_BY_USERNAME_SUCCESS",payload:e.data.user})})).catch((function(e){t({type:"FETCH_USER_BY_USERNAME_ERROR",payload:e})}))}}var le=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchArticles()}},{key:"render",value:function(){return this.props.allArticles?a.a.createElement(a.a.Fragment,null,a.a.createElement(Y,{articles:this.props.allArticles}),a.a.createElement(q,{articles:this.props.allArticles,topic:"coding"}),a.a.createElement(q,{articles:this.props.allArticles,topic:"cooking"}),a.a.createElement(q,{articles:this.props.allArticles,topic:"football"})):a.a.createElement("p",null,"No articles!")}}]),t}(a.a.Component);var se=Object(l.b)((function(e){return{allArticles:e.articles,loading:e.loading}}),(function(e){return{fetchArticles:function(){e(K())}}}))(le);function ue(){var e=Object(d.a)(["\n  font-size: 1.5rem;\n"]);return ue=function(){return e},e}var me=E.a.p(ue()),pe=function(e){var t=e.body;return a.a.createElement(me,null,t)};pe.defaultProps={body:""};var fe=pe;function de(){var e=Object(d.a)(["\n  margin-bottom: 1rem;\n"]);return de=function(){return e},e}function Ee(){var e=Object(d.a)(["\n  margin-bottom: 1rem;\n  border-radius: 1rem;\n  border: solid 1px #ddd;\n  box-shadow: 1px 1px 3px #eee;\n  background-color: #fff;\n  padding: 1rem;\n  overflow: hidden;\n  word-wrap: break-word;\n  width: calc(50% - 3rem);\n\n  p {\n    margin: 0 0 1rem 0;\n  }\n\n  a {\n    color: #a0c9d7;\n    border-bottom: dotted 1px #a0c9d7;\n  }\n"]);return Ee=function(){return e},e}var he=E.a.section(Ee()),_e=E.a.p(de()),ge=function(e){return a.a.createElement(he,null,a.a.createElement("p",null,a.a.createElement(C.a,{to:"/articles/".concat(e.comment.article_id)},"\xbb view article")),a.a.createElement(_e,null,e.comment.body),a.a.createElement(U,{username:e.comment.author,time:e.comment.created_at}))};function be(){var e=Object(d.a)(["\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: space-between;\n    "]);return be=function(){return e},e}var Oe=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){if(!this.props.selectedComments.length)return null;var e=E.a.section(be());return a.a.createElement(e,null,this.props.selectedComments.sort((function(e,t){return t.created_at-e.created_at})).map((function(e){return a.a.createElement(ge,{key:e.comment_id,comment:e})})))}}]),t}(a.a.Component);function Ce(){var e=Object(d.a)(["\n  height: 1.5rem;\n  width: 1.5rem;\n  display: flex;\n  justify-content: center;\n  border: none;\n  border-radius: 0.25rem;\n  align-items: center;\n  background-color: #354262;\n  color: #fff;\n  font-size: 1rem;\n  margin-left: 0.5rem;\n"]);return Ce=function(){return e},e}function ye(){var e=Object(d.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-right: 1rem;\n"]);return ye=function(){return e},e}var Se=E.a.section(ye()),ve=E.a.button(Ce()),Re=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement(Se,null,this.props.votes," votes",a.a.createElement(ve,{onClick:this.props.articleVoteUp.bind(this)},"+"),a.a.createElement(ve,{onClick:this.props.articleVoteDown.bind(this)},"-"))}}]),t}(a.a.Component);var Te=Object(l.b)((function(e){return e}),(function(e){return{articleVoteUp:function(){e(ae(this.props.id))},articleVoteDown:function(){e(ce(this.props.id))}}}))(Re),je=n(48),xe=n(23);function Ae(){var e=Object(d.a)(["\n  height: 1.5rem;\n  display: flex;\n  justify-content: center;\n  border: none;\n  border-radius: 0.25rem;\n  align-items: center;\n  background-color: #354262;\n  color: #fff;\n  font-size: 1rem;\n  margin-left: 0.5rem;\n"]);return Ae=function(){return e},e}function we(){var e=Object(d.a)(["\nheight: 1rem;\nfont-size: 1rem;\nborder: none;\nborder-radius: 0.25rem;\npadding: 0.25rem;\n"]);return we=function(){return e},e}function Ue(){var e=Object(d.a)(["\ndisplay: flex;\nflex-flow: row nowrap;\njustify-content: flex-start;\nalign-items: center;\n"]);return Ue=function(){return e},e}var Ie=E.a.form(Ue()),Le=E.a.input(we()),Be=E.a.button(Ae()),De=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={comment:{value:"",touched:!1}},n.handleChange=n.handleChange.bind(Object(xe.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(xe.a)(n)),n}return Object(O.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement(Ie,{onSubmit:this.handleSubmit},a.a.createElement(Le,{id:"comment-input",type:"text",placeholder:"Leave your comment",onChange:this.handleChange.bind(null,"comment")}),a.a.createElement(Be,{type:"submit"},"Submit"))}},{key:"handleChange",value:function(e,t){t.preventDefault();var n=Object.assign({},this.state,Object(je.a)({},e,{value:t.target.value,touched:!0}));this.setState(Object.assign(n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={comment:this.state.comment.value};this.props.postComment(this.props.article_id,t)}}]),t}(a.a.Component);var Fe=Object(l.b)((function(e){return{comment:e.comment}}),(function(e){return{postComment:function(t,n){e(re(t,n))}}}))(De);function Me(){var e=Object(d.a)(["\n  margin: 1rem 0;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n"]);return Me=function(){return e},e}var ke=E.a.div(Me()),He=function(e){var t=e.votes,n=e.id,r=e.postComment;return a.a.createElement(ke,null,a.a.createElement(Te,{votes:t,id:n}),a.a.createElement(Fe,{postComment:r,article_id:n}))};function Ye(){var e=Object(d.a)(["\n      background-image: url(",");\n      background-position: center;\n      margin-top: -1rem;\n      margin-left: -1rem;\n      width: 100%;\n      height: 20rem;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n      align-items: center;\n      color: #fff;\n      font-size: 3rem;\n      text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000;\n      text-align: center;\n      padding: 1rem;\n      margin-bottom: 1rem;\n\n      h2 {\n        font-size: 3rem;\n      }\n    "]);return Ye=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  background-color: #fff;\n  padding: 1rem;\n\n  h2, p {\n    margin: 0;\n  }\n"]);return Ne=function(){return e},e}var Qe=E.a.article(Ne()),Pe=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchArticlesByID(this.props.match.params.article_id),this.props.fetchCommentsByArticleID(this.props.match.params.article_id)}},{key:"render",value:function(){var e=E.a.div(Ye(),{football:"https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",cooking:"https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",coding:"https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"}[this.props.selectedArticle.topic]);return a.a.createElement("div",null,a.a.createElement(Qe,null,a.a.createElement(e,null,a.a.createElement("h2",null,this.props.selectedArticle.title)),a.a.createElement("hr",null),a.a.createElement(U,{username:this.props.selectedArticle.author,topic:this.props.selectedArticle.topic,time:this.props.selectedArticle.created_at}),a.a.createElement("hr",null),a.a.createElement(fe,{body:this.props.selectedArticle.body})),a.a.createElement(He,{votes:this.props.selectedArticle.votes,id:this.props.match.params.article_id,postComment:this.props.addCommentsByArticleID}),a.a.createElement(Oe,{selectedComments:this.props.comments}))}}]),t}(a.a.Component);Pe.defaultProps={selectedArticle:{},comments:[]};var Ve=Object(l.b)((function(e){return{selectedArticle:e.selectedArticle,comments:e.selectedComments}}),(function(e){return{fetchArticlesByID:function(t){e($(t))},fetchCommentsByArticleID:function(t){e(ne(t))},addCommentsByArticleID:function(t,n){e(re(t,n))}}}))(Pe),ze=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchArticlesByTopic(this.props.match.params.topic_id)}},{key:"render",value:function(){return this.props.articlesByTopic?a.a.createElement("div",null,a.a.createElement(P,null,this.props.match.params.topic_id),this.props.articlesByTopic.map((function(e){return a.a.createElement(F,{key:e.article_id,article:e})}))):a.a.createElement("p",null,"No articles!")}}]),t}(a.a.Component);var We=Object(l.b)((function(e){return{articlesByTopic:e.articles,loading:e.loading}}),(function(e){return{fetchArticlesByTopic:function(t){e(X(t))}}}))(ze);function qe(){var e=Object(d.a)(["\n  height: 5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"]);return qe=function(){return e},e}function Ge(){var e=Object(d.a)(["\n  background-color: #fff;\n  border-radius: 1rem;\n  border: solid 1px #ddd;\n  padding: 1rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n\n  img {\n    width: 5rem;\n    height: 5rem;\n    border-radius: 2.5rem;\n    margin-right: 1rem;\n  }\n\n  h2, p {\n    margin: 0;\n  }\n"]);return Ge=function(){return e},e}var Je=E.a.section(Ge()),Ze=E.a.div(qe()),Ke=function(e){var t=e.user;return t?a.a.createElement(Je,null,a.a.createElement("img",{src:t.avatar_url,alt:t.name}),a.a.createElement(Ze,null,a.a.createElement("h2",null,t.name),a.a.createElement("p",null,t.username))):null},Xe=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUserByUsername(this.props.match.params.username),this.props.fetchArticlesByUser(this.props.match.params.username),this.props.fetchCommentsByUser(this.props.match.params.username)}},{key:"componentDidUpdate",value:function(e){e.match.params.username!==this.props.match.params.username&&(this.props.fetchArticlesByUser(this.props.match.params.username),this.props.fetchCommentsByUser(this.props.match.params.username))}},{key:"render",value:function(){var e=this;if(!this.props.users.length||!this.props.articles.length||!this.props.selectedComments.length)return null;var t=this.props.users.filter((function(t){return t.username===e.props.match.params.user_id}))[0];return a.a.createElement("div",null,a.a.createElement(Ke,{user:t}),a.a.createElement(q,{articles:this.props.articles,topic:"coding"}),a.a.createElement(q,{articles:this.props.articles,topic:"cooking"}),a.a.createElement(q,{articles:this.props.articles,topic:"football"}),a.a.createElement(P,null,"comments"),a.a.createElement(Oe,{selectedComments:this.props.selectedComments}))}}]),t}(a.a.Component);Xe.defaultProps={users:[],articles:[],selectedComments:[]};var $e=Object(l.b)((function(e){return{users:e.allUsers,articles:e.articles,selectedComments:e.selectedComments}}),(function(e){return{fetchUserByUsername:function(t){e(oe(t))},fetchArticlesByUser:function(t){e(ee(t))},fetchCommentsByUser:function(t){e(te(t))}}}))(Xe);function et(){var e=Object(d.a)(["\n  font-family: 'Zilla Slab', serif;\n  font-size:2rem;\n  line-height:60px;\n  color:#fff;\n  text-shadow: -1px -1px 3px #000;\n  white-space:nowrap;\n  overflow:hidden;\n"]);return et=function(){return e},e}function tt(){var e=Object(d.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  height: 3rem;\n  display:flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n"]);return tt=function(){return e},e}function nt(){var e=Object(d.a)(["\n  background: -webkit-radial-gradient(center bottom, rgba(160, 201, 215, 0.8) 0%, rgba(160, 201, 215, 0) 70%), -webkit-linear-gradient(top, black 0%,#282F44 6%,#2C3551 52%,#354262 91%,#050C54 100%);\n  margin-bottom: 2rem;\n  padding:0;\n  height: 3rem;\n  box-shadow: 1px 1px 5px #000;\n  color:#FFF;\n  padding: 0 1rem;\n"]);return nt=function(){return e},e}var rt=E.a.nav(nt()),at=E.a.div(tt()),ct=E.a.h1(et()),it=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement(rt,null,a.a.createElement(at,null,a.a.createElement(C.a,{to:"/"},a.a.createElement(ct,null,"Northcoders News"))))}}]),t}(a.a.Component);function ot(){var e=Object(d.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 0;\n  padding: 0;\n\n  li {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 0.5rem 0;\n  }\n\n  h3 {\n    margin-top: 0;\n  }\n"]);return ot=function(){return e},e}function lt(){var e=Object(d.a)(["\n  height: 5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"]);return lt=function(){return e},e}function st(){var e=Object(d.a)(["\n  background-color: #fff;\n  border-radius: 1rem;\n  border: solid 1px #ddd;\n  padding: 1rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n\n  img {\n    width: 5rem;\n    height: 5rem;\n    border-radius: 2.5rem;\n    margin-right: 1rem;\n  }\n\n  h2, p {\n    margin: 0;\n  }\n"]);return st=function(){return e},e}function ut(){var e=Object(d.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n"]);return ut=function(){return e},e}var mt=E.a.aside(ut()),pt=E.a.section(st()),ft=E.a.div(lt()),dt=E.a.ul(ot()),Et=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAllUsers()}},{key:"shouldComponentUpdate",value:function(e){return e.users!==this.props.users}},{key:"render",value:function(){return this.props.users?a.a.createElement(mt,null,a.a.createElement(pt,null,a.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/6791502?v=3&s=200",alt:""}),a.a.createElement(ft,null,a.a.createElement("h2",null,"Awesome Northcoder"),a.a.createElement("p",null,"northcoder"))),a.a.createElement(pt,null,a.a.createElement("p",null,"Welcome, Awesome Northcoder! It's ",S()().format("MMMM DD, YYYY"),".")),a.a.createElement(pt,null,a.a.createElement(dt,null,a.a.createElement("h3",null,"Topics"),a.a.createElement("li",null,a.a.createElement(C.a,{to:"/topics/coding"},"coding")),a.a.createElement("li",null,a.a.createElement(C.a,{to:"/topics/cooking"},"cooking")),a.a.createElement("li",null,a.a.createElement(C.a,{to:"/topics/football"},"football")))),a.a.createElement(pt,null,a.a.createElement(dt,null,a.a.createElement("h3",null,"Users"),this.props.users&&this.props.users.length&&this.props.users.map((function(e){return a.a.createElement(C.a,{to:"/users/".concat(e.username),key:e.name},a.a.createElement("li",null,a.a.createElement("img",{src:e.avatar_url,alt:e.name}),a.a.createElement("p",null,e.name)))}))))):null}}]),t}(a.a.Component);var ht=Object(l.b)((function(e){return{users:e.allUsers,loading:e.loading}}),(function(e){return{fetchAllUsers:function(){e(ie())}}}))(Et);n(76);function _t(){var e=Object(d.a)(["\n  width: calc(100% - 2rem);\n  margin: 0 auto;\n  padding: 0 1rem;\n\n  @media(min-width:768px) {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    gap: 1rem;\n  }\n"]);return _t=function(){return e},e}var gt=Object(E.a)("main")(_t()),bt=function(){return a.a.createElement("div",null,a.a.createElement(it,null),a.a.createElement(gt,null,a.a.createElement("div",null,a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/",component:se}),a.a.createElement(s.a,{path:"/articles/:article_id",component:Ve}),a.a.createElement(s.a,{path:"/topics/:topic_id",component:We}),a.a.createElement(s.a,{path:"/users/:username",component:$e}))),a.a.createElement(ht,null)))},Ot=Object(o.c)(f,Object(o.a)(u.a)),Ct=Object(m.a)();i.a.render(a.a.createElement(l.a,{store:Ot},a.a.createElement(s.b,{history:Ct},a.a.createElement(bt,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.a1ac9609.chunk.js.map