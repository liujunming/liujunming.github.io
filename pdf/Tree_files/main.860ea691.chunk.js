(this["webpackJsonp@nathanfriend/tree-online"]=this["webpackJsonp@nathanfriend/tree-online"]||[]).push([[0],{191:function(e,t,n){e.exports=n(406)},394:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){},406:function(e,t,n){"use strict";n.r(t);n(192),n(201);var a=n(1),r=n.n(a),o=n(87),i=n(35),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(40),u=n(187),f=n(120),m=n.n(f),h=n(188),p=n.n(h),d=n(70),g=n.n(d),v={ascii:{CHILD:"|-- ",LAST_CHILD:"`-- ",DIRECTORY:"|   ",EMPTY:"    "},"utf-8":{CHILD:"\u251c\u2500\u2500 ",LAST_CHILD:"\u2514\u2500\u2500 ",DIRECTORY:"\u2502   ",EMPTY:"    "}},b={charset:"utf-8",trailingDirSlash:!1,fullPath:!1,rootDot:!0},w=function(e,t){var n=v[t.charset];if(!e.parent)return t.rootDot?e.name:null;for(var a=[y(e)?n.LAST_CHILD:n.CHILD,E(e,t)],r=e.parent;r&&r.parent;)a.unshift(y(r)?n.EMPTY:n.DIRECTORY),r=r.parent;return a.join("").substring(t.rootDot?0:n.CHILD.length)},E=function e(t,n){var a=[t.name];return n.trailingDirSlash&&t.children.length>0&&!/\/\s*$/.test(t.name)&&a.push("/"),n.fullPath&&t.parent&&t.parent&&a.unshift(e(t.parent,m()({},{trailingDirSlash:!0},n))),a.join("")},y=function(e){return Boolean(e.parent&&g()(e.parent.children)===e)},O=n(88),x=/^((\s*)(?:-\s)?)/,C=/^\s*$/,S=/[^\r\n]+/g,j=function(e){var t=e.match(S)||[];return(t=t.filter((function(e){return!C.test(e)}))).map((function(e){var t=x.exec(e);if(!t)throw new Error('Unable to execute leadingWhitespaceAndBulletRegex against string: "'.concat(e,'"'));return{name:e.replace(t[1],""),children:[],indentCount:t[2].length,parent:null}}))},T=n(29);function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],a=function(e,t){var n=new RegExp("".concat((t[2]?t[2]:"")+t[0],"|").concat((t[3]?t[3]:"")+t[1]),"g");return e.replace(n,(function(e){return e===t[0]?t[1]:t[0]}))};if(t)for(var r=0;r<n.length;++r)e=a(e,n[r]);else for(var o="n.length;o--;)e=a(e,n[o]);return" e}function d(){var e="function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var" n="new" regexp("[?&]"+e+"(="([^&#]*)|&|#|$)").exec(t);return" n?n[2]?decodeuricomponent(n[2].replace( \+ g," ")):"":null}("s");if(e)try{var t="function(e){var">1){var a,r=t[1],o=Object(O.a)(r);try{for(o.s();!(a=o.n()).done;){var i=a.value,l=n.split(i);n=l.join(l.pop())}}catch(c){o.e(c)}finally{o.f()}}return N(n,0)}(e),n=JSON.parse(t);if("1"!==n.version)return;return delete n.version,n}catch(a){return}}var R=function(e){var t="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname),n=function(e){for(var t=[],n=255;n>32;--n){var a=String.fromCharCode(n);"\\"==a||t.includes(a)||t.push(a)}for(var r=127;--r;)(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||"-_.!~*'()".includes(string.fromcharcode(r)))&&t.push(string.fromcharcode(r));var o="function(e,t){for(var" n="t.length,a="",r=function(e){return" encodeuri(encodeuricomponent(e)).replace( %.. g,"i").length},o="function(e){var" t="e.charCodeAt(0),n=e.charCodeAt(e.length-1);return">=56320&&t<=57343||n>=55296&&n<=56319},i={},l=2;l<50;l++)for(var c="0;c<e.length-l;++c){var" s="e.substr(c,l);if(!i[s]&&!o(s)){for(var" u="1,f=e.indexOf(s,c+l);f">=0;++u)f=e.indexOf(s,f+l);u>1&&(i[s]=u)}}for(;;){for(;n--&&e.includes(t[n]););if(n<0)break;var m="t[n],h=void" 0,p="0,d=r(m);for(var" g in i){var v="i[g],b=(v-1)*r(g)-(v+1)*d;a.length||(b-=r("\x01")),b<=0?delete" i[g]:b>p&&(h=g,p=b)}if(!h)break;e=e.split(h).join(m)+m+h,a=m+a;var w={};for(var E in i){for(var y=E.split(h).join(m),O=0,x=e.indexOf(y);x>=0;++O)x=e.indexOf(y,x+y.length);O>1&&(w[y]=O)}i=w}return{a:e,b:a}}(e=N(e=e.replace(new RegExp("\x01","g"))),t),i=o.a;return o.b.length&&(i+="\x01"+o.b),encodeURIComponent(i)}(JSON.stringify(Object(T.a)({},e,{version:"1"}))),a="".concat("s","=").concat(n);window.history.replaceState(e,"","".concat(t,"?").concat(a))};function k(){var e=function(){var e=localStorage.getItem("SAVED_STATE");if(e)try{var t=JSON.parse(e);if("1"!==t.version)return;return delete t.version,t}catch(n){return}}();return D()||e}var A=function(e){R(e),function(e){localStorage.setItem("SAVED_STATE",JSON.stringify(Object(T.a)({},e,{version:"1"})))}(e)},P=k(),_=P?P.options:{fancy:!0,fullPath:!1,trailingSlash:!0,rootDot:!0};var I={source:"\nEdit me to generate\n  a\n    nice\n      tree\n        diagram!\n        :)\n  Use indentation\n    to indicate\n      file\n      and\n      folder\n      nesting.\n    - You can even\n      - use\n        - markdown\n        - bullets!\n\n".trim()},L=k(),U=L?L.source:I;var F=Object(s.b)({options:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FANCY":return Object(T.a)({},e,{fancy:t.newValue});case"UPDATE_FULL_PATH":return Object(T.a)({},e,{fullPath:t.newValue});case"UPDATE_TRAILING_SLASH":return Object(T.a)({},e,{trailingSlash:t.newValue});case"UPDATE_ROOT_DOT":return Object(T.a)({},e,{rootDot:t.newValue});default:return e}},source:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SOURCE":return Object(T.a)({},e,{source:t.source});default:return e}}}),H=Object(u.a)([function(e){return e.source.source},function(e){return e.options}],(function(e,t){return function e(t,n){return p()([w(t,m()({},n,b)),t.children.map((function(t){return e(t,n)}))]).filter((function(e){return null!=e})).join("\n")}(function(e){var t,n=j(e),a={name:".",children:[],indentCount:-1,parent:null},r=[a],o=Object(O.a)(n);try{for(o.s();!(t=o.n()).done;){for(var i=t.value;g()(r).indentCount>=i.indentCount;)r.pop();var l=g()(r);l.children.push(i),i.parent=l,r.push(i)}}catch(c){o.e(c)}finally{o.f()}return a}(e),{charset:t.fancy?"utf-8":"ascii",fullPath:t.fullPath,trailingDirSlash:t.trailingSlash,rootDot:t.rootDot})})),B=(n(393),n(394),n(33)),V=n(34),M=n(36),Y=n(37),W=(n(395),n(189)),J=n.n(W),G=function(e){Object(Y.a)(n,e);var t=Object(M.a)(n);function n(e){var a;Object(B.a)(this,n),(a=t.call(this,e)).state={deploymentStatus:""};var o=J()("2022-07-13T18:48:35Z"),i=o.format("Y/MM/DD \\a\\t HH:mm:ss ZZ"),l=o.fromNow(),c="ef0414eb",s="https://gitlab.com/nfriend/tree-online/commit/".concat(c);return a.state.deploymentStatus=r.a.createElement("span",null,"Last deployed on ",i," (",l,") for commit"," ",r.a.createElement("a",{className:"hide-offline",href:s},c),r.a.createElement("b",{className:"hide-online"},c)),a}return Object(V.a)(n,[{key:"render",value:function(){return this.state.deploymentStatus}}]),n}(r.a.Component);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n="arguments[t];for(var" a in n)object.prototype.hasownproperty.call(n,a)&&(e[a]="n[a])}return" e}).apply(this,arguments)}function z(e,t){if(null="=e)return{};var" n,a,r="function(e,t){if(null==e)return{};var">=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexof(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q=r.a.createElement("path",{d:"m461.48 298.35l-17.78-54.63a7.72 7.72 0 0 0 -.43 -1.47l-35.67-109.8a14.18 14.18 0 0 0 -13.54 -9.67 13.94 13.94 0 0 0 -13.38 9.75l-34 104.63h-107.31l-34.05-104.63a13.94 13.94 0 0 0 -13.32 -9.75h-.08a14.22 14.22 0 0 0 -13.5 9.76l-35.7 109.93c0 .1-.08.18-.11.28l-18.1 55.61a20.29 20.29 0 0 0 7.37 22.71l156.38 113.63a8 8 0 0 0 9.45 -.05l156.41-113.58a20.28 20.28 0 0 0 7.36 -22.72m-233.75-45.13l43.59 134.16-104.64-134.16m148.05 134.19l41.8-128.62 1.8-5.57h61.1l-94.67 121.28m69.44-231.67l30.63 94.33h-61.31m-22.03 16l-30.37 93.46-18.12 55.66-48.42-149.12m-52.73-110.33l30.69 94.33h-61.27m-19.98 70.97a4.31 4.31 0 0 1 -1.56 -4.83l13.44-41.3 98.57 126.37m192.98-80.24l-110.46 80.21.37-.48 98.2-125.86 13.44 41.28a4.31 4.31 0 0 1 -1.55 4.84"}),z=function(e){var t=e.svgRef,n=e.title,a=Z(e,["svgRef","title"]);return r.a.createElement("svg",$({viewBox:"0 0 586 559",ref:t},a),n?r.a.createElement("title",null,n):null,q)},K=r.a.forwardRef((function(e,t){return r.a.createElement(z,$({svgRef:t},e))})),Q=(n.p,n(190)),X=n.n(Q);function ee(e){return{type:"UPDATE_SOURCE",source:e}}n(396);var te=function(e){Object(Y.a)(n,e);var t=Object(M.a)(n);function n(e){var o;return Object(B.a)(this,n),(o=t.call(this,e)).editorRef=void 0,o.highlight=function(e){return r.a.createElement(r.a.Fragment,null,e)},o.editorRef=Object(a.createRef)(),o}return Object(V.a)(n,[{key:"componentDidMount",value:function(){if(this.editorRef.current){var e=this.editorRef.current.querySelector("textarea");e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.editorRef,className:"input p-2 d-flex rounded-sm ".concat(this.props.className)},r.a.createElement(X.a,{className:"flex-grow-1",value:this.props.source,onValueChange:this.props.updateSource,highlight:this.highlight}))}}]),n}(r.a.Component),ne=Object(i.b)((function(e){return{source:e.source.source}}),(function(e){return Object(s.a)({updateSource:ee},e)}))(te),ae=n(121),re=n.n(ae),oe=n(71),ie=n.n(oe);function le(e){return{type:"UPDATE_FANCY",newValue:e}}function ce(e){return{type:"UPDATE_FULL_PATH",newValue:e}}function se(e){return{type:"UPDATE_TRAILING_SLASH",newValue:e}}function ue(e){return{type:"UPDATE_ROOT_DOT",newValue:e}}n(404);var fe=function(e){Object(Y.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(B.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o</o.length;a++)n=o[a],t.indexof(n)></arguments.length;t++){var></0)break;var></=56319},i={},l=2;l<50;l++)for(var></=57343||n></=122||"-_.!~*'()".includes(string.fromcharcode(r)))&&t.push(string.fromcharcode(r));var></=90||r></=57||r></n.length;++r)e=a(e,n[r]);else>