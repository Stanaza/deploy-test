(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u}));var r=n(12),s=n(2),a="ADD-MESSAGE",i="UPDATE-NEW-MESSAGE-TEXT",c={messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra"},{id:3,message:"You"},{id:4,message:"HAHA"},{id:5,message:"HOHOH"},{id:6,message:"ZZzzz"}],dialogs:[{id:1,name:"Dymich"},{id:2,name:"Valera"},{id:3,name:"Gosha"},{id:4,name:"Donia"},{id:5,name:"Sveta"},{id:6,name:"Dasha"}],newMessageText:""},o=function(){return{type:a}},u=function(e){return{type:i,newText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{newMessageText:t.newText});case a:var n={id:7,message:e.newMessageText};return Object(s.a)(Object(s.a)({},e),{},{newMessageText:"",messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},107:function(e,t,n){e.exports={selectedPage:"Pagination_selectedPage__2Fo7I"}},108:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__3osYH"}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(2),s=n(1),a=n(3),i=n(4),c=n(9),o=n(10),u=n(7),l=n(0),d=n.n(l),j=n(22),h=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(c.a)(l,t);var n=Object(o.a)(l);function l(){return Object(a.a)(this,l),n.apply(this,arguments)}return Object(i.a)(l,[{key:"render",value:function(){return this.props.isAuth?Object(s.jsx)(e,Object(r.a)({},this.props)):Object(s.jsx)(u.a,{to:"/login"})}}]),l}(d.a.Component);return Object(j.b)(h)(t)}},120:function(e,t,n){},124:function(e,t,n){},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(68),s=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"61d090f5-a9ca-44c5-971a-fef06f8e76d2"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return s.get("users?page=".concat(e,"&count=").concat(t))},getUserId:function(e){return s.get("profile/".concat(e))},follow:function(e){return s.post("follow/".concat(e))},unfollow:function(e){return s.delete("follow/".concat(e))}},i={getUserId:function(e){return s.get("profile/".concat(e))},getStatus:function(e){return s.get("profile/status/".concat(e))},updateStatus:function(e){return s.put("profile/status",{status:e})}},c={me:function(){return s.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return s.delete("auth/login")}}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},246:function(e,t,n){"use strict";n.r(t);var r=n(1),s=(n(120),n(0)),a=n.n(s),i=n(51),c=n.n(i),o=n(3),u=n(4),l=n(9),d=n(10),j=(n(124),n(16)),h=n.n(j),b=n(14),p=(n(28),function(e){return Object(r.jsxs)("nav",{className:h.a.nav,children:[Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:h.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:h.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(b.b,{to:"/news",activeClassName:h.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(b.b,{to:"/music",activeClassName:h.a.activeLink,children:"Music"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(b.b,{to:"/settings",activeClassName:h.a.activeLink,children:"Settings"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(b.b,{to:"/users",activeClassName:h.a.activeLink,children:"Users"})})]})}),f=function(e){return Object(r.jsx)("div",{children:"News"})},O=function(e){return Object(r.jsx)("div",{children:"Music"})},g=function(e){return Object(r.jsx)("div",{children:"Settings"})},m=n(7),x=n(22),v=n(8),w=n.n(v),P=n(21),k=n(12),y=n(2),C=n(13),L=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(y.a)(Object(y.a)({},e),r):e}))},W="FOLLOW",G="UNFOLLOW",S="SET_USERS",A="SET_CURRENT_PAGE",I="SET_USERS_TOTAL_COUNT",U="TOGGLE_IS_FETCHING",E="TOGGLE_IS_FOLLOWING_PROGRESS",M={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},z=function(e){return{type:W,userId:e}},R=function(e){return{type:G,userId:e}},F=function(e){return{type:A,currentPage:e}},T=function(e){return{type:U,isFetching:e}},q=function(e,t){return{type:E,isFetching:e,userId:t}},Y=function(){var e=Object(P.a)(w.a.mark((function e(t,n,r,s){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(s(n)),t(q(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(y.a)(Object(y.a)({},e),{},{users:L(e.users,t.userId,"id",{followed:!0})});case G:return Object(y.a)(Object(y.a)({},e),{},{users:L(e.users,t.userId,"id",{followed:!1})});case S:return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case A:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.currentPage});case I:return Object(y.a)(Object(y.a)({},e),{},{totalUsersCount:t.count});case U:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case E:return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(k.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},B=n(58),Z=n(107),D=n.n(Z),H=function(e){for(var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,a=e.onPageChanged,i=Math.ceil(t/n),c=[],o=1;o<=i;o++)c.push(o);return Object(r.jsx)("div",{children:c.map((function(e){return Object(r.jsx)("span",{className:s===e&&D.a.selectedPage,onClick:function(t){a(e)},children:e})}))})},J=n(108),V=n.n(J),X=function(e){var t=e.user,n=Object(B.a)(e,["user"]);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",className:V.a.usersPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},Q=function(e){var t=e.currentPage,n=e.totalUsersCount,s=e.pageSize,a=e.onPageChanged,i=e.users,c=Object(B.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(H,{currentPage:t,onPageChanged:a,totalUsersCount:n,pageSize:s}),Object(r.jsx)("div",{children:i.map((function(e){return Object(r.jsx)(X,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow},e.id)}))})]})},K=n(35),_=(n(117),n(24)),$=n(109),ee=Object($.a)((function(e){return e.usersPage.users}),(function(e){return e})),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},se=function(e){return e.usersPage.isFetching},ae=function(e){return e.usersPage.followingInProgress},ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(K.a,{}):null,Object(r.jsx)(Q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),ce=Object(_.d)(Object(x.b)((function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:se(e),followingInProgress:ae(e)}}),{follow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,C.c.follow.bind(C.c),z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,C.c.unfollow.bind(C.c),R);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:F,toggleFollowingProgress:q,getUsers:function(e,t){return function(){var n=Object(P.a)(w.a.mark((function n(r){var s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(T(!0)),r(F(e)),n.next=4,C.c.getUsers(e,t);case 4:s=n.sent,r(T(!1)),r((i=s.data.items,{type:S,users:i})),r((a=s.data.totalCount,{type:I,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ie),oe=n(72),ue=n.n(oe),le=function(e){return Object(r.jsxs)("header",{className:ue.a.header,children:[Object(r.jsx)("img",{src:"https://img1.freepng.ru/20171220/gze/twitter-logo-png-5a3a1851372e76.0876249315137567532269680.jpg"}),Object(r.jsx)("div",{className:ue.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})})]})},de=(n(68),"samurai-network/auth/SET_USER_DATA"),je={userId:null,email:null,login:null,isAuth:!1},he=function(e,t,n,r){return{type:de,data:{userId:e,email:t,login:n,isAuth:r}}},be=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,r,s,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.login,i=r.email,t(he(s,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(y.a)(Object(y.a)({},e),t.data);default:return e}},fe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(le,Object(y.a)({},this.props))}}]),n}(a.a.Component),Oe=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(fe),ge=n(116),me=n(59),xe=me.a().shape({email:me.b().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),password:me.b().min(3,"Must be longer than 8 characters").required("Required")}),ve=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(P.a)(w.a.mark((function r(s){return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===r.sent.data.resultCode&&s(be());case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(m.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(ge.a,{initialValues:{email:"",password:"",rememberMe:!0},validateOnBlur:!0,onSubmit:function(t){console.log(t),e.login(t.email,t.password,t.rememberMe)},validationSchema:xe,children:function(e){var t=e.values,n=e.errors,s=e.touched,a=e.handleChange,i=e.handleBlur,c=e.isValid,o=e.handleSubmit,u=e.dirty;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"email",children:" \u0418\u043c\u044f "})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"email",onChange:a,onBlur:i,value:t.email})]}),s.name&&n.name&&Object(r.jsx)("p",{children:n.name}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"password",children:" \u041f\u0430\u0440\u043e\u043b\u044c "})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",name:"password",onChange:a,onBlur:i,value:t.password})]}),s.password&&n.password&&Object(r.jsx)("p",{children:n.password}),Object(r.jsxs)("p",{children:[Object(r.jsx)("input",{type:"checkbox",name:"rememberMe",onChange:a,onBlur:i,value:t.rememberMe}),Object(r.jsx)("label",{htmlFor:"rememberMe",children:" remember me "})]}),Object(r.jsx)("button",{disabled:!c&&!u,onClick:o,type:"submit",children:"Send"})]})}})]})})),we="INITIALIZED_SUCCESS",Pe={initialized:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},ye=n(74),Ce=n(105),Le={friendsNames:["Andrew","Sasha","Sveta","Gosha","Corin"]},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return e},Ge=n(115),Se=Object(_.c)({profilePage:ye.b,dialogsPage:Ce.b,sideBar:We,usersPage:N,auth:pe,app:ke}),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,Ie=Object(_.e)(Se,Ae(Object(_.a)(Ge.a)));window.__store__=Ie;var Ue=Ie,Ee=function(e){return function(t){return Object(r.jsx)(a.a.Suspense,{fallback:Object(r.jsx)(K.a,{}),children:Object(r.jsx)(e,Object(y.a)({},t))})}},Me=s.lazy((function(){return n.e(4).then(n.bind(null,253))})),ze=s.lazy((function(){return n.e(3).then(n.bind(null,252))})),Re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(Oe,{}),Object(r.jsx)(m.b,{render:function(){return Object(r.jsx)(p,{})}}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(m.b,{path:"/dialogs",render:Ee(Me)}),Object(r.jsx)(m.b,{path:"/profile/:userId?",render:Ee(ze)}),Object(r.jsx)(m.b,{path:"/news",component:f}),Object(r.jsx)(m.b,{path:"/music",component:O}),Object(r.jsx)(m.b,{path:"/settings",component:g}),Object(r.jsx)(m.b,{path:"/users",render:function(){return Object(r.jsx)(ce,{})}}),Object(r.jsx)(m.b,{path:"/login",render:function(){return Object(r.jsx)(ve,{})}})]})]}):Object(r.jsx)(K.a,{})}}]),n}(s.Component),Fe=Object(_.d)(m.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(be());Promise.all([t]).then((function(){e({type:we})}))}}}))(Re),Te=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsx)(x.a,{store:Ue,children:Object(r.jsx)(Fe,{})})})};c.a.render(Object(r.jsx)(Te,{}),document.getElementById("root"))},28:function(e,t,n){e.exports={friends:"Friends_friends__16O_z",friendsTitle:"Friends_friendsTitle__2QPXJ",friendsBlock:"Friends_friendsBlock__2qvnx",friendItem:"Friends_friendItem__33jed",friendImg:"Friends_friendImg__HER0m",friendName:"Friends_friendName__3dB2C"}},35:function(e,t,n){"use strict";var r=n(1),s=n.p+"static/media/preloader.522ccf13.svg";t.a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:s})})}},72:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return x}));var r=n(8),s=n.n(r),a=n(21),i=n(12),c=n(2),o=n(13),u="ADD-POST",l="UPDATE-NEW-POST-TEXT",d="SET_USER_PROFILE",j="SET_STATUS",h="DELETE_POST",b={posts:[{id:1,message:"Hello, how are you?",likes:1},{id:2,message:"GOGGOGGOGOGOG",likes:10},{id:3,message:"Something",likes:130},{id:4,message:"FUuuuuuuu",likes:120}],profile:null,status:""},p=function(e){return{type:u,newPostText:e}},f=function(e){return{type:l,newText:e}},O=function(e){return{type:j,status:e}},g=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getUserId(e);case 2:r=t.sent,n((s=r.data,{type:d,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likes:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case l:return Object(c.a)(Object(c.a)({},e),{},{newPostText:t.newText});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case h:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case j:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}}}},[[246,1,2]]]);
//# sourceMappingURL=main.4b823ec0.chunk.js.map