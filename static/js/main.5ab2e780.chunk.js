(window["webpackJsonpdawn-of-day"]=window["webpackJsonpdawn-of-day"]||[]).push([[0],{14:function(e,t,a){},19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(14),a(9)),u=a(6),i=a(5);a(24);function m(){var e=Object(n.useState)("the final day"),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("24 hours remain"),u=Object(i.a)(l,2),m=u[0],s=u[1],d=Object(n.useState)(""),h=Object(i.a)(d,2),p=h[0],E=h[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),y=b[0],g=b[1],j=Object(n.useState)(""),w=Object(i.a)(j,2),O=w[0],v=w[1];return Object(n.useEffect)((function(){var e=encodeURI(a),t=encodeURI(m),n=encodeURI(p),r="?title=".concat(e,"&subtitle=").concat(t,"&target=").concat(n);v(r);var c="".concat("/majoras-mask-daw-day-generator","/play");g("".concat(c).concat(r))}),[a,m,p]),r.a.createElement("div",{id:"title-card-edit"},r.a.createElement("p",null,"The Final Day card title generator"),r.a.createElement("p",null,"Edit the ",r.a.createElement("strong",null,"day")," and ",r.a.createElement("strong",null,"hours")," remaining"),r.a.createElement("h2",null,"Sundown of"),r.a.createElement("input",{id:"day",type:"text",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{id:"hours",type:"text",value:m,onChange:function(e){return s(e.target.value)}}),r.a.createElement("hr",null),r.a.createElement("label",{htmlFor:"url"},"Set an url to redirect after animation ends"),r.a.createElement("input",{id:"url",type:"text",placeholder:"https://example.com",onChange:function(e){return E(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"share"},"Link to share with your friends"),r.a.createElement("a",{id:"share",href:y},y),r.a.createElement(o.b,{id:"play",to:{pathname:"/play",search:O}},"Play"))}a(30);function s(e){var t=e.location,a=e.history,c=new URLSearchParams(t.search),l=Object(n.useState)(!1),o=Object(i.a)(l,2),u=o[0],m=o[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),h=d[0],p=d[1];return setTimeout((function(){m(!0)}),2e3),Object(n.useEffect)((function(){u&&(document.getElementById("sound").play(),setTimeout((function(){p("appear")}),2e3),setTimeout((function(){var e=c.get("target");e&&(e.startsWith("https://")||e.startsWith("http://")||(e="https://".concat(e)),window.location=e)}),5e3))}),[a,u,c]),r.a.createElement("div",{id:"title-card"},u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Dawn of"),r.a.createElement("h1",null,c.get("title")),r.a.createElement("h3",{className:h},"-",c.get("subtitle"),"-")))}function d(){return r.a.createElement(o.a,{basename:"/majoras-mask-daw-day-generator"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:m}),r.a.createElement(u.a,{path:"/play",exact:!0,component:s})))}l.a.render(r.a.createElement((function(){return r.a.createElement(d,null)}),null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5ab2e780.chunk.js.map