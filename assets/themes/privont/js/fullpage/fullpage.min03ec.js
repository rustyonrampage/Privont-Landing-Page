/*fullPage 3.0.8*/
!function(e,t,n,o){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(Nt,zt){"use strict";var jt="fullpage-wrapper",Pt="."+jt,Dt="fp-responsive",Vt="fp-notransition",Wt="fp-destroyed",Yt="fp-enabled",Ft="fp-viewing",Ut="active",Xt="."+Ut,_t="fp-completely",Kt="fp-section",qt="."+Kt,$t=qt+Xt,Qt="fp-tableCell",Gt="."+Qt,Jt="fp-auto-height",Zt="fp-normal-scroll",en="fp-nav",tn="#"+en,nn="fp-tooltip",on="fp-slide",rn="."+on,ln=rn+Xt,an="fp-slides",cn="."+an,sn="fp-slidesContainer",un="."+sn,fn="fp-table",dn="fp-slidesNav",vn="."+dn,pn=vn+" a",e="fp-controlArrow",hn="."+e,gn="fp-prev",mn=hn+".fp-prev",Sn=hn+".fp-next";function bn(e,t){Nt.console&&Nt.console[e]&&Nt.console[e]("fullPage: "+t)}function wn(e,t){return(t=1<arguments.length?t:zt)?t.querySelectorAll(e):null}function yn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=yn(e[r],o[r]))}return e}function En(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Ln(){return"innerHeight"in Nt?Nt.innerHeight:zt.documentElement.offsetHeight}function xn(){return Nt.innerWidth}function An(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!qn(o,t);)o=o[n];return o}function Tn(e,t){return n(e,t,"previousElementSibling")}function kn(e,t){return n(e,t,"nextElementSibling")}function On(e){return e.previousElementSibling}function Mn(e){return e.nextElementSibling}function Cn(e){return e[e.length-1]}function Hn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?wn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function In(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function Bn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Rn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function Nn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function zn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||zt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(!n||r)&&n||(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function jn(e,t){o(e,t,!0)}function Pn(e,t){for("string"==typeof t&&(t=Qn(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function Dn(e){for(var t=zt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Vn(e,t){return e&&1===e.nodeType?qn(e,t)?e:Vn(e.parentNode,t):null}function Wn(e,t){r(e,e.nextSibling,t)}function Yn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=Qn(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Fn(){var e=zt.documentElement;return(Nt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Un(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function Xn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function _n(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Kn(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof Nt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=zt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function qn(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function $n(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Qn(e){var t=zt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Gn(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)!qn(o,t)&&null!=t||r.push(o),o=o[n];return r}function Jn(e,t){return a(e,t,"nextElementSibling")}function Zn(e,t){return a(e,t,"previousElementSibling")}return Nt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||Nt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),Nt.fp_utils={$:wn,deepExtend:yn,hasClass:En,getWindowHeight:Ln,css:An,until:n,prevUntil:Tn,nextUntil:kn,prev:On,next:Mn,last:Cn,index:Hn,getList:l,hide:In,show:Bn,isArrayOrList:i,addClass:Rn,removeClass:Nn,appendTo:zn,wrap:o,wrapAll:jn,wrapInner:Pn,unwrap:Dn,closest:Vn,after:Wn,before:Yn,insertBefore:r,getScrollTop:Fn,siblings:Un,preventDefault:Xn,isFunction:_n,trigger:Kn,matches:qn,toggle:$n,createElementFromHTML:Qn,remove:Gn,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:Jn,prevAll:Zn,showError:bn},function(e,E){var r=wn("html, body"),l=wn("html")[0],L=wn("body")[0];if(!En(l,Yt)){var p={};E=yn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:Nt.fp_scrolloverflow?Nt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?wn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},E);var x,i,s,o,a=!1,n=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),c="ontouchstart"in Nt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,u="string"==typeof e?wn(e)[0]:e,A=Ln(),f=xn(),h=!1,t=!0,T=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=yn({},v.m);var g,m,S,b,w,k,O,y,M,C=function(){var e;e=Nt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"};return e}(),H={touchmove:"ontouchmove"in Nt?"touchmove":C.move,touchstart:"ontouchstart"in Nt?"touchstart":C.down},I='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',B=!1;try{var R=Object.defineProperty({},"passive",{get:function(){B=!0}});Nt.addEventListener("testPassive",null,R),Nt.removeEventListener("testPassive",null,R)}catch(e){}var N,z,j=yn({},E),P=!1,D=!0,V=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];Mt(),Nt.fp_easings=yn(Nt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),u&&(p.version="3.0.8",p.setAutoScrolling=G,p.setRecordHistory=J,p.setScrollingSpeed=Z,p.setFitToSection=ee,p.setLockAnchors=function(e){E.lockAnchors=e},p.setMouseWheelScrolling=te,p.setAllowScrolling=ne,p.setKeyboardScrolling=re,p.moveSectionUp=ie,p.moveSectionDown=le,p.silentMoveTo=ae,p.moveTo=ce,p.moveSlideRight=se,p.moveSlideLeft=ue,p.fitToSection=xe,p.reBuild=fe,p.setResponsive=ve,p.getFullpageData=function(){return E},p.destroy=function(e){G(!1,"internal"),ne(!0),oe(!1),re(!1),Rn(u,Wt),[w,b,m,k,O,M,S].forEach(function(e){clearTimeout(e)}),Nt.removeEventListener("scroll",Le),Nt.removeEventListener("hashchange",$e),Nt.removeEventListener("resize",lt),zt.removeEventListener("keydown",Ge),zt.removeEventListener("keyup",Je),["click","touchstart"].forEach(function(e){zt.removeEventListener(e,pe)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){zt.removeEventListener(e,ge,!0)}),e&&(At(0),wn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",u).forEach(function(e){Ve(e,"src")}),wn("img[data-srcset]").forEach(function(e){Ve(e,"srcset")}),Gn(wn(tn+", "+vn+", "+hn)),An(wn(qt),{height:"","background-color":"",padding:""}),An(wn(rn),{width:""}),An(u,{height:"",position:"","-ms-touch-action":"","touch-action":""}),An(r,{overflow:"",height:""}),Nn(l,Yt),Nn(L,Dt),L.className.split(/\s+/).forEach(function(e){0===e.indexOf(Ft)&&Nn(L,e)}),wn(qt+", "+rn).forEach(function(e){E.scrollOverflowHandler&&E.scrollOverflow&&E.scrollOverflowHandler.remove(e),Nn(e,fn+" "+Ut+" "+_t),e.getAttribute("data-fp-styles")&&e.setAttribute("style",e.getAttribute("data-fp-styles")),En(e,Kt)&&!P&&e.removeAttribute("data-anchor")}),ut(u),[Gt,un,cn].forEach(function(e){wn(e,u).forEach(function(e){Dn(e)})}),An(u,{"-webkit-transition":"none",transition:"none"}),Nt.scrollTo(0,0),[Kt,on,sn].forEach(function(e){Nn(wn("."+e),e)}))},p.getActiveSection=function(){return new Bt(wn($t)[0])},p.getActiveSlide=function(){return je(wn(ln,wn($t)[0])[0])},p.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<wn(E.sectionSelector,u).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<wn(E.sectionSelector,u).length;t++)e.push(0);return e}(),options:E,setAutoScrolling:G},p.shared={afterRenderActions:Ee,isNormalScrollElement:!1},Nt.fullpage_api=p,E.$&&Object.keys(p).forEach(function(e){E.$.fn.fullpage[e]=p[e]}),function(){E.css3&&(E.css3=function(){var e,t=zt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",zt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=Nt.getComputedStyle(t).getPropertyValue(n[o]));return zt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}());E.scrollBar=E.scrollBar||E.hybrid,function(){if(!E.anchors.length){var e="[data-anchor]",t=wn(E.sectionSelector.split(",").join(e+",")+e,u);t.length&&(P=!0,t.forEach(function(e){E.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!E.navigationTooltips.length){var n="[data-tooltip]",o=wn(E.sectionSelector.split(",").join(n+",")+n,u);o.length&&o.forEach(function(e){E.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){An(u,{height:"100%",position:"relative"}),Rn(u,jt),Rn(l,Yt),A=Ln(),Nn(u,Wt),Rn(wn(E.sectionSelector,u),Kt),Rn(wn(E.slideSelector,u),on);for(var e=wn(qt),t=0;t<e.length;t++){var n=t,o=e[t],r=wn(rn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),be(o,n),we(o,n),0<i?Se(o,r,i):E.verticalCentered&&vt(o)}E.fixedElements&&E.css3&&wn(E.fixedElements).forEach(function(e){L.appendChild(e)});E.navigation&&function(){var e=zt.createElement("div");e.setAttribute("id",en);var t=zt.createElement("ul");e.appendChild(t),zn(e,L);var n=wn(tn)[0];Rn(n,"fp-"+E.navigationPosition),E.showActiveTooltip&&Rn(n,"fp-show-active");for(var o="",r=0;r<wn(qt).length;r++){var i="";E.anchors.length&&(i=E.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ye(r,"Section")+"</span><span></span></a>";var l=E.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+nn+" fp-"+E.navigationPosition+'">'+l+"</div>"),o+="</li>"}wn("ul",n)[0].innerHTML=o,An(wn(tn),{"margin-top":"-"+wn(tn)[0].offsetHeight/2+"px"});var a=wn("li",wn(tn)[0])[Hn(wn($t)[0],qt)];Rn(wn("a",a),Ut)}();wn('iframe[src*="youtube.com/embed/"]',u).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+function(e){return/\?/.test(e)?"&":"?"}(o)+n)}),E.scrollOverflow&&(g=E.scrollOverflowHandler.init(E))}(),ne(!0),oe(!0),G(E.autoScrolling,"internal"),ct(),Et(),"complete"===zt.readyState&&qe();Nt.addEventListener("load",qe),E.scrollOverflow||Ee();!function(){for(var e=1;e<4;e++)M=setTimeout(me,350*e)}()}(),Nt.addEventListener("scroll",Le),Nt.addEventListener("hashchange",$e),Nt.addEventListener("blur",nt),Nt.addEventListener("resize",lt),zt.addEventListener("keydown",Ge),zt.addEventListener("keyup",Je),["click","touchstart"].forEach(function(e){zt.addEventListener(e,pe)}),E.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){he(e,!1)}),["mouseleave","touchend"].forEach(function(e){he(e,!0)})));var W=!1,Y=0,F=0,U=0,X=0,_=0,K=(new Date).getTime(),q=0,$=0,Q=A;return p}function G(e,t){e||At(0),Ot("autoScrolling",e,t);var n=wn($t)[0];if(E.autoScrolling&&!E.scrollBar)An(r,{overflow:"hidden",height:"100%"}),J(j.recordHistory,"internal"),An(u,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&At(n.offsetTop);else if(An(r,{overflow:"visible",height:"initial"}),J(!!E.autoScrolling&&j.recordHistory,"internal"),An(u,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Pe(n.offsetTop);o.element.scrollTo(0,o.options)}}function J(e,t){Ot("recordHistory",e,t)}function Z(e,t){Ot("scrollingSpeed",e,t)}function ee(e,t){Ot("fitToSection",e,t)}function te(e){e?(function(){var e,t="";Nt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in zt.createElement("div")?"wheel":void 0!==zt.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!B&&{passive:!1};"DOMMouseScroll"==n?zt[e](t+"MozMousePixelScroll",He,o):zt[e](t+n,He,o)}(),u.addEventListener("mousedown",Ze),u.addEventListener("mouseup",et)):(zt.addEventListener?(zt.removeEventListener("mousewheel",He,!1),zt.removeEventListener("wheel",He,!1),zt.removeEventListener("MozMousePixelScroll",He,!1)):zt.detachEvent("onmousewheel",He),u.removeEventListener("mousedown",Ze),u.removeEventListener("mouseup",et))}function ne(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){kt(t,e,"m")}):kt(t,"all","m")}function oe(e){e?(te(!0),function(){if(n||c){E.autoScrolling&&(L.removeEventListener(H.touchmove,Te,{passive:!1}),L.addEventListener(H.touchmove,Te,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(H.touchstart,Me),e.removeEventListener(H.touchmove,ke,{passive:!1}),e.addEventListener(H.touchstart,Me),e.addEventListener(H.touchmove,ke,{passive:!1})}}()):(te(!1),function(){if(n||c){E.autoScrolling&&(L.removeEventListener(H.touchmove,ke,{passive:!1}),L.removeEventListener(H.touchmove,Te,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(H.touchstart,Me),e.removeEventListener(H.touchmove,ke,{passive:!1})}}())}function re(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){kt(t,e,"k")}):(kt(t,"all","k"),E.keyboardScrolling=t)}function ie(){var e=Tn(wn($t)[0],qt);e||!E.loopTop&&!E.continuousVertical||(e=Cn(wn(qt))),null!=e&&Re(e,null,!0)}function le(){var e=kn(wn($t)[0],qt);e||!E.loopBottom&&!E.continuousVertical||(e=wn(qt)[0]),null!=e&&Re(e,null,!1)}function ae(e,t){Z(0,"internal"),ce(e,t),Z(j.scrollingSpeed,"internal")}function ce(e,t){var n=gt(e);void 0!==t?mt(e,t):null!=n&&Re(n)}function se(e){Ie("right",e)}function ue(e){Ie("left",e)}function fe(e){if(!En(u,Wt)){h=!0,A=Ln(),f=xn();for(var t=wn(qt),n=0;n<t.length;++n){var o=t[n],r=wn(cn,o)[0],i=wn(rn,o);E.verticalCentered&&An(wn(Gt,o),{height:pt(o)+"px"}),An(o,{height:A+"px"}),1<i.length&&rt(r,wn(ln,r)[0])}E.scrollOverflow&&g.createScrollBarForAll();var l=Hn(wn($t)[0],qt);l&&ae(l+1),h=!1,_n(E.afterResize)&&e&&E.afterResize.call(u,Nt.innerWidth,Nt.innerHeight),_n(E.afterReBuild)&&!e&&E.afterReBuild.call(u)}}function de(){return En(L,Dt)}function ve(e){var t=de();e?t||(G(!1,"internal"),ee(!1,"internal"),In(wn(tn)),Rn(L,Dt),_n(E.afterResponsive)&&E.afterResponsive.call(u,e),E.scrollOverflow&&g.createScrollBarForAll()):t&&(G(j.autoScrolling,"internal"),ee(j.autoScrolling,"internal"),Bn(wn(tn)),Nn(L,Dt),_n(E.afterResponsive)&&E.afterResponsive.call(u,e))}function pe(e){var t=e.target;t&&Vn(t,tn+" a")?function(e){Xn(e);var t=Hn(Vn(this,tn+" li"));Re(wn(qt)[t])}.call(t,e):qn(t,".fp-tooltip")?function(){Kn(On(this),"click")}.call(t):qn(t,hn)?function(){var e=Vn(this,qt);En(this,gn)?v.m.left&&ue(e):v.m.right&&se(e)}.call(t,e):qn(t,pn)||null!=Vn(t,pn)?function(e){Xn(e);var t=wn(cn,Vn(this,qt))[0],n=wn(rn,t)[Hn(Vn(this,"li"))];rt(t,n)}.call(t,e):Vn(t,E.menu+" [data-menuanchor]")&&function(e){!wn(E.menu)[0]||!E.lockAnchors&&E.anchors.length||(Xn(e),ce(this.getAttribute("data-menuanchor")))}.call(t,e)}function he(e,t){zt["fp_"+e]=t,zt.addEventListener(e,ge,!0)}function ge(e){var t=e.type,o=!1,r=E.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==zt||!i)return oe(!0),void(r&&E.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(D=!1,setTimeout(function(){D=!0},800)),"mouseenter"===t&&!D||(E.normalScrollElements.split(",").forEach(function(e){if(!o){var t=qn(i,e),n=Vn(i,e);(t||n)&&(p.shared.isNormalScrollElement||(oe(!1),r&&E.scrollOverflowHandler.setIscroll(i,!1)),p.shared.isNormalScrollElement=!0,o=!0)}}),!o&&p.shared.isNormalScrollElement&&(oe(!0),r&&E.scrollOverflowHandler.setIscroll(i,!0),p.shared.isNormalScrollElement=!1))}function me(){var e=Ln(),t=xn();A===e&&f===t||(A=e,f=t,fe(!0))}function Se(e,t,n){var o=100*n,r=100/n,i=zt.createElement("div");i.className=an,jn(t,i);var l=zt.createElement("div");l.className=sn,jn(t,l),An(wn(un,e),{width:o+"%"}),1<n&&(E.controlArrows&&function(e){var t=[Qn('<div class="fp-controlArrow fp-prev"></div>'),Qn('<div class="fp-controlArrow fp-next"></div>')];Wn(wn(cn,e)[0],t),"#fff"!==E.controlArrowColor&&(An(wn(Sn,e),{"border-color":"transparent transparent transparent "+E.controlArrowColor}),An(wn(mn,e),{"border-color":"transparent "+E.controlArrowColor+" transparent transparent"}));E.loopHorizontal||In(wn(mn,e))}(e),E.slidesNavigation&&function(e,t){zn(Qn('<div class="'+dn+'"><ul></ul></div>'),e);var n=wn(vn,e)[0];Rn(n,"fp-"+E.slidesNavPosition);for(var o=0;o<t;o++)zn(Qn('<li><a href="#"><span class="fp-sr-only">'+ye(o,"Slide")+"</span><span></span></a></li>"),wn("ul",n)[0]);An(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Rn(wn("a",wn("li",n)[0]),Ut)}(e,n)),t.forEach(function(e){An(e,{width:r+"%"}),E.verticalCentered&&vt(e)});var a=wn(ln,e)[0];null!=a&&(0!==Hn(wn($t),qt)||0===Hn(wn($t),qt)&&0!==Hn(a))?xt(a,"internal"):Rn(t[0],Ut)}function be(e,t){t||null!=wn($t)[0]||Rn(e,Ut),o=wn($t)[0],An(e,{height:A+"px"}),E.paddingTop&&An(e,{"padding-top":E.paddingTop}),E.paddingBottom&&An(e,{"padding-bottom":E.paddingBottom}),void 0!==E.sectionsColor[t]&&An(e,{"background-color":E.sectionsColor[t]}),void 0!==E.anchors[t]&&e.setAttribute("data-anchor",E.anchors[t])}function we(e,t){void 0!==E.anchors[t]&&En(e,Ut)&&ft(E.anchors[t],t),E.menu&&E.css3&&null!=Vn(wn(E.menu)[0],Pt)&&wn(E.menu).forEach(function(e){L.appendChild(e)})}function ye(e,t){return E.navigationTooltips[e]||E.anchors[e]||t+" "+(e+1)}function Ee(){var e,t,n=wn($t)[0];Rn(n,_t),Ye(n),We(),Ue(n),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e=Qe(),t=gt(e.section),e.section&&t&&(void 0===t||Hn(t)!==Hn(o))||!_n(E.afterLoad)||Ne("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:Hn(n,qt)}),_n(E.afterRender)&&Ne("afterRender")}function Le(){var e,t,n,o,r,i;if(!E.autoScrolling||E.scrollBar){var l=Fn(),a=(i=Y<(r=l)?"down":"up",q=Y=r,i),c=0,s=l+Ln()/2,u=L.offsetHeight-Ln()===l,f=wn(qt);if(u)c=f.length-1;else if(l)for(var d=0;d<f.length;++d){f[d].offsetTop<=s&&(c=d)}else c=0;if(t=a,n=wn($t)[0].offsetTop,o=n+Ln(),("up"!=t?n<=Fn():o>=Fn()+Ln())&&(En(wn($t)[0],_t)||(Rn(wn($t)[0],_t),Nn(Un(wn($t)[0]),_t))),!En(e=f[c],Ut)){W=!0;var v,p,h=wn($t)[0],g=Hn(h,qt)+1,m=dt(e),S=e.getAttribute("data-anchor"),b=Hn(e,qt)+1,w=wn(ln,e)[0],y={activeSection:h,sectionIndex:b-1,anchorLink:S,element:e,leavingSection:g,direction:m};w&&(p=w.getAttribute("data-anchor"),v=Hn(w)),T&&(Rn(e,Ut),Nn(Un(e),Ut),_n(E.onLeave)&&Ne("onLeave",y),_n(E.afterLoad)&&Ne("afterLoad",y),_e(h),Ye(e),Ue(e),ft(S,b-1),E.anchors.length&&(x=S),bt(v,p,S,b)),clearTimeout(k),k=setTimeout(function(){W=!1},100)}E.fitToSection&&(clearTimeout(O),O=setTimeout(function(){E.fitToSection&&wn($t)[0].offsetHeight<=A&&xe()},E.fitToSectionDelay))}}function xe(){T&&(h=!0,Re(wn($t)[0]),h=!1)}function Ae(e){if(v.m[e]){var t="down"===e?le:ie;if(E.scrollOverflow){var n=E.scrollOverflowHandler.scrollable(wn($t)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!E.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Te(e){E.autoScrolling&&Oe(e)&&v.m.up&&Xn(e)}function ke(e){var t=Vn(e.target,qt)||wn($t)[0];if(Oe(e)){E.autoScrolling&&Xn(e);var n=Lt(e);X=n.y,_=n.x,wn(cn,t).length&&Math.abs(U-_)>Math.abs(F-X)?!a&&Math.abs(U-_)>xn()/100*E.touchSensitivity&&(_<U?v.m.right&&se(t):v.m.left&&ue(t)):E.autoScrolling&&T&&Math.abs(F-X)>Nt.innerHeight/100*E.touchSensitivity&&(X<F?Ae("down"):F<X&&Ae("up"))}}function Oe(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Me(e){if(E.fitToSection&&(N=!1),Oe(e)){var t=Lt(e);F=t.y,U=t.x}}function Ce(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function He(e){var t=(new Date).getTime(),n=En(wn(".fp-completely")[0],Zt);if(!v.m.down&&!v.m.up)return Xn(e),!1;if(E.autoScrolling&&!s&&!n){var o=(e=e||Nt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),E.scrollBar&&Xn(e);var a=t-K;if(K=t,200<a&&(d=[]),T){var c=Ce(d,10);Ce(d,70)<=c&&l&&Ae(r<0?"down":"up")}return!1}E.fitToSection&&(N=!1)}function Ie(e,t){var n=null==t?wn($t)[0]:t,o=wn(cn,n)[0];if(!(null==o||a||wn(rn,o).length<2)){var r=wn(ln,o)[0],i=null;if(null==(i="left"===e?Tn(r,rn):kn(r,rn))){if(!E.loopHorizontal)return;var l=Un(r);i="left"===e?l[l.length-1]:l[0]}a=!p.test.isTesting,rt(o,i,e)}}function Be(){for(var e=wn(ln),t=0;t<e.length;t++)xt(e[t],"internal")}function Re(e,t,n){if(null!=e){var o,r,i,l,a,c,s,u,f,d={element:e,callback:t,isMovementUp:n,dtop:(r=(o=e).offsetHeight,i=o.offsetTop,a=q<(l=i),c=l-A+r,s=E.bigSectionsDestination,A<r?(a||s)&&"bottom"!==s||(l=c):(a||h&&null==Mn(o))&&(l=c),q=l),yMovement:dt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:Hn(e,qt),activeSlide:wn(ln,e)[0],activeSection:wn($t)[0],leavingSection:Hn(wn($t),qt)+1,localIsResizing:h};if(!(d.activeSection==e&&!h||E.scrollBar&&Fn()===d.dtop&&!En(e,Jt))){if(null!=d.activeSlide&&(u=d.activeSlide.getAttribute("data-anchor"),f=Hn(d.activeSlide)),!d.localIsResizing){var v=d.yMovement;if(void 0!==n&&(v=n?"up":"down"),d.direction=v,_n(E.onLeave)&&!1===Ne("onLeave",d))return}E.autoScrolling&&E.continuousVertical&&void 0!==d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&(d=function(e){e.isMovementUp?Yn(wn($t)[0],Jn(e.activeSection,qt)):Wn(wn($t)[0],Zn(e.activeSection,qt).reverse());return At(wn($t)[0].offsetTop),Be(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=dt(e.element),e}(d)),d.localIsResizing||_e(d.activeSection),E.scrollOverflow&&E.scrollOverflowHandler.beforeLeave(),Rn(e,Ut),Nn(Un(e),Ut),Ye(e),E.scrollOverflow&&E.scrollOverflowHandler.onLeave(),T=p.test.isTesting,bt(f,u,d.anchorLink,d.sectionIndex),function(e){if(E.css3&&E.autoScrolling&&!E.scrollBar){ht("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),E.scrollingSpeed?(clearTimeout(b),b=setTimeout(function(){De(e)},E.scrollingSpeed)):De(e)}else{var t=Pe(e.dtop);p.test.top=-e.dtop+"px",Ct(t.element,t.options,E.scrollingSpeed,function(){E.scrollBar?setTimeout(function(){De(e)},30):De(e)})}}(d),x=d.anchorLink,ft(d.anchorLink,d.sectionIndex)}}}function Ne(e,t){var n,o=function(e,t){var n;n=E.v2compatible?{afterRender:function(){return[u]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:ze(wn($t)[0]),slide:je(wn(ln,wn($t)[0])[0])}},onLeave:function(){return{origin:ze(t.activeSection),destination:ze(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:ze(t.section),origin:je(t.prevSlide),destination:je(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}};return n[e]()}(e,t);if(E.v2compatible){if(!1===E[e].apply(o[0],o.slice(1)))return!1}else if(Kn(u,e,o),!1===E[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function ze(e){return e?new Bt(e):null}function je(e){return e?new Rt(e):null}function Pe(e){var t={};return E.autoScrolling&&!E.scrollBar?(t.options=-e,t.element=wn(Pt)[0]):(t.options=e,t.element=Nt),t}function De(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Yn(wn(qt)[0],t.wrapAroundElements):Wn(wn(qt)[wn(qt).length-1],t.wrapAroundElements),At(wn($t)[0].offsetTop),Be()),_n(E.afterLoad)&&!e.localIsResizing&&Ne("afterLoad",e),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e.localIsResizing||Ue(e.element),Rn(e.element,_t),Nn(Un(e.element),_t),We(),T=!0,_n(e.callback)&&e.callback()}function Ve(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function We(){var e=wn(".fp-auto-height")[0]||de()&&wn(".fp-auto-height-responsive")[0];E.lazyLoading&&e&&wn(qt+":not("+Xt+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<A&&0<n||2<o&&o<A)&&Ye(e)})}function Ye(o){E.lazyLoading&&wn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Ke(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Ve(n,e),n.addEventListener("load",function(){Fe(o)}))}),qn(n,"source")){var e=Vn(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){Fe(o)})}})}function Fe(e){E.scrollOverflow&&(clearTimeout(z),z=setTimeout(function(){g.createScrollBar(e)},200))}function Ue(e){var t=Ke(e);wn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),wn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Xe(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Xe(e)}})}function Xe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function _e(e){var t=Ke(e);wn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),wn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Ke(e){var t=wn(ln,e);return t.length&&(e=t[0]),e}function qe(){var e=Qe(),t=e.section,n=e.slide;t&&(E.animateAnchor?mt(t,n):ae(t,n))}function $e(){if(!W&&!E.lockAnchors){var e=Qe(),t=e.section,n=e.slide,o=void 0===x,r=void 0===x&&void 0===n&&!a;t&&t.length&&(t&&t!==x&&!o||r||!a&&i!=n)&&mt(t,n)}}function Qe(){var e,t,n=Nt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function Ge(e){clearTimeout(y);var t=zt.activeElement,n=e.keyCode;if(9===n)!function(e){var t=e.shiftKey,n=zt.activeElement,o=tt(Ke(wn($t)[0]));function r(e){return Xn(e),o[0]?o[0].focus():null}if(function(e){var t=tt(zt),n=t.indexOf(zt.activeElement),o=e.shiftKey?n-1:n+1,r=t[o],i=je(Vn(r,rn)),l=ze(Vn(r,qt));return!i&&!l}(e))return;n?null==Vn(n,$t+","+$t+" "+ln)&&(n=r(e)):r(e);(!t&&n==o[o.length-1]||t&&n==o[0])&&Xn(e)}(e);else if(!qn(t,"textarea")&&!qn(t,"input")&&!qn(t,"select")&&"true"!==t.getAttribute("contentEditable")&&""!==t.getAttribute("contentEditable")&&E.keyboardScrolling&&E.autoScrolling){-1<[40,38,32,33,34].indexOf(n)&&Xn(e),s=e.ctrlKey,y=setTimeout(function(){!function(e){var t=e.shiftKey,n=zt.activeElement,o=qn(n,"video")||qn(n,"audio");if(!T&&[37,39].indexOf(e.keyCode)<0)return;switch(e.keyCode){case 38:case 33:v.k.up&&ie();break;case 32:if(t&&v.k.up&&!o){ie();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||le());break;case 36:v.k.up&&ce(1);break;case 35:v.k.down&&ce(wn(qt).length);break;case 37:v.k.left&&ue();break;case 39:v.k.right&&se();break;default:;}}(e)},150)}}function Je(e){t&&(s=e.ctrlKey)}function Ze(e){2==e.which&&($=e.pageY,u.addEventListener("mousemove",ot))}function et(e){2==e.which&&u.removeEventListener("mousemove",ot)}function tt(e){return[].slice.call(wn(I,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function nt(){s=t=!1}function ot(e){E.autoScrolling&&(T&&(e.pageY<$&&v.m.up?ie():e.pageY>$&&v.m.down&&le()),$=e.pageY)}function rt(e,t,n){var o=Vn(e,qt),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:Hn(t),section:o,sectionIndex:Hn(o,qt),anchorLink:o.getAttribute("data-anchor"),slidesNav:wn(vn,o)[0],slideAnchor:yt(t),prevSlide:wn(ln,o)[0],prevSlideIndex:Hn(wn(ln,o)[0]),localIsResizing:h};r.xMovement=function(e,t){if(e==t)return"none";if(t<e)return"left";return"right"}(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(T=!1),E.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&_n(E.onSlideLeave)&&!1===Ne("onSlideLeave",r)?a=!1:(Rn(t,Ut),Nn(Un(t),Ut),r.localIsResizing||(_e(r.prevSlide),Ye(t)),!E.loopHorizontal&&E.controlArrows&&($n(wn(mn,o),0!==r.slideIndex),$n(wn(Sn,o),null!=Mn(t))),En(o,Ut)&&!r.localIsResizing&&bt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),function(e,t,n){var o=t.destinyPos;if(E.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";p.test.translate3dH[t.sectionIndex]=r,An(st(wn(un,e)),Tt(r)),w=setTimeout(function(){n&&it(t)},E.scrollingSpeed)}else p.test.left[t.sectionIndex]=Math.round(o.left),Ct(e,Math.round(o.left),E.scrollingSpeed,function(){n&&it(t)})}(e,r,!0))}function it(e){var t,n;t=e.slidesNav,n=e.slideIndex,E.slidesNavigation&&null!=t&&(Nn(wn(Xt,t),Ut),Rn(wn("a",wn("li",t)[n]),Ut)),e.localIsResizing||(_n(E.afterSlideLoad)&&Ne("afterSlideLoad",e),T=!0,Ue(e.destiny)),a=!1}function lt(){clearTimeout(m),m=setTimeout(function(){for(var e=0;e<4;e++)S=setTimeout(at,200*e)},200)}function at(){if(ct(),n){var e=zt.activeElement;if(!qn(e,"textarea")&&!qn(e,"input")&&!qn(e,"select")){var t=Ln();Math.abs(t-Q)>20*Math.max(Q,t)/100&&(fe(!0),Q=t)}}else me()}function ct(){var e=E.responsive||E.responsiveWidth,t=E.responsiveHeight,n=e&&Nt.innerWidth<e,o=t&&Nt.innerHeight<t;e&&t?ve(n||o):e?ve(n):t&&ve(o)}function st(e){var t="all "+E.scrollingSpeed+"ms "+E.easingcss3;return Nn(e,Vt),An(e,{"-webkit-transition":t,transition:t})}function ut(e){return Rn(e,Vt)}function ft(e,t){var n,o,r;n=e,wn(E.menu).forEach(function(e){E.menu&&null!=e&&(Nn(wn(Xt,e),Ut),Rn(wn('[data-menuanchor="'+n+'"]',e),Ut))}),o=e,r=t,E.navigation&&null!=wn(tn)[0]&&(Nn(wn(Xt,wn(tn)[0]),Ut),Rn(o?wn('a[href="#'+o+'"]',wn(tn)[0]):wn("a",wn("li",wn(tn)[0])[r]),Ut))}function dt(e){var t=Hn(wn($t)[0],qt),n=Hn(e,qt);return t==n?"none":n<t?"up":"down"}function vt(e){if(!En(e,fn)){var t=zt.createElement("div");t.className=Qt,t.style.height=pt(e)+"px",Rn(e,fn),Pn(e,t)}}function pt(e){var t=A;if(E.paddingTop||E.paddingBottom){var n=e;En(n,Kt)||(n=Vn(e,qt));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=A-o}return t}function ht(e,t){t?st(u):ut(u),An(u,Tt(e)),p.test.translate3d=e,setTimeout(function(){Nn(u,Vt)},10)}function gt(e){var t=wn(qt+'[data-anchor="'+e+'"]',u)[0];if(!t){var n=void 0!==e?e-1:0;t=wn(qt)[n]}return t}function mt(e,t){var n=gt(e);if(null!=n){var o,r,i,l=(null==(i=wn(rn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=wn(rn,r)[o]),i);yt(n)===x||En(n,Ut)?St(l):Re(n,function(){St(l)})}}function St(e){null!=e&&rt(Vn(e,cn),e)}function bt(e,t,n){var o="";E.anchors.length&&!E.lockAnchors&&(e?(null!=n&&(o=n),null==t&&(t=e),wt(o+"/"+(i=t))):(null!=e&&(i=t),wt(n))),Et()}function wt(e){if(E.recordHistory)location.hash=e;else if(n||c)Nt.history.replaceState(void 0,void 0,"#"+e);else{var t=Nt.location.href.split("#")[0];Nt.location.replace(t+"#"+e)}}function yt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=Hn(e);return null==t&&(t=n),t}function Et(){var e=wn($t)[0],t=wn(ln,e)[0],n=yt(e),o=yt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+Ft+"-[^\\s]+\\b","g");L.className=L.className.replace(i,""),Rn(L,Ft+"-"+r)}function Lt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,c&&Oe(e)&&E.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function xt(e,t){Z(0,"internal"),void 0!==t&&(h=!0),rt(Vn(e,cn),e),void 0!==t&&(h=!1),Z(j.scrollingSpeed,"internal")}function At(e){var t=Math.round(e);if(E.css3&&E.autoScrolling&&!E.scrollBar)ht("translate3d(0px, -"+t+"px, 0px)",!1);else if(E.autoScrolling&&!E.scrollBar)An(u,{top:-t+"px"}),p.test.top=-t+"px";else{var n=Pe(t);Ht(n.element,n.options)}}function Tt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function kt(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function Ot(e,t,n){E[e]=t,"internal"!==n&&(j[e]=t)}function Mt(){var e=E.licenseKey,t="font-size: 15px;background:yellow;";e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)),En(l,Yt)?bn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(E.continuousVertical&&(E.loopTop||E.loopBottom)&&(E.continuousVertical=!1,bn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!E.scrollOverflow||!E.scrollBar&&E.autoScrolling||bn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!E.continuousVertical||!E.scrollBar&&E.autoScrolling||(E.continuousVertical=!1,bn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),E.scrollOverflow&&null==E.scrollOverflowHandler&&(E.scrollOverflow=!1,bn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),V.forEach(function(e){E[e]&&bn("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),E.anchors.forEach(function(t){var e=[].slice.call(wn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(wn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){bn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&bn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function Ct(t,n,o,r){var e,i=(e=t).self!=Nt&&En(e,an)?e.scrollLeft:!E.autoScrolling||E.scrollBar?Fn():e.offsetTop,l=n-i,a=0;N=!0;var c=function(){if(N){var e=n;a+=20,o&&(e=Nt.fp_easings[E.easing](a,i,l,o)),Ht(t,e),a<o?setTimeout(c,20):void 0!==r&&r()}else a<o&&r()};c()}function Ht(e,t){!E.autoScrolling||E.scrollBar||e.self!=Nt&&En(e,an)?e.self!=Nt&&En(e,an)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function It(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=Hn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Bt(e){It.call(this,e,qt)}function Rt(e){It.call(this,e,rn)}Mt()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);