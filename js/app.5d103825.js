(function(){"use strict";var e={904:function(e,t,n){var r=n(144),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u=n(1),a={},s=(0,u.Z)(a,o,i,!1,null,null,null),c=s.exports,l=n(345),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("w-page-block",[t("w-counter"),t("p",[e._v("Свадьба")]),t("p",[e._v("Коли и Кати")]),t("p",[e._v("1.07.2023")])],1),t("w-page-block",{attrs:{color:"blue"}},[t("p",[e._v("Дорогие мама и папа!")]),t("p",[e._v("Теĸст приглашения")])]),t("w-page-block",{attrs:{color:"green"}},[e._v("3333")]),t("w-page-block",{attrs:{color:"aqua"}},[e._v("4444")])],1)},d=[],p={name:"MainPage"},h=p,v=(0,u.Z)(h,f,d,!1,null,null,null),b=v.exports;r.ZP.use(l.ZP);const m=[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,168))}],g=new l.ZP({mode:"history",base:"/kkwedding.github.io/",routes:m});var y=g,w={},k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-block",class:e.classes,style:e.styles},[e._t("default")],2)},_=[],O={name:"w-page-block",props:{color:{type:String,default:"bisque"},centered:{type:Boolean,default:!0}},computed:{styles(){return{"background-color":this.color}},classes(){return{flex:this.centered,column:this.centered,"justify-center":this.centered,"align-center":this.centered}}}},j=O,P=(0,u.Z)(j,k,_,!1,null,"7bdc735a",null),x=P.exports,Z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex row"},[e._v(" дней: "+e._s(e.counter.days)+", времени: "+e._s(e.counter.hours)+":"+e._s(e.counter.minutes)+":"+e._s(e.counter.seconds)+" ")])},C=[],T={name:"w-counter",data(){return{weddingDate:"July 1 2023 15:00:00 GMT+03:00",interval:null,counter:{}}},methods:{timeRemaining(){const e=Date.parse(this.weddingDate)-Date.parse(new Date);let t=Math.floor(e/1e3%60),n=Math.floor(e/1e3/60%60),r=Math.floor(e/36e5%24),o=Math.floor(e/864e5);return t<10&&(t=`0${t}`),n<10&&(n=`0${n}`),r<10&&(r=`0${r}`),{total:e,days:o,hours:r,minutes:n,seconds:t}}},computed:{styles(){return{}},classes(){return{}}},mounted(){this.interval=setInterval((()=>this.counter=this.timeRemaining()),1e3,this)},beforeDestroy(){clearInterval(this.interval)}},M=T,D=(0,u.Z)(M,Z,C,!1,null,"0642d088",null),E=D.exports,S={install(e){e.component(x.name,x),e.component(E.name,E)}},A={install(e,t){e.use(w),e.use(S,t)}};r.ZP.config.productionTip=!1,r.ZP.use(A,{router:y}),new r.ZP({router:y,render:e=>e(c)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.8b0f6bb9.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="kkwedding.github.io:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/kkwedding.github.io/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var l=s(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkkkwedding_github_io"]=self["webpackChunkkkwedding_github_io"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(904)}));r=n.O(r)})();
//# sourceMappingURL=app.5d103825.js.map