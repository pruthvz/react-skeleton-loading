(this["webpackJsonpreact-skeleton-screens"]=this["webpackJsonpreact-skeleton-screens"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(7),i=c.n(r),j=(c(6),c(2)),a=c(3),l=c.n(a),o=c(4),h=(c(13),c(0)),b=function(e){var t=e.type,c="skeleton ".concat(t);return Object(h.jsx)("div",{className:c})},d=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"shimmer-wrapper",children:Object(h.jsx)("div",{className:"shimmer"})})})},x=function(e){var t=e.theme||"light";return Object(h.jsxs)("div",{className:"skeleton-wrapper ".concat(t),children:[Object(h.jsxs)("div",{className:"skeleton-article",children:[Object(h.jsx)(b,{type:"title"}),Object(h.jsx)(b,{type:"text"}),Object(h.jsx)(b,{type:"text"}),Object(h.jsx)(b,{type:"text"})]}),Object(h.jsx)(d,{})]})},O=function(e){var t=Object(s.useState)(null),c=Object(j.a)(t,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){setTimeout(Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)}))),4e3)})),Object(h.jsxs)("div",{className:"article",children:[Object(h.jsx)("h3",{children:"Articles"}),n&&n.map((function(e){return Object(h.jsxs)("div",{className:"article",children:[Object(h.jsx)("h4",{children:e.title}),Object(h.jsx)("p",{children:e.body})]},e.id)})),!n&&[1,2,3,4,5,6,7,8].map((function(t){return Object(h.jsx)(x,{theme:e.theme},t)}))]})},u=function(e){var t=e.theme||"light";return Object(h.jsxs)("div",{className:"skeleton-wrapper ".concat(t),children:[Object(h.jsxs)("div",{className:"skeleton-profile",children:[Object(h.jsx)("div",{children:Object(h.jsx)(b,{type:"avatar"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{type:"title"}),Object(h.jsx)(b,{type:"text"}),Object(h.jsx)(b,{type:"text"})]})]}),Object(h.jsx)(d,{})]})},p=function(e){var t=Object(s.useState)(null),c=Object(j.a)(t,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){setTimeout(Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/5");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)}))),4e3)})),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"user",children:Object(h.jsx)("h3",{children:"User Details"})}),n&&Object(h.jsxs)("div",{className:"profile",children:[Object(h.jsx)("h4",{style:{color:"#9a0fff",fontSize:"25px",fontWeight:"bold",marginBottom:"0px"},children:n.username}),Object(h.jsx)("p",{children:n.email}),Object(h.jsx)("a",{href:n.website,children:n.website})]}),!n&&Object(h.jsx)(u,{theme:e.theme})]})};var m=function(){var e=Object(s.useState)("light"),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{class:"section-header",children:[Object(h.jsx)("h2",{children:"react-skeleton"}),Object(h.jsx)("button",{class:"toggleBtn",onClick:function(){n("light"===c?"dark":"light")},children:"Toggle Theme"})]}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(O,{theme:c}),Object(h.jsx)(p,{theme:c})]}),Object(h.jsx)("div",{class:"footer",children:Object(h.jsxs)("p",{children:["Copyright Credits @"," ",Object(h.jsxs)("a",{style:{textDecoration:"none",color:"#eee"},target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=cg_tmJBisp8&list=PL4cUxeGkcC9i6bZhMuAzQpC6YgLmB4k4-&index=1",children:["The Net Ninja"," "]})]})})]})};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},6:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.cbbfcccd.chunk.js.map