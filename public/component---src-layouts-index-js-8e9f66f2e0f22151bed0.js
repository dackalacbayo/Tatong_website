webpackJsonp([0x67ef26645b2a,60335399758886],{189:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Tatong"}}},layoutContext:{}}},461:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),o=r(l),u=n(472),c=r(u),i=n(189),s=r(i);t.default=function(e){return o.default.createElement(c.default,a({},e,s.default))},e.exports=t.default},70:function(e,t){},571:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function l(e,t,n){var l,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=o.call(e),t=o.call(t),i(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(l=0;l<e.length;l++)if(e[l]!==t[l])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),l=f.length-1;l>=0;l--)if(f[l]!=d[l])return!1;for(l=f.length-1;l>=0;l--)if(s=f[l],!i(e[s],t[s],n))return!1;return typeof e==typeof t}var o=Array.prototype.slice,u=n(573),c=n(572),i=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:l(e,t,n))}},572:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},573:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},580:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),l={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};r=function(){return l}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},823:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(2),p=r(d),E=n(842),m=r(E),T=n(571),A=r(T),h=n(824),y=n(355),b=function(e){var t,n;return n=t=function(t){function n(){return l(this,n),o(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,A.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case y.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},a,this.mapNestedChildrenToProps(n,l))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,o=e.nestedChildren;switch(r.type){case y.TAG_NAMES.TITLE:return c({},a,(t={},t[r.type]=o,t.titleAttributes=c({},l),t));case y.TAG_NAMES.BODY:return c({},a,{bodyAttributes:c({},l)});case y.TAG_NAMES.HTML:return c({},a,{htmlAttributes:c({},l)})}return c({},a,(n={},n[r.type]=c({},l),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var l=e.props,o=l.children,u=a(l,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,o),e.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),l=c({},r);return n&&(l=this.mapChildrenToProps(n,l)),f.default.createElement(e,l)},i(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},S=function(){return null},_=(0,m.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(S),v=b(_);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},355:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},824:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),u=r(o),c=n(218),i=r(c),s=n(355),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=A(e,s.TAG_NAMES.TITLE),n=A(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return A(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return l({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a],o=l.toLowerCase();if(e.indexOf(o)!==-1&&n[o])return t.concat(n)}return t},[])},T=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,l=Object.keys(e),o=0;o<l.length;o++){var u=l[o],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var i=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][i]&&(a[n][i]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var l=Object.keys(a),o=0;o<l.length;o++){var u=l[o],c=(0,i.default)({},r[u],a[u]);r[u]=c}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:m([s.TAG_PROPERTIES.HREF],e),bodyAttributes:E(s.ATTRIBUTE_NAMES.BODY,e),defer:A(e,s.HELMET_PROPS.DEFER),encode:A(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(s.ATTRIBUTE_NAMES.HTML,e),linkTags:T(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:T(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:E(s.ATTRIBUTE_NAMES.TITLE,e)}},y=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){y(t)},0)}}(),b=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},N=null,O=function(e){N&&_(N),e.defer?N=S(function(){g(e,function(){N=null})}):(g(e),N=null)},g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,i=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;M(s.TAG_NAMES.BODY,r),M(s.TAG_NAMES.HTML,a),P(d,p);var E={baseTag:w(s.TAG_NAMES.BASE,n),linkTags:w(s.TAG_NAMES.LINK,l),metaTags:w(s.TAG_NAMES.META,o),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,u),scriptTags:w(s.TAG_NAMES.SCRIPT,i),styleTags:w(s.TAG_NAMES.STYLE,f)},m={},T={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(T[e]=E[e].oldTags)}),t&&t(),c(e,m,T)},R=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),M(s.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),a=r?r.split(","):[],l=[].concat(a),o=Object.keys(t),u=0;u<o.length;u++){var c=o[u],i=t[c]||"";n.getAttribute(c)!==i&&n.setAttribute(c,i),a.indexOf(c)===-1&&a.push(c);var f=l.indexOf(c);f!==-1&&l.splice(f,1)}for(var d=l.length-1;d>=0;d--)n.removeAttribute(l[d]);a.length===l.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},w=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),l=[],o=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return o=t,n.isEqualNode(e)})?a.splice(o,1):l.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),l.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:l}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var a=C(n),l=R(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+f(l,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(l,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+a:a},""),l=r.innerHTML||r.cssText||"",o=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+l+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},x=function(e,t,n){var r,a=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),l=j(n,a);return[u.default.createElement(s.TAG_NAMES.TITLE,l,t)]},H=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),u.default.createElement(e,a)})},k=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return x(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.scriptTags,i=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:k(s.TAG_NAMES.BASE,t,r),bodyAttributes:k(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(s.ATTRIBUTE_NAMES.HTML,a,r),link:k(s.TAG_NAMES.LINK,l,r),meta:k(s.TAG_NAMES.META,o,r),noscript:k(s.TAG_NAMES.NOSCRIPT,u,r),script:k(s.TAG_NAMES.SCRIPT,c,r),style:k(s.TAG_NAMES.STYLE,i,r),title:k(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=O,t.mapStateOnServer=U,t.reducePropsToState=h,t.requestAnimationFrame=S,t.warn=v}).call(t,function(){return this}())},842:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),c=r(u),i=n(580),s=r(i),f=n(951),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){function f(){E=e(p.map(function(e){return e.props})),m.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var p=[],E=void 0,m=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return c.default.createElement(i,this.props)},t}(u.Component);return m.displayName="SideEffect("+r(i)+")",m.canUseDOM=s.default.canUseDOM,m}}},951:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var l=Object.keys(e),o=Object.keys(t);if(l.length!==o.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<l.length;c++){var i=l[c];if(!u(i))return!1;var s=e[i],f=t[i];if(a=n?n.call(r,s,f,i):void 0,a===!1||void 0===a&&s!==f)return!1}return!0}},582:function(e,t){},467:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=r(u),i=n(35),s=(r(i),function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return c.default.createElement("section",{className:"footer"},c.default.createElement("footer",{className:"container py-2 pb-5"},c.default.createElement("div",{className:"row footer"},c.default.createElement("div",{className:"col-6 col-md"},c.default.createElement("ul",{className:"list-unstyled text-small"},c.default.createElement("a",{href:"#"},c.default.createElement("h2",{className:"font-weight-normal"},"Tatong")),c.default.createElement("br",null),c.default.createElement("small",{className:"d-block mb-3 text-muted"},"© 2017-2018"))),c.default.createElement("div",{className:"col-12 col-lg-3 py-4"},c.default.createElement("i",{className:"footer fas fa-at"}),c.default.createElement("a",{href:"http://sample.com/"},c.default.createElement("small",{className:"text-muted site"}," www.sample.com"))," ",c.default.createElement("br",null),c.default.createElement("i",{className:"footer fas fa-phone"}),c.default.createElement("small",{className:"text-muted"}," 000-0000 "),c.default.createElement("br",null),c.default.createElement("i",{className:"footer fas fa-envelope"}),c.default.createElement("small",{className:"text-muted"},"info@sample.ph")," ",c.default.createElement("br",null),c.default.createElement("hr",null),c.default.createElement("ul",{className:"list-unstyled text-small icons"},c.default.createElement("li",{className:"socialIcons"},c.default.createElement("a",{href:"#",className:"fab fa-twitter"},c.default.createElement("span",{className:"label"}," "))),c.default.createElement("li",{className:"socialIcons"},c.default.createElement("a",{href:"#",className:"fab fa-facebook"},c.default.createElement("span",{className:"label"}," "))),c.default.createElement("li",{className:"socialIcons"},c.default.createElement("a",{href:"#",className:"fab fa-instagram"},c.default.createElement("span",{className:"label"}," "))),c.default.createElement("li",{className:"socialIcons"},c.default.createElement("a",{href:"#",className:"fab fa-github"},c.default.createElement("span",{className:"label"}," "))),c.default.createElement("li",{className:"socialIcons"},c.default.createElement("a",{href:"#",className:"socialIcons fas fa-envelope "},c.default.createElement("span",{className:"label"}," "))))),c.default.createElement("div",{className:"col-6 col-md"},c.default.createElement("h5",null,"Features"),c.default.createElement("ul",{className:"list-unstyled text-small"},c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Cool stuff")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Random feature")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Team feature")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Stuff for developers")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Another one")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Last time")))),c.default.createElement("div",{className:"col-6 col-md"},c.default.createElement("h5",null,"Resources"),c.default.createElement("ul",{className:"list-unstyled text-small"},c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Resource")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Resource name")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Another resource")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Final resource")))),c.default.createElement("div",{className:"col-6 col-md"},c.default.createElement("h5",null,"Resources"),c.default.createElement("ul",{className:"list-unstyled text-small"},c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Business")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Education")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Government")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Gaming")))),c.default.createElement("div",{className:"col-6 col-md"},c.default.createElement("h5",null,"About"),c.default.createElement("ul",{className:"list-unstyled text-small"},c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Team")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Locations")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Privacy")),c.default.createElement("li",null,c.default.createElement("a",{className:"text-muted",href:"#"},"Terms")))))))},t}(u.Component));t.default=s,e.exports=t.default},468:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=r(u),i=n(35),s=r(i),f=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return c.default.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark fixed-top",id:"navbar-style-light"},c.default.createElement("div",{className:"container nav"},c.default.createElement(s.default,{className:"navbar-brand js-scroll-trigger",to:"../"},"Tatong"),c.default.createElement("button",{className:"navbar-toggler mt-2",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},c.default.createElement("span",{className:"navbar-toggler-icon"})),c.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},c.default.createElement("ul",{className:"navbar-nav ml-auto pl-4"},c.default.createElement("li",{className:"nav-item"},c.default.createElement(s.default,{className:"nav-link js-scroll-trigger pr-3",to:"../projects"},"Projects")),c.default.createElement("li",{className:"nav-item"},c.default.createElement(s.default,{className:"nav-link js-scroll-trigger pr-3",to:"../contact"},"Contact")),c.default.createElement("li",{className:"nav-item"},c.default.createElement(s.default,{className:"nav-link js-scroll-trigger pr-3",to:"../faQ"},"FaQ"))))))},t}(u.Component);t.default=f,e.exports=t.default},583:function(e,t){},472:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n(1),l=r(a),o=n(2),u=r(o),c=n(823),i=r(c),s=n(468),f=r(s),d=n(467),p=r(d);n(70),n(583),n(584),n(582);var E=function(e){var t=e.children,n=e.data;return l.default.createElement("div",null,l.default.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"}),l.default.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js",integrity:"sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm",crossOrigin:"anonymous"}),l.default.createElement(i.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.default.createElement("div",null,l.default.createElement(f.default,null),t(),l.default.createElement(p.default,null)))};E.propTypes={children:u.default.func},t.default=E;t.query="** extracted graphql fragment **"},584:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-8e9f66f2e0f22151bed0.js.map