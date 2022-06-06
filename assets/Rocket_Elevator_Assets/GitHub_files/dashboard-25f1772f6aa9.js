"use strict";(()=>{var ne=Object.defineProperty;var e=(T,y)=>ne(T,"name",{value:y,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["dashboard"],{94351:(T,y,o)=>{var c=o(46263),d=o(64463),r=o(59753),u=o(51012),i=o(31579),l=o(63621),s=o(91385),t=o(55526);const{getItem:f,setItem:p}=(0,i.Z)("localStorage"),g="feeds-last-saved-tab",b=["feed-original","feed-next"],v=b[0];function m(n,a){a?n.classList.remove("overflow-auto"):n.classList.add("overflow-auto")}e(m,"toggleOverflow"),(0,d.N7)(".js-favorites-details-component",{constructor:HTMLDetailsElement,initialize(n){n.addEventListener("toggle",()=>{const a=document.querySelector(".dashboard-sidebar");m(a,n.open)})}}),(0,d.N7)(".js-shortcuts-details-component",{constructor:HTMLDetailsElement,initialize(n){n.addEventListener("toggle",()=>{const a=document.querySelector(".dashboard-sidebar");m(a,n.open)})}}),(0,r.on)("click",".js-follow-unfollow-submit",async function(n){const h=n.currentTarget.form;n.preventDefault();let _;try{_=await fetch(h.action,{method:h.method,body:new FormData(h),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{(0,l.v)()}_&&!_.ok&&(0,l.v)()}),(0,r.on)("details:toggled",".js-news-feed-event-group",function(n){if(!n.detail.open)return;const a=n.currentTarget;for(const h of a.querySelectorAll("[data-hydro-view]"))h instanceof HTMLElement&&(0,s.Fk)(h)}),(0,d.N7)(".js-feeds-tabs",{constructor:HTMLElement,initialize(n){if(n){let a=f(g)||v;b.indexOf(a)===-1&&(a=v);const h=n.querySelector(`button#${a}`);if(h){h.setAttribute("aria-selected","true");const L=h.getAttribute("aria-controls")||"",P=document.getElementById(L);P&&P.removeAttribute("hidden")}const _=document.querySelector(".js-feedback-link");_&&_.toggleAttribute("hidden",a!=="feed-next")}}}),(0,r.on)("click",".js-feeds-tabs button",function(n){const a=n.currentTarget;if(!a.id||!b.includes(a.id))return;const h=document.querySelector(".js-feedback-link");h&&h.toggleAttribute("hidden",a.id!=="feed-next"),p(g,a.id)});const E={},w=.8,A=1e3,D=new IntersectionObserver(function(n){for(const a of n){const h=a.target,_=h.getAttribute("data-hydro-view");if(!_)return;const L=JSON.parse(_).payload.feed_card.card_retrieved_id,P=a.intersectionRatio>w;!P&&E[L]&&(clearTimeout(E[L]),delete E[L]),P&&!E[L]&&(E[L]=setTimeout(()=>{(0,s.Fk)(h)},A))}},{rootMargin:"0px",threshold:[0,w]});(0,d.N7)(".js-feed-item-component",n=>D.observe(n));let C=[];function I(n){const a=n.getElementsByClassName("feed-item-heading-menu");return a.length===0?null:a[0]}e(I,"getHeadingMenuButton");const F=(0,c.D)(n=>{const a=n.target,h=I(a);!h||(h.hidden=!1,C.push(h))},100),S=(0,c.D)(()=>{M()},100);function M(){for(const n of C)n.hidden=!0;C=[]}e(M,"hideAllHeadingMenus"),(0,d.N7)(".js-feed-item-component",n=>{n.addEventListener("mouseenter",F),n.addEventListener("mouseleave",S)});const O=3,x=500;let k=null;function $(n,a,h){for(const _ of a)h?n|=1<<_:n&=~(1<<_);return n}e($,"toggleBitmaskGroup");function N(n,a=!1){const h=document.querySelector(".js-feed-filter-menu");if(!h)return;const _=h.querySelectorAll(".js-navigation-item");if(n){h.setAttribute("aria-busy","true");for(const L of _)L.setAttribute("disabled","disabled")}else{h.setAttribute("aria-busy","false");for(const L of _)L.removeAttribute("disabled")}if(a)for(const L of _)L.classList.add("selected")}e(N,"toggleFilterMenuLoadingState");async function U(n,a,h,_=0,L=null){const P={method:h,credentials:"same-origin",headers:{"Scoped-CSRF-Token":L||"","X-Requested-With":"XMLHttpRequest"}},j=await fetch(new Request(a,P));if(!j.ok){if(_<O)return await new Promise(R=>setTimeout(R,x*_)),U(n,a,h,_+1);throw N(!1),(0,t.x)(document.querySelector(".js-feed-filter-error-toast").innerHTML),new Error(`${j.status}:${j.statusText} - failed to fetch ${a} for ${n}`)}return{response:j,el:n}}e(U,"fetchFeedElement");async function z(n,a,h){N(!0);let _=n,L;try{L=await Promise.all([await U(".js-feed-container",`/for_you_feed/filter_feed?filter=${_}`,"PUT",0,h),await U(".js-feed-filter-items",`/for_you_feed/filter_component?filter=${_}`,"GET")])}catch(P){await(0,u.LN)({error:P}),_=a,N(!1,!0),L=await Promise.all([await U(".js-feed-container","/for_you_feed","GET",2)])}if(!!L)for(const P of L){const{response:j,el:R}=P,q=document.querySelector(R);if(j&&q){N(!1),k=_.toString();const te=await j.text();q.innerHTML=te}}}e(z,"requestFeedUpdate");function B(){var n;const a=document.querySelector(".js-for-you-feed");if(!a)return;const h=a.getAttribute("data-filter-bitmask"),_=a.getAttribute("data-reset-bitmask"),L=document.querySelector(".js-feed-filter-csrf");let P=k||((n=document.querySelector(".js-for-you-feed"))==null?void 0:n.getAttribute("data-filter-bitmask"));!h||(Number(P)||(P=_),P&&h!==P&&z(Number(P),Number(_),L.value))}e(B,"syncFeedWithFilter");function G({bitmask:n="",groups:a=[]}){const h=document.querySelector(".js-apply-feed-filters");if(!h)return;const _=h.getAttribute("data-hydro-click")||"{}",L=JSON.parse(_);n&&(L.payload.metadata.filter_bitmask=Number(n)),a.length&&(L.payload.metadata.filter_groups=a),h.setAttribute("data-hydro-click",JSON.stringify(L))}e(G,"updateHydroAttrs"),(0,r.on)("click",".js-feed-filter-menu .js-navigation-item",function(n){var a;if(n.preventDefault(),n.currentTarget){let h=Number(k||((a=document.querySelector(".js-for-you-feed"))==null?void 0:a.getAttribute("data-filter-bitmask")));const _=n.currentTarget.getAttribute("data-group-bitmasks"),L=n.currentTarget.classList.contains("selected");if(!_)return;h=$(h,JSON.parse(_),!L),n.currentTarget.classList.toggle("selected"),k=h.toString();const P=document.querySelectorAll(".js-feed-filter-menu .js-navigation-item.selected"),j=[];for(const R of P)R.textContent&&j.push(R.textContent.trim());G({bitmask:k,groups:j})}}),(0,r.on)("click",".js-apply-feed-filters",function(n){n.preventDefault(),B()}),(0,d.N7)(".js-for-you-feed",B);var H=o(43721),X=o(98016),Z=o(57654);const V=new WeakMap,Q=100;function W(n){const a=V.get(n)||0;if(a>Q)return;const h=n.querySelector(".js-more-repos-form");h&&(V.set(n,a+1),(0,Z.Bt)(h))}e(W,"loadMoreRepositories");function J(n,a,h){const _=new URL(n,window.location.origin),L=new URLSearchParams(_.search.slice(1));return a.length<1?L.delete(h):L.set(h,a),_.search=L.toString(),_.toString()}e(J,"replaceQueryInUrl");function Y(n){const a=n.querySelector(".js-your-repositories-search");return a?document.activeElement===a?!0:a.defaultValue.trim().length>0:!1}e(Y,"shouldLoadAllRepositories");function K(n){const a=n.querySelector(".js-your-repositories-search");a&&(0,r.f)(a,"filterable:change")}e(K,"filterRepositories");function ee(n){const a=n.getAttribute("data-url"),h=n.getAttribute("data-query-name");(0,X.lO)(null,"",J(a,n.value.trim(),h))}e(ee,"updateQueryInUrl"),(0,H.ZG)(".js-your-repositories-search",function(n){const a=n.closest(".js-repos-container");W(a)}),(0,d.N7)(".js-your-repositories-search",{constructor:HTMLInputElement,initialize(n){n.defaultValue.trim().length>0&&K(n.closest(".js-repos-container"))}}),(0,H.q6)(".js-your-repositories-search",function(n){const a=n.target;ee(a)}),(0,d.N7)(".js-more-repos-form",function(n){const a=n.closest(".js-repos-container");Y(a)&&W(a),n.addEventListener("page:loaded",function(){K(a)})});var oe=o(63247),re=o(82927)},97261:(T,y,o)=>{o.d(y,{S:()=>u});function c(i){const l=document.querySelectorAll(i);if(l.length>0)return l[l.length-1]}e(c,"queryLast");function d(){const i=c("meta[name=analytics-location]");return i?i.content:window.location.pathname}e(d,"pagePathname");function r(){const i=c("meta[name=analytics-location-query-strip]");let l="";i||(l=window.location.search);const s=c("meta[name=analytics-location-params]");s&&(l+=(l?"&":"?")+s.content);for(const t of document.querySelectorAll("meta[name=analytics-param-rename]")){const f=t.content.split(":",2);l=l.replace(new RegExp(`(^|[?&])${f[0]}($|=)`,"g"),`$1${f[1]}$2`)}return l}e(r,"pageQuery");function u(){return`${window.location.protocol}//${window.location.host}${d()+r()}`}e(u,"requestUri")},73301:(T,y,o)=>{o.d(y,{N:()=>r,x:()=>u});var c=o(75488);let d=null;(async function(){await c.x,i()})();function r(s){u(l(s))}e(r,"announceFromElement");function u(s){!d||(d.textContent="",d.textContent=s)}e(u,"announce");function i(){d=document.createElement("div"),d.setAttribute("aria-live","polite"),d.classList.add("sr-only"),document.body.append(d)}e(i,"createNoticeContainer");function l(s){return(s.getAttribute("aria-label")||s.innerText||"").trim()}e(l,"getTextContent")},63621:(T,y,o)=>{o.d(y,{H:()=>r,v:()=>d});var c=o(59753);function d(){const u=document.getElementById("ajax-error-message");u&&(u.hidden=!1)}e(d,"showGlobalError");function r(){const u=document.getElementById("ajax-error-message");u&&(u.hidden=!0)}e(r,"hideGlobalError"),(0,c.on)("deprecatedAjaxError","[data-remote]",function(u){const i=u.detail,{error:l,text:s}=i;u.currentTarget===u.target&&(l==="abort"||l==="canceled"||(/<html/.test(s)?(d(),u.stopImmediatePropagation()):setTimeout(function(){u.defaultPrevented||d()},0)))}),(0,c.on)("deprecatedAjaxSend","[data-remote]",function(){r()}),(0,c.on)("click",".js-ajax-error-dismiss",function(){r()})},63247:(T,y,o)=>{var c=o(73301),d=o(64463);const r=e(async(s,t,f,p)=>{const g=new FormData;return p===!0&&g.append("upvote","true"),await fetch(s,{body:f==="delete"?"":g,method:f,mode:"same-origin",headers:{"Scoped-CSRF-Token":t}})},"sendRequest");class u{constructor(t){this.voteCountElement=t}getLabel(){var t;return((t=this.voteCountElement)==null?void 0:t.getAttribute("data-upvote-label"))||""}getText(){var t;return((t=this.voteCountElement)==null?void 0:t.textContent)||""}}e(u,"VoteCountElement");class i{constructor(t){this.voteForm=t,this.voteButton=this.voteForm.querySelector(".js-upvote-button"),this.defaultVoteCountElement=new u(t.querySelector(".js-default-vote-count")),this.upvotedCountElement=new u(t.querySelector(".js-upvoted-vote-count")),this.url=this.voteForm.getAttribute("data-url")||""}isUpvoted(){return this.voteForm.getAttribute("data-upvoted")==="true"}getCsrfDeleteInputValue(){const t=this.voteForm.querySelector(".js-data-url-delete-csrf");return t?t.value:""}getCsrfPutInputValue(){const t=this.voteForm.querySelector(".js-data-url-put-csrf");return t?t.value:""}simulateUpvote(){var t,f,p,g;this.voteForm.setAttribute("data-upvoted","true"),this.voteForm.getAttribute("data-new-upvote")&&((t=this.voteForm.querySelector(".js-upvote-button"))==null||t.classList.add("user-has-reacted","color-bg-accent"),(f=this.voteForm.querySelector(".js-upvote-button"))==null||f.classList.remove("color-fg-muted")),this.voteForm.classList.add("is-upvoted"),(p=this.voteButton)==null||p.setAttribute("aria-label",this.upvotedCountElement.getLabel()),(g=this.voteButton)==null||g.setAttribute("aria-pressed","true"),(0,c.x)(`${this.upvotedCountElement.getText()} Upvotes`)}simulateUpvoteDeletion(){var t,f,p,g;this.voteForm.setAttribute("data-upvoted","false"),this.voteForm.getAttribute("data-new-upvote")&&((t=this.voteForm.querySelector(".js-upvote-button"))==null||t.classList.remove("user-has-reacted","color-bg-accent"),(f=this.voteForm.querySelector(".js-upvote-button"))==null||f.classList.add("color-fg-muted")),this.voteForm.classList.remove("is-upvoted"),(p=this.voteButton)==null||p.setAttribute("aria-label",this.defaultVoteCountElement.getLabel()),(g=this.voteButton)==null||g.setAttribute("aria-pressed","false"),(0,c.x)(`${this.defaultVoteCountElement.getText()} Upvotes`)}displayUpVoteError(t){const f=this.voteForm.querySelector(".js-upvote-error");f instanceof HTMLElement&&(f.textContent=t,f.hidden=!1)}hideVoteErrors(){const t=this.voteForm.querySelector(".js-upvote-error");t instanceof HTMLElement&&(t.hidden=!0)}}e(i,"VoteFormElement");class l{constructor(t){this.voteFormElement=t}animateUpvote(t){t?this.voteFormElement.simulateUpvoteDeletion():this.voteFormElement.simulateUpvote()}animateUpvoteUndo(t){t?this.voteFormElement.simulateUpvote():this.voteFormElement.simulateUpvoteDeletion()}async click(){this.voteFormElement.hideVoteErrors();const t=this.voteFormElement.isUpvoted(),f=t?this.voteFormElement.getCsrfDeleteInputValue():this.voteFormElement.getCsrfPutInputValue(),p=t?"delete":"put";this.animateUpvote(t);const g=await r(this.voteFormElement.url,f,p,!t);if(!g.ok){const b=await g.json();this.voteFormElement.displayUpVoteError(b.error),this.animateUpvoteUndo(t)}}}e(l,"Upvote"),(0,d.N7)(".js-upvote-button",s=>{if(!(s instanceof HTMLElement)||!(s.parentElement instanceof HTMLElement))return;const t=new l(new i(s.parentElement));s.addEventListener("click",async()=>{await t.click()})})},75488:(T,y,o)=>{o.d(y,{C:()=>d,x:()=>c});const c=function(){return document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(r=>{document.addEventListener("DOMContentLoaded",()=>{r()})})}(),d=function(){return document.readyState==="complete"?Promise.resolve():new Promise(r=>{window.addEventListener("load",r)})}()},51012:(T,y,o)=>{o.d(y,{LN:()=>p,aJ:()=>C,cI:()=>w,eK:()=>b,mT:()=>g});var c=o(71692),d=o(70290),r=o(82918),u=o(50232),i=o(28382),l=o(97261);let s=!1,t=0;const f=Date.now();function p(S){S.error&&v(E(m(S.error)))}e(p,"reportEvent");async function g(S){if(!!S.promise)try{await S.promise}catch(M){v(E(m(M)))}}e(g,"reportPromiseRejectionEvent");function b(S,M={}){S&&S.name!=="AbortError"&&v(E(m(S),M))}e(b,"reportError");async function v(S){var M,O;if(!F())return;const x=(O=(M=document.head)==null?void 0:M.querySelector('meta[name="browser-errors-url"]'))==null?void 0:O.content;if(!!x){if(D(S.error.stacktrace)){s=!0;return}t++;try{await fetch(x,{method:"post",body:JSON.stringify(S)})}catch{}}}e(v,"report");function m(S){return{type:S.name,value:S.message,stacktrace:w(S)}}e(m,"formatError");function E(S,M={}){return Object.assign({error:S,sanitizedUrl:(0,l.S)()||window.location.href,readyState:document.readyState,referrer:(0,c.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:C()||void 0},M)}e(E,"errorContext");function w(S){return(0,i.Q)(S.stack||"").map(M=>({filename:M.file||"",function:String(M.methodName),lineno:(M.lineNumber||0).toString(),colno:(M.column||0).toString()}))}e(w,"stacktrace");const A=/(chrome|moz|safari)-extension:\/\//;function D(S){return S.some(M=>A.test(M.filename)||A.test(M.function))}e(D,"isExtensionError");function C(){var S,M;const O=(M=(S=document.head)==null?void 0:S.querySelector('meta[name="user-login"]'))==null?void 0:M.content;return O||`anonymous-${(0,r.b)()}`}e(C,"pageUser");let I=!1;window.addEventListener("pageshow",()=>I=!1),window.addEventListener("pagehide",()=>I=!0),document.addEventListener(c.QE.ERROR,S=>{v(E({type:"SoftNavError",value:S.detail,stacktrace:w(new Error)}))});function F(){return!I&&!s&&t<10&&(0,u.Gb)()&&!(0,d.Z)(document)}e(F,"reportable"),typeof BroadcastChannel=="function"&&new BroadcastChannel("shared-worker-error").addEventListener("message",M=>{b(M.data.error)})},57654:(T,y,o)=>{o.d(y,{Bt:()=>i,DN:()=>t,KL:()=>g,Se:()=>s,qC:()=>b,sw:()=>f});var c=o(59753),d=o(2077),r=o(63621);(0,c.on)("click",".js-remote-submit-button",async function(v){const E=v.currentTarget.form;v.preventDefault();let w;try{w=await fetch(E.action,{method:E.method,body:new FormData(E),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}w&&!w.ok&&(0,r.v)()});function u(v,m,E){return v.dispatchEvent(new CustomEvent(m,{bubbles:!0,cancelable:E}))}e(u,"fire");function i(v,m){m&&(l(v,m),(0,d.j)(m)),u(v,"submit",!0)&&v.submit()}e(i,"requestSubmit");function l(v,m){if(!(v instanceof HTMLFormElement))throw new TypeError("The specified element is not of type HTMLFormElement.");if(!(m instanceof HTMLElement))throw new TypeError("The specified element is not of type HTMLElement.");if(m.type!=="submit")throw new TypeError("The specified element is not a submit button.");if(!v||v!==m.form)throw new Error("The specified element is not owned by the form element.")}e(l,"checkButtonValidity");function s(v,m){if(typeof m=="boolean")if(v instanceof HTMLInputElement)v.checked=m;else throw new TypeError("only checkboxes can be set to boolean value");else{if(v.type==="checkbox")throw new TypeError("checkbox can't be set to string value");v.value=m}u(v,"change",!1)}e(s,"changeValue");function t(v,m){for(const E in m){const w=m[E],A=v.elements.namedItem(E);(A instanceof HTMLInputElement||A instanceof HTMLTextAreaElement)&&(A.value=w)}}e(t,"fillFormValues");function f(v){if(!(v instanceof HTMLElement))return!1;const m=v.nodeName.toLowerCase(),E=(v.getAttribute("type")||"").toLowerCase();return m==="select"||m==="textarea"||m==="input"&&E!=="submit"&&E!=="reset"||v.isContentEditable}e(f,"isFormField");function p(v){return new URLSearchParams(v)}e(p,"searchParamsFromFormData");function g(v,m){const E=new URLSearchParams(v.search),w=p(m);for(const[A,D]of w)E.append(A,D);return E.toString()}e(g,"combineGetFormSearchParams");function b(v){return p(new FormData(v)).toString()}e(b,"serialize")},98016:(T,y,o)=>{o.d(y,{Mw:()=>v,_C:()=>b,lO:()=>g,qA:()=>p,y0:()=>u});const c=[];let d=0,r;function u(){return r}e(u,"getState");function i(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch{return 0}}e(i,"safeGetHistory");function l(){const m={_id:new Date().getTime(),...history.state};return t(m),m}e(l,"initializeState");function s(){return i()-1+d}e(s,"position");function t(m){r=m;const E=location.href;c[s()]={url:E,state:r},c.length=i(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}e(t,"setState");function f(){return new Date().getTime()}e(f,"uniqueId");function p(m,E,w){d=0;const A={_id:f(),...m};history.pushState(A,E,w),t(A)}e(p,"pushState");function g(m,E,w){const A={...u(),...m};history.replaceState(A,E,w),t(A)}e(g,"replaceState");function b(){const m=c[s()-1];if(m)return m.url}e(b,"getBackURL");function v(){const m=c[s()+1];if(m)return m.url}e(v,"getForwardURL"),r=l(),window.addEventListener("popstate",e(function(E){const w=E.state;if(!w||!w._id)return;w._id<(u()._id||NaN)?d--:d++,t(w)},"onPopstate"),!0),window.addEventListener("hashchange",e(function(){if(i()>c.length){const E={_id:f()};history.replaceState(E,"",location.href),t(E)}},"onHashchange"),!0)},91385:(T,y,o)=>{o.d(y,{$S:()=>d,Fk:()=>r,sz:()=>u});var c=o(77552);function d(i,l,s){const t={hydroEventPayload:i,hydroEventHmac:l,visitorPayload:"",visitorHmac:"",hydroClientContext:s},f=document.querySelector("meta[name=visitor-payload]");f instanceof HTMLMetaElement&&(t.visitorPayload=f.content);const p=document.querySelector("meta[name=visitor-hmac]")||"";p instanceof HTMLMetaElement&&(t.visitorHmac=p.content),(0,c.b)(t,!0)}e(d,"sendData");function r(i){const l=i.getAttribute("data-hydro-view")||"",s=i.getAttribute("data-hydro-view-hmac")||"",t=i.getAttribute("data-hydro-client-context")||"";d(l,s,t)}e(r,"trackView");function u(i){const l=i.getAttribute("data-hydro-click-payload")||"",s=i.getAttribute("data-hydro-click-hmac")||"",t=i.getAttribute("data-hydro-client-context")||"";d(l,s,t)}e(u,"sendHydroEvent")},43721:(T,y,o)=>{o.d(y,{ZG:()=>i,q6:()=>s,w4:()=>l});var c=o(8439);let d=!1;const r=new c.Z;function u(t){const f=t.target;if(f instanceof HTMLElement&&f.nodeType!==Node.DOCUMENT_NODE)for(const p of r.matches(f))p.data.call(null,f)}e(u,"handleFocus");function i(t,f){d||(d=!0,document.addEventListener("focus",u,!0)),r.add(t,f),document.activeElement instanceof HTMLElement&&document.activeElement.matches(t)&&f(document.activeElement)}e(i,"onFocus");function l(t,f,p){function g(b){const v=b.currentTarget;!v||(v.removeEventListener(t,p),v.removeEventListener("blur",g))}e(g,"blurHandler"),i(f,function(b){b.addEventListener(t,p),b.addEventListener("blur",g)})}e(l,"onKey");function s(t,f){function p(g){const{currentTarget:b}=g;!b||(b.removeEventListener("input",f),b.removeEventListener("blur",p))}e(p,"blurHandler"),i(t,function(g){g.addEventListener("input",f),g.addEventListener("blur",p)})}e(s,"onInput")},82927:(T,y,o)=>{var c=o(64463),d=o(59753);let r=null,u=null;function i(s){const{item:t,oldIndex:f}=s,{parentNode:p}=t;u=p.children[f+1]}e(i,"handleStart");async function l(s){const{oldIndex:t,newIndex:f,item:p}=s;if(t===f)return;const g=p.closest(".js-pinned-items-reorder-form"),b=g.closest(".js-pinned-items-reorder-container"),v=b.querySelector(".js-pinned-items-spinner"),m=b.querySelector(".js-pinned-items-reorder-message"),E=v&&m;if(E&&(m.textContent="",v.style.display="inline-block"),r.option("disabled",!0),!(await fetch(g.action,{method:g.method,body:new FormData(g),headers:{"X-Requested-With":"XMLHttpRequest"}})).ok){E&&(m.textContent=m.getAttribute("data-error-text")||"",v.style.display="none");const A=p.parentNode;u?A.insertBefore(p,u):A.appendChild(p);return}E&&(m.textContent=m.getAttribute("data-success-text")||"",v.style.display="none"),r.option("disabled",!1)}e(l,"handleUpdate"),(0,c.N7)(".js-pinned-items-reorder-list",{async add(s){const{Sortable:t}=await o.e("app_assets_modules_github_sortable-behavior_ts").then(o.bind(o,87449));r=t.create(s,{animation:150,item:".js-pinned-item-list-item",handle:".js-pinned-item-reorder",onUpdate:l,onStart:i,chosenClass:"is-dragging"})}}),(0,d.on)("submit",".js-pinned-items-reorder-form",function(s){s.preventDefault()}),(0,d.on)("click",".js-pinned-item-list-item .js-sortable-button",async function({currentTarget:s}){const{moveWithButton:t}=await o.e("app_assets_modules_github_sortable-behavior_ts").then(o.bind(o,87449));t(s,s.closest(".js-pinned-item-list-item"),l)})},70290:(T,y,o)=>{o.d(y,{Z:()=>c});function c(d){var r,u;const i=(u=(r=d.head)==null?void 0:r.querySelector('meta[name="expected-hostname"]'))==null?void 0:u.content;if(!i)return!1;const l=i.replace(/\.$/,"").split(".").slice(-2).join("."),s=d.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".");return l!==s}e(c,"detectProxySite")},2077:(T,y,o)=>{o.d(y,{j:()=>c,u:()=>d});function c(r){const u=r.closest("form");if(!(u instanceof HTMLFormElement))return;let i=d(u);if(r.name){const l=r.matches("input[type=submit]")?"Submit":"",s=r.value||l;i||(i=document.createElement("input"),i.type="hidden",i.classList.add("is-submit-button-value"),u.prepend(i)),i.name=r.name,i.value=s}else i&&i.remove()}e(c,"persistSubmitButtonValue");function d(r){const u=r.querySelector("input.is-submit-button-value");return u instanceof HTMLInputElement?u:null}e(d,"findPersistedSubmitButtonValue")},31579:(T,y,o)=>{o.d(y,{Z:()=>d});class c{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}e(c,"NoOpStorage");function d(r,u={throwQuotaErrorsOnSet:!1},i=window){let l;try{l=i[r]}catch{l=new c}const{throwQuotaErrorsOnSet:s}=u;function t(g){try{return l.getItem(g)}catch{return null}}e(t,"getItem");function f(g,b){try{l.setItem(g,b)}catch(v){if(s&&v.message.toLowerCase().includes("quota"))throw v}}e(f,"setItem");function p(g){try{l.removeItem(g)}catch{}}return e(p,"removeItem"),{getItem:t,setItem:f,removeItem:p}}e(d,"safeStorage")},30855:(T,y,o)=>{o.d(y,{LS:()=>r,cl:()=>u,rV:()=>d});var c=o(31579);const{getItem:d,setItem:r,removeItem:u}=(0,c.Z)("sessionStorage")},71692:(T,y,o)=>{o.d(y,{Ak:()=>v,F2:()=>S,F6:()=>D,FP:()=>g,LD:()=>p,OE:()=>f,Po:()=>t,QE:()=>r,Rl:()=>I,Xk:()=>w,Ys:()=>A,aN:()=>F,wP:()=>C});var c=o(30855),d=o(97261);const r=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",START:"soft-nav:start",END:"soft-nav:end"}),u="soft-navigation-fail",i="soft-navigation-referrer",l="soft-navigation-marker",s="reload";function t(){return(0,c.rV)(l)==="1"}e(t,"inSoftNavigation");function f(){return Boolean(m())}e(f,"hasSoftNavFailure");function p(){performance.mark(l),(0,c.LS)(l,"1"),(0,c.LS)(i,(0,d.S)()||window.location.href)}e(p,"startSoftNav");function g(){(0,c.LS)(l,"0")}e(g,"endSoftNav");function b(){(0,c.LS)(l,"0"),(0,c.cl)(i),(0,c.cl)(u)}e(b,"clearSoftNav");function v(M){(0,c.LS)(u,M||s)}e(v,"setSoftNavFailReason");function m(){return(0,c.rV)(u)}e(m,"getSoftNavFailReason");let E=0;function w(){E+=1,document.dispatchEvent(new CustomEvent(r.SUCCESS,{detail:E}))}e(w,"softNavSucceeded");function A(){document.dispatchEvent(new CustomEvent(r.ERROR,{detail:m()||s})),E=0,b()}e(A,"softNavFailed");function D(){document.dispatchEvent(new CustomEvent(r.INITIAL)),E=0,b()}e(D,"softNavInitial");function C(){return(0,c.rV)(i)||document.referrer}e(C,"getSoftNavReferrer");function I(){return performance.getEntriesByName(l).length===0?0:performance.measure(l,l).duration}e(I,"getDurationSinceLastSoftNav");function F(){document.dispatchEvent(new Event(r.START))}e(F,"beginProgressBar");function S(){document.dispatchEvent(new Event(r.END))}e(S,"completeProgressBar")},77552:(T,y,o)=>{o.d(y,{b:()=>u});var c=o(70290),d=o(75488);let r=[];function u(f,p=!1){f.timestamp===void 0&&(f.timestamp=new Date().getTime()),f.loggedIn=t(),r.push(f),p?s():l()}e(u,"sendStats");let i=null;async function l(){await d.C,i==null&&(i=window.requestIdleCallback(s))}e(l,"scheduleSendStats");function s(){var f,p;if(i=null,!r.length||(0,c.Z)(document))return;const g=(p=(f=document.head)==null?void 0:f.querySelector('meta[name="browser-stats-url"]'))==null?void 0:p.content;if(!g)return;const b=JSON.stringify({stats:r});try{navigator.sendBeacon&&navigator.sendBeacon(g,b)}catch{}r=[]}e(s,"flushStats");function t(){var f,p;return!!((p=(f=document.head)==null?void 0:f.querySelector('meta[name="user-login"]'))==null?void 0:p.content)}e(t,"isLoggedIn"),document.addEventListener("pagehide",s),document.addEventListener("visibilitychange",s)},55526:(T,y,o)=>{o.d(y,{x:()=>d});let c;function d(u){if(r(),!u)return;const i=document.createElement("div");i.innerHTML=u,document.body&&document.body.append(i);const l=i.querySelector("button");l&&l.addEventListener("click",r,{once:!0}),document.addEventListener("keydown",s=>{s.key==="Escape"&&r()&&s.stopImmediatePropagation()}),c=i}e(d,"toggleToast");function r(){return c?(c.remove(),c=null,!0):!1}e(r,"removeToast")}},T=>{var y=e(c=>T(T.s=c),"__webpack_exec__");T.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_delegated-events_dist_in-2c6780"],()=>y(94351));var o=T.O()}]);})();

//# sourceMappingURL=dashboard-4b6cda4ec58d.js.map