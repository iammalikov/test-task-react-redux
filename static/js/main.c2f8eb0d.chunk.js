(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(214)},213:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),c=a(22),u=a(57),l=a(34),i=a(99),s=a(120),m=a(23),f=function(){return JSON.parse(localStorage.getItem("favoriteAlbums"))},d=function(e){localStorage.setItem("favoriteAlbums",JSON.stringify(e))},h="set search results data",p="reset search results data",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{data:t.payload};case p:return{data:[]};default:return e}},v="set list of favorite albums",E="reset favorite album list",y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{data:t.payload};case E:return{data:[]};default:return e}},g=Object(m.a)(),S=[s.a,Object(i.a)(g)],j=l.d.apply(void 0,[l.a.apply(void 0,S)].concat([]));localStorage.hasOwnProperty("favoriteAlbums")||localStorage.setItem("favoriteAlbums","[]");var A,O=Object(l.e)((A=g,Object(l.c)({searchResults:b,favoriteAlbums:y,router:Object(u.b)(A)})),{},j),F=a(96),I=a(25),N=a(215),k=a(219),w=a(217),R=function(e){return fetch("https://musicbrainz.org/ws/2/release-group?query=".concat(encodeURIComponent(e),"&fmt=json")).then(function(e){return e.json()})},x=function(e){return fetch("https://musicbrainz.org/ws/2/release-group/".concat(encodeURIComponent(e),"?inc=artist-credits&fmt=json")).then(function(e){return e.json()})},z=function(e){return{id:e.id,albumName:e.title,artistName:(t=e["artist-credit"],t.map(function(e){return e.artist.name}).join(", "))};var t},T={setSearchResults:function(e){return{type:h,payload:e}},fetchSearchResults:function(e){return function(t){R(e).then(function(e){var a,r=e["release-groups"],n=(a=r).length?a.map(function(e){return z(e)}):a;t(T.setSearchResults(n))})}},resetSearchResults:function(){return{type:p}}},C=T,J=a(218).a.Search,L=function(e){var t=e.onSearch;return n.a.createElement(J,{placeholder:"Enter the name of the album",size:"large",onSearch:function(e){return!!e.length&&t(e)},className:"search",enterButton:!0})},M={onSearch:function(e){return function(t){return t(C.fetchSearchResults(e))}}},U=Object(c.c)(null,M)(L),B=a(78),H=a(52),K={addToFavorites:function(e){var t=e.target.id;return function(e){e(K.fetchFavoriteAlbum(t))}},fetchFavoriteAlbum:function(e){return function(t){x(e).then(function(e){var a=z(e);t(K.addAlbumToStorage(a))})}},addAlbumToStorage:function(e){return function(){var t=f();t.unshift(e),d(t)}},removeAlbumFromStorage:function(e){var t=e.target.id;return function(e){var a=f().filter(function(e){return e.id!==t});d(a),e(K.setFavoriteAlbums(a))}},setFavoriteAlbums:function(e){return{type:v,payload:e}},resetFavoriteAlbums:function(){return{type:E}}},W=K,q=a(216),D=a(79),P=function(e){var t=e.albumsList,a=e.addToFavorites;return n.a.createElement(q.a,{itemLayout:"horizontal",dataSource:t,renderItem:function(e){return n.a.createElement(q.a.Item,null,n.a.createElement(q.a.Item.Meta,{title:e.albumName,description:e.artistName}),n.a.createElement(D.a,{id:e.id,type:"primary",onClick:a},"add to favorite"))}})},G=Object(B.a)({},C,W),Q=Object(H.a)(Object(c.c)(function(e){return{albumsList:e.searchResults.data}},G),Object(H.b)({componentWillUnmount:function(){this.props.resetSearchResults()}}))(P),V=w.a.Title,X=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(V,null,"Search music albums"),n.a.createElement(U,null),n.a.createElement(Q,null))},Y=function(e){var t=e.favoriteAlbums,a=e.removeAlbumFromStorage;return n.a.createElement(q.a,{itemLayout:"horizontal",dataSource:t,renderItem:function(e){return n.a.createElement(q.a.Item,null,n.a.createElement(q.a.Item.Meta,{id:e.id,title:e.albumName,description:e.artistName}),n.a.createElement(D.a,{id:e.id,type:"primary",onClick:a},"remove from favorite"))}})},Z=Object(B.a)({},W),$=Object(H.a)(Object(c.c)(function(e){return{favoriteAlbums:e.favoriteAlbums.data}},Z),Object(H.b)({componentDidMount:function(){var e=f();this.props.setFavoriteAlbums(e)},componentWillUnmount:function(){this.props.resetFavoriteAlbums()}}))(Y),_=w.a.Title,ee=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(_,null,"My favorite music albums"),n.a.createElement($,null))},te=N.a.Header,ae=N.a.Content,re=Object(c.c)(function(e){return{pathname:e.router.location.pathname}},null)(function(e){var t=e.pathname;return n.a.createElement("div",{className:"app"},n.a.createElement(N.a,{className:"layout"},n.a.createElement(te,{className:"header"},n.a.createElement(k.b,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[t],selectedKeys:[t],className:"menu"},n.a.createElement(k.b.Item,{key:"/test-task-react-redux/"},n.a.createElement(F.a,{to:"/test-task-react-redux/"},"Home")),n.a.createElement(k.b.Item,{key:"/test-task-react-redux/favorite"},n.a.createElement(F.a,{to:"/test-task-react-redux/favorite"},"Favorite")))),n.a.createElement(ae,{className:"content"},n.a.createElement(I.a,{path:"/test-task-react-redux/",component:X,exact:!0}),n.a.createElement(I.a,{path:"/test-task-react-redux/favorite",component:ee,exact:!0}))))});a(212),a(213);Object(o.render)(n.a.createElement(c.a,{store:O},n.a.createElement(u.a,{history:g},n.a.createElement(re,null))),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.c2f8eb0d.chunk.js.map