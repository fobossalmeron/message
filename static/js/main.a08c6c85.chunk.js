(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(35),r=n.n(a),c=(n(88),n(9)),l=n(22),u=n(78),s=n(16),d=n(54),m=n(4);function p(){var e=Object(l.a)(["\n  opacity: ",";\n  transition: ",";\n  width: 300px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n"]);return p=function(){return e},e}var f=m.b.div(p(),function(e){return e.invisible?"0":"1"},function(e){return e.invisible?"opacity .2s ease-in":"none"});function b(e){return i.a.createElement(f,{invisible:e.invisible},i.a.createElement("p",null,"loading..."))}n(95);var g=n(81),h=n(154),v=n(155);function w(){var e=Object(l.a)(["\n      background-color: transparent;\n      border: 1px solid white;\n      color: white;\n      cursor: default;\n      :hover {\n        text-decoration: none;\n        cursor: default;\n      }\n    "]);return w=function(){return e},e}var y=m.b.div.withConfig({displayName:"message__Container",componentId:"qycdo9-0"})(["width:100%;background-color:",";display:flex;flex-direction:row;align-items:center;justify-content:center;"],function(e){return e.background||"#3f51b5"}),x=m.b.textarea.withConfig({displayName:"message__TextArea",componentId:"qycdo9-1"})(["width:",";font-size:6rem;font-weight:bold;height:100%;background-color:transparent;text-align:center;white-space:normal;overflow:visible;resize:none;vertical-align:middle;padding:5% 15%;box-sizing:border-box;border:0;margin:0;&:focus{border:none;outline:none;}"],function(e){return e.emojified?"85%":"100%"}),j=m.b.div.withConfig({displayName:"message__Options",componentId:"qycdo9-2"})(["position:absolute;bottom:0;min-height:30px;display:flex;justify-content:space-around;right:0;width:",";"],function(e){return e.reduced?"85%":"100%"}),E=m.b.button.withConfig({displayName:"message__OptionsButton",componentId:"qycdo9-3"})(['cursor:pointer;padding:6px 10px 8px 10px;background-color:"white";color:',";border-radius:10px;font-weight:bold;transition:0.4s ease all;border:none;margin-bottom:15px;outline:none;:hover{text-decoration:underline;}",""],function(e){return e.color||"#3f51b5"},function(e){return e.disabled&&Object(m.a)(w())}),k=m.b.span.withConfig({displayName:"message__EmojiHider",componentId:"qycdo9-4"})(["color:",";position:absolute;right:",";left:",";font-size:23px;font-weight:bold;background-color:white;border-radius:100%;top:12px;width:31px;height:31px;padding:2px 0 0 1px;box-sizing:border-box;cursor:pointer;z-index:3;"],function(e){return e.color||"#3f51b5"},function(e){return e.inverted?"unset":"-45px"},function(e){return e.inverted?"-45px":"unset"}),C=m.b.div.withConfig({displayName:"message__EmojiContainer",componentId:"qycdo9-5"})([".emoji-mart{width:15%;z-index:3;left:0;height:100vh;top:0;position:relative;border:0;border-radius:0;}.emoji-mart-category-label{margin-bottom:4px;}.emoji-mart-scroll{height:83%;}"]),O=m.b.div.withConfig({displayName:"message__ShareContainer",componentId:"qycdo9-6"})(["padding:20px;background-color:white;position:relative;width:8%;height:100%;box-sizing:border-box;right:0;"]),_=m.b.div.withConfig({displayName:"message__Linked",componentId:"qycdo9-7"})(["font-size:1rem;position:absolute;top:20px;margin:0;width:100%;display:flex;flex-direction:row;justify-content:space-around;align-items:center;margin:0;p{margin:0%;}"]),S=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#607d8b"];function z(e){var t=e.match.params.message,n=Object(o.useState)(function(e){if(t)return e.toString().replace(/\+/g," ").replace(/\u2013/g,"\n").replace(/\xbf/g,"?").replace(/hashtag-/g,"#").replace(/percent-/g,"%");return"Write your message"}(t)),a=Object(c.a)(n,2),r=a[0],l=a[1],u=Object(o.useState)(!1),s=Object(c.a)(u,2),d=s[0],m=s[1],p=Object(o.useState)(!1),f=Object(c.a)(p,2),b=f[0],w=f[1],z=Object(o.useState)(!1),N=Object(c.a)(z,2),q=N[0],I=N[1],A=Object(o.useState)(S[Math.floor(Math.random()*S.length)]),W=Object(c.a)(A,2),B=W[0],T=(W[1],Object(o.useState)(!1)),D=Object(c.a)(T,2),J=D[0],L=D[1],M=Object(o.useRef)(null);function R(e){m(e),w(!0)}function U(e){I(e)}function H(e){return e.toString().replace(/ /g,"+").replace(/\n/g,"\u2013").replace(/\?/g,"\xbf").replace(/\//g,"").replace(/%/g,"percent-").replace(/#/g,"hashtag-")}return i.a.createElement(y,{background:B},d?i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(k,{color:B,onClick:function(){return R(!1)}},"x"),i.a.createElement(C,null,i.a.createElement(g.a,{onSelect:function(t){return function(t){var n=r,o=n+=t.native;l(o),e.history.push(H(o))}(t)},set:"apple",title:"Pick your emoji\u2026",emoji:"star-struck"}))):null,b?i.a.createElement(_,null,i.a.createElement("p",null,"http://andjust.fyi/"+H(r)),document.queryCommandSupported("copy")&&i.a.createElement("div",null,i.a.createElement(E,{onClick:function(e){M.current.select(),document.execCommand("copy"),e.target.focus(),L(!0),setTimeout(function(){L(!1)},2e3)},color:B,disabled:J},J?"Copied to clipboard!":"Copy URL"))):null,i.a.createElement(x,{emojified:d,ref:M,type:"text",id:"inputArea",value:r,onChange:function(t){l(t.target.value),e.history.push(H(t.target.value))},onClick:function(){"Write your message"===r&&l("")}}),q?i.a.createElement(O,null,i.a.createElement(k,{inverted:!0,color:B,onClick:function(){return U(!1)}},"\u2717"),i.a.createElement("div",{className:"Demo__some-network"},i.a.createElement(h.a,{url:"http://andjust.fyi/"+H(r),className:"Demo__some-network__share-button"},i.a.createElement(v.a,{size:52,round:!0})))):null,i.a.createElement(j,{reduced:d},d?null:i.a.createElement(E,{color:B,onClick:function(){return R(!0)}},"add emoji"),q?null:i.a.createElement(E,{color:B,onClick:function(){return U(!0)}},"share")))}function N(){var e=Object(l.a)(["\n  opacity: ",";\n  transition: opacity .3s ease-in;\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n"]);return N=function(){return e},e}d.a.initialize("UA-65251724-3"),d.a.pageview(window.location.pathname+window.location.search);var q=m.b.div(N(),function(e){return e.visible?"1":"0"});var I=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)(function(){setTimeout(function(){a(!0)},500)}),i.a.createElement("div",{className:"App"},i.a.createElement(b,{invisible:n}),i.a.createElement(q,{visible:n},i.a.createElement(u.a,null,i.a.createElement(s.a,{render:function(e){var t=e.location;return i.a.createElement(s.c,{location:t},i.a.createElement(s.a,{name:"home",path:"/:message?",component:z}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,n){e.exports=n(152)},88:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.a08c6c85.chunk.js.map