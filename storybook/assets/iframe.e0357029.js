var ke=Object.defineProperty,Ce=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var $e=(n,e,s)=>e in n?ke(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,se=(n,e)=>{for(var s in e||(e={}))Be.call(e,s)&&$e(n,s,e[s]);if(me)for(var s of me(e))He.call(e,s)&&$e(n,s,e[s]);return n},ce=(n,e)=>Ce(n,Me(e));import{S as A,i as D,s as S,c as G,e as y,a as P,b as _,l as B,u as J,g as F,d as K,t as $,f as c,h as d,j as Pe,p as Q,M as U,T as L,k as O,m as _e,n as v,o as R,q as b,r as w,v as k,w as We,x as C,y as M,z as ne,A as E,B as je,C as Ie,D as ze,E as Te,F as Ne,G as qe,H as de,I as Ge,J as Oe,K as Ae,L as ge,N as Je,O as Fe,P as Ke,Q as le,R as he,U as Ve,V as Ze,W as Qe,X as Ue,Y as Xe,Z as Ye,_ as xe,$ as et,a0 as tt,a1 as st,a2 as lt,a3 as nt,a4 as rt,a5 as ot,a6 as at,a7 as ft}from"./vendor.0953f8df.js";const it=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}};it();const ut={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:ut});function mt(n){let e,s,l,r;const t=n[3].default,a=G(t,n,n[2],null);return{c(){e=y("button"),a&&a.c(),e.disabled=n[0],P(e,"class","svelte-1grfu1j")},m(o,u){_(o,e,u),a&&a.m(e,null),s=!0,l||(r=B(e,"click",n[1]),l=!0)},p(o,[u]){a&&a.p&&(!s||u&4)&&J(a,t,o,o[2],s?K(t,o[2],u,null):F(o[2]),null),(!s||u&1)&&(e.disabled=o[0])},i(o){s||($(a,o),s=!0)},o(o){c(a,o),s=!1},d(o){o&&d(e),a&&a.d(o),l=!1,r()}}}function $t(n,e,s){let{$$slots:l={},$$scope:r}=e,{disabled:t=!1}=e;const a=Pe();function o(){a("click")}return n.$$set=u=>{"disabled"in u&&s(0,t=u.disabled),"$$scope"in u&&s(2,r=u.$$scope)},[t,o,r,l]}class De extends A{constructor(e){super();D(this,e,$t,mt,S,{disabled:0})}}function ct(n){let e;return{c(){e=ne("Button")},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function _t(n){let e,s;const l=[n[0]];let r={$$slots:{default:[ct]},$$scope:{ctx:n}};for(let t=0;t<l.length;t+=1)r=k(r,l[t]);return e=new De({props:r}),e.$on("click",function(){We(n[0].onClick)&&n[0].onClick.apply(this,arguments)}),{c(){v(e.$$.fragment)},m(t,a){b(e,t,a),s=!0},p(t,a){n=t;const o=a&1?C(l,[M(n[0])]):{};a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function dt(n){let e,s,l,r,t,a,o,u;return e=new U({props:{title:"Components/Button",component:De}}),l=new L({props:{$$slots:{default:[_t,({args:f})=>({0:f}),({args:f})=>f?1:0]},$$scope:{ctx:n}}}),t=new O({props:{name:"Regular",args:{disabled:!1,onClick:_e("clicked")}}}),o=new O({props:{name:"Disabled",args:{disabled:!0,onClick:_e("clicked")}}}),{c(){v(e.$$.fragment),s=R(),v(l.$$.fragment),r=R(),v(t.$$.fragment),a=R(),v(o.$$.fragment)},m(f,p){b(e,f,p),_(f,s,p),b(l,f,p),_(f,r,p),b(t,f,p),_(f,a,p),b(o,f,p),u=!0},p(f,[p]){const h={};p&3&&(h.$$scope={dirty:p,ctx:f}),l.$set(h)},i(f){u||($(e.$$.fragment,f),$(l.$$.fragment,f),$(t.$$.fragment,f),$(o.$$.fragment,f),u=!0)},o(f){c(e.$$.fragment,f),c(l.$$.fragment,f),c(t.$$.fragment,f),c(o.$$.fragment,f),u=!1},d(f){w(e,f),f&&d(s),w(l,f),f&&d(r),w(t,f),f&&d(a),w(o,f)}}}class gt extends A{constructor(e){super();D(this,e,null,dt,S,{})}}const re=Q(gt,{stories:{"tpl:default":{name:"default",template:!0,source:"<Button {...args} on:click={args.onClick}>Button</Button>",hasArgs:!0},Regular:{name:"Regular",template:!1,hasArgs:!1},Disabled:{name:"Disabled",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","action","Button"]});var ht=re.meta;const vt=["Regular","Disabled"],bt=re.stories.Regular,wt=re.stories.Disabled;var Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ht,__namedExportsOrder:vt,Regular:bt,Disabled:wt});function yt(n){let e,s;const l=n[1].default,r=G(l,n,n[0],null);return{c(){e=y("h2"),r&&r.c(),P(e,"class","svelte-1paot4z")},m(t,a){_(t,e,a),r&&r.m(e,null),s=!0},p(t,[a]){r&&r.p&&(!s||a&1)&&J(r,l,t,t[0],s?K(l,t[0],a,null):F(t[0]),null)},i(t){s||($(r,t),s=!0)},o(t){c(r,t),s=!1},d(t){t&&d(e),r&&r.d(t)}}}function Pt(n,e,s){let{$$slots:l={},$$scope:r}=e;return n.$$set=t=>{"$$scope"in t&&s(0,r=t.$$scope)},[r,l]}class Se extends A{constructor(e){super();D(this,e,Pt,yt,S,{})}}function Tt(n){let e;return{c(){e=ne("Hello World")},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function Ot(n){let e,s;const l=[n[0]];let r={$$slots:{default:[Tt]},$$scope:{ctx:n}};for(let t=0;t<l.length;t+=1)r=k(r,l[t]);return e=new Se({props:r}),{c(){v(e.$$.fragment)},m(t,a){b(e,t,a),s=!0},p(t,a){const o=a&1?C(l,[M(t[0])]):{};a&2&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function At(n){let e,s,l,r,t,a;return e=new U({props:{title:"Components/Headline",component:Se}}),l=new L({props:{$$slots:{default:[Ot,({args:o})=>({0:o}),({args:o})=>o?1:0]},$$scope:{ctx:n}}}),t=new O({props:{name:"Regular"}}),{c(){v(e.$$.fragment),s=R(),v(l.$$.fragment),r=R(),v(t.$$.fragment)},m(o,u){b(e,o,u),_(o,s,u),b(l,o,u),_(o,r,u),b(t,o,u),a=!0},p(o,[u]){const f={};u&3&&(f.$$scope={dirty:u,ctx:o}),l.$set(f)},i(o){a||($(e.$$.fragment,o),$(l.$$.fragment,o),$(t.$$.fragment,o),a=!0)},o(o){c(e.$$.fragment,o),c(l.$$.fragment,o),c(t.$$.fragment,o),a=!1},d(o){w(e,o),o&&d(s),w(l,o),o&&d(r),w(t,o)}}}class Dt extends A{constructor(e){super();D(this,e,null,At,S,{})}}const Le=Q(Dt,{stories:{"tpl:default":{name:"default",template:!0,source:"<Headline {...args}>Hello World</Headline>",hasArgs:!0},Regular:{name:"Regular",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Headline"]});var St=Le.meta;const Lt=["Regular"],Et=Le.stories.Regular;var kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:St,__namedExportsOrder:Lt,Regular:Et});function Ct(n){let e,s,l,r,t,a,o;const u=n[2].default,f=G(u,n,n[1],null);return{c(){e=y("details"),s=y("summary"),s.textContent="\u2228",l=R(),r=y("div"),f&&f.c(),P(s,"class","svelte-16yuq9h"),P(e,"class","svelte-16yuq9h")},m(p,h){_(p,e,h),E(e,s),E(e,l),E(e,r),f&&f.m(r,null),e.open=n[0],t=!0,a||(o=B(e,"toggle",n[3]),a=!0)},p(p,[h]){f&&f.p&&(!t||h&2)&&J(f,u,p,p[1],t?K(u,p[1],h,null):F(p[1]),null),h&1&&(e.open=p[0])},i(p){t||($(f,p),t=!0)},o(p){c(f,p),t=!1},d(p){p&&d(e),f&&f.d(p),a=!1,o()}}}function Mt(n,e,s){let{$$slots:l={},$$scope:r}=e,{open:t=!1}=e;function a(){t=this.open,s(0,t)}return n.$$set=o=>{"open"in o&&s(0,t=o.open),"$$scope"in o&&s(1,r=o.$$scope)},[t,r,l,a]}class Ee extends A{constructor(e){super();D(this,e,Mt,Ct,S,{open:0})}}const Bt=function(){const n="poems",e=Te([]),s=r=>(window.localStorage.setItem(n,JSON.stringify(r)),e.set(r)),l=e.subscribe;try{if(je){const r=JSON.parse(window.localStorage.getItem(n)||"[]");console.log({initialValue:r}),s(r)}}catch{}return{set:s,subscribe:l,update(r){const t=r(Ie(e));return console.log("updated called"),s(t)}}}(),Z=Te({title:"",text:""});ze(Z,({text:n})=>{const e=[];let s=0;return n.trim().split(/\n/).forEach(l=>{const r=Ne(l);e.push({syllables:r,okay:s===0||s===r}),s=r}),e});function ve(n,e,s){const l=n.slice();return l[4]=e[s],l}function be(n){let e;return{c(){e=y("li"),e.textContent="No saved poems found!"},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function we(n){let e,s,l=n[4].title+"",r,t,a;function o(){return n[2](n[4])}return{c(){e=y("li"),s=y("button"),r=ne(l),P(s,"type","button")},m(u,f){_(u,e,f),E(e,s),E(s,r),t||(a=B(s,"click",o),t=!0)},p(u,f){n=u,f&1&&l!==(l=n[4].title+"")&&qe(r,l)},d(u){u&&d(e),t=!1,a()}}}function Ht(n){let e,s=n[0],l=[];for(let t=0;t<s.length;t+=1)l[t]=we(ve(n,s,t));let r=null;return s.length||(r=be()),{c(){e=y("ul");for(let t=0;t<l.length;t+=1)l[t].c();r&&r.c(),P(e,"class","svelte-15nwzy1")},m(t,a){_(t,e,a);for(let o=0;o<l.length;o+=1)l[o].m(e,null);r&&r.m(e,null)},p(t,[a]){if(a&3){s=t[0];let o;for(o=0;o<s.length;o+=1){const u=ve(t,s,o);l[o]?l[o].p(u,a):(l[o]=we(u),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length,s.length?r&&(r.d(1),r=null):r||(r=be(),r.c(),r.m(e,null))}},i:de,o:de,d(t){t&&d(e),Ge(l,t),r&&r.d()}}}function Wt(n,e,s){let l;Oe(n,Bt,o=>s(0,l=o));const r=Pe();function t(o){r("load",o)}return[l,t,o=>t(o)]}class jt extends A{constructor(e){super();D(this,e,Wt,Ht,S,{})}}function It(n){let e,s;return e=new jt({}),{c(){v(e.$$.fragment)},m(l,r){b(e,l,r),s=!0},i(l){s||($(e.$$.fragment,l),s=!0)},o(l){c(e.$$.fragment,l),s=!1},d(l){w(e,l)}}}function zt(n){let e,s,l;const r=[n[0]];let t={$$slots:{default:[It]},$$scope:{ctx:n}};for(let a=0;a<r.length;a+=1)t=k(t,r[a]);return s=new Ee({props:t}),{c(){e=y("div"),v(s.$$.fragment),Ae(e,"position","relative")},m(a,o){_(a,e,o),b(s,e,null),l=!0},p(a,o){const u=o&1?C(r,[M(a[0])]):{};o&2&&(u.$$scope={dirty:o,ctx:a}),s.$set(u)},i(a){l||($(s.$$.fragment,a),l=!0)},o(a){c(s.$$.fragment,a),l=!1},d(a){a&&d(e),w(s)}}}function Nt(n){let e,s,l,r,t,a,o,u;return e=new U({props:{title:"Components/PoemDropdown",component:Ee}}),l=new L({props:{$$slots:{default:[zt,({args:f})=>({0:f}),({args:f})=>f?1:0]},$$scope:{ctx:n}}}),t=new O({props:{name:"Regular"}}),o=new O({props:{name:"Opened",args:{open:!0}}}),{c(){v(e.$$.fragment),s=R(),v(l.$$.fragment),r=R(),v(t.$$.fragment),a=R(),v(o.$$.fragment)},m(f,p){b(e,f,p),_(f,s,p),b(l,f,p),_(f,r,p),b(t,f,p),_(f,a,p),b(o,f,p),u=!0},p(f,[p]){const h={};p&3&&(h.$$scope={dirty:p,ctx:f}),l.$set(h)},i(f){u||($(e.$$.fragment,f),$(l.$$.fragment,f),$(t.$$.fragment,f),$(o.$$.fragment,f),u=!0)},o(f){c(e.$$.fragment,f),c(l.$$.fragment,f),c(t.$$.fragment,f),c(o.$$.fragment,f),u=!1},d(f){w(e,f),f&&d(s),w(l,f),f&&d(r),w(t,f),f&&d(a),w(o,f)}}}class qt extends A{constructor(e){super();D(this,e,null,Nt,S,{})}}const oe=Q(qt,{stories:{"tpl:default":{name:"default",template:!0,source:`<div style="position: relative">
	<PoemDropdown {...args}>
		<PoemDropdownList />
	</PoemDropdown>
</div>`,hasArgs:!0},Regular:{name:"Regular",template:!1,hasArgs:!1},Opened:{name:"Opened",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","PoemDropdown","PoemDropdownList"]});var Gt=oe.meta;const Jt=["Regular","Opened"],Ft=oe.stories.Regular,Kt=oe.stories.Opened;var Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gt,__namedExportsOrder:Jt,Regular:Ft,Opened:Kt});const Zt=n=>({}),Re=n=>({}),Qt=n=>({}),ye=n=>({});function Ut(n){let e,s,l,r,t,a,o;const u=n[3].left,f=G(u,n,n[2],ye),p=n[3].right,h=G(p,n,n[2],Re);return{c(){e=y("div"),f&&f.c(),s=R(),l=y("input"),r=R(),h&&h.c(),P(l,"type","text"),P(l,"name","title"),P(l,"class","svelte-iop7bq"),P(e,"class","svelte-iop7bq")},m(m,T){_(m,e,T),f&&f.m(e,null),E(e,s),E(e,l),ge(l,n[0]),E(e,r),h&&h.m(e,null),t=!0,a||(o=[B(l,"input",n[7]),B(l,"blur",n[4]),B(l,"change",n[5]),B(l,"focus",n[6])],a=!0)},p(m,[T]){f&&f.p&&(!t||T&4)&&J(f,u,m,m[2],t?K(u,m[2],T,Qt):F(m[2]),ye),T&1&&l.value!==m[0]&&ge(l,m[0]),h&&h.p&&(!t||T&4)&&J(h,p,m,m[2],t?K(p,m[2],T,Zt):F(m[2]),Re)},i(m){t||($(f,m),$(h,m),t=!0)},o(m){c(f,m),c(h,m),t=!1},d(m){m&&d(e),f&&f.d(m),h&&h.d(m),a=!1,Je(o)}}}function Xt(n,e,s){let l;Oe(n,Z,m=>s(1,l=m));let{$$slots:r={},$$scope:t}=e,a=l.title;const o=Z.subscribe(m=>s(0,a=m.title));Fe(()=>{o()});function u(m){le.call(this,n,m)}function f(m){le.call(this,n,m)}function p(m){le.call(this,n,m)}function h(){a=this.value,s(0,a)}return n.$$set=m=>{"$$scope"in m&&s(2,t=m.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&Ke(Z,l=ce(se({},l),{title:a}),l)},[a,l,t,r,u,f,p,h]}class q extends A{constructor(e){super();D(this,e,Xt,Ut,S,{})}}function Yt(n){let e,s;const l=[n[0]];let r={};for(let t=0;t<l.length;t+=1)r=k(r,l[t]);return e=new q({props:r}),{c(){v(e.$$.fragment)},m(t,a){b(e,t,a),s=!0},p(t,a){const o=a&1?C(l,[M(t[0])]):{};e.$set(o)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function xt(n){let e;return{c(){e=y("div"),e.textContent="left",P(e,"slot","left")},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function es(n){let e,s;const l=[n[0]];let r={$$slots:{left:[xt]},$$scope:{ctx:n}};for(let t=0;t<l.length;t+=1)r=k(r,l[t]);return e=new q({props:r}),{c(){v(e.$$.fragment)},m(t,a){b(e,t,a),s=!0},p(t,a){const o=a&1?C(l,[M(t[0])]):{};a&2&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function ts(n){let e;return{c(){e=y("div"),e.textContent="right",P(e,"slot","right")},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function ss(n){let e,s;const l=[n[0]];let r={$$slots:{right:[ts]},$$scope:{ctx:n}};for(let t=0;t<l.length;t+=1)r=k(r,l[t]);return e=new q({props:r}),{c(){v(e.$$.fragment)},m(t,a){b(e,t,a),s=!0},p(t,a){const o=a&1?C(l,[M(t[0])]):{};a&2&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function ls(n){let e;return{c(){e=y("div"),e.textContent="left",P(e,"slot","left")},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function ns(n){let e;return{c(){e=y("div"),e.textContent="right",P(e,"slot","right")},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function rs(n){let e,s;const l=[n[0]];let r={$$slots:{right:[ns],left:[ls]},$$scope:{ctx:n}};for(let t=0;t<l.length;t+=1)r=k(r,l[t]);return e=new q({props:r}),{c(){v(e.$$.fragment)},m(t,a){b(e,t,a),s=!0},p(t,a){const o=a&1?C(l,[M(t[0])]):{};a&2&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function os(n){let e;return{c(){e=y("div"),e.textContent="left",P(e,"slot","left")},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function as(n){let e;return{c(){e=y("div"),e.textContent="right",P(e,"slot","right")},m(s,l){_(s,e,l)},d(s){s&&d(e)}}}function fs(n){let e,s,l;const r=[n[0]];let t={$$slots:{right:[as],left:[os]},$$scope:{ctx:n}};for(let a=0;a<r.length;a+=1)t=k(t,r[a]);return s=new q({props:t}),{c(){e=y("div"),v(s.$$.fragment),Ae(e,"--poem-title-gap","2em")},m(a,o){_(a,e,o),b(s,e,null),l=!0},p(a,o){const u=o&1?C(r,[M(a[0])]):{};o&2&&(u.$$scope={dirty:o,ctx:a}),s.$set(u)},i(a){l||($(s.$$.fragment,a),l=!0)},o(a){c(s.$$.fragment,a),l=!1},d(a){a&&d(e),w(s)}}}function is(n){let e,s,l,r,t,a,o,u,f,p,h,m,T,X,W,Y,j,x,I,ee,z,te,N,V;return e=new U({props:{title:"Components/PoemTitle",component:q}}),l=new L({props:{$$slots:{default:[Yt,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:n}}}),t=new L({props:{id:"left",$$slots:{default:[es,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:n}}}),o=new L({props:{id:"right",$$slots:{default:[ss,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:n}}}),f=new L({props:{id:"left-and-right",$$slots:{default:[rs,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:n}}}),h=new L({props:{id:"with-gap",$$slots:{default:[fs,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:n}}}),T=new O({props:{name:"Regular",args:{value:""}}}),W=new O({props:{name:"Prefilled",args:{value:"This is a prefilled Title"}}}),j=new O({props:{name:"Left",template:"left",args:{value:""}}}),I=new O({props:{name:"Right",template:"right",args:{value:""}}}),z=new O({props:{name:"Left and Right",template:"left-and-right",args:{value:""}}}),N=new O({props:{name:"With gap",template:"with-gap",args:{value:""}}}),{c(){v(e.$$.fragment),s=R(),v(l.$$.fragment),r=R(),v(t.$$.fragment),a=R(),v(o.$$.fragment),u=R(),v(f.$$.fragment),p=R(),v(h.$$.fragment),m=R(),v(T.$$.fragment),X=R(),v(W.$$.fragment),Y=R(),v(j.$$.fragment),x=R(),v(I.$$.fragment),ee=R(),v(z.$$.fragment),te=R(),v(N.$$.fragment)},m(i,g){b(e,i,g),_(i,s,g),b(l,i,g),_(i,r,g),b(t,i,g),_(i,a,g),b(o,i,g),_(i,u,g),b(f,i,g),_(i,p,g),b(h,i,g),_(i,m,g),b(T,i,g),_(i,X,g),b(W,i,g),_(i,Y,g),b(j,i,g),_(i,x,g),b(I,i,g),_(i,ee,g),b(z,i,g),_(i,te,g),b(N,i,g),V=!0},p(i,[g]){const ae={};g&3&&(ae.$$scope={dirty:g,ctx:i}),l.$set(ae);const fe={};g&3&&(fe.$$scope={dirty:g,ctx:i}),t.$set(fe);const ie={};g&3&&(ie.$$scope={dirty:g,ctx:i}),o.$set(ie);const ue={};g&3&&(ue.$$scope={dirty:g,ctx:i}),f.$set(ue);const pe={};g&3&&(pe.$$scope={dirty:g,ctx:i}),h.$set(pe)},i(i){V||($(e.$$.fragment,i),$(l.$$.fragment,i),$(t.$$.fragment,i),$(o.$$.fragment,i),$(f.$$.fragment,i),$(h.$$.fragment,i),$(T.$$.fragment,i),$(W.$$.fragment,i),$(j.$$.fragment,i),$(I.$$.fragment,i),$(z.$$.fragment,i),$(N.$$.fragment,i),V=!0)},o(i){c(e.$$.fragment,i),c(l.$$.fragment,i),c(t.$$.fragment,i),c(o.$$.fragment,i),c(f.$$.fragment,i),c(h.$$.fragment,i),c(T.$$.fragment,i),c(W.$$.fragment,i),c(j.$$.fragment,i),c(I.$$.fragment,i),c(z.$$.fragment,i),c(N.$$.fragment,i),V=!1},d(i){w(e,i),i&&d(s),w(l,i),i&&d(r),w(t,i),i&&d(a),w(o,i),i&&d(u),w(f,i),i&&d(p),w(h,i),i&&d(m),w(T,i),i&&d(X),w(W,i),i&&d(Y),w(j,i),i&&d(x),w(I,i),i&&d(ee),w(z,i),i&&d(te),w(N,i)}}}class us extends A{constructor(e){super();D(this,e,null,is,S,{})}}const H=Q(us,{stories:{"tpl:default":{name:"default",template:!0,source:"<PoemTitle {...args} />",hasArgs:!0},"tpl:left":{name:"default",template:!0,source:`<PoemTitle {...args}>
	<div slot="left">left</div>
</PoemTitle>`,hasArgs:!0},"tpl:right":{name:"default",template:!0,source:`<PoemTitle {...args}>
	<div slot="right">right</div>
</PoemTitle>`,hasArgs:!0},"tpl:left-and-right":{name:"default",template:!0,source:`<PoemTitle {...args}>
	<div slot="left">left</div>
	<div slot="right">right</div>
</PoemTitle>`,hasArgs:!0},"tpl:with-gap":{name:"default",template:!0,source:`<div style="--poem-title-gap: 2em;">
	<PoemTitle {...args}>
		<div slot="left">left</div>
		<div slot="right">right</div>
	</PoemTitle>
</div>`,hasArgs:!0},Regular:{name:"Regular",template:!1,hasArgs:!1},Prefilled:{name:"Prefilled",template:!1,hasArgs:!1},Left:{name:"Left",template:!1,hasArgs:!1},Right:{name:"Right",template:!1,hasArgs:!1},LeftAndRight:{name:"Left and Right",template:!1,hasArgs:!1},WithGap:{name:"With gap",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","PoemTitle"]});var ps=H.meta;const ms=["Regular","Prefilled","Left","Right","LeftAndRight","WithGap"],$s=H.stories.Regular,cs=H.stories.Prefilled,_s=H.stories.Left,ds=H.stories.Right,gs=H.stories.LeftAndRight,hs=H.stories.WithGap;var vs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ps,__namedExportsOrder:ms,Regular:$s,Prefilled:cs,Left:_s,Right:ds,LeftAndRight:gs,WithGap:hs});const bs=[xe,et,tt,st,lt,nt,rt,ot,at,ft,pt];bs.forEach(n=>{Object.keys(n).forEach(e=>{const s=n[e];switch(e){case"args":case"argTypes":return Xe.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(s));case"decorators":return s.forEach(l=>Ue(l,!1));case"loaders":return s.forEach(l=>Qe(l,!1));case"parameters":return he(se({},s),!1);case"argTypesEnhancers":return s.forEach(l=>Ze(l));case"argsEnhancers":return s.forEach(l=>Ve(l));case"globals":case"globalTypes":{const l={};return l[e]=s,he(l,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});Ye(()=>[Rt,kt,Vt,vs].filter(n=>n.default),{hot:!1});
//# sourceMappingURL=iframe.e0357029.js.map