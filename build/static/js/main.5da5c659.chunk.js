(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{24:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),r=i(16),a=i.n(r),s=(i(24),i(6)),u=i(2),o=i.p+"static/media/homepage-main.3c90ab1b.jpg",d=i(0);function l(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:o,class:"featured-image",alt:"man and woman in clothes"}),Object(d.jsx)("h1",{children:"Welcome to Zulu!"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}var j=i(7),p=i(5),m=i(11),b=n.a.createContext(null);var x=function(e){var t=e.children,i=Object(c.useReducer)((function(e,t){var i=t.payload;switch(t.type){case"ADD":var c=e.findIndex((function(e){return e.id===i.id}));if(-1!==c){var n=e[c],r=Object(p.a)(Object(p.a)({},n),{},{count:n.count+i.count}),a=Object(j.a)(e);return a[c]=r,a}var s=Object(p.a)(Object(p.a)({},t.payload),{},{count:i.count});return[].concat(Object(j.a)(e),[s]);case"DELETE":return e.filter((function(e){return e.id!==i.id}));case"CHANGE_COUNT":return e.map((function(t,c){return t.id===i.id?Object(p.a)(Object(p.a)({},e[c]),i):t}));case"CLEAR":return[];default:throw new Error}}),[]),n=Object(m.a)(i,2),r=n[0],a=n[1];return Object(d.jsx)(b.Provider,{value:{state:r,dispatch:a},children:t})};function O(e){var t=e.product,i=Object(c.useContext)(b),n=i.state,r=i.dispatch,a=n.findIndex((function(e){return e.id===t.id}));return Object(d.jsxs)("div",{className:"product-basket",children:[Object(d.jsx)("img",{src:t.imgSrc,alt:t.title}),Object(d.jsx)("span",{children:t.title}),Object(d.jsxs)("div",{className:"cart-right-side",children:[Object(d.jsxs)("span",{className:"cart-price",children:["$",t.price]}),Object(d.jsx)("input",{type:"number",min:1,max:10,value:n[a].count,onInput:function(e){var i;(i=Number(e.target.value))<=10&&i>=1&&r({type:"CHANGE_COUNT",payload:{id:t.id,count:i}})}}),Object(d.jsx)("button",{onClick:function(){r({type:"DELETE",payload:{id:t.id}})},children:"Remove"})]})]})}var h=[{id:245,imgSrc:i.p+"static/media/1.2d2ec428.jpg",title:"Women's dress",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:124},{id:12,imgSrc:i.p+"static/media/2.96e10253.jpg",title:"Child dress",description:"Donec sit amet est at dolor hendrerit ultricies ac non nulla. Curabitur facilisis feugiat mauris, a commodo ipsum bibendum scelerisque. Vestibulum non purus sodales, maximus enim vel, tristique mauris. Maecenas a diam nec turpis suscipit varius. Cras sodales elit mi, eu maximus ipsum efficitur eu. Duis aliquam tincidunt lectus eu luctus.",price:29.99},{id:5325,imgSrc:i.p+"static/media/3.e893f9ef.jpg",title:"Some dress",description:"Pellentesque faucibus turpis ac gravida finibus. Lorem ipsum dolor sit amet.",price:29.99}];i(26);function f(){var e=Object(c.useContext)(b),t=e.state,i=(e.dispatch,t.map((function(e){return e.id}))),n=Object(j.a)(h).filter((function(e){return i.includes(e.id)}));return Object(d.jsxs)(d.Fragment,{children:[0===i.length&&Object(d.jsx)("h2",{children:"Your cart is empty."}),n.map((function(e){return Object(d.jsx)(O,{product:e},e.id)}))]})}i(27);function v(){return Object(d.jsx)("footer",{children:"Built in 2021"})}i(28);var g=i.p+"static/media/zulu-logo.64cd841c.png",N=(i(29),i(19));function C(e){var t=e.linkTo,i=Object(c.useContext)(b),n=i.state;i.dispatch;return Object(d.jsx)(s.b,{to:t,activeClassName:"",children:Object(d.jsxs)("div",{className:"cart-icon-wrapper",children:[Object(d.jsx)("span",{className:"cart-count",children:n.reduce((function(e,t){return e+t.count}),0)}),Object(d.jsx)(N.a,{color:"#b1b1b1"})]})})}function q(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{className:"logo",src:g,alt:"logo"}),Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)(s.b,{exact:!0,to:"/",children:"Home"}),Object(d.jsx)(s.b,{to:"/shop",children:"Shop"}),Object(d.jsx)(C,{linkTo:"/cart"})]})]})}i(38);function y(e,t){var i=e.split(" ");if(i.length<=t)return e;var c=i.slice(0,t);return"".concat(c.join(" "),"...")}i(39);function E(e){var t=e.product,i=Object(c.useContext)(b),n=(i.state,i.dispatch),r=Object(c.useState)(1),a=Object(m.a)(r,2),s=a[0],u=a[1];return Object(d.jsxs)("div",{className:"add-to-card",children:[Object(d.jsx)("input",{type:"number",min:1,max:10,value:s,onInput:function(e){return u(Number(e.target.value))}}),Object(d.jsx)("button",{onClick:function(){n({type:"ADD",payload:{id:t.id,count:s}})},type:"button",children:"Add to cart"})]})}function D(e){var t=e.product;return Object(d.jsxs)("div",{className:"box product",children:[Object(d.jsx)("img",{src:t.imgSrc,alt:t.title}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t.title}),Object(d.jsxs)("span",{className:"price",children:["$",t.price]})]}),Object(d.jsx)("p",{children:y(t.description,20)}),Object(d.jsx)(E,{product:t})]})}function S(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Our products"}),Object(d.jsx)("div",{className:"products-wrapper",children:h.map((function(e){return Object(d.jsx)(D,{product:e},e.id)}))})]})}i(40);function w(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(q,{}),Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(u.a,{exact:!0,path:"/",component:l}),Object(d.jsx)(u.a,{path:"/shop",component:S}),Object(d.jsx)(u.a,{path:"/cart",component:f})]}),Object(d.jsx)(v,{})]})}var k=function(){return Object(d.jsx)(s.a,{basename:"/shopping-cart",children:Object(d.jsx)(u.a,{path:"/",component:w})})};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{children:Object(d.jsx)(k,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5da5c659.chunk.js.map