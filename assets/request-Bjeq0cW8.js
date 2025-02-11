import{P as ut,L as ft,m as dt,c as pt}from"./mount-component-ChZTCXHt.js";import{d as ht,k as re,T as Ee,f as se,aN as mt,a as yt,A as le,L as wt,aO as bt,b as _,m as De,p as gt,I as Et,i as St,J as Rt,e as je,aE as Ot,r as Tt,E as At}from"./index-DeqO-Z_0.js";let I=0;function Ct(e){e?(I||document.body.classList.add("van-toast--unclickable"),I++):I&&(I--,I||document.body.classList.remove("van-toast--unclickable"))}const[xt,D]=yt("toast"),Pt=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],Nt={icon:String,show:Boolean,type:se("text"),overlay:Boolean,message:re,iconSize:re,duration:mt(2e3),position:se("middle"),teleport:[String,Object],wordBreak:String,className:Ee,iconPrefix:String,transition:se("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:Ee,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:re};var kt=ht({name:xt,props:Nt,emits:["update:show"],setup(e,{emit:t,slots:n}){let r,s=!1;const o=()=>{const f=e.show&&e.forbidClick;s!==f&&(s=f,Ct(s))},i=f=>t("update:show",f),c=()=>{e.closeOnClick&&i(!1)},d=()=>clearTimeout(r),l=()=>{const{icon:f,type:w,iconSize:b,iconPrefix:p,loadingType:m}=e;if(f||w==="success"||w==="fail")return _(Et,{name:f||w,size:b,class:D("icon"),classPrefix:p},null);if(w==="loading")return _(ft,{class:D("loading"),size:b,type:m},null)},u=()=>{const{type:f,message:w}=e;if(n.message)return _("div",{class:D("text")},[n.message()]);if(St(w)&&w!=="")return f==="html"?_("div",{key:0,class:D("text"),innerHTML:String(w)},null):_("div",{class:D("text")},[w])};return le(()=>[e.show,e.forbidClick],o),le(()=>[e.show,e.type,e.message,e.duration],()=>{d(),e.show&&e.duration>0&&(r=setTimeout(()=>{i(!1)},e.duration))}),wt(o),bt(o),()=>_(ut,De({class:[D([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:c,onClosed:d,"onUpdate:show":i},gt(e,Pt)),{default:()=>[l(),u()]})}});const Lt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let J=[],_t=!1,Se=je({},Lt);const Ft=new Map;function Bt(e){return Ot(e)?e:{message:e}}function Ut(){const{instance:e}=dt({setup(){const t=Tt(""),{open:n,state:r,close:s,toggle:o}=pt(),i=()=>{},c=()=>_(kt,De(r,{onClosed:i,"onUpdate:show":o}),null);return le(t,d=>{r.message=d}),At().render=c,{open:n,close:s,message:t}}});return e}function Dt(){if(!J.length||_t){const e=Ut();J.push(e)}return J[J.length-1]}function jt(e={}){if(!Rt)return{};const t=Dt(),n=Bt(e);return t.open(je({},Se,Ft.get(n.type||Se.type),n)),t}function qe(e,t){return function(){return e.apply(t,arguments)}}const{toString:qt}=Object.prototype,{getPrototypeOf:ye}=Object,Q=(e=>t=>{const n=qt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>Q(t)===e),Z=e=>t=>typeof t===e,{isArray:j}=Array,M=Z("undefined");function It(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ie=x("ArrayBuffer");function Ht(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ie(e.buffer),t}const Mt=Z("string"),C=Z("function"),He=Z("number"),Y=e=>e!==null&&typeof e=="object",vt=e=>e===!0||e===!1,V=e=>{if(Q(e)!=="object")return!1;const t=ye(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},zt=x("Date"),$t=x("File"),Jt=x("Blob"),Vt=x("FileList"),Wt=e=>Y(e)&&C(e.pipe),Kt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=Q(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},Xt=x("URLSearchParams"),[Gt,Qt,Zt,Yt]=["ReadableStream","Request","Response","Headers"].map(x),en=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function v(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Me(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const F=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ve=e=>!M(e)&&e!==F;function ue(){const{caseless:e}=ve(this)&&this||{},t={},n=(r,s)=>{const o=e&&Me(t,s)||s;V(t[o])&&V(r)?t[o]=ue(t[o],r):V(r)?t[o]=ue({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&v(arguments[r],n);return t}const tn=(e,t,n,{allOwnKeys:r}={})=>(v(t,(s,o)=>{n&&C(s)?e[o]=qe(s,n):e[o]=s},{allOwnKeys:r}),e),nn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},sn=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ye(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},on=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},an=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!He(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},cn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ye(Uint8Array)),ln=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},un=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},fn=x("HTMLFormElement"),dn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Re=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pn=x("RegExp"),ze=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},hn=e=>{ze(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mn=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},yn=()=>{},wn=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,oe="abcdefghijklmnopqrstuvwxyz",Oe="0123456789",$e={DIGIT:Oe,ALPHA:oe,ALPHA_DIGIT:oe+oe.toUpperCase()+Oe},bn=(e=16,t=$e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function gn(e){return!!(e&&C(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const En=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return v(r,(i,c)=>{const d=n(i,s+1);!M(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Sn=x("AsyncFunction"),Rn=e=>e&&(Y(e)||C(e))&&C(e.then)&&C(e.catch),Je=((e,t)=>e?setImmediate:t?((n,r)=>(F.addEventListener("message",({source:s,data:o})=>{s===F&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),F.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",C(F.postMessage)),On=typeof queueMicrotask<"u"?queueMicrotask.bind(F):typeof process<"u"&&process.nextTick||Je,a={isArray:j,isArrayBuffer:Ie,isBuffer:It,isFormData:Kt,isArrayBufferView:Ht,isString:Mt,isNumber:He,isBoolean:vt,isObject:Y,isPlainObject:V,isReadableStream:Gt,isRequest:Qt,isResponse:Zt,isHeaders:Yt,isUndefined:M,isDate:zt,isFile:$t,isBlob:Jt,isRegExp:pn,isFunction:C,isStream:Wt,isURLSearchParams:Xt,isTypedArray:cn,isFileList:Vt,forEach:v,merge:ue,extend:tn,trim:en,stripBOM:nn,inherits:rn,toFlatObject:sn,kindOf:Q,kindOfTest:x,endsWith:on,toArray:an,forEachEntry:ln,matchAll:un,isHTMLForm:fn,hasOwnProperty:Re,hasOwnProp:Re,reduceDescriptors:ze,freezeMethods:hn,toObjectSet:mn,toCamelCase:dn,noop:yn,toFiniteNumber:wn,findKey:Me,global:F,isContextDefined:ve,ALPHABET:$e,generateString:bn,isSpecCompliantForm:gn,toJSONObject:En,isAsyncFn:Sn,isThenable:Rn,setImmediate:Je,asap:On};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ve=y.prototype,We={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{We[e]={value:e}});Object.defineProperties(y,We);Object.defineProperty(Ve,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Ve);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Tn=null;function fe(e){return a.isPlainObject(e)||a.isArray(e)}function Ke(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Te(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ke(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function An(e){return a.isArray(e)&&!e.some(fe)}const Cn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ee(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,h){return!a.isUndefined(h[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,m,h){let g=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&An(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(g=a.toArray(p)))return m=Ke(m),g.forEach(function(R,N){!(a.isUndefined(R)||R===null)&&t.append(i===!0?Te([m],N,o):i===null?m:m+"[]",l(R))}),!1}return fe(p)?!0:(t.append(Te(h,m,o),l(p)),!1)}const f=[],w=Object.assign(Cn,{defaultVisitor:u,convertValue:l,isVisitable:fe});function b(p,m){if(!a.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(p),a.forEach(p,function(g,S){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(S)?S.trim():S,m,w))===!0&&b(g,m?m.concat(S):[S])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function we(e,t){this._pairs=[],e&&ee(e,this,t)}const Xe=we.prototype;Xe.append=function(t,n){this._pairs.push([t,n])};Xe.toString=function(t){const n=t?function(r){return t.call(this,r,Ae)}:Ae;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function xn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ge(e,t,n){if(!t)return e;const r=n&&n.encode||xn;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new we(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ce{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pn=typeof URLSearchParams<"u"?URLSearchParams:we,Nn=typeof FormData<"u"?FormData:null,kn=typeof Blob<"u"?Blob:null,Ln={isBrowser:!0,classes:{URLSearchParams:Pn,FormData:Nn,Blob:kn},protocols:["http","https","file","blob","url","data"]},be=typeof window<"u"&&typeof document<"u",de=typeof navigator=="object"&&navigator||void 0,_n=be&&(!de||["ReactNative","NativeScript","NS"].indexOf(de.product)<0),Fn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Bn=be&&window.location.href||"http://localhost",Un=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:be,hasStandardBrowserEnv:_n,hasStandardBrowserWebWorkerEnv:Fn,navigator:de,origin:Bn},Symbol.toStringTag,{value:"Module"})),O={...Un,...Ln};function Dn(e,t){return ee(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function jn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function qn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ze(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=qn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(jn(r),s,n,0)}),n}return null}function In(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const z={transitional:Qe,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ee(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),In(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{z.headers[e]={}});const Hn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Hn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xe=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function W(e){return e===!1||e==null?e:a.isArray(e)?e.map(W):String(e)}function vn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const zn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ie(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function $n(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let A=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const u=H(d);if(!u)throw new Error("header name must be a non-empty string");const f=a.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||d]=W(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!zn(t))i(Mn(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=H(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return vn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ie(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=H(i),i){const c=a.findKey(r,i);c&&(!n||ie(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ie(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=W(s),delete n[o];return}const c=t?$n(o):String(o).trim();c!==o&&delete n[o],n[c]=W(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=H(i);r[c]||(Jn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function ae(e,t){const n=this||z,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ye(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,y,{__CANCEL__:!0});function et(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Vn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Wn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let f=o,w=0;for(;f!==s;)w+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const b=u&&l-u;return b?Math.round(w*1e3/b):void 0}}function Kn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const X=(e,t,n=3)=>{let r=0;const s=Wn(50,250);return Kn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-r,l=s(d),u=i<=c;r=i;const f={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(f)},n)},Pe=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ne=e=>(...t)=>a.asap(()=>e(...t)),Xn=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,Gn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Qn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Zn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function tt(e,t){return e&&!Qn(t)?Zn(e,t):t}const ke=e=>e instanceof A?{...e}:e;function U(e,t){t=t||{};const n={};function r(l,u,f,w){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:w},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,f,w){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,f,w)}else return r(l,u,f,w)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,f)=>s(ke(l),ke(u),f,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=d[u]||s,w=f(e[u],t[u],u);a.isUndefined(w)&&f!==c||(n[u]=w)}),n}const nt=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=Ge(tt(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[l,...u]=d?d.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Xn(t.url))){const l=s&&o&&Gn.read(o);l&&i.set(s,l)}return t},Yn=typeof XMLHttpRequest<"u",er=Yn&&function(e){return new Promise(function(n,r){const s=nt(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,u,f,w,b,p;function m(){b&&b(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function g(){if(!h)return;const R=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:R,config:e,request:h};et(function(L){n(L),m()},function(L){r(L),m()},T),h=null}"onloadend"in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(g)},h.onabort=function(){h&&(r(new y("Request aborted",y.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Qe;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),r(new y(N,T.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(N,T){h.setRequestHeader(T,N)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([w,p]=X(l,!0),h.addEventListener("progress",w)),d&&h.upload&&([f,b]=X(d),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",b)),(s.cancelToken||s.signal)&&(u=R=>{h&&(r(!R||R.type?new q(null,e,h):R),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=Vn(s.url);if(S&&O.protocols.indexOf(S)===-1){r(new y("Unsupported protocol "+S+":",y.ERR_BAD_REQUEST,e));return}h.send(o||null)})},tr=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof y?u:new q(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:d}=r;return d.unsubscribe=()=>a.asap(c),d}},nr=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},rr=async function*(e,t){for await(const n of sr(e))yield*nr(n,t)},sr=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Le=(e,t,n,r)=>{const s=rr(e,t);let o=0,i,c=d=>{i||(i=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){c(),d.close();return}let f=u.byteLength;if(n){let w=o+=f;n(w)}d.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},te=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",rt=te&&typeof ReadableStream=="function",or=te&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),st=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ir=rt&&st(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),_e=64*1024,pe=rt&&st(()=>a.isReadableStream(new Response("").body)),G={stream:pe&&(e=>e.body)};te&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!G[t]&&(G[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const ar=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await or(e)).byteLength},cr=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??ar(t)},lr=te&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:w}=nt(e);l=l?(l+"").toLowerCase():"text";let b=tr([s,o&&o.toAbortSignal()],i),p;const m=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let h;try{if(d&&ir&&n!=="get"&&n!=="head"&&(h=await cr(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),k;if(a.isFormData(r)&&(k=T.headers.get("content-type"))&&u.setContentType(k),T.body){const[L,$]=Pe(h,X(Ne(d)));r=Le(T.body,_e,L,$)}}a.isString(f)||(f=f?"include":"omit");const g="credentials"in Request.prototype;p=new Request(t,{...w,signal:b,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:g?f:void 0});let S=await fetch(p);const R=pe&&(l==="stream"||l==="response");if(pe&&(c||R&&m)){const T={};["status","statusText","headers"].forEach(ge=>{T[ge]=S[ge]});const k=a.toFiniteNumber(S.headers.get("content-length")),[L,$]=c&&Pe(k,X(Ne(c),!0))||[];S=new Response(Le(S.body,_e,L,()=>{$&&$(),m&&m()}),T)}l=l||"text";let N=await G[a.findKey(G,l)||"text"](S,e);return!R&&m&&m(),await new Promise((T,k)=>{et(T,k,{data:N,headers:A.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(g){throw m&&m(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,p),{cause:g.cause||g}):y.from(g,g&&g.code,e,p)}}),he={http:Tn,xhr:er,fetch:lr};a.forEach(he,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fe=e=>`- ${e}`,ur=e=>a.isFunction(e)||e===null||e===!1,ot={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!ur(n)&&(r=he[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Fe).join(`
`):" "+Fe(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:he};function ce(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Be(e){return ce(e),e.headers=A.from(e.headers),e.data=ae.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ot.getAdapter(e.adapter||z.adapter)(e).then(function(r){return ce(e),r.data=ae.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Ye(r)||(ce(e),r&&r.response&&(r.response.data=ae.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const it="1.7.9",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ue={};ne.transitional=function(t,n,r){function s(o,i){return"[Axios v"+it+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Ue[i]&&(Ue[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};ne.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function fr(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const K={assertOptions:fr,validators:ne},P=K.validators;let B=class{constructor(t){this.defaults=t,this.interceptors={request:new Ce,response:new Ce}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&K.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:K.assertOptions(s,{encode:P.function,serialize:P.function},!0)),K.assertOptions(n,{baseUrl:P.spelling("baseURL"),withXsrfToken:P.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,f=0,w;if(!d){const p=[Be.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),w=p.length,u=Promise.resolve(n);f<w;)u=u.then(p[f++],p[f++]);return u}w=c.length;let b=n;for(f=0;f<w;){const p=c[f++],m=c[f++];try{b=p(b)}catch(h){m.call(this,h);break}}try{u=Be.call(this,b)}catch(p){return Promise.reject(p)}for(f=0,w=l.length;f<w;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=U(this.defaults,t);const n=tt(t.baseURL,t.url);return Ge(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}B.prototype[t]=n(),B.prototype[t+"Form"]=n(!0)});let dr=class at{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new q(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new at(function(s){t=s}),cancel:t}}};function pr(e){return function(n){return e.apply(null,n)}}function hr(e){return a.isObject(e)&&e.isAxiosError===!0}const me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(me).forEach(([e,t])=>{me[t]=e});function ct(e){const t=new B(e),n=qe(B.prototype.request,t);return a.extend(n,B.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ct(U(e,s))},n}const E=ct(z);E.Axios=B;E.CanceledError=q;E.CancelToken=dr;E.isCancel=Ye;E.VERSION=it;E.toFormData=ee;E.AxiosError=y;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=pr;E.isAxiosError=hr;E.mergeConfig=U;E.AxiosHeaders=A;E.formToJSON=e=>Ze(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=ot.getAdapter;E.HttpStatusCode=me;E.default=E;const{Axios:Er,AxiosError:Sr,CanceledError:Rr,isCancel:Or,CancelToken:Tr,VERSION:Ar,all:Cr,Cancel:xr,isAxiosError:Pr,spread:Nr,toFormData:kr,AxiosHeaders:Lr,HttpStatusCode:_r,formToJSON:Fr,getAdapter:Br,mergeConfig:Ur}=E,mr="/api",lt=E.create({baseURL:mr,timeout:1e4});lt.interceptors.request.use(e=>{const t=window.localStorage.getItem("token");return t&&(e.headers["x-access-token"]=t),e},e=>Promise.reject(e));lt.interceptors.response.use(e=>{const t=e.data;if(e.status!==200)return Promise.reject(new Error(t.success||"Error"));if(t.code==200)return t.result||t.data;jt(t.message)},e=>Promise.reject(e));export{lt as a,kt as b,jt as s};
