import{U as T,V as H,a2 as Vt,W as Ft}from"./vendor.3d7ef2a9.js";import{c as We,t as B,l as M,d as $,r as N,e as De,v as ht,f as Ce,p as ue,g as It,h as Yt,i as et,j as gt,k as mt,m as Xt,n as yt,b as X,_ as zt,s as Ee,o as ce,q as pe}from"./index.0ae6c67d.js";import{r as qt}from"./index.c8552526.js";function I(t){return t?(t.nodeName||"").toLowerCase():null}function U(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function oe(t){var e=U(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=U(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function wt(t){if(typeof ShadowRoot=="undefined")return!1;var e=U(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Gt(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!L(i)||!I(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function Jt(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,c){return l[c]="",l},{});!L(n)||!I(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var Kt={name:"applyStyles",enabled:!0,phase:"write",fn:Gt,effect:Jt,requires:["computeStyles"]};function F(t){return t.split("-")[0]}var ee=Math.max,Re=Math.min,ne=Math.round;function ie(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if(L(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=ne(o.width)/s||1),i>0&&(n=ne(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function $e(t){var e=ie(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function bt(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&wt(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Y(t){return U(t).getComputedStyle(t)}function Qt(t){return["table","td","th"].indexOf(I(t))>=0}function K(t){return((oe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Se(t){return I(t)==="html"?t:t.assignedSlot||t.parentNode||(wt(t)?t.host:null)||K(t)}function tt(t){return!L(t)||Y(t).position==="fixed"?null:t.offsetParent}function Zt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&L(t)){var r=Y(t);if(r.position==="fixed")return null}for(var n=Se(t);L(n)&&["html","body"].indexOf(I(n))<0;){var i=Y(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function ge(t){for(var e=U(t),o=tt(t);o&&Qt(o)&&Y(o).position==="static";)o=tt(o);return o&&(I(o)==="html"||I(o)==="body"&&Y(o).position==="static")?e:o||Zt(t)||e}function Ne(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function fe(t,e,o){return ee(t,Re(e,o))}function _t(t,e,o){var r=fe(t,e,o);return r>o?o:r}function Ot(){return{top:0,right:0,bottom:0,left:0}}function xt(t){return Object.assign({},Ot(),t)}function Tt(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var er=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,xt(typeof e!="number"?e:Tt(e,We))};function tr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=F(o.placement),l=Ne(a),c=[M,N].indexOf(a)>=0,u=c?"height":"width";if(!(!i||!s)){var v=er(n.padding,o),g=$e(i),f=l==="y"?B:M,d=l==="y"?$:N,m=o.rects.reference[u]+o.rects.reference[l]-s[l]-o.rects.popper[u],h=s[l]-o.rects.reference[l],O=ge(i),C=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,y=m/2-h/2,p=v[f],w=C-g[u]-v[d],b=C/2-g[u]/2+y,x=fe(p,b,w),R=l;o.modifiersData[r]=(e={},e[R]=x,e.centerOffset=x-b,e)}}function rr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!bt(e.elements.popper,n)||(e.elements.arrow=n))}var or={name:"arrow",enabled:!0,phase:"main",fn:tr,effect:rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(t){return t.split("-")[1]}var nr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ir(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:ne(e*n)/n||0,y:ne(o*n)/n||0}}function rt(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,v=t.isFixed,g=u===!0?ir(s):typeof u=="function"?u(s):s,f=g.x,d=f===void 0?0:f,m=g.y,h=m===void 0?0:m,O=s.hasOwnProperty("x"),C=s.hasOwnProperty("y"),y=M,p=B,w=window;if(c){var b=ge(o),x="clientHeight",R="clientWidth";if(b===U(o)&&(b=K(o),Y(b).position!=="static"&&a==="absolute"&&(x="scrollHeight",R="scrollWidth")),b=b,n===B||(n===M||n===N)&&i===De){p=$;var S=v&&w.visualViewport?w.visualViewport.height:b[x];h-=S-r.height,h*=l?1:-1}if(n===M||(n===B||n===$)&&i===De){y=N;var E=v&&w.visualViewport?w.visualViewport.width:b[R];d-=E-r.width,d*=l?1:-1}}var P=Object.assign({position:a},c&&nr);if(l){var A;return Object.assign({},P,(A={},A[p]=C?"0":"",A[y]=O?"0":"",A.transform=(w.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",A))}return Object.assign({},P,(e={},e[p]=C?h+"px":"",e[y]=O?d+"px":"",e.transform="",e))}function ar(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,c={placement:F(e.placement),variation:ae(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,rt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,rt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var sr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ar,data:{}},Oe={passive:!0};function lr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=U(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",o.update,Oe)}),a&&l.addEventListener("resize",o.update,Oe),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",o.update,Oe)}),a&&l.removeEventListener("resize",o.update,Oe)}}var ur={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lr,data:{}},cr={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(t){return t.replace(/left|right|bottom|top/g,function(e){return cr[e]})}var pr={start:"end",end:"start"};function ot(t){return t.replace(/start|end/g,function(e){return pr[e]})}function Ue(t){var e=U(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Ve(t){return ie(K(t)).left+Ue(t).scrollLeft}function fr(t){var e=U(t),o=K(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Ve(t),y:a}}function dr(t){var e,o=K(t),r=Ue(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=ee(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=ee(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Ve(t),l=-r.scrollTop;return Y(n||o).direction==="rtl"&&(a+=ee(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Fe(t){var e=Y(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Ct(t){return["html","body","#document"].indexOf(I(t))>=0?t.ownerDocument.body:L(t)&&Fe(t)?t:Ct(Se(t))}function de(t,e){var o;e===void 0&&(e=[]);var r=Ct(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=U(r),s=n?[i].concat(i.visualViewport||[],Fe(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(de(Se(s)))}function He(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function vr(t){var e=ie(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function nt(t,e){return e===ht?He(fr(t)):oe(e)?vr(e):He(dr(K(t)))}function hr(t){var e=de(Se(t)),o=["absolute","fixed"].indexOf(Y(t).position)>=0,r=o&&L(t)?ge(t):t;return oe(r)?e.filter(function(n){return oe(n)&&bt(n,r)&&I(n)!=="body"&&(o?Y(n).position!=="static":!0)}):[]}function gr(t,e,o){var r=e==="clippingParents"?hr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var c=nt(t,l);return a.top=ee(c.top,a.top),a.right=Re(c.right,a.right),a.bottom=Re(c.bottom,a.bottom),a.left=ee(c.left,a.left),a},nt(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Rt(t){var e=t.reference,o=t.element,r=t.placement,n=r?F(r):null,i=r?ae(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case B:l={x:s,y:e.y-o.height};break;case $:l={x:s,y:e.y+e.height};break;case N:l={x:e.x+e.width,y:a};break;case M:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var c=n?Ne(n):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case Ce:l[c]=l[c]-(e[u]/2-o[u]/2);break;case De:l[c]=l[c]+(e[u]/2-o[u]/2);break}}return l}function ve(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?It:i,a=o.rootBoundary,l=a===void 0?ht:a,c=o.elementContext,u=c===void 0?ue:c,v=o.altBoundary,g=v===void 0?!1:v,f=o.padding,d=f===void 0?0:f,m=xt(typeof d!="number"?d:Tt(d,We)),h=u===ue?Yt:ue,O=t.rects.popper,C=t.elements[g?h:u],y=gr(oe(C)?C:C.contextElement||K(t.elements.popper),s,l),p=ie(t.elements.reference),w=Rt({reference:p,element:O,strategy:"absolute",placement:n}),b=He(Object.assign({},O,w)),x=u===ue?b:p,R={top:y.top-x.top+m.top,bottom:x.bottom-y.bottom+m.bottom,left:y.left-x.left+m.left,right:x.right-y.right+m.right},S=t.modifiersData.offset;if(u===ue&&S){var E=S[n];Object.keys(R).forEach(function(P){var A=[N,$].indexOf(P)>=0?1:-1,W=[B,$].indexOf(P)>=0?"y":"x";R[P]+=E[W]*A})}return R}function mr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,c=l===void 0?gt:l,u=ae(r),v=u?a?et:et.filter(function(d){return ae(d)===u}):We,g=v.filter(function(d){return c.indexOf(d)>=0});g.length===0&&(g=v);var f=g.reduce(function(d,m){return d[m]=ve(t,{placement:m,boundary:n,rootBoundary:i,padding:s})[F(m)],d},{});return Object.keys(f).sort(function(d,m){return f[d]-f[m]})}function yr(t){if(F(t)===mt)return[];var e=xe(t);return[ot(t),e,ot(e)]}function wr(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,c=o.padding,u=o.boundary,v=o.rootBoundary,g=o.altBoundary,f=o.flipVariations,d=f===void 0?!0:f,m=o.allowedAutoPlacements,h=e.options.placement,O=F(h),C=O===h,y=l||(C||!d?[xe(h)]:yr(h)),p=[h].concat(y).reduce(function(re,G){return re.concat(F(G)===mt?mr(e,{placement:G,boundary:u,rootBoundary:v,padding:c,flipVariations:d,allowedAutoPlacements:m}):G)},[]),w=e.rects.reference,b=e.rects.popper,x=new Map,R=!0,S=p[0],E=0;E<p.length;E++){var P=p[E],A=F(P),W=ae(P)===Ce,z=[B,$].indexOf(A)>=0,q=z?"width":"height",k=ve(e,{placement:P,boundary:u,rootBoundary:v,altBoundary:g,padding:c}),j=z?W?N:M:W?$:B;w[q]>b[q]&&(j=xe(j));var te=xe(j),Q=[];if(i&&Q.push(k[A]<=0),a&&Q.push(k[j]<=0,k[te]<=0),Q.every(function(re){return re})){S=P,R=!1;break}x.set(P,Q)}if(R)for(var me=d?3:1,Ae=function(G){var le=p.find(function(we){var Z=x.get(we);if(Z)return Z.slice(0,G).every(function(ke){return ke})});if(le)return S=le,"break"},se=me;se>0;se--){var ye=Ae(se);if(ye==="break")break}e.placement!==S&&(e.modifiersData[r]._skip=!0,e.placement=S,e.reset=!0)}}var br={name:"flip",enabled:!0,phase:"main",fn:wr,requiresIfExists:["offset"],data:{_skip:!1}};function it(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function at(t){return[B,N,$,M].some(function(e){return t[e]>=0})}function Or(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=ve(e,{elementContext:"reference"}),a=ve(e,{altBoundary:!0}),l=it(s,r),c=it(a,n,i),u=at(l),v=at(c);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":v})}var xr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Or};function Tr(t,e,o){var r=F(t),n=[M,B].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[M,N].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Cr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=gt.reduce(function(u,v){return u[v]=Tr(v,e.rects,i),u},{}),a=s[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=s}var Rr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Cr};function Pr(t){var e=t.state,o=t.name;e.modifiersData[o]=Rt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Er={name:"popperOffsets",enabled:!0,phase:"read",fn:Pr,data:{}};function Sr(t){return t==="x"?"y":"x"}function Ar(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,c=o.rootBoundary,u=o.altBoundary,v=o.padding,g=o.tether,f=g===void 0?!0:g,d=o.tetherOffset,m=d===void 0?0:d,h=ve(e,{boundary:l,rootBoundary:c,padding:v,altBoundary:u}),O=F(e.placement),C=ae(e.placement),y=!C,p=Ne(O),w=Sr(p),b=e.modifiersData.popperOffsets,x=e.rects.reference,R=e.rects.popper,S=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,E=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,A={x:0,y:0};if(!!b){if(i){var W,z=p==="y"?B:M,q=p==="y"?$:N,k=p==="y"?"height":"width",j=b[p],te=j+h[z],Q=j-h[q],me=f?-R[k]/2:0,Ae=C===Ce?x[k]:R[k],se=C===Ce?-R[k]:-x[k],ye=e.elements.arrow,re=f&&ye?$e(ye):{width:0,height:0},G=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ot(),le=G[z],we=G[q],Z=fe(0,x[k],re[k]),ke=y?x[k]/2-me-Z-le-E.mainAxis:Ae-Z-le-E.mainAxis,Ht=y?-x[k]/2+me+Z+we+E.mainAxis:se+Z+we+E.mainAxis,je=e.elements.arrow&&ge(e.elements.arrow),Lt=je?p==="y"?je.clientTop||0:je.clientLeft||0:0,Xe=(W=P==null?void 0:P[p])!=null?W:0,Wt=j+ke-Xe-Lt,$t=j+Ht-Xe,ze=fe(f?Re(te,Wt):te,j,f?ee(Q,$t):Q);b[p]=ze,A[p]=ze-j}if(a){var qe,Nt=p==="x"?B:M,Ut=p==="x"?$:N,_=b[w],be=w==="y"?"height":"width",Ge=_+h[Nt],Je=_-h[Ut],Be=[B,M].indexOf(O)!==-1,Ke=(qe=P==null?void 0:P[w])!=null?qe:0,Qe=Be?Ge:_-x[be]-R[be]-Ke+E.altAxis,Ze=Be?_+x[be]+R[be]-Ke-E.altAxis:Je,_e=f&&Be?_t(Qe,_,Ze):fe(f?Qe:Ge,_,f?Ze:Je);b[w]=_e,A[w]=_e-_}e.modifiersData[r]=A}}var kr={name:"preventOverflow",enabled:!0,phase:"main",fn:Ar,requiresIfExists:["offset"]};function jr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Br(t){return t===U(t)||!L(t)?Ue(t):jr(t)}function Mr(t){var e=t.getBoundingClientRect(),o=ne(e.width)/t.offsetWidth||1,r=ne(e.height)/t.offsetHeight||1;return o!==1||r!==1}function Dr(t,e,o){o===void 0&&(o=!1);var r=L(e),n=L(e)&&Mr(e),i=K(e),s=ie(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((I(e)!=="body"||Fe(i))&&(a=Br(e)),L(e)?(l=ie(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Ve(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Hr(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function Lr(t){var e=Hr(t);return Xt.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function Wr(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function $r(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function lt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Nr(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?st:n;return function(a,l,c){c===void 0&&(c=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},v=[],g=!1,f={state:u,setOptions:function(O){var C=typeof O=="function"?O(u.options):O;m(),u.options=Object.assign({},i,u.options,C),u.scrollParents={reference:oe(a)?de(a):a.contextElement?de(a.contextElement):[],popper:de(l)};var y=Lr($r([].concat(r,u.options.modifiers)));return u.orderedModifiers=y.filter(function(p){return p.enabled}),d(),f.update()},forceUpdate:function(){if(!g){var O=u.elements,C=O.reference,y=O.popper;if(!!lt(C,y)){u.rects={reference:Dr(C,ge(y),u.options.strategy==="fixed"),popper:$e(y)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var p=0;p<u.orderedModifiers.length;p++){if(u.reset===!0){u.reset=!1,p=-1;continue}var w=u.orderedModifiers[p],b=w.fn,x=w.options,R=x===void 0?{}:x,S=w.name;typeof b=="function"&&(u=b({state:u,options:R,name:S,instance:f})||u)}}}},update:Wr(function(){return new Promise(function(h){f.forceUpdate(),h(u)})}),destroy:function(){m(),g=!0}};if(!lt(a,l))return f;f.setOptions(c).then(function(h){!g&&c.onFirstUpdate&&c.onFirstUpdate(h)});function d(){u.orderedModifiers.forEach(function(h){var O=h.name,C=h.options,y=C===void 0?{}:C,p=h.effect;if(typeof p=="function"){var w=p({state:u,name:O,instance:f,options:y}),b=function(){};v.push(w||b)}})}function m(){v.forEach(function(h){return h()}),v=[]}return f}}var Ur=[ur,Er,sr,Kt,Rr,br,kr,or,xr],Vr=Nr({defaultModifiers:Ur}),Pt=T.exports.createContext(),Et=T.exports.createContext();function Fr(t){var e=t.children,o=T.exports.useState(null),r=o[0],n=o[1],i=T.exports.useRef(!1);T.exports.useEffect(function(){return function(){i.current=!0}},[]);var s=T.exports.useCallback(function(a){i.current||n(a)},[]);return T.exports.createElement(Pt.Provider,{value:r},T.exports.createElement(Et.Provider,{value:s},e))}var St=function(e){return Array.isArray(e)?e[0]:e},At=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Le=function(e,o){if(typeof e=="function")return At(e,o);e!=null&&(e.current=o)},ut=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},ct=typeof window!="undefined"&&window.document&&window.document.createElement?T.exports.useLayoutEffect:T.exports.useEffect,Ir=typeof Element!="undefined",Yr=typeof Map=="function",Xr=typeof Set=="function",zr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Te(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(!Te(t[r],e[r]))return!1;return!0}var i;if(Yr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Te(r.value[1],e.get(r.value[0])))return!1;return!0}if(Xr&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(zr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(Ir&&t instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!Te(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var qr=function(e,o){try{return Te(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},Gr=[],Jr=function(e,o,r){r===void 0&&(r={});var n=T.exports.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||Gr},s=T.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],c=T.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(f){var d=f.state,m=Object.keys(d.elements);l({styles:ut(m.map(function(h){return[h,d.styles[h]||{}]})),attributes:ut(m.map(function(h){return[h,d.attributes[h]]}))})},requires:["computeStyles"]}},[]),u=T.exports.useMemo(function(){var g={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return qr(n.current,g)?n.current||g:(n.current=g,g)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),v=T.exports.useRef();return ct(function(){v.current&&v.current.setOptions(u)},[u]),ct(function(){if(!(e==null||o==null)){var g=r.createPopper||Vr,f=g(e,o,u);return v.current=f,function(){f.destroy(),v.current=null}}},[e,o,r.createPopper]),{state:v.current?v.current.state:null,styles:a.styles,attributes:a.attributes,update:v.current?v.current.update:null,forceUpdate:v.current?v.current.forceUpdate:null}},Kr=function(){},Qr=function(){return Promise.resolve(null)},Zr=[];function _r(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?Zr:i,a=t.referenceElement,l=t.onFirstUpdate,c=t.innerRef,u=t.children,v=T.exports.useContext(Pt),g=T.exports.useState(null),f=g[0],d=g[1],m=T.exports.useState(null),h=m[0],O=m[1];T.exports.useEffect(function(){Le(c,f)},[c,f]);var C=T.exports.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:h!=null,options:{element:h}}])}},[o,n,l,s,h]),y=Jr(a||v,f,C),p=y.state,w=y.styles,b=y.forceUpdate,x=y.update,R=T.exports.useMemo(function(){return{ref:d,style:w.popper,placement:p?p.placement:o,hasPopperEscaped:p&&p.modifiersData.hide?p.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:p&&p.modifiersData.hide?p.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:w.arrow,ref:O},forceUpdate:b||Kr,update:x||Qr}},[d,O,o,p,w,x,b]);return St(u)(R)}function eo(t){var e=t.children,o=t.innerRef,r=T.exports.useContext(Et),n=T.exports.useCallback(function(i){Le(o,i),At(r,i)},[o,r]);return T.exports.useEffect(function(){return function(){return Le(o,null)}}),T.exports.useEffect(function(){},[r]),St(e)({ref:n})}var kt=H.createContext({}),V=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},to=function(){},pt=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},ro=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},jt=function(t){yt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,c=r.props,u=c.hideTooltip,v=c.clearScheduled;v(),u(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,c=r.props,u=c.hideTooltip,v=c.clearScheduled;v(),u(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,ro(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),X({},a,{style:X({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),X({},a,r.isTriggeredBy("hover")&&{onMouseEnter:V(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:V(r.props.hideTooltip,a.onMouseLeave)},{style:X({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return H.createElement(kt.Provider,{value:this.contextValue},a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(T.exports.Component);jt.contextType=kt;var oo={childList:!0,subtree:!0},Bt=function(t){yt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,c=a.pageY;r.clearScheduled();var u={tooltipShown:!0};r.props.followCursor&&(u=X({},u,{pageX:l,pageY:c})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(u)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,c=a.pageY,u=r.getState()?"hideTooltip":"showTooltip";r[u]({pageX:l,pageY:c})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,c=a.pageY,u=r.props.followCursor?"showTooltip":"toggleTooltip";r[u]({pageX:l,pageY:c})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,c=a.pageY,u=r.props.followCursor?"showTooltip":"toggleTooltip";r[u]({pageX:l,pageY:c})},r.getTriggerProps=function(a){return a===void 0&&(a={}),X({},a,r.isTriggeredBy("click")&&{onClick:V(r.clickToggle,a.onClick),onTouchEnd:V(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:V(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&X({onMouseEnter:V(r.showTooltip,a.onMouseEnter),onMouseLeave:V(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:V(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:V(r.showTooltip,a.onFocus),onBlur:V(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,c=i.trigger,u=i.getTriggerRef,v=i.modifiers,g=i.closeOnReferenceHidden,f=i.usePortal,d=i.portalContainer,m=i.followCursor,h=i.getTooltipRef,O=i.mutationObserverOptions,C=zt(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=H.createElement(_r,X({innerRef:h,placement:l,modifiers:[{name:"followCursor",enabled:m,phase:"main",fn:function(w){n.popperOffset=w.state.rects.popper}}].concat(v)},C),function(p){var w=p.ref,b=p.style,x=p.placement,R=p.arrowProps,S=p.isReferenceHidden,E=p.update;if(m&&n.popperOffset){var P=n.state,A=P.pageX,W=P.pageY,z=n.popperOffset,q=z.width,k=z.height,j=A+q>window.pageXOffset+document.body.offsetWidth?A-q:A,te=W+k>window.pageYOffset+document.body.offsetHeight?W-k:W;b.transform="translate3d("+j+"px, "+te+"px, 0"}return H.createElement(jt,X({arrowProps:R,closeOnReferenceHidden:g,isReferenceHidden:S,placement:x,update:E,style:b,tooltip:a,trigger:c,mutationObserverOptions:O},{clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:w}))});return H.createElement(Fr,null,H.createElement(eo,{innerRef:u},function(p){var w=p.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:w})}),this.getState()&&(f?qt.exports.createPortal(y,d):y))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(T.exports.Component);Bt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:to,placement:"right",portalContainer:pt()?document.body:null,trigger:"hover",usePortal:pt(),mutationObserverOptions:oo,modifiers:[]};var no=Bt;function Pe(){return Pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},Pe.apply(this,arguments)}function io(t,e){if(t==null)return{};var o=ao(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function ao(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}var D=Vt(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),J=8,so=Ee.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(D("top",r,J*-1,"auto"),"px"),top:"".concat(D("bottom",r,J*-1,"auto"),"px"),right:"".concat(D("left",r,J*-1,"auto"),"px"),left:"".concat(D("right",r,J*-1,"auto"),"px"),borderBottomWidth:"".concat(D("top",r,"0",J),"px"),borderTopWidth:"".concat(D("bottom",r,"0",J),"px"),borderRightWidth:"".concat(D("left",r,"0",J),"px"),borderLeftWidth:"".concat(D("right",r,"0",J),"px"),borderTopColor:D("top",r,e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),"transparent"),borderBottomColor:D("bottom",r,e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),"transparent"),borderLeftColor:D("left",r,e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),"transparent"),borderRightColor:D("right",r,e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),"transparent")}}),lo=Ee.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Ie=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,c=io(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return H.createElement(lo,Pe({hasChrome:r,placement:o,ref:s},c,{color:l}),r&&H.createElement(so,Pe({placement:o,ref:a},i,{color:l})),n)};Ie.displayName="Tooltip";Ie.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var ft,dt;function uo(t,e){return vo(t)||fo(t,e)||po(t,e)||co()}function co(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function po(t,e){if(!!t){if(typeof t=="string")return vt(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return vt(t,e)}}function vt(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function fo(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var o=[],r=!0,n=!1,i=void 0;try{for(var s=t[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(o.push(a.value),!(e&&o.length===e));r=!0);}catch(l){n=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(n)throw i}}return o}}function vo(t){if(Array.isArray(t))return t}function he(){return he=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},he.apply(this,arguments)}function Mt(t,e){if(t==null)return{};var o=ho(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function ho(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function Dt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Me=Ft.document,go=Ee.div(ft||(ft=Dt([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),mo=Ee.g(dt||(dt=Dt([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Ye=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,c=e.tooltipShown,u=e.onVisibilityChange,v=Mt(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),g=o?mo:go;return H.createElement(no,{placement:n,trigger:r,modifiers:i,tooltipShown:c,onVisibilityChange:u,tooltip:function(d){var m=d.getTooltipProps,h=d.getArrowProps,O=d.tooltipRef,C=d.arrowRef,y=d.placement;return H.createElement(Ie,he({hasChrome:s,placement:y,tooltipRef:O,arrowRef:C,arrowProps:h()},m()),typeof a=="function"?a({onHide:function(){return u(!1)}}):a)}},function(f){var d=f.getTriggerProps,m=f.triggerRef;return H.createElement(g,he({ref:m},d(),v),l)})};Ye.displayName="WithTooltipPure";Ye.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var yo=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=Mt(e,["startOpen","onVisibilityChange"]),i=T.exports.useState(o||!1),s=uo(i,2),a=s[0],l=s[1],c=T.exports.useCallback(function(u){r&&r(u)===!1||l(u)},[r]);return T.exports.useEffect(function(){var u=function(){return c(!1)};Me.addEventListener("keydown",u,!1);var v=Array.from(Me.getElementsByTagName("iframe")),g=[];return v.forEach(function(f){var d=function(){try{f.contentWindow.document&&(f.contentWindow.document.addEventListener("click",u),g.push(function(){try{f.contentWindow.document.removeEventListener("click",u)}catch{}}))}catch{}};d(),f.addEventListener("load",d),g.push(function(){f.removeEventListener("load",d)})}),function(){Me.removeEventListener("keydown",u),g.forEach(function(f){f()})}}),H.createElement(Ye,he({},n,{tooltipShown:a,onVisibilityChange:c}))};yo.displayName="WithToolTipState";export{yo as WithToolTipState,yo as WithTooltip,Ye as WithTooltipPure};
//# sourceMappingURL=WithTooltip.c403511f.js.map
