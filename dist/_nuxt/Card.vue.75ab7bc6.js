import{j as Y,k as C,s as Z,l as ee,m as te,n as A,q as re,v as j,h as D,x as se,y as ie,z as x,A as ne,B as ae,C as I,D as oe,E as O,G as ce,H as q,I as le,J as W,K as ue,f as K,L as de,M as fe,o as he,c as ge,a as N,t as M,b as H,w as ye,d as pe}from"./entry.39cd496a.js";import{u as me}from"./vue.f36acd1f.1b6c47f1.js";import{_ as ve}from"./nuxt-link.aa57180b.js";function we(...r){var u;const s=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(s);let[i,e,t={}]=r;if(typeof i!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=j(),a=()=>null,l=()=>n.isHydrating?n.payload.data[i]:n.static.data[i];t.server=t.server??!0,t.default=t.default??a,t.getCachedData=t.getCachedData??l,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??Y.deep;const c=()=>![null,void 0].includes(t.getCachedData(i));if(!n._asyncData[i]||!t.immediate){(u=n.payload._errors)[i]??(u[i]=null);const h=t.deep?C:Z;n._asyncData[i]={data:h(t.getCachedData(i)??t.default()),pending:C(!c()),error:ee(n.payload._errors,i),status:C("idle")}}const o={...n._asyncData[i]};o.refresh=o.execute=(h={})=>{if(n._asyncDataPromises[i]){if(h.dedupe===!1)return n._asyncDataPromises[i];n._asyncDataPromises[i].cancelled=!0}if((h._initial||n.isHydrating&&h._initial!==!1)&&c())return Promise.resolve(t.getCachedData(i));o.pending.value=!0,o.status.value="pending";const w=new Promise((y,v)=>{try{y(e(n))}catch(S){v(S)}}).then(y=>{if(w.cancelled)return n._asyncDataPromises[i];let v=y;t.transform&&(v=t.transform(y)),t.pick&&(v=_e(v,t.pick)),o.data.value=v,o.error.value=null,o.status.value="success"}).catch(y=>{if(w.cancelled)return n._asyncDataPromises[i];o.error.value=y,o.data.value=D(t.default()),o.status.value="error"}).finally(()=>{w.cancelled||(o.pending.value=!1,n.payload.data[i]=o.data.value,o.error.value&&(n.payload._errors[i]=se(o.error.value)),delete n._asyncDataPromises[i])});return n._asyncDataPromises[i]=w,n._asyncDataPromises[i]};const f=()=>o.refresh({_initial:!0}),g=t.server!==!1&&n.payload.serverRendered;{const h=ie();if(h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const y=h._nuxtOnBeforeMountCbs;h&&(te(()=>{y.forEach(v=>{v()}),y.splice(0,y.length)}),A(()=>y.splice(0,y.length)))}g&&n.isHydrating&&(o.error.value||c())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):h&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(f):t.immediate&&f(),t.watch&&re(t.watch,()=>o.refresh());const w=n.hook("app:data:refresh",async y=>{(!y||y.includes(i))&&await o.refresh()});h&&A(w)}const d=Promise.resolve(n._asyncDataPromises[i]).then(()=>o);return Object.assign(d,o),d}function _e(r,s){const i={};for(const e of s)i[e]=r[e];return i}const E=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function be(r,s){s?s={...E,...s}:s=E;const i=V(s);return i.dispatch(r),i.toString()}const Se=Object.freeze(["prototype","__proto__","constructor"]);function V(r){let s="",i=new Map;const e=t=>{s+=t};return{toString(){return s},getContext(){return i},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let a="";const l=n.length;l<10?a="unknown:["+n+"]":a=n.slice(8,l-1),a=a.toLowerCase();let c=null;if((c=i.get(t))===void 0)i.set(t,i.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this[a]?this[a](t):r.ignoreUnknown||this.unkown(t,a);else{let o=Object.keys(t);r.unorderedObjects&&(o=o.sort());let f=[];r.respectType!==!1&&!R(t)&&(f=Se),r.excludeKeys&&(o=o.filter(d=>!r.excludeKeys(d)),f=f.filter(d=>!r.excludeKeys(d))),e("object:"+(o.length+f.length)+":");const g=d=>{this.dispatch(d),e(":"),r.excludeValues||this.dispatch(t[d]),e(",")};for(const d of o)g(d);for(const d of f)g(d)}},array(t,n){if(n=n===void 0?r.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const c of t)this.dispatch(c);return}const a=new Map,l=t.map(c=>{const o=V(r);o.dispatch(c);for(const[f,g]of o.getContext())a.set(f,g);return o.toString()});return i=a,l.sort(),this.array(l,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),R(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const J="[native code] }",xe=J.length;function R(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-xe)===J}class B{constructor(s,i){s=this.words=s||[],this.sigBytes=i===void 0?s.length*4:i}toString(s){return(s||Be).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let i=0;i<s.sigBytes;i++){const e=s.words[i>>>2]>>>24-i%4*8&255;this.words[this.sigBytes+i>>>2]|=e<<24-(this.sigBytes+i)%4*8}else for(let i=0;i<s.sigBytes;i+=4)this.words[this.sigBytes+i>>>2]=s.words[i>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new B([...this.words])}}const Be={stringify(r){const s=[];for(let i=0;i<r.sigBytes;i++){const e=r.words[i>>>2]>>>24-i%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},ze={stringify(r){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,n=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,a=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,l=t<<16|n<<8|a;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)i.push(s.charAt(l>>>6*(3-c)&63))}return i.join("")}},De={parse(r){const s=r.length,i=[];for(let e=0;e<s;e++)i[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new B(i,s)}},ke={parse(r){return De.parse(unescape(encodeURIComponent(r)))}};class Ce{constructor(){this._data=new B,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new B,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=ke.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,i){}_process(s){let i,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let a=0;a<t;a+=this.blockSize)this._doProcessBlock(this._data.words,a);i=this._data.words.splice(0,t),this._data.sigBytes-=n}return new B(i,n)}}class Pe extends Ce{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const U=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Me=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],z=[];class Oe extends Pe{constructor(){super(...arguments),this._hash=new B([...U])}reset(){super.reset(),this._hash=new B([...U])}_doProcessBlock(s,i){const e=this._hash.words;let t=e[0],n=e[1],a=e[2],l=e[3],c=e[4],o=e[5],f=e[6],g=e[7];for(let d=0;d<64;d++){if(d<16)z[d]=s[i+d]|0;else{const p=z[d-15],m=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,_=z[d-2],P=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;z[d]=m+z[d-7]+P+z[d-16]}const u=c&o^~c&f,h=t&n^t&a^n&a,w=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),y=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),v=g+y+u+Me[d]+z[d],S=w+h;g=f,f=o,o=c,c=l+v|0,l=a,a=n,n=t,t=v+S|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+a|0,e[3]=e[3]+l|0,e[4]=e[4]+c|0,e[5]=e[5]+o|0,e[6]=e[6]+f|0,e[7]=e[7]+g|0}finalize(s){super.finalize(s);const i=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(i/4294967296),this._data.words[(e+64>>>9<<4)+15]=i,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function je(r){return new Oe().finalize(r).toString(ze)}function $e(r,s={}){const i=typeof r=="string"?r:be(r,s);return je(i).slice(0,10)}function ct(r,s,i){var P;const[e={},t]=typeof s=="string"?[{},s]:[s,i],n=x(()=>{let k=r;return typeof k=="function"&&(k=k()),D(k)}),a=e.key||$e([t,((P=D(e.method))==null?void 0:P.toUpperCase())||"GET",D(e.baseURL),typeof n.value=="string"?n.value:"",D(e.params||e.query),D(e.headers)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const l=a===t?"$f"+a:a;if(!e.baseURL&&typeof n.value=="string"&&n.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:o,default:f,transform:g,pick:d,watch:u,immediate:h,getCachedData:w,deep:y,...v}=e,S=ne({...ae,...v,cache:typeof e.cache=="boolean"?void 0:e.cache}),p={server:c,lazy:o,default:f,transform:g,pick:d,immediate:h,getCachedData:w,deep:y,watch:u===!1?[]:[S,n,...u||[]]};let m;return we(l,()=>{var $;return($=m==null?void 0:m.abort)==null||$.call(m),m=typeof AbortController<"u"?new AbortController:{},(e.$fetch||globalThis.$fetch)(n.value,{signal:m.signal,...S})},p)}async function Ae(r,s){return await Ie(s).catch(e=>(console.error("Failed to get image meta for "+s,e+""),{width:0,height:0,ratio:0}))}async function Ie(r){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((s,i)=>{const e=new Image;e.onload=()=>{const t={width:e.width,height:e.height,ratio:e.width/e.height};s(t)},e.onerror=t=>i(t),e.src=r})}function F(r){return s=>s?r[s]||s:r.missingValue}function We({formatter:r,keyMap:s,joinWith:i="/",valueMap:e}={}){r||(r=(n,a)=>`${n}=${a}`),s&&typeof s!="function"&&(s=F(s));const t=e||{};return Object.keys(t).forEach(n=>{typeof t[n]!="function"&&(t[n]=F(t[n]))}),(n={})=>Object.entries(n).filter(([l,c])=>typeof c<"u").map(([l,c])=>{const o=t[l];return typeof o=="function"&&(c=o(n[l])),l=typeof s=="function"?s(l):l,r(l,c)}).join(i)}function b(r=""){if(typeof r=="number")return r;if(typeof r=="string"&&r.replace("px","").match(/^\d+$/g))return parseInt(r,10)}function Ne(r=""){if(r===void 0||!r.length)return[];const s=new Set;for(const i of r.split(" ")){const e=parseInt(i.replace("x",""));e&&s.add(e)}return Array.from(s)}function He(r){if(r.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Ee(r){const s={};if(typeof r=="string")for(const i of r.split(/[\s,]+/).filter(e=>e)){const e=i.split(":");e.length!==2?s["1px"]=e[0].trim():s[e[0].trim()]=e[1].trim()}else Object.assign(s,r);return s}function Re(r){const s={options:r},i=(t,n={})=>G(s,t,n),e=(t,n={},a={})=>i(t,{...a,modifiers:q(n,a.modifiers||{})}).url;for(const t in r.presets)e[t]=(n,a,l)=>e(n,a,{...r.presets[t],...l});return e.options=r,e.getImage=i,e.getMeta=(t,n)=>Ue(s,t,n),e.getSizes=(t,n)=>Te(s,t,n),s.$img=e,e}async function Ue(r,s,i){const e=G(r,s,{...i});return typeof e.getMeta=="function"?await e.getMeta():await Ae(r,e.url)}function G(r,s,i){var o,f;if(typeof s!="string"||s==="")throw new TypeError(`input must be a string (received ${typeof s}: ${JSON.stringify(s)})`);if(s.startsWith("data:"))return{url:s};const{provider:e,defaults:t}=Fe(r,i.provider||r.options.provider),n=Le(r,i.preset);if(s=I(s)?s:oe(s),!e.supportsAlias)for(const g in r.options.alias)s.startsWith(g)&&(s=O(r.options.alias[g],s.substr(g.length)));if(e.validateDomains&&I(s)){const g=ce(s).host;if(!r.options.domains.find(d=>d===g))return{url:s}}const a=q(i,n,t);a.modifiers={...a.modifiers};const l=a.modifiers.format;(o=a.modifiers)!=null&&o.width&&(a.modifiers.width=b(a.modifiers.width)),(f=a.modifiers)!=null&&f.height&&(a.modifiers.height=b(a.modifiers.height));const c=e.getImage(s,a,r);return c.format=c.format||l||"",c}function Fe(r,s){const i=r.options.providers[s];if(!i)throw new Error("Unknown provider: "+s);return i}function Le(r,s){if(!s)return{};if(!r.options.presets[s])throw new Error("Unknown preset: "+s);return r.options.presets[s]}function Te(r,s,i){var h,w,y,v,S;const e=b((h=i.modifiers)==null?void 0:h.width),t=b((w=i.modifiers)==null?void 0:w.height),n=Ee(i.sizes),a=(y=i.densities)!=null&&y.trim()?Ne(i.densities.trim()):r.options.densities;He(a);const l=e&&t?t/e:0,c=[],o=[];if(Object.keys(n).length>=1){for(const p in n){const m=L(p,String(n[p]),t,l,r);if(m!==void 0){c.push({size:m.size,screenMaxWidth:m.screenMaxWidth,media:`(max-width: ${m.screenMaxWidth}px)`});for(const _ of a)o.push({width:m._cWidth*_,src:T(r,s,i,m,_)})}}qe(c)}else for(const p of a){const m=Object.keys(n)[0];let _=L(m,String(n[m]),t,l,r);_===void 0&&(_={size:"",screenMaxWidth:0,_cWidth:(v=i.modifiers)==null?void 0:v.width,_cHeight:(S=i.modifiers)==null?void 0:S.height}),o.push({width:p,src:T(r,s,i,_,p)})}Ke(o);const f=o[o.length-1],g=c.length?c.map(p=>`${p.media?p.media+" ":""}${p.size}`).join(", "):void 0,d=g?"w":"x",u=o.map(p=>`${p.src} ${p.width}${d}`).join(", ");return{sizes:g,srcset:u,src:f==null?void 0:f.src}}function L(r,s,i,e,t){const n=t.options.screens&&t.options.screens[r]||parseInt(r),a=s.endsWith("vw");if(!a&&/^\d+$/.test(s)&&(s=s+"px"),!a&&!s.endsWith("px"))return;let l=parseInt(s);if(!n||!l)return;a&&(l=Math.round(l/100*n));const c=e?Math.round(l*e):i;return{size:s,screenMaxWidth:n,_cWidth:l,_cHeight:c}}function T(r,s,i,e,t){return r.$img(s,{...i.modifiers,width:e._cWidth?e._cWidth*t:void 0,height:e._cHeight?e._cHeight*t:void 0},i)}function qe(r){var i;r.sort((e,t)=>e.screenMaxWidth-t.screenMaxWidth);let s=null;for(let e=r.length-1;e>=0;e--){const t=r[e];t.media===s&&r.splice(e,1),s=t.media}for(let e=0;e<r.length;e++)r[e].media=((i=r[e+1])==null?void 0:i.media)||""}function Ke(r){r.sort((i,e)=>i.width-e.width);let s=null;for(let i=r.length-1;i>=0;i--){const e=r[i];e.width===s&&r.splice(i,1),s=e.width}}const Ve=We({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(r,s)=>W(r)+"_"+W(s)}),Je=(r,{modifiers:s={},baseURL:i}={},e)=>{s.width&&s.height&&(s.resize=`${s.width}x${s.height}`,delete s.width,delete s.height);const t=Ve(s)||"_";return i||(i=O(e.options.nuxt.baseURL,"/_ipx")),{url:O(i,t,le(r))}},Ge=!0,Qe=!0,Xe=Object.freeze(Object.defineProperty({__proto__:null,getImage:Je,supportsAlias:Qe,validateDomains:Ge},Symbol.toStringTag,{value:"Module"})),Q={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};Q.providers={ipxStatic:{provider:Xe,defaults:{}}};const X=()=>{const r=ue(),s=j();return s.$img||s._img||(s._img=Re({...Q,nuxt:{baseURL:r.app.baseURL}}))},Ye={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:r=>["lazy","eager"].includes(r)},crossorigin:{type:[Boolean,String],default:void 0,validator:r=>["anonymous","use-credentials","",!0,!1].includes(r)},decoding:{type:String,default:void 0,validator:r=>["async","auto","sync"].includes(r)},nonce:{type:[String],default:void 0}},Ze=r=>{const s=x(()=>({provider:r.provider,preset:r.preset})),i=x(()=>({width:b(r.width),height:b(r.height),alt:r.alt,referrerpolicy:r.referrerpolicy,usemap:r.usemap,longdesc:r.longdesc,ismap:r.ismap,crossorigin:r.crossorigin===!0?"anonymous":r.crossorigin||void 0,loading:r.loading,decoding:r.decoding,nonce:r.nonce})),e=X(),t=x(()=>({...r.modifiers,width:b(r.width),height:b(r.height),format:r.format,quality:r.quality||e.options.quality,background:r.background,fit:r.fit}));return{options:s,attrs:i,modifiers:t}},et={...Ye,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},tt=K({name:"NuxtImg",props:et,emits:["load","error"],setup:(r,s)=>{const i=X(),e=Ze(r),t=C(!1),n=x(()=>i.getSizes(r.src,{...e.options.value,sizes:r.sizes,densities:r.densities,modifiers:{...e.modifiers.value,width:b(r.width),height:b(r.height)}})),a=x(()=>{const u={...e.attrs.value,"data-nuxt-img":""};return(!r.placeholder||t.value)&&(u.sizes=n.value.sizes,u.srcset=n.value.srcset),u}),l=x(()=>{let u=r.placeholder;if(u===""&&(u=!0),!u||t.value)return!1;if(typeof u=="string")return u;const h=Array.isArray(u)?u:typeof u=="number"?[u,u]:[10,10];return i(r.src,{...e.modifiers.value,width:h[0],height:h[1],quality:h[2]||50,blur:h[3]||3},e.options.value)}),c=x(()=>r.sizes?n.value.src:i(r.src,e.modifiers.value,e.options.value)),o=x(()=>l.value?l.value:c.value);if(r.preload){const u=Object.values(n.value).every(h=>h);me({link:[{rel:"preload",as:"image",nonce:r.nonce,...u?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:o.value}}]})}const f=C(),d=j().isHydrating;return de(()=>{if(l.value){const u=new Image;u.src=c.value,r.sizes&&(u.sizes=n.value.sizes||"",u.srcset=n.value.srcset),u.onload=h=>{t.value=!0,s.emit("load",h)};return}f.value&&(f.value.complete&&d&&(f.value.getAttribute("data-error")?s.emit("error",new Event("error")):s.emit("load",new Event("load"))),f.value.onload=u=>{s.emit("load",u)},f.value.onerror=u=>{s.emit("error",u)})}),()=>fe("img",{ref:f,src:o.value,...a.value,...s.attrs})}}),rt={class:"max-w-xs flex flex-col gap-4 p-4 border rounded-lg border-black border-4"},st={class:"id"},it={class:"title"},lt=K({__name:"Card",props:{id:Number,title:String,image:String},setup(r){return(s,i)=>{const e=tt,t=ve;return he(),ge("div",rt,[N("p",st,M(r.id),1),N("p",it,M(r.title),1),H(e,{loading:"lazy",src:r.image,alt:r.title,class:"w-full object-cover h-48"},null,8,["src","alt"]),H(t,{to:`/${r.id}`},{default:ye(()=>[pe("This is card number "+M(r.id),1)]),_:1},8,["to"])])}}});export{lt as _,ct as u};