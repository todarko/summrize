(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){e.exports=a.p+"static/media/ios_app.c28e60e9.png"},34:function(e,t,a){e.exports=a(55)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),i=(a(40),a(7)),c=a(8),u=a(11),s=a(9),m=a(12),d=(a(41),a(33)),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:null,renderedData:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;return fetch("https://api.summrize.com/api/day").then(function(e){return e.json()}).then(function(t){console.log(t);var a=Object(d.a)(new Map(t.map(function(e){return[e.day._id,e.day]})).values()).reverse();console.log(a),e.setState({isLoading:!1,dataSource:a}),e.setState({renderedData:a.map(function(t,a){return r.a.createElement("div",{key:"".concat(t._id)},r.a.createElement("hr",null),r.a.createElement("a",{href:t.url},r.a.createElement("img",{src:e._handleEmptyStringUri(t),style:e._handleEmtypImage(t)})),r.a.createElement("h2",{style:e._titleStyle()},t.title),r.a.createElement("a",{href:t.url},r.a.createElement("p",{style:e._articleUrl()},"Read Article")))})})})}},{key:"render",value:function(){var e=this.state.renderedData;return r.a.createElement("div",null,e)}},{key:"_handleEmtypImage",value:function(e){return e.article_thumbnail||e.article?{marginTop:20,maxHeight:250,borderRadius:25,overflow:"hidden",width:"75%",marginLeft:"auto",marginRight:"auto"}:{backgroundColor:"#d4f5f5",height:0}}},{key:"_handleEmptyStringUri",value:function(e){return e.article_thumbnail?(console.log("second"+e.article_thumbnail),e.article_thumbnail):(console.log("first"+e.article_thumbnail),e.article)}},{key:"_lineStyle",value:function(){return{borderBottomWidth:1,borderColor:"gray",margin:10,backgroundColor:"black"}}},{key:"_titleStyle",value:function(){return{width:"75%",paddingTop:0,paddingBottom:10,color:"#3e6990",fontSize:20,textAlign:"center",marginHorizontal:5,justifyContent:"center",alignItems:"center",borderRadius:10,overflow:"hidden",marginLeft:"auto",marginRight:"auto"}}},{key:"_articleUrl",value:function(){return{marginBottom:20,color:"rgba(255,166,158, 1)",fontSize:14,textAlign:"center",backgroundColor:"transparent",fontWeight:"bold"}}}]),t}(n.Component),g=a(25),p=a.n(g),f=a(58),b=a(59),E=(a(42),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{bg:"light",expand:"lg"},r.a.createElement(f.a.Brand,{href:"#home"},"summrize"),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{href:"#home"},"home"),r.a.createElement(b.a.Link,{href:"#about"},"about"),r.a.createElement(b.a.Link,{href:"#contact"},"contact")))))}}]),t}(n.Component)),v=a(32),y=a.n(v),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",null,r.a.createElement("img",{src:y.a,className:"Ios-logo",alt:"logo"}),r.a.createElement("h1",null,"The Breaktime Digest App"),r.a.createElement("p",null,"Catch up on the latest news stories or trending topics")),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement("h4",null,"This app was an idea after spending hours searching through news stories and apps for the content I cared about. "),r.a.createElement("h4",null,"It pulls the lates news stories or trending articles for you to visit. It also shows the top reddit comments for that article as well.")),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Hi Sophia Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{name:"about",className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={renderedData:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("render"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement("body",null,r.a.createElement("div",{class:"container-info"},r.a.createElement(j,null)),r.a.createElement("div",{class:"container-main"},r.a.createElement("div",{style:this._titleStyle()},"summrize"),r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement("br",null))))}},{key:"_titleStyle",value:function(){return{width:"95%",paddingTop:10,paddingBottom:10,color:"rgba(255,166,158, 1)",fontSize:20,textAlign:"center",marginHorizontal:5,justifyContent:"center",alignItems:"center",borderRadius:10,overflow:"hidden",marginLeft:"auto",marginRight:"auto",fontWeight:"bold"}}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.4ea778d0.chunk.js.map