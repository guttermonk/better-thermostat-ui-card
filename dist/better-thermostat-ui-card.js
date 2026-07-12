const e=window.customElements.define;window.customElements.define=(t,o,i)=>{customElements.get(t)?console.warn(`BT UI: ${t} is loaded use the other`):e.call(window.customElements,t,o,i)};var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},t(e,o)};function o(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}var i=function(){return i=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};function n(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}function r(e,t,o){if(o||2===arguments.length)for(var i,n=0,r=t.length;n<r;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=globalThis,s=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;let u=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&c.set(t,e))}return e}toString(){return this.cssText}};const d=e=>new u("string"==typeof e?e:e+"",void 0,l),h=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new u(o,e,l)},p=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return d(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:m,defineProperty:_,getOwnPropertyDescriptor:g,getOwnPropertyNames:f,getOwnPropertySymbols:b,getPrototypeOf:v}=Object,y=globalThis,w=y.trustedTypes,k=w?w.emptyScript:"",x=y.reactiveElementPolyfillSupport,z=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?k:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},C=(e,t)=>!m(e,t),A={attribute:!0,type:String,converter:E,reflect:!1,useDefault:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;let M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&_(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);n?.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const e=this.properties,t=[...f(e),...b(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(p(e))}else void 0!==e&&t.push(p(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(s)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=a.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:E).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=i;const r=n.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){const i=this.constructor,n=this[e];if(o??=i.getPropertyOptions(e),!((o.hasChanged??C)(n,t)||o.useDefault&&o.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:n},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[z("elementProperties")]=new Map,M[z("finalized")]=new Map,x?.({ReactiveElement:M}),(y.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,$=S.trustedTypes,T=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,P="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+j,I=`<${O}>`,D=document,H=()=>D.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,B=Array.isArray,L="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,U=/>/g,F=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,K=/"/g,Z=/^(?:script|style|textarea|title)$/i,W=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),q=W(1),X=W(2),Y=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Q=new WeakMap,ee=D.createTreeWalker(D,129);function te(e,t){if(!B(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(t):t}class oe{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,s=this.parts,[l,c]=((e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":3===t?"<math>":"",a=R;for(let t=0;t<o;t++){const o=e[t];let s,l,c=-1,u=0;for(;u<o.length&&(a.lastIndex=u,l=a.exec(o),null!==l);)u=a.lastIndex,a===R?"!--"===l[1]?a=V:void 0!==l[1]?a=U:void 0!==l[2]?(Z.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=F):void 0!==l[3]&&(a=F):a===F?">"===l[0]?(a=n??R,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?F:'"'===l[3]?K:G):a===K||a===G?a=F:a===V||a===U?a=R:(a=F,n=void 0);const d=a===F&&e[t+1].startsWith("/>")?" ":"";r+=a===R?o+I:c>=0?(i.push(s),o.slice(0,c)+P+o.slice(c)+j+d):o+j+(-2===c?t:d)}return[te(e,r+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=oe.createElement(l,o),ee.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ee.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(P)){const t=c[r++],o=i.getAttribute(e).split(j),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?se:"?"===a[1]?le:"@"===a[1]?ce:ae}),i.removeAttribute(e)}else e.startsWith(j)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(Z.test(i.tagName)){const e=i.textContent.split(j),t=e.length-1;if(t>0){i.textContent=$?$.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],H()),ee.nextNode(),s.push({type:2,index:++n});i.append(e[t],H())}}}else if(8===i.nodeType)if(i.data===O)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(j,e+1));)s.push({type:7,index:n}),e+=j.length-1}n++}}static createElement(e,t){const o=D.createElement("template");return o.innerHTML=e,o}}function ie(e,t,o=e,i){if(t===Y)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=N(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=ie(e,n._$AS(e,t.values),n,i)),t}let ne=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??D).importNode(t,!0);ee.currentNode=i;let n=ee.nextNode(),r=0,a=0,s=o[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new re(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ue(n,this,e)),this._$AV.push(t),s=o[++a]}r!==s?.index&&(n=ee.nextNode(),r++)}return ee.currentNode=D,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};class re{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),N(e)?e===J||null==e||""===e?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>B(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==J&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=oe.createElement(te(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ne(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new oe(e)),t}k(e){B(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new re(this.O(H()),this.O(H()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=J}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=ie(this,e,t,0),r=!N(e)||e!==this._$AH&&e!==Y,r&&(this._$AH=e);else{const i=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=ie(this,i[o+a],t,a),s===Y&&(s=this._$AH[a]),r||=!N(s)||s!==this._$AH[a],s===J?e=J:e!==J&&(e+=(s??"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class se extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}}class le extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}}class ce extends ae{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=ie(this,e,t,0)??J)===Y)return;const o=this._$AH,i=e===J&&o!==J||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==J&&(o===J||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ue{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const de={I:re},he=S.litHtmlPolyfillSupport;he?.(oe,re),(S.litHtmlVersions??=[]).push("3.3.1");const pe=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let me=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new re(t.insertBefore(H(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};me._$litElement$=!0,me.finalized=!0,pe.litElementHydrateSupport?.({LitElement:me});const _e=pe.litElementPolyfillSupport;_e?.({LitElement:me}),(pe.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ge=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,fe={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:C},be=(e=fe,t,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function ve(e){return(t,o)=>"object"==typeof o?be(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ye(e){return ve({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const we=1,ke=2,xe=e=>(...t)=>({_$litDirective$:e,values:t});let ze=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=xe(class extends ze{constructor(e){if(super(e),e.type!==we||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return Y}}),Ce="important",Ae=" !"+Ce,Me=xe(class extends ze{constructor(e){if(super(e),e.type!==we||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,o)=>{const i=e[o];return null==i?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(Ae);e.includes("-")||t?o.setProperty(e,t?i.slice(0,-11):i,t?Ce:""):o[e]=i}}return Y}}),Se=(e,t,o,i)=>{i=i||{},o=null==o?{}:o;const n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=o,e.dispatchEvent(n),n},$e=(e,t)=>Te(e.attributes,t),Te=(e,t)=>0!=(e.supported_features&t);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe,je,Oe,Ie,De;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Pe||(Pe={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(je||(je={})),function(e){e.local="local",e.server="server"}(Oe||(Oe={})),function(e){e.language="language",e.system="system",e.DMY="DMY",e.MDY="MDY",e.YMD="YMD"}(Ie||(Ie={})),function(e){e.language="language",e.monday="monday",e.tuesday="tuesday",e.wednesday="wednesday",e.thursday="thursday",e.friday="friday",e.saturday="saturday",e.sunday="sunday"}(De||(De={}));const He=(e,t=2)=>Math.round(e*10**t)/10**t,Ne=(e,t,o)=>{const i=t?(e=>{switch(e.number_format){case Pe.comma_decimal:return["en-US","en"];case Pe.decimal_comma:return["de","es","it"];case Pe.space_comma:return["fr","sv","cs"];case Pe.system:return;default:return e.language}})(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},t?.number_format!==Pe.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(i,Be(e,o)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Be(e,o)).format(Number(e))}return"string"==typeof e?e:`${He(e,o?.maximumFractionDigits).toString()}${"currency"===o?.style?` ${o.currency}`:""}`},Be=(e,t)=>{const o={maximumFractionDigits:2,...t};if("string"!=typeof e)return o;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;o.minimumFractionDigits=t,o.maximumFractionDigits=t}return o};class Le extends TypeError{constructor(e,t){let o;const{message:i,explanation:n,...r}=e,{path:a}=e,s=0===a.length?i:`At path: ${a.join(".")} -- ${i}`;super(n??s),null!=n&&(this.cause=s),Object.assign(this,r),this.name=this.constructor.name,this.failures=()=>o??(o=[e,...t()])}}function Re(e){return"object"==typeof e&&null!=e}function Ve(e){return Re(e)&&!Array.isArray(e)}function Ue(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function Fe(e,t,o,i){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:n,branch:r}=t,{type:a}=o,{refinement:s,message:l=`Expected a value of type \`${a}\`${s?` with refinement \`${s}\``:""}, but received: \`${Ue(i)}\``}=e;return{value:i,type:a,refinement:s,key:n[n.length-1],path:n,branch:r,...e,message:l}}function*Ge(e,t,o,i){(function(e){return Re(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const n of e){const e=Fe(n,t,o,i);e&&(yield e)}}function*Ke(e,t,o={}){const{path:i=[],branch:n=[e],coerce:r=!1,mask:a=!1}=o,s={path:i,branch:n,mask:a};r&&(e=t.coercer(e,s));let l="valid";for(const i of t.validator(e,s))i.explanation=o.message,l="not_valid",yield[i,void 0];for(let[c,u,d]of t.entries(e,s)){const t=Ke(u,d,{path:void 0===c?i:[...i,c],branch:void 0===c?n:[...n,u],coerce:r,mask:a,message:o.message});for(const o of t)o[0]?(l=null!=o[0].refinement?"not_refined":"not_valid",yield[o[0],void 0]):r&&(u=o[1],void 0===c?e=u:e instanceof Map?e.set(c,u):e instanceof Set?e.add(u):Re(e)&&(void 0!==u||c in e)&&(e[c]=u))}if("not_valid"!==l)for(const i of t.refiner(e,s))i.explanation=o.message,l="not_refined",yield[i,void 0];"valid"===l&&(yield[void 0,e])}class Ze{constructor(e){const{type:t,schema:o,validator:i,refiner:n,coercer:r=(e=>e),entries:a=function*(){}}=e;this.type=t,this.schema=o,this.entries=a,this.coercer=r,this.validator=i?(e,t)=>Ge(i(e,t),t,this,e):()=>[],this.refiner=n?(e,t)=>Ge(n(e,t),t,this,e):()=>[]}assert(e,t){return function(e,t,o){const i=We(e,t,{message:o});if(i[0])throw i[0]}(e,this,t)}create(e,t){return function(e,t,o){const i=We(e,t,{coerce:!0,message:o});if(i[0])throw i[0];return i[1]}(e,this,t)}is(e){return function(e,t){const o=We(e,t);return!o[0]}(e,this)}mask(e,t){return function(e,t,o){const i=We(e,t,{coerce:!0,mask:!0,message:o});if(i[0])throw i[0];return i[1]}(e,this,t)}validate(e,t={}){return We(e,this,t)}}function We(e,t,o={}){const i=Ke(e,t,o),n=function(e){const{done:t,value:o}=e.next();return t?void 0:o}(i);if(n[0]){const e=new Le(n[0],(function*(){for(const e of i)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,n[1]]}function qe(e,t){return new Ze({type:e,schema:null,validator:t})}function Xe(e){return new Ze({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[o,i]of t.entries())yield[o,i,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${Ue(e)}`})}function Ye(){return qe("boolean",(e=>"boolean"==typeof e))}function Je(e){const t={},o=e.map((e=>Ue(e))).join();for(const o of e)t[o]=o;return new Ze({type:"enums",schema:t,validator:t=>e.includes(t)||`Expected one of \`${o}\`, but received: ${Ue(t)}`})}function Qe(e){const t=Ue(e),o=typeof e;return new Ze({type:"literal",schema:"string"===o||"number"===o||"boolean"===o?e:null,validator:o=>o===e||`Expected the literal \`${t}\`, but received: ${Ue(o)}`})}function et(e){const t=e?Object.keys(e):[],o=qe("never",(()=>!1));return new Ze({type:"object",schema:e||null,*entries(i){if(e&&Re(i)){const n=new Set(Object.keys(i));for(const o of t)n.delete(o),yield[o,i[o],e[o]];for(const e of n)yield[e,i[e],o]}},validator:e=>Ve(e)||`Expected an object, but received: ${Ue(e)}`,coercer(t,o){if(!Ve(t))return t;const i={...t};if(o.mask&&e)for(const t in i)void 0===e[t]&&delete i[t];return i}})}function tt(e){return new Ze({...e,validator:(t,o)=>void 0===t||e.validator(t,o),refiner:(t,o)=>void 0===t||e.refiner(t,o)})}function ot(e,t){return new Ze({type:"record",schema:null,*entries(o){if(Re(o))for(const i in o){const n=o[i];yield[i,i,e],yield[i,n,t]}},validator:e=>Ve(e)||`Expected an object, but received: ${Ue(e)}`,coercer:e=>Ve(e)?{...e}:e})}function it(){return qe("string",(e=>"string"==typeof e||`Expected a string, but received: ${Ue(e)}`))}function nt(e){const t=Object.keys(e);return new Ze({type:"type",schema:e,*entries(o){if(Re(o))for(const i of t)yield[i,o[i],e[i]]},validator:e=>Ve(e)||`Expected an object, but received: ${Ue(e)}`,coercer:e=>Ve(e)?{...e}:e})}function rt(e){const t=e.map((e=>e.type)).join(" | ");return new Ze({type:"union",schema:null,coercer(t,o){for(const i of e){const[e,n]=i.validate(t,{coerce:!0,mask:o.mask});if(!e)return n}return t},validator(o,i){const n=[];for(const t of e){const[...e]=Ke(o,t,i),[r]=e;if(!r[0])return[];for(const[t]of e)t&&n.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${Ue(o)}`,...n]}})}function at(e){const t=e.language||"en";return e.translationMetadata.translations[t]&&e.translationMetadata.translations[t].isRTL||!1}const st={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},lt=(e,t)=>st[e]-st[t],ct="unavailable",ut="unknown",dt=[ct,ut,"off"];function ht(e){const t=(o=e.entity_id).substr(0,o.indexOf("."));var o;const i=e.state;if(["button","input_button","scene"].includes(t))return i!==ct;if(dt.includes(i))return!1;switch(t){case"cover":case"valve":return!["closed","closing"].includes(i);case"device_tracker":case"person":return"not_home"!==i;case"media_player":return"standby"!==i;case"vacuum":return!["idle","docked","paused"].includes(i);case"plant":return"problem"===i;default:return!0}}function pt(e){return e.state!==ct}var mt=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function _t(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(i=e[o],n=t[o],!(i===n||mt(i)&&mt(n)))return!1;var i,n;return!0}function gt(e,t){void 0===t&&(t=_t);var o=null;function i(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];if(o&&o.lastThis===this&&t(i,o.lastArgs))return o.lastResult;var r=e.apply(this,i);return o={lastResult:r,lastArgs:i,lastThis:this},r}return i.clear=function(){o=null},i}gt((e=>new Intl.Collator(e))),gt((e=>new Intl.Collator(e,{sensitivity:"accent"})));const ft=(e,t)=>{const o=(()=>{const e=document.body;if(e.querySelector("action-handler"))return e.querySelector("action-handler");const t=document.createElement("action-handler");return e.appendChild(t),t})();o&&o.bind(e,t)},bt=xe(class extends ze{update(e,[t]){return ft(e.element,t),Y}render(e){}});function vt(e){return void 0!==e&&"none"!==e.action}const yt=et({user:it()}),wt=rt([Ye(),et({text:tt(it()),excemptions:tt(Xe(yt))})]),kt=et({action:Qe("url"),url_path:it(),confirmation:tt(wt)}),xt=et({action:Je(["call-service","perform-action"]),service:tt(it()),perform_action:tt(it()),service_data:tt(et()),data:tt(et()),target:tt(et({entity_id:tt(rt([it(),Xe(it())])),device_id:tt(rt([it(),Xe(it())])),area_id:tt(rt([it(),Xe(it())])),floor_id:tt(rt([it(),Xe(it())])),label_id:tt(rt([it(),Xe(it())]))})),confirmation:tt(wt)}),zt=et({action:Qe("navigate"),navigation_path:it(),confirmation:tt(wt)}),Et=nt({action:Qe("assist"),pipeline_id:tt(it()),start_listening:tt(Ye())}),Ct=nt({action:Qe("fire-dom-event")}),At=et({action:Je(["none","toggle","more-info","call-service","perform-action","url","navigate","assist"]),confirmation:tt(wt)}),Mt=function(e){return new Ze({type:"dynamic",schema:null,*entries(t,o){const i=e(t,o);yield*i.entries(t,o)},validator:(t,o)=>e(t,o).validator(t,o),coercer:(t,o)=>e(t,o).coercer(t,o),refiner:(t,o)=>e(t,o).refiner(t,o)})}((e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":case"perform-action":return xt;case"fire-dom-event":return Ct;case"navigate":return zt;case"url":return kt;case"assist":return Et}return At})),St=h`
  #sortable a:nth-of-type(2n) paper-icon-item {
    animation-name: keyframes1;
    animation-iteration-count: infinite;
    transform-origin: 50% 10%;
    animation-delay: -0.75s;
    animation-duration: 0.25s;
  }

  #sortable a:nth-of-type(2n-1) paper-icon-item {
    animation-name: keyframes2;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 30% 5%;
    animation-delay: -0.5s;
    animation-duration: 0.33s;
  }

  #sortable a {
    height: 48px;
    display: flex;
  }

  #sortable {
    outline: none;
    display: block !important;
  }

  .hidden-panel {
    display: flex !important;
  }

  .sortable-fallback {
    display: none;
  }

  .sortable-ghost {
    opacity: 0.4;
  }

  .sortable-fallback {
    opacity: 0;
  }

  @keyframes keyframes1 {
    0% {
      transform: rotate(-1deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(1.5deg);
      animation-timing-function: ease-out;
    }
  }

  @keyframes keyframes2 {
    0% {
      transform: rotate(1deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(-1.5deg);
      animation-timing-function: ease-out;
    }
  }

  .show-panel,
  .hide-panel {
    display: none;
    position: absolute;
    top: 0;
    right: 4px;
    --mdc-icon-button-size: 40px;
  }

  :host([rtl]) .show-panel {
    right: initial;
    left: 4px;
  }

  .hide-panel {
    top: 4px;
    right: 8px;
  }

  :host([rtl]) .hide-panel {
    right: initial;
    left: 8px;
  }

  :host([expanded]) .hide-panel {
    display: block;
  }

  :host([expanded]) .show-panel {
    display: inline-flex;
  }

  paper-icon-item.hidden-panel,
  paper-icon-item.hidden-panel span,
  paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
    color: var(--secondary-text-color);
    cursor: pointer;
  }
`;async function $t(e,t){if(!customElements.get(e))try{await t()}catch(t){console.warn(`Failed to dynamically import module for ${e}:`,t)}}function Tt(e){return e.show_mode_buttons??!e.disable_all_buttons}function Pt(e){return{layout:e.layout??jt(e),fill_container:e.fill_container??!1,primary_info:e.primary_info??It(e),secondary_info:e.secondary_info??Dt(e),icon_type:e.icon_type??Ot(e)}}function jt(e){return e.vertical?"vertical":"default"}function Ot(e){return e.hide_icon?"none":e.use_entity_picture||e.use_media_artwork?"entity-picture":"icon"}function It(e){return e.hide_name?"none":"name"}function Dt(e){return e.hide_state?"none":"state"}function Ht(e,t){var o=t&&t.cache?t.cache:Zt,i=t&&t.serializer?t.serializer:Gt;return(t&&t.strategy?t.strategy:Rt)(e,{cache:o,serializer:i})}function Nt(e,t,o,i){var n,r=null==(n=i)||"number"==typeof n||"boolean"==typeof n?i:o(i),a=t.get(r);return void 0===a&&(a=e.call(this,i),t.set(r,a)),a}function Bt(e,t,o){var i=Array.prototype.slice.call(arguments,3),n=o(i),r=t.get(n);return void 0===r&&(r=e.apply(this,i),t.set(n,r)),r}function Lt(e,t,o,i,n){return o.bind(t,e,i,n)}function Rt(e,t){return Lt(e,this,1===e.length?Nt:Bt,t.cache.create(),t.serializer)}et({features:tt(Xe(qe("any",(()=>!0)))),colors:tt(ot(it(),it())),collapsible_controls:tt(Ye()),show_current_as_primary:tt(Ye()),show_secondary:tt(Ye()),disable_buttons:tt(Ye()),show_mode_buttons:tt(Ye()),disable_all_buttons:tt(Ye()),disable_menu:tt(Ye()),prevent_interaction_on_scroll:tt(Ye()),disable_eco:tt(Ye()),disable_humidity:tt(Ye()),disable_presets:tt(Ye()),show_all_presets:tt(Ye()),disable_battery_warning:tt(Ye()),disable_connection_lost_warning:tt(Ye()),disable_degraded_warning:tt(Ye()),low_battery_threshold:tt(qe("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${Ue(e)}`))),debug_battery:tt(Ye()),debug_connection:tt(Ye()),debug_degraded:tt(Ye()),window_sensor:tt(it()),humidity_sensor:tt(it()),preset_entity:tt(it()),connectivity_entity:tt(it()),preset_options:tt(ot(it(),et({hidden:tt(Ye()),icon:tt(it())}))),preset_order:tt(Xe(it()))});var Vt,Ut,Ft,Gt=function(){return JSON.stringify(arguments)},Kt=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(e){return this.cache[e]},e.prototype.set=function(e,t){this.cache[e]=t},e}(),Zt={create:function(){return new Kt}},Wt={variadic:function(e,t){return Lt(e,this,Bt,t.cache.create(),t.serializer)}};function qt(e){return e.type===Ut.literal}function Xt(e){return e.type===Ut.argument}function Yt(e){return e.type===Ut.number}function Jt(e){return e.type===Ut.date}function Qt(e){return e.type===Ut.time}function eo(e){return e.type===Ut.select}function to(e){return e.type===Ut.plural}function oo(e){return e.type===Ut.pound}function io(e){return e.type===Ut.tag}function no(e){return!(!e||"object"!=typeof e||e.type!==Ft.number)}function ro(e){return!(!e||"object"!=typeof e||e.type!==Ft.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(Vt||(Vt={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(Ut||(Ut={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(Ft||(Ft={}));var ao=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,so=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function lo(e){var t={};return e.replace(so,(function(e){var o=e.length;switch(e[0]){case"G":t.era=4===o?"long":5===o?"narrow":"short";break;case"y":t.year=2===o?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][o-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][o-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=4===o?"long":5===o?"narrow":"short";break;case"e":if(o<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][o-4];break;case"c":if(o<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][o-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][o-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][o-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][o-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][o-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][o-1];break;case"s":t.second=["numeric","2-digit"][o-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=o<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var co=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;var uo=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,ho=/^(@+)?(\+|#+)?[rs]?$/g,po=/(\*)(0+)|(#+)(0+)|(0+)/g,mo=/^(0+)$/;function _o(e){var t={};return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(ho,(function(e,o,i){return"string"!=typeof i?(t.minimumSignificantDigits=o.length,t.maximumSignificantDigits=o.length):"+"===i?t.minimumSignificantDigits=o.length:"#"===o[0]?t.maximumSignificantDigits=o.length:(t.minimumSignificantDigits=o.length,t.maximumSignificantDigits=o.length+("string"==typeof i?i.length:0)),""})),t}function go(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function fo(e){var t;if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var o=e.slice(0,2);if("+!"===o?(t.signDisplay="always",e=e.slice(2)):"+?"===o&&(t.signDisplay="exceptZero",e=e.slice(2)),!mo.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function bo(e){var t=go(e);return t||{}}function vo(e){for(var t={},o=0,n=e;o<n.length;o++){var r=n[o];switch(r.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=r.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=r.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=i(i(i({},t),{notation:"scientific"}),r.options.reduce((function(e,t){return i(i({},e),bo(t))}),{}));continue;case"engineering":t=i(i(i({},t),{notation:"engineering"}),r.options.reduce((function(e,t){return i(i({},e),bo(t))}),{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(r.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(po,(function(e,o,i,n,r,a){if(o)t.minimumIntegerDigits=i.length;else{if(n&&r)throw new Error("We currently do not support maximum integer digits");if(a)throw new Error("We currently do not support exact integer digits")}return""}));continue}if(mo.test(r.stem))t.minimumIntegerDigits=r.stem.length;else if(uo.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(uo,(function(e,o,i,n,r,a){return"*"===i?t.minimumFractionDigits=o.length:n&&"#"===n[0]?t.maximumFractionDigits=n.length:r&&a?(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length+a.length):(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length),""}));var a=r.options[0];"w"===a?t=i(i({},t),{trailingZeroDisplay:"stripIfInteger"}):a&&(t=i(i({},t),_o(a)))}else if(ho.test(r.stem))t=i(i({},t),_o(r.stem));else{var s=go(r.stem);s&&(t=i(i({},t),s));var l=fo(r.stem);l&&(t=i(i({},t),l))}}return t}var yo,wo={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function ko(e){var t=e.hourCycle;if(void 0===t&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var o,i=e.language;return"root"!==i&&(o=e.maximize().region),(wo[o||""]||wo[i||""]||wo["".concat(i,"-001")]||wo["001"])[0]}var xo=new RegExp("^".concat(ao.source,"*")),zo=new RegExp("".concat(ao.source,"*$"));function Eo(e,t){return{start:e,end:t}}var Co=!!String.prototype.startsWith&&"_a".startsWith("a",1),Ao=!!String.fromCodePoint,Mo=!!Object.fromEntries,So=!!String.prototype.codePointAt,$o=!!String.prototype.trimStart,To=!!String.prototype.trimEnd,Po=!!Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},jo=!0;try{jo="a"===(null===(yo=Ro("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===yo?void 0:yo[0])}catch(U){jo=!1}var Oo,Io=Co?function(e,t,o){return e.startsWith(t,o)}:function(e,t,o){return e.slice(o,o+t.length)===t},Do=Ao?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var o,i="",n=e.length,r=0;n>r;){if((o=e[r++])>1114111)throw RangeError(o+" is not a valid code point");i+=o<65536?String.fromCharCode(o):String.fromCharCode(55296+((o-=65536)>>10),o%1024+56320)}return i},Ho=Mo?Object.fromEntries:function(e){for(var t={},o=0,i=e;o<i.length;o++){var n=i[o],r=n[0],a=n[1];t[r]=a}return t},No=So?function(e,t){return e.codePointAt(t)}:function(e,t){var o=e.length;if(!(t<0||t>=o)){var i,n=e.charCodeAt(t);return n<55296||n>56319||t+1===o||(i=e.charCodeAt(t+1))<56320||i>57343?n:i-56320+(n-55296<<10)+65536}},Bo=$o?function(e){return e.trimStart()}:function(e){return e.replace(xo,"")},Lo=To?function(e){return e.trimEnd()}:function(e){return e.replace(zo,"")};function Ro(e,t){return new RegExp(e,t)}if(jo){var Vo=Ro("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Oo=function(e,t){var o;return Vo.lastIndex=t,null!==(o=Vo.exec(e)[1])&&void 0!==o?o:""}}else Oo=function(e,t){for(var o=[];;){var i=No(e,t);if(void 0===i||Zo(i)||Wo(i))break;o.push(i),t+=i>=65536?2:1}return Do.apply(void 0,o)};var Uo,Fo=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,o){for(var i=[];!this.isEOF();){var n=this.char();if(123===n){if((r=this.parseArgument(e,o)).err)return r;i.push(r.val)}else{if(125===n&&e>0)break;if(35!==n||"plural"!==t&&"selectordinal"!==t){if(60===n&&!this.ignoreTag&&47===this.peek()){if(o)break;return this.error(Vt.UNMATCHED_CLOSING_TAG,Eo(this.clonePosition(),this.clonePosition()))}if(60===n&&!this.ignoreTag&&Go(this.peek()||0)){if((r=this.parseTag(e,t)).err)return r;i.push(r.val)}else{var r;if((r=this.parseLiteral(e,t)).err)return r;i.push(r.val)}}else{var a=this.clonePosition();this.bump(),i.push({type:Ut.pound,location:Eo(a,this.clonePosition())})}}}return{val:i,err:null}},e.prototype.parseTag=function(e,t){var o=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ut.literal,value:"<".concat(i,"/>"),location:Eo(o,this.clonePosition())},err:null};if(this.bumpIf(">")){var n=this.parseMessage(e+1,t,!0);if(n.err)return n;var r=n.val,a=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Go(this.char()))return this.error(Vt.INVALID_TAG,Eo(a,this.clonePosition()));var s=this.clonePosition();return i!==this.parseTagName()?this.error(Vt.UNMATCHED_CLOSING_TAG,Eo(s,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ut.tag,value:i,children:r,location:Eo(o,this.clonePosition())},err:null}:this.error(Vt.INVALID_TAG,Eo(a,this.clonePosition())))}return this.error(Vt.UNCLOSED_TAG,Eo(o,this.clonePosition()))}return this.error(Vt.INVALID_TAG,Eo(o,this.clonePosition()))},e.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&Ko(this.char());)this.bump();return this.message.slice(e,this.offset())},e.prototype.parseLiteral=function(e,t){for(var o=this.clonePosition(),i="";;){var n=this.tryParseQuote(t);if(n)i+=n;else{var r=this.tryParseUnquoted(e,t);if(r)i+=r;else{var a=this.tryParseLeftAngleBracket();if(!a)break;i+=a}}}var s=Eo(o,this.clonePosition());return{val:{type:Ut.literal,value:i,location:s},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(Go(e=this.peek()||0)||47===e)?null:(this.bump(),"<");var e},e.prototype.tryParseQuote=function(e){if(this.isEOF()||39!==this.char())return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===e||"selectordinal"===e)break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var o=this.char();if(39===o){if(39!==this.peek()){this.bump();break}t.push(39),this.bump()}else t.push(o);this.bump()}return Do.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var o=this.char();return 60===o||123===o||35===o&&("plural"===t||"selectordinal"===t)||125===o&&e>0?null:(this.bump(),Do(o))},e.prototype.parseArgument=function(e,t){var o=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Vt.EXPECT_ARGUMENT_CLOSING_BRACE,Eo(o,this.clonePosition()));if(125===this.char())return this.bump(),this.error(Vt.EMPTY_ARGUMENT,Eo(o,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(Vt.MALFORMED_ARGUMENT,Eo(o,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Vt.EXPECT_ARGUMENT_CLOSING_BRACE,Eo(o,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ut.argument,value:i,location:Eo(o,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Vt.EXPECT_ARGUMENT_CLOSING_BRACE,Eo(o,this.clonePosition())):this.parseArgumentOptions(e,t,i,o);default:return this.error(Vt.MALFORMED_ARGUMENT,Eo(o,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),o=Oo(this.message,t),i=t+o.length;return this.bumpTo(i),{value:o,location:Eo(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,o,n){var r,a=this.clonePosition(),s=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(s){case"":return this.error(Vt.EXPECT_ARGUMENT_TYPE,Eo(a,l));case"number":case"date":case"time":this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition();if((b=this.parseSimpleArgStyleIfPossible()).err)return b;if(0===(m=Lo(b.val)).length)return this.error(Vt.EXPECT_ARGUMENT_STYLE,Eo(this.clonePosition(),this.clonePosition()));c={style:m,styleLocation:Eo(u,this.clonePosition())}}if((v=this.tryParseArgumentClose(n)).err)return v;var d=Eo(n,this.clonePosition());if(c&&Io(null==c?void 0:c.style,"::",0)){var h=Bo(c.style.slice(2));if("number"===s)return(b=this.parseNumberSkeletonFromString(h,c.styleLocation)).err?b:{val:{type:Ut.number,value:o,location:d,style:b.val},err:null};if(0===h.length)return this.error(Vt.EXPECT_DATE_TIME_SKELETON,d);var p=h;this.locale&&(p=function(e,t){for(var o="",i=0;i<e.length;i++){var n=e.charAt(i);if("j"===n){for(var r=0;i+1<e.length&&e.charAt(i+1)===n;)r++,i++;var a=1+(1&r),s=r<2?1:3+(r>>1),l=ko(t);for("H"!=l&&"k"!=l||(s=0);s-- >0;)o+="a";for(;a-- >0;)o=l+o}else o+="J"===n?"H":n}return o}(h,this.locale));var m={type:Ft.dateTime,pattern:p,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?lo(p):{}};return{val:{type:"date"===s?Ut.date:Ut.time,value:o,location:d,style:m},err:null}}return{val:{type:"number"===s?Ut.number:"date"===s?Ut.date:Ut.time,value:o,location:d,style:null!==(r=null==c?void 0:c.style)&&void 0!==r?r:null},err:null};case"plural":case"selectordinal":case"select":var _=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Vt.EXPECT_SELECT_ARGUMENT_OPTIONS,Eo(_,i({},_)));this.bumpSpace();var g=this.parseIdentifierIfPossible(),f=0;if("select"!==s&&"offset"===g.value){if(!this.bumpIf(":"))return this.error(Vt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Eo(this.clonePosition(),this.clonePosition()));var b;if(this.bumpSpace(),(b=this.tryParseDecimalInteger(Vt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Vt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return b;this.bumpSpace(),g=this.parseIdentifierIfPossible(),f=b.val}var v,y=this.tryParsePluralOrSelectOptions(e,s,t,g);if(y.err)return y;if((v=this.tryParseArgumentClose(n)).err)return v;var w=Eo(n,this.clonePosition());return"select"===s?{val:{type:Ut.select,value:o,options:Ho(y.val),location:w},err:null}:{val:{type:Ut.plural,value:o,options:Ho(y.val),offset:f,pluralType:"plural"===s?"cardinal":"ordinal",location:w},err:null};default:return this.error(Vt.INVALID_ARGUMENT_TYPE,Eo(a,l))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(Vt.EXPECT_ARGUMENT_CLOSING_BRACE,Eo(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();){switch(this.char()){case 39:this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Vt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Eo(o,this.clonePosition()));this.bump();break;case 123:e+=1,this.bump();break;case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null};e-=1;break;default:this.bump()}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var o=[];try{o=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty");for(var t=e.split(co).filter((function(e){return e.length>0})),o=[],i=0,n=t;i<n.length;i++){var r=n[i].split("/");if(0===r.length)throw new Error("Invalid number skeleton");for(var a=r[0],s=r.slice(1),l=0,c=s;l<c.length;l++)if(0===c[l].length)throw new Error("Invalid number skeleton");o.push({stem:a,options:s})}return o}(e)}catch(e){return this.error(Vt.INVALID_NUMBER_SKELETON,t)}return{val:{type:Ft.number,tokens:o,location:t,parsedOptions:this.shouldParseSkeletons?vo(o):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,o,i){for(var n,r=!1,a=[],s=new Set,l=i.value,c=i.location;;){if(0===l.length){var u=this.clonePosition();if("select"===t||!this.bumpIf("="))break;var d=this.tryParseDecimalInteger(Vt.EXPECT_PLURAL_ARGUMENT_SELECTOR,Vt.INVALID_PLURAL_ARGUMENT_SELECTOR);if(d.err)return d;c=Eo(u,this.clonePosition()),l=this.message.slice(u.offset,this.offset())}if(s.has(l))return this.error("select"===t?Vt.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Vt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,c);"other"===l&&(r=!0),this.bumpSpace();var h=this.clonePosition();if(!this.bumpIf("{"))return this.error("select"===t?Vt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Vt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Eo(this.clonePosition(),this.clonePosition()));var p=this.parseMessage(e+1,t,o);if(p.err)return p;var m=this.tryParseArgumentClose(h);if(m.err)return m;a.push([l,{value:p.val,location:Eo(h,this.clonePosition())}]),s.add(l),this.bumpSpace(),l=(n=this.parseIdentifierIfPossible()).value,c=n.location}return 0===a.length?this.error("select"===t?Vt.EXPECT_SELECT_ARGUMENT_SELECTOR:Vt.EXPECT_PLURAL_ARGUMENT_SELECTOR,Eo(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!r?this.error(Vt.MISSING_OTHER_CLAUSE,Eo(this.clonePosition(),this.clonePosition())):{val:a,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var o=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(o=-1);for(var n=!1,r=0;!this.isEOF();){var a=this.char();if(!(a>=48&&a<=57))break;n=!0,r=10*r+(a-48),this.bump()}var s=Eo(i,this.clonePosition());return n?Po(r*=o)?{val:r,err:null}:this.error(t,s):this.error(e,s)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=No(this.message,e);if(void 0===t)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var e=this.char();10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},e.prototype.bumpIf=function(e){if(Io(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(e){var t=this.offset(),o=this.message.indexOf(e,t);return o>=0?(this.bumpTo(o),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Zo(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),o=this.message.charCodeAt(t+(e>=65536?2:1));return null!=o?o:null},e}();function Go(e){return e>=97&&e<=122||e>=65&&e<=90}function Ko(e){return 45===e||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Zo(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function Wo(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function qo(e){e.forEach((function(e){if(delete e.location,eo(e)||to(e))for(var t in e.options)delete e.options[t].location,qo(e.options[t].value);else Yt(e)&&no(e.style)||(Jt(e)||Qt(e))&&ro(e.style)?delete e.style.location:io(e)&&qo(e.children)}))}function Xo(e,t){void 0===t&&(t={}),t=i({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var o=new Fo(e,t).parse();if(o.err){var n=SyntaxError(Vt[o.err.kind]);throw n.location=o.err.location,n.originalMessage=o.err.message,n}return(null==t?void 0:t.captureLocation)||qo(o.val),o.val}!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(Uo||(Uo={}));var Yo,Jo=function(e){function t(t,o,i){var n=e.call(this,t)||this;return n.code=o,n.originalMessage=i,n}return o(t,e),t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),Qo=function(e){function t(t,o,i,n){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(o,'". Options are "').concat(Object.keys(i).join('", "'),'"'),Uo.INVALID_VALUE,n)||this}return o(t,e),t}(Jo),ei=function(e){function t(t,o,i){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(o),Uo.INVALID_VALUE,i)||this}return o(t,e),t}(Jo),ti=function(e){function t(t,o){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(o,'"'),Uo.MISSING_VALUE,o)||this}return o(t,e),t}(Jo);function oi(e){return"function"==typeof e}function ii(e,t,o,i,n,r,a){if(1===e.length&&qt(e[0]))return[{type:Yo.literal,value:e[0].value}];for(var s=[],l=0,c=e;l<c.length;l++){var u=c[l];if(qt(u))s.push({type:Yo.literal,value:u.value});else if(oo(u))"number"==typeof r&&s.push({type:Yo.literal,value:o.getNumberFormat(t).format(r)});else{var d=u.value;if(!n||!(d in n))throw new ti(d,a);var h=n[d];if(Xt(u))h&&"string"!=typeof h&&"number"!=typeof h||(h="string"==typeof h||"number"==typeof h?String(h):""),s.push({type:"string"==typeof h?Yo.literal:Yo.object,value:h});else if(Jt(u)){var p="string"==typeof u.style?i.date[u.style]:ro(u.style)?u.style.parsedOptions:void 0;s.push({type:Yo.literal,value:o.getDateTimeFormat(t,p).format(h)})}else if(Qt(u)){p="string"==typeof u.style?i.time[u.style]:ro(u.style)?u.style.parsedOptions:i.time.medium;s.push({type:Yo.literal,value:o.getDateTimeFormat(t,p).format(h)})}else if(Yt(u)){(p="string"==typeof u.style?i.number[u.style]:no(u.style)?u.style.parsedOptions:void 0)&&p.scale&&(h*=p.scale||1),s.push({type:Yo.literal,value:o.getNumberFormat(t,p).format(h)})}else{if(io(u)){var m=u.children,_=u.value,g=n[_];if(!oi(g))throw new ei(_,"function",a);var f=g(ii(m,t,o,i,n,r).map((function(e){return e.value})));Array.isArray(f)||(f=[f]),s.push.apply(s,f.map((function(e){return{type:"string"==typeof e?Yo.literal:Yo.object,value:e}})))}if(eo(u)){if(!(b=u.options[h]||u.options.other))throw new Qo(u.value,h,Object.keys(u.options),a);s.push.apply(s,ii(b.value,t,o,i,n))}else if(to(u)){var b;if(!(b=u.options["=".concat(h)])){if(!Intl.PluralRules)throw new Jo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',Uo.MISSING_INTL_API,a);var v=o.getPluralRules(t,{type:u.pluralType}).select(h-(u.offset||0));b=u.options[v]||u.options.other}if(!b)throw new Qo(u.value,h,Object.keys(u.options),a);s.push.apply(s,ii(b.value,t,o,i,n,h-(u.offset||0)))}else;}}}return function(e){return e.length<2?e:e.reduce((function(e,t){var o=e[e.length-1];return o&&o.type===Yo.literal&&t.type===Yo.literal?o.value+=t.value:e.push(t),e}),[])}(s)}function ni(e,t){return t?Object.keys(e).reduce((function(o,n){var r,a;return o[n]=(r=e[n],(a=t[n])?i(i(i({},r||{}),a||{}),Object.keys(r).reduce((function(e,t){return e[t]=i(i({},r[t]),a[t]||{}),e}),{})):r),o}),i({},e)):e}function ri(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,o){e[t]=o}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(Yo||(Yo={}));var ai=function(){function e(t,o,n,a){void 0===o&&(o=e.defaultLocale);var s,l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=l.formatToParts(e);if(1===t.length)return t[0].value;var o=t.reduce((function(e,t){return e.length&&t.type===Yo.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[]);return o.length<=1?o[0]||"":o},this.formatToParts=function(e){return ii(l.ast,l.locales,l.formatters,l.formats,e,void 0,l.message)},this.resolvedOptions=function(){var e;return{locale:(null===(e=l.resolvedLocale)||void 0===e?void 0:e.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=o,this.resolvedLocale=e.resolveLocale(o),"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var c=a||{};c.formatters;var u=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(c,["formatters"]);this.ast=e.__parse(t,i(i({},u),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=ni(e.formats,n),this.formatters=a&&a.formatters||(void 0===(s=this.formatterCache)&&(s={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ht((function(){for(var e,t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return new((e=Intl.NumberFormat).bind.apply(e,r([void 0],t,!1)))}),{cache:ri(s.number),strategy:Wt.variadic}),getDateTimeFormat:Ht((function(){for(var e,t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return new((e=Intl.DateTimeFormat).bind.apply(e,r([void 0],t,!1)))}),{cache:ri(s.dateTime),strategy:Wt.variadic}),getPluralRules:Ht((function(){for(var e,t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return new((e=Intl.PluralRules).bind.apply(e,r([void 0],t,!1)))}),{cache:ri(s.pluralRules),strategy:Wt.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(e){if(void 0!==Intl.Locale){var t=Intl.NumberFormat.supportedLocalesOf(e);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale("string"==typeof e?e:e[0])}},e.__parse=Xo,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),si={not_found:"لم يتم العثور على الكيان"},li={card:{chips:{alignment:"محاذاة"},climate:{hvac_modes:"أوضاع HVAC",show_temperature_control:"التحكم في درجة الحرارة؟"},cover:{show_buttons_control:"أزرار التحكم؟",show_position_control:"التحكم في الموقع؟",show_tilt_position_control:"التحكم في الإمالة؟"},empty:{no_config_options:"لا تحتوي هذه البطاقة على خيارات التكوين."},fan:{show_direction_control:"التحكم بالإتجاه؟",show_oscillate_control:"التحكم في التذبذب؟",show_percentage_control:"التحكم في النسبة المئوية؟"},generic:{collapsible_controls:"تصغير عناصر التحكم عند الإيقاف",color:"اللون",content_info:"المحتوى",fill_container:"ملئ الحاوية",icon_animation:"تحريك الرمز عندما يكون نشطًا؟",icon_color:"لون الأيقونة",icon_type:"نوع الأيقونة",layout:"التخطيط",primary_info:"المعلومات الأساسية",secondary_info:"المعلومات الفرعية",use_entity_picture:"استخدم صورة الكيان؟"},humidifier:{show_target_humidity_control:"التحكم في الرطوبة؟?"},light:{incompatible_controls:"قد لا يتم عرض بعض عناصر التحكم إذا كان الضوء الخاص بك لا يدعم الميزة.",show_brightness_control:"التحكم في السطوع؟",show_color_control:"التحكم في اللون؟",show_color_temp_control:"التحكم في درجة حرارة اللون؟",use_light_color:"استخدم لون فاتح"},lock:{lock:"مقفل",open:"مفتوح",unlock:"إلغاء قفل"},"media-player":{media_controls:"التحكم في الوسائط",media_controls_list:{next:"التالي",on_off:"تشغيل/إيقاف",play_pause_stop:"تشغيل/إيقاف مؤقت/إيقاف",previous:"السابق",repeat:"وضع التكرار",shuffle:"خلط"},show_volume_level:"إظهار مستوى الصوت",use_media_artwork:"استخدم صورة الوسائط",use_media_info:"استخدم معلومات الوسائط",volume_controls:"التحكم في الصوت",volume_controls_list:{volume_buttons:"أزرار الصوت",volume_mute:"كتم",volume_set:"مستوى الصوت"}},number:{display_mode:"وضع العرض",display_mode_list:{buttons:"الأزرار",default:"الافتراضي(سحب)",slider:"سحب"}},template:{badge_color:"لون الشارة",badge_icon:"أيقونة الشارة",content:"المحتوى",entity_extra:"تستخدم في القوالب والإجراءات",label:"التسمية",multiline_secondary:"متعدد الأسطر الثانوية؟",picture:"صورة (ستحل محل الأيقونة)",primary:"المعلومات الأساسية",secondary:"المعلومات الثانوية"},title:{subtitle:"العنوان الفرعي",subtitle_tap_action:"إجراء النقر على العنوان الفرعي",title:"العنوان",title_tap_action:"إجراء النقر على العنوان"},update:{show_buttons_control:"أزرار التحكم؟"},vacuum:{commands:"الاوامر",commands_list:{on_off:"تشغيل/إيقاف"}},weather:{show_conditions:"الأحوال الجوية؟",show_temperature:"الطقس؟"}},chip:{"chip-picker":{add:"أضف رقاقة",chips:"رقاقات",clear:"مسح",edit:"تعديل",select:"اختر الرقاقة",types:{action:"إجراء","alarm-control-panel":"تنبيه",back:"رجوع",conditional:"مشروط",entity:"الكيان",light:"مظيء",menu:"القائمة",quickbar:"تبويب سريع",spacer:"مساحة",template:"قالب",weather:"الطقس"}},conditional:{chip:"رقاقة"},sub_element_editor:{title:"محرر الرقاقة"}},form:{alignment_picker:{values:{center:"توسيط",default:"المحاذاة الافتراضية",end:"نهاية",justify:"مساواة",start:"بداية"}},color_picker:{values:{default:"اللون الإفتراضي"}},icon_type_picker:{values:{default:"النوع افتراضي","entity-picture":"صورة الكيان",icon:"أيقونة",none:"لا شئ"}},info_picker:{values:{default:"المعلومات الافتراضية","last-changed":"آخر تغيير","last-updated":"آخر تحديث",name:"الإسم",none:"لا شئ",state:"الحالة"}},layout_picker:{values:{default:"تخطيط افتراضي",horizontal:"تخطيط أفقي",vertical:"تخطيط رأسي"}}}},ci={card:si,editor:li},ui=Object.freeze({__proto__:null,card:si,default:ci,editor:li}),di={card:{chips:{alignment:"Подравняване"},climate:{hvac_modes:"HVAC Режими",show_temperature_control:"Контрол на температурата?"},cover:{show_buttons_control:"Контролни бутони?",show_position_control:"Контрол на позицията?",show_tilt_position_control:"Контрол на наклона?"},fan:{show_oscillate_control:"Контрол на трептенето?",show_percentage_control:"Процентов контрол?"},generic:{collapsible_controls:"Свий контролите при изключен",content_info:"Съдържание",fill_container:"Изпълване на контейнера",icon_animation:"Анимирай иконата при активен?",icon_color:"Цвят на икона",icon_type:"Тип на икона",layout:"Оформление",primary_info:"Първостепенна информация",secondary_info:"Второстепенна информация",use_entity_picture:"Използвай снимката на обекта?"},humidifier:{show_target_humidity_control:"Контрол на влажността?"},light:{incompatible_controls:"Някои опции могат да бъдат скрити при условие че осветителното тяло не поддържа фунцията.",show_brightness_control:"Контрол на яркостта?",show_color_control:"Контрол на цвета?",show_color_temp_control:"Контрол на температурата?",use_light_color:"Използвай цвета на светлината"},lock:{lock:"Заключен",open:"Отворен",unlock:"Отключен"},"media-player":{media_controls:"Контрол на Медиата",media_controls_list:{next:"Следващ",on_off:"Вкл./Изкл.",play_pause_stop:"Пусни/пауза/стоп",previous:"Предишен",repeat:"Повтаряне",shuffle:"Разбъркано"},show_volume_level:"Покажи контрола за звук",use_media_artwork:"Използвай визуалните детайли от медията",use_media_info:"Използвай информация от медията",volume_controls:"Контрол на звука",volume_controls_list:{volume_buttons:"Бутони за звук",volume_mute:"Заглуши",volume_set:"Ниво на звука"}},template:{badge_color:"Цвят на значка",badge_icon:"Икона на значка",content:"Съдържание",entity_extra:"Използван в шаблони и действия",multiline_secondary:"Много-редова второстепенна информация?",picture:"Картина (ще замени иконата)",primary:"Първостепенна информация",secondary:"Второстепенна информация"},title:{subtitle:"Подзаглавие",title:"Заглавие"},update:{show_buttons_control:"Контролни бутони?"},vacuum:{commands:"Конади",commands_list:{on_off:"Вкл./Изкл."}},weather:{show_conditions:"Условия?",show_temperature:"Температура?"}},chip:{"chip-picker":{add:"Добави чип",chips:"Чипове",clear:"Изчисти",edit:"Редактирай",select:"Избери чип",types:{action:"Действия","alarm-control-panel":"Аларма",back:"Назад",conditional:"Условни",entity:"Обект",light:"Осветление",menu:"Меню",template:"Шаблон",weather:"Време"}},conditional:{chip:"Чип"},sub_element_editor:{title:"Чип редактор"}},form:{alignment_picker:{values:{center:"Център",default:"Основно подравняване",end:"Край",justify:"Подравнен",start:"Старт"}},color_picker:{values:{default:"Основен цвят"}},icon_type_picker:{values:{default:"Основен тип","entity-picture":"Картина на обекта",icon:"Икона",none:"Липсва"}},info_picker:{values:{default:"Основна информация","last-changed":"Последно Променен","last-updated":"Последно Актуализиран",name:"Име",none:"Липсва",state:"Състояние"}},layout_picker:{values:{default:"Основно оформление",horizontal:"Хоризонтално оформление",vertical:"Вертикално оформление"}}}},hi={editor:di},pi=Object.freeze({__proto__:null,default:hi,editor:di}),mi={not_found:"No s'ha trobat l'entitat"},_i={card:{chips:{alignment:"Alineació"},climate:{hvac_modes:"Modes HVAC",show_temperature_control:"Control de temperatura?"},cover:{show_buttons_control:"Botons de control?",show_position_control:"Control de posició?",show_tilt_position_control:"Control d'inclinació?"},fan:{show_oscillate_control:"Control d'oscil·lació?",show_percentage_control:"Control de percentatge?"},generic:{collapsible_controls:"Amaga els controls en desactivar",color:"Color",content_info:"Contingut",fill_container:"Emplena el contenidor",icon_animation:"Animar icona en activar?",icon_color:"Color d'icona",icon_type:"Tipus d'icona",layout:"Distribució",primary_info:"Informació primaria",secondary_info:"Informació secundaria",use_entity_picture:"Fer servir la imatge de l'entitat?"},humidifier:{show_target_humidity_control:"Control d'humitat?"},light:{incompatible_controls:"Alguns controls no es mostraran si l'entitat no suporta eixa funció.",show_brightness_control:"Control de brillantor?",show_color_control:"Control de color?",show_color_temp_control:"Control de la temperatura del color?",use_light_color:"Fes servir el color del llum"},lock:{lock:"Bloqueja",open:"Obri",unlock:"Desbloqueja"},"media-player":{media_controls:"Controls multimèdia",media_controls_list:{next:"Pista següent",on_off:"Engegar/Apagar",play_pause_stop:"Reproduïr/Pausar/Detindre",previous:"Pista anterior",repeat:"Mode de repetició",shuffle:"Mesclar"},show_volume_level:"Mostra el nivell de volum",use_media_artwork:"Fes servir l'art multimèdia",use_media_info:"Empra la informació multimèdia",volume_controls:"Controls de volum",volume_controls_list:{volume_buttons:"Botons de volum",volume_mute:"Silenci",volume_set:"Nivell de volum"}},number:{display_mode:"Mode de visualització",display_mode_list:{buttons:"Botons",default:"Per defecte (lliscant)",slider:"Lliscant"}},template:{badge_color:"Color de la insígnia",badge_icon:"Icona de la insígnia",content:"Contingut",entity_extra:"Utilitzats en plantilles i accions",label:"Etiqueta",multiline_secondary:"Secundaria en varies línies?",picture:"Imatge (reemplaçarà la icona)",primary:"Informació primaria",secondary:"Informació secundaria"},title:{subtitle:"Subtítol",subtitle_tap_action:"Acció en tocar el subtítol",title:"Títol",title_tap_action:"Acció en tocar el títol"},update:{show_buttons_control:"Botons de control?"},vacuum:{commands:"Comandaments",commands_list:{on_off:"Engegar/Apagar"}},weather:{show_conditions:"Condicions?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Afegir xip",chips:"Xips",clear:"Buidar",edit:"Editar",select:"Seleccionar chip",types:{action:"Acció","alarm-control-panel":"Alarma",back:"Tornar",conditional:"Condicional",entity:"Entitat",light:"Llum",menu:"Menú",spacer:"Espai",template:"Plantilla",weather:"Oratge"}},conditional:{chip:"Xip"},sub_element_editor:{title:"Editor de xips"}},form:{alignment_picker:{values:{center:"Centre",default:"Alineació per defecte",end:"Final",justify:"Justifica",start:"Inici"}},color_picker:{values:{default:"Color per defecte"}},icon_type_picker:{values:{default:"Tipus per defecte","entity-picture":"Entitat d'imatge",icon:"Icona",none:"Cap"}},info_picker:{values:{default:"Informació per defecte","last-changed":"Últim Canvi","last-updated":"Última Actualització",name:"Nom",none:"Cap",state:"Estat"}},layout_picker:{values:{default:"Distribució per defecte",horizontal:"Distribució horitzontal",vertical:"Distribució vertical"}}}},gi={card:mi,editor:_i},fi=Object.freeze({__proto__:null,card:mi,default:gi,editor:_i}),bi={not_found:"Entita nebyla nalezena"},vi={card:{chips:{alignment:"Zarovnání"},climate:{hvac_modes:"Režimy HVAC",show_temperature_control:"Ovládání teploty?"},cover:{show_buttons_control:"Zobrazit ovládací tlačítka?",show_position_control:"Zobrazit ovládání polohy?",show_tilt_position_control:"Zobrazit ovládání náklonu?"},fan:{show_oscillate_control:"Ovládání oscilaceM",show_percentage_control:"Ovládání v procentech?"},generic:{collapsible_controls:"Pokud je vypnuto, skrýt ovládací prvky",content_info:"Obsah",fill_container:"Vyplnit prostor",icon_animation:"Pokud je aktivní, animovat ikonu?",icon_color:"Barva ikony",icon_type:"Typ ikony",layout:"Rozložení",primary_info:"Primární informace",secondary_info:"Sekundární informace",use_entity_picture:"Použít ikonu entity?"},humidifier:{show_target_humidity_control:"Ovládání vlhkosti?"},light:{incompatible_controls:"Některé ovládací prvky se nemusí zobrazit, pokud vaše světlo tuto funkci nepodporuje.",show_brightness_control:"Ovládání jasu?",show_color_control:"Ovládání barvy světla?",show_color_temp_control:"Ovládání teploty světla?",use_light_color:"Ikona podle barvy světla?"},lock:{lock:"Zamčeno",open:"Otevřeno",unlock:"Odemčeno"},"media-player":{media_controls:"Ovládání médií",media_controls_list:{next:"Další stopa",on_off:"Zapnout/Vypnout",play_pause_stop:"Přehrát/Pauza/Zastavit",previous:"Předchozí stopa",repeat:"Režim opakování",shuffle:"Zamíchat"},show_volume_level:"Zobrazit úroveň hlasitosti",use_media_artwork:"Použít artwork z média",use_media_info:"Použít informace z média",volume_controls:"Ovládání hlasitosti",volume_controls_list:{volume_buttons:"Tlačítka hlasitosti",volume_mute:"Ztlumit",volume_set:"Úroveň hlasitosti"}},number:{display_mode:"Režim zobrazení",display_mode_list:{buttons:"Tlačítka",default:"Výchozí (posuvník)",slider:"Posuvník"}},template:{badge_color:"Barva odznaku",badge_icon:"Ikona odznaku",content:"Obsah",entity_extra:"Použito v šablonách a akcích",multiline_secondary:"Víceřádková sekundární informace?",picture:"Obrázek (nahradí ikonu)",primary:"Primární informace",secondary:"Sekundární informace"},title:{subtitle:"Popis",subtitle_tap_action:"Akce při klepnutí na popis",title:"Nadpis",title_tap_action:"Akce při klepnutí na nadpis"},update:{show_buttons_control:"Zobrazit ovládací tlačítka?"},vacuum:{commands:"Příkazy",commands_list:{on_off:"Zapnout/Vypnout"}},weather:{show_conditions:"Zobrazit podmínky?",show_temperature:"Zobrazit teplotu?"}},chip:{"chip-picker":{add:"Přidat tlačítko",chips:"Tlačítka",clear:"Vymazat",edit:"Upravit",select:"Vybrat tlačítko",types:{action:"Akce","alarm-control-panel":"Alarm",back:"Zpět",conditional:"Podmínka",entity:"Entita",light:"Světlo",menu:"Menu",spacer:"Mezera",template:"Šablona",weather:"Počasí"}},conditional:{chip:"Tlačítko"},sub_element_editor:{title:"Editor tlačítek"}},form:{alignment_picker:{values:{center:"Na střed",default:"Výchozí zarovnání",end:"Na konec",justify:"Do bloku",start:"Na začátek"}},color_picker:{values:{default:"Výchozí barva"}},icon_type_picker:{values:{default:"Výchozí typ","entity-picture":"Ikona entity",icon:"Ikona",none:"Nic"}},info_picker:{values:{default:"Výchozí informace","last-changed":"Poslední změna","last-updated":"Poslední aktualizace",name:"Název",none:"Nic",state:"Stav"}},layout_picker:{values:{default:"Výchozí rozložení",horizontal:"Vodorovné rozložení",vertical:"Svislé rozložení"}}}},yi={card:bi,editor:vi},wi=Object.freeze({__proto__:null,card:bi,default:yi,editor:vi}),ki={not_found:"Enhed ikke fundet"},xi={card:{chips:{alignment:"Justering"},climate:{hvac_modes:"HVAC-tilstande",show_temperature_control:"Temperaturkontrol?"},cover:{show_buttons_control:"Betjeningsknapper?",show_position_control:"Positionskontrol?",show_tilt_position_control:"Tiltkontrol?"},fan:{show_oscillate_control:"Oscillationskontrol?",show_percentage_control:"Procentkontrol?"},generic:{collapsible_controls:"Skjul kontroller når slukket",color:"Farve",content_info:"Indhold",fill_container:"Fyld container",icon_animation:"Animér ikon når aktiv?",icon_color:"Ikon farve",icon_type:"Ikon type",layout:"Layout",primary_info:"Primær information",secondary_info:"Sekundær information",use_entity_picture:"Brug enhedsbillede?"},humidifier:{show_target_humidity_control:"Luftfugtighedskontrol?"},light:{incompatible_controls:"Nogle kontroller vises muligvis ikke, hvis dit lys ikke understøtter funktionen.",show_brightness_control:"Lysstyrkekontrol?",show_color_control:"Farvekontrol?",show_color_temp_control:"Temperaturfarvekontrol?",use_light_color:"Brug lysfarve"},lock:{lock:"Lås",open:"Åben",unlock:"Lås op"},"media-player":{media_controls:"Mediekontrol",media_controls_list:{next:"Næste nummer",on_off:"Tænd/Sluk",play_pause_stop:"Afspil/Pause/Stop",previous:"Forrige nummer",repeat:"Gentagelsestilstand",shuffle:"Bland"},show_volume_level:"Vis lydstyrke",use_media_artwork:"Brug mediebilleder",use_media_info:"Brug medieinformation",volume_controls:"Lydstyrkekontrol",volume_controls_list:{volume_buttons:"Lydstyrkeknapper",volume_mute:"Lydløs",volume_set:"Lydstyrke"}},number:{display_mode:"Visningstilstand",display_mode_list:{buttons:"Knapper",default:"Standard (slider)",slider:"Slider"}},template:{badge_color:"Badge farve",badge_icon:"Badge ikon",content:"Indhold",entity_extra:"Anvendes i skabeloner og handlinger",label:"Label",multiline_secondary:"Multi-linje sekundær?",picture:"Billede (erstatter ikonet)",primary:"Primær information",secondary:"Sekundær information"},title:{subtitle:"Undertitel",subtitle_tap_action:"Undertitel tryk handling",title:"Titel",title_tap_action:"Title tryk handling"},update:{show_buttons_control:"Betjeningsknapper?"},vacuum:{commands:"Kommandoer",commands_list:{on_off:"Slå til/fra"}},weather:{show_conditions:"Vejrforhold?",show_temperature:"Temperatur?"}},chip:{"chip-picker":{add:"Tilføj chip",chips:"Chips",clear:"Nulstil",edit:"Rediger",select:"Vælg chip",types:{action:"Handling","alarm-control-panel":"Alarm",back:"Tilbage",conditional:"Betinget",entity:"Enhed",light:"Lys",menu:"Menu",spacer:"Afstand",template:"Skabelon",weather:"Vejr"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip-editor"}},form:{alignment_picker:{values:{center:"Centrer",default:"Standard justering",end:"Slut",justify:"Lige margener",start:"Start"}},color_picker:{values:{default:"Standardfarve"}},icon_type_picker:{values:{default:"Standard type","entity-picture":"Enhedsbillede",icon:"Ikon",none:"Ingen"}},info_picker:{values:{default:"Standard information","last-changed":"Sidst ændret","last-updated":"Sidst opdateret",name:"Navn",none:"Ingen",state:"Status"}},layout_picker:{values:{default:"Standard layout",horizontal:"Horisontal layout",vertical:"Vertikal layout"}}}},zi={card:ki,editor:xi},Ei=Object.freeze({__proto__:null,card:ki,default:zi,editor:xi}),Ci={not_found:"Entität nicht gefunden"},Ai={card:{chips:{alignment:"Ausrichtung"},climate:{hvac_modes:"HVAC-Modi",show_temperature_control:"Temperatursteuerung?"},cover:{show_buttons_control:"Schaltflächensteuerung?",show_position_control:"Positionssteuerung?",show_tilt_position_control:"Winkelsteuerung?"},empty:{no_config_options:"Diese Karte hat keine Optionen."},fan:{show_direction_control:"Richtungssteuerung?",show_oscillate_control:"Oszillationssteuerung?",show_percentage_control:"Prozentuale Kontrolle?"},generic:{collapsible_controls:"Schieberegler einklappen, wenn aus",color:"Farbe",content_info:"Inhalt",fill_container:"Container ausfüllen",icon_animation:"Icon animieren, wenn aktiv?",icon_color:"Icon-Farbe",icon_type:"Icon-Typ",layout:"Layout",primary_info:"Primäre Information",secondary_info:"Sekundäre Information",use_entity_picture:"Entitätsbild verwenden?"},humidifier:{show_target_humidity_control:"Luftfeuchtigkeitssteuerung?"},light:{incompatible_controls:"Einige Steuerelemente werden möglicherweise nicht angezeigt, wenn Ihr Licht diese Funktion nicht unterstützt.",show_brightness_control:"Helligkeitsregelung?",show_color_control:"Farbsteuerung?",show_color_temp_control:"Farbtemperatursteuerung?",use_light_color:"Farbsteuerung verwenden"},lock:{lock:"Verriegeln",open:"Öffnen",unlock:"Entriegeln"},"media-player":{media_controls:"Mediensteuerung",media_controls_list:{next:"Nächster Titel",on_off:"Ein/Aus",play_pause_stop:"Play/Pause/Stop",previous:"Vorheriger Titel",repeat:"Wiederholen",shuffle:"Zufällige Wiedergabe"},show_volume_level:"Lautstärke-Level anzeigen",use_media_artwork:"Mediengrafik verwenden",use_media_info:"Medieninfos verwenden",volume_controls:"Lautstärkesteuerung",volume_controls_list:{volume_buttons:"Lautstärke-Buttons",volume_mute:"Stumm",volume_set:"Lautstärke-Level"}},number:{display_mode:"Anzeigemodus",display_mode_list:{buttons:"Buttons",default:"Standard (Schieberegler)",slider:"Schieberegler"}},template:{badge_color:"Badge-Farbe",badge_icon:"Badge-Icon",content:"Inhalt",entity_extra:"Wird in Vorlagen und Aktionen verwendet",label:"Beschriftung",multiline_secondary:"Mehrzeilig sekundär?",picture:"Bild (ersetzt das Icon)",primary:"Primäre Information",secondary:"Sekundäre Information"},title:{subtitle:"Untertitel",subtitle_tap_action:"Untertitel Tipp-Aktion",title:"Titel",title_tap_action:"Titel Tipp-Aktion"},update:{show_buttons_control:"Schaltflächensteuerung?"},vacuum:{commands:"Befehle",commands_list:{on_off:"An/Ausschalten"}},weather:{show_conditions:"Bedingungen?",show_temperature:"Temperatur?"}},chip:{"chip-picker":{add:"Chip hinzufügen",chips:"Chips",clear:"Löschen",edit:"Editieren",select:"Chip auswählen",types:{action:"Aktion","alarm-control-panel":"Alarm",back:"Zurück",conditional:"Bedingung",entity:"Entität",light:"Licht",menu:"Menü",quickbar:"Quickbar",spacer:"Abstand",template:"Vorlage",weather:"Wetter"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip Editor"}},form:{alignment_picker:{values:{center:"Mitte",default:"Standard",end:"Ende",justify:"Ausrichten",start:"Anfang"}},color_picker:{values:{default:"Standardfarbe"}},icon_type_picker:{values:{default:"Standard-Typ","entity-picture":"Entitätsbild",icon:"Icon",none:"Keines"}},info_picker:{values:{default:"Standard-Information","last-changed":"Letzte Änderung","last-updated":"Letzte Aktualisierung",name:"Name",none:"Keine",state:"Zustand"}},layout_picker:{values:{default:"Standard-Layout",horizontal:"Horizontales Layout",vertical:"Vertikales Layout"}}}},Mi={card:Ci,editor:Ai},Si=Object.freeze({__proto__:null,card:Ci,default:Mi,editor:Ai}),$i={card:{chips:{alignment:"Ευθυγράμμιση"},cover:{show_buttons_control:"Έλεγχος κουμπιών;",show_position_control:"Έλεγχος θέσης;"},fan:{show_oscillate_control:"Έλεγχος ταλάντωσης;",show_percentage_control:"Έλεγχος ποσοστού;"},generic:{content_info:"Περιεχόμενο",icon_animation:"Κίνηση εικονιδίου όταν είναι ενεργό;",icon_color:"Χρώμα εικονιδίου",layout:"Διάταξη",primary_info:"Πρωτεύουσες πληροφορίες",secondary_info:"Δευτερεύουσες πληροφορίες",use_entity_picture:"Χρήση εικόνας οντότητας;"},light:{incompatible_controls:"Ορισμένα στοιχεία ελέγχου ενδέχεται να μην εμφανίζονται εάν το φωτιστικό σας δεν υποστηρίζει τη λειτουργία.",show_brightness_control:"Έλεγχος φωτεινότητας;",show_color_control:"Έλεγχος χρώματος;",show_color_temp_control:"Έλεγχος χρώματος θερμοκρασίας;",use_light_color:"Χρήση χρώματος φωτος"},"media-player":{media_controls:"Έλεγχος πολυμέσων",media_controls_list:{next:"Επόμενο κομμάτι",on_off:"Ενεργοποίηση/απενεργοποίηση",play_pause_stop:"Αναπαραγωγή/παύση/διακοπή",previous:"Προηγούμενο κομμάτι",repeat:"Λειτουργία επανάληψης",shuffle:"Τυχαία σειρά"},use_media_artwork:"Χρήση έργων τέχνης πολυμέσων",use_media_info:"Χρήση πληροφοριών πολυμέσων",volume_controls:"Χειριστήρια έντασης ήχου",volume_controls_list:{volume_buttons:"Κουμπιά έντασης ήχου",volume_mute:"Σίγαση",volume_set:"Επίπεδο έντασης ήχου"}},template:{content:"Περιεχόμενο",entity_extra:"Χρησιμοποιείται σε πρότυπα και ενέργειες",multiline_secondary:"Δευτερεύουσες πολλαπλών γραμμών;",primary:"Πρωτεύουσες πληροφορίες",secondary:"Δευτερεύουσες πληροφορίες"},title:{subtitle:"Υπότιτλος",title:"Τίτλος"},update:{show_buttons_control:"Έλεγχος κουμπιών;"},vacuum:{commands:"Εντολές"},weather:{show_conditions:"Συνθήκες;",show_temperature:"Θερμοκρασία;"}},chip:{"chip-picker":{add:"Προσθήκη chip",chips:"Chips",clear:"Καθαρισμός",edit:"Επεξεργασία",select:"Επιλογή chip",types:{action:"Ενέργεια","alarm-control-panel":"Συναγερμός",back:"Πίσω",conditional:"Υπό προϋποθέσεις",entity:"Οντότητα",light:"Φως",menu:"Μενού",template:"Πρότυπο",weather:"Καιρός"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Επεξεργαστής Chip"}},form:{alignment_picker:{values:{center:"Στοίχιση στο κέντρο",default:"Προεπιλεγμένη στοίχιση",end:"Στοίχιση δεξιά",justify:"Πλήρης στοίχιση",start:"Στοίχιση αριστερά"}},color_picker:{values:{default:"Προεπιλεγμένο χρώμα"}},info_picker:{values:{default:"Προεπιλεγμένες πληροφορίες","last-changed":"Τελευταία αλλαγή","last-updated":"Τελευταία ενημέρωση",name:"Όνομα",none:"Τίποτα",state:"Κατάσταση"}},layout_picker:{values:{default:"Προεπιλεγμένη διάταξη",horizontal:"Οριζόντια διάταξη",vertical:"Κάθετη διάταξη"}}}},Ti={editor:$i},Pi=Object.freeze({__proto__:null,default:Ti,editor:$i}),ji={not_found:"Entity not found"},Oi={section:{context:"Context",content:"Content",features:"Features",interactions:"Interactions",layout:"Layout",badge:"Badge"},card:{chips:{alignment:"Alignment"},climate:{hvac_modes:"HVAC Modes",show_temperature_control:"Temperature control?"},cover:{show_buttons_control:"Control buttons?",show_position_control:"Position control?",show_tilt_position_control:"Tilt control?"},empty:{no_config_options:"This card has no config options."},fan:{show_direction_control:"Direction control?",show_oscillate_control:"Oscillate control?",show_percentage_control:"Percentage control?"},generic:{entity:"Entity",area:"Area",color:"Color",content_info:"Content",fill_container:"Fill container",icon_animation:"Animate icon when active?",icon_color:"Icon color",icon_type:"Icon type",layout:"Layout",primary_info:"Primary information",secondary_info:"Secondary information",use_entity_picture:"Use entity picture?",collapsible_controls:"Collapse controls when off",picture:"Picture",picture_helper:"If set, it will replace the icon."},humidifier:{show_target_humidity_control:"Humidity control?"},light:{incompatible_controls:"Some controls may not be displayed if your light does not support the feature.",show_brightness_control:"Brightness control?",show_color_control:"Color control?",show_color_temp_control:"Color temperature control?",use_light_color:"Use light color"},lock:{lock:"Lock",open:"Open",unlock:"Unlock"},"media-player":{media_controls:"Media controls",media_controls_list:{next:"Next track",on_off:"Turn on/off",play_pause_stop:"Play/pause/stop",previous:"Previous track",repeat:"Repeat mode",shuffle:"Shuffle"},show_volume_level:"Show volume level",use_media_artwork:"Use media artwork",use_media_info:"Use media info",volume_controls:"Volume controls",volume_controls_list:{volume_buttons:"Volume buttons",volume_mute:"Mute",volume_set:"Volume level"}},number:{display_mode:"Display Mode",display_mode_list:{buttons:"Buttons",default:"Default (slider)",slider:"Slider"}},template:{area_helper:"Used in templates and features",area:"Area",badge_color:"Badge color",badge_icon:"Badge icon",badge_text_helper:"If set, it will replace the icon.",badge_text:"Badge text",badge:"Badge",content:"Content",entity_helper:"Used in templates, interactions and features",entity_helper_legacy:"Used in templates and interactions",label:"Label",layout:"Layout",multiline_secondary_helper:"The card may be taller to fit the text and will not always align with the grid system.",multiline_secondary:"Allow multiline secondary information",primary:"Primary information",secondary:"Secondary information"},title:{subtitle:"Subtitle",subtitle_tap_action:"Subtitle tap action",title:"Title",title_tap_action:"Title tap action"},update:{show_buttons_control:"Control buttons?"},vacuum:{commands:"Commands",commands_list:{on_off:"Turn on/off"}},weather:{show_conditions:"Conditions?",show_temperature:"Temperature?"}},badge:{template:{label:"Label",content:"Content",entity_helper:"Used in templates and interactions",area_helper:"Used in templates"}},chip:{"chip-picker":{add:"Add chip",chips:"Chips",clear:"Clear",edit:"Edit",select:"Select chip",types:{action:"Action","alarm-control-panel":"Alarm",back:"Back",conditional:"Conditional",entity:"Entity",light:"Light",menu:"Menu",quickbar:"Quickbar",spacer:"Spacer",template:"Template",weather:"Weather"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip editor"}},form:{alignment_picker:{values:{center:"Center",default:"Default alignment",end:"End",justify:"Justify",start:"Start"}},color_picker:{values:{default:"Default color"}},icon_type_picker:{values:{default:"Default type","entity-picture":"Entity picture",icon:"Icon",none:"None"}},info_picker:{values:{default:"Default information","last-changed":"Last Changed","last-updated":"Last Updated",name:"Name",none:"None",state:"State"}},layout_picker:{values:{default:"Default layout",horizontal:"Horizontal layout",vertical:"Vertical layout"}}}},Ii={title:"Card updated",description:"Your card’s configuration has been migrated to the new version. You can find more information about the changes in {link}.",post:"the GitHub post",revert:"Revert",ok:"Ok"},Di={card:ji,editor:Oi,migration:Ii},Hi=Object.freeze({__proto__:null,card:ji,default:Di,editor:Oi,migration:Ii}),Ni={not_found:"Entidad no encontrada"},Bi={card:{chips:{alignment:"Alineación"},climate:{hvac_modes:"Modos de climatización",show_temperature_control:"¿Control de temperatura?"},cover:{show_buttons_control:"¿Botones de control?",show_position_control:"¿Control de posición?",show_tilt_position_control:"¿Control de inclinación?"},empty:{no_config_options:"Esta carta no tiene opciones de config."},fan:{show_direction_control:"¿Control de dirección?",show_oscillate_control:"¿Controlar oscilación?",show_percentage_control:"¿Controlar porcentaje?"},generic:{collapsible_controls:"Contraer controles cuando está apagado",color:"Color",content_info:"Contenido",fill_container:"Rellenar",icon_animation:"¿Icono animado cuando está activo?",icon_color:"Color de icono",icon_type:"Tipo de icono",layout:"Diseño",primary_info:"Información primaria",secondary_info:"Información secundaria",use_entity_picture:"¿Usar imagen de entidad?"},humidifier:{show_target_humidity_control:"¿Controlar humedad?"},light:{incompatible_controls:"Es posible que algunos controles no se muestren si la luz no es compatible con esta función.",show_brightness_control:"¿Controlar brillo?",show_color_control:"¿Controlar color?",show_color_temp_control:"¿Controlar temperatura del color?",use_light_color:"Usar color de la luz"},lock:{lock:"Bloquear",open:"Abrir",unlock:"Desbloquear"},"media-player":{media_controls:"Controles multimedia",media_controls_list:{next:"Pista siguiente",on_off:"Activar/desactivar",play_pause_stop:"Reproducir/pausa/parar",previous:"Pista anterior",repeat:"Modo de repetición",shuffle:"Aleatoria"},show_volume_level:"Mostrar nivel de volumen",use_media_artwork:"Usar ilustraciones multimedia",use_media_info:"Usar información multimedia",volume_controls:"Controles de volumen",volume_controls_list:{volume_buttons:"Botones de volumen",volume_mute:"Silenciar",volume_set:"Nivel de volumen"}},number:{display_mode:"Modo de visualización",display_mode_list:{buttons:"Botones",default:"Por defecto (deslizante)",slider:"Control deslizante"}},template:{badge_color:"Color del distintivo",badge_icon:"Icono del distintivo",content:"Contenido",entity_extra:"Utilizado en plantillas y acciones",label:"Etiqueta",multiline_secondary:"¿Secundaria multilínea?",picture:"Imagen (sustituirá al icono)",primary:"Información primaria",secondary:"Información secundaria"},title:{subtitle:"Subtítulo",subtitle_tap_action:"Acción al tocar el subtítulo",title:"Título",title_tap_action:"Acción al tocar el título"},update:{show_buttons_control:"¿Botones de control?"},vacuum:{commands:"Comandos",commands_list:{on_off:"Activar/desactivar"}},weather:{show_conditions:"¿Condiciones?",show_temperature:"¿Temperatura?"}},chip:{"chip-picker":{add:"Añadir chip",chips:"Chips",clear:"Limpiar",edit:"Editar",select:"Seleccionar chip",types:{action:"Acción","alarm-control-panel":"Alarma",back:"Volver",conditional:"Condicional",entity:"Entidad",light:"Luz",menu:"Menú",spacer:"Espaciador",template:"Plantilla",weather:"Clima"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Editor de chip"}},form:{alignment_picker:{values:{center:"Centrado",default:"Alineación predeterminada",end:"Final",justify:"Justificado",start:"Inicio"}},color_picker:{values:{default:"Color predeterminado"}},icon_type_picker:{values:{default:"Por defecto","entity-picture":"Imagen de entidad",icon:"Icono",none:"Ninguno"}},info_picker:{values:{default:"Información predeterminada","last-changed":"Último cambio","last-updated":"Última actualización",name:"Nombre",none:"Ninguno",state:"Estado"}},layout_picker:{values:{default:"Diseño predeterminado",horizontal:"Diseño horizontal",vertical:"Diseño vertical"}}}},Li={card:Ni,editor:Bi},Ri=Object.freeze({__proto__:null,card:Ni,default:Li,editor:Bi}),Vi={not_found:"Entiteettiä ei löytynyt"},Ui={card:{chips:{alignment:"Asettelu"},climate:{hvac_modes:"HVAC-tilat",show_temperature_control:"Lämpötilan säätö?"},cover:{show_buttons_control:"Toimintopainikkeet?",show_position_control:"Sijainnin hallinta?",show_tilt_position_control:"Kallistuksen säätö?"},fan:{show_oscillate_control:"Oskillaation säätö?",show_percentage_control:"Prosentuaalinen säätö?"},generic:{collapsible_controls:"Supista säätimet ollessa pois-tilassa",color:"Väri",content_info:"Sisältö",fill_container:"Täytä alue",icon_animation:"Animoi kuvake, kun aktiivinen?",icon_color:"Ikonin väri",icon_type:"Kuvakkeen tyyppi",layout:"Asettelu",primary_info:"Ensisijaiset tiedot",secondary_info:"Toissijaiset tiedot",use_entity_picture:"Käytä kohteen kuvaa?"},humidifier:{show_target_humidity_control:"Kosteudenhallinta?"},light:{incompatible_controls:"Jotkin toiminnot eivät näy, jos valaisimesi ei tue niitä.",show_brightness_control:"Kirkkauden säätö?",show_color_control:"Värin säätö?",show_color_temp_control:"Värilämpötilan säätö?",use_light_color:"Käytä valaisimen väriä"},lock:{lock:"Lukitse",open:"Avaa",unlock:"Poista lukitus"},"media-player":{media_controls:"Toiminnot",media_controls_list:{next:"Seuraava kappale",on_off:"Päälle/pois",play_pause_stop:"Toista/keskeytä/pysäytä",previous:"Edellinen kappale",repeat:"Jatkuva toisto",shuffle:"Sekoita"},show_volume_level:"Näytä äänenvoimakkuuden hallinta",use_media_artwork:"Käytä median kuvituksia",use_media_info:"Käytä median tietoja",volume_controls:"Äänenvoimakkuuden hallinta",volume_controls_list:{volume_buttons:"Äänenvoimakkuuspainikkeet",volume_mute:"Mykistä",volume_set:"Äänenvoimakkuus"}},number:{display_mode:"Näyttötila",display_mode_list:{buttons:"Painikkeet",default:"Oletus (liukusäädin)",slider:"Liukusäädin"}},template:{badge_color:"Merkin väri",badge_icon:"Merkin kuvake",content:"Sisältö",entity_extra:"Käytetään malleissa ja toiminnoissa",label:"Nimiö",multiline_secondary:"Monirivinen toissijainen tieto?",picture:"Kuva (korvaa kuvakkeen)",primary:"Ensisijaiset tiedot",secondary:"Toissijaiset tiedot"},title:{subtitle:"Tekstitys",subtitle_tap_action:"Alaotsikon napautustoiminto",title:"Otsikko",title_tap_action:"Otsikkonapautustoiminto"},update:{show_buttons_control:"Toimintopainikkeet?"},vacuum:{commands:"Komennot",commands_list:{on_off:"Kytke päälle/pois"}},weather:{show_conditions:"Ehdot?",show_temperature:"Lämpötila?"}},chip:{"chip-picker":{add:"Lisää merkki",chips:"Merkit",clear:"Tyhjennä",edit:"Muokkaa",select:"Valitse merkki",types:{action:"Toiminto","alarm-control-panel":"Hälytys",back:"Takaisin",conditional:"Ehdollinen",entity:"Kohde",light:"Valaisin",menu:"Valikko",spacer:"Välikappale",template:"Malli",weather:"Sää"}},conditional:{chip:"Merkki"},sub_element_editor:{title:"Merkkieditori"}},form:{alignment_picker:{values:{center:"Keskitä",default:"Keskitys",end:"Loppu",justify:"Sovita",start:"Alku"}},color_picker:{values:{default:"Oletusväri"}},icon_type_picker:{values:{default:"Oletustyyppi","entity-picture":"Kohteen kuva",icon:"Kuvake",none:"Ei mitään"}},info_picker:{values:{default:"Oletustiedot","last-changed":"Viimeksi muuttunut","last-updated":"Viimeksi päivittynyt",name:"Nimi",none:"Ei mitään",state:"Tila"}},layout_picker:{values:{default:"Oletusasettelu",horizontal:"Vaakasuuntainen",vertical:"Pystysuuntainen"}}}},Fi={card:Vi,editor:Ui},Gi=Object.freeze({__proto__:null,card:Vi,default:Fi,editor:Ui}),Ki={not_found:"Entité inconnue"},Zi={badge:{template:{area_helper:"Utilisée dans les modèles",content:"Contenu",entity_helper:"Utilisée dans les modèles et les interactions",label:"Libellé"}},card:{chips:{alignment:"Alignement"},climate:{hvac_modes:"Modes du thermostat",show_temperature_control:"Contrôle de la température ?"},cover:{show_buttons_control:"Contrôle avec boutons ?",show_position_control:"Contrôle de la position ?",show_tilt_position_control:"Contrôle de l'inclinaison ?"},empty:{no_config_options:"Cette carte n'a pas de paramètres."},fan:{show_direction_control:"Contrôle de la direction ?",show_oscillate_control:"Contrôle de l'oscillation ?",show_percentage_control:"Contrôle de la vitesse ?"},generic:{area:"Pièce",collapsible_controls:"Reduire les contrôles quand éteint",color:"Couleur",content_info:"Contenu",entity:"Entité",fill_container:"Remplir le conteneur",icon_animation:"Animation de l'icône ?",icon_color:"Couleur de l'icône",icon_type:"Type d'icône",layout:"Disposition",picture:"Image",picture_helper:"Si définie, elle remplacera l'icône.",primary_info:"Information principale",secondary_info:"Information secondaire",use_entity_picture:"Utiliser l'image de l'entité ?"},humidifier:{show_target_humidity_control:"Contrôle d'humidité ?"},light:{incompatible_controls:"Certains contrôles peuvent ne pas être affichés si votre lumière ne supporte pas la fonctionnalité.",show_brightness_control:"Contrôle de luminosité ?",show_color_control:"Contrôle de la couleur ?",show_color_temp_control:"Contrôle de la température ?",use_light_color:"Utiliser la couleur de la lumière"},lock:{lock:"Verrouiller",open:"Ouvrir",unlock:"Déverrouiller"},"media-player":{media_controls:"Contrôles du media",media_controls_list:{next:"Suivant",on_off:"Allumer/Éteindre",play_pause_stop:"Lecture/pause/stop",previous:"Précédent",repeat:"Mode de répétition",shuffle:"Lecture aléatoire"},show_volume_level:"Afficher le niveau de volume",use_media_artwork:"Utiliser l'illustration du media",use_media_info:"Utiliser les informations du media",volume_controls:"Contrôles du volume",volume_controls_list:{volume_buttons:"Bouton de volume",volume_mute:"Muet",volume_set:"Niveau de volume"}},number:{display_mode:"Mode d'affichage",display_mode_list:{buttons:"Boutons",default:"Par défaut (Curseur)",slider:"Curseur"}},template:{area:"Pièce",area_helper:"Utilisée dans les modèles et les fonctionnalités",badge:"Badge",badge_color:"Couleur du badge",badge_icon:"Icône du badge",badge_text:"Texte du badge",badge_text_helper:"Si définie, elle remplacera l'icône.",content:"Contenu",entity_extra:"Utilisée pour les modèles et les actions",entity_helper:"Utilisée dans les modèles, les interactions et les fonctionnalités",entity_helper_legacy:"Utilisé dans les modèles et les interactions",label:"Libellé",layout:"Disposition",multiline_secondary:"Autoriser les informations secondaires sur plusieurs lignes",multiline_secondary_helper:"La carte peut être plus haute pour s'adapter au texte et ne s'alignera pas toujours avec le système de grille.",picture:"Image (remplacera l'icône)",primary:"Information principale",secondary:"Information secondaire"},title:{subtitle:"Sous-titre",subtitle_tap_action:"Appui sur le sous-titre",title:"Titre",title_tap_action:"Appui sur le titre"},update:{show_buttons_control:"Contrôle avec boutons ?"},vacuum:{commands:"Commandes",commands_list:{on_off:"Allumer/Éteindre"}},weather:{show_conditions:"Conditions ?",show_conditons:"Conditions ?",show_temperature:"Température ?"}},chip:{"chip-picker":{add:'Ajouter une "chip"',chips:'"Chips"',clear:"Effacer",edit:"Modifier",select:'Sélectionner une "chip"',types:{action:"Action","alarm-control-panel":"Alarme",back:"Retour",conditional:"Conditionnel",entity:"Entité",light:"Lumière",menu:"Menu",quickbar:"Barre d'accès rapide",spacer:"Espacement",template:"Modèle",weather:"Météo"}},conditional:{chip:"Chip"},sub_element_editor:{title:'Éditeur de "chip"'}},form:{alignment_picker:{values:{center:"Centré",default:"Alignement par défaut",end:"Fin",justify:"Justifié",start:"Début"}},color_picker:{values:{default:"Couleur par défaut"}},icon_type_picker:{values:{default:"Type par défaut","entity-picture":"Image de l'entité",icon:"Icône",none:"Aucune"}},info_picker:{values:{default:"Information par défaut","last-changed":"Dernière modification","last-updated":"Dernière mise à jour",name:"Nom",none:"Aucune",state:"État"}},layout_picker:{values:{default:"Disposition par défault",horizontal:"Disposition horizontale",vertical:"Disposition verticale"}}},section:{badge:"Badge",content:"Contenu",context:"Contexte",features:"Fonctionnalités",interactions:"Interactions",layout:"Disposition"}},Wi={description:"La configuration de votre carte a été migrée vers la nouvelle version. Vous pouvez trouver plus d’informations sur les changements dans {link}.",ok:"Ok",post:"l'article sur Github",revert:"Revenir en arrière",title:"Carte mise à jour"},qi={card:Ki,editor:Zi,migration:Wi},Xi=Object.freeze({__proto__:null,card:Ki,default:qi,editor:Zi,migration:Wi}),Yi={not_found:"היישות לא נמצאה"},Ji={card:{chips:{alignment:"יישור"},climate:{hvac_modes:"מצבי שואב אבק",show_temperature_control:"בקרת טמפרטורה?"},cover:{show_buttons_control:"הצג כפתורי שליטה?",show_position_control:"הצג פקדי מיקום?",show_tilt_position_control:"שליטה בהטייה?"},empty:{no_config_options:"לכרטיסיה זו אין אפשרויות להגדרה."},fan:{show_direction_control:"שליטה בכיוון?",show_oscillate_control:"שליטה בהתנדנדות?",show_percentage_control:"שליטה באחוז?"},generic:{collapsible_controls:"הסתר שליטה כשאר מכובה",color:"צבע",content_info:"תוכן",fill_container:"מלא גבולות",icon_animation:"הנפש צלמית אם פעיל?",icon_color:"צבע אייקון",icon_type:"סוג צלמית",layout:"סידור",primary_info:"מידע ראשי",secondary_info:"מידע מישני",use_entity_picture:"השתמש בתמונת הישות?"},humidifier:{show_target_humidity_control:"הצג פקדי לחות?"},light:{incompatible_controls:"יתכן וחלק מהכפתורים לא יופיעו אם התאורה אינה תומכת בתכונה.",show_brightness_control:"שליטה בבהירות?",show_color_control:"הצג פקד צבע?",show_color_temp_control:"הצג פקד גוון תאורה?",use_light_color:"השתמש בצבע האור"},lock:{lock:"נעל",open:"פתח",unlock:"בטל נעילה"},"media-player":{media_controls:"שליטה במדיה",media_controls_list:{next:"רצועה הבאה",on_off:"הדלק/כבה",play_pause_stop:"נגן/השהה/הפסק",previous:"רצועה קודמת",repeat:"חזרה",shuffle:"ערבב"},show_volume_level:"הצג שליטת ווליום",use_media_artwork:"השתמש באומנות מדיה",use_media_info:"השתמש במידע מדיה",volume_controls:"שליטה בווליום",volume_controls_list:{volume_buttons:"כפתורי ווליום",volume_mute:"השתק",volume_set:"רמת ווליום"}},number:{display_mode:"הגדרת מצב תצוגה",display_mode_list:{buttons:"לחצנים",default:"ברירת מחדל (סרגל גלילה)",slider:"סרגל גלילה"}},template:{badge_color:"צבע תג",badge_icon:"צלמית תג",content:"תוכן",entity_extra:"משמש בתבניות ופעולות",label:"תווית",multiline_secondary:"מידע משני בשורות?",picture:"תמונה (תחליף את הצלמית)",primary:"מידע ראשי",secondary:"מידע מישני"},title:{subtitle:"כתובית",subtitle_tap_action:"פעולה בלחיצה על כותרת משנה",title:"כותרת",title_tap_action:"פעולה בלחיצה על הכותרת"},update:{show_buttons_control:"הצג כפתורי שליטה?"},vacuum:{commands:"פקודות",commands_list:{on_off:"כיבוי/הדלקה"},icon_animation:"הנפשת אייקון"},weather:{show_conditions:"הצג תנאים?",show_temperature:"הצג טמפרטורה?"}},chip:{"chip-picker":{add:"הוסף שבב",chips:"שבבים",clear:"נקה",edit:"ערוך",select:"בחר שבב",types:{action:"פעולה","alarm-control-panel":"אזעקה",back:"חזור",conditional:"מותנה",entity:"ישות",light:"אור",menu:"תפריט",spacer:"מרווח",template:"תבנית",weather:"מזג אוויר"}},conditional:{chip:"שבב"},sub_element_editor:{title:"עורך שבב"}},form:{alignment_picker:{values:{center:"אמצע",default:"יישור ברירת מחדל",end:"סוף",justify:"מוצדק",start:"התחלה"}},color_picker:{values:{default:"צבע ברירת מחדל"}},icon_type_picker:{values:{default:"סוג ברירת מחדל","entity-picture":"תמונת יישות",icon:"צלמית",none:"ריק"}},info_picker:{values:{default:"מידע ברירת מחדל","last-changed":"שונה לאחרונה","last-updated":"עודכן לאחרונה",name:"שם",none:"ריק",state:"מצב"}},layout_picker:{values:{default:"סידור ברירת מחדל",horizontal:"סידור מאוזן",vertical:"סידור מאונך"}}}},Qi={card:Yi,editor:Ji},en=Object.freeze({__proto__:null,card:Yi,default:Qi,editor:Ji}),tn={not_found:"Entitás nem található"},on={card:{chips:{alignment:"Rendezés"},climate:{hvac_modes:"HVAC mód",show_temperature_control:"Hőmérséklet vezérlő"},cover:{show_buttons_control:"Vezérlő gombok",show_position_control:"Pozíció vezérlő",show_tilt_position_control:"Dőlésszög szabályzó"},fan:{show_oscillate_control:"Oszcilláció vezérlő",show_percentage_control:"Százalékos vezérlő"},generic:{collapsible_controls:"Vezérlők összezárása kikapcsolt állapotban",content_info:"Tartalom",fill_container:"Tároló kitöltése",icon_animation:"Ikon animálása aktív állapotban",icon_color:"Ikon szín",icon_type:"Ikon típus",layout:"Elrendezés",primary_info:"Elsődleges információ",secondary_info:"Másodlagos információ",use_entity_picture:"Entitás kép használata"},humidifier:{show_target_humidity_control:"Páratartalom vezérlő"},light:{incompatible_controls:"Azok a vezérlők nem lesznek megjelenítve, amelyeket a fényforrás nem támogat.",show_brightness_control:"Fényerő vezérlő",show_color_control:"Szín vezérlő",show_color_temp_control:"Színhőmérséklet vezérlő",use_light_color:"Fény szín használata"},lock:{lock:"Zár",open:"Nyitva",unlock:"Nyit"},"media-player":{media_controls:"Média vezérlők",media_controls_list:{next:"Következő szám",on_off:"Ki/bekapcsolás",play_pause_stop:"Lejátszás/szünet/állj",previous:"Előző szám",repeat:"Ismétlés módja",shuffle:"Véletlen lejátszás"},show_volume_level:"Hangerő mutatása",use_media_artwork:"Média borító használata",use_media_info:"Média infó használata",volume_controls:"Hangerő vezérlők",volume_controls_list:{volume_buttons:"Hangerő gombok",volume_mute:"Némítás",volume_set:"Hangerő szint"}},number:{display_mode:"Megjelenítési mód",display_mode_list:{buttons:"Gombok",default:"Alepértelmezett (csúszka)",slider:"Csúszka"}},template:{badge_color:"Jelvény szín",badge_icon:"Jelvény ikon",content:"Tartalom",entity_extra:"Műveletek és sablonok használatakor",multiline_secondary:"Másodlagost több sorba?",picture:"Kép (lecseréli az ikont)",primary:"Elsődleges információ",secondary:"Másodlagos információ"},title:{subtitle:"Alcím",subtitle_tap_action:"Alcímre koppintáskor",title:"Fejléc",title_tap_action:"Fejlécre koppintáskor"},update:{show_buttons_control:"Vezérlő gombok"},vacuum:{commands:"Utasítások",commands_list:{on_off:"Ki/Bekapcsolás"}},weather:{show_conditions:"Állapotok",show_temperature:"Hőmérséklet"}},chip:{"chip-picker":{add:"Chip hozzáadása",chips:"Chip-ek",clear:"Ürítés",edit:"Szerkesztés",select:"Chip kiválasztása",types:{action:"Művelet","alarm-control-panel":"Riasztó",back:"Vissza",conditional:"Feltételes",entity:"Entitás",light:"Fényforrás",menu:"Menü",spacer:"Térköz",template:"Sablon",weather:"Időjárás"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip szerkesztő"}},form:{alignment_picker:{values:{center:"Közepe",default:"Alapértelmezett rendezés",end:"Vége",justify:"Sorkizárt",start:"Kezdete"}},color_picker:{values:{default:"Alapértelmezett szín"}},icon_type_picker:{values:{default:"Alapértelmezett típus","entity-picture":"Entitás kép",icon:"Ikon",none:"Egyik sem"}},info_picker:{values:{default:"Alepértelmezett információ","last-changed":"Utoljára módosítva","last-updated":"Utoljára frissítve",name:"Név",none:"Egyik sem",state:"Állapot"}},layout_picker:{values:{default:"Alapértelmezet elrendezés",horizontal:"Vízszintes elrendezés",vertical:"Függőleges elrendezés"}}}},nn={card:tn,editor:on},rn=Object.freeze({__proto__:null,card:tn,default:nn,editor:on}),an={not_found:"Entitas tidak ditemukan"},sn={card:{chips:{alignment:"Perataan"},climate:{hvac_modes:"Mode HVAC",show_temperature_control:"Kontrol suhu?"},cover:{show_buttons_control:"Tombol kontrol?",show_position_control:"Kontrol posisi?",show_tilt_position_control:"Kontrol kemiringan?"},fan:{show_oscillate_control:"Kontrol osilasi?",show_percentage_control:"Kontrol persentase?"},generic:{collapsible_controls:"Sembunyikan kontrol saat mati",color:"Warna",content_info:"Konten",fill_container:"Isi kontainer",icon_animation:"Animasikan ikon saat aktif?",icon_color:"Warna ikon",icon_type:"Tipe ikon",layout:"Tata letak",primary_info:"Informasi primer",secondary_info:"Informasi sekunder",use_entity_picture:"Gunakan gambar entitas?"},humidifier:{show_target_humidity_control:"Kontrol kelembapan?"},light:{incompatible_controls:"Beberapa kontrol mungkin tidak ditampilkan jika lampu Anda tidak mendukung fitur tersebut.",show_brightness_control:"Kontrol kecerahan?",show_color_control:"Kontrol warna?",show_color_temp_control:"Kontrol suhu warna?",use_light_color:"Gunakan warna lampu"},lock:{lock:"Kunci",open:"Buka",unlock:"Buka kunci"},"media-player":{media_controls:"Kontrol media",media_controls_list:{next:"Lagu berikutnya",on_off:"Nyalakan/Matikan",play_pause_stop:"Putar/jeda/stop",previous:"Lagu sebelumnya",repeat:"Mode pengulangan",shuffle:"Acak"},show_volume_level:"Tampilkan level volume",use_media_artwork:"Gunakan gambar seni media",use_media_info:"Gunakan info media",volume_controls:"Kontrol volume",volume_controls_list:{volume_buttons:"Tombol volume",volume_mute:"Bisukan",volume_set:"Level volume"}},number:{display_mode:"Mode Tampilan",display_mode_list:{buttons:"Tombol",default:"Bawaan (geser)",slider:"Geser"}},template:{badge_color:"Warna lencana",badge_icon:"Ikon lencana",content:"Konten",entity_extra:"Digunakan dalam templat dan tindakan",label:"Label",multiline_secondary:"Info sekunder multibaris?",picture:"Gambar (akan menggantikan ikon)",primary:"Informasi primer",secondary:"Informasi sekunder"},title:{subtitle:"Subjudul",subtitle_tap_action:"Tindakan ketuk subjudul",title:"Judul",title_tap_action:"Tindakan ketuk judul"},update:{show_buttons_control:"Tombol kontrol?"},vacuum:{commands:"Perintah",commands_list:{on_off:"Nyalakan/Matikan"}},weather:{show_conditions:"Kondisi?",show_temperature:"Suhu?"}},chip:{"chip-picker":{add:"Tambah cip",chips:"Cip",clear:"Hapus",edit:"Edit",select:"Pilih cip",types:{action:"Tindakan","alarm-control-panel":"Alarm",back:"Kembali",conditional:"Kondisional",entity:"Entitas",light:"Lampu",menu:"Menu",spacer:"Pemisah",template:"Templat",weather:"Cuaca"}},conditional:{chip:"Cip"},sub_element_editor:{title:"Editor cip"}},form:{alignment_picker:{values:{center:"Tengah",default:"Perataan bawaan",end:"Akhir",justify:"Rata kanan-kiri",start:"Awal"}},color_picker:{values:{default:"Warna bawaan"}},icon_type_picker:{values:{default:"Tipe bawaan","entity-picture":"Gambar entitas",icon:"Ikon",none:"Tidak ada"}},info_picker:{values:{default:"Informasi bawaan","last-changed":"Terakhir Diubah","last-updated":"Terakhir Diperbarui",name:"Nama",none:"Tidak ada",state:"Status"}},layout_picker:{values:{default:"Tata letak bawaan",horizontal:"Tata letak horizontal",vertical:"Tata letak vertikal"}}}},ln={card:an,editor:sn},cn=Object.freeze({__proto__:null,card:an,default:ln,editor:sn}),un={not_found:"Entità non trovata"},dn={card:{chips:{alignment:"Allineamento"},climate:{hvac_modes:"Modalità del termostato",show_temperature_control:"Controllo della temperatura?"},cover:{show_buttons_control:"Pulsanti di controllo",show_position_control:"Controllo percentuale apertura",show_tilt_position_control:"Controllo percentuale inclinazione"},fan:{show_oscillate_control:"Controllo oscillazione",show_percentage_control:"Controllo potenza"},generic:{collapsible_controls:"Nascondi i controlli quando spento",color:"Colore",content_info:"Contenuto",fill_container:"Riempi il contenitore",icon_animation:"Anima l'icona quando attiva",icon_color:"Colore dell'icona",icon_type:"Tipo icona",layout:"Disposizione",primary_info:"Informazione primaria",secondary_info:"Informazione secondaria",use_entity_picture:"Usa l'immagine dell'entità"},humidifier:{show_target_humidity_control:"Controllo umidità"},light:{incompatible_controls:"Alcuni controlli potrebbero non essere mostrati se la tua luce non li supporta.",show_brightness_control:"Controllo luminosità",show_color_control:"Controllo colore",show_color_temp_control:"Controllo temperatura",use_light_color:"Usa il colore della luce"},lock:{lock:"Blocca",open:"Aperto",unlock:"Sblocca"},"media-player":{media_controls:"Controlli media",media_controls_list:{next:"Traccia successiva",on_off:"Accendi/Spegni",play_pause_stop:"Play/Pausa/Stop",previous:"Traccia precedente",repeat:"Ciclo continuo",shuffle:"Riproduzione casuale"},show_volume_level:"Mostra volume",use_media_artwork:"Usa la copertina della sorgente",use_media_info:"Mostra le informazioni della sorgente",volume_controls:"Controlli del Volume",volume_controls_list:{volume_buttons:"Bottoni del volume",volume_mute:"Silenzia",volume_set:"Livello del volume"}},number:{display_mode:"Modalità di visualizzazione",display_mode_list:{buttons:"Pulsanti",default:"Predefinito (cursore)",slider:"Cursore"}},template:{badge_color:"Colore del badge",badge_icon:"Icona del badge",content:"Contenuto",entity_extra:"Usato in templates ed azioni",label:"Etichetta",multiline_secondary:"Abilita frasi multilinea",picture:"Immagine (sostituirà l'icona)",primary:"Informazione primaria",secondary:"Informazione secondaria"},title:{subtitle:"Sottotitolo",subtitle_tap_action:"Azione di tap sul sottotitolo",title:"Titolo",title_tap_action:"Azione di tap sul titolo"},update:{show_buttons_control:"Pulsanti di controllo"},vacuum:{commands:"Comandi",commands_list:{on_off:"Accendi/Spegni"}},weather:{show_conditions:"Condizioni",show_temperature:"Temperatura"}},chip:{"chip-picker":{add:"Aggiungi chip",chips:"Chips",clear:"Rimuovi",edit:"Modifica",select:"Seleziona chip",types:{action:"Azione","alarm-control-panel":"Allarme",back:"Pulsante indietro",conditional:"Condizione",entity:"Entità",light:"Luce",menu:"Menù",spacer:"Distanziere",template:"Modello",weather:"Meteo"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Editor di chip"}},form:{alignment_picker:{values:{center:"Centro",default:"Allineamento predefinito",end:"Fine",justify:"Giustificato",start:"Inizio"}},color_picker:{values:{default:"Colore predefinito"}},icon_type_picker:{values:{default:"Tipo predefinito","entity-picture":"Immagine dell'entità",icon:"Icona",none:"Nessuna"}},info_picker:{values:{default:"Informazione predefinita","last-changed":"Ultimo cambiamento","last-updated":"Ultimo aggiornamento",name:"Nome",none:"Nessuno",state:"Stato"}},layout_picker:{values:{default:"Disposizione predefinita",horizontal:"Disposizione orizzontale",vertical:"Disposizione verticale"}}}},hn={card:un,editor:dn},pn=Object.freeze({__proto__:null,card:un,default:hn,editor:dn}),mn={card:{chips:{alignment:"정렬"},climate:{hvac_modes:"HVAC 모드",show_temperature_control:"온도 조절 표시"},cover:{show_buttons_control:"컨트롤 버튼 표시",show_position_control:"위치 컨트롤 표시",show_tilt_position_control:"기울기 컨트롤 표시"},fan:{show_oscillate_control:"오실레이트 컨트롤",show_percentage_control:"퍼센트 컨트롤"},generic:{collapsible_controls:"꺼져있을 때 컨트롤 접기",content_info:"내용 정보",fill_container:"콘테이너 채우기",icon_animation:"활성화 시 아이콘 애니메이션 사용",icon_color:"아이콘 색",icon_type:"아이콘 타입",layout:"레이아웃",primary_info:"기본 정보",secondary_info:"보조 정보",use_entity_picture:"엔티티 사진 사용"},humidifier:{show_target_humidity_control:"습도 조절 표시"},light:{incompatible_controls:"조명이 기능을 지원하지 않는 경우 일부 컨트롤이 표시되지 않을 수 있습니다.",show_brightness_control:"밝기 컨트롤 표시",show_color_control:"색 컨트롤 표시",show_color_temp_control:"색 온도 컨트롤 표시",use_light_color:"조명 색 사용"},lock:{lock:"잠금",open:"열기",unlock:"잠금 해제"},"media-player":{media_controls:"미디어 컨트롤",media_controls_list:{next:"다음 트랙",on_off:"켜기/끄기",play_pause_stop:"재생/일시 정지/정지",previous:"이전 트랙",repeat:"반복 모드",shuffle:"섞기"},show_volume_level:"볼륨 레벨 표시",use_media_artwork:"미디어 아트워크 사용",use_media_info:"미디어 정보 사용",volume_controls:"볼륨 컨트롤",volume_controls_list:{volume_buttons:"볼륨 버튼",volume_mute:"음소거",volume_set:"볼륨 레벨"}},template:{badge_color:"뱃지 색",badge_icon:"뱃지 아이콘",content:"내용",entity_extra:"템플릿 및 작업에 사용",multiline_secondary:"Multiline secondary?",picture:"그림 (아이콘 대체)",primary:"기본 정보",secondary:"보조 정보"},title:{subtitle:"부제목",subtitle_tap_action:"부제목 탭 액션",title:"제목",title_tap_action:"제목 탭 액션"},update:{show_buttons_control:"컨트롤 버튼 표시"},vacuum:{commands:"명령어",commands_list:{on_off:"켜기/끄기"}},weather:{show_conditions:"조건 표시",show_temperature:"온도 표시"}},chip:{"chip-picker":{add:"칩 추가",chips:"칩",clear:"클리어",edit:"수정",select:"칩 선택",types:{action:"액션","alarm-control-panel":"알람",back:"이전",conditional:"Conditional",entity:"엔티티",light:"조명",menu:"메뉴",template:"템플릿",weather:"날씨"}},conditional:{chip:"칩"},sub_element_editor:{title:"칩 에디터"}},form:{alignment_picker:{values:{center:"중앙",default:"기본 정렬",end:"끝",justify:"행 정렬",start:"시작"}},color_picker:{values:{default:"기본 색"}},icon_type_picker:{values:{default:"기본 타입","entity-picture":"엔티티 사진",icon:"아이콘",none:"없음"}},info_picker:{values:{default:"기본 정보","last-changed":"마지막 변경","last-updated":"마지막 업데이트",name:"이름",none:"없음",state:"상태"}},layout_picker:{values:{default:"기본 레이아웃",horizontal:"수평 레이아웃",vertical:"수직 레이아웃"}}}},_n={editor:mn},gn=Object.freeze({__proto__:null,default:_n,editor:mn}),fn={not_found:"Enhet ikke funnet"},bn={card:{chips:{alignment:"Justering"},climate:{hvac_modes:"HVAC-moduser",show_temperature_control:"Temperaturkontroll?"},cover:{show_buttons_control:"Kontrollere med knapper?",show_position_control:"Posisjonskontroll?",show_tilt_position_control:"Vippe kontroll?"},fan:{show_oscillate_control:"Oscillerende kontroll?",show_percentage_control:"Prosentvis kontroll?"},generic:{collapsible_controls:"Skjul kontroller når av",color:"Farge",content_info:"Innhold",fill_container:"Fyll beholder",icon_animation:"Animer ikon når aktivt?",icon_color:"Ikon farge",icon_type:"Ikontype",layout:"Oppsett",primary_info:"Primærinformasjon",secondary_info:"Sekundærinformasjon",use_entity_picture:"Bruk enhetsbilde?"},humidifier:{show_target_humidity_control:"Fuktighetskontroll?"},light:{incompatible_controls:"Noen kontroller vises kanskje ikke hvis lyset ditt ikke støtter denne funksjonen.",show_brightness_control:"Lysstyrkekontroll?",show_color_control:"Fargekontroll?",show_color_temp_control:"Temperatur fargekontroll?",use_light_color:"Bruk lys farge"},lock:{lock:"Lås",open:"Åpne",unlock:"Lås opp"},"media-player":{media_controls:"Media kontroller",media_controls_list:{next:"Neste spor",on_off:"Slå på/av",play_pause_stop:"Spill/pause/stopp",previous:"Forrige spor",repeat:"Gjenta",shuffle:"Bland"},show_volume_level:"Vis volumnivå",use_media_artwork:"Bruk mediabilde",use_media_info:"Bruk mediainformasjon",volume_controls:"Volumkontroller",volume_controls_list:{volume_buttons:"Volumknapper",volume_mute:"Demp",volume_set:"Volumnivå"}},number:{display_mode:"Visningsmodus",display_mode_list:{buttons:"Knapper",default:"Standard (skyveknapp)",slider:"Skyveknapp"}},template:{badge_color:"Badge farge",badge_icon:"Badge ikon",content:"Innhold",entity_extra:"Brukes i maler og handlinger",label:"Etikett",multiline_secondary:"Multilinje sekundær?",picture:"Bilde (erstatter ikonet)",primary:"Primærinformasjon",secondary:"Sekundærinformasjon"},title:{subtitle:"Undertekst",subtitle_tap_action:"Undertekst tap action",title:"Tittel",title_tap_action:"Tittel tap action"},update:{show_buttons_control:"Kontroller knapper?"},vacuum:{commands:"Kommandoer",commands_list:{on_off:"Slå på/av"}},weather:{show_conditions:"Forhold?",show_temperature:"Temperatur?"}},chip:{"chip-picker":{add:"Legg til chip",chips:"Chips",clear:"Klare",edit:"Endre",select:"Velg chip",types:{action:"Handling","alarm-control-panel":"Alarm",back:"Tilbake",conditional:"Betinget",entity:"Entitet",light:"Lys",menu:"Meny",spacer:"Mellomrom",template:"Mal",weather:"Vær"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip redaktør"}},form:{alignment_picker:{values:{center:"Senter",default:"Standard justering",end:"Slutt",justify:"Blokkjuster",start:"Start"}},color_picker:{values:{default:"Standard farge"}},icon_type_picker:{values:{default:"Standard type","entity-picture":"Enhetsbilde",icon:"Ikon",none:"Ingen"}},info_picker:{values:{default:"Standard informasjon","last-changed":"Sist endret","last-updated":"Sist oppdatert",name:"Navn",none:"Ingen",state:"Tilstand"}},layout_picker:{values:{default:"Standardoppsett",horizontal:"Horisontalt oppsett",vertical:"Vertikalt oppsett"}}}},vn={card:fn,editor:bn},yn=Object.freeze({__proto__:null,card:fn,default:vn,editor:bn}),wn={not_found:"Entiteit niet gevonden"},kn={card:{chips:{alignment:"Uitlijning"},climate:{hvac_modes:"HVAC-Modi",show_temperature_control:"Temperatuur bediening?"},cover:{show_buttons_control:"Bedieningsknoppen?",show_position_control:"Positie bediening?",show_tilt_position_control:"Kantel bediening?"},empty:{no_config_options:"Deze kaart heeft geen configuratie opties."},fan:{show_direction_control:"Richting bediening?",show_oscillate_control:"Oscillatie bediening?",show_percentage_control:"Bediening middels percentage?"},generic:{collapsible_controls:"Bedieningselementen verbergen wanneer uitgeschakeld",color:"Kleur",content_info:"Inhoud",fill_container:"Vul container",icon_animation:"Icoon animeren indien actief?",icon_color:"Icoon kleur",icon_type:"Icoon type",layout:"Lay-out",primary_info:"Primaire informatie",secondary_info:"Secundaire informatie",use_entity_picture:"Gebruik afbeelding van entiteit?"},humidifier:{show_target_humidity_control:"Vochtigheid bediening?"},light:{incompatible_controls:"Sommige bedieningselementen worden mogelijk niet weergegeven als uw lamp deze functie niet ondersteunt.",show_brightness_control:"Helderheidsbediening?",show_color_control:"Kleur bediening?",show_color_temp_control:"Kleurtemperatuur bediening?",use_light_color:"Gebruik licht kleur"},lock:{lock:"Vergrendel",open:"Open",unlock:"Ontgrendel"},"media-player":{media_controls:"Mediabediening",media_controls_list:{next:"Volgende nummer",on_off:"Zet aan/uit",play_pause_stop:"Speel/pauze/stop",previous:"Vorige nummer",repeat:"Herhalen",shuffle:"Willekeurig afspelen"},show_volume_level:"Toon volumeniveau",use_media_artwork:"Gebruik media omslag",use_media_info:"Gebruik media informatie",volume_controls:"Volumebediening",volume_controls_list:{volume_buttons:"Volume knoppen",volume_mute:"Dempen",volume_set:"Volumeniveau"}},number:{display_mode:"Weergave Modus",display_mode_list:{buttons:"Knoppen",default:"Standaard (schuifbalk)",slider:"Schuifbalk"}},template:{badge_color:"Badge kleur",badge_icon:"Badge icoon",content:"Inhoud",entity_extra:"Gebruikt in sjablonen en acties",label:"Label",multiline_secondary:"Secundaire informatie op meerdere regels tonen?",picture:"Afbeelding (zal het icoon vervangen)",primary:"Primaire informatie",secondary:"Secundaire informatie"},title:{subtitle:"Ondertitel",subtitle_tap_action:"Ondertitel tik actie",title:"Titel",title_tap_action:"Titel tik actie"},update:{show_buttons_control:"Bedieningsknoppen?"},vacuum:{commands:"Commando's",commands_list:{on_off:"Zet aan/uit"}},weather:{show_conditions:"Weersomstandigheden?",show_temperature:"Temperatuur?"}},chip:{"chip-picker":{add:"Toevoegen chip",chips:"Chips",clear:"Maak leeg",edit:"Bewerk",select:"Selecteer chip",types:{action:"Actie","alarm-control-panel":"Alarm",back:"Terug",conditional:"Voorwaardelijk",entity:"Entiteit",light:"Licht",menu:"Menu",spacer:"Afstandhouder",template:"Sjabloon",weather:"Weer"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip-editor"}},form:{alignment_picker:{values:{center:"Midden",default:"Standaard uitlijning",end:"Einde",justify:"Uitlijnen",start:"Begin"}},color_picker:{values:{default:"Standaard kleur"}},icon_type_picker:{values:{default:"Standaard icoon type","entity-picture":"Entiteit afbeelding",icon:"Icoon",none:"Geen"}},info_picker:{values:{default:"Standaard informatie","last-changed":"Laatst gewijzigd","last-updated":"Laatst bijgewerkt",name:"Naam",none:"Geen",state:"Staat"}},layout_picker:{values:{default:"Standaard lay-out",horizontal:"Horizontale lay-out",vertical:"Verticale lay-out"}}}},xn={card:wn,editor:kn},zn=Object.freeze({__proto__:null,card:wn,default:xn,editor:kn}),En={not_found:"Nie znaleziono encji"},Cn={card:{chips:{alignment:"Wyrównanie"},climate:{hvac_modes:"Tryby urządzenia",show_temperature_control:"Sterowanie temperaturą?"},cover:{show_buttons_control:"Przyciski sterujące?",show_position_control:"Sterowanie położeniem?",show_tilt_position_control:"Sterowanie poziomem otwarcia?"},fan:{show_direction_control:"Kontrola kierunku?",show_oscillate_control:"Sterowanie oscylacją?",show_percentage_control:"Sterowanie procentowe?"},generic:{collapsible_controls:"Zwiń sterowanie, jeśli wyłączone",color:"Kolor",content_info:"Zawartość",fill_container:"Wypełnij zawartością",icon_animation:"Animować, gdy aktywny?",icon_color:"Kolor ikony",icon_type:"Typ ikony",layout:"Układ",primary_info:"Informacje główne",secondary_info:"Informacje drugorzędne",use_entity_picture:"Użyć obrazu encji?"},humidifier:{show_target_humidity_control:"Sterowanie wilgotnością?"},light:{incompatible_controls:"Niektóre funkcje są niewidoczne, jeśli światło ich nie obsługuje.",show_brightness_control:"Sterowanie jasnością?",show_color_control:"Sterowanie kolorami?",show_color_temp_control:"Sterowanie temperaturą światła?",use_light_color:"Użyj koloru światła"},lock:{lock:"Zablokuj",open:"Otwórz",unlock:"Odblokuj"},"media-player":{media_controls:"Sterowanie multimediami",media_controls_list:{next:"Następne nagranie",on_off:"Włącz/wyłącz",play_pause_stop:"Odtwórz/Pauza/Zatrzymaj",previous:"Poprzednie nagranie",repeat:"Powtarzanie",shuffle:"Losowo"},show_volume_level:"Wyświetl poziom głośności",use_media_artwork:"Użyj okładek multimediów",use_media_info:"Użyj informacji o multimediach",volume_controls:"Sterowanie głośnością",volume_controls_list:{volume_buttons:"Przyciski głośności",volume_mute:"Wycisz",volume_set:"Poziom głośności"}},number:{display_mode:"Sposób wyświetlania",display_mode_list:{buttons:"Przyciski",default:"Domyślnie (suwak)",slider:"Suwak"}},template:{badge_color:"Kolor odznaki",badge_icon:"Ikona odznaki",content:"Zawartość",entity_extra:"Używane w szablonach i akcjach",label:"Etykieta",multiline_secondary:"Drugorzędne wielowierszowe?",picture:"Obraz (zamiast ikony)",primary:"Informacje główne",secondary:"Informacje drugorzędne"},title:{subtitle:"Podtytuł",subtitle_tap_action:"Akcja na podtytule",title:"Tytuł",title_tap_action:"Akcja na tytule"},update:{show_buttons_control:"Przyciski sterujące?"},vacuum:{commands:"Polecenia",commands_list:{on_off:"Włącz/Wyłącz"}},weather:{show_conditions:"Warunki?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Dodaj czip",chips:"Czipy",clear:"Wyczyść",edit:"Edytuj",select:"Wybierz czip",types:{action:"Akcja","alarm-control-panel":"Alarm",back:"Wstecz",conditional:"Warunkowy",entity:"Encja",light:"Światło",menu:"Menu",spacer:"Odstęp",template:"Szablon",weather:"Pogoda"}},conditional:{chip:"Czip"},sub_element_editor:{title:"Edytor czipów"}},form:{alignment_picker:{values:{center:"Wyśrodkowanie",default:"Wyrównanie domyślne",end:"Wyrównanie do prawej",justify:"Justowanie",start:"Wyrównanie do lewej"}},color_picker:{values:{default:"Domyślny kolor"}},icon_type_picker:{values:{default:"Domyślny typ","entity-picture":"Obraz encji",icon:"Ikona",none:"Brak"}},info_picker:{values:{default:"Domyślne informacje","last-changed":"Ostatnia zmiana","last-updated":"Ostatnia aktualizacja",name:"Nazwa",none:"Brak",state:"Stan"}},layout_picker:{values:{default:"Układ domyślny",horizontal:"Układ poziomy",vertical:"Układ pionowy"}}}},An={card:En,editor:Cn},Mn=Object.freeze({__proto__:null,card:En,default:An,editor:Cn}),Sn={not_found:"Entidade não encontrada"},$n={card:{chips:{alignment:"Alinhamento"},climate:{hvac_modes:"Modos do HVAC",show_temperature_control:"Controle de temperatura?"},cover:{show_buttons_control:"Botões de controle?",show_position_control:"Controle de posição?",show_tilt_position_control:"Controle de inclinação?"},empty:{no_config_options:"Esse card não possui opções de configuração."},fan:{show_direction_control:"Controle de direção?",show_oscillate_control:"Controle de oscilação?",show_percentage_control:"Controle de porcentagem?"},generic:{collapsible_controls:"Recolher controles quando desligado",color:"Cor",content_info:"Conteúdo",fill_container:"Preencher espaço",icon_animation:"Animar ícone quando ativo?",icon_color:"Cor do ícone",icon_type:"Tipo do ícone",layout:"Layout",primary_info:"Informação primária",secondary_info:"Informação secundária",use_entity_picture:"Usar imagem da entidade?"},humidifier:{show_target_humidity_control:"Controle de umidade?"},light:{incompatible_controls:"Alguns controles podem não ser exibidos se sua luz não suportar o recurso.",show_brightness_control:"Controle de brilho?",show_color_control:"Controle de cor?",show_color_temp_control:"Controle de temperatura de cor?",use_light_color:"Usar cor da luz"},lock:{lock:"Bloquear",open:"Abrir",unlock:"Desbloquear"},"media-player":{media_controls:"Controles de mídia",media_controls_list:{next:"Próxima faixa",on_off:"Ligar/Desligar",play_pause_stop:"Reproduzir/pausar/parar",previous:"Faixa anterior",repeat:"Modo repetição",shuffle:"Embaralhar"},show_volume_level:"Mostrar nível de volume",use_media_artwork:"Usar arte da mídia",use_media_info:"Usar informação da mídia",volume_controls:"Controles de volume",volume_controls_list:{volume_buttons:"Botões de volume",volume_mute:"Mudo",volume_set:"Nível de volume"}},number:{display_mode:"Modo de exibição",display_mode_list:{buttons:"Botões",default:"Padrão (deslizante)",slider:"Deslizante"}},template:{badge_color:"Cor do badge",badge_icon:"Ícone do badge",content:"Conteúdo",entity_extra:"Usado em modelos e ações",label:"Label",multiline_secondary:"Multilinha secundária?",picture:"Imagem (irá substituir o ícone)",primary:"Informação primária",secondary:"Informação secundária"},title:{subtitle:"Legenda",subtitle_tap_action:"Ação de toque na legenda",title:"Título",title_tap_action:"Ação de toque no título"},update:{show_buttons_control:"Botões de controle?"},vacuum:{commands:"Comandos",commands_list:{on_off:"Ligar/Desligar"}},weather:{show_conditions:"Condições?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Adicionar chip",chips:"Chips",clear:"Limpar",edit:"Editar",select:"Selecionar chip",types:{action:"Ação","alarm-control-panel":"Alarme",back:"Voltar",conditional:"Condicional",entity:"Entidade",light:"Luz",menu:"Menu",quickbar:"Barra rápida",spacer:"Espaçador",template:"Template",weather:"Clima"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Editor de chip"}},form:{alignment_picker:{values:{center:"Centro",default:"Alinhamento padrão",end:"Fim",justify:"Justificado",start:"Início"}},color_picker:{values:{default:"Cor padrão"}},icon_type_picker:{values:{default:"Tipo padrão","entity-picture":"Imagem da entidade",icon:"Ícone",none:"Nenhum"}},info_picker:{values:{default:"Informação padrão","last-changed":"Última alteração","last-updated":"Última atualização",name:"Nome",none:"Nenhum",state:"Estado"}},layout_picker:{values:{default:"Layout padrão",horizontal:"Layout horizontal",vertical:"Layout vertical"}}}},Tn={card:Sn,editor:$n},Pn=Object.freeze({__proto__:null,card:Sn,default:Tn,editor:$n}),jn={not_found:"Entidade não encontrada"},On={card:{chips:{alignment:"Alinhamento"},climate:{hvac_modes:"Modos HVAC",show_temperature_control:"Controlo de temperatura?"},cover:{show_buttons_control:"Botões de controlo?",show_position_control:"Controlo de posição?",show_tilt_position_control:"Controlo de inclinação?"},fan:{show_oscillate_control:"Controlo de oscilação?",show_percentage_control:"Controlo de percentagem?"},generic:{collapsible_controls:"Colapsar controlos quando desligado",color:"Cor",content_info:"Conteúdo",fill_container:"Preencher contentor",icon_animation:"Animar ícone quando ativo?",icon_color:"Cor do ícone",icon_type:"Tipo de ícone",layout:"Layout",primary_info:"Informação principal",secondary_info:"Informação secundária",use_entity_picture:"Usar imagem da entidade?"},humidifier:{show_target_humidity_control:"Controlo de humidade?"},light:{incompatible_controls:"Alguns controlos podem não ser exibidos se a luz não suportar a funcionalidade.",show_brightness_control:"Controlo de brilho?",show_color_control:"Controlo de cor?",show_color_temp_control:"Controlo de temperatura da cor?",use_light_color:"Usar cor da luz"},lock:{lock:"Trancar",open:"Aberto",unlock:"Destrancar"},"media-player":{media_controls:"Controlos de media",media_controls_list:{next:"Próxima faixa",on_off:"Ligar/Desligar",play_pause_stop:"Tocar/pausa/stop",previous:"Faixa anterior",repeat:"Modo repetir",shuffle:"Baralhar"},show_volume_level:"Mostrar nível do volume",use_media_artwork:"Usar arte do media",use_media_info:"Usar informação do media",volume_controls:"Controlos de volume",volume_controls_list:{volume_buttons:"Botões de volume",volume_mute:"Calar",volume_set:"Nível do volume"}},number:{display_mode:"Modo de exibição",display_mode_list:{buttons:"Botões",default:"Por defeito (slider)",slider:"Deslizador"}},template:{badge_color:"Cor do crachá",badge_icon:"Icóne do crachá",content:"Conteúdo",entity_extra:"Usado em modelos e ações",label:"Rótulo",multiline_secondary:"Secundária multilinha?",picture:"Imagem (irá substituir o ícone)",primary:"Informação principal",secondary:"Informação secundária"},title:{subtitle:"Subtítulo",subtitle_tap_action:"Ação ao tocar no subtítulo",title:"Título",title_tap_action:"Ação ao tocar no título"},update:{show_buttons_control:"Botões de controlo?"},vacuum:{commands:"Comandos",commands_list:{on_off:"Ligar/Desligar"}},weather:{show_conditions:"Condições?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Adicionar ficha",chips:"Fichas",clear:"Limpar",edit:"Editar",select:"Selecionar ficha",types:{action:"Ação","alarm-control-panel":"Alarme",back:"Voltar",conditional:"Condicional",entity:"Entidade",light:"Iluminação",menu:"Menu",spacer:"Espaçador",template:"Modelo",weather:"Clima"}},conditional:{chip:"Ficha"},sub_element_editor:{title:"Editor de fichas"}},form:{alignment_picker:{values:{center:"Centrado",default:"Alinhamento predefinido",end:"Fim",justify:"Justificado",start:"Início"}},color_picker:{values:{default:"Cor padrão"}},icon_type_picker:{values:{default:"Tipo predefinido","entity-picture":"Entidade de imagem",icon:"Ícone",none:"Nenhum"}},info_picker:{values:{default:"Informações padrão","last-changed":"Última alteração","last-updated":"Última atualização",name:"Nome",none:"Nenhum",state:"Estado"}},layout_picker:{values:{default:"Layout padrão",horizontal:"Layout horizontal",vertical:"Layout vertical"}}}},In={card:jn,editor:On},Dn=Object.freeze({__proto__:null,card:jn,default:In,editor:On}),Hn={card:{chips:{alignment:"Aliniere"},climate:{hvac_modes:"Moduri HVAC",show_temperature_control:"Comenzi temperatură?"},cover:{show_buttons_control:"Comenzi pentru control?",show_position_control:"Comandă pentru poziție?",show_tilt_position_control:"Comandă pentru înclinare?"},fan:{icon_animation:"Animare pictograma la activare?",show_oscillate_control:"Comandă oscilație?",show_percentage_control:"Comandă procent?"},generic:{collapsible_controls:"Restrângere la dezactivare",content_info:"Conținut",fill_container:"Umplere container",icon_color:"Culoare pictogramă",icon_type:"Tip pictogramă",layout:"Aranjare",primary_info:"Informație principală",secondary_info:"Informație secundară",use_entity_picture:"Imagine?"},humidifier:{show_target_humidity_control:"Comenzi umiditate?"},light:{incompatible_controls:"Unele comenzi ar putea să nu fie afișate dacă lumina nu suportă această caracteristică.",show_brightness_control:"Comandă pentru strălucire?",show_color_control:"Comandă pentru culoare?",show_color_temp_control:"Comandă pentru temperatură de culoare?",use_light_color:"Folosește culoarea luminii"},lock:{lock:"Încuie",open:"Deschide",unlock:"Descuie"},"media-player":{media_controls:"Comenzi media",media_controls_list:{next:"Pista următoare",on_off:"Pornit/Oprit",play_pause_stop:"Redare/Pauză/Stop",previous:"Pista anterioară",repeat:"Mod repetare",shuffle:"Amestecare"},show_volume_level:"Nivel volum",use_media_artwork:"Grafică media",use_media_info:"Informații media",volume_controls:"Comenzi volum",volume_controls_list:{volume_buttons:"Comenzi volum",volume_mute:"Dezactivare sunet",volume_set:"Nivel volum"}},template:{badge_color:"Culoare insignă",badge_icon:"Pictogramă insignă",content:"Conținut",entity_extra:"Folosită în șabloane și acțiuni",multiline_secondary:"Informație secundară pe mai multe linii?",picture:"Imagine (inlocuiește pictograma)",primary:"Informație principală",secondary:"Informație secundară"},title:{subtitle:"Subtitlu",title:"Titlu"},update:{show_buttons_control:"Comenzi control?"},vacuum:{commands:"Comenzi"},weather:{show_conditions:"Condiții?",show_temperature:"Temperatură?"}},chip:{"chip-picker":{add:"Adaugă jeton",chips:"Jetoane",clear:"Șterge",edit:"Modifică",select:"Alege jeton",types:{action:"Acțiune","alarm-control-panel":"Alarmă",back:"Înapoi",conditional:"Condițional",entity:"Entitate",light:"Lumină",menu:"Meniu",template:"Șablon",weather:"Vreme"}},conditional:{chip:"Jeton"},sub_element_editor:{title:"Editor jeton"}},form:{alignment_picker:{values:{center:"Centrat",default:"Aliniere implicită",end:"Dreapta",justify:"Umplere",start:"Stânga"}},color_picker:{values:{default:"Culoare implicită"}},icon_type_picker:{values:{default:"Tip implicit","entity-picture":"Imagine",icon:"Pictogramă",none:"Niciuna"}},info_picker:{values:{default:"Informație implicită","last-changed":"Ultima modificare","last-updated":"Ultima actulizare",name:"Nume",none:"Niciuna",state:"Stare"}},layout_picker:{values:{default:"Aranjare implicită",horizontal:"Orizontală",vertical:"Verticală"}}}},Nn={editor:Hn},Bn=Object.freeze({__proto__:null,default:Nn,editor:Hn}),Ln={not_found:"Сущность не найдена"},Rn={card:{chips:{alignment:"Выравнивание"},climate:{hvac_modes:"Режимы работы",show_temperature_control:"Управлять целевой температурой?"},cover:{show_buttons_control:"Добавить кнопки управления?",show_position_control:"Управлять позицией?",show_tilt_position_control:"Управлять наклоном?"},empty:{no_config_options:"Эта карточка не имеет опций конфигурации."},fan:{icon_animation:"Анимировать иконку когда включено?",show_direction_control:"Направление?",show_oscillate_control:"Oscillate control?",show_percentage_control:"Управлять процентами?"},generic:{collapsible_controls:"Сворачивать элементы управления при выключении",color:"Цвет",content_info:"Содержимое",fill_container:"Заполнение",icon_animation:"Анимировать иконку, когда активна?",icon_color:"Цвет иконки",icon_type:"Тип иконки",layout:"Расположение",primary_info:"Основная информация",secondary_info:"Второстепенная информация",use_entity_picture:"Использовать изображение объекта?"},humidifier:{show_target_humidity_control:"Управлять целевым уровенем влажности?"},light:{incompatible_controls:"Некоторые элементы управления могут не отображаться, если ваш светильник не поддерживает эти функции.",show_brightness_control:"Управлять яркостью?",show_color_control:"Управлять цветом?",show_color_temp_control:"Управлять цветовой температурой?",use_light_color:"Использовать текущий цвет света"},lock:{lock:"Закрыто",open:"Открыто",unlock:"Разблокировано"},"media-player":{media_controls:"Управление медиа-устройством",media_controls_list:{next:"Следующий трек",on_off:"Включение/выключение",play_pause_stop:"Воспроизведение/пауза/остановка",previous:"Предыдущий трек",repeat:"Режим повтора",shuffle:"Перемешивание"},show_volume_level:"Показать уровень громкости",use_media_artwork:"Использовать обложку с медиа-устройства",use_media_info:"Использовать информацию с медиа-устройства",volume_controls:"Регулятор громкости",volume_controls_list:{volume_buttons:"Кнопки громкости",volume_mute:"Без звука",volume_set:"Уровень громкости"}},number:{display_mode:"Режим отображения",display_mode_list:{buttons:"Кнопки",default:"Стандартно (слайдер)",slider:"Слайдер"}},template:{badge_color:"Цвет значка",badge_icon:"Иконка значка",content:"Содержимое",entity_extra:"Используется в шаблонах и действиях",label:"Ярлык",multiline_secondary:"Многострочная Второстепенная информация?",picture:"Изображение (заменить иконку)",primary:"Основная информация",secondary:"Второстепенная информация"},title:{subtitle:"Подзаголовок",subtitle_tap_action:"Действие при нажатии на подзаголовок",title:"Заголовок",title_tap_action:"Действие при нажатии на заголовок"},update:{show_buttons_control:"Кнопки управления?"},vacuum:{commands:"Команды",commands_list:{on_off:"Включить/выключить"}},weather:{show_conditions:"Условия?",show_temperature:"Температура?"}},chip:{"chip-picker":{add:"Добавить мини-карточку",chips:"Мини-карточки",clear:"Очистить",edit:"Изменить",select:"Выбрать мини-карточку",types:{action:"Действие","alarm-control-panel":"Тревога",back:"Назад",conditional:"Условия",entity:"Объект",light:"Освещение",menu:"Меню",quickbar:"Панель быстрого доступа",spacer:"Пробел",template:"Шаблон",weather:"Погода"}},conditional:{chip:"Мини-карточка"},sub_element_editor:{title:"Редактор мини-карточек"}},form:{alignment_picker:{values:{center:"По центру",default:"Выравнивание по умолчанию",end:"К концу",justify:"На всю ширину",start:"К началу"}},color_picker:{values:{default:"Цвет по умолчанию"}},icon_type_picker:{values:{default:"По умолчанию","entity-picture":"Изображение",icon:"Иконка",none:"Нет"}},info_picker:{values:{default:"По умолчанию","last-changed":"Последнее изменение","last-updated":"Последнее обновление",name:"Имя",none:"Нет",state:"Статус"}},layout_picker:{values:{default:"Расположение по умолчанию",horizontal:"Горизонтальное расположение",vertical:"Вертикальное расположение"}}}},Vn={card:Ln,editor:Rn},Un=Object.freeze({__proto__:null,card:Ln,default:Vn,editor:Rn}),Fn={not_found:"Entita nenájdená"},Gn={badge:{template:{area_helper:"Používa sa v šablónach",content:"Obsah",entity_helper:"Používa sa v šablónach a interakciách",label:"Nápis"}},card:{chips:{alignment:"Zarovnanie"},climate:{hvac_modes:"HVAC mód",show_temperature_control:"Ovládanie teploty?"},cover:{show_buttons_control:"Zobraziť ovládacie tlačidlá?",show_position_control:"Ovládanie pozície?",show_tilt_position_control:"Ovládanie natočenia?"},empty:{no_config_options:"Táto karta nemá žiadne možnosti konfigurácie."},fan:{show_direction_control:"Ovládanie smeru?",show_oscillate_control:"Ovládanie oscilácie?",show_percentage_control:"Ovládanie rýchlosti v percentách?"},generic:{area:"Oblasť",collapsible_controls:"Skryť ovládanie v stave VYP",color:"Farba",content_info:"Obsah",entity:"Entita",fill_container:"Vyplniť priestor",icon_animation:"Animovaná ikona v stave ZAP?",icon_color:"Farba ikony",icon_type:"Typ ikony",layout:"Rozloženie",picture:"Obrázok",picture_helper:"Ak je nastavené, nahradí ikonu.",primary_info:"Základné info",secondary_info:"Doplnkové info",use_entity_picture:"Použiť obrázok entity?"},humidifier:{show_target_humidity_control:"Ovládanie vlhkosti?"},light:{incompatible_controls:"Niektoré ovládacie prvky sa nemusia zobraziť, pokiaľ ich svetlo nepodporuje.",show_brightness_control:"Ovládanie jasu?",show_color_control:"Ovládanie farby?",show_color_temp_control:"Ovládanie teploty farby?",use_light_color:"Použiť farbu svetla"},lock:{lock:"Zamknuté",open:"Otvorené",unlock:"Odomknuté"},"media-player":{media_controls:"Ovládanie média",media_controls_list:{next:"Ďalšia",on_off:"Zap / Vyp",play_pause_stop:"Spustiť/pauza/stop",previous:"Predchádzajúca",repeat:"Opakovať",shuffle:"Premiešať"},show_volume_level:"Zobraziť úroveň hlasitosti",use_media_artwork:"Použiť obrázok z média",use_media_info:"Použiť info o médiu",volume_controls:"Ovládanie hlasitosti",volume_controls_list:{volume_buttons:"Tlačidlá hlasitosti",volume_mute:"Stlmiť",volume_set:"Úroveň hlasitosti"}},number:{display_mode:"Režim zobrazenia",display_mode_list:{buttons:"Tlačidlá",default:"Predvolené (posúvač)",slider:"Posúvač"}},template:{area:"Oblasť",area_helper:"Používa sa v šablónach a funkciách",badge:"Odznak",badge_color:"Farba odznaku",badge_icon:"Ikona odznaku",badge_text:"Text odznaku",badge_text_helper:"Ak je nastavené, nahradí ikonu.",content:"Obsah",entity_extra:"Použitá v šablónach a akciách",entity_helper:"Používa sa v šablónach, interakciách a funkciách",entity_helper_legacy:"Používa sa v šablónach a interakciách",label:"Štítok",layout:"Rozloženie",multiline_secondary:"Povoliť viacriadkové doplnkové informácie",multiline_secondary_helper:"Karta môže byť vyššia, aby sa do nej vošiel text, a nemusí byť vždy zarovnaná s mriežkovým systémom.",picture:"Obrázok (nahrádza ikonu)",primary:"Základné info",secondary:"Doplnkové info"},title:{subtitle:"Podnadpis",subtitle_tap_action:"Akcia klepnutia na titulky",title:"Nadpis",title_tap_action:"Akcia klepnutia na názov"},update:{show_buttons_control:"Zobraziť ovládacie tlačidlá?"},vacuum:{commands:"Príkazy",commands_list:{on_off:"Zapnúť/Vypnúť"}},weather:{show_conditions:"Zobraziť podmienky?",show_temperature:"Zobraziť teplotu?"}},chip:{"chip-picker":{add:"Pridať štítok",chips:"Štítky",clear:"Vymazať",edit:"Editovať",select:"Vybrať štítok",types:{action:"Akcia","alarm-control-panel":"Alarm",back:"Späť",conditional:"Podmienené",entity:"Entita",light:"Svetlo",menu:"Menu",quickbar:"Rýchla lišta",spacer:"Medzera",template:"Šablóna",weather:"Počasie"}},conditional:{chip:"Čip"},sub_element_editor:{title:"Editor štítkov"}},form:{alignment_picker:{values:{center:"Stred",default:"Predvolené zarovnanie",end:"Koniec",justify:"Vyplniť",start:"Začiatok"}},color_picker:{values:{default:"Predvolená farba"}},icon_type_picker:{values:{default:"Predvolený typ","entity-picture":"Obrázok entity",icon:"Ikona",none:"Žiadny"}},info_picker:{values:{default:"Predvolené informácie","last-changed":"Posledná zmena","last-updated":"Posledná aktualizácia",name:"Názov",none:"Žiadna",state:"Stav"}},layout_picker:{values:{default:"Predvolené rozloženie",horizontal:"Vodorovné rozloženie",vertical:"Zvislé rozloženie"}}},section:{badge:"Odznak",content:"Obsah",context:"Kontext",features:"Funkcie",interactions:"Interakcie",layout:"Rozloženie"}},Kn={description:"Nastavenie vašej karty bolo prenesené do novej verzie. Viac informácií o zmenách nájdete na {link}.",ok:"Ok",post:"príspevku na GitHub",revert:"Vrátiť späť",title:"Karta aktualizovaná"},Zn={card:Fn,editor:Gn,migration:Kn},Wn=Object.freeze({__proto__:null,card:Fn,default:Zn,editor:Gn,migration:Kn}),qn={not_found:"Entiteta ni najdena"},Xn={card:{chips:{alignment:"Poravnava"},climate:{hvac_modes:"HVAC načini",show_temperature_control:"Nadzor temperature?"},cover:{show_buttons_control:"Gumbi za upravljanje?",show_position_control:"Nadzor položaja?",show_tilt_position_control:"Nadzor nagiba?"},fan:{show_oscillate_control:"Kontrola nihanja?",show_percentage_control:"Kontrola v odstotkih?"},generic:{collapsible_controls:"Strni kontrolnike, ko so izklopljeni",content_info:"Vsebina",fill_container:"Zapolnitev prostora",icon_animation:"Animacija ikone, ko je aktivna?",icon_color:"Barva ikone",icon_type:"Vrsta ikone",layout:"Postavitev",primary_info:"Primarna informacija",secondary_info:"Sekundarna informacija",use_entity_picture:"Uporabi sliko entitete?"},humidifier:{show_target_humidity_control:"Nadzor vlažnosti?"},light:{incompatible_controls:"Nekateri kontrolniki morda ne bodo prikazani, če vaša luč ne podpira te funkcije.",show_brightness_control:"Nadzor svetlosti?",show_color_control:"Nadzor barv?",show_color_temp_control:"Nadzor temperature barve?",use_light_color:"Uporabi svetlo barvo"},lock:{lock:"Zaklepanje",open:"Odprto",unlock:"Odkleni"},"media-player":{media_controls:"Nadzor medijev",media_controls_list:{next:"Naslednja skladba",on_off:"Vklop/izklop",play_pause_stop:"Predvajaj/pavza/ustavi",previous:"Prejšnja skladba",repeat:"Ponavljajoči način",shuffle:"Naključno"},show_volume_level:"Pokaži raven glasnosti",use_media_artwork:"Uporabite medijsko umetniško delo",use_media_info:"Uporabite informacije o medijih",volume_controls:"Kontrole glasnosti",volume_controls_list:{volume_buttons:"Gumbi za glasnost",volume_mute:"Tiho",volume_set:"Raven glasnosti"}},number:{display_mode:"Način prikaza",display_mode_list:{buttons:"Gumbi",default:"Privzeto (drsnik)",slider:"Drsnik"}},template:{badge_color:"Barva značke",badge_icon:"Ikona značke",content:"Vsebina",entity_extra:"Uporablja se v predlogah in dejanjih",multiline_secondary:"Večvrstični sekundarni?",picture:"Slika (nadomestila bo ikono)",primary:"Primarna informacija",secondary:"Sekundarna informacija"},title:{subtitle:"Podnaslov",subtitle_tap_action:"Dejanje dotika podnapisov",title:"Naziv",title_tap_action:"Dejanje dotika naslova"},update:{show_buttons_control:"Gumbi za upravljanje?"},vacuum:{commands:"Ukazi",commands_list:{on_off:"Vklop/izklop"}},weather:{show_conditions:"Pogoji?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Dodaj čip",chips:"Čipi",clear:"Pobriši",edit:"Uredi",select:"Izbira čipa",types:{action:"Dejanje","alarm-control-panel":"Alarm",back:"Nazaj",conditional:"Pogojno",entity:"Entiteta",light:"Svetloba",menu:"Meni",spacer:"Distančnik",template:"Predloga",weather:"Vreme"}},conditional:{chip:"Ćiš"},sub_element_editor:{title:"Urejevalnik čipov"}},form:{alignment_picker:{values:{center:"Center",default:"Privzeta poravnava",end:"Konec",justify:"Poravnava",start:"Pričetek"}},color_picker:{values:{default:"Privzeta barva"}},icon_type_picker:{values:{default:"Privzeta vrsta","entity-picture":"Slika entitete",icon:"Ikona",none:"Brez"}},info_picker:{values:{default:"Privzete informacije","last-changed":"Zadnja sprememba","last-updated":"Zadnja posodobitev",name:"Naziv",none:"Brez",state:"Stanje"}},layout_picker:{values:{default:"Privzeta postavitev",horizontal:"Horizontalna postavitev",vertical:"Vertikalna postavitev"}}}},Yn={card:qn,editor:Xn},Jn={not_found:"Enheten hittades inte"},Qn={card:{chips:{alignment:"Justering"},climate:{hvac_modes:"HVAC-lägen",show_temperature_control:"Temperaturkontroll?"},cover:{show_buttons_control:"Visa kontrollknappar?",show_position_control:"Visa positionskontroll?",show_tilt_position_control:"Visa lutningskontroll?"},empty:{no_config_options:"Detta kort har inga konfigurationsalternativ."},fan:{show_direction_control:"Riktningskontroll?",show_oscillate_control:"Kontroll för oscillera?",show_percentage_control:"Procentuell kontroll?"},generic:{collapsible_controls:"Dölj kontroller när enheten är av",color:"Färg",content_info:"Innehåll",fill_container:"Fyll container",icon_animation:"Animera ikonen när enheten är på?",icon_color:"Ikonens färg",icon_type:"Ikontyp",layout:"Layout",primary_info:"Primär information",secondary_info:"Sekundär information",use_entity_picture:"Använd enhetens bild?"},humidifier:{show_target_humidity_control:"Fuktkontroll?"},light:{incompatible_controls:"Kontroller som inte stöds av enheten kommer inte visas.",show_brightness_control:"Styr ljushet?",show_color_control:"Styr färg?",show_color_temp_control:"Färgtemperaturkontroll?",use_light_color:"Styr ljusets färg"},lock:{lock:"Lås",open:"Öppna",unlock:"Lås upp"},"media-player":{media_controls:"Mediakontroller",media_controls_list:{next:"Nästa spår",on_off:"Slå på/av",play_pause_stop:"Spela/pausa/stoppa",previous:"Föregående spår",repeat:"Upprepa",shuffle:"Blanda"},show_volume_level:"Volymkontroll",use_media_artwork:"Visa mediaomslag",use_media_info:"Använd media information",volume_controls:"Volymkontroller",volume_controls_list:{volume_buttons:"Volymknappar",volume_mute:"Ljud av",volume_set:"Volymnivå"}},number:{display_mode:"Visningsläge",display_mode_list:{buttons:"Knappar",default:"Standard (skjutreglage)",slider:"Skjutreglage"}},template:{badge_color:"Färg på märke",badge_icon:"Märke ikon",content:"Innehåll",entity_extra:"Används i mallar och åtgärder",label:"Etikett",multiline_secondary:"Sekundär med flera rader?",picture:"Bild (ersätter ikonen)",primary:"Primär information",secondary:"Sekundär information"},title:{subtitle:"Underrubrik",subtitle_tap_action:"Subtitle tap action",title:"Rubrik",title_tap_action:"Titel tryck åtgärd"},update:{show_buttons_control:"Visa kontrollknappar?"},vacuum:{commands:"Kommandon",commands_list:{on_off:"Slå av/på"}},weather:{show_conditions:"Förhållanden?",show_temperature:"Temperatur?"}},chip:{"chip-picker":{add:"Lägg till chip",chips:"Chips",clear:"Rensa",edit:"Redigera",select:"Välj chip",types:{action:"Åtgärd","alarm-control-panel":"Alarm",back:"Bakåt",conditional:"Villkorad",entity:"Enhet",light:"Ljus",menu:"Meny",quickbar:"Snabbfält",spacer:"Avståndshållare",template:"Mall",weather:"Väder"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chipredigerare"}},form:{alignment_picker:{values:{center:"Centrerad",default:"Standard (början)",end:"Slutet",justify:"Anpassa",start:"Starta"}},color_picker:{values:{default:"Standardfärg"}},icon_type_picker:{values:{default:"Standard typ","entity-picture":"Enhetsbild",icon:"Ikon",none:"Ingen"}},info_picker:{values:{default:"Förvald information","last-changed":"Sist ändrad","last-updated":"Sist uppdaterad",name:"Namn",none:"Ingen",state:"Status"}},layout_picker:{values:{default:"Standard",horizontal:"Horisontell",vertical:"Vertikal"}}}},er={card:Jn,editor:Qn},tr={not_found:"Varlık bulunamadı"},or={card:{chips:{alignment:"Hizalama"},climate:{hvac_modes:"HVAC Modları",show_temperature_control:"Sıcaklık kontrolü?"},cover:{show_buttons_control:"Düğme kontrolleri?",show_position_control:"Pozisyon kontrolü?",show_tilt_position_control:"Eğim kontrolü?"},empty:{no_config_options:"Bu kartın yapılandırma seçeneği yok."},fan:{show_direction_control:"Yön kontrolü?",show_oscillate_control:"Salınım kontrolü?",show_percentage_control:"Yüzde kontrolü?"},generic:{collapsible_controls:"Kapalıyken kontrolleri daralt",color:"Renk",content_info:"İçerik",fill_container:"Alanı doldur",icon_animation:"Aktif olduğunda simgeyi hareket ettir?",icon_color:"Simge renki",icon_type:"İkon tipi",layout:"Düzen",primary_info:"Birinci bilgi",secondary_info:"İkinci bilgi",use_entity_picture:"Varlık resmi kullanılsın?"},humidifier:{show_target_humidity_control:"Nem kontrolü?"},light:{incompatible_controls:"Kullandığınız lamba bu özellikleri desteklemiyorsa bazı kontroller görüntülenemeyebilir.",show_brightness_control:"Parlaklık kontrolü?",show_color_control:"Renk kontrolü?",show_color_temp_control:"Renk ısısı kontrolü?",use_light_color:"Işık rengini kullan"},lock:{lock:"Kilitle",open:"Aç",unlock:"Kilidi aç"},"media-player":{media_controls:"Medya kontrolleri",media_controls_list:{next:"Sonraki parça",on_off:"Aç/Kapat",play_pause_stop:"Oynat/duraklat/durdur",previous:"Önceki parça",repeat:"Tekrarlama modu",shuffle:"Karışık çal"},show_volume_level:"Ses seviyesini göster",use_media_artwork:"Medya resimlerini kullan",use_media_info:"Medya bilgilerini kullan",volume_controls:"Ses seviyesi kontrolleri",volume_controls_list:{volume_buttons:"Ses butonları",volume_mute:"Sessize al",volume_set:"Ses seviyesi"}},number:{display_mode:"Görüntüleme Modu",display_mode_list:{buttons:"Butonlar",default:"Varsayılan (kayan)",slider:"Kayan"}},template:{badge_color:"Rozet rengi",badge_icon:"Rozet simgesi",content:"İçerik",entity_extra:"Şablonlarda ve eylemlerde kullanılsın",label:"Etiket",multiline_secondary:"İkinci bilgi çok satır olsun?",picture:"Resim (ikonun yerine geçecek)",primary:"Birinci bilgi",secondary:"İkinci bilgi"},title:{subtitle:"Altbaşlık",subtitle_tap_action:"Dokunma eylemi alt başlığı",title:"Başlık",title_tap_action:"Dokunma eylemi başlığı"},update:{show_buttons_control:"Düğme kontrolü?"},vacuum:{commands:"Komutlar",commands_list:{on_off:"Aç/Kapat"}},weather:{show_conditions:"Hava koşulu?",show_temperature:"Sıcaklık?"}},chip:{"chip-picker":{add:"Chip ekle",chips:"Chipler",clear:"Temizle",edit:"Düzenle",select:"Chip seç",types:{action:"Eylem","alarm-control-panel":"Alarm",back:"Geri",conditional:"Koşullu",entity:"Varlık",light:"Işık",menu:"Menü",spacer:"Boşluk",template:"Şablon",weather:"Hava Durumu"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip düzenleyici"}},form:{alignment_picker:{values:{center:"Ortala",default:"Varsayılan hizalama",end:"Sağa yasla",justify:"İki yana yasla",start:"Sola yasla"}},color_picker:{values:{default:"Varsayılan renk"}},icon_type_picker:{values:{default:"Varsayılan tip","entity-picture":"Varlık resmi",icon:"Simge",none:"Hiçbiri"}},info_picker:{values:{default:"Varsayılan bilgi","last-changed":"Son Değişim","last-updated":"Son Güncelleme",name:"İsim",none:"None",state:"Durum"}},layout_picker:{values:{default:"Varsayılan düzen",horizontal:"Yatay düzen",vertical:"Dikey düzen"}}}},ir={card:tr,editor:or},nr={not_found:"Сутність не знайдено"},rr={card:{chips:{alignment:"Вирівнювання"},climate:{hvac_modes:"Режими",show_temperature_control:"Керування температурою?"},cover:{show_buttons_control:"Кнопки керування?",show_position_control:"Керування позицією?",show_tilt_position_control:"Керування нахилом?"},fan:{show_oscillate_control:"Керування повротом?",show_percentage_control:"Керування швидкістю?"},generic:{collapsible_controls:"Приховувати елементи керування коли вимкнено?",content_info:"Вміст",fill_container:"Заповнити контейнер",icon_animation:"Анімувати іконку при активації?",icon_color:"Колір іконки",icon_type:"Тип іконки",layout:"Розташування",primary_info:"Головна інформація",secondary_info:"Додаткова інформація",use_entity_picture:"Використовувати зображення сутності?"},humidifier:{show_target_humidity_control:"Керування вологістю?"},light:{incompatible_controls:"Деякі елементи керування можуть не відображатись якщо ваш пристрій не підтримує цю функцію.",show_brightness_control:"Контроль яскравості?",show_color_control:"Керування кольором світла?",show_color_temp_control:"Керування температурою світла?",use_light_color:"Використовувати колір світла"},lock:{lock:"Зачинити",open:"Відкрити",unlock:"Відчинити"},"media-player":{media_controls:"Керування медіа",media_controls_list:{next:"Наступний трек",on_off:"Увімкнути/Вимкнути",play_pause_stop:"Відтворити/пауза/стоп",previous:"Попередній трек",repeat:"Режим повторення",shuffle:"Перемішати"},show_volume_level:"Показати рівень гучності",use_media_artwork:"Використовувати зображення медіа",use_media_info:"Використовувати інформацію медіа",volume_controls:"Елементи керування гучністю",volume_controls_list:{volume_buttons:"Кнопки гучності",volume_mute:"Вимк. звук",volume_set:"Рівень гучності"}},number:{display_mode:"Відображати режим",display_mode_list:{buttons:"Кнопки",default:"За замовчуванням (повзунок)",slider:"Повзунок"}},template:{badge_color:"Колір значка",badge_icon:"Іконка значка",content:"Вміст",entity_extra:"Використовується в шаблонах та діях",multiline_secondary:"Багаторядкова додаткова інформація?",picture:"Зображення (замінить іконку)",primary:"Головна інформація",secondary:"Додаткова інформація"},title:{subtitle:"Підзаголовок",subtitle_tap_action:"Дія при дотику до підзаголовку",title:"Заголовок",title_tap_action:"Дія при дотику до заголовку"},update:{show_buttons_control:"Кнопки керування?"},vacuum:{commands:"Команди",commands_list:{on_off:"Увімкнути/Вимкнути"}},weather:{show_conditions:"Умови?",show_temperature:"Температура?"}},chip:{"chip-picker":{add:"Додати міні-картку",chips:"Міні-картки",clear:"Очистити",edit:"Редагувати",select:"Обрати міні-картку",types:{action:"Дія","alarm-control-panel":"Сигналізація",back:"Назад",conditional:"Умовна",entity:"Сутність",light:"Світло",menu:"Меню",spacer:"Порожнє місце",template:"Вручну",weather:"Погода"}},conditional:{chip:"Міні-картка"},sub_element_editor:{title:"Редактор міні-карток"}},form:{alignment_picker:{values:{center:"По центру",default:"Вирівнювання за замовчуванням",end:"В кінці",justify:"Вирівняти",start:"На початку"}},color_picker:{values:{default:"Колір за замовчуванням"}},icon_type_picker:{values:{default:"За замовчуванням","entity-picture":"Зображення сутності",icon:"Іконка",none:"Нічого"}},info_picker:{values:{default:"Інформація за замовчуванням","last-changed":"Востаннє змінено","last-updated":"Востаннє оновлено",name:"Назва",none:"Нічого",state:"Стан"}},layout_picker:{values:{default:"Розташування за замовчуванням",horizontal:"Горизонтальне розташування",vertical:"Вертикальне розташування"}}}},ar={card:nr,editor:rr},sr={not_found:"Không tìm thấy thực thể"},lr={section:{context:"Ngữ cảnh",content:"Nội dung",features:"Tính năng",interactions:"Tương tác",layout:"Bố cục",badge:"Huy hiệu"},card:{chips:{alignment:"Căn chỉnh"},climate:{hvac_modes:"Chế độ điều hòa",show_temperature_control:"Điều khiển nhiệt độ?"},cover:{show_buttons_control:"Điều khiển nút bấm?",show_position_control:"Điều khiển vị trí?",show_tilt_position_control:"Điều khiển độ nghiêng?"},empty:{no_config_options:"Thẻ này không có tùy chọn cấu hình."},fan:{show_direction_control:"Điều khiển hướng?",show_oscillate_control:"Điều khiển xoay?",show_percentage_control:"Điều khiển phần trăm?"},generic:{entity:"Thực thể",area:"Khu vực",color:"Màu",content_info:"Nội dung",fill_container:"Làm đầy ô chứa",icon_animation:"Biểu tượng chuyển động khi kích hoạt?",icon_color:"Màu biểu tượng",icon_type:"Kiểu biểu tượng",layout:"Bố cục",primary_info:"Thông tin chính",secondary_info:"Thông tin phụ",use_entity_picture:"Dùng ảnh của thực thể?",collapsible_controls:"Thu nhỏ điều kiển khi tắt",picture:"Hình ảnh",picture_helper:"Nếu đặt, nó sẽ thay cho biểu tượng."},humidifier:{show_target_humidity_control:"Điều khiển độ ẩm?"},light:{incompatible_controls:"Một số điều khiển sẽ không được hiển thị nếu đèn của bạn không hỗ trợ tính năng đó.",show_brightness_control:"Điều khiển độ sáng?",show_color_control:"Điều khiển màu sắc?",show_color_temp_control:"Điều khiển nhiệt độ màu?",use_light_color:"Dùng màu đèn"},lock:{lock:"Khóa",open:"Mở",unlock:"Mở khóa"},"media-player":{media_controls:"Điều khiển đa phương tiện",media_controls_list:{next:"Bài tiếp theo",on_off:"Bật/tắt",play_pause_stop:"Phát/tạm dừng/dừng",previous:"Bài trước",repeat:"Chế độ lặp lại",shuffle:"Xáo trộn"},show_volume_level:"Hiện mức âm lượng",use_media_artwork:"Dùng ảnh đa phương tiện",use_media_info:"Dùng thông tin đa phương tiện",volume_controls:"Điều khiển âm lượng",volume_controls_list:{volume_buttons:"Nút âm lượng",volume_mute:"Im lặng",volume_set:"Mức âm lượng"}},number:{display_mode:"Chế độ hiển thị",display_mode_list:{buttons:"Nút",default:"Mặc định (thanh trượt)",slider:"Thanh trượt"}},template:{area_helper:"Dùng trong bản mẫu và tính năng",area:"Khu vực",badge_color:"Màu huy hiệu",badge_icon:"Biểu tượng huy hiệu",badge_text_helper:"Nếu đặt, nó sẽ thay thế biểu tượng.",badge_text:"Chữ trong huy hiệu",badge:"Huy hiệu",content:"Nội dung",entity_helper:"Dùng trong bản mẫu, tương tác và tính năng",entity_helper_legacy:"Dùng trong bản mẫu và tương tác",label:"Nhãn",layout:"Bố cục",multiline_secondary_helper:"Thẻ có thể được kéo cao lên để vừa với văn bản và không phải lúc nào cũng vừa vặn với hệ thống lưới.",multiline_secondary:"Cho phép nhiều dòng thông tin phụ",primary:"Thông tin chính",secondary:"Thông tin phụ"},title:{subtitle:"Phụ đề",subtitle_tap_action:"Hành động khi nhấp phụ đề",title:"Tiêu đề",title_tap_action:"Hành động khi nhấp tiêu đề"},update:{show_buttons_control:"Điều khiển nút bấm?"},vacuum:{commands:"Mệnh lệnh",commands_list:{on_off:"Bật/tắt"}},weather:{show_conditions:"Điều kiện?",show_temperature:"Nhiệt độ?"}},badge:{template:{label:"Nhãn",content:"Nội dung",entity_helper:"Dùng trong bản mẫu và tương tác",area_helper:"Dùng trong bản mẫu"}},chip:{"chip-picker":{add:"Thêm phỉnh",chips:"Phỉnh",clear:"Tẩy trống",edit:"Chỉnh sửa",select:"Chọn phỉnh",types:{action:"Hành động","alarm-control-panel":"Báo động",back:"Quay về",conditional:"Điều kiện",entity:"Thực thể",light:"Đèn",menu:"Trình đơn",quickbar:"Thanh nhanh",spacer:"Ngăn cách",template:"Mẫu",weather:"Thời tiết"}},conditional:{chip:"Phỉnh"},sub_element_editor:{title:"Trình soạn phỉnh"}},form:{alignment_picker:{values:{center:"Căn giữa",default:"Căn chỉnh mặc định",end:"Căn cuối",justify:"Căn hai bên",start:"Căn đầu"}},color_picker:{values:{default:"Màu mặc định"}},icon_type_picker:{values:{default:"Kiểu mặc định","entity-picture":"Ảnh thực thể",icon:"Biểu tượng",none:"Không có"}},info_picker:{values:{default:"Thông tin mặc định","last-changed":"Lần thay đổi cuối","last-updated":"Lần cập nhật cuối",name:"Tên",none:"Không có",state:"Trạng thái"}},layout_picker:{values:{default:"Bố cục mặc định",horizontal:"Bố cục ngang",vertical:"Bố cục dọc"}}}},cr={title:"Thẻ đã cập nhật",description:"Cấu hình thẻ của bạn đã được nhập thành phiên bản mới. Bạn có thể tìm thêm thông tin về thay đổi tại {link}.",post:"bài trên GitHub",revert:"Đảo ngược",ok:"Ok"},ur={card:sr,editor:lr,migration:cr},dr={not_found:"未找到实体"},hr={card:{chips:{alignment:"对齐"},climate:{hvac_modes:"空调模式",show_temperature_control:"温度控制?"},cover:{show_buttons_control:"按钮控制?",show_position_control:"位置控制?",show_tilt_position_control:"角度控制?"},empty:{no_config_options:"这个卡片没有可配置的选项。"},fan:{show_direction_control:"方向控制？",show_oscillate_control:"摆动控制?",show_percentage_control:"百分比控制?"},generic:{collapsible_controls:"关闭时隐藏控制器",color:"颜色",content_info:"内容",fill_container:"填满容器",icon_animation:"激活时使用动态图标?",icon_color:"图标颜色",icon_type:"图标类型",layout:"布局",primary_info:"首要信息",secondary_info:"次要信息",use_entity_picture:"使用实体图片?"},humidifier:{show_target_humidity_control:"湿度控制?"},light:{incompatible_controls:"设备不支持的控制器将不会显示。",show_brightness_control:"亮度控制?",show_color_control:"颜色控制?",show_color_temp_control:"色温控制?",use_light_color:"使用灯光颜色"},lock:{lock:"锁定",open:"打开",unlock:"解锁"},"media-player":{media_controls:"媒体控制",media_controls_list:{next:"下一曲",on_off:"开启/关闭",play_pause_stop:"播放/暂停/停止",previous:"上一曲",repeat:"循环模式",shuffle:"随机"},show_volume_level:"显示音量大小",use_media_artwork:"使用媒体插图",use_media_info:"使用媒体信息",volume_controls:"音量控制",volume_controls_list:{volume_buttons:"音量按钮",volume_mute:"静音",volume_set:"音量等级"}},number:{display_mode:"显示模式",display_mode_list:{buttons:"按钮",default:"默认 (滑块)",slider:"滑块"}},template:{badge_color:"徽标颜色",badge_icon:"徽标图标",content:"内容",entity_extra:"用于模板和动作",label:"标签",multiline_secondary:"多行次要信息?",picture:"图片 (将会替代图标)",primary:"首要信息",secondary:"次要信息"},title:{subtitle:"子标题",subtitle_tap_action:"子标题点击动作",title:"标题",title_tap_action:"标题点击动作"},update:{show_buttons_control:"控制按钮?"},vacuum:{commands:"命令",commands_list:{on_off:"开/关"}},weather:{show_conditions:"条件?",show_temperature:"温度?"}},chip:{"chip-picker":{add:"添加 chip",chips:"小卡片",clear:"清除",edit:"编辑",select:"选择 chip",types:{action:"动作","alarm-control-panel":"警戒控制台",back:"返回",conditional:"条件显示",entity:"实体",light:"灯光",menu:"菜单",quickbar:"快捷栏",spacer:"占位符",template:"模板",weather:"天气"}},conditional:{chip:"小卡片"},sub_element_editor:{title:"Chip 编辑"}},form:{alignment_picker:{values:{center:"居中对齐",default:"默认",end:"右对齐",justify:"两端对齐",start:"左对齐"}},color_picker:{values:{default:"默认颜色"}},icon_type_picker:{values:{default:"默认类型","entity-picture":"实体图片",icon:"图标",none:"无"}},info_picker:{values:{default:"默认信息","last-changed":"变更时间","last-updated":"更新时间",name:"名称",none:"无",state:"状态"}},layout_picker:{values:{default:"默认布局",horizontal:"水平布局",vertical:"垂直布局"}}}},pr={card:dr,editor:hr},mr={not_found:"未找到實體"},_r={card:{chips:{alignment:"對齊"},climate:{hvac_modes:"空調模式",show_temperature_control:"溫度控制?"},cover:{show_buttons_control:"按鈕控制?",show_position_control:"位置控制?",show_tilt_position_control:"角度控制?"},fan:{show_oscillate_control:"擺頭控制?",show_percentage_control:"百分比控制?"},generic:{collapsible_controls:"關閉時隱藏控制項",color:"顏色",content_info:"內容",fill_container:"填滿容器",icon_animation:"啟動時使用動態圖示?",icon_color:"圖示顏色",icon_type:"圖示樣式",layout:"佈局",primary_info:"主要訊息",secondary_info:"次要訊息",use_entity_picture:"使用實體圖片?"},humidifier:{show_target_humidity_control:"溼度控制?"},light:{incompatible_controls:"不會顯示裝置不支援的控制。",show_brightness_control:"亮度控制?",show_color_control:"色彩控制?",show_color_temp_control:"色溫控制?",use_light_color:"使用燈光顏色"},lock:{lock:"上鎖",open:"打開",unlock:"解鎖"},"media-player":{media_controls:"媒體控制",media_controls_list:{next:"下一首",on_off:"開啟、關閉",play_pause_stop:"播放、暫停、停止",previous:"上一首",repeat:"重複播放",shuffle:"隨機播放"},show_volume_level:"顯示音量大小",use_media_artwork:"使用媒體插圖",use_media_info:"使用媒體資訊",volume_controls:"音量控制",volume_controls_list:{volume_buttons:"音量按鈕",volume_mute:"靜音",volume_set:"音量等級"}},number:{display_mode:"顯示模式",display_mode_list:{buttons:"按鈕",default:"預設 (滑桿)",slider:"滑桿"}},template:{badge_color:"角標顏色",badge_icon:"角標圖示",content:"內容",entity_extra:"用於模板與動作",label:"標籤",multiline_secondary:"多行次要訊息?",picture:"圖片 (將會取代圖示)",primary:"主要訊息",secondary:"次要訊息"},title:{subtitle:"副標題",subtitle_tap_action:"副標題點擊動作",title:"標題",title_tap_action:"標題點擊動作"},update:{show_buttons_control:"按鈕控制?"},vacuum:{commands:"指令",commands_list:{on_off:"開啟、關閉"}},weather:{show_conditions:"狀況?",show_temperature:"溫度?"}},chip:{"chip-picker":{add:"新增小卡片",chips:"小卡片",clear:"清除",edit:"編輯",select:"選擇小卡片",types:{action:"動作","alarm-control-panel":"警報器控制",back:"返回",conditional:"條件",entity:"實體",light:"燈光",menu:"選單",spacer:"佔位符",template:"模板",weather:"天氣"}},conditional:{chip:"小卡片"},sub_element_editor:{title:"小卡片編輯器"}},form:{alignment_picker:{values:{center:"居中對齊",default:"預設對齊",end:"居右對齊",justify:"兩端對齊",start:"居左對齊"}},color_picker:{values:{default:"預設顏色"}},icon_type_picker:{values:{default:"預設樣式","entity-picture":"實體圖片",icon:"圖示",none:"無"}},info_picker:{values:{default:"預設訊息","last-changed":"最近變動時間","last-updated":"最近更新時間",name:"名稱",none:"無",state:"狀態"}},layout_picker:{values:{default:"預設佈局",horizontal:"水平佈局",vertical:"垂直佈局"}}}},gr={card:mr,editor:_r};const fr={ar:ui,bg:pi,ca:fi,cs:wi,da:Ei,de:Si,el:Pi,en:Hi,es:Ri,fi:Gi,fr:Xi,he:en,hu:rn,id:cn,it:pn,"ko-KR":gn,nb:yn,nl:zn,pl:Mn,"pt-BR":Pn,"pt-PT":Dn,ro:Bn,ru:Un,sl:Object.freeze({__proto__:null,card:qn,default:Yn,editor:Xn}),sk:Wn,sv:Object.freeze({__proto__:null,card:Jn,default:er,editor:Qn}),tr:Object.freeze({__proto__:null,card:tr,default:ir,editor:or}),uk:Object.freeze({__proto__:null,card:nr,default:ar,editor:rr}),vi:Object.freeze({__proto__:null,card:sr,default:ur,editor:lr,migration:cr}),"zh-Hans":Object.freeze({__proto__:null,card:dr,default:pr,editor:hr}),"zh-Hant":Object.freeze({__proto__:null,card:mr,default:gr,editor:_r})},br="en";function vr(e,t){try{return e.split(".").reduce(((e,t)=>e[t]),fr[t])}catch(e){return}}function yr(e){return function(t,o={}){const i=e?.locale.language??br;let n=vr(t,i);if(n||(n=vr(t,br)),!n)return t;try{return new ai(n,i).format(o)}catch(e){return console.error(`Error formatting message for key "${t}" with lang "${i}":`,e),n}}}let wr=class extends me{constructor(){super(...arguments),this.icon=""}render(){return q`
      <div class="badge">
        <ha-icon .icon=${this.icon}></ha-icon>
      </div>
    `}static get styles(){return h`
      :host {
        --main-color: rgb(var(--rgb-grey));
        --icon-color: rgb(var(--rgb-white));
      }
      .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        width: var(--badge-size);
        height: var(--badge-size);
        font-size: var(--badge-size);
        border-radius: var(--badge-border-radius);
        background-color: var(--main-color);
        transition: background-color 280ms ease-in-out;
      }
      .badge ha-icon {
        --mdc-icon-size: var(--badge-icon-size);
        color: var(--icon-color);
      }
    `}};n([ve()],wr.prototype,"icon",void 0),wr=n([ge("mushroom-badge-icon")],wr);var kr=Object.freeze({__proto__:null,get BadgeIcon(){return wr}});let xr=class extends me{render(){return q`
      <div
        class=${Ee({container:!0,horizontal:"horizontal"===this.appearance?.layout,"no-info":"none"===this.appearance?.primary_info&&"none"===this.appearance?.secondary_info,"no-content":"none"===this.appearance?.primary_info&&"none"===this.appearance?.secondary_info&&"none"===this.appearance?.icon_type})}
      >
        <slot></slot>
      </div>
    `}static get styles(){return h`
      :host {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: calc(-1 * var(--ha-card-border-width, 1px));
      }
      .container {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        flex-grow: 0;
        box-sizing: border-box;
        justify-content: space-between;
        height: 100%;
      }
      .container.horizontal {
        flex-direction: row;
      }
      .container.horizontal > ::slotted(*) {
        flex: 1;
        min-width: 0;
      }
      .container.horizontal > ::slotted(*.actions) {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-left: 0 !important;
        --control-spacing: var(--spacing);
        --control-height: var(--icon-size);
      }
      .container > ::slotted(mushroom-state-item) {
        flex: 1;
      }
      .container.horizontal.no-info > ::slotted(mushroom-state-item) {
        flex: none;
      }
      .container.no-content > ::slotted(mushroom-state-item) {
        display: none;
      }
      .container.no-content > ::slotted(.actions) {
        --control-spacing: var(--spacing);
        --control-height: var(--icon-size);
        padding: var(--control-spacing) !important;
      }
    `}};n([ve()],xr.prototype,"appearance",void 0),xr=n([ge("mushroom-card")],xr);var zr=Object.freeze({__proto__:null,get Card(){return xr}});let Er=class extends me{constructor(){super(...arguments),this.picture_url=""}render(){return q`
      <div class=${Ee({container:!0})}>
        <img class="picture" src=${this.picture_url} />
      </div>
    `}static get styles(){return h`
      :host {
        --main-color: var(--primary-text-color);
        --icon-color-disabled: rgb(var(--rgb-disabled));
        --shape-color: rgba(var(--rgb-primary-text-color), 0.05);
        --shape-color-disabled: rgba(var(--rgb-disabled), 0.2);
        flex: none;
      }
      .container {
        position: relative;
        width: var(--icon-size);
        height: var(--icon-size);
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .picture {
        width: 100%;
        height: 100%;
        border-radius: var(--icon-border-radius);
      }
    `}};n([ve()],Er.prototype,"picture_url",void 0),Er=n([ge("mushroom-shape-avatar")],Er);var Cr=Object.freeze({__proto__:null,get ShapePicture(){return Er}});const Ar={pulse:"@keyframes pulse {\n        0% {\n            opacity: 1;\n        }\n        50% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }",spin:"@keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }",cleaning:"@keyframes cleaning {\n        0% {\n            transform: rotate(0) translate(0);\n        }\n        5% {\n            transform: rotate(0) translate(0, -3px);\n        }\n        10% {\n            transform: rotate(0) translate(0, 1px);\n        }\n        15% {\n            transform: rotate(0) translate(0);\n        }\n\n        20% {\n            transform: rotate(30deg) translate(0);\n        }\n        25% {\n            transform: rotate(30deg) translate(0, -3px);\n        }\n        30% {\n            transform: rotate(30deg) translate(0, 1px);\n        }\n        35% {\n            transform: rotate(30deg) translate(0);\n        }\n        40% {\n            transform: rotate(0) translate(0);\n        }\n\n        45% {\n            transform: rotate(-30deg) translate(0);\n        }\n        50% {\n            transform: rotate(-30deg) translate(0, -3px);\n        }\n        55% {\n            transform: rotate(-30deg) translate(0, 1px);\n        }\n        60% {\n            transform: rotate(-30deg) translate(0);\n        }\n        70% {\n            transform: rotate(0deg) translate(0);\n        }\n        100% {\n            transform: rotate(0deg);\n        }\n    }",returning:"@keyframes returning {\n        0% {\n            transform: rotate(0);\n        }\n        25% {\n            transform: rotate(20deg);\n        }\n        50% {\n            transform: rotate(0);\n        }\n        75% {\n            transform: rotate(-20deg);\n        }\n        100% {\n            transform: rotate(0);\n        }\n    }"};h`
    ${d(Ar.pulse)}
  `,h`
    ${d(Ar.spin)}
  `,h`
    ${d(Ar.cleaning)}
  `,h`
    ${d(Ar.returning)}
  `;const Mr=h`
  ${d(Object.values(Ar).join("\n"))}
`;let Sr=class extends me{render(){return q`
      <div
        class=${Ee({shape:!0,disabled:Boolean(this.disabled)})}
      >
        <slot></slot>
      </div>
    `}static get styles(){return[Mr,h`
        :host {
          --icon-color: var(--primary-text-color);
          --icon-color-disabled: rgb(var(--rgb-disabled));
          --shape-color: rgba(var(--rgb-primary-text-color), 0.05);
          --shape-color-disabled: rgba(var(--rgb-disabled), 0.2);
          --shape-animation: none;
          --shape-outline-color: transparent;
          flex: none;
        }
        .shape {
          position: relative;
          width: var(--icon-size);
          height: var(--icon-size);
          font-size: var(--icon-size);
          border-radius: var(--icon-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--shape-color);
          transition-property: background-color, box-shadow;
          transition-duration: 280ms;
          transition-timing-function: ease-out;
          animation: var(--shape-animation);
          box-shadow: 0 0 0 1px var(--shape-outline-color);
        }

        .shape ::slotted(*) {
          display: flex;
          color: var(--icon-color);
          transition: color 280ms ease-in-out;
        }
        ::slotted(ha-icon),
        ::slotted(ha-state-icon) {
          display: flex;
          line-height: 0;
          --mdc-icon-size: var(--icon-symbol-size);
        }
        .shape.disabled {
          background-color: var(--shape-color-disabled);
        }
        .shape.disabled ::slotted(*) {
          color: var(--icon-color-disabled);
        }
      `]}};n([ve({type:Boolean})],Sr.prototype,"disabled",void 0),Sr=n([ge("mushroom-shape-icon")],Sr);var $r=Object.freeze({__proto__:null,get ShapeIcon(){return Sr}});let Tr=class extends me{constructor(){super(...arguments),this.multiline_secondary=!1}render(){return q`
      <div class="container">
        <span class="primary">${this.primary??""}</span>
        ${this.secondary?q`<span
              class="secondary${this.multiline_secondary?" multiline_secondary":""}"
              >${this.secondary}</span
            >`:J}
      </div>
    `}static get styles(){return h`
      .container {
        min-width: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .primary {
        font-weight: var(--card-primary-font-weight);
        font-size: var(--card-primary-font-size);
        line-height: var(--card-primary-line-height);
        color: var(--card-primary-color);
        letter-spacing: var(--card-primary-letter-spacing);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .secondary {
        font-weight: var(--card-secondary-font-weight);
        font-size: var(--card-secondary-font-size);
        line-height: var(--card-secondary-line-height);
        color: var(--card-secondary-color);
        letter-spacing: var(--card-secondary-letter-spacing);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .multiline_secondary {
        white-space: pre-wrap;
      }
    `}};n([ve({attribute:!1})],Tr.prototype,"primary",void 0),n([ve({attribute:!1})],Tr.prototype,"secondary",void 0),n([ve({type:Boolean})],Tr.prototype,"multiline_secondary",void 0),Tr=n([ge("mushroom-state-info")],Tr);var Pr=Object.freeze({__proto__:null,get StateItem(){return Tr}});let jr=class extends me{render(){return q`
      <div
        class=${Ee({container:!0,vertical:"vertical"===this.appearance?.layout})}
      >
        ${"none"!==this.appearance?.icon_type?q`
              <div class="icon">
                <slot name="icon"></slot>
                <slot name="badge"></slot>
              </div>
            `:J}
        ${"none"!==this.appearance?.primary_info||"none"!==this.appearance?.secondary_info?q`
              <div class="info">
                <slot name="info"></slot>
              </div>
            `:J}
      </div>
    `}static get styles(){return h`
      :host {
        display: block;
        height: 100%;
      }
      .container {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: var(--spacing);
        gap: var(--spacing);
      }
      .icon {
        position: relative;
      }
      .icon ::slotted(*[slot="badge"]) {
        position: absolute;
        top: -3px;
        right: -3px;
      }
      :host([rtl]) .icon ::slotted(*[slot="badge"]) {
        right: initial;
        left: -3px;
      }
      .info {
        min-width: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .container.vertical {
        flex-direction: column;
      }
      .container.vertical .info {
        text-align: center;
      }
    `}};n([ve()],jr.prototype,"appearance",void 0),jr=n([ge("mushroom-state-item")],jr);var Or=Object.freeze({__proto__:null,get StateItem(){return jr}});const Ir=(e,t)=>{if("number"==typeof e)return 3===t?{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|240&e)/255,b:(15&e|e<<4&240)/255}:4===t?{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|240&e)/255,alpha:(15&e|e<<4&240)/255}:6===t?{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(255&e)/255}:8===t?{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(255&e)/255}:void 0},Dr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,Nr="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Br=`${Nr}%`,Lr=`(?:${Nr}%|${Nr})`,Rr=`(?:${Nr}(deg|grad|rad|turn)|${Nr})`,Vr="\\s*,\\s*",Ur=new RegExp(`^rgba?\\(\\s*${Nr}${Vr}${Nr}${Vr}${Nr}\\s*(?:,\\s*${Lr}\\s*)?\\)$`),Fr=new RegExp(`^rgba?\\(\\s*${Br}${Vr}${Br}${Vr}${Br}\\s*(?:,\\s*${Lr}\\s*)?\\)$`),Gr=(e="rgb")=>t=>void 0!==(t=((e,t)=>void 0===e?void 0:"object"!=typeof e?ha(e):void 0!==e.mode?e:t?{...e,mode:t}:void 0)(t,e))?t.mode===e?t:Kr[t.mode][e]?Kr[t.mode][e](t):"rgb"===e?Kr[t.mode].rgb(t):Kr.rgb[e](Kr[t.mode].rgb(t)):void 0,Kr={},Zr={},Wr=[],qr={},Xr=e=>e,Yr=e=>(Kr[e.mode]={...Kr[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach((t=>{Kr[t]||(Kr[t]={}),Kr[t][e.mode]=e.fromMode[t]})),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach((t=>{if(void 0===e.ranges[t]&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);"function"==typeof e.interpolate[t]&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=Xr)})),Zr[e.mode]=e,(e.parse||[]).forEach((t=>{Jr(t,e.mode)})),Gr(e.mode)),Jr=(e,t)=>{if("string"==typeof e){if(!t)throw new Error("'mode' required when 'parser' is a string");qr[e]=t}else"function"==typeof e&&Wr.indexOf(e)<0&&Wr.push(e)},Qr=/[^\x00-\x7F]|[a-zA-Z_]/,ea=/[^\x00-\x7F]|[-\w]/,ta={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let oa=0;function ia(e){let t=e[oa],o=e[oa+1];return"-"===t||"+"===t?/\d/.test(o)||"."===o&&/\d/.test(e[oa+2]):/\d/.test("."===t?o:t)}function na(e){if(oa>=e.length)return!1;let t=e[oa];if(Qr.test(t))return!0;if("-"===t){if(e.length-oa<2)return!1;let t=e[oa+1];return!("-"!==t&&!Qr.test(t))}return!1}const ra={deg:1,rad:180/Math.PI,grad:.9,turn:360};function aa(e){let t="";if("-"!==e[oa]&&"+"!==e[oa]||(t+=e[oa++]),t+=sa(e),"."===e[oa]&&/\d/.test(e[oa+1])&&(t+=e[oa++]+sa(e)),"e"!==e[oa]&&"E"!==e[oa]||("-"!==e[oa+1]&&"+"!==e[oa+1]||!/\d/.test(e[oa+2])?/\d/.test(e[oa+1])&&(t+=e[oa++]+sa(e)):t+=e[oa++]+e[oa++]+sa(e)),na(e)){let o=la(e);return"deg"===o||"rad"===o||"turn"===o||"grad"===o?{type:ta.Hue,value:t*ra[o]}:void 0}return"%"===e[oa]?(oa++,{type:ta.Percentage,value:+t}):{type:ta.Number,value:+t}}function sa(e){let t="";for(;/\d/.test(e[oa]);)t+=e[oa++];return t}function la(e){let t="";for(;oa<e.length&&ea.test(e[oa]);)t+=e[oa++];return t}function ca(e){let t=la(e);return"("===e[oa]?(oa++,{type:ta.Function,value:t}):"none"===t?{type:ta.None,value:void 0}:{type:ta.Ident,value:t}}function ua(e){e._i=0;let t=e[e._i++];if(!t||t.type!==ta.Function||"color"!==t.value)return;if(t=e[e._i++],t.type!==ta.Ident)return;const o=qr[t.value];if(!o)return;const i={mode:o},n=da(e,!1);if(!n)return;const r=(e=>Zr[e])(o).channels;for(let e,t,o=0;o<r.length;o++)e=n[o],t=r[o],e.type!==ta.None&&(i[t]=e.type===ta.Number?e.value:e.value/100,"alpha"===t&&(i[t]=Math.max(0,Math.min(1,i[t]))));return i}function da(e,t){const o=[];let i;for(;e._i<e.length;)if(i=e[e._i++],i.type===ta.None||i.type===ta.Number||i.type===ta.Alpha||i.type===ta.Percentage||t&&i.type===ta.Hue)o.push(i);else{if(i.type!==ta.ParenClose)return;if(e._i<e.length)return}if(!(o.length<3||o.length>4)){if(4===o.length){if(o[3].type!==ta.Alpha)return;o[3]=o[3].value}return 3===o.length&&o.push({type:ta.None,value:void 0}),o.every((e=>e.type!==ta.Alpha))?o:void 0}}const ha=e=>{if("string"!=typeof e)return;const t=function(e=""){let t,o=e.trim(),i=[];for(oa=0;oa<o.length;)if(t=o[oa++],"\n"!==t&&"\t"!==t&&" "!==t){if(","===t)return;if(")"!==t){if("+"===t){if(oa--,ia(o)){i.push(aa(o));continue}return}if("-"===t){if(oa--,ia(o)){i.push(aa(o));continue}if(na(o)){i.push({type:ta.Ident,value:la(o)});continue}return}if("."===t){if(oa--,ia(o)){i.push(aa(o));continue}return}if("/"===t){for(;oa<o.length&&("\n"===o[oa]||"\t"===o[oa]||" "===o[oa]);)oa++;let e;if(ia(o)&&(e=aa(o),e.type!==ta.Hue)){i.push({type:ta.Alpha,value:e});continue}if(na(o)&&"none"===la(o)){i.push({type:ta.Alpha,value:{type:ta.None,value:void 0}});continue}return}if(/\d/.test(t))oa--,i.push(aa(o));else{if(!Qr.test(t))return;oa--,i.push(ca(o))}}else i.push({type:ta.ParenClose})}else for(;oa<o.length&&("\n"===o[oa]||"\t"===o[oa]||" "===o[oa]);)oa++;return i}(e),o=t?function(e,t){e._i=0;let o=e[e._i++];if(!o||o.type!==ta.Function)return;let i=da(e,t);return i?(i.unshift(o.value),i):void 0}(t,!0):void 0;let i,n=0,r=Wr.length;for(;n<r;)if(void 0!==(i=Wr[n++](e,o)))return i;return t?ua(t):void 0};const pa=(ma=(e,t,o)=>e+o*(t-e),e=>{let t=(e=>{let t=[];for(let o=0;o<e.length-1;o++){let i=e[o],n=e[o+1];void 0===i&&void 0===n?t.push(void 0):void 0!==i&&void 0!==n?t.push([i,n]):t.push(void 0!==i?[i,i]:[n,n])}return t})(e);return e=>{let o=e*t.length,i=e>=1?t.length-1:Math.max(Math.floor(o),0),n=t[i];return void 0===n?void 0:ma(n[0],n[1],o-i)}});var ma;const _a=e=>{let t=!1,o=e.map((e=>void 0!==e?(t=!0,e):1));return t?o:e},ga={mode:"rgb",channels:["r","g","b","alpha"],parse:[function(e,t){if(!t||"rgb"!==t[0]&&"rgba"!==t[0])return;const o={mode:"rgb"},[,i,n,r,a]=t;return i.type!==ta.Hue&&n.type!==ta.Hue&&r.type!==ta.Hue?(i.type!==ta.None&&(o.r=i.type===ta.Number?i.value/255:i.value/100),n.type!==ta.None&&(o.g=n.type===ta.Number?n.value/255:n.value/100),r.type!==ta.None&&(o.b=r.type===ta.Number?r.value/255:r.value/100),a.type!==ta.None&&(o.alpha=Math.min(1,Math.max(0,a.type===ta.Number?a.value:a.value/100))),o):void 0},e=>{let t;return(t=e.match(Hr))?Ir(parseInt(t[1],16),t[1].length):void 0},e=>{let t,o={mode:"rgb"};if(t=e.match(Ur))void 0!==t[1]&&(o.r=t[1]/255),void 0!==t[2]&&(o.g=t[2]/255),void 0!==t[3]&&(o.b=t[3]/255);else{if(!(t=e.match(Fr)))return;void 0!==t[1]&&(o.r=t[1]/100),void 0!==t[2]&&(o.g=t[2]/100),void 0!==t[3]&&(o.b=t[3]/100)}return void 0!==t[4]?o.alpha=Math.max(0,Math.min(1,t[4]/100)):void 0!==t[5]&&(o.alpha=Math.max(0,Math.min(1,+t[5]))),o},e=>Ir(Dr[e.toLowerCase()],6),e=>"transparent"===e?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,"srgb"],serialize:"srgb",interpolate:{r:pa,g:pa,b:pa,alpha:{use:pa,fixup:_a}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},fa=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),ba=e=>{let t=fa(e.r),o=fa(e.g),i=fa(e.b),n={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*o+.1882286462349947*i,y:.297344975250536*t+.6273635662554661*o+.0752914584939979*i,z:.0270313613864123*t+.0706888525358272*o+.9913375368376386*i};return void 0!==e.alpha&&(n.alpha=e.alpha),n},va=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),ya=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n={mode:"a98",r:va(2.0415879038107465*e-.5650069742788597*t-.3447313507783297*o),g:va(-.9692436362808798*e+1.8759675015077206*t+.0415550574071756*o),b:va(.0134442806320312*e-.1183623922310184*t+1.0151749943912058*o)};return void 0!==i&&(n.alpha=i),n},wa=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},ka=({r:e,g:t,b:o,alpha:i})=>{let n={mode:"lrgb",r:wa(e),g:wa(t),b:wa(o)};return void 0!==i&&(n.alpha=i),n},xa=e=>{let{r:t,g:o,b:i,alpha:n}=ka(e),r={mode:"xyz65",x:.4123907992659593*t+.357584339383878*o+.1804807884018343*i,y:.2126390058715102*t+.715168678767756*o+.0721923153607337*i,z:.0193308187155918*t+.119194779794626*o+.9505321522496607*i};return void 0!==n&&(r.alpha=n),r},za=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):12.92*e},Ea=({r:e,g:t,b:o,alpha:i},n="rgb")=>{let r={mode:n,r:za(e),g:za(t),b:za(o)};return void 0!==i&&(r.alpha=i),r},Ca=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Ea({r:3.2409699419045226*e-1.537383177570094*t-.4986107602930034*o,g:-.9692436362808796*e+1.8759675015077204*t+.0415550574071756*o,b:.0556300796969936*e-.2039769588889765*t+1.0569715142428784*o});return void 0!==i&&(n.alpha=i),n},Aa={...ga,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>ya(xa(e)),xyz65:ya},toMode:{rgb:e=>Ca(ba(e)),xyz65:ba}},Ma=e=>(e%=360)<0?e+360:e,Sa=e=>((e,t)=>e.map(((o,i,n)=>{if(void 0===o)return o;let r=Ma(o);return 0===i||void 0===e[i-1]?r:t(r-Ma(n[i-1]))})).reduce(((e,t)=>e.length&&void 0!==t&&void 0!==e[e.length-1]?(e.push(t+e[e.length-1]),e):(e.push(t),e)),[]))(e,(e=>Math.abs(e)<=180?e:e-360*Math.sign(e))),$a=[-.14861,1.78277,-.29227,-.90649,1.97294,0],Ta=Math.PI/180,Pa=180/Math.PI;let ja=$a[3]*$a[4],Oa=$a[1]*$a[4],Ia=$a[1]*$a[2]-$a[0]*$a[3];const Da=(e,t)=>{if(void 0===e.h||void 0===t.h||!e.s||!t.s)return 0;let o=Ma(e.h),i=Ma(t.h),n=Math.sin((i-o+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*n},Ha=(e,t)=>{if(void 0===e.h||void 0===t.h||!e.c||!t.c)return 0;let o=Ma(e.h),i=Ma(t.h),n=Math.sin((i-o+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*n},Na=e=>{let t=e.reduce(((e,t)=>{if(void 0!==t){let o=t*Math.PI/180;e.sin+=Math.sin(o),e.cos+=Math.cos(o)}return e}),{sin:0,cos:0}),o=180*Math.atan2(t.sin,t.cos)/Math.PI;return o<0?360+o:o},Ba={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:({r:e,g:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=(Ia*o+e*ja-t*Oa)/(Ia+ja-Oa),r=o-n,a=($a[4]*(t-n)-$a[2]*r)/$a[3],s={mode:"cubehelix",l:n,s:0===n||1===n?void 0:Math.sqrt(r*r+a*a)/($a[4]*n*(1-n))};return s.s&&(s.h=Math.atan2(a,r)*Pa-120),void 0!==i&&(s.alpha=i),s}},toMode:{rgb:({h:e,s:t,l:o,alpha:i})=>{let n={mode:"rgb"};e=(void 0===e?0:e+120)*Ta,void 0===o&&(o=0);let r=void 0===t?0:t*o*(1-o),a=Math.cos(e),s=Math.sin(e);return n.r=o+r*($a[0]*a+$a[1]*s),n.g=o+r*($a[2]*a+$a[3]*s),n.b=o+r*($a[4]*a+$a[5]*s),void 0!==i&&(n.alpha=i),n}},interpolate:{h:{use:pa,fixup:Sa},s:pa,l:pa,alpha:{use:pa,fixup:_a}},difference:{h:Da},average:{h:Na}},La=({l:e,a:t,b:o,alpha:i},n="lch")=>{void 0===t&&(t=0),void 0===o&&(o=0);let r=Math.sqrt(t*t+o*o),a={mode:n,l:e,c:r};return r&&(a.h=Ma(180*Math.atan2(o,t)/Math.PI)),void 0!==i&&(a.alpha=i),a},Ra=({l:e,c:t,h:o,alpha:i},n="lab")=>{void 0===o&&(o=0);let r={mode:n,l:e,a:t?t*Math.cos(o/180*Math.PI):0,b:t?t*Math.sin(o/180*Math.PI):0};return void 0!==i&&(r.alpha=i),r},Va=Math.pow(29,3)/Math.pow(3,3),Ua=Math.pow(6,3)/Math.pow(29,3),Fa=.3457/.3585,Ga=1,Ka=.2958/.3585,Za=.3127/.329,Wa=1,qa=.3583/.329;let Xa=e=>Math.pow(e,3)>Ua?Math.pow(e,3):(116*e-16)/Va;const Ya=({l:e,a:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=(e+16)/116,r=n-o/200,a={mode:"xyz65",x:Xa(t/500+n)*Za,y:Xa(n)*Wa,z:Xa(r)*qa};return void 0!==i&&(a.alpha=i),a},Ja=e=>Ca(Ya(e)),Qa=e=>e>Ua?Math.cbrt(e):(Va*e+16)/116,es=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Qa(e/Za),r=Qa(t/Wa),a={mode:"lab65",l:116*r-16,a:500*(n-r),b:200*(r-Qa(o/qa))};return void 0!==i&&(a.alpha=i),a},ts=e=>{let t=es(xa(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},os=26/180*Math.PI,is=Math.cos(os),ns=Math.sin(os),rs=100/Math.log(1.39),as=({l:e,c:t,h:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n={mode:"lab65",l:(Math.exp(1*e/rs)-1)/.0039},r=(Math.exp(.0435*t*1*1)-1)/.075,a=r*Math.cos(o/180*Math.PI-os),s=r*Math.sin(o/180*Math.PI-os);return n.a=a*is-s/.83*ns,n.b=a*ns+s/.83*is,void 0!==i&&(n.alpha=i),n},ss=({l:e,a:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=t*is+o*ns,r=.83*(o*is-t*ns),a=Math.sqrt(n*n+r*r),s={mode:"dlch",l:rs/1*Math.log(1+.0039*e),c:Math.log(1+.075*a)/.0435};return s.c&&(s.h=Ma((Math.atan2(r,n)+os)/Math.PI*180)),void 0!==i&&(s.alpha=i),s},ls=e=>as(La(e,"dlch")),cs=e=>Ra(ss(e),"dlab"),us={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:ls,rgb:e=>Ja(ls(e))},fromMode:{lab65:cs,rgb:e=>cs(ts(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:pa,a:pa,b:pa,alpha:{use:pa,fixup:_a}}},ds={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:as,dlab:e=>Ra(e,"dlab"),rgb:e=>Ja(as(e))},fromMode:{lab65:ss,dlab:e=>La(e,"dlch"),rgb:e=>ss(ts(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:pa,c:pa,h:{use:pa,fixup:Sa},alpha:{use:pa,fixup:_a}},difference:{h:Ha},average:{h:Na}};const hs={mode:"hsi",toMode:{rgb:function({h:e,s:t,i:o,alpha:i}){e=Ma(void 0!==e?e:0),void 0===t&&(t=0),void 0===o&&(o=0);let n,r=Math.abs(e/60%2-1);switch(Math.floor(e/60)){case 0:n={r:o*(1+t*(3/(2-r)-1)),g:o*(1+t*(3*(1-r)/(2-r)-1)),b:o*(1-t)};break;case 1:n={r:o*(1+t*(3*(1-r)/(2-r)-1)),g:o*(1+t*(3/(2-r)-1)),b:o*(1-t)};break;case 2:n={r:o*(1-t),g:o*(1+t*(3/(2-r)-1)),b:o*(1+t*(3*(1-r)/(2-r)-1))};break;case 3:n={r:o*(1-t),g:o*(1+t*(3*(1-r)/(2-r)-1)),b:o*(1+t*(3/(2-r)-1))};break;case 4:n={r:o*(1+t*(3*(1-r)/(2-r)-1)),g:o*(1-t),b:o*(1+t*(3/(2-r)-1))};break;case 5:n={r:o*(1+t*(3/(2-r)-1)),g:o*(1-t),b:o*(1+t*(3*(1-r)/(2-r)-1))};break;default:n={r:o*(1-t),g:o*(1-t),b:o*(1-t)}}return n.mode="rgb",void 0!==i&&(n.alpha=i),n}},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:function({r:e,g:t,b:o,alpha:i}){void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Math.max(e,t,o),r=Math.min(e,t,o),a={mode:"hsi",s:e+t+o===0?0:1-3*r/(e+t+o),i:(e+t+o)/3};return n-r!=0&&(a.h=60*(n===e?(t-o)/(n-r)+6*(t<o):n===t?(o-e)/(n-r)+2:(e-t)/(n-r)+4)),void 0!==i&&(a.alpha=i),a}},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:pa,fixup:Sa},s:pa,i:pa,alpha:{use:pa,fixup:_a}},difference:{h:Da},average:{h:Na}};const ps=new RegExp(`^hsla?\\(\\s*${Rr}${Vr}${Br}${Vr}${Br}\\s*(?:,\\s*${Lr}\\s*)?\\)$`);const ms={mode:"hsl",toMode:{rgb:function({h:e,s:t,l:o,alpha:i}){e=Ma(void 0!==e?e:0),void 0===t&&(t=0),void 0===o&&(o=0);let n,r=o+t*(o<.5?o:1-o),a=r-2*(r-o)*Math.abs(e/60%2-1);switch(Math.floor(e/60)){case 0:n={r:r,g:a,b:2*o-r};break;case 1:n={r:a,g:r,b:2*o-r};break;case 2:n={r:2*o-r,g:r,b:a};break;case 3:n={r:2*o-r,g:a,b:r};break;case 4:n={r:a,g:2*o-r,b:r};break;case 5:n={r:r,g:2*o-r,b:a};break;default:n={r:2*o-r,g:2*o-r,b:2*o-r}}return n.mode="rgb",void 0!==i&&(n.alpha=i),n}},fromMode:{rgb:function({r:e,g:t,b:o,alpha:i}){void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Math.max(e,t,o),r=Math.min(e,t,o),a={mode:"hsl",s:n===r?0:(n-r)/(1-Math.abs(n+r-1)),l:.5*(n+r)};return n-r!=0&&(a.h=60*(n===e?(t-o)/(n-r)+6*(t<o):n===t?(o-e)/(n-r)+2:(e-t)/(n-r)+4)),void 0!==i&&(a.alpha=i),a}},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[function(e,t){if(!t||"hsl"!==t[0]&&"hsla"!==t[0])return;const o={mode:"hsl"},[,i,n,r,a]=t;if(i.type!==ta.None){if(i.type===ta.Percentage)return;o.h=i.value}if(n.type!==ta.None){if(n.type===ta.Hue)return;o.s=n.value/100}if(r.type!==ta.None){if(r.type===ta.Hue)return;o.l=r.value/100}return a.type!==ta.None&&(o.alpha=Math.min(1,Math.max(0,a.type===ta.Number?a.value:a.value/100))),o},e=>{let t=e.match(ps);if(!t)return;let o={mode:"hsl"};return void 0!==t[3]?o.h=+t[3]:void 0!==t[1]&&void 0!==t[2]&&(o.h=((e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return 360*e}})(t[1],t[2])),void 0!==t[4]&&(o.s=Math.min(Math.max(0,t[4]/100),1)),void 0!==t[5]&&(o.l=Math.min(Math.max(0,t[5]/100),1)),void 0!==t[6]?o.alpha=Math.max(0,Math.min(1,t[6]/100)):void 0!==t[7]&&(o.alpha=Math.max(0,Math.min(1,+t[7]))),o}],serialize:e=>`hsl(${void 0!==e.h?e.h:"none"} ${void 0!==e.s?100*e.s+"%":"none"} ${void 0!==e.l?100*e.l+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:pa,fixup:Sa},s:pa,l:pa,alpha:{use:pa,fixup:_a}},difference:{h:Da},average:{h:Na}};function _s({h:e,s:t,v:o,alpha:i}){e=Ma(void 0!==e?e:0),void 0===t&&(t=0),void 0===o&&(o=0);let n,r=Math.abs(e/60%2-1);switch(Math.floor(e/60)){case 0:n={r:o,g:o*(1-t*r),b:o*(1-t)};break;case 1:n={r:o*(1-t*r),g:o,b:o*(1-t)};break;case 2:n={r:o*(1-t),g:o,b:o*(1-t*r)};break;case 3:n={r:o*(1-t),g:o*(1-t*r),b:o};break;case 4:n={r:o*(1-t*r),g:o*(1-t),b:o};break;case 5:n={r:o,g:o*(1-t),b:o*(1-t*r)};break;default:n={r:o*(1-t),g:o*(1-t),b:o*(1-t)}}return n.mode="rgb",void 0!==i&&(n.alpha=i),n}function gs({r:e,g:t,b:o,alpha:i}){void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Math.max(e,t,o),r=Math.min(e,t,o),a={mode:"hsv",s:0===n?0:1-r/n,v:n};return n-r!=0&&(a.h=60*(n===e?(t-o)/(n-r)+6*(t<o):n===t?(o-e)/(n-r)+2:(e-t)/(n-r)+4)),void 0!==i&&(a.alpha=i),a}const fs={mode:"hsv",toMode:{rgb:_s},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:gs},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:pa,fixup:Sa},s:pa,v:pa,alpha:{use:pa,fixup:_a}},difference:{h:Da},average:{h:Na}};const bs={mode:"hwb",toMode:{rgb:function({h:e,w:t,b:o,alpha:i}){if(void 0===t&&(t=0),void 0===o&&(o=0),t+o>1){let e=t+o;t/=e,o/=e}return _s({h:e,s:1===o?1:1-t/(1-o),v:1-o,alpha:i})}},fromMode:{rgb:function(e){let t=gs(e);if(void 0===t)return;let o=void 0!==t.s?t.s:0,i=void 0!==t.v?t.v:0,n={mode:"hwb",w:(1-o)*i,b:1-i};return void 0!==t.h&&(n.h=t.h),void 0!==t.alpha&&(n.alpha=t.alpha),n}},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[function(e,t){if(!t||"hwb"!==t[0])return;const o={mode:"hwb"},[,i,n,r,a]=t;if(i.type!==ta.None){if(i.type===ta.Percentage)return;o.h=i.value}if(n.type!==ta.None){if(n.type===ta.Hue)return;o.w=n.value/100}if(r.type!==ta.None){if(r.type===ta.Hue)return;o.b=r.value/100}return a.type!==ta.None&&(o.alpha=Math.min(1,Math.max(0,a.type===ta.Number?a.value:a.value/100))),o}],serialize:e=>`hwb(${void 0!==e.h?e.h:"none"} ${void 0!==e.w?100*e.w+"%":"none"} ${void 0!==e.b?100*e.b+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:pa,fixup:Sa},w:pa,b:pa,alpha:{use:pa,fixup:_a}},difference:{h:(e,t)=>{if(void 0===e.h||void 0===t.h)return 0;let o=Ma(e.h),i=Ma(t.h);return Math.abs(i-o)>180?o-(i-360*Math.sign(i-o)):i-o}},average:{h:Na}},vs=.1593017578125,ys=78.84375,ws=.8359375,ks=18.8515625,xs=18.6875;function zs(e){if(e<0)return 0;const t=Math.pow(e,1/ys);return 1e4*Math.pow(Math.max(0,t-ws)/(ks-xs*t),1/vs)}function Es(e){if(e<0)return 0;const t=Math.pow(e/1e4,vs);return Math.pow((ws+ks*t)/(1+xs*t),ys)}const Cs=e=>Math.max(e/203,0),As=({i:e,t:t,p:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);const n=zs(e+.008609037037932761*t+.11102962500302593*o),r=zs(e-.00860903703793275*t-.11102962500302599*o),a=zs(e+.5600313357106791*t-.32062717498731885*o),s={mode:"xyz65",x:Cs(2.070152218389422*n-1.3263473389671556*r+.2066510476294051*a),y:Cs(.3647385209748074*n+.680566024947227*r-.0453045459220346*a),z:Cs(-.049747207535812*n-.0492609666966138*r+1.1880659249923042*a)};return void 0!==i&&(s.alpha=i),s},Ms=(e=0)=>Math.max(203*e,0),Ss=({x:e,y:t,z:o,alpha:i})=>{const n=Ms(e),r=Ms(t),a=Ms(o),s=Es(.3592832590121217*n+.6976051147779502*r-.0358915932320289*a),l=Es(-.1920808463704995*n+1.1004767970374323*r+.0753748658519118*a),c=Es(.0070797844607477*n+.0748396662186366*r+.8433265453898765*a),u={mode:"itp",i:.5*s+.5*l,t:1.61376953125*s-3.323486328125*l+1.709716796875*c,p:4.378173828125*s-4.24560546875*l-.132568359375*c};return void 0!==i&&(u.alpha=i),u},$s={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:As,rgb:e=>Ca(As(e))},fromMode:{xyz65:Ss,rgb:e=>Ss(xa(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:pa,t:pa,p:pa,alpha:{use:pa,fixup:_a}}},Ts=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,vs);return Math.pow((ws+ks*t)/(1+xs*t),134.03437499999998)},Ps=(e=0)=>Math.max(203*e,0),js=({x:e,y:t,z:o,alpha:i})=>{e=Ps(e),t=Ps(t);let n=1.15*e-.15*(o=Ps(o)),r=.66*t+.34*e,a=Ts(.41478972*n+.579999*r+.014648*o),s=Ts(-.20151*n+1.120649*r+.0531008*o),l=Ts(-.0166008*n+.2648*r+.6684799*o),c=(a+s)/2,u={mode:"jab",j:.44*c/(1-.56*c)-16295499532821565e-27,a:3.524*a-4.066708*s+.542708*l,b:.199076*a+1.096799*s-1.295875*l};return void 0!==i&&(u.alpha=i),u},Os=16295499532821565e-27,Is=e=>{if(e<0)return 0;let t=Math.pow(e,.007460772656268216);return 1e4*Math.pow((ws-t)/(xs*t-ks),1/vs)},Ds=e=>e/203,Hs=({j:e,a:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=(e+Os)/(.44+.56*(e+Os)),r=Is(n+.13860504*t+.058047316*o),a=Is(n-.13860504*t-.058047316*o),s=Is(n-.096019242*t-.8118919*o),l={mode:"xyz65",x:Ds(1.661373024652174*r-.914523081304348*a+.23136208173913045*s),y:Ds(-.3250758611844533*r+1.571847026732543*a-.21825383453227928*s),z:Ds(-.090982811*r-.31272829*a+1.5227666*s)};return void 0!==i&&(l.alpha=i),l},Ns=e=>{let t=js(xa(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Bs=e=>Ca(Hs(e)),Ls={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:Ns,xyz65:js},toMode:{rgb:Bs,xyz65:Hs},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:pa,a:pa,b:pa,alpha:{use:pa,fixup:_a}}},Rs=({j:e,a:t,b:o,alpha:i})=>{void 0===t&&(t=0),void 0===o&&(o=0);let n=Math.sqrt(t*t+o*o),r={mode:"jch",j:e,c:n};return n&&(r.h=Ma(180*Math.atan2(o,t)/Math.PI)),void 0!==i&&(r.alpha=i),r},Vs=({j:e,c:t,h:o,alpha:i})=>{void 0===o&&(o=0);let n={mode:"jab",j:e,a:t?t*Math.cos(o/180*Math.PI):0,b:t?t*Math.sin(o/180*Math.PI):0};return void 0!==i&&(n.alpha=i),n},Us={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:Vs,rgb:e=>Bs(Vs(e))},fromMode:{rgb:e=>Rs(Ns(e)),jab:Rs},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:pa,fixup:Sa},c:pa,j:pa,alpha:{use:pa,fixup:_a}},difference:{h:Ha},average:{h:Na}},Fs=Math.pow(29,3)/Math.pow(3,3),Gs=Math.pow(6,3)/Math.pow(29,3);let Ks=e=>Math.pow(e,3)>Gs?Math.pow(e,3):(116*e-16)/Fs;const Zs=({l:e,a:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=(e+16)/116,r=n-o/200,a={mode:"xyz50",x:Ks(t/500+n)*Fa,y:Ks(n)*Ga,z:Ks(r)*Ka};return void 0!==i&&(a.alpha=i),a},Ws=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Ea({r:3.1341359569958707*e-1.6173863321612538*t-.4906619460083532*o,g:-.978795502912089*e+1.916254567259524*t+.03344273116131949*o,b:.07195537988411677*e-.2289768264158322*t+1.405386058324125*o});return void 0!==i&&(n.alpha=i),n},qs=e=>Ws(Zs(e)),Xs=e=>{let{r:t,g:o,b:i,alpha:n}=ka(e),r={mode:"xyz50",x:.436065742824811*t+.3851514688337912*o+.14307845442264197*i,y:.22249319175623702*t+.7168870538238823*o+.06061979053616537*i,z:.013923904500943465*t+.09708128566574634*o+.7140993584005155*i};return void 0!==n&&(r.alpha=n),r},Ys=e=>e>Gs?Math.cbrt(e):(Fs*e+16)/116,Js=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Ys(e/Fa),r=Ys(t/Ga),a={mode:"lab",l:116*r-16,a:500*(n-r),b:200*(r-Ys(o/Ka))};return void 0!==i&&(a.alpha=i),a},Qs=e=>{let t=Js(Xs(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};const el={mode:"lab",toMode:{xyz50:Zs,rgb:qs},fromMode:{xyz50:Js,rgb:Qs},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[function(e,t){if(!t||"lab"!==t[0])return;const o={mode:"lab"},[,i,n,r,a]=t;return i.type!==ta.Hue&&n.type!==ta.Hue&&r.type!==ta.Hue?(i.type!==ta.None&&(o.l=Math.min(Math.max(0,i.value),100)),n.type!==ta.None&&(o.a=n.type===ta.Number?n.value:125*n.value/100),r.type!==ta.None&&(o.b=r.type===ta.Number?r.value:125*r.value/100),a.type!==ta.None&&(o.alpha=Math.min(1,Math.max(0,a.type===ta.Number?a.value:a.value/100))),o):void 0}],serialize:e=>`lab(${void 0!==e.l?e.l:"none"} ${void 0!==e.a?e.a:"none"} ${void 0!==e.b?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:pa,a:pa,b:pa,alpha:{use:pa,fixup:_a}}},tl={...el,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:Ya,rgb:Ja},fromMode:{xyz65:es,rgb:ts},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};const ol={mode:"lch",toMode:{lab:Ra,rgb:e=>qs(Ra(e))},fromMode:{rgb:e=>La(Qs(e)),lab:La},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[function(e,t){if(!t||"lch"!==t[0])return;const o={mode:"lch"},[,i,n,r,a]=t;if(i.type!==ta.None){if(i.type===ta.Hue)return;o.l=Math.min(Math.max(0,i.value),100)}if(n.type!==ta.None&&(o.c=Math.max(0,n.type===ta.Number?n.value:150*n.value/100)),r.type!==ta.None){if(r.type===ta.Percentage)return;o.h=r.value}return a.type!==ta.None&&(o.alpha=Math.min(1,Math.max(0,a.type===ta.Number?a.value:a.value/100))),o}],serialize:e=>`lch(${void 0!==e.l?e.l:"none"} ${void 0!==e.c?e.c:"none"} ${void 0!==e.h?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:pa,fixup:Sa},c:pa,l:pa,alpha:{use:pa,fixup:_a}},difference:{h:Ha},average:{h:Na}},il={...ol,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>Ra(e,"lab65"),rgb:e=>Ja(Ra(e,"lab65"))},fromMode:{rgb:e=>La(ts(e),"lch65"),lab65:e=>La(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},nl=({l:e,u:t,v:o,alpha:i})=>{void 0===t&&(t=0),void 0===o&&(o=0);let n=Math.sqrt(t*t+o*o),r={mode:"lchuv",l:e,c:n};return n&&(r.h=Ma(180*Math.atan2(o,t)/Math.PI)),void 0!==i&&(r.alpha=i),r},rl=({l:e,c:t,h:o,alpha:i})=>{void 0===o&&(o=0);let n={mode:"luv",l:e,u:t?t*Math.cos(o/180*Math.PI):0,v:t?t*Math.sin(o/180*Math.PI):0};return void 0!==i&&(n.alpha=i),n},al=(e,t,o)=>4*e/(e+15*t+3*o),sl=(e,t,o)=>9*t/(e+15*t+3*o),ll=al(Fa,Ga,Ka),cl=sl(Fa,Ga,Ka),ul=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=(r=t/Ga)<=Gs?Fs*r:116*Math.cbrt(r)-16;var r;let a=al(e,t,o),s=sl(e,t,o);isFinite(a)&&isFinite(s)?(a=13*n*(a-ll),s=13*n*(s-cl)):n=a=s=0;let l={mode:"luv",l:n,u:a,v:s};return void 0!==i&&(l.alpha=i),l},dl=((e,t,o)=>4*e/(e+15*t+3*o))(Fa,Ga,Ka),hl=((e,t,o)=>9*t/(e+15*t+3*o))(Fa,Ga,Ka),pl=({l:e,u:t,v:o,alpha:i})=>{if(void 0===e&&(e=0),0===e)return{mode:"xyz50",x:0,y:0,z:0};void 0===t&&(t=0),void 0===o&&(o=0);let n=t/(13*e)+dl,r=o/(13*e)+hl,a=Ga*(e<=8?e/Fs:Math.pow((e+16)/116,3)),s={mode:"xyz50",x:a*(9*n)/(4*r),y:a,z:a*(12-3*n-20*r)/(4*r)};return void 0!==i&&(s.alpha=i),s},ml={mode:"lchuv",toMode:{luv:rl,rgb:e=>Ws(pl(rl(e)))},fromMode:{rgb:e=>nl(ul(Xs(e))),luv:nl},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:pa,fixup:Sa},c:pa,l:pa,alpha:{use:pa,fixup:_a}},difference:{h:Ha},average:{h:Na}},_l={...ga,mode:"lrgb",toMode:{rgb:Ea},fromMode:{rgb:ka},parse:["srgb-linear"],serialize:"srgb-linear"},gl={mode:"luv",toMode:{xyz50:pl,rgb:e=>Ws(pl(e))},fromMode:{xyz50:ul,rgb:e=>ul(Xs(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:pa,u:pa,v:pa,alpha:{use:pa,fixup:_a}}},fl=({r:e,g:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*o),r=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*o),a=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*o),s={mode:"oklab",l:.210454268309314*n+.7936177747023054*r-.0040720430116193*a,a:1.9779985324311684*n-2.42859224204858*r+.450593709617411*a,b:.0259040424655478*n+.7827717124575296*r-.8086757549230774*a};return void 0!==i&&(s.alpha=i),s},bl=e=>{let t=fl(ka(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},vl=({l:e,a:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Math.pow(e+.3963377773761749*t+.2158037573099136*o,3),r=Math.pow(e-.1055613458156586*t-.0638541728258133*o,3),a=Math.pow(e-.0894841775298119*t-1.2914855480194092*o,3),s={mode:"lrgb",r:4.076741636075957*n-3.3077115392580616*r+.2309699031821044*a,g:-1.2684379732850317*n+2.6097573492876887*r-.3413193760026573*a,b:-.0041960761386756*n-.7034186179359362*r+1.7076146940746117*a};return void 0!==i&&(s.alpha=i),s},yl=e=>Ea(vl(e));function wl(e){const t=.206,o=1.206/1.03;return.5*(o*e-t+Math.sqrt((o*e-t)*(o*e-t)+.12*o*e))}function kl(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function xl(e,t){let o=function(e,t){let o,i,n,r,a,s,l,c;-1.88170328*e-.80936493*t>1?(o=1.19086277,i=1.76576728,n=.59662641,r=.75515197,a=.56771245,s=4.0767416621,l=-3.3077115913,c=.2309699292):1.81444104*e-1.19445276*t>1?(o=.73956515,i=-.45954404,n=.08285427,r=.1254107,a=.14503204,s=-1.2684380046,l=2.6097574011,c=-.3413193965):(o=1.35733652,i=-.00915799,n=-1.1513021,r=-.50559606,a=.00692167,s=-.0041960863,l=-.7034186147,c=1.707614701);let u=o+i*e+n*t+r*e*e+a*e*t,d=.3963377774*e+.2158037573*t,h=-.1055613458*e-.0638541728*t,p=-.0894841775*e-1.291485548*t;{let e=1+u*d,t=1+u*h,o=1+u*p,i=s*(e*e*e)+l*(t*t*t)+c*(o*o*o),n=s*(3*d*e*e)+l*(3*h*t*t)+c*(3*p*o*o);u-=i*n/(n*n-.5*i*(s*(6*d*d*e)+l*(6*h*h*t)+c*(6*p*p*o)))}return u}(e,t),i=vl({l:1,a:o*e,b:o*t}),n=Math.cbrt(1/Math.max(i.r,i.g,i.b));return[n,n*o]}function zl(e,t,o=null){o||(o=xl(e,t));let i=o[0],n=o[1];return[n/i,n/(1-i)]}function El(e,t,o){let i=xl(t,o),n=function(e,t,o,i,n,r=null){let a;if(r||(r=xl(e,t)),(o-n)*r[1]-(r[0]-n)*i<=0)a=r[1]*n/(i*r[0]+r[1]*(n-o));else{a=r[1]*(n-1)/(i*(r[0]-1)+r[1]*(n-o));{let r=o-n,s=.3963377774*e+.2158037573*t,l=-.1055613458*e-.0638541728*t,c=-.0894841775*e-1.291485548*t,u=r+i*s,d=r+i*l,h=r+i*c;{let e=n*(1-a)+a*o,t=a*i,r=e+t*s,p=e+t*l,m=e+t*c,_=r*r*r,g=p*p*p,f=m*m*m,b=3*u*r*r,v=3*d*p*p,y=3*h*m*m,w=6*u*u*r,k=6*d*d*p,x=6*h*h*m,z=4.0767416621*_-3.3077115913*g+.2309699292*f-1,E=4.0767416621*b-3.3077115913*v+.2309699292*y,C=E/(E*E-.5*z*(4.0767416621*w-3.3077115913*k+.2309699292*x)),A=-z*C,M=-1.2684380046*_+2.6097574011*g-.3413193965*f-1,S=-1.2684380046*b+2.6097574011*v-.3413193965*y,$=S/(S*S-.5*M*(-1.2684380046*w+2.6097574011*k-.3413193965*x)),T=-M*$,P=-.0041960863*_-.7034186147*g+1.707614701*f-1,j=-.0041960863*b-.7034186147*v+1.707614701*y,O=j/(j*j-.5*P*(-.0041960863*w-.7034186147*k+1.707614701*x)),I=-P*O;A=C>=0?A:1e6,T=$>=0?T:1e6,I=O>=0?I:1e6,a+=Math.min(A,Math.min(T,I))}}}return a}(t,o,e,1,e,i),r=zl(t,o,i),a=e*(.11516993+1/(7.4477897+4.1590124*o+t*(1.75198401*o-2.19557347+t*(-2.13704948-10.02301043*o+t*(5.38770819*o-4.24894561+4.69891013*t))))),s=(1-e)*(.11239642+1/(1.6132032-.68124379*o+t*(.40370612+.90148123*o+t*(.6122399*o-.27087943+t*(.00299215-.45399568*o-.14661872*t))))),l=.9*(n/Math.min(e*r[0],(1-e)*r[1]))*Math.sqrt(Math.sqrt(1/(1/(a*a*a*a)+1/(s*s*s*s))));return a=.4*e,s=.8*(1-e),[Math.sqrt(1/(1/(a*a)+1/(s*s))),l,n]}function Cl(e){const t=void 0!==e.l?e.l:0,o=void 0!==e.a?e.a:0,i=void 0!==e.b?e.b:0,n={mode:"okhsl",l:wl(t)};void 0!==e.alpha&&(n.alpha=e.alpha);let r=Math.sqrt(o*o+i*i);if(!r)return n.s=0,n;let a,[s,l,c]=El(t,o/r,i/r);if(r<l){let e=0,t=.8*s;a=.8*((r-e)/(t+(1-t/l)*(r-e)))}else{let e=.2*l*l*1.25*1.25/s;a=.8+.2*((r-l)/(e+(1-e/(c-l))*(r-l)))}return a&&(n.s=a,n.h=Ma(180*Math.atan2(i,o)/Math.PI)),n}function Al(e){let t=void 0!==e.h?e.h:0,o=void 0!==e.s?e.s:0,i=void 0!==e.l?e.l:0;const n={mode:"oklab",l:kl(i)};if(void 0!==e.alpha&&(n.alpha=e.alpha),!o||1===i)return n.a=n.b=0,n;let r,a,s,l,c=Math.cos(t/180*Math.PI),u=Math.sin(t/180*Math.PI),[d,h,p]=El(n.l,c,u);o<.8?(r=1.25*o,a=0,s=.8*d,l=1-s/h):(r=5*(o-.8),a=h,s=.2*h*h*1.25*1.25/d,l=1-s/(p-h));let m=a+r*s/(1-l*r);return n.a=m*c,n.b=m*u,n}const Ml={...ms,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:Cl,rgb:e=>Cl(bl(e))},toMode:{oklab:Al,rgb:e=>yl(Al(e))}};function Sl(e){let t=void 0!==e.l?e.l:0,o=void 0!==e.a?e.a:0,i=void 0!==e.b?e.b:0,n=Math.sqrt(o*o+i*i),r=n?o/n:1,a=n?i/n:1,[s,l]=zl(r,a),c=1-.5/s,u=l/(n+t*l),d=u*t,h=u*n,p=kl(d),m=h*p/d,_=vl({l:p,a:r*m,b:a*m}),g=Math.cbrt(1/Math.max(_.r,_.g,_.b,0));t/=g,n=n/g*wl(t)/t,t=wl(t);const f={mode:"okhsv",s:n?(.5+l)*h/(.5*l+l*c*h):0,v:t?t/d:0};return f.s&&(f.h=Ma(180*Math.atan2(i,o)/Math.PI)),void 0!==e.alpha&&(f.alpha=e.alpha),f}function $l(e){const t={mode:"oklab"};void 0!==e.alpha&&(t.alpha=e.alpha);const o=void 0!==e.h?e.h:0,i=void 0!==e.s?e.s:0,n=void 0!==e.v?e.v:0,r=Math.cos(o/180*Math.PI),a=Math.sin(o/180*Math.PI),[s,l]=zl(r,a),c=.5,u=1-c/s,d=1-i*c/(c+l-l*u*i),h=i*l*c/(c+l-l*u*i),p=kl(d),m=h*p/d,_=vl({l:p,a:r*m,b:a*m}),g=Math.cbrt(1/Math.max(_.r,_.g,_.b,0)),f=kl(n*d),b=h*f/d;return t.l=f*g,t.a=b*r*g,t.b=b*a*g,t}const Tl={...fs,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:Sl,rgb:e=>Sl(bl(e))},toMode:{oklab:$l,rgb:e=>yl($l(e))}};const Pl={...el,mode:"oklab",toMode:{lrgb:vl,rgb:yl},fromMode:{lrgb:fl,rgb:bl},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[function(e,t){if(!t||"oklab"!==t[0])return;const o={mode:"oklab"},[,i,n,r,a]=t;return i.type!==ta.Hue&&n.type!==ta.Hue&&r.type!==ta.Hue?(i.type!==ta.None&&(o.l=Math.min(Math.max(0,i.type===ta.Number?i.value:i.value/100),1)),n.type!==ta.None&&(o.a=n.type===ta.Number?n.value:.4*n.value/100),r.type!==ta.None&&(o.b=r.type===ta.Number?r.value:.4*r.value/100),a.type!==ta.None&&(o.alpha=Math.min(1,Math.max(0,a.type===ta.Number?a.value:a.value/100))),o):void 0}],serialize:e=>`oklab(${void 0!==e.l?e.l:"none"} ${void 0!==e.a?e.a:"none"} ${void 0!==e.b?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};const jl={...ol,mode:"oklch",toMode:{oklab:e=>Ra(e,"oklab"),rgb:e=>yl(Ra(e,"oklab"))},fromMode:{rgb:e=>La(bl(e),"oklch"),oklab:e=>La(e,"oklch")},parse:[function(e,t){if(!t||"oklch"!==t[0])return;const o={mode:"oklch"},[,i,n,r,a]=t;if(i.type!==ta.None){if(i.type===ta.Hue)return;o.l=Math.min(Math.max(0,i.type===ta.Number?i.value:i.value/100),1)}if(n.type!==ta.None&&(o.c=Math.max(0,n.type===ta.Number?n.value:.4*n.value/100)),r.type!==ta.None){if(r.type===ta.Percentage)return;o.h=r.value}return a.type!==ta.None&&(o.alpha=Math.min(1,Math.max(0,a.type===ta.Number?a.value:a.value/100))),o}],serialize:e=>`oklch(${void 0!==e.l?e.l:"none"} ${void 0!==e.c?e.c:"none"} ${void 0!==e.h?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},Ol=e=>{let{r:t,g:o,b:i,alpha:n}=ka(e),r={mode:"xyz65",x:.486570948648216*t+.265667693169093*o+.1982172852343625*i,y:.2289745640697487*t+.6917385218365062*o+.079286914093745*i,z:0*t+.0451133818589026*o+1.043944368900976*i};return void 0!==n&&(r.alpha=n),r},Il=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n=Ea({r:2.4934969119414263*e-.9313836179191242*t-.402710784450717*o,g:-.8294889695615749*e+1.7626640603183465*t+.0236246858419436*o,b:.0358458302437845*e-.0761723892680418*t+.9568845240076871*o},"p3");return void 0!==i&&(n.alpha=i),n},Dl={...ga,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>Il(xa(e)),xyz65:Il},toMode:{rgb:e=>Ca(Ol(e)),xyz65:Ol}},Hl=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},Nl=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n={mode:"prophoto",r:Hl(1.3457868816471585*e-.2555720873797946*t-.0511018649755453*o),g:Hl(-.5446307051249019*e+1.5082477428451466*t+.0205274474364214*o),b:Hl(0*e+0*t+1.2119675456389452*o)};return void 0!==i&&(n.alpha=i),n},Bl=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},Ll=e=>{let t=Bl(e.r),o=Bl(e.g),i=Bl(e.b),n={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*o+.0313477341283922*i,y:.2880748288194013*t+.7118352342418731*o+899369387256e-16*i,z:0*t+0*o+.8251046025104602*i};return void 0!==e.alpha&&(n.alpha=e.alpha),n},Rl={...ga,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:Nl,rgb:e=>Nl(Xs(e))},toMode:{xyz50:Ll,rgb:e=>Ws(Ll(e))}},Vl=1.09929682680944,Ul=e=>{const t=Math.abs(e);return t>.018053968510807?(Math.sign(e)||1)*(Vl*Math.pow(t,.45)-(Vl-1)):4.5*e},Fl=({x:e,y:t,z:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);let n={mode:"rec2020",r:Ul(1.7166511879712683*e-.3556707837763925*t-.2533662813736599*o),g:Ul(-.6666843518324893*e+1.6164812366349395*t+.0157685458139111*o),b:Ul(.0176398574453108*e-.0427706132578085*t+.9421031212354739*o)};return void 0!==i&&(n.alpha=i),n},Gl=1.09929682680944,Kl=(e=0)=>{let t=Math.abs(e);return t<.08124285829863151?e/4.5:(Math.sign(e)||1)*Math.pow((t+Gl-1)/Gl,1/.45)},Zl=e=>{let t=Kl(e.r),o=Kl(e.g),i=Kl(e.b),n={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*o+.1688809751641721*i,y:.262700212011267*t+.6779980715188708*o+.059301716469862*i,z:0*t+.0280726930490874*o+1.0609850577107909*i};return void 0!==e.alpha&&(n.alpha=e.alpha),n},Wl={...ga,mode:"rec2020",fromMode:{xyz65:Fl,rgb:e=>Fl(xa(e))},toMode:{xyz65:Zl,rgb:e=>Ca(Zl(e))},parse:["rec2020"],serialize:"rec2020"},ql=.0037930732552754493,Xl=Math.cbrt(ql),Yl=e=>Math.cbrt(e)-Xl,Jl=e=>Math.pow(e+Xl,3),Ql={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:({x:e,y:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);const n=Jl(e+t)-ql,r=Jl(t-e)-ql,a=Jl(o+t)-ql,s=Ea({r:11.031566904639861*n-9.866943908131562*r-.16462299650829934*a,g:-3.2541473810744237*n+4.418770377582723*r-.16462299650829934*a,b:-3.6588512867136815*n+2.7129230459360922*r+1.9459282407775895*a});return void 0!==i&&(s.alpha=i),s}},fromMode:{rgb:e=>{const{r:t,g:o,b:i,alpha:n}=ka(e),r=Yl(.3*t+.622*o+.078*i+ql),a=Yl(.23*t+.692*o+.078*i+ql),s={mode:"xyb",x:(r-a)/2,y:(r+a)/2,b:Yl(.2434226892454782*t+.2047674442449682*o+.5518098665095535*i+ql)-(r+a)/2};return void 0!==n&&(s.alpha=n),s}},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:pa,y:pa,b:pa,alpha:{use:pa,fixup:_a}}},ec={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Ws,lab:Js},fromMode:{rgb:Xs,lab:Zs},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:pa,y:pa,z:pa,alpha:{use:pa,fixup:_a}}},tc={mode:"xyz65",toMode:{rgb:Ca,xyz50:e=>{let{x:t,y:o,z:i,alpha:n}=e;void 0===t&&(t=0),void 0===o&&(o=0),void 0===i&&(i=0);let r={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*o-.0501922295431356*i,y:.0296278156881593*t+.990434484573249*o-.0170738250293851*i,z:-.0092430581525912*t+.0150551448965779*o+.7518742899580008*i};return void 0!==n&&(r.alpha=n),r}},fromMode:{rgb:xa,xyz50:e=>{let{x:t,y:o,z:i,alpha:n}=e;void 0===t&&(t=0),void 0===o&&(o=0),void 0===i&&(i=0);let r={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*o+.0632593086610217*i,y:-.0283697069632081*t+1.0099954580058226*o+.021041398966943*i,z:.0123140016883199*t-.0205076964334779*o+1.3303659366080753*i};return void 0!==n&&(r.alpha=n),r}},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:pa,y:pa,z:pa,alpha:{use:pa,fixup:_a}}},oc={mode:"yiq",toMode:{rgb:({y:e,i:t,q:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);const n={mode:"rgb",r:e+.95608445*t+.6208885*o,g:e-.27137664*t-.6486059*o,b:e-1.10561724*t+1.70250126*o};return void 0!==i&&(n.alpha=i),n}},fromMode:{rgb:({r:e,g:t,b:o,alpha:i})=>{void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=0);const n={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*o,i:.59597799*e-.2741761*t-.32180189*o,q:.21147017*e-.52261711*t+.31114694*o};return void 0!==i&&(n.alpha=i),n}},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:pa,i:pa,q:pa,alpha:{use:pa,fixup:_a}}};Yr(Aa),Yr(Ba),Yr(us),Yr(ds),Yr(hs),Yr(ms),Yr(fs),Yr(bs),Yr($s),Yr(Ls),Yr(Us),Yr(el),Yr(tl),Yr(ol),Yr(il),Yr(ml),Yr(_l),Yr(gl),Yr(Ml),Yr(Tl),Yr(Pl),Yr(jl),Yr(Dl),Yr(Rl),Yr(Wl),Yr(ga),Yr(Ql),Yr(ec),Yr(tc),Yr(oc);const ic=h`
  --default-red: 244, 67, 54;
  --default-pink: 233, 30, 99;
  --default-purple: 146, 107, 199;
  --default-deep-purple: 110, 65, 171;
  --default-indigo: 63, 81, 181;
  --default-blue: 33, 150, 243;
  --default-light-blue: 3, 169, 244;
  --default-cyan: 0, 188, 212;
  --default-teal: 0, 150, 136;
  --default-green: 76, 175, 80;
  --default-light-green: 139, 195, 74;
  --default-lime: 205, 220, 57;
  --default-yellow: 255, 235, 59;
  --default-amber: 255, 193, 7;
  --default-orange: 255, 152, 0;
  --default-deep-orange: 255, 111, 34;
  --default-brown: 121, 85, 72;
  --default-light-grey: 189, 189, 189;
  --default-grey: 158, 158, 158;
  --default-dark-grey: 96, 96, 96;
  --default-blue-grey: 96, 125, 139;
  --default-black: 0, 0, 0;
  --default-white: 255, 255, 255;
  --default-disabled: 189, 189, 189;
`,nc=h`
  --default-disabled: 111, 111, 111;
`,rc=h`
  --spacing: var(--mush-spacing, 10px);

  /* Title */
  --title-padding: var(--mush-title-padding, 24px 12px 8px);
  --title-spacing: var(--mush-title-spacing, 8px);
  --title-font-size: var(--mush-title-font-size, 24px);
  --title-font-weight: var(--mush-title-font-weight, normal);
  --title-line-height: var(--mush-title-line-height, 32px);
  --title-color: var(--mush-title-color, var(--primary-text-color));
  --title-letter-spacing: var(--mush-title-letter-spacing, -0.288px);
  --subtitle-font-size: var(--mush-subtitle-font-size, 16px);
  --subtitle-font-weight: var(--mush-subtitle-font-weight, normal);
  --subtitle-line-height: var(--mush-subtitle-line-height, 24px);
  --subtitle-color: var(--mush-subtitle-color, var(--secondary-text-color));
  --subtitle-letter-spacing: var(--mush-subtitle-letter-spacing, 0px);

  /* Card */
  --card-primary-font-size: var(--mush-card-primary-font-size, 14px);
  --card-secondary-font-size: var(--mush-card-secondary-font-size, 12px);
  --card-primary-font-weight: var(--mush-card-primary-font-weight, 500);
  --card-secondary-font-weight: var(--mush-card-secondary-font-weight, 400);
  --card-primary-line-height: var(--mush-card-primary-line-height, 20px);
  --card-secondary-line-height: var(--mush-card-secondary-line-height, 16px);
  --card-primary-color: var(
    --mush-card-primary-color,
    var(--primary-text-color)
  );
  --card-secondary-color: var(
    --mush-card-secondary-color,
    var(--primary-text-color)
  );
  --card-primary-letter-spacing: var(--mush-card-primary-letter-spacing, 0.1px);
  --card-secondary-letter-spacing: var(
    --mush-card-secondary-letter-spacing,
    0.4px
  );

  /* Chips */
  --chip-spacing: var(--mush-chip-spacing, 8px);
  --chip-padding: var(--mush-chip-padding, 0 0.25em);
  --chip-height: var(--mush-chip-height, 36px);
  --chip-border-radius: var(--mush-chip-border-radius, 19px);
  --chip-border-width: var(
    --mush-chip-border-width,
    var(--ha-card-border-width, 1px)
  );
  --chip-border-color: var(
    --mush-chip-border-color,
    var(--ha-card-border-color, var(--divider-color))
  );
  --chip-box-shadow: var(
    --mush-chip-box-shadow,
    var(--ha-card-box-shadow, "none")
  );
  --chip-font-size: var(--mush-chip-font-size, 0.3em);
  --chip-font-weight: var(--mush-chip-font-weight, bold);
  --chip-icon-size: var(--mush-chip-icon-size, 0.5em);
  --chip-avatar-padding: var(--mush-chip-avatar-padding, 0.1em);
  --chip-avatar-border-radius: var(--mush-chip-avatar-border-radius, 50%);
  --chip-background: var(
    --mush-chip-background,
    var(--ha-card-background, var(--card-background-color, white))
  );
  /* Controls */
  --control-border-radius: var(--mush-control-border-radius, 12px);
  --control-height: var(--mush-control-height, 42px);
  --control-button-ratio: var(--mush-control-button-ratio, 1);
  --control-icon-size: var(--mush-control-icon-size, 0.5em);
  --control-spacing: var(--mush-control-spacing, 12px);

  /* Slider */
  --slider-threshold: var(--mush-slider-threshold);

  /* Input Number */
  --input-number-debounce: var(--mush-input-number-debounce);

  /* Layout */
  --layout-align: var(--mush-layout-align, center);

  /* Badge */
  --badge-size: var(--mush-badge-size, 16px);
  --badge-icon-size: var(--mush-badge-icon-size, 0.75em);
  --badge-border-radius: var(--mush-badge-border-radius, 50%);

  /* Icon */
  --icon-border-radius: var(--mush-icon-border-radius, 50%);
  --icon-size: var(--mush-icon-size, 36px);
  --icon-symbol-size: var(--mush-icon-symbol-size, 0.667em);
`,ac=h`
  /* RGB */
  /* Standard colors */
  --rgb-red: var(--mush-rgb-red, var(--default-red));
  --rgb-pink: var(--mush-rgb-pink, var(--default-pink));
  --rgb-purple: var(--mush-rgb-purple, var(--default-purple));
  --rgb-deep-purple: var(--mush-rgb-deep-purple, var(--default-deep-purple));
  --rgb-indigo: var(--mush-rgb-indigo, var(--default-indigo));
  --rgb-blue: var(--mush-rgb-blue, var(--default-blue));
  --rgb-light-blue: var(--mush-rgb-light-blue, var(--default-light-blue));
  --rgb-cyan: var(--mush-rgb-cyan, var(--default-cyan));
  --rgb-teal: var(--mush-rgb-teal, var(--default-teal));
  --rgb-green: var(--mush-rgb-green, var(--default-green));
  --rgb-light-green: var(--mush-rgb-light-green, var(--default-light-green));
  --rgb-lime: var(--mush-rgb-lime, var(--default-lime));
  --rgb-yellow: var(--mush-rgb-yellow, var(--default-yellow));
  --rgb-amber: var(--mush-rgb-amber, var(--default-amber));
  --rgb-orange: var(--mush-rgb-orange, var(--default-orange));
  --rgb-deep-orange: var(--mush-rgb-deep-orange, var(--default-deep-orange));
  --rgb-brown: var(--mush-rgb-brown, var(--default-brown));
  --rgb-light-grey: var(--mush-rgb-light-grey, var(--default-light-grey));
  --rgb-grey: var(--mush-rgb-grey, var(--default-grey));
  --rgb-dark-grey: var(--mush-rgb-dark-grey, var(--default-dark-grey));
  --rgb-blue-grey: var(--mush-rgb-blue-grey, var(--default-blue-grey));
  --rgb-black: var(--mush-rgb-black, var(--default-black));
  --rgb-white: var(--mush-rgb-white, var(--default-white));
  --rgb-disabled: var(--mush-rgb-disabled, var(--default-disabled));

  /* Action colors */
  --rgb-info: var(--mush-rgb-info, var(--rgb-blue));
  --rgb-success: var(--mush-rgb-success, var(--rgb-green));
  --rgb-warning: var(--mush-rgb-warning, var(--rgb-orange));
  --rgb-danger: var(--mush-rgb-danger, var(--rgb-red));

  /* State colors */
  --rgb-state-vacuum: var(--mush-rgb-state-vacuum, var(--rgb-teal));
  --rgb-state-fan: var(--mush-rgb-state-fan, var(--rgb-green));
  --rgb-state-light: var(--mush-rgb-state-light, var(--rgb-orange));
  --rgb-state-entity: var(--mush-rgb-state-entity, var(--rgb-blue));
  --rgb-state-media-player: var(
    --mush-rgb-state-media-player,
    var(--rgb-indigo)
  );
  --rgb-state-lock: var(--mush-rgb-state-lock, var(--rgb-blue));
  --rgb-state-number: var(--mush-rgb-state-number, var(--rgb-blue));
  --rgb-state-humidifier: var(--mush-rgb-state-humidifier, var(--rgb-purple));

  /* State alarm colors */
  --rgb-state-alarm-disarmed: var(
    --mush-rgb-state-alarm-disarmed,
    var(--rgb-info)
  );
  --rgb-state-alarm-armed: var(
    --mush-rgb-state-alarm-armed,
    var(--rgb-success)
  );
  --rgb-state-alarm-triggered: var(
    --mush-rgb-state-alarm-triggered,
    var(--rgb-danger)
  );

  /* State person colors */
  --rgb-state-person-home: var(
    --mush-rgb-state-person-home,
    var(--rgb-success)
  );
  --rgb-state-person-not-home: var(
    --mush-rgb-state-person-not-home,
    var(--rgb-danger)
  );
  --rgb-state-person-zone: var(--mush-rgb-state-person-zone, var(--rgb-info));
  --rgb-state-person-unknown: var(
    --mush-rgb-state-person-unknown,
    var(--rgb-grey)
  );

  /* State update colors */
  --rgb-state-update-on: var(--mush-rgb-state-update-on, var(--rgb-orange));
  --rgb-state-update-off: var(--mush-rgb-update-off, var(--rgb-green));
  --rgb-state-update-installing: var(
    --mush-rgb-update-installing,
    var(--rgb-blue)
  );

  /* State lock colors */
  --rgb-state-lock-locked: var(--mush-rgb-state-lock-locked, var(--rgb-green));
  --rgb-state-lock-unlocked: var(
    --mush-rgb-state-lock-unlocked,
    var(--rgb-red)
  );
  --rgb-state-lock-pending: var(
    --mush-rgb-state-lock-pending,
    var(--rgb-orange)
  );

  /* State cover colors */
  --rgb-state-cover-open: var(--mush-rgb-state-cover-open, var(--rgb-blue));
  --rgb-state-cover-closed: var(
    --mush-rgb-state-cover-closed,
    var(--rgb-disabled)
  );

  /* State climate colors */
  --rgb-state-climate-auto: var(
    --mush-rgb-state-climate-auto,
    var(--rgb-green)
  );
  --rgb-state-climate-cool: var(--mush-rgb-state-climate-cool, var(--rgb-blue));
  --rgb-state-climate-dry: var(--mush-rgb-state-climate-dry, var(--rgb-orange));
  --rgb-state-climate-fan-only: var(
    --mush-rgb-state-climate-fan-only,
    var(--rgb-teal)
  );
  --rgb-state-climate-heat: var(
    --mush-rgb-state-climate-heat,
    var(--rgb-deep-orange)
  );
  --rgb-state-climate-heat-cool: var(
    --mush-rgb-state-climate-heat-cool,
    var(--rgb-green)
  );
  --rgb-state-climate-idle: var(
    --mush-rgb-state-climate-idle,
    var(--rgb-disabled)
  );
  --rgb-state-climate-off: var(
    --mush-rgb-state-climate-off,
    var(--rgb-disabled)
  );
`;function sc(e){return!!e&&e.themes.darkMode}class lc extends me{updated(e){if(super.updated(e),e.has("hass")&&this.hass){const t=sc(e.get("hass")),o=sc(this.hass);t!==o&&this.toggleAttribute("dark-mode",o)}}static get styles(){return[Mr,h`
        :host {
          ${ic}
        }
        :host([dark-mode]) {
          ${nc}
        }
        :host {
          ${ac}
          ${rc}
        }
      `]}}n([ve({attribute:!1})],lc.prototype,"hass",void 0);const cc=["button","input_button","scene"],uc=["name","state","last-changed","last-updated","none"];function dc(e,t,o,i,n){switch(e){case"name":return t;case"state":const e=i.entity_id.split(".")[0];return"timestamp"!==i.attributes.device_class&&!cc.includes(e)||!pt(i)||function(e){return e.state===ut}(i)?o:q`
          <ha-relative-time
            .hass=${n}
            .datetime=${i.state}
            capitalize
          ></ha-relative-time>
        `;case"last-changed":return q`
        <ha-relative-time
          .hass=${n}
          .datetime=${i.last_changed}
          capitalize
        ></ha-relative-time>
      `;case"last-updated":return q`
        <ha-relative-time
          .hass=${n}
          .datetime=${i.last_updated}
          capitalize
        ></ha-relative-time>
      `;case"none":return}}class hc extends lc{get _stateObj(){if(!this._config||!this.hass||!this._config.entity)return;const e=this._config.entity;return this.hass.states[e]}get hasControls(){return!1}setConfig(e){this._config={tap_action:{action:"more-info"},hold_action:{action:"more-info"},...e}}getCardSize(){let e=1;if(!this._config)return e;const t=Pt(this._config);return"vertical"===t.layout&&(e+=1),"horizontal"===t?.layout||!this.hasControls||"collapsible_controls"in this._config&&this._config?.collapsible_controls||(e+=1),e}getLayoutOptions(){if(!this._config)return{grid_columns:2,grid_rows:1};const e={grid_columns:2,grid_rows:0},t=Pt(this._config),o="collapsible_controls"in this._config&&Boolean(this._config.collapsible_controls),i="none"!==t.primary_info||"none"!==t.secondary_info,n="none"!==t.icon_type,r=this._stateObj&&ht(this._stateObj),a=this.hasControls&&(!o||r);return"vertical"===t.layout&&(n&&(e.grid_rows+=1),i&&(e.grid_rows+=1),a&&(e.grid_rows+=1)),"horizontal"===t.layout&&(e.grid_rows=1,e.grid_columns=4),"default"===t.layout&&((i||n)&&(e.grid_rows+=1),a&&(e.grid_rows+=1)),a||i||(e.grid_columns=1,e.grid_rows=1),e.grid_rows=Math.max(e.grid_rows,1),e}getGridOptions(){if(!this._config)return{columns:6,rows:1};const e={min_rows:1,min_columns:4,columns:6,rows:0},t=Pt(this._config),o="collapsible_controls"in this._config&&Boolean(this._config.collapsible_controls),i="none"!==t.primary_info||"none"!==t.secondary_info,n="none"!==t.icon_type,r=this._stateObj&&ht(this._stateObj),a=this.hasControls&&(!o||r);return"vertical"===t.layout&&(n&&(e.rows+=1),i&&(e.rows+=1),a&&(e.rows+=1),e.min_columns=2),"horizontal"===t.layout&&(e.rows=1,e.columns=12),"default"===t.layout&&((i||n)&&(e.rows+=1),a&&(e.rows+=1)),a||i||(e.columns=3,e.rows=1,e.min_columns=2),e.rows=Math.max(e.rows,1),e.min_rows=e.rows,e}renderPicture(e){return q`
      <mushroom-shape-avatar
        slot="icon"
        .picture_url=${this.hass.hassUrl(e)}
      ></mushroom-shape-avatar>
    `}renderNotFound(e){const t=Pt(e),o=at(this.hass),i=yr(this.hass);return q`
      <ha-card
        class=${Ee({"fill-container":t.fill_container})}
      >
        <mushroom-card .appearance=${t} ?rtl=${o}>
          <mushroom-state-item ?rtl=${o} .appearance=${t} disabled>
            <mushroom-shape-icon slot="icon" disabled>
              <ha-icon icon="mdi:help"></ha-icon>
            </mushroom-shape-icon>
            <mushroom-badge-icon
              slot="badge"
              class="not-found"
              icon="mdi:exclamation-thick"
            ></mushroom-badge-icon>
            <mushroom-state-info
              slot="info"
              .primary=${e.entity}
              .secondary=${i("card.not_found")}
            ></mushroom-state-info>
          </mushroom-state-item>
        </mushroom-card>
      </ha-card>
    `}renderIcon(e,t){const o=ht(e);return q`
      <mushroom-shape-icon slot="icon" .disabled=${!o}>
        <ha-state-icon
          .hass=${this.hass}
          .stateObj=${e}
          .icon=${t}
        ></ha-state-icon
      ></mushroom-shape-icon>
    `}renderBadge(e){return!pt(e)?q`
          <mushroom-badge-icon
            class="unavailable"
            slot="badge"
            icon="mdi:help"
          ></mushroom-badge-icon>
        `:J}renderStateInfo(e,t,o,i){const n=this.hass.formatEntityState(e),r=i??n,a=dc(t.primary_info,o,r,e,this.hass),s=dc(t.secondary_info,o,r,e,this.hass);return q`
      <mushroom-state-info
        slot="info"
        .primary=${a}
        .secondary=${s}
      ></mushroom-state-info>
    `}}n([ye()],hc.prototype,"_config",void 0),n([ve({reflect:!0,type:String})],hc.prototype,"layout",void 0);const pc=h`
  ha-card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: var(--layout-align);
    height: auto;
    display: flex;
    flex-direction: column;
  }
  ha-card.fill-container {
    height: 100%;
  }
  :host([layout="grid"]) ha-card {
    height: 100%;
  }
  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    padding: var(--control-spacing);
    padding-top: 0;
    box-sizing: border-box;
    gap: var(--control-spacing);
  }
  .actions::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    height: 0px;
  }
  .unavailable {
    --main-color: rgb(var(--rgb-warning));
  }
  .not-found {
    --main-color: rgb(var(--rgb-danger));
  }
  mushroom-state-item[disabled] {
    cursor: initial;
  }
`;var mc="https://github.com/piitaya/lovelace-mushroom";function _c(e){const t=window;t.customCards=t.customCards||[];const o=e.type.replace("-card","").replace("mushroom-","");t.customCards.push({...e,preview:!0,documentationURL:`${mc}/blob/main/docs/cards/${o}.md`})}const gc="better-thermostat-mini-climate-card",fc=`${gc}-editor`,bc=["climate"],vc=new Set(["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","disabled"]);function yc(e,t){return`color-mix(in srgb, ${e} ${100*t}%, transparent)`}const wc={cooling:"cool",defrosting:"heat",drying:"dry",fan:"fan_only",heating:"heat",idle:"off",off:"off",preheating:"heat"},kc=["auto","cool","dry","fan_only","heat","heat_cool","off"],xc=["eco","away","boost","sleep","comfort","activity","home"],zc=[...kc,...xc],Ec=e=>`var(--bt-color-${e.replace(/_/g,"-")})`;function Cc(e){const t=e.toLowerCase(),o=zc.includes(t)?t:"off";return Ec(o)}function Ac(e){return zc.includes(e.toLowerCase())}function Mc(e){return"idle"===e?Ec("idle"):Cc(wc[e]??"off")}function Sc(e){return"unavailable"===e.state?"var(--state-unavailable-color)":Cc(e.state)}function $c(e){const t={};if(!e)return t;for(const[i,n]of Object.entries(e))n&&zc.includes(i)&&(t[`--bt-color-${i.replace(/_/g,"-")}`]=(o=n,vc.has(o)?`var(--${o}-color)`:o));var o;return t}const Tc=h`
  :host {
    --bt-color-auto: rgb(var(--rgb-state-climate-auto));
    --bt-color-cool: rgb(var(--rgb-state-climate-cool));
    --bt-color-dry: rgb(var(--rgb-state-climate-dry));
    --bt-color-fan-only: rgb(var(--rgb-state-climate-fan-only));
    --bt-color-heat: rgb(var(--rgb-state-climate-heat));
    --bt-color-heat-cool: rgb(var(--rgb-state-climate-heat-cool));
    --bt-color-off: rgb(var(--rgb-state-climate-off));
    --bt-color-idle: rgb(var(--rgb-state-climate-idle));
    --bt-color-eco: rgb(var(--bt-state-eco));
    --bt-color-away: rgb(var(--bt-state-away));
    --bt-color-boost: rgb(var(--bt-state-boost));
    --bt-color-sleep: rgb(var(--bt-state-sleep));
    --bt-color-comfort: rgb(var(--bt-state-comfort));
    --bt-color-activity: rgb(var(--bt-state-activity));
    --bt-color-home: rgb(var(--bt-state-home));
    --bt-color-grey: rgb(var(--rgb-grey));
    --bt-color-summer: #ffb300;
    --bt-color-humidity: #6fa3d6;
    --bt-badge-background: #202020;
  }
`,Pc={none:"mdi:auto-mode",auto:"mdi:thermostat-auto",cool:"mdi:snowflake",dry:"mdi:water-percent",fan_only:"mdi:fan",heat:"mdi:fire",heat_cool:"mdi:sun-snowflake-variant",off:"mdi:power",eco:"mdi:leaf",away:"mdi:account-arrow-right",boost:"mdi:rocket-launch",sleep:"mdi:bed",comfort:"mdi:sofa",activity:"mdi:motion-sensor",home:"mdi:home"},jc={cooling:"mdi:snowflake",drying:"mdi:water-percent",heating:"mdi:fire",idle:"mdi:clock-outline",off:"mdi:power"};function Oc(e){return Pc[e]??"mdi:thermostat"}function Ic(e,t){return t||(Pc[e.toLowerCase()]??"mdi:tune-variant")}let Dc=class extends me{constructor(){super(...arguments),this.fill=!1,this.disableEco=!1}callService(e){e.stopPropagation();const t=e.currentTarget.mode;this.hass.callService("climate","set_hvac_mode",{entity_id:this.entity.entity_id,hvac_mode:t})}toggleEco(e){e.stopPropagation();const t=this.entity.attributes.preset_mode,o=this.entity.attributes.preset_modes?.includes("eco"),i="eco"===t||!0===this.entity.attributes.eco_mode;if(o){const e=i?"none":"eco";this.hass.callService("climate","set_preset_mode",{entity_id:this.entity.entity_id,preset_mode:e})}else this.hass.callService("better_thermostat","set_eco_mode",{entity_id:this.entity.entity_id,enable:!i})}renderEcoButton(){const e={};return!0===this.entity.attributes.eco_mode&&(e["--icon-color"]="var(--bt-color-eco)",e["--bg-color"]=yc("var(--bt-color-eco)",.2)),q`
      <mushroom-button
        style=${Me(e)}
        .disabled=${!pt(this.entity)}
        @click=${this.toggleEco}
      >
        <ha-icon icon="mdi:leaf"></ha-icon>
      </mushroom-button>
    `}render(){const e=at(this.hass),t=(this.entity.attributes.hvac_modes??[]).filter((e=>(this.modes??[]).includes(e))).sort(lt),o=((this.entity.attributes.preset_modes||[]).includes("eco")||!0===this.entity.attributes.eco_mode)&&!this.disableEco,i=null!=this.feature&&this.feature!==J?this.feature:o?this.renderEcoButton():void 0;return q`
      <mushroom-button-group .fill=${this.fill} ?rtl=${e}>
        ${t.map((e=>"off"===e&&void 0!==i?q`${i}${this.renderModeButton(e)}`:this.renderModeButton(e)))}
        ${void 0===i||t.includes("off")?J:i}
      </mushroom-button-group>
    `}renderModeButton(e){const t={},o="off"===e?"var(--bt-color-grey)":Cc(e);return e===this.entity.state&&(t["--icon-color"]=o,t["--bg-color"]=yc(o,.2)),q`
      <mushroom-button
        style=${Me(t)}
        .mode=${e}
        .disabled=${!pt(this.entity)}
        @click=${this.callService}
      >
        <ha-icon .icon=${Oc(e)}></ha-icon>
      </mushroom-button>
    `}async firstUpdated(e){super.firstUpdated(e),await Promise.all([$t("mushroom-button",(()=>Promise.resolve().then((function(){return Ep})))),$t("mushroom-button-group",(()=>Promise.resolve().then((function(){return Ap}))))]),this.requestUpdate()}};n([ve({attribute:!1})],Dc.prototype,"hass",void 0),n([ve({attribute:!1})],Dc.prototype,"entity",void 0),n([ve({attribute:!1})],Dc.prototype,"modes",void 0),n([ve()],Dc.prototype,"fill",void 0),n([ve({type:Boolean,attribute:"disable-eco"})],Dc.prototype,"disableEco",void 0),n([ve({attribute:!1})],Dc.prototype,"feature",void 0),Dc=n([ge("mushroom-climate-hvac-modes-control")],Dc);const Hc="unavailable",Nc="unknown",Bc=1,Lc=2,Rc=16;function Vc(e,t,o){if(o){const t=e.states[o];return t?.attributes?.options??[]}return(t.attributes.preset_modes??[]).filter((e=>"none"!==e))}function Uc(e,t){if(!t?.length)return e;const o=new Map(t.map(((e,t)=>[e,t])));return[...e].sort(((e,i)=>(o.get(e)??t.length)-(o.get(i)??t.length)))}function Fc(e,t,o){return Uc(Vc(e,t,o.preset_entity).filter((e=>!o.preset_options?.[e]?.hidden)),o.preset_order)}function Gc(e,t,o){if(o){const t=e.states[o]?.state;return null==t||t===Hc||t===Nc?void 0:t}const i=t.attributes.preset_mode;return null!=i&&"none"!==i?i:void 0}function Kc(e,t,o,i){if(i){const t=e.states[i];return t&&e.formatEntityState(t,o)||o}return e.formatEntityAttributeValue(t,"preset_mode",o)||o}function Zc(e,t,o,i){return t.attributes.hvac_modes?.includes(o)?(e.callService("climate","set_hvac_mode",{entity_id:t.entity_id,hvac_mode:o}),"hvac"):i?!!Vc(e,t,i).includes(o)&&(e.callService(i.split(".")[0],"select_option",{entity_id:i,option:o}),"preset"):!!t.attributes.preset_modes?.includes(o)&&(e.callService("climate","set_preset_mode",{entity_id:t.entity_id,preset_mode:o===t.attributes.preset_mode?"none":o}),"preset")}let Wc=class extends me{constructor(){super(...arguments),this.fill=!1}get _stepSize(){return this.entity.attributes.target_temp_step?this.entity.attributes.target_temp_step:"°F"===this.hass.config.unit_system.temperature?1:.5}onValueChange(e){const t=e.detail.value;this.hass.callService("climate","set_temperature",{entity_id:this.entity.entity_id,temperature:t})}onLowValueChange(e){const t=e.detail.value;this.hass.callService("climate","set_temperature",{entity_id:this.entity.entity_id,target_temp_low:t,target_temp_high:this.entity.attributes.target_temp_high})}onHighValueChange(e){const t=e.detail.value;this.hass.callService("climate","set_temperature",{entity_id:this.entity.entity_id,target_temp_low:this.entity.attributes.target_temp_low,target_temp_high:t})}render(){const e=at(this.hass),t=pt(this.entity),o=this.entity.attributes.min_temp??0,i=this.entity.attributes.max_temp??100,n=$e(this.entity,Bc)&&null!=this.entity.attributes.temperature,r=$e(this.entity,Lc)&&null!=this.entity.attributes.target_temp_low&&null!=this.entity.attributes.target_temp_high,a=this.entity.attributes.temperature??o,s=this.entity.attributes.target_temp_low??o,l=this.entity.attributes.target_temp_high??i,c=1===this._stepSize?{maximumFractionDigits:0}:{minimumFractionDigits:1,maximumFractionDigits:1},u=e=>({"--bg-color":yc(`var(--bt-color-${e})`,.05),"--icon-color":`var(--bt-color-${e})`,"--text-color":`var(--bt-color-${e})`});return q`
      <mushroom-button-group .fill=${this.fill} ?rtl=${e}>
        ${n?q`
              <mushroom-input-number
                .locale=${this.hass.locale}
                .value=${a}
                .step=${this._stepSize}
                .min=${o}
                .max=${i}
                .disabled=${!t}
                .formatOptions=${c}
                @change=${this.onValueChange}
              ></mushroom-input-number>
            `:J}
        ${r?q`
              <mushroom-input-number
                style=${Me(u("heat"))}
                .locale=${this.hass.locale}
                .value=${s}
                .step=${this._stepSize}
                .min=${o}
                .max=${i}
                .disabled=${!t}
                .formatOptions=${c}
                @change=${this.onLowValueChange}
              ></mushroom-input-number
              ><mushroom-input-number
                style=${Me(u("cool"))}
                .locale=${this.hass.locale}
                .value=${l}
                .step=${this._stepSize}
                .min=${o}
                .max=${i}
                .disabled=${!t}
                .formatOptions=${c}
                @change=${this.onHighValueChange}
              ></mushroom-input-number>
            `:J}
      </mushroom-button-group>
    `}async firstUpdated(e){super.firstUpdated(e),await Promise.all([$t("mushroom-button",(()=>Promise.resolve().then((function(){return Ep})))),$t("mushroom-button-group",(()=>Promise.resolve().then((function(){return Ap})))),$t("mushroom-input-number",(()=>Promise.resolve().then((function(){return Sp}))))])}};function qc(e){return void 0!==e?.attributes?.call_for_heat}function Xc(e){const t=Object.keys(e.states).filter((e=>"climate"===e.split(".")[0]));return t.find((t=>qc(e.states[t])))??t[0]}n([ve({attribute:!1})],Wc.prototype,"hass",void 0),n([ve({attribute:!1})],Wc.prototype,"entity",void 0),n([ve()],Wc.prototype,"fill",void 0),Wc=n([ge("mushroom-climate-temperature-control")],Wc);const Yc=["on","open","true"];function Jc(e,t,o){if(qc(t)){const e=t.attributes?.window_open;return!0===e||"string"==typeof e&&Yc.includes(e.toLowerCase())}const i=o?.window_sensor;if(!i)return!1;const n=e?.states?.[i];return!!n&&Yc.includes(String(n.state).toLowerCase())}function Qc(e,t,o){if(e&&!o?.disable_humidity){if(null!=t?.attributes?.current_humidity){const o=Number(t.attributes.current_humidity);return e.formatEntityAttributeValue(t,"current_humidity",Number.isFinite(o)?Math.round(o):void 0)}if(!qc(t)&&o?.humidity_sensor){const t=e.states?.[o.humidity_sensor];if(t&&!isNaN(Number(t.state)))return e.formatEntityState(t)}}}const eu=gt((function(e,t){if(void 0!==e)try{const o=Object.entries(JSON.parse(e));return o.map((([e,o])=>({name:e,battery:"on"===o.battery?t-1:"off"===o.battery?100:parseFloat(o.battery)}))).find((e=>e.battery<t))}catch(e){return}})),tu=gt((function(e){if(void 0!==e)try{const t=JSON.parse(e);if(!Array.isArray(t)||0===t.length)return;const o=t[0];return"string"==typeof o?o:"object"==typeof o&&null!==o?o.entity_id||o.entity||o.name:void 0}catch(e){return}}));function ou(e,t){return t?.debug_battery?{name:"Debug Battery",battery:5}:t?.disable_battery_warning?void 0:eu(e.attributes?.batteries,t?.low_battery_threshold??10)}function iu(e,t){return t?.debug_connection?"Debug Connection":t?.disable_connection_lost_warning?void 0:tu(e.attributes?.errors)}function nu(e,t){if(!t?.disable_connection_lost_warning){if(t?.connectivity_entity){const o=e.states[t.connectivity_entity]?.state;if(void 0===o||"off"===o||o===Hc||o===Nc)return t.connectivity_entity}if(t?.preset_entity){const o=e.states[t.preset_entity]?.state;if(o===Hc||o===Nc)return t.preset_entity}}}function ru(e,t){return!!t?.debug_degraded||!t?.disable_degraded_warning&&!0===e.attributes?.degraded_mode}var au={version:"version",current:"current",current_humidity:"Current humidity",current_temperature:"Current temperature",target_temperature:"Target temperature"},su={card:{climate:{disable_humidity:"Turn off the humidity display",disable_eco:"Turn off the eco button",show_presets:"Show the presets button",show_all_presets:"Show all presets as buttons",disable_menu:"Disable menu",disable_battery_warning:"Turn off the battery warning",show_plus_minus:"Show the plus/minus buttons",show_mode_buttons:"Show mode buttons",show_temperature_control:"Show temperature control",collapsible_controls:"Collapsible controls",show_current_as_primary:"Show current temperature as primary",show_secondary:"Show secondary information",prevent_interaction_on_scroll:"Prevent interaction on scroll",disable_connection_lost_warning:"Turn off the connection lost warning",disable_degraded_warning:"Turn off the degraded mode warning",debug_battery:"Debug: Show battery warning",debug_connection:"Debug: Show connection lost warning",debug_degraded:"Debug: Show degraded mode warning",low_battery_threshold:"Low battery warning threshold (%)",section_display:"Display",section_colors:"Colors",section_colors_helper:"Override the colors used for HVAC modes and presets. Pick a theme color, or clear a picker to restore the default. While a preset is active it drives the background color by default — set 'Background color follows' to 'HVAC mode' to keep the HVAC color instead.",color_source:"Background color follows",color_source_preset:"Active preset (default)",color_source_hvac:"HVAC mode",section_interaction:"Interaction",section_warnings:"Warnings",section_sensors:"External sensors",section_presets:"Presets",preset_show:"Show {preset}",window_sensor:"Window sensor",humidity_sensor:"Humidity sensor",preset_entity:"Preset select entity",connectivity_entity:"Connectivity sensor (off = device unreachable)",not_bt_info:"The selected entity is not a Better Thermostat entity. The card still works with it, but to show the window open and humidity states you need to select the matching sensors in the 'External sensors' section."}}},lu={presets:"Presets",window_open:"Window open",eco:"Eco",summer:"Summer",cooling:"Cooling",heating:"Heating",cooling_off:"Cooling off",heating_off:"Heating off",degraded_mode:"Degraded mode",connection_lost:"Connection lost: {name}",low_battery:"Low battery: {name}",window_closed:"Window closed"},cu={common:au,editor:su,extra_states:lu},uu=Object.freeze({__proto__:null,common:au,default:cu,editor:su,extra_states:lu}),du={version:"Version",current:"Aktuell",current_humidity:"Aktuelle Luftfeuchtigkeit",current_temperature:"Aktuelle Temperatur",target_temperature:"Zieltemperatur"},hu={card:{climate:{disable_eco:"Eco-Anzeige deaktivieren",disable_presets:"Presets-Button deaktivieren",disable_menu:"Menü deaktivieren",disable_battery_warning:"Batterie-Warnung deaktivieren",disable_buttons:"Plus/Minus Buttons deaktivieren",disable_all_buttons:"Alle Buttons deaktivieren",show_current_as_primary:"Aktuelle Temperatur als primär anzeigen",show_secondary:"Sekundäre Informationen anzeigen",prevent_interaction_on_scroll:"Interaktion beim Scrollen verhindern",disable_humidity:"Deaktiviere die Anzeige der Luftfeuchtigkeit",show_temperature_control:"Temperaturregelung anzeigen",collapsible_controls:"Einklappbare Steuerung",disable_connection_lost_warning:"Verbindungsverlust-Warnung deaktivieren",disable_degraded_warning:"Warnung für eingeschränkten Modus deaktivieren",debug_battery:"Debug: Batterie-Warnung anzeigen",debug_connection:"Debug: Verbindungsverlust-Warnung anzeigen",debug_degraded:"Debug: Warnung für eingeschränkten Modus anzeigen",low_battery_threshold:"Schwellenwert Batteriewarnung (%)",section_display:"Anzeige",section_interaction:"Interaktion",section_features:"Funktionen",section_warnings:"Warnungen",section_sensors:"Externe Sensoren",window_sensor:"Fenstersensor",humidity_sensor:"Luftfeuchtigkeitssensor",not_bt_info:"Die ausgewählte Entität ist keine Better Thermostat Entität. Die Karte funktioniert trotzdem, aber für die Fenster-offen- und Luftfeuchtigkeitsanzeige müssen die passenden Sensoren im Abschnitt 'Externe Sensoren' ausgewählt werden."}}},pu={window_open:"Fenster offen",eco:"Eco",summer:"Sommer",cooling:"Kühlen",heating:"Heizen",cooling_off:"Kühlung aus",heating_off:"Heizung aus",degraded_mode:"Eingeschränkter Modus",connection_lost:"Verbindung verloren: {name}",low_battery:"Batterie schwach: {name}",window_closed:"Fenster geschlossen"},mu={common:du,editor:hu,extra_states:pu},_u=Object.freeze({__proto__:null,common:du,default:mu,editor:hu,extra_states:pu}),gu={version:"Version",current:"Actuel",current_humidity:"Humidité actuelle",current_temperature:"Température actuelle",target_temperature:"Température cible"},fu={card:{climate:{disable_eco:"Désactiver mode Éco",disable_menu:"Désactiver le menu",disable_battery_warning:"Désactiver l'avertissement de batterie",disable_buttons:"Désactiver les boutons plus/moins",show_current_as_primary:"Afficher la température actuelle comme principale",show_secondary:"Afficher les informations secondaires",prevent_interaction_on_scroll:"Empêcher l'interaction lors du défilement",disable_humidity:"Désactiver l'affichage de l'humidité",show_temperature_control:"Afficher le contrôle de température",collapsible_controls:"Contrôles pliables",disable_connection_lost_warning:"Désactiver avertissement perte de connexion",disable_degraded_warning:"Désactiver avertissement mode dégradé",low_battery_threshold:"Seuil avertissement batterie faible (%)",section_display:"Affichage",section_interaction:"Interaction",section_features:"Fonctionnalités",section_warnings:"Avertissements"}}},bu={window_open:"Fenêtre ouverte",eco:"Éco",summer:"Été",cooling:"Refroidissement",heating:"Chauffage",cooling_off:"Refroidissement éteint",heating_off:"Chauffage éteint",window_closed:"Fenêtre fermée"},vu={common:gu,editor:fu,extra_states:bu},yu=Object.freeze({__proto__:null,common:gu,default:vu,editor:fu,extra_states:bu}),wu={version:"версия",current:"текущая версия",current_humidity:"Текущая влажность",current_temperature:"Текущая температура",target_temperature:"Целевая температура"},ku={card:{climate:{disable_eco:"Отключить режим eco",disable_menu:"Отключить меню",disable_battery_warning:"Отключить предупреждение о разряде батареи",disable_buttons:"Отключить кнопку плюс/минус",show_current_as_primary:"Показывать текущую температуру как основную",show_secondary:"Показывать вторичную информацию",prevent_interaction_on_scroll:"Предотвратить взаимодействие при прокрутке",disable_humidity:"Отключить отображение влажности",show_temperature_control:"Показать управление температурой",collapsible_controls:"Сворачиваемые элементы управления",disable_connection_lost_warning:"Отключить предупреждение о потере соединения",disable_degraded_warning:"Отключить предупреждение о деградированном режиме",low_battery_threshold:"Порог предупреждения о низком заряде (%)",section_display:"Отображение",section_interaction:"Взаимодействие",section_features:"Функции",section_warnings:"Предупреждения"}}},xu={window_open:"Окно открыто",eco:"Эко",summer:"Летний режим",cooling:"Охлаждение",heating:"Обогрев",cooling_off:"Охлаждение выключено",heating_off:"Обогрев выключен",window_closed:"Окно закрыто"},zu={common:wu,editor:ku,extra_states:xu},Eu=Object.freeze({__proto__:null,common:wu,default:zu,editor:ku,extra_states:xu}),Cu={version:"Wersja",current:"Aktualna",current_humidity:"Aktualna wilgotność",current_temperature:"Aktualna temperatura",target_temperature:"Temperatura docelowa"},Au={card:{climate:{disable_eco:"Wyłącz przycisk trybu eko",disable_menu:"Wyłącz menu",disable_battery_warning:"Wyłącz ostrzeżenie o baterii",disable_buttons:"Wyłącz przyciski plus/minus",show_current_as_primary:"Pokaż aktualną temperaturę jako główną",show_secondary:"Pokaż dodatkowe informacje",prevent_interaction_on_scroll:"Zapobiegaj interakcji podczas przewijania",disable_humidity:"Wyłącz wyświetlanie wilgotności",show_temperature_control:"Pokaż suwak temperatury",collapsible_controls:"Rozwijane menu ustawień",disable_connection_lost_warning:"Wyłącz ostrzeżenie o utracie połączenia",disable_degraded_warning:"Wyłącz ostrzeżenie o trybie ograniczonym",low_battery_threshold:"Próg ostrzeżenia o niskim stanie baterii (%)",section_display:"Wyświetlanie",section_interaction:"Interakcja",section_features:"Funkcje",section_warnings:"Ostrzeżenia",disable_presets:"Wyłącz przyciski ustawień predefiniowanych",disable_all_buttons:"Wyłącz wszystkie przyciski",debug_battery:"Debug: Pokaż ostrzeżenie baterii",debug_connection:"Debug: Pokaż ostrzeżenie o utracie połączenia",debug_degraded:"Debug: Pokaż ostrzeżenie o trybie ograniczonym",section_sensors:"Czujniki zewnętrzne",window_sensor:"Czujnik otwarcia okna",humidity_sensor:"Czujnik wilgotności",not_bt_info:"Wybrana encja nie jest encją Better Thermostat. Karta nadal z nią współpracuje, ale aby wyświetlić stany otwarcia okna i wilgotności, należy wybrać pasujące czujniki w sekcji „Czujniki zewnętrzne”."}}},Mu={window_open:"Otwarte okno",eco:"Tryb eko",summer:"Lato",cooling:"Chłodzenie",heating:"Grzanie",cooling_off:"Chłodzenie wyłączone",heating_off:"Grzanie wyłączone",window_closed:"Okno zamknięte",degraded_mode:"Tryb ograniczony",connection_lost:"Połączenie utracone: {name}",low_battery:"Niski poziom baterii: {name}"},Su={common:Cu,editor:Au,extra_states:Mu},$u=Object.freeze({__proto__:null,common:Cu,default:Su,editor:Au,extra_states:Mu}),Tu={version:"verzia",current:"aktuálny",current_humidity:"Aktuálna vlhkosť",current_temperature:"Aktuálna teplota",target_temperature:"Cieľová teplota"},Pu={card:{climate:{disable_eco:"Zakázať eco",disable_menu:"Zakázať menu",disable_battery_warning:"Zakázať upozornenie na batériu",disable_buttons:"Zakázať plus/mínus tlačidlá",show_current_as_primary:"Zobraziť aktuálnu teplotu ako hlavnú",show_secondary:"Zobraziť sekundárne informácie",prevent_interaction_on_scroll:"Zabrániť interakcii pri posúvaní",disable_humidity:"Vypnúť zobrazenie vlhkosti",show_temperature_control:"Zobraziť ovládanie teploty",collapsible_controls:"Skladateľné ovládanie",disable_connection_lost_warning:"Vypnúť upozornenie na stratu spojenia",disable_degraded_warning:"Vypnúť upozornenie na zhoršený režim",low_battery_threshold:"Prah varovania o nízkej batérii (%)",section_display:"Zobrazenie",section_interaction:"Interakcia",section_features:"Funkcie",section_warnings:"Upozornenia"}}},ju={window_open:"Okno otvorené",eco:"Eco",summer:"Leto",cooling:"Chladenie",heating:"Kúrenie",cooling_off:"Chladenie vypnuté",heating_off:"Kúrenie vypnuté",window_closed:"Okno zatvorené"},Ou={common:Tu,editor:Pu,extra_states:ju},Iu={version:"verzija",current:"trenutno",current_humidity:"Trenutna vlažnost",current_temperature:"Trenutna temperatura",target_temperature:"Ciljana temperatura"},Du={card:{climate:{disable_eco:"Isključi prikaz eco gumba",disable_menu:"Isključi prikaz izbornika",disable_battery_warning:"Isključi upozorenje baterije",disable_buttons:"Isključi prikaz plus/minus gumbi",show_current_as_primary:"Prikaži trenutnu temperaturu kao primarnu",show_secondary:"Prikaži sekundarne informacije",prevent_interaction_on_scroll:"Spriječi interakciju pri pomicanju",disable_humidity:"Isključi prikaz vlažnosti",show_temperature_control:"Prikaži kontrolu temperature",collapsible_controls:"Sklopive kontrole",disable_connection_lost_warning:"Isključi upozorenje o gubitku veze",disable_degraded_warning:"Isključi upozorenje o degradiranom načinu",low_battery_threshold:"Prag upozorenja za nisku bateriju (%)",section_display:"Prikaz",section_interaction:"Interakcija",section_features:"Značajke",section_warnings:"Upozorenja"}}},Hu={window_open:"Prozor otvoren",window_closed:"Prozor zatvoren",eco:"Eco",summer:"Ljeto",cooling:"Hlađenje",heating:"Grijanje",cooling_off:"Hlađenje isključeno",heating_off:"Grijanje isključeno"},Nu={common:Iu,editor:Du,extra_states:Hu},Bu={version:"Verzió",current:"Aktuális",current_humidity:"Jelenlegi páratartalom",current_temperature:"Jelenlegi hőmérséklet",target_temperature:"Célhőmérséklet"},Lu={card:{climate:{disable_eco:"Eco kikapcsolás",disable_menu:"Menü letiltása",disable_battery_warning:"Akkumulátor figyelmeztetés letiltása",disable_buttons:"Plusz/mínusz gombok letiltása",show_current_as_primary:"Jelenlegi hőmérséklet megjelenítése elsődlegesként",show_secondary:"Másodlagos információk megjelenítése",prevent_interaction_on_scroll:"Interakció megakadályozása görgetéskor",disable_humidity:"Páratartalom megjelenítés kikapcsolása",show_temperature_control:"Hőmérséklet-szabályzó megjelenítése",collapsible_controls:"Összecsukható vezérlők",disable_connection_lost_warning:"Kapcsolatvesztés figyelmeztetés kikapcsolása",disable_degraded_warning:"Korlátozott mód figyelmeztetés kikapcsolása",low_battery_threshold:"Alacsony akkumulátor figyelmeztetési küszöb (%)",section_display:"Megjelenítés",section_interaction:"Interakció",section_features:"Funkciók",section_warnings:"Figyelmeztetések"}}},Ru={window_open:"Ablak nyitva",eco:"Eco",summer:"Nyár",cooling:"Hűtés",heating:"Fűtés",cooling_off:"Hűtés kikapcsolva",heating_off:"Fűtés kikapcsolva",window_closed:"Ablak zárva"},Vu={common:Bu,editor:Lu,extra_states:Ru},Uu={version:"Version",current:"Nuværende",current_humidity:"Nuværende fugtighed",current_temperature:"Nuværende temperatur",target_temperature:"Målt temperatur"},Fu={card:{climate:{disable_eco:"Deaktiver Eco indikator",disable_menu:"Deaktiver menu",disable_battery_warning:"Deaktiver batteriadvarsel",disable_buttons:"Deaktiver plus/minus knapper",show_current_as_primary:"Vis nuværende temperatur som primær",show_secondary:"Vis sekundær information",prevent_interaction_on_scroll:"Forhindre interaktion ved scrolling",disable_humidity:"Deaktiver fugtighedsvisning",show_temperature_control:"Vis temperaturkontrol",collapsible_controls:"Sammenklappelige kontroller",disable_connection_lost_warning:"Deaktiver advarsel om mistet forbindelse",disable_degraded_warning:"Deaktiver advarsel om forringet tilstand",low_battery_threshold:"Grænse for advarsel om lavt batteri (%)",section_display:"Visning",section_interaction:"Interaktion",section_features:"Funktioner",section_warnings:"Advarsler"}}},Gu={window_open:"Vindue åbent",eco:"Eco",summer:"Sommer",cooling:"Køling",heating:"Opvarmning",cooling_off:"Køling slukket",heating_off:"Opvarmning slukket",window_closed:"Vindue lukket"},Ku={common:Uu,editor:Fu,extra_states:Gu},Zu={version:"Versión",current:"Actual",current_humidity:"Humedad actual",current_temperature:"Temperatura actual",target_temperature:"Temperatura objetivo"},Wu={card:{climate:{disable_eco:"Deshabilitar eco",disable_menu:"Deshabilitar menú",disable_battery_warning:"Deshabilitar alerta de batería",disable_buttons:"Deshabilitar botones más/menos",show_current_as_primary:"Mostrar temperatura actual como principal",show_secondary:"Mostrar información secundaria",prevent_interaction_on_scroll:"Evitar interacción al desplazarse",disable_humidity:"Desactivar la visualización de humedad",show_temperature_control:"Mostrar control de temperatura",collapsible_controls:"Controles plegables",disable_connection_lost_warning:"Desactivar aviso de pérdida de conexión",disable_degraded_warning:"Desactivar aviso de modo degradado",low_battery_threshold:"Umbral de aviso de batería baja (%)",section_display:"Pantalla",section_interaction:"Interacción",section_features:"Funciones",section_warnings:"Advertencias"}}},qu={window_open:"Ventana abierta",eco:"Eco",summer:"Verano",cooling:"Enfriamiento",heating:"Calefacción",cooling_off:"Enfriamiento apagado",heating_off:"Calefacción apagada",window_closed:"Ventana cerrada"},Xu={common:Zu,editor:Wu,extra_states:qu},Yu={version:"versiyon",current:"şimdiki",current_humidity:"Mevcut Nem",current_temperature:"Mevcut Sıcaklık",target_temperature:"Hedef Sıcaklık"},Ju={card:{climate:{disable_eco:"Eco'yu devre dışı bırak",disable_menu:"Menüyü devre dışı bırak",disable_battery_warning:"Pil uyarısını devre dışı bırak",disable_buttons:"Artı/eksi düğmelerini devre dışı bırak",show_current_as_primary:"Mevcut sıcaklığı birincil olarak göster",show_secondary:"İkincil bilgileri göster",prevent_interaction_on_scroll:"Kaydırma sırasında etkileşimi önle",disable_humidity:"Nem gösterimini kapat",show_temperature_control:"Sıcaklık kontrolünü göster",collapsible_controls:"Daraltılabilir kontroller",disable_connection_lost_warning:"Bağlantı kesildi uyarısını kapat",disable_degraded_warning:"Düşük mod uyarısını kapat",low_battery_threshold:"Düşük pil uyarı eşiği (%)",section_display:"Görünüm",section_interaction:"Etkileşim",section_features:"Özellikler",section_warnings:"Uyarılar"}}},Qu={window_open:"Pencere açık",eco:"Eco",summer:"Yaz",cooling:"Soğutma",heating:"Isıtma",cooling_off:"Soğutma kapalı",heating_off:"Isıtma kapalı",window_closed:"Pencere kapalı"},ed={common:Yu,editor:Ju,extra_states:Qu},td={version:"versione",current:"Corrente",current_humidity:"Umidità attuale",current_temperature:"Temperatura attuale",target_temperature:"Temperatura obiettivo"},od={card:{climate:{disable_eco:"Disabilita tasto eco",disable_menu:"Disabilita menu",disable_battery_warning:"Disabilita avviso batteria",disable_buttons:"Disabilita pulsanti più/meno",show_current_as_primary:"Mostra temperatura attuale come principale",show_secondary:"Mostra informazioni secondarie",prevent_interaction_on_scroll:"Prevenire interazione durante lo scorrimento",disable_humidity:"Disattiva visualizzazione umidità",show_temperature_control:"Mostra controllo temperatura",collapsible_controls:"Controlli comprimibili",disable_connection_lost_warning:"Disabilita avviso perdita connessione",disable_degraded_warning:"Disabilita avviso modalità degradata",low_battery_threshold:"Soglia avviso batteria scarica (%)",section_display:"Schermo",section_interaction:"Interazione",section_features:"Funzionalità",section_warnings:"Avvisi"}}},id={window_open:"Finestra aperta",eco:"Eco",summer:"Estate",cooling:"Raffreddamento",heating:"Riscaldamento",cooling_off:"Raffreddamento spento",heating_off:"Riscaldamento spento",window_closed:"Finestra chiusa"},nd={common:td,editor:od,extra_states:id},rd={version:"Versão",current:"Atual",current_humidity:"Humidade atual",current_temperature:"Temperatura atual",target_temperature:"Temperatura alvo"},ad={card:{climate:{disable_eco:"Desactivar Eco",disable_menu:"Desativar menu",disable_battery_warning:"Desativar aviso de bateria",disable_buttons:"Desativar botões de mais/menos",show_current_as_primary:"Mostrar temperatura atual como principal",show_secondary:"Mostrar informações secundárias",prevent_interaction_on_scroll:"Prevenir interação ao rolar",disable_humidity:"Desativar exibição de humidade",show_temperature_control:"Mostrar controlo de temperatura",collapsible_controls:"Controlos recolhíveis",disable_connection_lost_warning:"Desativar aviso de perda de ligação",disable_degraded_warning:"Desativar aviso de modo degradado",low_battery_threshold:"Limiar de aviso de bateria fraca (%)",section_display:"Exibição",section_interaction:"Interação",section_features:"Funcionalidades",section_warnings:"Avisos"}}},sd={window_open:"Janela aberta",eco:"Eco",summer:"Verão",cooling:"Refrigeração",heating:"Aquecimento",cooling_off:"Refrigeração desligada",heating_off:"Aquecimento desligado",window_closed:"Janela fechada"},ld={common:rd,editor:ad,extra_states:sd},cd={version:"版本",current:"当前",current_humidity:"当前湿度",current_temperature:"当前温度",target_temperature:"目标温度"},ud={card:{climate:{disable_eco:"禁用节能显示",disable_menu:"禁用菜单",disable_battery_warning:"禁用电池警告",disable_buttons:"禁用加/减按钮",show_current_as_primary:"显示当前温度为主",show_secondary:"显示次要信息",prevent_interaction_on_scroll:"滚动时防止交互",disable_humidity:"关闭湿度显示",show_temperature_control:"显示温度控制",collapsible_controls:"可折叠控制",disable_connection_lost_warning:"关闭连接丢失警告",disable_degraded_warning:"关闭降级模式警告",low_battery_threshold:"低电量警告阈值 (%)",section_display:"显示",section_interaction:"交互",section_features:"功能",section_warnings:"警告"}}},dd={window_open:"窗口打开",eco:"节能",summer:"夏季",cooling:"冷却",heating:"加热",cooling_off:"冷却关闭",heating_off:"加热关闭",window_closed:"窗口关闭"},hd={common:cd,editor:ud,extra_states:dd},pd={version:"версія",current:"поточний",current_humidity:"Поточна вологість",current_temperature:"Поточна температура",target_temperature:"Цільова температура"},md={card:{climate:{disable_eco:"Прибрати еко",disable_menu:"Прибрати меню",disable_battery_warning:"Прибрати попередження про акумулятор",disable_buttons:"Прибрати кнопки плюс/мінус",show_current_as_primary:"Показувати поточну температуру як основну",show_secondary:"Показувати вторинну інформацію",prevent_interaction_on_scroll:"Запобігати взаємодії при прокручуванні",disable_humidity:"Вимкнути відображення вологості",show_temperature_control:"Показати контроль температури",collapsible_controls:"Згортані елементи керування",disable_connection_lost_warning:"Вимкнути попередження про втрату з'єднання",disable_degraded_warning:"Вимкнути попередження про деградований режим",low_battery_threshold:"Поріг попередження про низький заряд (%)",section_display:"Відображення",section_interaction:"Взаємодія",section_features:"Функції",section_warnings:"Попередження"}}},_d={window_open:"Вікно відкрите",eco:"Еко",summer:"Літо",cooling:"Охолодження",heating:"Опалення",cooling_off:"Охолодження вимкнено",heating_off:"Опалення вимкнено",window_closed:"Вікно закрите"},gd={common:pd,editor:md,extra_states:_d},fd={version:"Έκδοση",current:"Tρέχουσα",current_humidity:"Τρέχουσα υγρασία",current_temperature:"Τρέχουσα θερμοκρασία",target_temperature:"Στόχος θερμοκρασίας"},bd={card:{climate:{disable_eco:"Απενεργοποίηση ένδειξης Eco",disable_menu:"Απενεργοποίηση μενού",disable_battery_warning:"Απενεργοποίηση προειδοποίησης μπαταρίας",disable_buttons:"Απενεργοποίηση κουμπιών Plus/Minus",show_current_as_primary:"Εμφάνιση τρέχουσας θερμοκρασίας ως κύρια",show_secondary:"Εμφάνιση δευτερευουσών πληροφοριών",prevent_interaction_on_scroll:"Αποτροπή αλληλεπίδρασης κατά την κύλιση",disable_humidity:"Απενεργοποίηση εμφάνισης υγρασίας",show_temperature_control:"Εμφάνιση ελέγχου θερμοκρασίας",collapsible_controls:"Πτυσσόμενα στοιχεία ελέγχου",disable_connection_lost_warning:"Απενεργοποίηση προειδοποίησης απώλειας σύνδεσης",disable_degraded_warning:"Απενεργοποίηση προειδοποίησης υποβαθμισμένης λειτουργίας",low_battery_threshold:"Όριο προειδοποίησης χαμηλής μπαταρίας (%)",section_display:"Εμφάνιση",section_interaction:"Αλληλεπίδραση",section_features:"Χαρακτηριστικά",section_warnings:"Προειδοποιήσεις"}}},vd={window_open:"Παράθυρο ανοιχτό",eco:"Εξοικονόμηση",summer:"Καλοκαίρι",cooling:"Ψύξη",heating:"Θέρμανση",cooling_off:"Ψύξη απενεργοποιημένη",heating_off:"Θέρμανση απενεργοποιημένη",window_closed:"Παράθυρο κλειστό"},yd={common:fd,editor:bd,extra_states:vd},wd={version:"versie",current:"huidig",current_humidity:"Huidige luchtvochtigheid",current_temperature:"Huidige temperatuur",target_temperature:"Doeltemperatuur"},kd={card:{climate:{disable_eco:"Eco-weergave uitschakelen",disable_menu:"Menu uitschakelen",disable_battery_warning:"Batterijwaarschuwing uitschakelen",disable_buttons:"Plus/min-knoppen uitschakelen",show_current_as_primary:"Toon huidige temperatuur als primair",show_secondary:"Toon secundaire informatie",prevent_interaction_on_scroll:"Voorkom interactie tijdens scrollen",disable_humidity:"Vochtigheidsweergave uitschakelen",show_temperature_control:"Temperatuurregeling tonen",collapsible_controls:"Inklapbare bedieningselementen",disable_connection_lost_warning:"Waarschuwing verbinding verbroken uitschakelen",disable_degraded_warning:"Waarschuwing verminderde modus uitschakelen",low_battery_threshold:"Drempel batterijwaarschuwing (%)",section_display:"Weergave",section_interaction:"Interactie",section_features:"Functies",section_warnings:"Waarschuwingen"}}},xd={window_open:"Venster open",eco:"Eco",summer:"Zomer",cooling:"Koeling",heating:"Verwarming",cooling_off:"Koeling uit",heating_off:"Verwarming uit",window_closed:"Venster gesloten"},zd={common:wd,editor:kd,extra_states:xd},Ed={version:"versjon",current:"nåværende",current_humidity:"Nåværende luftfuktighet",current_temperature:"Nåværende temperatur",target_temperature:"Måltemperatur"},Cd={card:{climate:{disable_eco:"Deaktiver eco visning",disable_menu:"Deaktiver meny",disable_battery_warning:"Deaktiver batterivarsel",disable_buttons:"Deaktiver pluss/minus knapper",show_current_as_primary:"Vis nåværende temperatur som primær",show_secondary:"Vis sekundær informasjon",prevent_interaction_on_scroll:"Forhindre interaksjon ved rulling",disable_humidity:"Deaktiver fuktighetsvisning",show_temperature_control:"Vis temperaturkontroll",collapsible_controls:"Sammenleggbare kontroller",disable_connection_lost_warning:"Deaktiver advarsel om tapt tilkobling",disable_degraded_warning:"Deaktiver advarsel om degradert modus",low_battery_threshold:"Terskel for advarsel om lavt batteri (%)",section_display:"Visning",section_interaction:"Interaksjon",section_features:"Funksjoner",section_warnings:"Advarsler"}}},Ad={window_open:"Vindu åpent",eco:"Eco",summer:"Sommer",cooling:"Kjøling",heating:"Oppvarming",cooling_off:"Kjøling av",heating_off:"Oppvarming av",window_closed:"Vindu lukket"},Md={common:Ed,editor:Cd,extra_states:Ad},Sd={version:"Verze",current:"Aktuální",current_humidity:"Aktuální vlhkost",current_temperature:"Aktuální teplota",target_temperature:"Cílová teplota"},$d={card:{climate:{disable_eco:"Zakázat eco",disable_menu:"Zakázat menu",disable_battery_warning:"Zakázat upozornění baterie",disable_buttons:"Zakázat tlačítka plus/minus",show_current_as_primary:"Zobrazit aktuální teplotu jako hlavní",show_secondary:"Zobrazit sekundární informace",prevent_interaction_on_scroll:"Zabránit interakci při posouvání",disable_humidity:"Zakázat zobrazení vlhkosti",show_temperature_control:"Zobrazit ovládání teploty",collapsible_controls:"Sbalitelné ovládání",disable_connection_lost_warning:"Vypnout upozornění na ztrátu spojení",disable_degraded_warning:"Vypnout upozornění na zhoršený režim",low_battery_threshold:"Práh upozornění na nízkou baterii (%)",section_display:"Zobrazení",section_interaction:"Interakce",section_features:"Funkce",section_warnings:"Upozornění"}}},Td={window_open:"Okno otevřeno",eco:"Eco",summer:"Léto",cooling:"Chlazení",heating:"Topení",cooling_off:"Chlazení vypnuto",heating_off:"Topení vypnuto",window_closed:"Okno zavřeno"},Pd={common:Sd,editor:$d,extra_states:Td},jd={version:"različica",current:"trenutno",current_humidity:"Trenutna vlažnost",current_temperature:"Trenutna temperatura",target_temperature:"Ciljna temperatura"},Od={card:{climate:{disable_eco:"Onemogoči prikaz eco",disable_menu:"Onemogoči meni",disable_battery_warning:"Onemogoči opozorilo o bateriji",disable_buttons:"Onemogoči gumbe plus/minus",show_current_as_primary:"Prikaži trenutno temperaturo kot primarno",show_secondary:"Prikaži sekundarne informacije",prevent_interaction_on_scroll:"Prepreči interakcijo med drsenjem",disable_humidity:"Onemogoči prikaz vlažnosti",show_temperature_control:"Prikaži nadzor temperature",collapsible_controls:"Zložljivi kontrolniki",disable_connection_lost_warning:"Onemogoči opozorilo o izgubi povezave",disable_degraded_warning:"Onemogoči opozorilo o zmanjšanem načinu",low_battery_threshold:"Prag opozorila za nizko baterijo (%)",section_display:"Prikaz",section_interaction:"Interakcija",section_features:"Funkcije",section_warnings:"Opozorila"}}},Id={window_open:"Okno odprto",eco:"Eko",summer:"Poletje",cooling:"Hlajenje",heating:"Ogrevanje",cooling_off:"Hlajenje izklopljeno",heating_off:"Ogrevanje izklopljeno",window_closed:"Okno zaprto"},Dd={common:jd,editor:Od,extra_states:Id},Hd={version:"version",current:"Nuvarande",current_humidity:"Nuvarande luftfuktighet",current_temperature:"Nuvarande temperatur",target_temperature:"Måltemperatur"},Nd={card:{climate:{disable_eco:"Inaktivera eco visning",disable_menu:"Inaktivera meny",disable_battery_warning:"Inaktivera batterivarning",disable_buttons:"Inaktivera plus/minus knappar",show_current_as_primary:"Visa aktuell temperatur som primär",show_secondary:"Visa sekundär information",prevent_interaction_on_scroll:"Förhindra interaktion vid rullning",disable_humidity:"Inaktivera fuktighetsvisning",show_temperature_control:"Visa temperaturkontroll",collapsible_controls:"Ihopfällbara kontroller",disable_connection_lost_warning:"Inaktivera varning för tappad anslutning",disable_degraded_warning:"Inaktivera varning för försämrat läge",low_battery_threshold:"Tröskelvärde för varning om låg batterinivå (%)",section_display:"Visning",section_interaction:"Interaktion",section_features:"Funktioner",section_warnings:"Varningar"}}},Bd={window_open:"Fönster öppet",eco:"Eco",summer:"Sommar",cooling:"Kylning",heating:"Uppvärmning",cooling_off:"Kylning av",heating_off:"Uppvärmning av",window_closed:"Fönster stängt"},Ld={common:Hd,editor:Nd,extra_states:Bd},Rd={version:"Версия",current:"Текущ",current_humidity:"Текуща влажност",current_temperature:"Текуща температура",target_temperature:"Целева температура"},Vd={card:{climate:{disable_eco:"Деактивиране на показване на еко",disable_menu:"Деактивиране на менюто",disable_battery_warning:"Деактивиране на предупреждение за батерията",disable_buttons:"Деактивиране на бутоните плюс/минус",show_current_as_primary:"Показване на текущата температура като основна",show_secondary:"Показване на вторична информация",prevent_interaction_on_scroll:"Предотвратяване на взаимодействие при превъртане",disable_humidity:"Изключване на показването на влажността",show_temperature_control:"Показване на контрол на температурата",collapsible_controls:"Сгъваеми контроли",disable_connection_lost_warning:"Изключване на предупреждение за загубена връзка",disable_degraded_warning:"Изключване на предупреждение за влошен режим",low_battery_threshold:"Праг на предупреждение за изтощена батерия (%)",section_display:"Дисплей",section_interaction:"Взаимодействие",section_features:"Функции",section_warnings:"Предупреждения"}}},Ud={window_open:"Прозорецът е отворен",eco:"Екологичен режим",summer:"Лято",cooling:"Охлаждане",heating:"Отопление",cooling_off:"Охлаждането е изключено",heating_off:"Отоплението е изключено",window_closed:"Прозорецът е затворен"},Fd={common:Rd,editor:Vd,extra_states:Ud},Gd={version:"Versio",current:"Nykyinen",current_humidity:"Nykyinen kosteus",current_temperature:"Nykyinen lämpötila",target_temperature:"Tavoitelämpötila"},Kd={card:{climate:{disable_eco:"Poista Eco -ilmoitus käytöstä",disable_menu:"Poista valikko käytöstä",disable_battery_warning:"Poista akun varoitus käytöstä",disable_buttons:"Poista plus/miinus -painikkeet käytöstä",show_current_as_primary:"Näytä nykyinen lämpötila ensisijaisena",show_secondary:"Näytä toissijaiset tiedot",prevent_interaction_on_scroll:"Estä vuorovaikutus vieritettäessä",disable_humidity:"Poista kosteusnäyttö käytöstä",show_temperature_control:"Näytä lämpötilan säätö",collapsible_controls:"Kokoon taittuvat säätimet",disable_connection_lost_warning:"Poista yhteyden katkeamisen varoitus käytöstä",disable_degraded_warning:"Poista heikentyneen tilan varoitus käytöstä",low_battery_threshold:"Alhaisen akun varoituskynnys (%)",section_display:"Näyttö",section_interaction:"Vuorovaikutus",section_features:"Ominaisuudet",section_warnings:"Varoitukset"}}},Zd={window_open:"Ikkuna auki",eco:"Eco",summer:"Kesä",cooling:"Jäähdytys",heating:"Lämmitys",cooling_off:"Jäähdytys pois päältä",heating_off:"Lämmitys pois päältä",window_closed:"Ikkuna kiinni"},Wd={common:Gd,editor:Kd,extra_states:Zd},qd={version:"versiune",current:"curent",current_humidity:"Umiditate curentă",current_temperature:"Temperatură curentă",target_temperature:"Temperatură țintă"},Xd={card:{climate:{disable_eco:"Dezactivează eco",disable_menu:"Dezactivează meniul",disable_battery_warning:"Dezactivează avertizarea bateriei",disable_buttons:"Dezactivează butoanele plus/minus",show_current_as_primary:"Afișează temperatura curentă ca principală",show_secondary:"Afișează informații secundare",prevent_interaction_on_scroll:"Previne interacțiunea la derulare",disable_humidity:"Dezactivează afișarea umidității",show_temperature_control:"Afișează controlul temperaturii",collapsible_controls:"Controale pliabile",disable_connection_lost_warning:"Dezactivează avertismentul de pierdere a conexiunii",disable_degraded_warning:"Dezactivează avertismentul de mod degradat",low_battery_threshold:"Prag avertisment baterie descărcată (%)",section_display:"Afișare",section_interaction:"Interacțiune",section_features:"Funcționalități",section_warnings:"Avertismente"}}},Yd={window_open:"Fereastră deschisă",eco:"Eco",summer:"Vara",cooling:"Răcire",heating:"Încălzire",cooling_off:"Răcire oprită",heating_off:"Încălzire oprită",window_closed:"Fereastră închisă"},Jd={common:qd,editor:Xd,extra_states:Yd},Qd={version:"Versió",current:"Actual",current_humidity:"Humitat actual",current_temperature:"Temperatura actual",target_temperature:"Temperatura objectiu"},eh={card:{climate:{disable_eco:"Desactivar indicador eco",disable_menu:"Desactivar menú",disable_battery_warning:"Desactivar advertència de bateria",disable_buttons:"Desactivar botons de més/menys",show_current_as_primary:"Mostra la temperatura actual com a principal",show_secondary:"Mostra informació secundària",prevent_interaction_on_scroll:"Evitar la interacció en desplaçar-se",disable_humidity:"Desactivar la visualització d'humitat",show_temperature_control:"Mostra el control de temperatura",collapsible_controls:"Controls plegables",disable_connection_lost_warning:"Desactiva avís de pèrdua de connexió",disable_degraded_warning:"Desactiva avís de mode degradat",low_battery_threshold:"Llindar d'avís de bateria baixa (%)",section_display:"Visualització",section_interaction:"Interacció",section_features:"Funcionalitats",section_warnings:"Avisos"}}},th={window_open:"Finestra oberta",eco:"Eco",summer:"Estiu",cooling:"Refredament",heating:"Escalfament",cooling_off:"Refredament apagat",heating_off:"Escalfament apagat",window_closed:"Finestra tancada"},oh={common:Qd,editor:eh,extra_states:th},ih={version:"versijas",current:"pašreizējais",current_humidity:"Pašreizējais mitrums",current_temperature:"Pašreizējā temperatūra",target_temperature:"Mērķa temperatūra"},nh={card:{climate:{disable_eco:"Atspējot ekonomisko režīmu",disable_menu:"Atspējot izvēlni",disable_battery_warning:"Atspējot baterijas brīdinājumu",disable_buttons:"Atspējot plus/mīnus pogas",show_current_as_primary:"Rādīt pašreizējo temperatūru kā galveno",show_secondary:"Rādīt sekundāro informāciju",prevent_interaction_on_scroll:"Novērst mijiedarbību ritinot",disable_humidity:"Izslēgt mitruma rādījumu",show_temperature_control:"Rādīt temperatūras kontroli",collapsible_controls:"Salocāmas vadīklas",disable_connection_lost_warning:"Izslēgt savienojuma zaudēšanas brīdinājumu",disable_degraded_warning:"Izslēgt pasliktināta režīma brīdinājumu",low_battery_threshold:"Zemas baterijas brīdinājuma slieksnis (%)",section_display:"Displejs",section_interaction:"Mijiedarbība",section_features:"Funkcijas",section_warnings:"Brīdinājumi"}}},rh={window_open:"Logs atvērts",eco:"Eko režīms",summer:"Vasaras režīms",cooling:"Dzesēšana",heating:"Apkure",cooling_off:"Dzesēšana izslēgta",heating_off:"Apkure izslēgta",window_closed:"Logs aizvērts"},ah={common:ih,editor:nh,extra_states:rh},sh={version:"versión",current:"Actual"},lh={card:{climate:{disable_eco:"Desactivar eco",disable_menu:"Desactivar menú",disable_battery_warning:"Desactivar alerta de batería",disable_buttons:"Desactivar botóns máis/menos",disable_humidity:"Desactivar visualización de humidade",show_temperature_control:"Mostrar control de temperatura",collapsible_controls:"Controis pregables",disable_connection_lost_warning:"Desactivar aviso de perda de conexión",disable_degraded_warning:"Desactivar aviso de modo degradado",low_battery_threshold:"Limiar de aviso de batería baixa (%)",section_display:"Visualización",section_interaction:"Interacción",section_features:"Funcionalidades",section_warnings:"Avisos"}}},ch={window_open:"Fiestra aberta",eco:"Eco",summer:"Verán"},uh={common:sh,editor:lh,extra_states:ch},dh={version:"버전",current:"현재"},hh={card:{climate:{disable_eco:"절전 버튼 표시 하지 않기",disable_menu:"메뉴 표시 하지 않기",disable_battery_warning:"배터리 경고 표시 하지 않기",disable_buttons:"온도 조절 버튼 표시 하지 않기",disable_humidity:"습도 표시 끄기",show_current_as_primary:"현재 온도를 기본으로 표시",show_secondary:"보조 정보 표시",prevent_interaction_on_scroll:"스크롤 시 상호작용 방지",show_temperature_control:"온도 조절 표시",collapsible_controls:"접을 수 있는 컨트롤",disable_connection_lost_warning:"연결 끊김 경고 끄기",disable_degraded_warning:"저하 모드 경고 끄기",low_battery_threshold:"배터리 부족 경고 임계값 (%)",section_display:"표시",section_interaction:"상호 작용",section_features:"기능",section_warnings:"경고"}}},ph={window_open:"창문이 열림",eco:"절전",summer:"여름"},mh={common:dh,editor:hh,extra_states:ph},_h={version:"versija",current:"dabartinė"},gh={card:{climate:{disable_eco:"Išjungti ECO rėžimą",disable_menu:"Išjungti meniu",disable_battery_warning:"Išjungti baterijos pranešimą",disable_buttons:"Nerodyti plius/minus mygtukų",disable_humidity:"Išjungti drėgmės rodymą",show_temperature_control:"Rodyti temperatūros valdymą",collapsible_controls:"Sulankstomi valdikliai",disable_connection_lost_warning:"Išjungti ryšio praradimo įspėjimą",disable_degraded_warning:"Išjungti pabloginto režimo įspėjimą",low_battery_threshold:"Žemo akumuliatoriaus įspėjimo riba (%)",section_display:"Rodymas",section_interaction:"Sąveika",section_features:"Funkcijos",section_warnings:"Įspėjimai"}}},fh={window_open:"Atidarytas langas",eco:"ECO",summer:"Vasaros rėžimas"},bh={common:_h,editor:gh,extra_states:fh},vh={version:"versão",current:"atual",current_humidity:"Umidade atual",current_temperature:"Temperatura atual",target_temperature:"Temperatura alvo"},yh={card:{climate:{disable_eco:"Desabilitar eco",disable_menu:"Desabilitar menu",disable_battery_warning:"Desabilitar aviso de bateria",disable_buttons:"Desabilitar botões mais/menos",show_current_as_primary:"Mostrar temperatura atual como principal",show_secondary:"Mostrar informações secundárias",prevent_interaction_on_scroll:"Prevenir interação ao rolar",disable_humidity:"Desativar exibição de umidade",show_temperature_control:"Mostrar controle de temperatura",collapsible_controls:"Controles recolhíveis",disable_connection_lost_warning:"Desativar aviso de perda de conexão",disable_degraded_warning:"Desativar aviso de modo degradado",low_battery_threshold:"Limite de aviso de bateria fraca (%)",section_display:"Exibição",section_interaction:"Interação",section_features:"Funcionalidades",section_warnings:"Avisos"}}},wh={window_open:"Janela aberta",window_closed:"Janela fechada",eco:"Eco",summer:"Verão",cooling:"Resfriando",heating:"Aquecendo",cooling_off:"Resfriamento desligado",heating_off:"Aquecimento desligado"},kh={common:vh,editor:yh,extra_states:wh};const xh={en:uu,de:_u,fr:yu,ru:Eu,sk:Object.freeze({__proto__:null,common:Tu,default:Ou,editor:Pu,extra_states:ju}),hr:Object.freeze({__proto__:null,common:Iu,default:Nu,editor:Du,extra_states:Hu}),hu:Object.freeze({__proto__:null,common:Bu,default:Vu,editor:Lu,extra_states:Ru}),pl:$u,da:Object.freeze({__proto__:null,common:Uu,default:Ku,editor:Fu,extra_states:Gu}),es:Object.freeze({__proto__:null,common:Zu,default:Xu,editor:Wu,extra_states:qu}),tr:Object.freeze({__proto__:null,common:Yu,default:ed,editor:Ju,extra_states:Qu}),it:Object.freeze({__proto__:null,common:td,default:nd,editor:od,extra_states:id}),pt:Object.freeze({__proto__:null,common:rd,default:ld,editor:ad,extra_states:sd}),cn:Object.freeze({__proto__:null,common:cd,default:hd,editor:ud,extra_states:dd}),uk:Object.freeze({__proto__:null,common:pd,default:gd,editor:md,extra_states:_d}),el:Object.freeze({__proto__:null,common:fd,default:yd,editor:bd,extra_states:vd}),nl:Object.freeze({__proto__:null,common:wd,default:zd,editor:kd,extra_states:xd}),no:Object.freeze({__proto__:null,common:Ed,default:Md,editor:Cd,extra_states:Ad}),cs:Object.freeze({__proto__:null,common:Sd,default:Pd,editor:$d,extra_states:Td}),sl:Object.freeze({__proto__:null,common:jd,default:Dd,editor:Od,extra_states:Id}),sv:Object.freeze({__proto__:null,common:Hd,default:Ld,editor:Nd,extra_states:Bd}),bg:Object.freeze({__proto__:null,common:Rd,default:Fd,editor:Vd,extra_states:Ud}),fi:Object.freeze({__proto__:null,common:Gd,default:Wd,editor:Kd,extra_states:Zd}),ro:Object.freeze({__proto__:null,common:qd,default:Jd,editor:Xd,extra_states:Yd}),ca:Object.freeze({__proto__:null,common:Qd,default:oh,editor:eh,extra_states:th}),lv:Object.freeze({__proto__:null,common:ih,default:ah,editor:nh,extra_states:rh}),gl:Object.freeze({__proto__:null,common:sh,default:uh,editor:lh,extra_states:ch}),kr:Object.freeze({__proto__:null,common:dh,default:mh,editor:hh,extra_states:ph}),lt:Object.freeze({__proto__:null,common:_h,default:bh,editor:gh,extra_states:fh}),"pt-BR":Object.freeze({__proto__:null,common:vh,default:kh,editor:yh,extra_states:wh})},zh="en";function Eh(e,t){try{return e.split(".").reduce(((e,t)=>e[t]),xh[t])}catch(e){return}}function Ch(e,t){for(const o of function(e){const t=e?.locale?.language??zh,o=[t],i=t.split(/[-_]/)[0];return i&&i!==t&&o.push(i),o.includes(zh)||o.push(zh),o}(e)){const e=Eh(t,o);if(void 0!==e)return e}}function Ah({hass:e,string:t,search:o="",replace:i=""}){let n=Ch(e,t);return""!==o&&""!==i&&"string"==typeof n&&(n=n.replace(o,i)),n??t}function Mh(e){return function(t){return Ch(e,t)??t}}let Sh;function $h(e){const t=e.locale?.language??zh;Sh&&Sh.language===t||(Sh={language:t,custom:Mh(e),mushroom:yr(e)});const{custom:o,mushroom:i}=Sh;return t=>{const n=o(t);if(n&&n!==t)return n;const r=i(t);return r&&r!==t?r:e.localize(t)}}function Th(e,t,o){return!e||(e.locale!==t.locale||e.themes!==t.themes||e.config.unit_system!==t.config.unit_system||e.connected!==t.connected||e.localize!==t.localize||e.formatEntityState!==t.formatEntityState||e.formatEntityAttributeValue!==t.formatEntityAttributeValue||o.some((o=>null!=o&&e.states[o]!==t.states[o])))}class Ph{constructor(e){this._open=!1,this._onDocumentPointerDown=e=>{const t=e.composedPath(),o=this._host.shadowRoot?.querySelector(".preset-select");o&&(t.includes(o)||this.setOpen(!1))},this._onDocumentKeyDown=e=>{"Escape"===e.key&&this.setOpen(!1)},this._host=e,e.addController(this)}get open(){return this._open}setOpen(e){this._open=e,e?this._addListeners():this._removeListeners(),this._host.requestUpdate()}hostConnected(){this._open&&this._addListeners()}hostDisconnected(){this._removeListeners(),this._open=!1,this._host.requestUpdate()}_addListeners(){window.addEventListener("pointerdown",this._onDocumentPointerDown),window.addEventListener("keydown",this._onDocumentKeyDown)}_removeListeners(){window.removeEventListener("pointerdown",this._onDocumentPointerDown),window.removeEventListener("keydown",this._onDocumentKeyDown)}}const jh=h`
  .preset-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    flex-direction: row;
    max-height: 0%;
    overflow: hidden;
    transition:
      max-height 300ms ease-in-out,
      padding 300ms ease-in-out;
    z-index: -1;
    box-sizing: border-box;
    visibility: collapse;
    backface-visibility: hidden;
  }
  .preset-select.open {
    max-height: 100%;
    z-index: 10;
    visibility: visible;
    backface-visibility: visible;
  }
`,Oh=h`
  :host {
    --bt-state-eco: 165, 214, 167;
    --bt-state-away: 176, 190, 197;
    --bt-state-boost: 239, 83, 80;
    --bt-state-sleep: 63, 81, 181;
    --bt-state-comfort: 121, 85, 72;
    --bt-state-activity: 230, 74, 25;
    --bt-state-home: 76, 175, 80;
  }
`,Ih=h`
  @keyframes bt-fade-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :host,
  ha-card {
    animation: bt-fade-in 300ms ease-out both;
  }

  /* Spinner shown on a preset button while its service call round-trips
     (slow integrations, e.g. ecobee via HomeKit, can take 20-30 s). */
  @keyframes bt-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ha-icon.bt-pending {
    display: inline-flex;
    animation: bt-spin 1s linear infinite;
  }

  .info,
  .label,
  .state,
  .primary-state,
  .target-button,
  .label-container,
  .buttons,
  .bt-buttons,
  .actions,
  ha-big-number,
  ha-control-circular-slider,
  cts-hui-card-features,
  :host > *::before,
  ha-control-circular-slider::after {
    transition:
      color 200ms ease,
      background-color 200ms ease,
      background 200ms ease,
      box-shadow 200ms ease,
      opacity 200ms ease;
  }

  @media (prefers-reduced-motion: reduce) {
    :host,
    ha-card {
      animation: none;
    }
    /* Keep the pending spinner: it carries state, not decoration — a static
       mdi:loading glyph would just look broken. */
    .info,
    .label,
    .state,
    .primary-state,
    .target-button,
    .label-container,
    .buttons,
    .bt-buttons,
    .actions,
    ha-big-number,
    ha-control-circular-slider,
    cts-hui-card-features,
    :host > *::before,
    ha-control-circular-slider::after {
      transition: none;
    }
  }
`,Dh={temperature_control:"mdi:thermometer",hvac_mode_control:"mdi:thermostat"};_c({type:gc,name:"Better Thermostat Mini Climate Card",description:"Card for climate entity"});let Hh=class extends hc{constructor(){super(...arguments),this._presetOverlay=new Ph(this)}static async getConfigElement(){return await Promise.resolve().then((function(){return Yp})),document.createElement(fc)}static async getStubConfig(e){return{type:`custom:${gc}`,entity:Xc(e)}}get _controls(){if(!this._config||!this._stateObj)return[];const e=this._stateObj,t=[];var o;return($e(o=e,Bc)&&null!=o.attributes.temperature||$e(o,Lc)&&null!=o.attributes.target_temp_low&&null!=o.attributes.target_temp_high)&&this._config.show_temperature_control&&t.push("temperature_control"),((e,t)=>void 0===t?(e.attributes.hvac_modes||[]).length>0:(e.attributes.hvac_modes||[]).some((e=>t.includes(e))))(e,["heat","off"])&&t.push("hvac_mode_control"),t}get hasControls(){return this._controls.length>0}_onControlTap(e,t){t.stopPropagation(),this._activeControl=e}setConfig(e){super.setConfig({tap_action:{action:"toggle"},hold_action:{action:"more-info"},...e}),this.updateActiveControl()}updated(e){super.updated(e),this.hass&&e.has("hass")&&this.updateActiveControl()}willUpdate(e){super.willUpdate(e),e.has("hass")&&this._clearPresetPendingIfSettled()}disconnectedCallback(){window.clearTimeout(this._pendingPresetTimer),super.disconnectedCallback()}_startPresetPending(e){this._pendingFromPreset=Gc(this.hass,this._stateObj,this._config?.preset_entity),this._pendingPreset=e,window.clearTimeout(this._pendingPresetTimer),this._pendingPresetTimer=window.setTimeout((()=>{this._pendingPreset=void 0}),45e3)}_clearPresetPendingIfSettled(){if(void 0===this._pendingPreset||!this._stateObj)return;Gc(this.hass,this._stateObj,this._config?.preset_entity)!==this._pendingFromPreset&&(window.clearTimeout(this._pendingPresetTimer),this._pendingPreset=void 0)}shouldUpdate(e){if(1===e.size&&e.has("hass")){return Th(e.get("hass"),this.hass,[this._config?.entity,this._config?.window_sensor,this._config?.humidity_sensor,this._config?.preset_entity,this._config?.connectivity_entity])}return!0}updateActiveControl(){const e=!!this._activeControl&&this._controls.includes(this._activeControl);this._activeControl=e?this._activeControl:this._controls[0]}_handleAction(e){(async(e,t,o,i)=>{Se(e,"hass-action",{config:o,action:i})})(this,this.hass,this._config,e.detail.action)}render(){if(!this.hass||!this._config||!this._config.entity)return J;const e=this._stateObj;if(!e)return this.renderNotFound(this._config);const t=this._config.name||e.attributes.friendly_name||"",o=this._config.icon,i=Pt(this._config),n=function(e,t){return"entity-picture"===t?function(e){return e.attributes.entity_picture_local||e.attributes.entity_picture}(e):void 0}(e,i.icon_type),r=Jc(this.hass,e,this._config),a=!1===e.attributes.call_for_heat;let s=this.hass.formatEntityState(e);if(e.attributes.hvac_action&&"off"!==e.attributes.hvac_action&&(s=this.hass.formatEntityAttributeValue(e,"hvac_action")),null!=e.attributes.current_temperature){let t=this.hass.formatEntityAttributeValue(e,"current_temperature");t||(t=`${e.attributes.current_temperature} ${this.hass.config.unit_system.temperature}`);const o=Ah({hass:this.hass,string:"extra_states.window_open"}),i=Ah({hass:this.hass,string:"extra_states.summer"})||"Summer";let n="";const l=Qc(this.hass,e,this._config);l&&(n=` ⸱ ${l}`),s+=` ⸱ ${r?`(${o}) `:a?`(${i}) `:""}${t}${n}`}const l=at(this.hass),c=Tt(this._config)&&(!this._config.collapsible_controls||ht(e))&&this._controls.length,u=Fc(this.hass,e,this._config),d=u.length>0,h=!c&&!this._config.disable_presets&&d&&(!this._config.collapsible_controls||ht(e)),p=e.attributes.hvac_action||"off",m={};m["--action-color"]=yc(Mc(p),.6);const _=Gc(this.hass,e,this._config.preset_entity);if("hvac"!==this._config.colors?.color_source&&void 0!==_&&(!this._config.preset_entity||Ac(_))){const e=Cc(_);m["--action-color"]=yc(e,.6),m["--bt-color-heat"]=e}r?m["--action-color"]="var(--info-color)":a?m["--action-color"]="var(--bt-color-summer)":"off"===p&&(m["--action-color"]="rgba(0, 0, 0, 0)");const g=!!this._config.show_all_presets;return q`
      <ha-card
        class=${Ee({"fill-container":i.fill_container})}
        style=${Me({...$c(this._config.colors),...m})}
      >
        <mushroom-card .appearance=${i} ?rtl=${l}>
          <mushroom-state-item
            ?rtl=${l}
            .appearance=${i}
            @action=${this._handleAction}
            .actionHandler=${bt({hasHold:vt(this._config.hold_action),hasDoubleClick:vt(this._config.double_tap_action)})}
          >
            ${n?this.renderPicture(n):this.renderIcon(e,o)}
            ${this.renderBadge(e)}
            ${this.renderStateInfo(e,i,t,s)}
          </mushroom-state-item>
          ${c?q`
                <div class="actions" ?rtl=${l}>
                  ${this.renderActiveControl(e)}
                  ${this.renderOtherControls()}
                </div>
              `:h?q`
                  <div class="actions" ?rtl=${l}>
                    ${this.renderPresetFeature(e)}
                  </div>
                `:J}

          ${g?J:q`
                <div
                  class=${Ee({"preset-select":!0,open:this._presetOverlay.open})}
                >
                  ${u.map((t=>this.renderPresetButton(e,t,_)))}
                </div>
              `}
        </mushroom-card>
      </ha-card>
    `}renderPresetButton(e,t,o){const i=t===o,n=t===this._pendingPreset,r=i?Cc(t):"var(--bt-color-grey)",a={"--icon-color":r,"--bg-color":yc(r,.2)},s=Kc(this.hass,e,t,this._config?.preset_entity);return q`
      <mushroom-button
        class=${Ee({"bt-offline":this._presetsOffline})}
        style=${Me(a)}
        .mode=${t}
        .disabled=${!pt(e)}
        title=${s}
        aria-label=${s}
        .actionHandler=${bt()}
        @action=${e=>{e.stopPropagation(),"tap"===e.detail.action&&this.triggerModeChange(t)}}
      >
        <ha-icon
          class=${Ee({"bt-pending":n})}
          .icon=${n?"mdi:loading":this._presetIcon(t)}
        ></ha-icon>
      </mushroom-button>
    `}_presetIcon(e){return Ic(e,this._config?.preset_options?.[e]?.icon)}get _presetsOffline(){return void 0!==nu(this.hass,this._config)}async firstUpdated(e){super.firstUpdated(e),await Promise.all([$t("mushroom-badge-icon",(()=>Promise.resolve().then((function(){return kr})))),$t("mushroom-card",(()=>Promise.resolve().then((function(){return zr})))),$t("mushroom-shape-avatar",(()=>Promise.resolve().then((function(){return Cr})))),$t("mushroom-shape-icon",(()=>Promise.resolve().then((function(){return $r})))),$t("mushroom-state-info",(()=>Promise.resolve().then((function(){return Pr})))),$t("mushroom-state-item",(()=>Promise.resolve().then((function(){return Or})))),$t("mushroom-button",(()=>Promise.resolve().then((function(){return Ep}))))])}renderIcon(e,t){const o=pt(e),i=Jc(this.hass,e,this._config),n=!1===e.attributes.call_for_heat,r=!0===e.attributes.eco_mode,a=e.attributes.hvac_action,s=a&&"idle"!==a&&"off"!==a?Mc(a):Cc(e.state),l={};return l["--icon-color"]=s,l["--shape-color"]=yc(s,.2),i?(l["--icon-color"]="var(--info-color)",l["--shape-color"]="rgba(0,0,0, 0.1)"):n?(l["--icon-color"]="var(--bt-color-summer)",l["--shape-color"]=yc("var(--bt-color-summer)",.2)):r&&(l["--icon-color"]="var(--bt-color-eco)",l["--shape-color"]=yc("var(--bt-color-eco)",.2)),q`
      <mushroom-shape-icon
        slot="icon"
        .disabled=${!o}
        style=${Me(l)}
      >
        <ha-state-icon
          .hass=${this.hass}
          .stateObj=${e}
          .icon=${t}
        ></ha-state-icon>
      </mushroom-shape-icon>
    `}renderBadge(e){if(!pt(e))return super.renderBadge(e);const t=ou(e,this._config),o=iu(e,this._config)??nu(this.hass,this._config);return ru(e,this._config)?q`
        <mushroom-badge-icon
          slot="badge"
          .icon=${"mdi:alert"}
          title=${Ah({hass:this.hass,string:"extra_states.degraded_mode"})}
          @click=${t=>{t.stopPropagation(),t.preventDefault(),this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity_id},bubbles:!0,composed:!0}))}}
          style=${Me({"--icon-color":"var(--warning-color, #ffc107)","--main-color":"var(--bt-badge-background)",border:"1px solid var(--warning-color, #ffc107)",borderRadius:"50%"})}
        ></mushroom-badge-icon>
      `:o?q`
        <mushroom-badge-icon
          slot="badge"
          .icon=${"mdi:wifi-strength-off-outline"}
          title=${Ah({hass:this.hass,string:"extra_states.connection_lost",search:"{name}",replace:this.hass?.states?.[o]?.attributes?.friendly_name??o})}
          @click=${e=>this._handleErrorClick(e,o)}
          style=${Me({"--icon-color":"var(--error-color, #f44336)","--main-color":"var(--bt-badge-background)",border:"1px solid var(--error-color, #f44336)",borderRadius:"50%"})}
        ></mushroom-badge-icon>
      `:t?q`
        <mushroom-badge-icon
          slot="badge"
          .icon=${"mdi:battery-alert"}
          title=${Ah({hass:this.hass,string:"extra_states.low_battery",search:"{name}",replace:t.name})}
          @click=${e=>this._handleLowBatteryClick(e,t)}
          style=${Me({"--icon-color":"var(--error-color, #f44336)","--main-color":"var(--bt-badge-background)",border:"1px solid var(--error-color, #f44336)",borderRadius:"50%"})}
        ></mushroom-badge-icon>
      `:this.renderActionBadge(e)}_handleErrorClick(e,t){e.stopPropagation(),e.preventDefault(),t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_handleLowBatteryClick(e,t){e.stopPropagation(),e.preventDefault();const o=t?.name;o&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:o},bubbles:!0,composed:!0}))}renderActionBadge(e){const t=e.attributes.hvac_action,o=Jc(this.hass,e,this._config),i=!1===e.attributes.call_for_heat;if(!(t&&"off"!==t||o||i))return J;let n=function(e){const t=jc[e];if(t)return t;const o=wc[e];return o?Oc(o):""}(t||"off");if(o?n="mdi:window-open-variant":i&&(n="mdi:white-balance-sunny"),!n)return J;let r=Mc(t||"off");return i&&!o&&(r="var(--bt-color-summer)"),q`
      <mushroom-badge-icon
        slot="badge"
        .icon=${n}
        style=${Me({"--icon-color":o?"var(--info-color)":r,"--main-color":"var(--bt-badge-background)",border:`1px solid ${o?"var(--info-color)":r}`,borderRadius:"50%"})}
      ></mushroom-badge-icon>
    `}renderOtherControls(){const e=this._controls.filter((e=>e!=this._activeControl));return q`
      ${e.map((e=>q`
          <mushroom-button @click=${t=>this._onControlTap(e,t)}>
            <ha-icon .icon=${Dh[e]}></ha-icon>
          </mushroom-button>
        `))}
    `}renderPresetFeature(e){if(this._config?.disable_presets)return J;const t=this._config?.preset_entity,o=Fc(this.hass,e,this._config??{});if(0===o.length)return J;const i=Gc(this.hass,e,t);if(this._config?.show_all_presets)return q`${o.map((t=>this.renderPresetButton(e,t,i)))}`;const n={},r=i??"none";if(null!=i){const e=Cc(i);n["--icon-color"]=e,n["--bg-color"]=yc(e,.2)}const a=null!=this._pendingPreset,s=a?"mdi:loading":null!=i?this._presetIcon(i):Oc("none"),l=null!=i?Kc(this.hass,e,i,t):Ah({hass:this.hass,string:"extra_states.presets"});if(1===o.length){const i=Kc(this.hass,e,o[0],t);return q`
        <mushroom-button
          class=${Ee({"bt-offline":this._presetsOffline})}
          style=${Me(n)}
          .mode=${r}
          title=${i}
          aria-label=${i}
          .actionHandler=${bt({hasHold:!0})}
          @action=${e=>{e.stopPropagation(),"hold"===e.detail.action?this._presetOverlay.setOpen(!0):"tap"===e.detail.action&&this.triggerModeChange(o[0])}}
        >
          <ha-icon
            class=${Ee({"bt-pending":a})}
            .icon=${a?"mdi:loading":this._presetIcon(o[0])}
          ></ha-icon>
        </mushroom-button>
      `}return q`
      <mushroom-button
        class=${Ee({"bt-offline":this._presetsOffline})}
        style=${Me(n)}
        .mode=${r}
        title=${l}
        aria-label=${l}
        .actionHandler=${bt({hasHold:!0})}
        @action=${e=>{e.stopPropagation(),this._presetOverlay.setOpen(!0)}}
      >
        <ha-icon
          class=${Ee({"bt-pending":a})}
          .icon=${s}
        ></ha-icon>
      </mushroom-button>
    `}triggerModeChange(e){const t=this._stateObj;if(!t)return;const o=Zc(this.hass,t,e,this._config?.preset_entity);o&&("preset"===o&&this._startPresetPending(e),this._presetOverlay.setOpen(!1))}renderActiveControl(e){const t=["heat","off"],o=Pt(this._config);switch(this._activeControl){case"temperature_control":return q`
          <mushroom-climate-temperature-control
            .hass=${this.hass}
            .entity=${e}
            .fill=${"horizontal"!==o.layout}
          ></mushroom-climate-temperature-control>
          ${this.renderPresetFeature(e)}
        `;case"hvac_mode_control":return q`
          <mushroom-climate-hvac-modes-control
            .hass=${this.hass}
            .entity=${e}
            .modes=${t}
            .fill=${"horizontal"!==o.layout}
            .disableEco=${this._config?.disable_eco}
            .feature=${this.renderPresetFeature(e)}
          ></mushroom-climate-hvac-modes-control>
        `;default:return J}}static get styles(){return[super.styles,pc,Oh,Tc,jh,Ih,h`
        :host {
          --rgb-state-climate-heat: 244, 99, 108;

          --bt-state-window: var(--info-color);
        }
        :host > * {
          overflow: hidden;
        }
        :host > *::before {
          display: block;
          content: "";
          position: absolute;
          right: -10%;
          bottom: -10%;
          background: radial-gradient(
            100% 60% at 50% 90%,
            var(--action-color, transparent) 0%,
            transparent 100%
          );
          opacity: 0.3;
          pointer-events: none;
          transform: translate(-50%, -20%);
          left: 50% !important;
          z-index: 0;
          top: 50% !important;
          width: 100%;
          height: 100%;
        }
        mushroom-state-item {
          cursor: pointer;
        }
        mushroom-climate-temperature-control,
        mushroom-climate-hvac-modes-control {
          flex: 1;
        }
        /* Base overlay skeleton comes from the shared presetOverlayStyle. */
        .preset-select {
          justify-content: space-evenly;
          gap: 15px;
          padding: 0 1em 0em 1em;
          background-color: rgba(var(--rgb-card-background-color), 0.3);
        }
        /* Device unreachable (connectivity_entity / preset_entity signal):
           preset changes won't stick, so dim the buttons — still clickable. */
        mushroom-button.bt-offline {
          opacity: 0.4;
        }
      `]}};n([ye()],Hh.prototype,"_activeControl",void 0),n([ye()],Hh.prototype,"_pendingPreset",void 0),Hh=n([ge(gc)],Hh);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:Nh}=de,Bh=()=>document.createComment(""),Lh=(e,t,o)=>{const i=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(Bh(),n),r=i.insertBefore(Bh(),n);o=new Nh(t,r,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,a=r!==e;if(a){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==n||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,n),e=t}}}return o},Rh=(e,t,o=e)=>(e._$AI(t,o),e),Vh={},Uh=e=>{e._$AR(),e._$AA.remove()},Fh=(e,t)=>{const o=e._$AN;if(void 0===o)return!1;for(const e of o)e._$AO?.(t,!1),Fh(e,t);return!0},Gh=e=>{let t,o;do{if(void 0===(t=e._$AM))break;o=t._$AN,o.delete(e),e=t}while(0===o?.size)},Kh=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),qh(t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zh(e){void 0!==this._$AN?(Gh(this),this._$AM=e,Kh(this)):this._$AM=e}function Wh(e,t=!1,o=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let e=o;e<i.length;e++)Fh(i[e],!1),Gh(i[e]);else null!=i&&(Fh(i,!1),Gh(i));else Fh(this,e)}const qh=e=>{e.type==ke&&(e._$AP??=Wh,e._$AQ??=Zh)};class Xh extends ze{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Kh(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Fh(this,e),Gh(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class Yh{constructor(e,{target:t,config:o,callback:i,skipInitial:n}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,null!==t&&this.t.add(t??e),this.l=o,this.o=n??this.o,this.callback=i,window.ResizeObserver?(this.u=new ResizeObserver((e=>{this.handleChanges(e),this.h.requestUpdate()})),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){this.value=this.callback?.(e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}target(e){return Jh(this,e)}}const Jh=xe(class extends Xh{constructor(){super(...arguments),this.observing=!1}render(e,t){}update(e,[t,o]){this.controller=t,this.part=e,this.observe=o,!1===o?(t.unobserve(e.element),this.observing=!1):!1===this.observing&&(t.observe(e.element),this.observing=!0)}disconnected(){this.controller?.unobserve(this.part.element),this.observing=!1}reconnected(){!1!==this.observe&&!1===this.observing&&(this.controller?.observe(this.part.element),this.observing=!0)}}),Qh="better-thermostat-normal-climate-card",ep=`${Qh}-editor`,tp=["climate"];var op="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",ip="M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",np="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z",rp="M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z";const ap=h`
  :host {
    position: relative;
    display: block;
    height: 100%;
    width: 100% !important;
    box-sizing: border-box;
    overflow: visible;
    --default-deep-orange: 244, 99, 108 !important;
  }
  ha-card {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* flex-start (not space-between): in a grid cell taller than the
       content, leftover height must stay at the bottom — splitting it
       around the dial separates the actions from the dial band their
       overlap is calibrated against. */
    justify-content: flex-start;
    padding-left: 1em;
    padding-right: 1em;
    overflow: hidden;
  }

  .title {
    width: 100%;
    font-size: var(--ha-font-size-l);
    line-height: var(--ha-line-height-expanded);
    padding: 8px 30px 8px 30px;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: none;
  }

  mushroom-climate-hvac-modes-control {
    justify-content: center !important;
  }

  .more-info {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    inset-inline-end: 0px;
    inset-inline-start: initial;
    border-radius: 100%;
    color: var(--secondary-text-color);
    direction: var(--direction);
  }

  cts-hui-card-features {
    width: 100%;
    flex: none;
    padding: 0 12px 12px 12px;
  }

  ha-control-circular-slider {
    width: 100%;
    --control-circular-slider-color: var(--state-color, var(--disabled-color));
  }

  ha-control-circular-slider {
    --default-deep-orange: 244, 99, 108 !important;
    --control-circular-slider-color: var(
      --state-color,
      var(--primary-text-color)
    );
    --control-circular-slider-low-color: var(
      --low-color,
      var(--disabled-color)
    );
    --control-circular-slider-high-color: var(
      --high-color,
      var(--disabled-color)
    );
  }

  hui-climate-preset-modes-card-feature
    ha-control-select-menu
    .select-anchor
    .content {
    display: none;
  }

  ::slotted(mushroom-button-group) {
    display: none;
  }

  ha-control-circular-slider::after {
    display: block;
    content: "";
    position: absolute;
    top: -10%;
    left: -10%;
    right: -10%;
    bottom: -10%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      var(--action-color, transparent) 0%,
      transparent 100%
    );
    opacity: 0.15;
    pointer-events: none;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
    flex: 1;
    min-height: 0;
  }

  /* Like the HA core thermostat card: if the dial ever exceeds the container
     (a transient before the measured height cap applies), clip it rather
     than let it paint over the title and actions. The max-height keeps the
     container flush with the 320px-capped dial in oversized grid cells, so
     the actions always sit directly under the dial. */
  ha-card > .container {
    overflow: hidden;
    max-height: 320px;
  }

  /* Zero-width spacer pinning the container's intrinsic height to the
     dial's natural size (like HA core's padding-top: 100% spacer, capped at
     the 320px dial maximum). Without it, an auto-height container is only as
     tall as the (possibly height-capped) dial itself, so one transient
     constraint — e.g. the edit dialog opening — ratchets the measured cap
     down for good: container height = capped dial = next measurement. In
     fixed-height layouts flex (1 1 0 + min-height: 0) still shrinks the
     container below the spacer, so the sections cap keeps working. */
  ha-card > .container::before {
    content: "";
    display: block;
    padding-top: min(320px, 100%);
  }

  .container > .bt-wrapper {
    width: 100%;
    max-width: 320px;
    aspect-ratio: 1 / 1;
    max-height: 100%;
    margin: 0 auto;
    position: relative;
    container-type: inline-size;
    container-name: container;
    box-sizing: border-box;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    font-size: var(--ha-font-size-l);
    line-height: var(--ha-line-height-normal);
    letter-spacing: 0.1px;
    gap: var(--ha-space-2);
    --mdc-icon-size: 16px;
  }

  /* The info overlay covers the whole dial. Its text elements (full-width
     label strips, big number) must NOT capture clicks/touches, or they create
     invisible dead zones on the slider ring — only genuinely interactive
     children get pointer-events (warning icons set it inline). */
  .info * {
    margin: 0;
  }

  .info .target-button {
    pointer-events: auto;
  }

  .label {
    width: 100%;
    font-weight: var(--ha-font-weight-medium);
    text-align: center;
    color: var(--action-color, inherit);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: var(--ha-line-height-normal);
    min-height: 1.5em;
    white-space: nowrap;
  }

  .label span {
    white-space: nowrap;
  }

  .label ha-svg-icon {
    bottom: 5%;
  }

  .label.disabled {
    color: var(--secondary-text-color);
  }

  .primary-state {
    font-size: 36px;
  }

  .label-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 6px;
  }

  .label-container .label {
    width: auto !important;
  }

  .label.humidity {
    color: var(--bt-color-humidity);
  }

  .buttons {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    gap: var(--ha-space-6, 24px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  .buttons > * {
    pointer-events: auto;
  }

  /* Size breakpoints against the dial wrapper's width (it declares
     container-name: container). Cutoffs like HA core's circular-slider
     state controls (md ≥190, sm ≥130, xs below), except the compact
     typography already starts at 290px: this card stacks more info rows
     (secondary + humidity) than core, and at full size they crowd the
     plus/minus buttons, which stay visible down to 250px. Container queries
     instead of observer-driven classes: the class variant could keep a stale
     size when observations moved between elements. */
  @container container (width < 290px) {
    ha-big-number {
      font-size: 44px;
    }
    .state {
      font-size: var(--ha-font-size-3xl);
    }
    .info {
      margin-top: 12px;
      gap: 6px;
    }
  }

  @container container (width < 250px) {
    .buttons {
      display: none;
    }
    ha-control-circular-slider {
      margin-bottom: -16px;
    }
  }

  @container container (width < 190px) {
    ha-big-number {
      font-size: var(--ha-font-size-4xl);
    }
    .state {
      font-size: var(--ha-font-size-2xl);
    }
    .info {
      font-size: var(--ha-font-size-m);
      gap: 2px;
      --mdc-icon-size: 14px;
    }
  }

  @container container (width < 130px) {
    .state {
      font-size: var(--ha-font-size-l);
    }
    .info {
      font-size: var(--ha-font-size-l);
      gap: var(--ha-space-2);
      --mdc-icon-size: 16px;
    }
    .label {
      display: none;
    }
  }

  .bt-buttons {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
    padding: 1em 0;
    padding-top: 0;
  }

  .actions {
    padding: 0 12px 12px 12px;
    /* Breathing room between the dial's arc ends and the mode buttons —
       the no-buttons rule below replaces it with the overlap pull-up. */
    margin-top: 8px;
    justify-content: center;
    gap: 18px;
  }

  /* No plus/minus buttons rendered (disable_buttons, or no adjustable
     target): the dial's 270° arc leaves ~14% of the square wrapper empty at
     the bottom, where the buttons normally sit — pull the actions up over
     that band. Deliberately NOT a negative margin on the wrapper: the dial
     is sized from .container's observed height, so shrinking the container
     would shrink the dial in a feedback loop. render() computes
     --bt-actions-margin from the dial's measured size and leaves it unset
     on dials whose band can't fit the button row (height-capped sections) —
     those fall back to stacking below with the same 8px gap as the
     buttons-shown case. The overlapped .actions must be lifted above the
     positioned .container (which otherwise hit-tests first and eats the
     clicks), while its own empty space stays click-through for the slider
     arc underneath. */
  ha-card.no-buttons .actions {
    margin-top: var(--bt-actions-margin, 8px);
    position: relative;
    z-index: 1;
    pointer-events: none;
  }
  ha-card.no-buttons .actions > * {
    pointer-events: auto;
  }

  .dual {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }

  .target-button {
    outline: none;
    background: none;
    color: inherit;
    font: inherit;
    border: none;
    opacity: 0.7;
    padding: 0;
    transition:
      opacity 180ms ease-in-out,
      transform 180ms ease-in-out;
    cursor: pointer;
  }

  .target-button.selected {
    opacity: 1;
  }

  .target-button:focus-visible {
    transform: scale(1.1);
  }

  .label.hvac_action {
    color: var(--action-color, inherit) !important;
  }

  .label.window-label {
    color: var(--info-color, inherit);
    --mdc-icon-size: clamp(20px, 15cqmin, 75px);
  }

  .label.summer-label {
    color: var(--bt-color-summer);
    --mdc-icon-size: clamp(20px, 15cqmin, 75px);
  }

  .label.warning {
    --mdc-icon-size: clamp(20px, 15cqmin, 75px);
  }

  .label.secondary:not(.label.humidity) {
    color: var(--action-color, inherit);
    gap: clamp(2px, 1.8cqmin, 8px);
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  /* Device unreachable (connectivity_entity / preset_entity signal): preset
     changes won't stick, so dim the buttons — still clickable. */
  mushroom-button.bt-offline {
    opacity: 0.4;
  }

  /* HVAC mode buttons: natural-size buttons centered like the preset row —
     not a stretched mushroom-button-group — so both rows match. */
  .modes-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  /* show_all_presets: dedicated preset row below the mode buttons. The
     margin separates it from that row — drop it when the presets are the
     only actions row, or the gap under the dial doubles up. */
  .preset-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 12px;
  }

  .actions > .preset-row:first-child {
    margin-top: 0;
  }

  /* Base overlay skeleton comes from the shared presetOverlayStyle. */
  .preset-select {
    justify-content: center;
    align-content: center;
    gap: 12px;
    flex-wrap: wrap;
    background-color: rgba(var(--rgb-card-background-color), 0.6);
    padding: 16px;
  }
`,sp=[Hc,Nc];function lp(e,t){const o=(i=e.entity_id).substring(0,i.indexOf("."));var i;const n=e?.state;if(["button","event","input_button","scene"].includes(o))return n!==Hc;if(function(e){return!!e&&sp.includes(e)}(n))return!1;if("off"===n&&"alert"!==o)return!1;switch(o){case"alarm_control_panel":return"disarmed"!==n;case"alert":return"idle"!==n;case"cover":case"valve":return"closed"!==n;case"device_tracker":case"person":return"not_home"!==n;case"lawn_mower":return["mowing","error"].includes(n);case"lock":return"locked"!==n;case"media_player":return"standby"!==n;case"vacuum":return!["idle","docked","paused"].includes(n);case"plant":return"problem"===n;case"group":return["on","home","open","locked","problem"].includes(n);case"timer":return"active"===n;case"camera":return"streaming"===n}return!0}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cp=e=>e??J
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,up=(e,t,o)=>{const i=new Map;for(let n=t;n<=o;n++)i.set(e[n],n);return i},dp=xe(class extends ze{constructor(e){if(super(e),e.type!==ke)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const n=[],r=[];let a=0;for(const t of e)n[a]=i?i(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:n}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,i]){const n=(e=>e._$AH)(e),{values:r,keys:a}=this.dt(t,o,i);if(!Array.isArray(n))return this.ut=a,r;const s=this.ut??=[],l=[];let c,u,d=0,h=n.length-1,p=0,m=r.length-1;for(;d<=h&&p<=m;)if(null===n[d])d++;else if(null===n[h])h--;else if(s[d]===a[p])l[p]=Rh(n[d],r[p]),d++,p++;else if(s[h]===a[m])l[m]=Rh(n[h],r[m]),h--,m--;else if(s[d]===a[m])l[m]=Rh(n[d],r[m]),Lh(e,l[m+1],n[d]),d++,m--;else if(s[h]===a[p])l[p]=Rh(n[h],r[p]),Lh(e,n[d],n[h]),h--,p++;else if(void 0===c&&(c=up(a,p,m),u=up(s,d,h)),c.has(s[d]))if(c.has(s[h])){const t=u.get(a[p]),o=void 0!==t?n[t]:null;if(null===o){const t=Lh(e,n[d]);Rh(t,r[p]),l[p]=t}else l[p]=Rh(o,r[p]),Lh(e,n[d],o),n[t]=null;p++}else Uh(n[h]),h--;else Uh(n[d]),d++;for(;p<=m;){const t=Lh(e,l[m+1]);Rh(t,r[p]),l[p++]=t}for(;d<=h;){const e=n[d++];null!==e&&Uh(e)}return this.ut=a,((e,t=Vh)=>{e._$AH=t})(e,l),Y}});let hp=class extends me{render(){return X`
    <svg
      viewBox=${this.viewBox||"0 0 24 24"}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      role="img"
      aria-hidden="true"
    >
      <g>
        ${this.path?X`<path class="primary-path" d=${this.path}></path>`:J}
        ${this.secondaryPath?X`<path class="secondary-path" d=${this.secondaryPath}></path>`:J}
      </g>
    </svg>`}};hp.styles=h`
    :host {
      display: var(--ha-icon-display, inline-flex);
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;
      fill: var(--icon-primary-color, currentcolor);
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
    }
    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: block;
    }
    path.primary-path {
      opacity: var(--icon-primary-opactity, 1);
    }
    path.secondary-path {
      fill: var(--icon-secondary-color, currentcolor);
      opacity: var(--icon-secondary-opactity, 0.5);
    }
  `,n([ve()],hp.prototype,"path",void 0),n([ve({attribute:!1})],hp.prototype,"secondaryPath",void 0),n([ve({attribute:!1})],hp.prototype,"viewBox",void 0),hp=n([ge("cts-ha-svg-icon")],hp);let pp=class extends me{constructor(){super(...arguments),this.vertical=!1,this.disabled=!1,this.hideOptionLabel=!1}_handleOptionClick(e){if(this.disabled)return;const t=e.currentTarget.value;t!==this.value&&Se(this,"value-changed",{value:t})}_handleKeydown(e){if(this.disabled||!this.options?.length)return;const t=this.options.findIndex((e=>e.value===this.value));let o;if("ArrowRight"===e.key||"ArrowDown"===e.key)o=-1===t?0:Math.min(t+1,this.options.length-1);else{if("ArrowLeft"!==e.key&&"ArrowUp"!==e.key)return;o=-1===t?0:Math.max(t-1,0)}e.preventDefault();const i=this.options[o].value;i!==this.value&&Se(this,"value-changed",{value:i})}_renderOption(e){const t=this.value===e.value;return q`
      <div
        class="option ${Ee({selected:t})}"
        role="radio"
        aria-checked=${t?"true":"false"}
        aria-label=${cp(e.label)}
        title=${cp(this.hideOptionLabel?e.label:void 0)}
        .value=${e.value}
        @click=${this._handleOptionClick}
      >
        <div class="content">
          ${e.path?q`<cts-ha-svg-icon .path=${e.path}></cts-ha-svg-icon>`:e.icon??J}
          ${!this.hideOptionLabel&&e.label?q`<span>${e.label}</span>`:J}
        </div>
      </div>
    `}render(){return q`
      <div
        class="container"
        role="radiogroup"
        aria-label=${cp(this.label)}
        tabindex=${this.disabled?-1:0}
        @keydown=${this._handleKeydown}
        ?disabled=${this.disabled}
      >
        ${this.options?dp(this.options,(e=>e.value),(e=>this._renderOption(e))):J}
      </div>
    `}};pp.styles=h`
    :host {
      display: block;
      --control-select-color: var(--primary-color);
      --control-select-focused-opacity: 0.2;
      --control-select-selected-opacity: 1;
      --control-select-background: var(--disabled-color);
      --control-select-background-opacity: 0.2;
      --control-select-thickness: 40px;
      --control-select-border-radius: 10px;
      --control-select-padding: 4px;
      --control-select-button-border-radius: calc(
        var(--control-select-border-radius) - var(--control-select-padding)
      );
      --mdc-icon-size: 20px;
      height: var(--control-select-thickness);
      width: 100%;
      font-style: normal;
      font-weight: var(--ha-font-weight-medium, 500);
      color: var(--primary-text-color);
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      border-radius: var(--control-select-border-radius);
    }
    :host([vertical]) {
      width: var(--control-select-thickness);
      height: auto;
    }
    .container {
      position: relative;
      height: 100%;
      width: 100%;
      transform: translateZ(0);
      display: flex;
      flex-direction: row;
      padding: var(--control-select-padding);
      box-sizing: border-box;
      outline: none;
      transition: box-shadow 180ms ease-in-out;
    }
    .container::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: var(--control-select-background);
      opacity: var(--control-select-background-opacity);
      border-radius: var(--control-select-border-radius);
    }
    .container > *:not(:last-child) {
      margin-right: var(--control-select-padding);
      margin-inline-end: var(--control-select-padding);
      margin-inline-start: initial;
      direction: var(--direction);
    }
    .container[disabled] {
      --control-select-color: var(--disabled-color);
      --control-select-focused-opacity: 0;
      color: var(--disabled-color);
    }
    .container[disabled] .option {
      cursor: not-allowed;
    }
    .option {
      cursor: pointer;
      position: relative;
      flex: 1;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--control-select-button-border-radius);
      z-index: 0;
      outline: none;
      transition: box-shadow 180ms ease-in-out;
    }
    .option:focus-visible {
      box-shadow: 0 0 0 2px var(--control-select-color);
    }
    .option::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--control-select-color);
      opacity: 0;
      border-radius: var(--control-select-button-border-radius);
      transition:
        background-color ease-in-out 180ms,
        opacity ease-in-out 80ms;
    }
    .option:hover::before {
      opacity: var(--control-select-focused-opacity);
    }
    .option.selected {
      color: white;
    }
    .option.selected::before {
      opacity: var(--control-select-selected-opacity);
    }
    .option .content {
      position: relative;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 2px;
      width: 100%;
      box-sizing: border-box;
    }
    .option .content > *:not(:last-child) {
      margin-bottom: 4px;
    }
    .option .content span {
      display: block;
      width: 100%;
      -webkit-hyphens: auto;
      hyphens: auto;
    }
    :host([vertical]) .container {
      flex-direction: column;
    }
    :host([vertical]) .container > *:not(:last-child) {
      margin-right: initial;
      margin-inline-end: initial;
      margin-bottom: var(--control-select-padding);
    }
  `,n([ve({attribute:!1})],pp.prototype,"options",void 0),n([ve()],pp.prototype,"value",void 0),n([ve({type:Boolean,reflect:!0})],pp.prototype,"vertical",void 0),n([ve({type:Boolean})],pp.prototype,"disabled",void 0),n([ve({attribute:"hide-option-label",type:Boolean})],pp.prototype,"hideOptionLabel",void 0),n([ve()],pp.prototype,"label",void 0),pp=n([ge("cts-ha-control-select")],pp);const mp=(e,t)=>e?t?[...new Set(t)].filter((t=>e.includes(t))):e:[];let _p=class extends me{static getStubConfig(){return{type:"climate-hvac-modes"}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}get _stateObj(){if(this.hass&&this.context?.entity_id)return this.hass.states[this.context.entity_id]}willUpdate(e){if((e.has("hass")||e.has("context"))&&this._stateObj){const t=e.get("hass");(this.context?.entity_id?t?.states[this.context.entity_id]:void 0)!==this._stateObj&&(this._currentHvacMode=this._stateObj.state)}}_valueChanged(e){const t=e.detail.value,o=this._stateObj;if(!o||!this.hass||t===o.state)return;const i=this._currentHvacMode;this._currentHvacMode=t,this.hass.callService("climate","set_hvac_mode",{entity_id:o.entity_id,hvac_mode:t}).catch((()=>{this._currentHvacMode=i}))}render(){if(!(this._config&&this.hass&&this.context&&this._stateObj&&((e,t)=>{const o=t.entity_id?e.states[t.entity_id]:void 0;return!!o&&o.entity_id.startsWith("climate.")})(this.hass,this.context)))return J;const e=this._stateObj,t=(e.attributes.hvac_modes||[]).concat().sort(lt).reverse(),o=mp(t,this._config.hvac_modes).map((t=>({value:t,label:this.hass.formatEntityState(e,t),path:Oc(t).replace("mdi:",""),icon:q`<ha-icon .icon=${Oc(t)}></ha-icon>`})));return q`
      <cts-ha-control-select
        .options=${o}
        .value=${this._currentHvacMode}
        @value-changed=${this._valueChanged}
        hide-option-label
        .label=${this.hass.localize("ui.card.climate.mode")}
        style=${Me({"--control-select-color":Sc(e)})}
        .disabled=${e.state===Hc}
      ></cts-ha-control-select>
    `}};_p.styles=h`
    :host {
      display: block;
      --control-select-color: var(--feature-color, var(--state-icon-color));
      --control-select-padding: 0;
      --control-select-thickness: 40px;
      --control-select-border-radius: 12px;
      --control-select-button-border-radius: 10px;
      --mdc-icon-size: 20px;
    }
  `,n([ve({attribute:!1})],_p.prototype,"hass",void 0),n([ve({attribute:!1})],_p.prototype,"context",void 0),n([ve({attribute:!1})],_p.prototype,"color",void 0),n([ye()],_p.prototype,"_config",void 0),n([ye()],_p.prototype,"_currentHvacMode",void 0),_p=n([ge("cts-hui-climate-hvac-modes-card-feature")],_p);let gp=class extends me{static getStubConfig(){return{type:"climate-preset-modes"}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}get _stateObj(){if(this.hass&&this.context?.entity_id)return this.hass.states[this.context.entity_id]}willUpdate(e){if((e.has("hass")||e.has("context"))&&this._stateObj){const t=e.get("hass");(this.context?.entity_id?t?.states[this.context.entity_id]:void 0)!==this._stateObj&&(this._currentPresetMode=this._stateObj.attributes.preset_mode)}}_valueChanged(e){const t=e.detail.value,o=this._stateObj;if(!o||!this.hass||t===o.attributes.preset_mode)return;const i=this._currentPresetMode;this._currentPresetMode=t,this.hass.callService("climate","set_preset_mode",{entity_id:o.entity_id,preset_mode:t}).catch((()=>{this._currentPresetMode=i}))}render(){if(!(this._config&&this.hass&&this.context&&this._stateObj&&((e,t)=>{const o=t.entity_id?e.states[t.entity_id]:void 0;return!!o&&o.entity_id.startsWith("climate.")&&$e(o,Rc)})(this.hass,this.context)))return J;const e=this._stateObj,t=mp(e.attributes.preset_modes,this._config.preset_modes).map((t=>({value:t,label:this.hass.formatEntityAttributeValue(e,"preset_mode",t),icon:q`<ha-icon .icon=${Oc(t)}></ha-icon>`})));return q`
      <cts-ha-control-select
        .options=${t}
        .value=${this._currentPresetMode}
        @value-changed=${this._valueChanged}
        ?hide-option-label=${"icons"===this._config.style}
        .label=${this.hass.localize("ui.card.climate.preset_mode")}
        style=${Me({"--control-select-color":Sc(e)})}
        .disabled=${e.state===Hc}
      ></cts-ha-control-select>
    `}};gp.styles=h`
    :host {
      display: block;
      --control-select-color: var(--feature-color, var(--state-icon-color));
      --control-select-padding: 0;
      --control-select-thickness: 40px;
      --control-select-border-radius: 12px;
      --control-select-button-border-radius: 10px;
      --mdc-icon-size: 20px;
    }
  `,n([ve({attribute:!1})],gp.prototype,"hass",void 0),n([ve({attribute:!1})],gp.prototype,"context",void 0),n([ve({attribute:!1})],gp.prototype,"color",void 0),n([ye()],gp.prototype,"_config",void 0),n([ye()],gp.prototype,"_currentPresetMode",void 0),gp=n([ge("cts-hui-climate-preset-modes-card-feature")],gp);const fp={"climate-hvac-modes":"cts-hui-climate-hvac-modes-card-feature","climate-preset-modes":"cts-hui-climate-preset-modes-card-feature"},bp=e=>{const t=(e=>e?fp[e]:void 0)(e?.type);if(t)return document.createElement(t);console.warn(`[better-thermostat-card] feature type "${e?.type}" is not bundled; skipping. Supported: ${Object.keys(fp).join(", ")}`)};let vp=class extends me{_getFeatureElement(e){return this._element||(this._element=bp(e)),this._element}willUpdate(e){if(e.has("feature")&&(this._element=void 0,this.feature)){const e=this._getFeatureElement(this.feature);try{e?.setConfig(this.feature)}catch(e){this._element=void 0}}}render(){if(!this.feature||!this._element)return J;const e=this._element;return e.hass=this.hass,e.context=this.context,e.color=this.color,e.position=this.position,this.context?.entity_id&&this.hass&&(e.stateObj=this.hass.states[this.context.entity_id]),q`${e}`}};vp.styles=h`
    :host {
      display: block;
      pointer-events: auto;
    }
  `,n([ve({attribute:!1})],vp.prototype,"hass",void 0),n([ve({attribute:!1})],vp.prototype,"context",void 0),n([ve({attribute:!1})],vp.prototype,"color",void 0),n([ve({attribute:!1})],vp.prototype,"feature",void 0),n([ve({attribute:!1})],vp.prototype,"position",void 0),vp=n([ge("cts-hui-card-feature")],vp);let yp=class extends me{render(){return this.features?.length?q`
      ${this.features.map((e=>q`
          <cts-hui-card-feature
            .hass=${this.hass}
            .context=${this.context}
            .color=${this.color}
            .feature=${e}
            .position=${this.position}
          ></cts-hui-card-feature>
        `))}
    `:J}};yp.styles=h`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      box-sizing: border-box;
    }
  `,n([ve({attribute:!1})],yp.prototype,"hass",void 0),n([ve({attribute:!1})],yp.prototype,"context",void 0),n([ve({attribute:!1})],yp.prototype,"color",void 0),n([ve({attribute:!1})],yp.prototype,"features",void 0),n([ve({attribute:!1})],yp.prototype,"position",void 0),yp=n([ge("cts-hui-card-features")],yp);const wp={auto:"full",cool:"end",dry:"full",fan_only:"full",heat:"start",heat_cool:"full",off:"full"},kp=3e3;_c({type:Qh,name:"Better Thermostat Climate Card",description:"Large climate control card."});let xp=class extends lc{constructor(){super(...arguments),this.preview=!1,this.preventInteractionOnScroll=!1,this._targetTemperature={},this._isDragging=!1,this._lastInteraction=0,this._selectTarget="low",this._presetOverlay=new Ph(this),this._resizeController=new Yh(this,{callback:()=>{const e=this.shadowRoot?.querySelector("ha-card > .container");return e?.clientHeight}}),this._debouncedCallService=function(e,t=300){let o;return(...i)=>{o&&clearTimeout(o),o=window.setTimeout((()=>e(...i)),t)}}((e=>this._callService(e)),1e3)}static async getConfigElement(){return await Promise.resolve().then((function(){return tm})),document.createElement(ep)}static async getStubConfig(e){return{type:`custom:${Qh}`,entity:Xc(e)}}updated(e){super.updated(e);const t=this.shadowRoot?.querySelector("ha-card > .container");t&&t!==this._observedContainer&&(this._observedContainer&&this._resizeController.unobserve(this._observedContainer),this._resizeController.observe(t),this._observedContainer=t)}shouldUpdate(e){if(1===e.size&&e.has("hass")){return Th(e.get("hass"),this.hass,[this._config?.entity,this._config?.window_sensor,this._config?.humidity_sensor,this._config?.preset_entity,this._config?.connectivity_entity])}return!0}getCardSize(){return 5}getGridOptions(){let e=5,t=4;if(this._config&&!this._config.disable_buttons&&(e+=1),this._config&&Tt(this._config)&&this._config.show_all_presets&&!this._config.disable_presets&&(e+=1),this._config?.features?.length){const o=Math.ceil(2*this._config.features.length/3);e+=o,t+=o}return{rows:e,columns:12,min_rows:t,min_columns:6}}setConfig(e){if(!e.entity||!["climate"].includes(e.entity.split(".")[0]))throw new Error("Specify an entity from within the climate domain");this._config={disable_buttons:!0,...e}}_handleMoreInfo(){Se(this,"hass-more-info",{entityId:this._config?.entity??null})}willUpdate(e){(e.has("hass")||e.has("_config"))&&(this._config?.entity&&(this._stateObj=this.hass.states[this._config.entity],this._stateObj&&(this._featureContext&&this._featureContext.entity_id===this._stateObj.entity_id||(this._featureContext={entity_id:this._stateObj.entity_id}),!this._isDragging&&Date.now()-this._lastInteraction>kp&&(this._targetTemperature={value:this._stateObj.attributes.temperature??void 0,low:this._stateObj.attributes.target_temp_low??void 0,high:this._stateObj.attributes.target_temp_high??void 0}))),this._clearPresetPendingIfSettled())}_startPresetPending(e){this._pendingFromPreset=Gc(this.hass,this._stateObj,this._config?.preset_entity),this._pendingPreset=e,window.clearTimeout(this._pendingPresetTimer),this._pendingPresetTimer=window.setTimeout((()=>{this._pendingPreset=void 0}),45e3)}_clearPresetPendingIfSettled(){if(void 0===this._pendingPreset||!this._stateObj)return;Gc(this.hass,this._stateObj,this._config?.preset_entity)!==this._pendingFromPreset&&(window.clearTimeout(this._pendingPresetTimer),this._pendingPreset=void 0)}get _step(){return this._stateObj?this._stateObj.attributes.target_temp_step||("°F"===this.hass.config.unit_system.temperature?1:.5):1}get _min(){return this._stateObj?.attributes.min_temp??0}get _max(){return this._stateObj?.attributes.max_temp??100}_snap(e){const t=this._min,o=this._max,i=this._step;if(!i||i<=0)return Math.min(Math.max(e,t),o);let n=t+Math.round((e-t)/i)*i;const r=Math.max(i.toString().split(".")?.[1]?.length??0,t.toString().split(".")?.[1]?.length??0,o.toString().split(".")?.[1]?.length??0);return n=parseFloat(n.toFixed(r)),Math.min(Math.max(n,t),o)}_callService(e){this._stateObj&&("high"===e||"low"===e?this.hass.callService("climate","set_temperature",{entity_id:this._stateObj.entity_id,target_temp_low:this._targetTemperature.low,target_temp_high:this._targetTemperature.high}):this.hass.callService("climate","set_temperature",{entity_id:this._stateObj.entity_id,temperature:this._targetTemperature.value}))}_scheduleHoldoffResync(){window.clearTimeout(this._holdoffResyncTimer);const e=Math.max(kp-(Date.now()-this._lastInteraction),0);this._holdoffResyncTimer=window.setTimeout((()=>{if(this._isDragging)return;if(Date.now()-this._lastInteraction<=kp)return void this._scheduleHoldoffResync();const e=this._stateObj?.attributes;e&&(this._targetTemperature={value:e.temperature??void 0,low:e.target_temp_low??void 0,high:e.target_temp_high??void 0})}),e+50)}disconnectedCallback(){window.clearTimeout(this._holdoffResyncTimer),window.clearTimeout(this._pendingPresetTimer),super.disconnectedCallback()}_handleButton(e){this._lastInteraction=Date.now();const t=e.currentTarget,o=t.target,i=t.step,n="high"===o?this._max:this._min;let r=this._targetTemperature[o]??n;r+=i,r=this._snap(r),"high"===o&&null!=this._targetTemperature.low&&(r=Math.max(r,this._snap(this._targetTemperature.low))),"low"===o&&null!=this._targetTemperature.high&&(r=Math.min(r,this._snap(this._targetTemperature.high))),this._targetTemperature={...this._targetTemperature,[o]:r},this._debouncedCallService(o),this._scheduleHoldoffResync()}_handleSelect(e){const t=e.currentTarget;this._selectTarget=t.target}_valueChanged(e){const t=e.detail.value;if(isNaN(t))return;this._isDragging=!1,this._lastInteraction=Date.now();const o=this._snap(t);this._targetTemperature={...this._targetTemperature,value:o},this._callService("value"),this._scheduleHoldoffResync()}_valueChanging(e){const t=e.detail.value;isNaN(t)||(this._isDragging=!0,this._targetTemperature={...this._targetTemperature,value:t})}_lowChanged(e){const t=e.detail.value;if(isNaN(t))return;this._isDragging=!1,this._lastInteraction=Date.now();const o=this._snap(t);this._targetTemperature={...this._targetTemperature,low:o},this._callService("low"),this._scheduleHoldoffResync()}_lowChanging(e){const t=e.detail.value;isNaN(t)||(this._isDragging=!0,this._targetTemperature={...this._targetTemperature,low:t})}_highChanged(e){const t=e.detail.value;if(isNaN(t))return;this._isDragging=!1,this._lastInteraction=Date.now();const o=this._snap(t);this._targetTemperature={...this._targetTemperature,high:o},this._callService("high"),this._scheduleHoldoffResync()}_highChanging(e){const t=e.detail.value;isNaN(t)||(this._isDragging=!0,this._targetTemperature={...this._targetTemperature,high:t})}get _supportsTargetValue(){return null!=this._stateObj&&$e(this._stateObj,Bc)&&null!=this._targetTemperature.value}get _supportsTargetRange(){return null!=this._stateObj&&$e(this._stateObj,Lc)&&null!=this._targetTemperature.low&&null!=this._targetTemperature.high}render(){if(!this._config||!this._stateObj)return J;const e=this._stateObj,t=$h(this.hass);this.preventInteractionOnScroll=Boolean(this._config.prevent_interaction_on_scroll);const o=Jc(this.hass,e,this._config),i=null!=e.attributes.current_temperature&&(this._config.show_current_as_primary||!this._supportsTargetValue&&!this._supportsTargetRange),n=e.attributes.hvac_action,r=lp(e);let a;n&&"idle"!==n&&"off"!==n&&r&&(a=Cc(wc[n]??"off"));let s=Sc(e);const l=this._config.preset_entity,c=Gc(this.hass,e,l);if(o)a="var(--info-color)",s="var(--info-color)";else if("hvac"!==this._config.colors?.color_source&&null!=c&&(!l||Ac(c))){const e=Cc(c);s=e,a=e}const u=!1===e.attributes.call_for_heat;"off"===e.state&&(u&&!o?(s="var(--bt-color-summer)",a="var(--bt-color-summer)"):o||(s="var(--bt-color-grey)",a="var(--bt-color-grey)"));const d=Cc(r?"heat":"off"),h=Cc(r?"cool":"off"),p=this._resizeController.value?`${Math.min(this._resizeController.value,320)}px`:void 0,m=this._config.name||e.attributes.friendly_name||"",_=this._config.disable_buttons||!(this._supportsTargetValue||this._supportsTargetRange),g=this._resizeController.value?Math.min(this._resizeController.value,320):320,f=`${(-Math.max(0,.14*g-(g>=300?4:14))).toFixed(1)}px`;return q`
      <ha-card
        class=${Ee({"no-buttons":_})}
        style=${Me({...$c(this._config.colors),"--bt-actions-margin":f})}
      >
        <p class="title">${m}</p>
        <div class="container">
          <div
            class="bt-wrapper container"
            style=${Me({"--low-color":d,"--high-color":h,"--state-color":s??"var(--primary-text-color)","--action-color":a??"",maxWidth:p})}
          >
            ${this._renderCircularSlider(r)}
            <div class="info">
              ${this._renderLabel(o)}${this._renderPrimary(i)}${this._renderSecondary(i)}${this._renderHumidity()}
            </div>
            ${_?J:this._renderButtons(this._supportsTargetRange?this._selectTarget:"value")}
          </div>
        </div>
        ${this._config.disable_menu?J:q`<ha-icon-button
              class="more-info"
              .label=${t("ui.panel.lovelace.cards.show_more_info")}
              .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
              @click=${e=>{e.stopPropagation(),this._handleMoreInfo()}}
              tabindex="0"
            ></ha-icon-button>`}
        ${this._renderActionsSection()}
      </ha-card>
    `}_renderCircularSlider(e){const t=this._stateObj;let o=wp[t.state||"off"]||"full";return"full"===o&&["off","auto"].includes(t.state)&&!t.attributes.hvac_modes?.includes("heat_cool")&&(t.attributes.hvac_modes?.includes("heat")?o="start":t.attributes.hvac_modes?.includes("cool")&&(o="end")),this._supportsTargetRange?q`
        <ha-control-circular-slider
          .preventInteractionOnScroll=${this.preventInteractionOnScroll}
          .inactive=${!e}
          dual
          .low=${this._targetTemperature.low}
          .high=${this._targetTemperature.high}
          .min=${this._min}
          .max=${this._max}
          .step=${this._step}
          .current=${t.attributes.current_temperature}
          @low-changed=${this._lowChanged}
          @low-changing=${this._lowChanging}
          @high-changed=${this._highChanged}
          @high-changing=${this._highChanging}
        >
        </ha-control-circular-slider>
      `:this._supportsTargetValue?q`
        <ha-control-circular-slider
          .preventInteractionOnScroll=${this.preventInteractionOnScroll}
          .inactive=${!e}
          .mode=${o}
          .value=${this._targetTemperature.value}
          .min=${this._min}
          .max=${this._max}
          .step=${this._step}
          .current=${t.attributes.current_temperature}
          @value-changed=${this._valueChanged}
          @value-changing=${this._valueChanging}
        >
        </ha-control-circular-slider>
      `:q`
      <ha-control-circular-slider
        .preventInteractionOnScroll=${this.preventInteractionOnScroll}
        .inactive=${!e}
        mode="full"
        readonly
        .current=${t.attributes.current_temperature}
        .min=${this._min}
        .max=${this._max}
        .step=${this._step}
        .disabled=${!e}
      >
      </ha-control-circular-slider>
    `}_renderTarget(e,t=!1,o=!1){const i=this._step.toString().split(".")?.[1]?.length??0,n={maximumFractionDigits:i,minimumFractionDigits:i},r=o?"":this.hass.config.unit_system.temperature,a=Ne(e,this.hass.locale,n);return t?q`
        <ha-big-number
          .value=${e}
          .unit=${this.hass.config.unit_system.temperature}
          .hass=${this.hass}
          .formatOptions=${n}
        ></ha-big-number>
      `:q`${a} ${r}`}_renderCurrent(e,t=!1){if(t)return q`
        <ha-big-number
          .value=${e}
          .unit=${this.hass.config.unit_system.temperature}
          .hass=${this.hass}
        ></ha-big-number>
      `;let o=this.hass.formatEntityAttributeValue(this._stateObj,"current_temperature",e);return o||(o=`${e} ${this.hass.config.unit_system.temperature}`),q`
      ${o}
    `}_renderLabel(e){const t=this._stateObj,o=ou(t,this._config),i=iu(t,this._config)??nu(this.hass,this._config),n=ru(t,this._config),r=q`
      ${n?q`
            <span
              class="warning degraded-label label"
              title="Degraded Mode"
              style="color: var(--warning-color, #ffc107); cursor: pointer; pointer-events: auto; display: inline-flex !important;"
              @click=${e=>{e.stopPropagation(),this._openMoreInfo(e,t.entity_id)}}
            >
              <ha-svg-icon .path=${op}></ha-svg-icon>
            </span>
          `:J}
      ${i?q`
            <span
              class="warning error-label label"
              title="Connection Lost"
              style="color: var(--error-color, #f44336); cursor: pointer; pointer-events: auto; display: inline-flex !important;"
              @click=${e=>{e.stopPropagation(),this._openMoreInfo(e,i)}}
            >
              <ha-svg-icon .path=${"M3.27,1.44L2,2.72L4.05,4.77C2.75,5.37 1.5,6.11 0.38,7C4.2,11.8 8.14,16.67 12,21.5L15.91,16.63L19.23,19.95L20.5,18.68C14.87,13.04 3.27,1.44 3.27,1.44M12,3C10.6,3 9.21,3.17 7.86,3.5L9.56,5.19C10.37,5.07 11.18,5 12,5C15.07,5 18.09,5.86 20.71,7.45L16.76,12.38L18.18,13.8C20.08,11.43 22,9 23.65,7C20.32,4.41 16.22,3 12,3M5.57,6.29L14.5,15.21L12,18.3L3.27,7.44C4,7 4.78,6.61 5.57,6.29Z"}></ha-svg-icon>
            </span>
          `:J}
      ${o?q`
            <span
              class="warning batteries-label label"
              title="Low Battery"
              style="color: var(--error-color, #f44336); cursor: pointer; pointer-events: auto; display: inline-flex !important;"
              @click=${e=>{e.stopPropagation(),this._openMoreInfo(e,o.name)}}
            >
              <ha-svg-icon .path=${"M13 14H11V8H13M13 18H11V16H13M16.7 4H15V2H9V4H7.3C6.6 4 6 4.6 6 5.3V20.6C6 21.4 6.6 22 7.3 22H16.6C17.3 22 17.9 21.4 17.9 20.7V5.3C18 4.6 17.4 4 16.7 4Z"}></ha-svg-icon>
            </span>
          `:J}
    `,a=!1===t.attributes.call_for_heat;return t.state===Hc?q`<div class="label-container">
        ${r}
        <p class="label hvac_action">
          ${this.hass.formatEntityState(t)}
        </p>
      </div>`:e?q`<div class="label-container">
        ${r}
        <p class="label window-label">
          <ha-svg-icon .path=${rp}></ha-svg-icon>
        </p>
      </div>`:a?q`<div class="label-container">
        ${r}
        <p class="label summer-label">
          <ha-svg-icon .path=${"M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13"}></ha-svg-icon>
        </p>
      </div>`:t.attributes.hvac_action&&"off"!==t.attributes.hvac_action?q`<div class="label-container">
        ${r}
        <p class="label hvac_action">
          ${this.hass.formatEntityAttributeValue(t,"hvac_action")}
        </p>
      </div>`:q`<div class="label-container">
      ${r}
      <p class="label hvac_action">${this.hass.formatEntityState(t)}</p>
    </div>`}_renderPrimary(e){const t=this._stateObj;return t.state===Hc?J:e?this._renderCurrent(t.attributes.current_temperature,!0):this._supportsTargetValue?this._renderTarget(this._targetTemperature.value,!0):this._supportsTargetRange?q`<div class="dual">
        <button
          @click=${this._handleSelect}
          .target=${"low"}
          class="target-button ${Ee({selected:"low"===this._selectTarget})}"
        >
          ${this._renderTarget(this._targetTemperature.low,!0)}</button
        ><button
          @click=${this._handleSelect}
          .target=${"high"}
          class="target-button ${Ee({selected:"high"===this._selectTarget})}"
        >
          ${this._renderTarget(this._targetTemperature.high,!0)}
        </button>
      </div>`:J}_renderSecondary(e){const t=this._stateObj,o=this._config,i=t.attributes.current_temperature;return!1===o.show_secondary?q`<p class="label secondary"></p>`:null==i||e?this._supportsTargetValue&&e?q`<p class="label secondary">
        <ha-svg-icon .path=${ip}></ha-svg-icon>${this._renderTarget(this._targetTemperature.value)}
      </p>`:this._supportsTargetRange&&e?q`<p class="label secondary">
        <ha-svg-icon .path=${ip}></ha-svg-icon
        ><button
          @click=${this._handleSelect}
          .target=${"low"}
          class="target-button ${Ee({selected:"low"===this._selectTarget})}"
        >
          ${this._renderTarget(this._targetTemperature.low,!1,!0)}</button
        ><span>·</span
        ><button
          @click=${this._handleSelect}
          .target=${"high"}
          class="target-button ${Ee({selected:"high"===this._selectTarget})}"
        >
          ${this._renderTarget(this._targetTemperature.high,!1,!0)}
        </button>
      </p>`:q`<p class="label secondary"></p>`:q`<p class="label secondary">
        <ha-svg-icon .path=${"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z"}></ha-svg-icon>
        ${this._renderCurrent(i)}
      </p>`}_renderHumidity(){const e=Qc(this.hass,this._stateObj,this._config);return e?q`
      <p class="label secondary humidity">
        <ha-svg-icon .path=${"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z"}></ha-svg-icon>
        ${e}&nbsp;
      </p>
    `:J}_renderButtons(e){const t=this._stateObj.state===Hc;return q`<div class="buttons">
      <ha-outlined-icon-button
        .target=${e}
        .step=${-this._step}
        .disabled=${t}
        @click=${this._handleButton}
        ><ha-svg-icon .path=${"M19,13H5V11H19V13Z"}></ha-svg-icon></ha-outlined-icon-button
      ><ha-outlined-icon-button
        .target=${e}
        .step=${this._step}
        .disabled=${t}
        @click=${this._handleButton}
        ><ha-svg-icon .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon
      ></ha-outlined-icon-button>
    </div>`}_renderActionsSection(){const e=this._stateObj,t=this._config,o=Array.isArray(e.attributes.hvac_modes)?e.attributes.hvac_modes:["off","heat","cool"],i=[...o.filter((e=>"off"!==e)),...o.includes("off")?["off"]:[]],n=Fc(this.hass,e,t),r=n.length>0,a=!!t.show_all_presets&&!t.disable_presets&&r,s=Math.max(i.length-1,0),l=t.disable_presets||a?i:[...i.slice(0,s),"presets",...i.slice(s)],c=Tt(t),u=!c&&!t.disable_presets&&r;if(!(c||u))return J;const d=Gc(this.hass,e,t.preset_entity);return q`
      <div class="actions">
        ${a?J:q`
              <div
                class=${Ee({"preset-select":!0,open:this._presetOverlay.open})}
              >
                ${n.map((e=>this._renderPresetButton(e,d)))}
              </div>
            `}
        ${u?a?J:q`
                <div class="modes-row">
                  ${this.renderModeButton("presets")}
                </div>
              `:t.features?.length?q`
                <cts-hui-card-features
                  .hass=${this.hass}
                  .context=${this._featureContext}
                  .features=${t.features}
                  color=${Sc(e)}
                ></cts-hui-card-features>
              `:q`
                <div class="modes-row">
                  ${l.map((e=>this.renderModeButton(e)))}
                </div>
              `}
        ${a?q`
              <div class="preset-row">
                ${n.map((e=>this._renderPresetButton(e,d)))}
              </div>
            `:J}
      </div>
    `}_renderPresetButton(e,t){const o=this._stateObj,i=e===t,n=e===this._pendingPreset,r=i?Cc(e):"var(--bt-color-grey)",a={"--icon-color":r,"--bg-color":yc(r,.2)},s=Kc(this.hass,o,e,this._config?.preset_entity);return q`
      <mushroom-button
        class=${Ee({"bt-offline":this._presetsOffline})}
        style=${Me(a)}
        .mode=${e}
        .disabled=${!pt(o)}
        title=${s}
        aria-label=${s}
        @click=${this.triggerModeChange.bind(this,e)}
      >
        <ha-icon
          class=${Ee({"bt-pending":n})}
          .icon=${n?"mdi:loading":this._presetIcon(e)}
        ></ha-icon>
      </mushroom-button>
    `}_presetIcon(e){return Ic(e,this._config?.preset_options?.[e]?.icon)}get _presetsOffline(){return void 0!==nu(this.hass,this._config)}renderModeButton(e){if(!this._stateObj?.attributes)return J;if("presets"===e){const e=this._config?.preset_entity,t=Gc(this.hass,this._stateObj,e),o={},i=t??"none",n=Cc(i);null!=t&&(o["--icon-color"]=n,o["--bg-color"]=yc(n,.2));const r=null!=this._pendingPreset,a=r?"mdi:loading":null!=t?this._presetIcon(t):Oc("none"),s=Fc(this.hass,this._stateObj,this._config??{}),l=null!=t?Kc(this.hass,this._stateObj,t,e):Ah({hass:this.hass,string:"extra_states.presets"});if(1===s.length){const t=Kc(this.hass,this._stateObj,s[0],e);return q`
          <mushroom-button
            class=${Ee({"bt-offline":this._presetsOffline})}
            style=${Me(o)}
            .mode=${i}
            title=${t}
            aria-label=${t}
            @click=${this.triggerModeChange.bind(this,s[0])}
            @longpress=${e=>{e.stopPropagation(),this._presetOverlay.setOpen(!0)}}
          >
            <ha-icon
              class=${Ee({"bt-pending":r})}
              .icon=${r?"mdi:loading":this._presetIcon(s[0])}
            ></ha-icon>
          </mushroom-button>
        `}return s.length>1?q`
          <mushroom-button
            class=${Ee({"bt-offline":this._presetsOffline})}
            style=${Me(o)}
            .mode=${i}
            .disabled=${!pt(this._stateObj)}
            title=${l}
            aria-label=${l}
            @click=${e=>{e.stopPropagation(),this._presetOverlay.setOpen(!0)}}
          >
            <ha-icon
              class=${Ee({"bt-pending":r})}
              .icon=${a}
            ></ha-icon>
          </mushroom-button>
        `:J}const t={},o="off"===e?"var(--bt-color-grey)":Cc(e);return e===this._stateObj.state&&(t["--icon-color"]=o,t["--bg-color"]=yc(o,.2)),q`
      <mushroom-button
        style=${Me(t)}
        .mode=${e}
        .disabled=${!pt(this._stateObj)}
        @click=${this.triggerModeChange.bind(this,e)}
      >
        <ha-icon .icon=${Oc(e)}></ha-icon>
      </mushroom-button>
    `}triggerModeChange(e){if(!this._stateObj)return;const t=Zc(this.hass,this._stateObj,e,this._config?.preset_entity);t&&("preset"===t&&this._startPresetPending(e),this._presetOverlay.setOpen(!1))}_openMoreInfo(e,t){e.stopPropagation(),e.preventDefault(),t&&Se(this,"hass-more-info",{entityId:t})}static get styles(){return[super.styles,Oh,Tc,jh,Ih,ap]}};n([ve({type:Boolean})],xp.prototype,"preview",void 0),n([ve({attribute:!1})],xp.prototype,"hass",void 0),n([ve({type:Boolean,attribute:"prevent-interaction-on-scroll"})],xp.prototype,"preventInteractionOnScroll",void 0),n([ye()],xp.prototype,"_config",void 0),n([ye()],xp.prototype,"_stateObj",void 0),n([ye()],xp.prototype,"_featureContext",void 0),n([ye()],xp.prototype,"_targetTemperature",void 0),n([ye()],xp.prototype,"_selectTarget",void 0),n([ye()],xp.prototype,"_pendingPreset",void 0),xp=n([ge(Qh)],xp),console.info("%cBetter Thermostat UI - 3.2.2","color: #ef5350; font-weight: 700;");let zp=class extends me{constructor(){super(...arguments),this.title="",this.disabled=!1}render(){return q`
      <button
        type="button"
        class="button"
        .title=${this.title}
        .disabled=${this.disabled}
      >
        <slot> </slot>
      </button>
    `}static get styles(){return h`
      :host {
        --icon-color: var(--primary-text-color);
        --icon-color-disabled: rgb(var(--rgb-disabled));
        --bg-color: rgba(var(--rgb-primary-text-color), 0.05);
        --bg-color-disabled: rgba(var(--rgb-disabled), 0.2);
        height: var(--control-height);
        width: calc(var(--control-height) * var(--control-button-ratio));
        flex: none;
      }
      .button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: var(--control-border-radius);
        border: none;
        background-color: var(--bg-color);
        transition: background-color 280ms ease-in-out;
        font-size: var(--control-height);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 0;
      }
      .button:disabled {
        cursor: not-allowed;
        background-color: var(--bg-color-disabled);
      }
      .button ::slotted(*) {
        --mdc-icon-size: var(--control-icon-size);
        color: var(--icon-color);
        pointer-events: none;
      }
      .button:disabled ::slotted(*) {
        color: var(--icon-color-disabled);
      }
    `}};n([ve()],zp.prototype,"title",void 0),n([ve({type:Boolean})],zp.prototype,"disabled",void 0),zp=n([ge("mushroom-button")],zp);var Ep=Object.freeze({__proto__:null,get Button(){return zp}});let Cp=class extends me{constructor(){super(...arguments),this.fill=!1,this.rtl=!1}render(){return q`
      <div
        class=${Ee({container:!0,fill:this.fill})}
      >
        <slot></slot>
      </div>
    `}static get styles(){return h`
      :host {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
      .container ::slotted(*:not(:last-child)) {
        margin-right: var(--spacing);
      }
      :host([rtl]) .container ::slotted(*:not(:last-child)) {
        margin-right: initial;
        margin-left: var(--spacing);
      }
      .container > ::slotted(mushroom-button) {
        width: 0;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: calc(var(--control-height) * var(--control-button-ratio));
      }
      .container > ::slotted(mushroom-input-number) {
        width: 0;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: calc(
          var(--control-height) * var(--control-button-ratio) * 3
        );
      }
      .container.fill > ::slotted(mushroom-button),
      .container.fill > ::slotted(mushroom-input-number) {
        flex-grow: 1;
      }
    `}};n([ve()],Cp.prototype,"fill",void 0),n([ve()],Cp.prototype,"rtl",void 0),Cp=n([ge("mushroom-button-group")],Cp);var Ap=Object.freeze({__proto__:null,get MushroomButtonGroup(){return Cp}});let Mp=class extends me{constructor(){super(...arguments),this.disabled=!1,this.formatOptions={},this.pending=!1,this.dispatchValue=e=>{this.pending=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e}}))},this.debounceDispatchValue=this.dispatchValue}get _precision(){return Math.ceil(Math.log10(1/this._step))}get _step(){return this.step??1}_incrementValue(e){if(e.stopPropagation(),null==this.value)return;const t=He(this.value+this._step,this._precision);this._processNewValue(t)}_decrementValue(e){if(e.stopPropagation(),null==this.value)return;const t=He(this.value-this._step,this._precision);this._processNewValue(t)}firstUpdated(e){super.firstUpdated(e);const t=(e=>{const t=window.getComputedStyle(e).getPropertyValue("--input-number-debounce"),o=parseFloat(t);return isNaN(o)?2e3:o})(this.container);t&&(this.debounceDispatchValue=((e,t,o=!1)=>{let i;const n=(...n)=>{const r=o&&!i;clearTimeout(i),i=window.setTimeout((()=>{i=void 0,o||e(...n)}),t),r&&e(...n)};return n.cancel=()=>{clearTimeout(i)},n})(this.dispatchValue,t))}_processNewValue(e){const t=((e,t,o)=>{let i;return i=t?Math.max(e,t):e,i=o?Math.min(i,o):i,i})(e,this.min,this.max);this.value!==t&&(this.value=t,this.pending=!0),this.debounceDispatchValue(t)}render(){const e=null!=this.value?Ne(this.value,this.locale,this.formatOptions):"-";return q`
      <div class="container" id="container">
        <button
          class="button minus"
          @click=${this._decrementValue}
          .disabled=${this.disabled}
        >
          <ha-icon icon="mdi:minus"></ha-icon>
        </button>
        <span
          class=${Ee({value:!0,pending:this.pending,disabled:this.disabled})}
        >
          ${e}
        </span>
        <button
          class="button plus"
          @click=${this._incrementValue}
          .disabled=${this.disabled}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
      </div>
    `}static get styles(){return h`
      :host {
        --text-color: var(--primary-text-color);
        --text-color-disabled: rgb(var(--rgb-disabled));
        --icon-color: var(--primary-text-color);
        --icon-color-disabled: rgb(var(--rgb-disabled));
        --bg-color: rgba(var(--rgb-primary-text-color), 0.05);
        --bg-color-disabled: rgba(var(--rgb-disabled), 0.2);
        height: var(--control-height);
        width: calc(var(--control-height) * var(--control-button-ratio) * 3);
        flex: none;
      }
      .container {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: var(--control-border-radius);
        border: none;
        background-color: var(--bg-color);
        transition: background-color 280ms ease-in-out;
        height: var(--control-height);
        overflow: hidden;
      }
      .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 4px;
        border: none;
        background: none;
        cursor: pointer;
        border-radius: var(--control-border-radius);
        line-height: 0;
        height: 100%;
      }
      .minus {
        padding-right: 0;
      }
      .plus {
        padding-left: 0;
      }
      .button:disabled {
        cursor: not-allowed;
      }
      .button ha-icon {
        font-size: var(--control-height);
        --mdc-icon-size: var(--control-icon-size);
        color: var(--icon-color);
        pointer-events: none;
      }
      .button:disabled ha-icon {
        color: var(--icon-color-disabled);
      }
      .value {
        text-align: center;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 20px;
        font-weight: bold;
        color: var(--text-color);
      }
      .value.disabled {
        color: var(--text-color-disabled);
      }
      .value.pending {
        opacity: 0.5;
      }
    `}};n([ve({attribute:!1})],Mp.prototype,"locale",void 0),n([ve({type:Boolean})],Mp.prototype,"disabled",void 0),n([ve({attribute:!1,type:Number,reflect:!0})],Mp.prototype,"value",void 0),n([ve({type:Number})],Mp.prototype,"step",void 0),n([ve({type:Number})],Mp.prototype,"min",void 0),n([ve({type:Number})],Mp.prototype,"max",void 0),n([ve({attribute:!1})],Mp.prototype,"formatOptions",void 0),n([ye()],Mp.prototype,"pending",void 0),n([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e,t){return(t,o,i)=>((e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o))(t,o,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}("#container")],Mp.prototype,"container",void 0),Mp=n([ge("mushroom-input-number")],Mp);var Sp=Object.freeze({__proto__:null,get InputNumber(){return Mp}});et({tap_action:tt(Mt),hold_action:tt(Mt),double_tap_action:tt(Mt)});et({layout:tt(rt([Qe("horizontal"),Qe("vertical"),Qe("default")])),fill_container:tt(Ye()),primary_info:tt(Je(uc)),secondary_info:tt(Je(uc)),icon_type:tt(Je(["icon","entity-picture","none"]))});const $p=[{type:"grid",name:"",schema:[{name:"layout",selector:{mush_layout:{}}},{name:"fill_container",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"primary_info",selector:{mush_info:{}}},{name:"secondary_info",selector:{mush_info:{}}},{name:"icon_type",selector:{mush_icon_type:{}}}]}],Tp=["color","icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation","picture"],Pp=()=>{customElements.get("ha-form")&&customElements.get("hui-card-features-editor")||customElements.get("hui-tile-card")?.getConfigElement(),customElements.get("ha-entity-picker")||customElements.get("hui-entities-card")?.getConfigElement(),customElements.get("ha-card-conditions-editor")||customElements.get("hui-conditional-card")?.getConfigElement()},jp=["show_temperature_control","collapsible_controls","show_current_as_primary","show_secondary","show_plus_minus","show_mode_buttons","disable_menu","prevent_interaction_on_scroll","disable_eco","disable_humidity","show_presets","show_all_presets","disable_battery_warning","disable_connection_lost_warning","disable_degraded_warning","debug_battery","debug_connection","debug_degraded","low_battery_threshold","window_sensor","humidity_sensor","preset_entity","connectivity_entity","color_source","section_display","section_interaction","section_warnings","section_sensors"],Op=e=>(e??"").split(",").filter((e=>e&&"none"!==e));function Ip(e){const t={};for(const[o,i]of Object.entries(e)){const e={};i.hidden&&(e.hidden=!0),i.icon&&(e.icon=i.icon),Object.keys(e).length>0&&(t[o]=e)}return Object.keys(t).length>0?t:void 0}const Dp=()=>({name:"section_sensors",type:"expandable",flatten:!0,iconPath:rp,schema:[{name:"window_sensor",selector:{entity:{domain:["binary_sensor","input_boolean"]}}},{name:"humidity_sensor",selector:{entity:{domain:["sensor"],device_class:"humidity"}}},{name:"preset_entity",selector:{entity:{domain:["select","input_select"]}}},{name:"connectivity_entity",selector:{entity:{domain:["binary_sensor"]}}}]}),Hp=e=>({name:"section_display",type:"expandable",flatten:!0,iconPath:"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",schema:[{type:"grid",name:"",schema:e.map((e=>({...e,selector:{boolean:{}}})))}]}),Np=gt(((e,t,o,i)=>{const n=(void 0===e?[...kc]:kc.filter((t=>e.split(",").includes(t)))).filter((e=>"off"!==e)),r=void 0===t?[...xc]:xc.filter((e=>t.split(",").map((e=>e.toLowerCase())).includes(e)));return{name:"colors",type:"expandable",iconPath:"M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",schema:[{name:"color_source",selector:{select:{mode:"dropdown",options:[{value:"preset",label:o??"Preset"},{value:"hvac",label:i??"HVAC mode"}]}}},{type:"grid",name:"",schema:[...n,...r].map((e=>({name:e,selector:{ui_color:{}}})))}]}})),Bp=(e,t,o,i)=>{if(zc.includes(o))return t?kc.includes(o)?e.formatEntityState(t,o):e.formatEntityAttributeValue(t,"preset_mode",o):e.localize(`component.climate.entity_component._.state.${o}`)||e.localize(`component.climate.entity_component._.state_attributes.preset_mode.state.${o}`)||i(`editor.card.climate.${o}`)||o},Lp=e=>({name:"section_interaction",type:"expandable",flatten:!0,iconPath:"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",schema:[{type:"grid",name:"",schema:e.map((e=>({...e,selector:{boolean:{}}})))}]}),Rp=e=>({name:"section_warnings",type:"expandable",flatten:!0,iconPath:op,schema:[{type:"grid",name:"",schema:[{name:"disable_battery_warning",selector:{boolean:{}}},{name:"disable_connection_lost_warning",selector:{boolean:{}}},{name:"disable_degraded_warning",selector:{boolean:{}}},{name:"debug_battery",selector:{boolean:{}}},{name:"debug_connection",selector:{boolean:{}}},{name:"debug_degraded",selector:{boolean:{}}}]},{name:"low_battery_threshold",default:10,selector:{number:{min:0,max:100,step:1,mode:"box",unit_of_measurement:"%"}}}]})
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Vp={},Up=xe(class extends ze{constructor(){super(...arguments),this.ot=Vp}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every(((e,t)=>e===this.ot[t])))return Y}else if(this.ot===t)return Y;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});let Fp;const Gp={icon:{}},Kp={boolean:{}};let Zp=class extends me{constructor(){super(...arguments),this.presets=[],this._attached=!1,this._renderEmptySortable=!1}connectedCallback(){super.connectedCallback(),this._attached=!0}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1}render(){return this.hass?q`
      <div class="presets">
        ${Up([this.presets,this._renderEmptySortable],(()=>this._renderEmptySortable?"":this.presets.map((e=>this._renderRow(e)))))}
      </div>
    `:J}_renderRow(e){const t=this.options?.[e],o=this.getLabel?.(e)??e,i=(this.showLabelTemplate??"Show {preset}").replace("{preset}",o);return q`
      <div class="preset-row">
        <div class="handle">
          <ha-icon icon="mdi:drag"></ha-icon>
        </div>
        <ha-selector
          class="icon"
          .hass=${this.hass}
          .selector=${Gp}
          .label=${o}
          .value=${t?.icon??""}
          @value-changed=${t=>this._iconChanged(e,t)}
        ></ha-selector>
        <ha-selector
          class="show"
          title=${i}
          aria-label=${i}
          .hass=${this.hass}
          .selector=${Kp}
          .value=${!t?.hidden}
          @value-changed=${t=>this._visibilityChanged(e,t)}
        ></ha-selector>
      </div>
    `}updated(e){super.updated(e);const t=e.has("_attached"),o=e.has("presets");if(o||t)return t&&!this._attached?(this._sortable?.destroy(),void(this._sortable=void 0)):void(this._sortable||!this.presets.length?o&&this._handlePresetsChanged():this._createSortable())}async _handlePresetsChanged(){this._renderEmptySortable=!0,await this.updateComplete;const e=this.shadowRoot.querySelector(".presets");for(;e.lastElementChild;)e.removeChild(e.lastElementChild);this._renderEmptySortable=!1}async _createSortable(){if(!Fp){const e=await Promise.resolve().then((function(){return zg}));Fp=e.Sortable,Fp.mount(e.OnSpill),Fp.mount(e.AutoScroll())}this._sortable=new Fp(this.shadowRoot.querySelector(".presets"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onEnd:e=>this._rowMoved(e)})}_rowMoved(e){if(e.oldIndex===e.newIndex)return;const t=this.presets.concat();t.splice(e.newIndex,0,t.splice(e.oldIndex,1)[0]),this._fireChanged(t,this.options??{})}_iconChanged(e,t){t.stopPropagation(),this._fireChanged(this.presets,{...this.options,[e]:{...this.options?.[e],icon:t.detail.value||void 0}})}_visibilityChanged(e,t){t.stopPropagation(),this._fireChanged(this.presets,{...this.options,[e]:{...this.options?.[e],hidden:!t.detail.value||void 0}})}_fireChanged(e,t){Se(this,"bt-presets-changed",{order:[...e],options:t})}static get styles(){return[St,h`
        .preset-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .preset-row .handle {
          cursor: move;
          color: var(--secondary-text-color);
          display: flex;
        }

        .preset-row .handle > * {
          pointer-events: none;
        }

        .preset-row .icon {
          flex: 1;
          min-width: 0;
        }
      `]}};n([ve({attribute:!1})],Zp.prototype,"hass",void 0),n([ve({attribute:!1})],Zp.prototype,"presets",void 0),n([ve({attribute:!1})],Zp.prototype,"options",void 0),n([ve({attribute:!1})],Zp.prototype,"getLabel",void 0),n([ve()],Zp.prototype,"showLabelTemplate",void 0),n([ye()],Zp.prototype,"_attached",void 0),n([ye()],Zp.prototype,"_renderEmptySortable",void 0),Zp=n([ge("bt-presets-editor")],Zp);const Wp=gt(((e,t,o,i,n)=>[{name:"entity",selector:{entity:{domain:bc}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},...$p,...e?[]:[Dp()],Hp([{name:"show_temperature_control"},{name:"collapsible_controls"},{name:"disable_humidity"}]),Np(t,o,i,n)])),qp=gt((e=>{return[Lp([{name:"show_mode_buttons"},{name:"disable_eco"},{name:"show_presets"},{name:"show_all_presets"}]),...e?[Rp()]:[],{name:"tap_action",selector:{ui_action:{actions:t}}},{name:"hold_action",selector:{ui_action:{actions:t}}},{name:"double_tap_action",selector:{ui_action:{actions:t}}}];var t}));let Xp=class extends lc{constructor(){super(...arguments),this._computeLabel=e=>{const t=$h(this.hass);if("colors"===e.name)return t("editor.card.climate.section_colors");const o=Bp(this.hass,this._stateObj,e.name,t);return void 0!==o?o:Tp.includes(e.name)?t(`editor.card.generic.${e.name}`):jp.includes(e.name)?t(`editor.card.climate.${e.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)},this._computeHelper=e=>"colors"===e.name?$h(this.hass)("editor.card.climate.section_colors_helper"):void 0}static get styles(){const e=super.styles;return[...Array.isArray(e)?e:[e],h`
        :host {
          display: block;
          padding-bottom: 16px;
        }
        ha-alert {
          display: block;
          margin-bottom: 16px;
        }
        ha-expansion-panel.section-presets {
          display: block;
          margin: 24px 0;
        }
        .section-presets .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-presets .content {
          padding: 16px 8px 4px;
        }
      `]}connectedCallback(){super.connectedCallback(),Pp()}setConfig(e){this._config=e}get _stateObj(){return this._config?.entity?this.hass?.states[this._config.entity]:void 0}get _presetModesString(){const e=this._config?.preset_entity?this.hass?.states[this._config.preset_entity]:void 0;if(e)return(e.attributes.options??[]).join(",");const t=this._stateObj;return t?(t.attributes.preset_modes??[]).join(","):void 0}render(){if(!this.hass||!this._config)return J;const e=this._stateObj,t=!!e&&qc(e),o=!e&&!!this._config.entity,i=this._presetModesString,n=$h(this.hass),r=Wp(t,e?(e.attributes.hvac_modes??[]).join(","):void 0,i,n("editor.card.climate.color_source_preset"),n("editor.card.climate.color_source_hvac")),a=qp(t),s=Uc(Op(i),this._config.preset_order),l={low_battery_threshold:10,...this._config,show_mode_buttons:Tt(this._config),show_presets:!this._config.disable_presets};return q`
      ${o?q`
            <ha-alert alert-type="warning">
              ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity})}
            </ha-alert>
          `:J}
      ${e&&!t?q`
            <ha-alert alert-type="info">
              ${n("editor.card.climate.not_bt_info")}
            </ha-alert>
          `:J}
      <ha-form
        .hass=${this.hass}
        .data=${l}
        .schema=${r}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
      ${s.length?q`
            <ha-expansion-panel outlined class="section-presets">
              <div slot="header" class="section-header">
                <ha-svg-icon .path=${np}></ha-svg-icon>
                ${n("editor.card.climate.section_presets")}
              </div>
              <div class="content">
                <bt-presets-editor
                  .hass=${this.hass}
                  .presets=${s}
                  .options=${this._config.preset_options}
                  .getLabel=${t=>e?Kc(this.hass,e,t,this._config?.preset_entity):t}
                  .showLabelTemplate=${n("editor.card.climate.preset_show")}
                  @bt-presets-changed=${this._presetsChanged}
                ></bt-presets-editor>
              </div>
            </ha-expansion-panel>
          `:J}
      <ha-form
        .hass=${this.hass}
        .data=${l}
        .schema=${a}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_presetsChanged(e){if(e.stopPropagation(),!this._config)return;const t={...this._config},o=Ip(e.detail.options);o?t.preset_options=o:delete t.preset_options;const i=Op(this._presetModesString);e.detail.order.join(" ")!==i.join(" ")?t.preset_order=e.detail.order:delete t.preset_order,this._config=t,Se(this,"config-changed",{config:t})}_valueChanged(e){const t={...e.detail.value};if(void 0!==t.show_mode_buttons&&delete t.disable_all_buttons,void 0!==t.show_presets&&(t.disable_presets=!t.show_presets,delete t.show_presets),t.colors){const e=Object.fromEntries(Object.entries(t.colors).filter((([,e])=>e)));0===Object.keys(e).length?delete t.colors:t.colors=e}Se(this,"config-changed",{config:t})}};n([ye()],Xp.prototype,"_config",void 0),Xp=n([ge(fc)],Xp);var Yp=Object.freeze({__proto__:null,get ClimateCardEditor(){return Xp}});const Jp=gt(((e,t,o,i,n)=>[{name:"entity",selector:{entity:{domain:tp}}},{name:"name",selector:{text:{}}},...e?[]:[Dp()],Hp([{name:"show_current_as_primary"},{name:"show_secondary"},{name:"disable_humidity"}]),Np(t,o,i,n)])),Qp=gt((e=>[Lp([{name:"show_mode_buttons"},{name:"show_plus_minus"},{name:"show_presets"},{name:"show_all_presets"},{name:"disable_menu"},{name:"prevent_interaction_on_scroll"}]),...e?[Rp()]:[]]));let em=class extends lc{static get styles(){const e=super.styles;return[...Array.isArray(e)?e:e?[e]:[],h`
        :host {
          display: block;
          padding-bottom: 16px;
        }
        ha-alert {
          display: block;
          margin-bottom: 16px;
        }
        ha-expansion-panel.section-presets {
          display: block;
          margin: 24px 0;
        }
        .section-presets .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-presets .content {
          padding: 16px 8px 4px;
        }
      `]}connectedCallback(){super.connectedCallback(),Pp()}setConfig(e){this._config=e}get _stateObj(){return this._config?.entity?this.hass?.states[this._config.entity]:void 0}get _presetModesString(){const e=this._config?.preset_entity?this.hass?.states[this._config.preset_entity]:void 0;if(e)return(e.attributes.options??[]).join(",");const t=this._stateObj;return t?(t.attributes.preset_modes??[]).join(","):void 0}render(){if(!this.hass)return q``;const e=$h(this.hass),t=this._stateObj,o=!t||qc(t),i=this._presetModesString,n=Jp(o,t?(t.attributes.hvac_modes??[]).join(","):void 0,i,e("editor.card.climate.color_source_preset"),e("editor.card.climate.color_source_hvac")),r=Qp(o),a=Uc(Op(i),this._config?.preset_order),s={...this._config,low_battery_threshold:this._config?.low_battery_threshold??10,show_secondary:this._config?.show_secondary??!0,show_plus_minus:!(this._config?.disable_buttons??1),show_presets:!this._config?.disable_presets,show_mode_buttons:!this._config||Tt(this._config)},l=o=>{if("entity"===o.name)return e("ui.panel.lovelace.editor.card.generic.entity")||o.name;if("colors"===o.name)return e("editor.card.climate.section_colors")||o.name;const i=Bp(this.hass,t,o.name,e);return void 0!==i?i:Tp.includes(o.name)?e(`editor.card.generic.${o.name}`)||o.name:e(`editor.card.climate.${o.name}`)||o.name},c=t=>"colors"===t.name?e("editor.card.climate.section_colors_helper"):void 0;return q`
      ${o?"":q`
            <ha-alert alert-type="info">
              ${e("editor.card.climate.not_bt_info")}
            </ha-alert>
          `}
      <ha-form
        .hass=${this.hass}
        .data=${s}
        .schema=${n}
        .computeLabel=${l}
        .computeHelper=${c}
        @value-changed=${this._valueChanged}
      ></ha-form>
      ${a.length?q`
            <ha-expansion-panel outlined class="section-presets">
              <div slot="header" class="section-header">
                <ha-svg-icon .path=${np}></ha-svg-icon>
                ${e("editor.card.climate.section_presets")}
              </div>
              <div class="content">
                <bt-presets-editor
                  .hass=${this.hass}
                  .presets=${a}
                  .options=${this._config?.preset_options}
                  .getLabel=${e=>t?Kc(this.hass,t,e,this._config?.preset_entity):e}
                  .showLabelTemplate=${e("editor.card.climate.preset_show")}
                  @bt-presets-changed=${this._presetsChanged}
                ></bt-presets-editor>
              </div>
            </ha-expansion-panel>
          `:J}
      <ha-form
        .hass=${this.hass}
        .data=${s}
        .schema=${r}
        .computeLabel=${l}
        .computeHelper=${c}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_presetsChanged(e){if(e.stopPropagation(),!this._config)return;const t={...this._config},o=Ip(e.detail.options);o?t.preset_options=o:delete t.preset_options;const i=Op(this._presetModesString);e.detail.order.join("\0")!==i.join("\0")?t.preset_order=e.detail.order:delete t.preset_order,this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_valueChanged(e){e.stopPropagation();const t={...e.detail.value};if(void 0!==t.show_mode_buttons&&delete t.disable_all_buttons,void 0!==t.show_plus_minus&&(t.disable_buttons=!t.show_plus_minus,delete t.show_plus_minus),void 0!==t.show_presets&&(t.disable_presets=!t.show_presets,delete t.show_presets),t.colors){const e=Object.fromEntries(Object.entries(t.colors).filter((([,e])=>e)));0===Object.keys(e).length?delete t.colors:t.colors=e}this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}};n([ye()],em.prototype,"_config",void 0),em=n([ge(ep)],em);var tm=Object.freeze({__proto__:null,get NormalClimateCardEditor(){return em}});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function om(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function im(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?om(Object(o),!0).forEach((function(t){rm(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):om(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function nm(e){return nm="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nm(e)}function rm(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function am(){return am=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},am.apply(this,arguments)}function sm(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function lm(e){return function(e){if(Array.isArray(e))return cm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return cm(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return cm(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function cm(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}function um(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}var dm=um(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),hm=um(/Edge/i),pm=um(/firefox/i),mm=um(/safari/i)&&!um(/chrome/i)&&!um(/android/i),_m=um(/iP(ad|od|hone)/i),gm=um(/chrome/i)&&um(/android/i),fm={capture:!1,passive:!1};function bm(e,t,o){e.addEventListener(t,o,!dm&&fm)}function vm(e,t,o){e.removeEventListener(t,o,!dm&&fm)}function ym(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function wm(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function km(e,t,o,i){if(e){o=o||document;do{if(null!=t&&(">"===t[0]?e.parentNode===o&&ym(e,t):ym(e,t))||i&&e===o)return e;if(e===o)break}while(e=wm(e))}return null}var xm,zm=/\s+/g;function Em(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(zm," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(zm," ")}}function Cm(e,t,o){var i=e&&e.style;if(i){if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=o+("string"==typeof o?"":"px")}}function Am(e,t){var o="";if("string"==typeof e)o=e;else do{var i=Cm(e,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function Mm(e,t,o){if(e){var i=e.getElementsByTagName(t),n=0,r=i.length;if(o)for(;n<r;n++)o(i[n],n);return i}return[]}function Sm(){var e=document.scrollingElement;return e||document.documentElement}function $m(e,t,o,i,n){if(e.getBoundingClientRect||e===window){var r,a,s,l,c,u,d;if(e!==window&&e.parentNode&&e!==Sm()?(a=(r=e.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,u=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||o)&&e!==window&&(n=n||e.parentNode,!dm))do{if(n&&n.getBoundingClientRect&&("none"!==Cm(n,"transform")||o&&"static"!==Cm(n,"position"))){var h=n.getBoundingClientRect();a-=h.top+parseInt(Cm(n,"border-top-width")),s-=h.left+parseInt(Cm(n,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(n=n.parentNode);if(i&&e!==window){var p=Am(n||e),m=p&&p.a,_=p&&p.d;p&&(l=(a/=_)+(u/=_),c=(s/=m)+(d/=m))}return{top:a,left:s,bottom:l,right:c,width:d,height:u}}}function Tm(e,t,o){for(var i=Dm(e,!0),n=$m(e)[t];i;){if(!(n>=$m(i)[o]))return i;if(i===Sm())break;i=Dm(i,!1)}return!1}function Pm(e,t,o,i){for(var n=0,r=0,a=e.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==U_.ghost&&(i||a[r]!==U_.dragged)&&km(a[r],o.draggable,e,!1)){if(n===t)return a[r];n++}r++}return null}function jm(e,t){for(var o=e.lastElementChild;o&&(o===U_.ghost||"none"===Cm(o,"display")||t&&!ym(o,t));)o=o.previousElementSibling;return o||null}function Om(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===U_.clone||t&&!ym(e,t)||o++;return o}function Im(e){var t=0,o=0,i=Sm();if(e)do{var n=Am(e),r=n.a,a=n.d;t+=e.scrollLeft*r,o+=e.scrollTop*a}while(e!==i&&(e=e.parentNode));return[t,o]}function Dm(e,t){if(!e||!e.getBoundingClientRect)return Sm();var o=e,i=!1;do{if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=Cm(o);if(o.clientWidth<o.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!o.getBoundingClientRect||o===document.body)return Sm();if(i||t)return o;i=!0}}}while(o=o.parentNode);return Sm()}function Hm(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function Nm(e,t){return function(){if(!xm){var o=arguments;1===o.length?e.call(this,o[0]):e.apply(this,o),xm=setTimeout((function(){xm=void 0}),t)}}}function Bm(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function Lm(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function Rm(e,t){Cm(e,"position","absolute"),Cm(e,"top",t.top),Cm(e,"left",t.left),Cm(e,"width",t.width),Cm(e,"height",t.height)}function Vm(e){Cm(e,"position",""),Cm(e,"top",""),Cm(e,"left",""),Cm(e,"width",""),Cm(e,"height","")}function Um(e,t,o){var i={};return Array.from(e.children).forEach((function(n){var r,a,s,l;if(km(n,t.draggable,e,!1)&&!n.animated&&n!==o){var c=$m(n);i.left=Math.min(null!==(r=i.left)&&void 0!==r?r:1/0,c.left),i.top=Math.min(null!==(a=i.top)&&void 0!==a?a:1/0,c.top),i.right=Math.max(null!==(s=i.right)&&void 0!==s?s:-1/0,c.right),i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,c.bottom)}})),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var Fm="Sortable"+(new Date).getTime();function Gm(){var e,t=[];return{captureAnimationState:function(){(t=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(e){if("none"!==Cm(e,"display")&&e!==U_.ghost){t.push({target:e,rect:$m(e)});var o=im({},t[t.length-1].rect);if(e.thisAnimationDuration){var i=Am(e,!0);i&&(o.top-=i.f,o.left-=i.e)}e.fromRect=o}}))},addAnimationState:function(e){t.push(e)},removeAnimationState:function(e){t.splice(function(e,t){for(var o in e)if(e.hasOwnProperty(o))for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o);return-1}(t,{target:e}),1)},animateAll:function(o){var i=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof o&&o());var n=!1,r=0;t.forEach((function(e){var t=0,o=e.target,a=o.fromRect,s=$m(o),l=o.prevFromRect,c=o.prevToRect,u=e.rect,d=Am(o,!0);d&&(s.top-=d.f,s.left-=d.e),o.toRect=s,o.thisAnimationDuration&&Hm(l,s)&&!Hm(a,s)&&(u.top-s.top)/(u.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(t=function(e,t,o,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*i.animation}(u,l,c,i.options)),Hm(s,a)||(o.prevFromRect=a,o.prevToRect=s,t||(t=i.options.animation),i.animate(o,u,s,t)),t&&(n=!0,r=Math.max(r,t),clearTimeout(o.animationResetTimer),o.animationResetTimer=setTimeout((function(){o.animationTime=0,o.prevFromRect=null,o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null}),t),o.thisAnimationDuration=t)})),clearTimeout(e),n?e=setTimeout((function(){"function"==typeof o&&o()}),r):"function"==typeof o&&o(),t=[]},animate:function(e,t,o,i){if(i){Cm(e,"transition",""),Cm(e,"transform","");var n=Am(this.el),r=n&&n.a,a=n&&n.d,s=(t.left-o.left)/(r||1),l=(t.top-o.top)/(a||1);e.animatingX=!!s,e.animatingY=!!l,Cm(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),Cm(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),Cm(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout((function(){Cm(e,"transition",""),Cm(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1}),i)}}}}var Km=[],Zm={initializeByDefault:!0},Wm={mount:function(e){for(var t in Zm)Zm.hasOwnProperty(t)&&!(t in e)&&(e[t]=Zm[t]);Km.forEach((function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")})),Km.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var n=e+"Global";Km.forEach((function(i){t[i.pluginName]&&(t[i.pluginName][n]&&t[i.pluginName][n](im({sortable:t},o)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](im({sortable:t},o)))}))},initializePlugins:function(e,t,o,i){for(var n in Km.forEach((function(i){var n=i.pluginName;if(e.options[n]||i.initializeByDefault){var r=new i(e,t,e.options);r.sortable=e,r.options=e.options,e[n]=r,am(o,r.defaults)}})),e.options)if(e.options.hasOwnProperty(n)){var r=this.modifyOption(e,n,e.options[n]);void 0!==r&&(e.options[n]=r)}},getEventProperties:function(e,t){var o={};return Km.forEach((function(i){"function"==typeof i.eventProperties&&am(o,i.eventProperties.call(t[i.pluginName],e))})),o},modifyOption:function(e,t,o){var i;return Km.forEach((function(n){e[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[t]&&(i=n.optionListeners[t].call(e[n.pluginName],o))})),i}};function qm(e){var t=e.sortable,o=e.rootEl,i=e.name,n=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,u=e.oldDraggableIndex,d=e.newDraggableIndex,h=e.originalEvent,p=e.putSortable,m=e.extraEventProperties;if(t=t||o&&o[Fm]){var _,g=t.options,f="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||dm||hm?(_=document.createEvent("Event")).initEvent(i,!0,!0):_=new CustomEvent(i,{bubbles:!0,cancelable:!0}),_.to=a||o,_.from=s||o,_.item=n||o,_.clone=r,_.oldIndex=l,_.newIndex=c,_.oldDraggableIndex=u,_.newDraggableIndex=d,_.originalEvent=h,_.pullMode=p?p.lastPutMode:void 0;var b=im(im({},m),Wm.getEventProperties(i,t));for(var v in b)_[v]=b[v];o&&o.dispatchEvent(_),g[f]&&g[f].call(t,_)}}var Xm=["evt"],Ym=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,n=sm(o,Xm);Wm.pluginEvent.bind(U_)(e,t,im({dragEl:Qm,parentEl:e_,ghostEl:t_,rootEl:o_,nextEl:i_,lastDownEl:n_,cloneEl:r_,cloneHidden:a_,dragStarted:v_,putSortable:h_,activeSortable:U_.active,originalEvent:i,oldIndex:s_,oldDraggableIndex:c_,newIndex:l_,newDraggableIndex:u_,hideGhostForTarget:B_,unhideGhostForTarget:L_,cloneNowHidden:function(){a_=!0},cloneNowShown:function(){a_=!1},dispatchSortableEvent:function(e){Jm({sortable:t,name:e,originalEvent:i})}},n))};function Jm(e){qm(im({putSortable:h_,cloneEl:r_,targetEl:Qm,rootEl:o_,oldIndex:s_,oldDraggableIndex:c_,newIndex:l_,newDraggableIndex:u_},e))}var Qm,e_,t_,o_,i_,n_,r_,a_,s_,l_,c_,u_,d_,h_,p_,m_,__,g_,f_,b_,v_,y_,w_,k_,x_,z_=!1,E_=!1,C_=[],A_=!1,M_=!1,S_=[],$_=!1,T_=[],P_="undefined"!=typeof document,j_=_m,O_=hm||dm?"cssFloat":"float",I_=P_&&!gm&&!_m&&"draggable"in document.createElement("div"),D_=function(){if(P_){if(dm)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),H_=function(e,t){var o=Cm(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),n=Pm(e,0,t),r=Pm(e,1,t),a=n&&Cm(n),s=r&&Cm(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+$m(n).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+$m(r).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==u?"horizontal":"vertical"}return n&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=i&&"none"===o[O_]||r&&"none"===o[O_]&&l+c>i)?"vertical":"horizontal"},N_=function(e){function t(e,o){return function(i,n,r,a){var s=i.options.group.name&&n.options.group.name&&i.options.group.name===n.options.group.name;if(null==e&&(o||s))return!0;if(null==e||!1===e)return!1;if(o&&"clone"===e)return e;if("function"==typeof e)return t(e(i,n,r,a),o)(i,n,r,a);var l=(o?i:n).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var o={},i=e.group;i&&"object"==nm(i)||(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},B_=function(){!D_&&t_&&Cm(t_,"display","none")},L_=function(){!D_&&t_&&Cm(t_,"display","")};P_&&!gm&&document.addEventListener("click",(function(e){if(E_)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),E_=!1,!1}),!0);var R_=function(e){if(Qm){var t=function(e,t){var o;return C_.some((function(i){var n=i[Fm].options.emptyInsertThreshold;if(n&&!jm(i)){var r=$m(i),a=e>=r.left-n&&e<=r.right+n,s=t>=r.top-n&&t<=r.bottom+n;return a&&s?o=i:void 0}})),o}((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[Fm]._onDragOver(o)}}},V_=function(e){Qm&&Qm.parentNode[Fm]._isOutsideThisEl(e.target)};function U_(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=am({},t),e[Fm]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return H_(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==U_.supportPointer&&"PointerEvent"in window&&(!mm||_m),emptyInsertThreshold:5};for(var i in Wm.initializePlugins(this,e,o),o)!(i in t)&&(t[i]=o[i]);for(var n in N_(t),this)"_"===n.charAt(0)&&"function"==typeof this[n]&&(this[n]=this[n].bind(this));this.nativeDraggable=!t.forceFallback&&I_,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?bm(e,"pointerdown",this._onTapStart):(bm(e,"mousedown",this._onTapStart),bm(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(bm(e,"dragover",this),bm(e,"dragenter",this)),C_.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),am(this,Gm())}function F_(e,t,o,i,n,r,a,s){var l,c,u=e[Fm],d=u.options.onMove;return!window.CustomEvent||dm||hm?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=n||t,l.relatedRect=r||$m(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),d&&(c=d.call(u,l,a)),c}function G_(e){e.draggable=!1}function K_(){$_=!1}function Z_(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}function W_(e){return setTimeout(e,0)}function q_(e){return clearTimeout(e)}U_.prototype={constructor:U_,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(y_=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,Qm):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,n=i.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(a||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=i.filter;if(function(e){T_.length=0;var t=e.getElementsByTagName("input"),o=t.length;for(;o--;){var i=t[o];i.checked&&T_.push(i)}}(o),!Qm&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!mm||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=km(s,i.draggable,o,!1))&&s.animated||n_===s)){if(s_=Om(s),c_=Om(s,i.draggable),"function"==typeof c){if(c.call(this,e,s,this))return Jm({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:o,fromEl:o}),Ym("filter",t,{evt:e}),void(n&&e.preventDefault())}else if(c&&(c=c.split(",").some((function(i){if(i=km(l,i.trim(),o,!1))return Jm({sortable:t,rootEl:i,name:"filter",targetEl:s,fromEl:o,toEl:o}),Ym("filter",t,{evt:e}),!0}))))return void(n&&e.preventDefault());i.handle&&!km(l,i.handle,o,!1)||this._prepareDragStart(e,a,s)}}},_prepareDragStart:function(e,t,o){var i,n=this,r=n.el,a=n.options,s=r.ownerDocument;if(o&&!Qm&&o.parentNode===r){var l=$m(o);if(o_=r,e_=(Qm=o).parentNode,i_=Qm.nextSibling,n_=o,d_=a.group,U_.dragged=Qm,p_={target:Qm,clientX:(t||e).clientX,clientY:(t||e).clientY},f_=p_.clientX-l.left,b_=p_.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,Qm.style["will-change"]="all",i=function(){Ym("delayEnded",n,{evt:e}),U_.eventCanceled?n._onDrop():(n._disableDelayedDragEvents(),!pm&&n.nativeDraggable&&(Qm.draggable=!0),n._triggerDragStart(e,t),Jm({sortable:n,name:"choose",originalEvent:e}),Em(Qm,a.chosenClass,!0))},a.ignore.split(",").forEach((function(e){Mm(Qm,e.trim(),G_)})),bm(s,"dragover",R_),bm(s,"mousemove",R_),bm(s,"touchmove",R_),a.supportPointer?(bm(s,"pointerup",n._onDrop),!this.nativeDraggable&&bm(s,"pointercancel",n._onDrop)):(bm(s,"mouseup",n._onDrop),bm(s,"touchend",n._onDrop),bm(s,"touchcancel",n._onDrop)),pm&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Qm.draggable=!0),Ym("delayStart",this,{evt:e}),!a.delay||a.delayOnTouchOnly&&!t||this.nativeDraggable&&(hm||dm))i();else{if(U_.eventCanceled)return void this._onDrop();a.supportPointer?(bm(s,"pointerup",n._disableDelayedDrag),bm(s,"pointercancel",n._disableDelayedDrag)):(bm(s,"mouseup",n._disableDelayedDrag),bm(s,"touchend",n._disableDelayedDrag),bm(s,"touchcancel",n._disableDelayedDrag)),bm(s,"mousemove",n._delayedDragTouchMoveHandler),bm(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&bm(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(i,a.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Qm&&G_(Qm),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;vm(e,"mouseup",this._disableDelayedDrag),vm(e,"touchend",this._disableDelayedDrag),vm(e,"touchcancel",this._disableDelayedDrag),vm(e,"pointerup",this._disableDelayedDrag),vm(e,"pointercancel",this._disableDelayedDrag),vm(e,"mousemove",this._delayedDragTouchMoveHandler),vm(e,"touchmove",this._delayedDragTouchMoveHandler),vm(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?bm(document,"pointermove",this._onTouchMove):bm(document,t?"touchmove":"mousemove",this._onTouchMove):(bm(Qm,"dragend",this),bm(o_,"dragstart",this._onDragStart));try{document.selection?W_((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(z_=!1,o_&&Qm){Ym("dragStarted",this,{evt:t}),this.nativeDraggable&&bm(document,"dragover",V_);var o=this.options;!e&&Em(Qm,o.dragClass,!1),Em(Qm,o.ghostClass,!0),U_.active=this,e&&this._appendGhost(),Jm({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(m_){this._lastX=m_.clientX,this._lastY=m_.clientY,B_();for(var e=document.elementFromPoint(m_.clientX,m_.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(m_.clientX,m_.clientY))!==t;)t=e;if(Qm.parentNode[Fm]._isOutsideThisEl(e),t)do{if(t[Fm]){if(t[Fm]._onDragOver({clientX:m_.clientX,clientY:m_.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break}e=t}while(t=wm(t));L_()}},_onTouchMove:function(e){if(p_){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,n=e.touches?e.touches[0]:e,r=t_&&Am(t_,!0),a=t_&&r&&r.a,s=t_&&r&&r.d,l=j_&&x_&&Im(x_),c=(n.clientX-p_.clientX+i.x)/(a||1)+(l?l[0]-S_[0]:0)/(a||1),u=(n.clientY-p_.clientY+i.y)/(s||1)+(l?l[1]-S_[1]:0)/(s||1);if(!U_.active&&!z_){if(o&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(t_){r?(r.e+=c-(__||0),r.f+=u-(g_||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Cm(t_,"webkitTransform",d),Cm(t_,"mozTransform",d),Cm(t_,"msTransform",d),Cm(t_,"transform",d),__=c,g_=u,m_=n}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!t_){var e=this.options.fallbackOnBody?document.body:o_,t=$m(Qm,!0,j_,!0,e),o=this.options;if(j_){for(x_=e;"static"===Cm(x_,"position")&&"none"===Cm(x_,"transform")&&x_!==document;)x_=x_.parentNode;x_!==document.body&&x_!==document.documentElement?(x_===document&&(x_=Sm()),t.top+=x_.scrollTop,t.left+=x_.scrollLeft):x_=Sm(),S_=Im(x_)}Em(t_=Qm.cloneNode(!0),o.ghostClass,!1),Em(t_,o.fallbackClass,!0),Em(t_,o.dragClass,!0),Cm(t_,"transition",""),Cm(t_,"transform",""),Cm(t_,"box-sizing","border-box"),Cm(t_,"margin",0),Cm(t_,"top",t.top),Cm(t_,"left",t.left),Cm(t_,"width",t.width),Cm(t_,"height",t.height),Cm(t_,"opacity","0.8"),Cm(t_,"position",j_?"absolute":"fixed"),Cm(t_,"zIndex","100000"),Cm(t_,"pointerEvents","none"),U_.ghost=t_,e.appendChild(t_),Cm(t_,"transform-origin",f_/parseInt(t_.style.width)*100+"% "+b_/parseInt(t_.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,n=o.options;Ym("dragStart",this,{evt:e}),U_.eventCanceled?this._onDrop():(Ym("setupClone",this),U_.eventCanceled||((r_=Lm(Qm)).removeAttribute("id"),r_.draggable=!1,r_.style["will-change"]="",this._hideClone(),Em(r_,this.options.chosenClass,!1),U_.clone=r_),o.cloneId=W_((function(){Ym("clone",o),U_.eventCanceled||(o.options.removeCloneOnHide||o_.insertBefore(r_,Qm),o._hideClone(),Jm({sortable:o,name:"clone"}))})),!t&&Em(Qm,n.dragClass,!0),t?(E_=!0,o._loopId=setInterval(o._emulateDragOver,50)):(vm(document,"mouseup",o._onDrop),vm(document,"touchend",o._onDrop),vm(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",n.setData&&n.setData.call(o,i,Qm)),bm(document,"drop",o),Cm(Qm,"transform","translateZ(0)")),z_=!0,o._dragStartId=W_(o._dragStarted.bind(o,t,e)),bm(document,"selectstart",o),v_=!0,window.getSelection().removeAllRanges(),mm&&Cm(document.body,"user-select","none"))},_onDragOver:function(e){var t,o,i,n,r=this.el,a=e.target,s=this.options,l=s.group,c=U_.active,u=d_===l,d=s.sort,h=h_||c,p=this,m=!1;if(!$_){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),a=km(a,s.draggable,r,!0),S("dragOver"),U_.eventCanceled)return m;if(Qm.contains(e.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return T(!1);if(E_=!1,c&&!s.disabled&&(u?d||(i=e_!==o_):h_===this||(this.lastPutMode=d_.checkPull(this,c,Qm,e))&&l.checkPut(this,c,Qm,e))){if(n="vertical"===this._getDirection(e,a),t=$m(Qm),S("dragOverValid"),U_.eventCanceled)return m;if(i)return e_=o_,$(),this._hideClone(),S("revert"),U_.eventCanceled||(i_?o_.insertBefore(Qm,i_):o_.appendChild(Qm)),T(!0);var _=jm(r,s.draggable);if(!_||function(e,t,o){var i=$m(jm(o.el,o.options.draggable)),n=Um(o.el,o.options,t_),r=10;return t?e.clientX>n.right+r||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>n.bottom+r||e.clientX>i.right&&e.clientY>i.top}(e,n,this)&&!_.animated){if(_===Qm)return T(!1);if(_&&r===e.target&&(a=_),a&&(o=$m(a)),!1!==F_(o_,r,Qm,t,a,o,e,!!a))return $(),_&&_.nextSibling?r.insertBefore(Qm,_.nextSibling):r.appendChild(Qm),e_=r,P(),T(!0)}else if(_&&function(e,t,o){var i=$m(Pm(o.el,0,o.options,!0)),n=Um(o.el,o.options,t_),r=10;return t?e.clientX<n.left-r||e.clientY<i.top&&e.clientX<i.right:e.clientY<n.top-r||e.clientY<i.bottom&&e.clientX<i.left}(e,n,this)){var g=Pm(r,0,s,!0);if(g===Qm)return T(!1);if(o=$m(a=g),!1!==F_(o_,r,Qm,t,a,o,e,!1))return $(),r.insertBefore(Qm,g),e_=r,P(),T(!0)}else if(a.parentNode===r){o=$m(a);var f,b,v,y=Qm.parentNode!==r,w=!function(e,t,o){var i=o?e.left:e.top,n=o?e.right:e.bottom,r=o?e.width:e.height,a=o?t.left:t.top,s=o?t.right:t.bottom,l=o?t.width:t.height;return i===a||n===s||i+r/2===a+l/2}(Qm.animated&&Qm.toRect||t,a.animated&&a.toRect||o,n),k=n?"top":"left",x=Tm(a,"top","top")||Tm(Qm,"top","top"),z=x?x.scrollTop:void 0;if(y_!==a&&(b=o[k],A_=!1,M_=!w&&s.invertSwap||y),f=function(e,t,o,i,n,r,a,s){var l=i?e.clientY:e.clientX,c=i?o.height:o.width,u=i?o.top:o.left,d=i?o.bottom:o.right,h=!1;if(!a)if(s&&k_<c*n){if(!A_&&(1===w_?l>u+c*r/2:l<d-c*r/2)&&(A_=!0),A_)h=!0;else if(1===w_?l<u+k_:l>d-k_)return-w_}else if(l>u+c*(1-n)/2&&l<d-c*(1-n)/2)return function(e){return Om(Qm)<Om(e)?1:-1}(t);if((h=h||a)&&(l<u+c*r/2||l>d-c*r/2))return l>u+c/2?1:-1;return 0}(e,a,o,n,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,M_,y_===a),0!==f){var E=Om(Qm);do{E-=f,v=e_.children[E]}while(v&&("none"===Cm(v,"display")||v===t_))}if(0===f||v===a)return T(!1);y_=a,w_=f;var C=a.nextElementSibling,A=!1,M=F_(o_,r,Qm,t,a,o,e,A=1===f);if(!1!==M)return 1!==M&&-1!==M||(A=1===M),$_=!0,setTimeout(K_,30),$(),A&&!C?r.appendChild(Qm):a.parentNode.insertBefore(Qm,A?C:a),x&&Bm(x,0,z-x.scrollTop),e_=Qm.parentNode,void 0===b||M_||(k_=Math.abs(b-$m(a)[k])),P(),T(!0)}if(r.contains(Qm))return T(!1)}return!1}function S(s,l){Ym(s,p,im({evt:e,isOwner:u,axis:n?"vertical":"horizontal",revert:i,dragRect:t,targetRect:o,canSort:d,fromSortable:h,target:a,completed:T,onMove:function(o,i){return F_(o_,r,Qm,t,o,$m(o),e,i)},changed:P},l))}function $(){S("dragOverAnimationCapture"),p.captureAnimationState(),p!==h&&h.captureAnimationState()}function T(t){return S("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(p),p!==h&&(Em(Qm,h_?h_.options.ghostClass:c.options.ghostClass,!1),Em(Qm,s.ghostClass,!0)),h_!==p&&p!==U_.active?h_=p:p===U_.active&&h_&&(h_=null),h===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){S("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(a===Qm&&!Qm.animated||a===r&&!a.animated)&&(y_=null),s.dragoverBubble||e.rootEl||a===document||(Qm.parentNode[Fm]._isOutsideThisEl(e.target),!t&&R_(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function P(){l_=Om(Qm),u_=Om(Qm,s.draggable),Jm({sortable:p,name:"change",toEl:r,newIndex:l_,newDraggableIndex:u_,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){vm(document,"mousemove",this._onTouchMove),vm(document,"touchmove",this._onTouchMove),vm(document,"pointermove",this._onTouchMove),vm(document,"dragover",R_),vm(document,"mousemove",R_),vm(document,"touchmove",R_)},_offUpEvents:function(){var e=this.el.ownerDocument;vm(e,"mouseup",this._onDrop),vm(e,"touchend",this._onDrop),vm(e,"pointerup",this._onDrop),vm(e,"pointercancel",this._onDrop),vm(e,"touchcancel",this._onDrop),vm(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;l_=Om(Qm),u_=Om(Qm,o.draggable),Ym("drop",this,{evt:e}),e_=Qm&&Qm.parentNode,l_=Om(Qm),u_=Om(Qm,o.draggable),U_.eventCanceled||(z_=!1,M_=!1,A_=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),q_(this.cloneId),q_(this._dragStartId),this.nativeDraggable&&(vm(document,"drop",this),vm(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),mm&&Cm(document.body,"user-select",""),Cm(Qm,"transform",""),e&&(v_&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),t_&&t_.parentNode&&t_.parentNode.removeChild(t_),(o_===e_||h_&&"clone"!==h_.lastPutMode)&&r_&&r_.parentNode&&r_.parentNode.removeChild(r_),Qm&&(this.nativeDraggable&&vm(Qm,"dragend",this),G_(Qm),Qm.style["will-change"]="",v_&&!z_&&Em(Qm,h_?h_.options.ghostClass:this.options.ghostClass,!1),Em(Qm,this.options.chosenClass,!1),Jm({sortable:this,name:"unchoose",toEl:e_,newIndex:null,newDraggableIndex:null,originalEvent:e}),o_!==e_?(l_>=0&&(Jm({rootEl:e_,name:"add",toEl:e_,fromEl:o_,originalEvent:e}),Jm({sortable:this,name:"remove",toEl:e_,originalEvent:e}),Jm({rootEl:e_,name:"sort",toEl:e_,fromEl:o_,originalEvent:e}),Jm({sortable:this,name:"sort",toEl:e_,originalEvent:e})),h_&&h_.save()):l_!==s_&&l_>=0&&(Jm({sortable:this,name:"update",toEl:e_,originalEvent:e}),Jm({sortable:this,name:"sort",toEl:e_,originalEvent:e})),U_.active&&(null!=l_&&-1!==l_||(l_=s_,u_=c_),Jm({sortable:this,name:"end",toEl:e_,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){Ym("nulling",this),o_=Qm=e_=t_=i_=r_=n_=a_=p_=m_=v_=l_=u_=s_=c_=y_=w_=h_=d_=U_.dragged=U_.ghost=U_.clone=U_.active=null,T_.forEach((function(e){e.checked=!0})),T_.length=__=g_=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":Qm&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move");e.cancelable&&e.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],o=this.el.children,i=0,n=o.length,r=this.options;i<n;i++)km(e=o[i],r.draggable,this.el,!1)&&t.push(e.getAttribute(r.dataIdAttr)||Z_(e));return t},sort:function(e,t){var o={},i=this.el;this.toArray().forEach((function(e,t){var n=i.children[t];km(n,this.options.draggable,i,!1)&&(o[e]=n)}),this),t&&this.captureAnimationState(),e.forEach((function(e){o[e]&&(i.removeChild(o[e]),i.appendChild(o[e]))})),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return km(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];var i=Wm.modifyOption(this,e,t);o[e]=void 0!==i?i:t,"group"===e&&N_(o)},destroy:function(){Ym("destroy",this);var e=this.el;e[Fm]=null,vm(e,"mousedown",this._onTapStart),vm(e,"touchstart",this._onTapStart),vm(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(vm(e,"dragover",this),vm(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),(function(e){e.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),C_.splice(C_.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!a_){if(Ym("hideClone",this),U_.eventCanceled)return;Cm(r_,"display","none"),this.options.removeCloneOnHide&&r_.parentNode&&r_.parentNode.removeChild(r_),a_=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(a_){if(Ym("showClone",this),U_.eventCanceled)return;Qm.parentNode!=o_||this.options.group.revertClone?i_?o_.insertBefore(r_,i_):o_.appendChild(r_):o_.insertBefore(r_,Qm),this.options.group.revertClone&&this.animate(Qm,r_),Cm(r_,"display",""),a_=!1}}else this._hideClone()}},P_&&bm(document,"touchmove",(function(e){(U_.active||z_)&&e.cancelable&&e.preventDefault()})),U_.utils={on:bm,off:vm,css:Cm,find:Mm,is:function(e,t){return!!km(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},throttle:Nm,closest:km,toggleClass:Em,clone:Lm,index:Om,nextTick:W_,cancelNextTick:q_,detectDirection:H_,getChild:Pm,expando:Fm},U_.get=function(e){return e[Fm]},U_.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach((function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(U_.utils=im(im({},U_.utils),e.utils)),Wm.mount(e)}))},U_.create=function(e,t){return new U_(e,t)},U_.version="1.15.6";var X_,Y_,J_,Q_,eg,tg,og=[],ig=!1;function ng(){og.forEach((function(e){clearInterval(e.pid)})),og=[]}function rg(){clearInterval(tg)}var ag=Nm((function(e,t,o,i){if(t.scroll){var n,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,c=Sm(),u=!1;Y_!==o&&(Y_=o,ng(),X_=t.scroll,n=t.scrollFn,!0===X_&&(X_=Dm(o,!0)));var d=0,h=X_;do{var p=h,m=$m(p),_=m.top,g=m.bottom,f=m.left,b=m.right,v=m.width,y=m.height,w=void 0,k=void 0,x=p.scrollWidth,z=p.scrollHeight,E=Cm(p),C=p.scrollLeft,A=p.scrollTop;p===c?(w=v<x&&("auto"===E.overflowX||"scroll"===E.overflowX||"visible"===E.overflowX),k=y<z&&("auto"===E.overflowY||"scroll"===E.overflowY||"visible"===E.overflowY)):(w=v<x&&("auto"===E.overflowX||"scroll"===E.overflowX),k=y<z&&("auto"===E.overflowY||"scroll"===E.overflowY));var M=w&&(Math.abs(b-r)<=s&&C+v<x)-(Math.abs(f-r)<=s&&!!C),S=k&&(Math.abs(g-a)<=s&&A+y<z)-(Math.abs(_-a)<=s&&!!A);if(!og[d])for(var $=0;$<=d;$++)og[$]||(og[$]={});og[d].vx==M&&og[d].vy==S&&og[d].el===p||(og[d].el=p,og[d].vx=M,og[d].vy=S,clearInterval(og[d].pid),0==M&&0==S||(u=!0,og[d].pid=setInterval(function(){i&&0===this.layer&&U_.active._onTouchMove(eg);var t=og[this.layer].vy?og[this.layer].vy*l:0,o=og[this.layer].vx?og[this.layer].vx*l:0;"function"==typeof n&&"continue"!==n.call(U_.dragged.parentNode[Fm],o,t,e,eg,og[this.layer].el)||Bm(og[this.layer].el,o,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=Dm(h,!1)));ig=u}}),30),sg=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,n=e.activeSortable,r=e.dispatchSortableEvent,a=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=o||n;a();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,u=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(u)&&(r("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function lg(){}function cg(){}lg.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=Pm(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:sg},am(lg,{pluginName:"revertOnSpill"}),cg.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable||this.sortable;o.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),o.animateAll()},drop:sg},am(cg,{pluginName:"removeOnSpill"});var ug,dg=[cg,lg];var hg,pg,mg,_g,gg,fg=[],bg=[],vg=!1,yg=!1,wg=!1;function kg(e,t){bg.forEach((function(o,i){var n=t.children[o.sortableIndex+(e?Number(i):0)];n?t.insertBefore(o,n):t.appendChild(o)}))}function xg(){fg.forEach((function(e){e!==mg&&e.parentNode&&e.parentNode.removeChild(e)}))}var zg=Object.freeze({__proto__:null,AutoScroll:function(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?bm(document,"dragover",this._handleAutoScroll):this.options.supportPointer?bm(document,"pointermove",this._handleFallbackAutoScroll):t.touches?bm(document,"touchmove",this._handleFallbackAutoScroll):bm(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?vm(document,"dragover",this._handleAutoScroll):(vm(document,"pointermove",this._handleFallbackAutoScroll),vm(document,"touchmove",this._handleFallbackAutoScroll),vm(document,"mousemove",this._handleFallbackAutoScroll)),rg(),ng(),clearTimeout(xm),xm=void 0},nulling:function(){eg=Y_=X_=ig=tg=J_=Q_=null,og.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var o=this,i=(e.touches?e.touches[0]:e).clientX,n=(e.touches?e.touches[0]:e).clientY,r=document.elementFromPoint(i,n);if(eg=e,t||this.options.forceAutoScrollFallback||hm||dm||mm){ag(e,this.options,r,t);var a=Dm(r,!0);!ig||tg&&i===J_&&n===Q_||(tg&&rg(),tg=setInterval((function(){var r=Dm(document.elementFromPoint(i,n),!0);r!==a&&(a=r,ng()),ag(e,o.options,r,t)}),10),J_=i,Q_=n)}else{if(!this.options.bubbleScroll||Dm(r,!0)===Sm())return void ng();ag(e,this.options,Dm(r,!1),!1)}}},am(e,{pluginName:"scroll",initializeByDefault:!0})},MultiDrag:function(){function e(e){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));e.options.avoidImplicitDeselect||(e.options.supportPointer?bm(document,"pointerup",this._deselectMultiDrag):(bm(document,"mouseup",this._deselectMultiDrag),bm(document,"touchend",this._deselectMultiDrag))),bm(document,"keydown",this._checkKeyDown),bm(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,setData:function(t,o){var i="";fg.length&&pg===e?fg.forEach((function(e,t){i+=(t?", ":"")+e.textContent})):i=o.textContent,t.setData("Text",i)}}}return e.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(e){var t=e.dragEl;mg=t},delayEnded:function(){this.isMultiDrag=~fg.indexOf(mg)},setupClone:function(e){var t=e.sortable,o=e.cancel;if(this.isMultiDrag){for(var i=0;i<fg.length;i++)bg.push(Lm(fg[i])),bg[i].sortableIndex=fg[i].sortableIndex,bg[i].draggable=!1,bg[i].style["will-change"]="",Em(bg[i],this.options.selectedClass,!1),fg[i]===mg&&Em(bg[i],this.options.chosenClass,!1);t._hideClone(),o()}},clone:function(e){var t=e.sortable,o=e.rootEl,i=e.dispatchSortableEvent,n=e.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||fg.length&&pg===t&&(kg(!0,o),i("clone"),n()))},showClone:function(e){var t=e.cloneNowShown,o=e.rootEl,i=e.cancel;this.isMultiDrag&&(kg(!1,o),bg.forEach((function(e){Cm(e,"display","")})),t(),gg=!1,i())},hideClone:function(e){var t=this;e.sortable;var o=e.cloneNowHidden,i=e.cancel;this.isMultiDrag&&(bg.forEach((function(e){Cm(e,"display","none"),t.options.removeCloneOnHide&&e.parentNode&&e.parentNode.removeChild(e)})),o(),gg=!0,i())},dragStartGlobal:function(e){e.sortable,!this.isMultiDrag&&pg&&pg.multiDrag._deselectMultiDrag(),fg.forEach((function(e){e.sortableIndex=Om(e)})),fg=fg.sort((function(e,t){return e.sortableIndex-t.sortableIndex})),wg=!0},dragStarted:function(e){var t=this,o=e.sortable;if(this.isMultiDrag){if(this.options.sort&&(o.captureAnimationState(),this.options.animation)){fg.forEach((function(e){e!==mg&&Cm(e,"position","absolute")}));var i=$m(mg,!1,!0,!0);fg.forEach((function(e){e!==mg&&Rm(e,i)})),yg=!0,vg=!0}o.animateAll((function(){yg=!1,vg=!1,t.options.animation&&fg.forEach((function(e){Vm(e)})),t.options.sort&&xg()}))}},dragOver:function(e){var t=e.target,o=e.completed,i=e.cancel;yg&&~fg.indexOf(t)&&(o(!1),i())},revert:function(e){var t=e.fromSortable,o=e.rootEl,i=e.sortable,n=e.dragRect;fg.length>1&&(fg.forEach((function(e){i.addAnimationState({target:e,rect:yg?$m(e):n}),Vm(e),e.fromRect=n,t.removeAnimationState(e)})),yg=!1,function(e,t){fg.forEach((function(o,i){var n=t.children[o.sortableIndex+(e?Number(i):0)];n?t.insertBefore(o,n):t.appendChild(o)}))}(!this.options.removeCloneOnHide,o))},dragOverCompleted:function(e){var t=e.sortable,o=e.isOwner,i=e.insertion,n=e.activeSortable,r=e.parentEl,a=e.putSortable,s=this.options;if(i){if(o&&n._hideClone(),vg=!1,s.animation&&fg.length>1&&(yg||!o&&!n.options.sort&&!a)){var l=$m(mg,!1,!0,!0);fg.forEach((function(e){e!==mg&&(Rm(e,l),r.appendChild(e))})),yg=!0}if(!o)if(yg||xg(),fg.length>1){var c=gg;n._showClone(t),n.options.animation&&!gg&&c&&bg.forEach((function(e){n.addAnimationState({target:e,rect:_g}),e.fromRect=_g,e.thisAnimationDuration=null}))}else n._showClone(t)}},dragOverAnimationCapture:function(e){var t=e.dragRect,o=e.isOwner,i=e.activeSortable;if(fg.forEach((function(e){e.thisAnimationDuration=null})),i.options.animation&&!o&&i.multiDrag.isMultiDrag){_g=am({},t);var n=Am(mg,!0);_g.top-=n.f,_g.left-=n.e}},dragOverAnimationComplete:function(){yg&&(yg=!1,xg())},drop:function(e){var t=e.originalEvent,o=e.rootEl,i=e.parentEl,n=e.sortable,r=e.dispatchSortableEvent,a=e.oldIndex,s=e.putSortable,l=s||this.sortable;if(t){var c=this.options,u=i.children;if(!wg)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),Em(mg,c.selectedClass,!~fg.indexOf(mg)),~fg.indexOf(mg))fg.splice(fg.indexOf(mg),1),hg=null,qm({sortable:n,rootEl:o,name:"deselect",targetEl:mg,originalEvent:t});else{if(fg.push(mg),qm({sortable:n,rootEl:o,name:"select",targetEl:mg,originalEvent:t}),t.shiftKey&&hg&&n.el.contains(hg)){var d=Om(hg),h=Om(mg);~d&&~h&&d!==h&&function(){var e,r;h>d?(r=d,e=h):(r=h,e=d+1);for(var a=c.filter;r<e;r++){if(!~fg.indexOf(u[r]))if(km(u[r],c.draggable,i,!1))a&&("function"==typeof a?a.call(n,t,u[r],n):a.split(",").some((function(e){return km(u[r],e.trim(),i,!1)})))||(Em(u[r],c.selectedClass,!0),fg.push(u[r]),qm({sortable:n,rootEl:o,name:"select",targetEl:u[r],originalEvent:t}))}}()}else hg=mg;pg=l}if(wg&&this.isMultiDrag){if(yg=!1,(i[Fm].options.sort||i!==o)&&fg.length>1){var p=$m(mg),m=Om(mg,":not(."+this.options.selectedClass+")");if(!vg&&c.animation&&(mg.thisAnimationDuration=null),l.captureAnimationState(),!vg&&(c.animation&&(mg.fromRect=p,fg.forEach((function(e){if(e.thisAnimationDuration=null,e!==mg){var t=yg?$m(e):p;e.fromRect=t,l.addAnimationState({target:e,rect:t})}}))),xg(),fg.forEach((function(e){u[m]?i.insertBefore(e,u[m]):i.appendChild(e),m++})),a===Om(mg))){var _=!1;fg.forEach((function(e){e.sortableIndex===Om(e)||(_=!0)})),_&&(r("update"),r("sort"))}fg.forEach((function(e){Vm(e)})),l.animateAll()}pg=l}(o===i||s&&"clone"!==s.lastPutMode)&&bg.forEach((function(e){e.parentNode&&e.parentNode.removeChild(e)}))}},nullingGlobal:function(){this.isMultiDrag=wg=!1,bg.length=0},destroyGlobal:function(){this._deselectMultiDrag(),vm(document,"pointerup",this._deselectMultiDrag),vm(document,"mouseup",this._deselectMultiDrag),vm(document,"touchend",this._deselectMultiDrag),vm(document,"keydown",this._checkKeyDown),vm(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(e){if(!(void 0!==wg&&wg||pg!==this.sortable||e&&km(e.target,this.options.draggable,this.sortable.el,!1)||e&&0!==e.button))for(;fg.length;){var t=fg[0];Em(t,this.options.selectedClass,!1),fg.shift(),qm({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:t,originalEvent:e})}},_checkKeyDown:function(e){e.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(e){e.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},am(e,{pluginName:"multiDrag",utils:{select:function(e){var t=e.parentNode[Fm];t&&t.options.multiDrag&&!~fg.indexOf(e)&&(pg&&pg!==t&&(pg.multiDrag._deselectMultiDrag(),pg=t),Em(e,t.options.selectedClass,!0),fg.push(e))},deselect:function(e){var t=e.parentNode[Fm],o=fg.indexOf(e);t&&t.options.multiDrag&&~o&&(Em(e,t.options.selectedClass,!1),fg.splice(o,1))}},eventProperties:function(){var e=this,t=[],o=[];return fg.forEach((function(i){var n;t.push({multiDragElement:i,index:i.sortableIndex}),n=yg&&i!==mg?-1:yg?Om(i,":not(."+e.options.selectedClass+")"):Om(i),o.push({multiDragElement:i,index:n})})),{items:lm(fg),clones:[].concat(bg),oldIndicies:t,newIndicies:o}},optionListeners:{multiDragKey:function(e){return"ctrl"===(e=e.toLowerCase())?e="Control":e.length>1&&(e=e.charAt(0).toUpperCase()+e.substr(1)),e}}})},OnSpill:dg,Sortable:U_,Swap:function(){function e(){this.defaults={swapClass:"sortable-swap-highlight"}}return e.prototype={dragStart:function(e){var t=e.dragEl;ug=t},dragOverValid:function(e){var t=e.completed,o=e.target,i=e.onMove,n=e.activeSortable,r=e.changed,a=e.cancel;if(n.options.swap){var s=this.sortable.el,l=this.options;if(o&&o!==s){var c=ug;!1!==i(o)?(Em(o,l.swapClass,!0),ug=o):ug=null,c&&c!==ug&&Em(c,l.swapClass,!1)}r(),t(!0),a()}},drop:function(e){var t=e.activeSortable,o=e.putSortable,i=e.dragEl,n=o||this.sortable,r=this.options;ug&&Em(ug,r.swapClass,!1),ug&&(r.swap||o&&o.options.swap)&&i!==ug&&(n.captureAnimationState(),n!==t&&t.captureAnimationState(),function(e,t){var o,i,n=e.parentNode,r=t.parentNode;if(!n||!r||n.isEqualNode(t)||r.isEqualNode(e))return;o=Om(e),i=Om(t),n.isEqualNode(r)&&o<i&&i++;n.insertBefore(t,n.children[o]),r.insertBefore(e,r.children[i])}(i,ug),n.animateAll(),n!==t&&t.animateAll())},nulling:function(){ug=null}},am(e,{pluginName:"swap",eventProperties:function(){return{swapItem:ug}}})},default:U_});
