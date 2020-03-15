(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3c6d":function(t,e,i){"use strict";i.r(e),i.d(e,"GESTURE_CONTROLLER",function(){return u}),i.d(e,"createGesture",function(){return h});var r,n=i("3eIi"),a=(i("lSdy"),function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new s(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new o(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,i){return this.canStart(t)?(this.requestedStart.set(e,i),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,i){if(!this.start(t,e,i))return!1;var r=this.requestedStart,n=-1e4;if(r.forEach(function(t){n=Math.max(n,t)}),n===i){this.capturedId=e,r.clear();var a=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(a),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var i=this.disabledGestures.get(t);void 0===i&&(i=new Set,this.disabledGestures.set(t,i)),i.add(e)},t.prototype.enableGesture=function(t,e){var i=this.disabledGestures.get(t);void 0!==i&&i.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(c)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(c)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}()),s=function(){function t(t,e,i,r,n){this.id=e,this.name=i,this.disableScroll=n,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),o=function(){function t(t,e,i,r){this.id=e,this.disable=i,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),c="backdrop-no-scroll",u=new a,l=function(t,e,i,r){var n,a,s=d(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(n="addEventListener",a="removeEventListener"),t[n](e,i,s),function(){t[a](e,i,s)}},d=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(i){r=!1}return!!r},f=function(t){return t instanceof Document?t:t.ownerDocument},h=function(t){var e=!1,i=!1,r=!0,a=!1,s=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),o=s.canStart,c=s.onWillStart,d=s.onStart,h=s.onEnd,g=s.notCaptured,y=s.onMove,v=s.threshold,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},S=function(t,e,i){var r=s.maxAngle*(Math.PI/180),n="x"===s.direction,a=Math.cos(r),o=e*e,c=0,u=0,l=!1,d=0;return{start:function(t,e){c=t,u=e,d=0,l=!0},detect:function(t,e){if(!l)return!1;var i=t-c,r=e-u,s=i*i+r*r;if(s<o)return!1;var f=Math.sqrt(s),h=(n?i:r)/f;return d=h>a?1:h<-a?-1:0,l=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(0,s.threshold),E=u.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),x=function(){e&&(a=!1,y&&y(w))},D=function(){return!(E&&!E.capture()||(e=!0,r=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,c?c(w).then(C):C(),0))},C=function(){d&&d(w),r=!0},X=function(){e=!1,i=!1,a=!1,r=!0,E.release()},k=function(t){var i=e,n=r;X(),n&&(p(w,t),i?h&&h(w):g&&g(w))},P=function(t,e,i,r,n){var a,s,o,c,u,d,h,p=0,m=function(r){p=Date.now()+2e3,e(r)&&(!s&&i&&(s=l(t,"touchmove",i,n)),o||(o=l(t,"touchend",g,n)),c||(c=l(t,"touchcancel",g,n)))},b=function(r){p>Date.now()||e(r)&&(!d&&i&&(d=l(f(t),"mousemove",i,n)),h||(h=l(f(t),"mouseup",y,n)))},g=function(t){v(),r&&r(t)},y=function(t){w(),r&&r(t)},v=function(){s&&s(),o&&o(),c&&c(),s=o=c=void 0},w=function(){d&&d(),h&&h(),d=h=void 0},S=function(){v(),w()},E=function(e){e?(a&&a(),u&&u(),a=u=void 0,S()):(a||(a=l(t,"touchstart",m,n)),u||(u=l(t,"mousedown",b,n)))};return{setDisabled:E,stop:S,destroy:function(){E(!0),r=i=e=void 0}}}(s.el,function(t){var e=b(t);return!(i||!r)&&(m(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=e,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!o||!1!==o(w))&&(E.release(),!!E.start()&&(i=!0,0===v?D():(S.start(w.startX,w.startY),!0))))},function(t){e?!a&&r&&(a=!0,p(w,t),Object(n.n)(x)):(p(w,t),S.detect(w.currentX,w.currentY)&&(S.isGesture()&&D()||T()))},k,{capture:!1}),T=function(){X(),P.stop(),g&&g(w)};return{setDisabled:function(t){t&&e&&k(void 0),P.setDisabled(t)},destroy:function(){E.destroy(),P.destroy()}}},p=function(t,e){if(e){var i=t.currentX,r=t.currentY,n=t.timeStamp;m(e,t);var a=t.currentX,s=t.currentY,o=(t.timeStamp=b(e))-n;if(o>0&&o<100){var c=(s-r)/o;t.velocityX=(a-i)/o*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=a-t.startX,t.deltaY=s-t.startY,t.event=e}},m=function(t,e){var i=0,r=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var a=n[0];i=a.clientX,r=a.clientY}else void 0!==t.pageX&&(i=t.pageX,r=t.pageY)}e.currentX=i,e.currentY=r},b=function(t){return t.timeStamp||Date.now()}},"6WfQ":function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a});var r=i("mrSG"),n=function(t,e,i,n,a){return r.b(void 0,void 0,void 0,function(){var s;return r.e(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,i,a,n)];if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,n&&n.forEach(function(t){return s.classList.add(t)}),a&&Object.assign(s,a),e.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,s]}})})},a=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},Dgxi:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),i=document.createElement("div");e.appendChild(i),i.innerHTML=t,o.forEach(function(t){for(var i=e.querySelectorAll(t),r=i.length-1;r>=0;r--){var s=i[r];s.parentNode?s.parentNode.removeChild(s):e.removeChild(s);for(var o=a(s),c=0;c<o.length;c++)n(o[c])}});for(var r=a(e),s=0;s<r.length;s++)n(r[s]);var c=document.createElement("div");c.appendChild(e);var u=c.querySelector("div");return null!==u?u.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},n=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var i=t.attributes[e],r=i.name;if(s.includes(r.toLowerCase())){var o=i.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var c=a(t);for(e=0;e<c.length;e++)n(c[e])}},a=function(t){return null!=t.children?t.children:t.childNodes},s=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},Ie7a:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var r=i("XSsR"),n=i("CcnG"),a=function(){function t(){}return t.prototype.getNewReleases=function(){return fetch("https://platzi-music-api.now.sh/browse/new-releases").then(function(t){return t.json()})},t.prototype.getArtists=function(){return r.a},t.prototype.getArtistTopTracks=function(t){return fetch("https://platzi-music-api.now.sh/artists/"+t+"/top-tracks?country=CO").then(function(t){return t.json()})},t.prototype.searchTracks=function(t){return fetch("https://platzi-music-api.now.sh/search?q="+t+"&type=track").then(function(t){return t.json()})},t.ngInjectableDef=n.Ob({factory:function(){return new t},token:t,providedIn:"root"}),t}()},SF24:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"d",function(){return r});var r=function(){var t=window.TapticEngine;t&&t.selection()},n=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},a=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},XSsR:function(t){t.exports={a:[{external_urls:{spotify:"https://open.spotify.com/artist/25z14Qw0e8uN0dIaWVe2Mk"},followers:{href:null,total:3541},genres:["smooth jazz"],href:"https://api.spotify.com/v1/artists/25z14Qw0e8uN0dIaWVe2Mk",id:"25z14Qw0e8uN0dIaWVe2Mk",images:[{height:640,url:"https://i.scdn.co/image/398aeedb219a61b06e8628a2f72cc993871d55df",width:640},{height:320,url:"https://i.scdn.co/image/90f57c3a89cab8bf796ccd278bc20b318e050c85",width:320},{height:160,url:"https://i.scdn.co/image/d32016dc5837941de2acd1cd7ce7c1eaf95d50eb",width:160}],name:"Nestor Torres",popularity:38,type:"artist",uri:"spotify:artist:25z14Qw0e8uN0dIaWVe2Mk"},{external_urls:{spotify:"https://open.spotify.com/artist/05fG473iIaoy82BF1aGhL8"},followers:{href:null,total:4819254},genres:["alternative metal","nu metal","post-grunge","rap metal"],href:"https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8",id:"05fG473iIaoy82BF1aGhL8",images:[{height:640,url:"https://i.scdn.co/image/a7958184e76eaec48937485e75d9f7e6d26d097f",width:640},{height:320,url:"https://i.scdn.co/image/0da8dc59c5ae97e7364425120ce0453d82947158",width:320},{height:160,url:"https://i.scdn.co/image/bc218ce0a94f780ecd7741c522ba783ee0de3d2c",width:160}],name:"Slipknot",popularity:86,type:"artist",uri:"spotify:artist:05fG473iIaoy82BF1aGhL8"},{external_urls:{spotify:"https://open.spotify.com/artist/5ZNxiPcbKgaNcBrERMpqeu"},followers:{href:null,total:1984381},genres:["celtic metal","medieval rock","rock en espanol","spanish metal"],href:"https://api.spotify.com/v1/artists/5ZNxiPcbKgaNcBrERMpqeu",id:"5ZNxiPcbKgaNcBrERMpqeu",images:[{height:640,url:"https://i.scdn.co/image/8b3e6679265afb7afc73e7fff38811faf45d2f5a",width:640},{height:320,url:"https://i.scdn.co/image/5b75ee6d0fb06165b9fb308e7f0c4c6b7a862fd8",width:320},{height:160,url:"https://i.scdn.co/image/235bb39dd64c9c9f9362721971d4fc7418671b36",width:160}],name:"M\xe4go de Oz",popularity:71,type:"artist",uri:"spotify:artist:5ZNxiPcbKgaNcBrERMpqeu"},{external_urls:{spotify:"https://open.spotify.com/artist/1Qp56T7n950O3EGMsSl81D"},followers:{href:null,total:719868},genres:["metal"],href:"https://api.spotify.com/v1/artists/1Qp56T7n950O3EGMsSl81D",id:"1Qp56T7n950O3EGMsSl81D",images:[{height:640,url:"https://i.scdn.co/image/4d4e18d9cf20d3039201fb4f185e0e498275cb06",width:640},{height:320,url:"https://i.scdn.co/image/d40e20479070b844405bb4788fc6bc618616ac28",width:320},{height:160,url:"https://i.scdn.co/image/e406b600fc1bae338d27aea2b78623b63e4509a0",width:160}],name:"Ghost",popularity:71,type:"artist",uri:"spotify:artist:1Qp56T7n950O3EGMsSl81D"},{external_urls:{spotify:"https://open.spotify.com/artist/0Up8AZmXDecXiMirZhRLmw"},followers:{href:null,total:127702},genres:["cantautor","ecuadorian pop","latin","latin pop"],href:"https://api.spotify.com/v1/artists/0Up8AZmXDecXiMirZhRLmw",id:"0Up8AZmXDecXiMirZhRLmw",images:[{height:640,url:"https://i.scdn.co/image/39b41aa0f90818329da6b7109d1c8f0e559da86a",width:640},{height:320,url:"https://i.scdn.co/image/40663ca7a231fee20ad44d5a3d2a763385e4a6bd",width:320},{height:160,url:"https://i.scdn.co/image/85de1481843feffe04c0b86eb15022a343c18e71",width:160}],name:"Alberto Plaza",popularity:51,type:"artist",uri:"spotify:artist:0Up8AZmXDecXiMirZhRLmw"},{external_urls:{spotify:"https://open.spotify.com/artist/0yNSzH5nZmHzeE2xn6Xshb"},followers:{href:null,total:1869373},genres:["latin","latin afrobeat","latin alternative","latin hip hop","puerto rican rock","rap conciencia","reggaeton","rock en espanol","tropical"],href:"https://api.spotify.com/v1/artists/0yNSzH5nZmHzeE2xn6Xshb",id:"0yNSzH5nZmHzeE2xn6Xshb",images:[{height:719,url:"https://i.scdn.co/image/edabfb79fbf3d71ad9d0961a7b199a1470fe5372",width:1e3},{height:460,url:"https://i.scdn.co/image/a3c9dd492b973e5d5ebfd957b30325972c16d2d4",width:640},{height:144,url:"https://i.scdn.co/image/896866e81c4a3d873ce3a28b2396f75212d192a0",width:200},{height:46,url:"https://i.scdn.co/image/28b48ccc46a8cb61fbf3e67867fc7794acc6dc85",width:64}],name:"Calle 13",popularity:75,type:"artist",uri:"spotify:artist:0yNSzH5nZmHzeE2xn6Xshb"},{external_urls:{spotify:"https://open.spotify.com/artist/6wWVKhxIU2cEi0K81v7HvP"},followers:{href:null,total:3273221},genres:["alternative metal","german metal","industrial","industrial metal","industrial rock","neue deutsche harte","nu metal"],href:"https://api.spotify.com/v1/artists/6wWVKhxIU2cEi0K81v7HvP",id:"6wWVKhxIU2cEi0K81v7HvP",images:[{height:640,url:"https://i.scdn.co/image/cdf344b2f5124d1f2f1217c45f12096730c70560",width:640},{height:320,url:"https://i.scdn.co/image/d7bba2e8eb624d93d8cc7cb57d9ba5fb35f0f901",width:320},{height:160,url:"https://i.scdn.co/image/019518862c16964fa30906a55ad2cd46f3f35c1a",width:160}],name:"Rammstein",popularity:85,type:"artist",uri:"spotify:artist:6wWVKhxIU2cEi0K81v7HvP"},{external_urls:{spotify:"https://open.spotify.com/artist/5lwmRuXgjX8xIwlnauTZIP"},followers:{href:null,total:8678778},genres:["bachata","latin","tropical"],href:"https://api.spotify.com/v1/artists/5lwmRuXgjX8xIwlnauTZIP",id:"5lwmRuXgjX8xIwlnauTZIP",images:[{height:640,url:"https://i.scdn.co/image/573323ce254851c2c0b616758c9e9413948cd16b",width:640},{height:320,url:"https://i.scdn.co/image/c4cca3e1c615a35b5d4dc14619d0ccdefacb7f23",width:320},{height:160,url:"https://i.scdn.co/image/22265d9251edcc040b5aaad9432322ac0e03b336",width:160}],name:"Romeo Santos",popularity:86,type:"artist",uri:"spotify:artist:5lwmRuXgjX8xIwlnauTZIP"},{external_urls:{spotify:"https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},followers:{href:null,total:18921676},genres:["glam rock","rock"],href:"https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",id:"1dfeR4HaWDbWqFHLkxsg1d",images:[{height:806,url:"https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982",width:999},{height:516,url:"https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",width:640},{height:161,url:"https://i.scdn.co/image/c06971e9ff81696699b829484e3be165f4e64368",width:200},{height:52,url:"https://i.scdn.co/image/6dd0ffd270903d1884edf9058c49f58b03db893d",width:64}],name:"Queen",popularity:92,type:"artist",uri:"spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"},{external_urls:{spotify:"https://open.spotify.com/artist/1r4hJ1h58CWwUQe3MxPuau"},followers:{href:null,total:16581097},genres:["reggaeton"],href:"https://api.spotify.com/v1/artists/1r4hJ1h58CWwUQe3MxPuau",id:"1r4hJ1h58CWwUQe3MxPuau",images:[{height:640,url:"https://i.scdn.co/image/d12586e8e67dffd2ea281d6eeefbe4b06b06b69a",width:640},{height:320,url:"https://i.scdn.co/image/1ed85e35e0ab10006ae92356874089edd74368eb",width:320},{height:160,url:"https://i.scdn.co/image/6955535e0726c8a967036ef3b2d83ee48231299b",width:160}],name:"Maluma",popularity:93,type:"artist",uri:"spotify:artist:1r4hJ1h58CWwUQe3MxPuau"},{external_urls:{spotify:"https://open.spotify.com/artist/4yscD4NQlCKXEpUvBV3nj8"},followers:{href:null,total:6374},genres:["baroque","baroque ensemble","classical performance","early music ensemble","historically informed performance","orchestra"],href:"https://api.spotify.com/v1/artists/4yscD4NQlCKXEpUvBV3nj8",id:"4yscD4NQlCKXEpUvBV3nj8",images:[{height:640,url:"https://i.scdn.co/image/25226219a3d35d0bb515624b3d7f8f683b0105b1",width:640},{height:320,url:"https://i.scdn.co/image/8a925fd8caf5694e8d7a954ea9981faac20789f8",width:320},{height:160,url:"https://i.scdn.co/image/9b0ca797c322041deccdfefae5b6a9c371430552",width:160}],name:"Tafelmusik Baroque Orchestra",popularity:46,type:"artist",uri:"spotify:artist:4yscD4NQlCKXEpUvBV3nj8"},{external_urls:{spotify:"https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5"},followers:{href:null,total:3009273},genres:["edm","progressive house","progressive trance","trance"],href:"https://api.spotify.com/v1/artists/0SfsnGyD8FpIN4U4WCkBZ5",id:"0SfsnGyD8FpIN4U4WCkBZ5",images:[{height:640,url:"https://i.scdn.co/image/ca02718b0e5c389073e8dba56417acd36f541523",width:640},{height:320,url:"https://i.scdn.co/image/12b0a026351445e1731694da6d26047cbc02f6d8",width:320},{height:160,url:"https://i.scdn.co/image/2204a5c80ce46cb150d587ab6340fc686fa9bcf6",width:160}],name:"Armin van Buuren",popularity:82,type:"artist",uri:"spotify:artist:0SfsnGyD8FpIN4U4WCkBZ5"},{external_urls:{spotify:"https://open.spotify.com/artist/0h1zs4CTlU9D2QtgPxptUD"},followers:{href:null,total:3797209},genres:["cantautor","latin","latin arena pop","latin pop","rock en espanol","tropical"],href:"https://api.spotify.com/v1/artists/0h1zs4CTlU9D2QtgPxptUD",id:"0h1zs4CTlU9D2QtgPxptUD",images:[{height:640,url:"https://i.scdn.co/image/fa047bfcb6298b8dfb65eb626ba2a765ed8d42eb",width:640},{height:320,url:"https://i.scdn.co/image/3f57a92a47892421d87642e25a4725536bcbb820",width:320},{height:160,url:"https://i.scdn.co/image/57184945139673af4acde46054054f5ae33d24e4",width:160}],name:"Ricardo Arjona",popularity:79,type:"artist",uri:"spotify:artist:0h1zs4CTlU9D2QtgPxptUD"},{external_urls:{spotify:"https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"},followers:{href:null,total:18489601},genres:["reggaeton","trap latino"],href:"https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",id:"1i8SpTcr7yvPOmcqrbnVXY",images:[{height:640,url:"https://i.scdn.co/image/490e6f87a88682ba890bfaedee0dd0f512fe5c1e",width:640},{height:320,url:"https://i.scdn.co/image/fc712eaffbed83f15962e0ed98a2e6145492a8e5",width:320},{height:160,url:"https://i.scdn.co/image/a9198e2ed3039f11d25c8068f8504f28acc8696d",width:160}],name:"Ozuna",popularity:97,type:"artist",uri:"spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"},{external_urls:{spotify:"https://open.spotify.com/artist/3PfJE6ebCbCHeuqO4BfNeA"},followers:{href:null,total:226442},genres:["classical","classical performance","orchestra"],href:"https://api.spotify.com/v1/artists/3PfJE6ebCbCHeuqO4BfNeA",id:"3PfJE6ebCbCHeuqO4BfNeA",images:[{height:640,url:"https://i.scdn.co/image/bf87148d622227640d5c20ab5d7c13693d53f604",width:640},{height:320,url:"https://i.scdn.co/image/cfdbeba41bdd5b8d9139579b6f404f0710d5f34b",width:320},{height:160,url:"https://i.scdn.co/image/b293c1db68d870551a36c58b6ef05e8989a2796d",width:160}],name:"London Philharmonic Orchestra",popularity:68,type:"artist",uri:"spotify:artist:3PfJE6ebCbCHeuqO4BfNeA"},{external_urls:{spotify:"https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"},followers:{href:null,total:13171543},genres:["british invasion","merseybeat","psychedelic rock","rock"],href:"https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",id:"3WrFJ7ztbogyGnTHbHJFl2",images:[{height:640,url:"https://i.scdn.co/image/6b2a709752ef9c7aaf0d270344157f6cd2e0f1a7",width:640},{height:320,url:"https://i.scdn.co/image/1047bf172446f2a815a99ab0a0395099d621be51",width:320},{height:160,url:"https://i.scdn.co/image/0561b59a91a5e904ad2d192747715688d5f05012",width:160}],name:"The Beatles",popularity:90,type:"artist",uri:"spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"},{external_urls:{spotify:"https://open.spotify.com/artist/003f4bk13c6Q3gAUXv7dGJ"},followers:{href:null,total:60772},genres:["classical","classical performance","orchestra"],href:"https://api.spotify.com/v1/artists/003f4bk13c6Q3gAUXv7dGJ",id:"003f4bk13c6Q3gAUXv7dGJ",images:[{height:640,url:"https://i.scdn.co/image/c6c59ecb176f564d2eb588e7cf2d61d156529dd3",width:640},{height:320,url:"https://i.scdn.co/image/fbdd08df9bcf42483f09f4d710d11e4a154c75d1",width:320},{height:160,url:"https://i.scdn.co/image/94c991d9e8b4681cf1aec471d1c09efc1811e3f8",width:160}],name:"Wiener Philharmoniker",popularity:69,type:"artist",uri:"spotify:artist:003f4bk13c6Q3gAUXv7dGJ"},{external_urls:{spotify:"https://open.spotify.com/artist/4rYCMf7ApPRVG3yjCbxJ8m"},followers:{href:null,total:1821},genres:["classical flute"],href:"https://api.spotify.com/v1/artists/4rYCMf7ApPRVG3yjCbxJ8m",id:"4rYCMf7ApPRVG3yjCbxJ8m",images:[{height:1e3,url:"https://i.scdn.co/image/b6f85afff7987a9c8392b66aaedaa6c8aaf3c50e",width:1e3},{height:640,url:"https://i.scdn.co/image/366136efb1e6bc7d42e2c1cfa249f8ea1614f9db",width:640},{height:200,url:"https://i.scdn.co/image/5e855778946061f2f30ff91b94af0d0bf092392b",width:200},{height:64,url:"https://i.scdn.co/image/0dcedafbac1f8c44440938d35c903c775e855b49",width:64}],name:"Sharon Bezaly",popularity:28,type:"artist",uri:"spotify:artist:4rYCMf7ApPRVG3yjCbxJ8m"},{external_urls:{spotify:"https://open.spotify.com/artist/02OR1V0L1ODy7dDlBLTOvx"},followers:{href:null,total:97035},genres:["colombian rock","latin metal","latin rock","metal colombiano","rock en espanol"],href:"https://api.spotify.com/v1/artists/02OR1V0L1ODy7dDlBLTOvx",id:"02OR1V0L1ODy7dDlBLTOvx",images:[{height:640,url:"https://i.scdn.co/image/4839facdfd8964d70af3dfd5962b37d7771ed463",width:640},{height:320,url:"https://i.scdn.co/image/0240a84d5fa4e4000207b6292eb78ba45a4a771b",width:320},{height:160,url:"https://i.scdn.co/image/bd770ad5ce2a01db96b2125c78928ea9ca783864",width:160}],name:"Kraken",popularity:45,type:"artist",uri:"spotify:artist:02OR1V0L1ODy7dDlBLTOvx"},{external_urls:{spotify:"https://open.spotify.com/artist/4NqS7DbPFYwZmniGHCPMpm"},followers:{href:null,total:87838},genres:["environmental","meditation","sleep"],href:"https://api.spotify.com/v1/artists/4NqS7DbPFYwZmniGHCPMpm",id:"4NqS7DbPFYwZmniGHCPMpm",images:[{height:640,url:"https://i.scdn.co/image/ac826fed2f4cbb05c6db394c27ac19747ed198b8",width:640},{height:320,url:"https://i.scdn.co/image/a491705209a0d81e9b3a91bd2139efe43acc70e6",width:320},{height:160,url:"https://i.scdn.co/image/7fc1ef642210289cab176dd01bc45df818108692",width:160}],name:"Nature Sounds",popularity:73,type:"artist",uri:"spotify:artist:4NqS7DbPFYwZmniGHCPMpm"}]}},fKRy:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var r=i("CcnG"),n=i("iw74"),a=function(){function t(t){this.storage=t}return t.prototype.loginUser=function(t){var e=this,i=t.email,r=t.password;return new Promise(function(t,n){e.storage.get(i).then(function(e){e?e.password==btoa(r)?t(e):n("Contrase\xf1a incorrecta"):n("No existe un usuario con este email")})})},t.prototype.registerUser=function(t){var e=this;return new Promise(function(i,r){e.storage.get(t.email).then(function(n){n?(console.log(n),r("El usuario ya existe")):(t.password=btoa(t.password),e.storage.set(t.email,t).then(function(){i("El usuario se ha creado con \xe9xito")}))})})},t.ngInjectableDef=r.Ob({factory:function(){return new t(r.Pb(n.b))},token:t,providedIn:"root"}),t}()},fXh5:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return n}),i.d(e,"d",function(){return c});var r=i("mrSG"),n=function(t,e){return null!==e.closest(t)},a=function(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},s=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},o=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,i){return r.b(void 0,void 0,void 0,function(){var n;return r.e(this,function(r){return null!=t&&"#"!==t[0]&&!o.test(t)&&(n=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,n.push(t,i)]):[2,!1]})})}},i1UR:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return c}),i.d(e,"c",function(){return o}),i.d(e,"d",function(){return f}),i.d(e,"e",function(){return h}),i.d(e,"f",function(){return a}),i.d(e,"g",function(){return n}),i.d(e,"h",function(){return d}),i.d(e,"i",function(){return u}),i.d(e,"j",function(){return l}),i.d(e,"k",function(){return s});var r=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},n=function(t){return!!t.shadowRoot&&!!t.attachShadow},a=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},s=function(t,e,i,r,a){if(t||n(e)){var s=e.querySelector("input.aux-input");s||((s=e.ownerDocument.createElement("input")).type="hidden",s.classList.add("aux-input"),e.appendChild(s)),s.disabled=a,s.name=i,s.value=r||""}},o=function(t,e,i){return Math.max(t,Math.min(e,i))},c=function(t,e){if(!t){var i="ASSERT: "+e;throw console.error(i),new Error(i)}},u=function(t){return t.timeStamp||Date.now()},l=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var i=e[0];return{x:i.clientX,y:i.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,e){var i=t._original||t;return{_original:t,emit:h(i.emit.bind(i),e)}},h=function(t,e){var i;return void 0===e&&(e=0),function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];clearTimeout(i),i=setTimeout.apply(void 0,[t,e].concat(r))}}},i7WA:function(t,e,i){"use strict";i.d(e,"a",function(){return w}),i.d(e,"b",function(){return y}),i.d(e,"c",function(){return S}),i.d(e,"d",function(){return s});var r=i("mrSG"),n=i("3eIi"),a=i("bjU6"),s=function(t){return new Promise(function(e,i){Object(n.n)(function(){o(t),c(t).then(function(i){i.animation&&i.animation.destroy(),u(t),e(i)},function(e){u(t),i(e)})})})},o=function(t){var e=t.enteringEl,i=t.leavingEl;E(e,i,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),S(e,!1),i&&S(i,!1)},c=function(t){return r.b(void 0,void 0,void 0,function(){var e;return r.e(this,function(i){switch(i.label){case 0:return[4,l(t)];case 1:return[2,(e=i.sent())?d(e,t):f(t)]}})})},u=function(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=function(t){return r.b(void 0,void 0,void 0,function(){var e;return r.e(this,function(r){switch(r.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,i.e(105).then(i.bind(null,"72vL"))]:[2,void 0];case 1:return e=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,i.e(106).then(i.bind(null,"LoTI"))];case 3:e=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,e]}})})},d=function(t,e){return r.b(void 0,void 0,void 0,function(){var n;return r.e(this,function(r){switch(r.label){case 0:return[4,h(e,!0)];case 1:return r.sent(),[4,i.e(1).then(i.bind(null,"6Qsj")).then(function(i){return i.create(t,e.baseEl,e)})];case 2:return n=r.sent(),b(e.enteringEl,e.leavingEl),[4,m(n,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),n.hasCompleted&&g(e.enteringEl,e.leavingEl),[2,{hasCompleted:n.hasCompleted,animation:n}]}})})},f=function(t){return r.b(void 0,void 0,void 0,function(){var e,i;return r.e(this,function(r){switch(r.label){case 0:return e=t.enteringEl,i=t.leavingEl,[4,h(t,!1)];case 1:return r.sent(),b(e,i),g(e,i),[2,{hasCompleted:!0}]}})})},h=function(t,e){return r.b(void 0,void 0,void 0,function(){var i;return r.e(this,function(r){switch(r.label){case 0:return i=(void 0!==t.deepWait?t.deepWait:e)?[w(t.enteringEl),w(t.leavingEl)]:[v(t.enteringEl),v(t.leavingEl)],[4,Promise.all(i)];case 1:return r.sent(),[4,p(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})},p=function(t,e){return r.b(void 0,void 0,void 0,function(){return r.e(this,function(i){switch(i.label){case 0:return t?[4,t(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},m=function(t,e){var i=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return i?(t.progressStart(),i(t)):t.play(),r},b=function(t,e){y(e,a.c),y(t,a.a)},g=function(t,e){y(t,a.b),y(e,a.d)},y=function(t,e){if(t){var i=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(i)}},v=function(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()},w=function(t){return r.b(void 0,void 0,void 0,function(){var e;return r.e(this,function(i){switch(i.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(w))];case 3:i.sent(),i.label=4;case 4:return[2]}})})},S=function(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=function(t,e,i){void 0!==t&&(t.style.zIndex="back"===i?"99":"101"),void 0!==e&&(e.style.zIndex="100")}}}]);