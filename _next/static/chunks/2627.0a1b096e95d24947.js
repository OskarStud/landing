"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2627],{42627:function(e,n,t){t.r(n),t.d(n,{SheetComponent:function(){return d}});var i=t(85893),l=t(50254),o=t(93298),r=t(67294);let s=(e=>{let n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<1e3;e++)n+=t.charAt(Math.floor(Math.random()*t.length));return n})(0),d=e=>{let{title:n,hideTopBar:t,allowHideOnContentScroll:d}=e,[c,a]=r.useState(!1),[h,x]=r.useState(!1);return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(l.z,{onClick:()=>a(!0),children:"Show Sheet"}),(0,i.jsx)(o.y,{visible:c,onClose:()=>a(!1),title:n,hideTopBar:t,allowHideOnContentScroll:d,children:(0,i.jsxs)("div",{style:{padding:"15px",display:"flex",flexDirection:"column",gap:"15px"},children:[h&&(0,i.jsx)("div",{style:{wordBreak:"break-word"},children:s}),h?(0,i.jsx)(l.z,{view:"normal",size:"s",width:"max",onClick:()=>x(!1),children:"Remove content"}):(0,i.jsx)(l.z,{view:"action",size:"s",width:"max",onClick:()=>x(!0),children:"Add content"}),(0,i.jsx)(l.z,{view:"outlined",size:"s",width:"max",onClick:()=>a(!1),children:"Close"})]})})]})}}}]);