(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{97387:function(e,t,n){"use strict";n.d(t,{z:function(){return f}});var o=n(67294),s=n(32782),c=n(69110),i=n(49318),a=n(96639);const r=(0,s.Ge)("button"),l=({side:e,className:t,children:n})=>o.createElement("span",{className:r("icon",{side:e},t)},o.createElement("span",{className:r("icon-inner")},n));l.displayName="Button.Icon";n(22908);const u=(0,s.Ge)("button"),d=o.forwardRef((function({view:e="normal",size:t="m",pin:n="round-round",selected:s,disabled:c=!1,loading:a=!1,width:r,title:l,tabIndex:d,type:f="button",component:m,href:b,target:h,rel:E,extraProps:g,onClick:k,onMouseEnter:y,onMouseLeave:x,onFocus:C,onBlur:v,children:N,id:w,style:I,className:M,qa:j},B){const O={title:l,tabIndex:d,onClick:k,onClickCapture:o.useCallback((t=>{i.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})}),[e]),onMouseEnter:y,onMouseLeave:x,onFocus:C,onBlur:v,id:w,style:I,className:u({view:e,size:t,pin:n,selected:s,disabled:c||a,loading:a,width:r},M),"data-qa":j};if("string"===typeof b||m){const e={href:b,target:h,rel:"_blank"!==h||E?E:"noopener noreferrer"};return o.createElement(m||"a",Object.assign(Object.assign(Object.assign(Object.assign({},g),O),m?{}:e),{ref:B,"aria-disabled":c||a}),p(N))}return o.createElement("button",Object.assign({},g,O,{ref:B,type:f,disabled:c||a,"aria-pressed":s}),p(N))}));d.displayName="Button";const f=Object.assign(d,{Icon:l}),m=(0,a.s)(l);function p(e){const t=o.Children.toArray(e);if(1===t.length){const e=t[0];return m(e)?e:(0,c.y)(e)?o.createElement(f.Icon,{key:"icon"},e):o.createElement("span",{key:"text",className:u("text")},e)}{let e,n,s;const i=[];for(const a of t){const t=(0,c.y)(a),s=m(a);if(t||s)if(e||0!==i.length){if(!n&&0!==i.length){const e="icon-right",s="right";n=t?o.createElement(f.Icon,{key:e,side:s},a):o.cloneElement(a,{side:s})}}else{const n="icon-left",s="left";e=t?o.createElement(f.Icon,{key:n,side:s},a):o.cloneElement(a,{side:s})}else i.push(a)}return i.length>0&&(s=o.createElement("span",{key:"text",className:u("text")},i)),[e,n,s]}}},66678:function(e,t,n){"use strict";n.d(t,{b:function(){return c}});var o=n(67294),s=n(50010);function c(e){return{onKeyDown:o.useCallback((t=>{e&&[s.V.ENTER,s.V.SPACEBAR,s.V.SPACEBAR_OLD].includes(t.key)&&e(t)}),[e])}}},18799:function(e,t,n){"use strict";n.r(t),n.d(t,{DropdownMenuComponent:function(){return c}});var o=n(85893),s=n(20842),c=function(e){var t=e.size,n=e.disabled;return(0,o.jsx)(s.h,{open:!0,size:t,disabled:n,items:[{action:function(){},text:"Rename"},{action:function(){},text:"Delete",theme:"danger"},{text:"More",items:[{action:function(){},text:"Mark as"},{action:function(){},text:"Copy"},{action:function(){},text:"Move to"}]}]})}},22908:function(){}}]);