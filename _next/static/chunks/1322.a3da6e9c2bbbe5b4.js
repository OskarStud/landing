(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1322],{58405:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))},43671:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var r=n(67294),i=n(32782);let o={"aria-hidden":!0};function u(e){return"object"==typeof e}function l(e){return"string"==typeof e}n(71434);let a=(0,i.Ge)("icon"),s=r.forwardRef(({data:e,width:t,height:n,size:i,className:c,fill:f="currentColor",stroke:d="none",qa:p},h)=>{let v,g,m;if(i&&(v=i,g=i),t&&(v=t),n&&(g=n),u(e))({viewBox:m}=e);else if(l(e))m=function(e){let t=e.match(/viewBox=(["']?)([\d\s,-]+)\1/);return t?t[2]:void 0}(e);else if(("object"==typeof e||"function"==typeof e)&&"defaultProps"in e)({viewBox:m}=e.defaultProps);else if("function"==typeof e&&(!e.prototype||!e.prototype.render)){let t=e({});t&&({viewBox:m}=t.props)}if(m&&(!v||!g)){let e=m.split(/\s+|\s*,\s*/);v||(v=e[2]),g||(g=e[3])}let b=Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:v,height:g,className:a(null,c),fill:f,stroke:d,"data-qa":p},o);if(l(e)){let t=e.replace(/<svg[^>]*>/,e=>e.replace(/(width|height)=(["']?)\d+\2/g,"").replace(/(\s){2,}\b/g,"$1").replace(/(\s)+>/g,">"));return r.createElement("svg",Object.assign({},b,{ref:h,dangerouslySetInnerHTML:{__html:t}}))}if(u(e)){let t=s.prefix+(e.url||`#${e.id}`);return r.createElement("svg",Object.assign({},b,{viewBox:m,ref:h}),r.createElement("use",{href:t,xlinkHref:t}))}return e.defaultProps&&(e.defaultProps.width=e.defaultProps.height=void 0),r.createElement("svg",Object.assign({},b,{ref:h}),r.createElement(e,{width:void 0,height:void 0}))});s.displayName="Icon",s.prefix=""},1622:function(e,t,n){"use strict";n.d(t,{K:function(){return g}});var r=n(67294),i=n(59505),o=n(77322),u=n(62227),l=n(38813),a=n(32782),s=n(90553),c=n(13079),f=n(87948);let d=(0,a.Ge)("text-area"),p=e=>{let{height:t,lineHeight:n}=e;return(t-(Number.isNaN(e.paddingTop)?0:e.paddingTop)-(Number.isNaN(e.paddingBottom)?0:e.paddingBottom))/n};function h(e){var t;let{name:n,id:i,tabIndex:u,autoComplete:l,placeholder:a,value:s,defaultValue:c,controlRef:f,controlProps:h,size:v,rows:g,minRows:m=1,maxRows:b,autoFocus:y,disabled:w,readOnly:E,onChange:O,onFocus:x,onBlur:j,onKeyDown:N,onKeyUp:P,onKeyPress:C}=e,_=r.useRef(null),I=(0,o.c)(f,_),k=g||m,S=s||(null===(t=null==_?void 0:_.current)||void 0===t?void 0:t.value),$=r.useCallback(()=>{let e=null==_?void 0:_.current;if(e&&!g){let t=getComputedStyle(e),n=parseInt(t.getPropertyValue("line-height"),10),r=parseInt(t.getPropertyValue("padding-top"),10),i=parseInt(t.getPropertyValue("padding-bottom"),10),o=((null==S?void 0:S.match(/\n/g))||[]).length+1,u=p({height:e.scrollHeight,paddingTop:r,paddingBottom:i,lineHeight:n});e.style.height="auto",b&&b<Math.max(u,o)?e.style.height=`${b*n+2*r}px`:(o>1||u>1)&&(e.style.height=`${e.scrollHeight}px`)}},[g,b,S]);return r.useEffect(()=>{$()},[$,v,s]),r.createElement("textarea",Object.assign({},h,{ref:I,style:Object.assign(Object.assign({},h.style),{height:g?"auto":void 0}),className:d("control",h.className),name:n,id:i,tabIndex:u,placeholder:a,value:s,defaultValue:c,rows:k,autoFocus:y,autoComplete:l,onChange:O,onFocus:x,onBlur:j,onKeyDown:N,onKeyUp:P,onKeyPress:C,disabled:null!=w?w:h.disabled,readOnly:null!=E?E:h.readOnly}))}n(30841);let v=(0,a.Ge)("text-area"),g=r.forwardRef(function(e,t){let{view:n="normal",size:a="m",pin:d="round-round",name:p,value:g,defaultValue:m,disabled:b,readOnly:y,hasClear:w=!1,error:E,errorMessage:O,validationState:x,autoComplete:j,id:N,tabIndex:P,style:C,className:_,qa:I,controlProps:k,note:S,onUpdate:$,onChange:R}=e,{errorMessage:T,validationState:M}=(0,f.II)({error:E,errorMessage:O,validationState:x}),[z,A]=(0,i.z)(g,null!=m?m:"",$),q=r.useRef(null),L=(0,l.q)({initialValue:z,onReset:A}),B=(0,o.c)(e.controlRef,q,L),[H,G]=r.useState(!1),V=(0,f.O_)(M),J=(0,u.u)(),K="invalid"===M&&!!T,D=!!(w&&!b&&!y&&z),U=(0,u.u)(),Z=(0,u.u)(),X=[null==k?void 0:k["aria-describedby"],S?Z:void 0,K?U:void 0].filter(Boolean).join(" "),F={id:N||J,tabIndex:P,name:p,onChange(e){A(e.target.value),R&&R(e)},autoComplete:(0,f.xp)(j),controlProps:Object.assign(Object.assign({},k),{"aria-describedby":X||void 0,"aria-invalid":"invalid"===M||void 0})};return r.useEffect(()=>{let e=q.current;if(e){let t=e.scrollHeight>e.clientHeight;H!==t&&G(t)}},[z,H]),r.createElement("span",{ref:t,style:C,className:v({view:n,size:a,disabled:b,state:V,pin:"clear"===n?void 0:d,"has-clear":D,"has-scrollbar":H},_),"data-qa":I},r.createElement("span",{className:v("content")},r.createElement(h,Object.assign({},e,F,{controlRef:B})),D&&r.createElement(s.C,{className:v("clear",{size:a}),size:(0,s.X)(a),onClick:e=>{let t=q.current;if(t){t.focus();let n=Object.create(e);n.target=t,n.currentTarget=t,t.value="",R&&R(n)}A("")}})),r.createElement(c.Z,{errorMessage:K?T:null,errorMessageId:U,note:S,noteId:Z}))})},90553:function(e,t,n){"use strict";n.d(t,{C:function(){return h},X:function(){return p}});var r=n(67294),i=n(58405),o=n(50254),u=n(43671),l=n(32782),a=n(89407),s=JSON.parse('{"label_clear-button":"Clear"}'),c=JSON.parse('{"label_clear-button":"Очистить"}'),f=(0,a.e)({en:s,ru:c},`${l.A7}clear-button`);n(23834);let d=(0,l.Ge)("clear-button"),p=e=>{switch(e){case"s":return"xs";case"m":return"s";case"l":return"m";case"xl":return"l";default:throw Error(`Unknown text input size "${e}"`)}},h=e=>{let{size:t,className:n,onClick:l}=e;return r.createElement(o.z,{size:t,className:d(null,n),onClick:l,extraProps:{onMouseDown:e=>{e.preventDefault()},"aria-label":f("label_clear-button")}},r.createElement(u.J,{data:i.Z,size:16}))}},13079:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),i=n(32782),o=n(87948);n(36490);let u=(0,i.Ge)("outer-additional-content"),l=({errorMessage:e,note:t,noteId:n,errorMessageId:i})=>e||t?r.createElement("div",{className:u()},e&&r.createElement("div",{className:u("error"),id:i,"data-qa":o.fz},e),t&&r.createElement("div",{className:u("note"),id:n},t)):null},87948:function(e,t,n){"use strict";n.d(t,{II:function(){return l},O_:function(){return u},eP:function(){return i},fz:function(){return r},xp:function(){return o}});let r="control-error-message-qa",i="control-error-icon-qa",o=e=>"boolean"==typeof e?e?"on":"off":e,u=e=>"invalid"===e?"error":void 0,l=e=>{let t,n;let{error:r,errorMessage:i,errorPlacement:o,validationState:u}=e;return"string"==typeof r&&(t=r),i&&(t=i),("invalid"===u||r)&&(n="invalid"),{errorMessage:t,errorPlacement:o,validationState:n}}},32782:function(e,t,n){"use strict";n.d(t,{A7:function(){return i},Ge:function(){return o},Ui:function(){return u}});var r=n(81504);let i="g-";(0,r.withNaming)({e:"__",m:"_"});let o=(0,r.withNaming)({n:i,e:"__",m:"_"});function u(e){return e.split(/\s(.*)/)[1]}},69110:function(e,t,n){"use strict";n.d(t,{Dc:function(){return a},xA:function(){return l},yb:function(){return s}});var r=n(43671),i=n(32782),o=n(96639);let u=1;function l(){return`${i.A7}uniq-${u++}`}let a=(0,o.s)("svg"),s=(0,o.s)(r.J)},3528:function(e,t,n){"use strict";var r,i;n.d(t,{Pe:function(){return a},Uo:function(){return r},iE:function(){return s},jQ:function(){return l}}),(i=r||(r={})).Ru="ru",i.En="en";let o=[],u={lang:r.En,fallbackLang:r.En},l=e=>{Object.assign(u,e),o.forEach(e=>{e(u)})},a=e=>(o.push(e),()=>{o=o.filter(t=>t!==e)}),s=()=>u},42087:function(e,t,n){"use strict";n.d(t,{P:function(){return u},g:function(){return o}});var r=n(97582),i=n(32782);class o{constructor(e){this.subscriptions=[],this.componentPrefix=e}subscribe(e){this.subscriptions.push(e)}unsubscribe(e){let t=this.subscriptions.indexOf(e);t>-1&&this.subscriptions.splice(t,1)}publish(e){var{componentId:t}=e,n=(0,r._T)(e,["componentId"]);this.subscriptions.forEach(e=>e(Object.assign(Object.assign({},n),{componentId:this.componentPrefix?`${this.componentPrefix}${t}`:t})))}withEventPublisher(e,t){return n=>{this.publish(Object.assign(Object.assign({},n),{componentId:e,qa:t}))}}}let u=new o(i.A7)},96639:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(67294);function i(e){return function(t){if(!r.isValidElement(t))return!1;let{type:n}=t;if(n===e)return!0;if("string"==typeof e||"string"==typeof n)return!1;let i=n.displayName;return!!(i&&i===e.displayName)}}},38813:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var r=n(67294);function i({initialValue:e,onReset:t}){let[n,i]=r.useState(null),o=r.useRef(e);return r.useEffect(()=>{if(!n)return;let e=()=>{t(o.current)};return n.addEventListener("reset",e),()=>{n.removeEventListener("reset",e)}},[n,t]),r.useCallback(e=>{var t;i(null!==(t=null==e?void 0:e.form)&&void 0!==t?t:null)},[])}},59505:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(67294);function i(e,t,n){let[i,o]=r.useState(null!=e?e:t),u=r.useRef(void 0!==e),l=void 0!==e;r.useEffect(()=>{let e=u.current;e!==l&&console.error(`[useControlledState] A component changed from ${e?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}.`),u.current=l},[l]);let a=l?e:i,s=r.useCallback((e,...t)=>{Object.is(a,e)||null==n||n(e,...t),l||(a=e,o(e))},[l,n,a]);return[a,s]}},52036:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{k:function(){return r}})},77322:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var r=n(67294),i=n(52036);function o(...e){return r.useMemo(()=>e.every(e=>null==e)?null:t=>{for(let n of e)(0,i.k)(n,t)},e)}},62227:function(e,t,n){"use strict";n.d(t,{u:function(){return u}});var r=n(67294),i=n(32782),o=n(69110);let u="function"==typeof r.useId?function(){return`${i.A7}${r.useId()}`}:function(){let e=r.useRef();return void 0===e.current&&(e.current=(0,o.xA)()),e.current}},16975:function(e,t,n){"use strict";n.r(t),n.d(t,{TextAreaComponent:function(){return o}});var r=n(85893),i=n(1622);n(67294);let o=e=>(0,r.jsx)("div",{style:{width:"100%",maxWidth:300},children:(0,r.jsx)(i.K,{...e})})},71434:function(){},30841:function(){},23834:function(){},36490:function(){},97582:function(e,t,n){"use strict";n.d(t,{Q_:function(){return o},YH:function(){return u},_T:function(){return i},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function o(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function u(e,t,n,r,i){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n}"function"==typeof SuppressedError&&SuppressedError}}]);