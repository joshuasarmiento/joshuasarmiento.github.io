import{_ as Xe,o as c,c as d,b as t,k as F,l as y,m as L,r as u,q as T,s as j,x as Ee,y as Be,z as Ve,A as ye,B as ie,C as ke,F as A,a as Ue,f as B,h as Se,u as G,d as O,D as Pe,w as Y,t as x,i as w,E as Ie,G as ze}from"./index.905f41cf.js";import{p as je}from"./projects.a437b287.js";const Re={},He={"aria-label":"Breadcrumb",class:"block md:hidden animate-fade-up"},Ye={class:"flex items-center gap-1 -m-1 text-sm text-gray-600"},Ge=t("li",{class:"rotate-180"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})])],-1),We={class:""};function Fe(e,s){return c(),d("nav",He,[t("ol",Ye,[Ge,t("li",We,[t("a",{onClick:s[0]||(s[0]=a=>e.$router.go(-1)),class:"cursor-pointer block transition"}," Back ")])])])}const qe=Xe(Re,[["render",Fe]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Te={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function Je({config:e,slidesCount:s}){const{snapAlign:a,wrapAround:l,itemsToShow:n=1}=e;if(l)return Math.max(s-1,0);let r;switch(a){case"start":r=s-n;break;case"end":r=s-1;break;case"center":case"center-odd":r=s-Math.ceil((n-.5)/2);break;case"center-even":r=s-Math.ceil(n/2);break;default:r=0;break}return Math.max(r,0)}function Ke({config:e,slidesCount:s}){const{wrapAround:a,snapAlign:l,itemsToShow:n=1}=e;let r=0;if(a||n>s)return r;switch(l){case"start":r=0;break;case"end":r=n-1;break;case"center":case"center-odd":r=Math.floor((n-1)/2);break;case"center-even":r=Math.floor((n-2)/2);break;default:r=0;break}return r}function re({val:e,max:s,min:a}){return s<a?e:Math.min(Math.max(e,a),s)}function Qe({config:e,currentSlide:s,slidesCount:a}){const{snapAlign:l,wrapAround:n,itemsToShow:r=1}=e;let _=s;switch(l){case"center":case"center-odd":_-=(r-1)/2;break;case"center-even":_-=(r-2)/2;break;case"end":_-=r-1;break}return n?_:re({val:_,max:a-r,min:0})}function Oe(e){return e?e.reduce((s,a)=>{var l;return a.type===A?[...s,...Oe(a.children)]:((l=a.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?[...s,a]:s},[]):[]}function W({val:e,max:s,min:a=0}){return e>s?W({val:e-(s+1),max:s,min:a}):e<a?W({val:e+(s+1),max:s,min:a}):e}function Ze(e,s){let a;return s?function(...l){const n=this;a||(e.apply(n,l),a=!0,setTimeout(()=>a=!1,s))}:e}function et(e,s){let a;return function(...l){a&&clearTimeout(a),a=setTimeout(()=>{e(...l),a=null},s)}}function Me(e="",s={}){return Object.entries(s).reduce((a,[l,n])=>a.replace(`{${l}}`,String(n)),e)}var tt=F({name:"ARIA",setup(){const e=y("config",L(Object.assign({},v))),s=y("currentSlide",u(0)),a=y("slidesCount",u(0));return()=>T("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Me(e.i18n.itemXofY,{currentSlide:s.value+1,slidesCount:a.value}))}}),Ae=F({name:"Carousel",props:Te,setup(e,{slots:s,emit:a,expose:l}){var n;const r=u(null),_=u([]),m=u(0),p=u(0),i=L(Object.assign({},v));let k=Object.assign({},v),C;const f=u((n=e.modelValue)!==null&&n!==void 0?n:0),q=u(0),ce=u(0),M=u(0),N=u(0);let D,J;j("config",i),j("slidesCount",p),j("currentSlide",f),j("maxSlide",M),j("minSlide",N),j("slideWidth",m);function K(){C=Object.assign({},e.breakpoints),k=Object.assign(Object.assign(Object.assign({},k),e),{i18n:Object.assign(Object.assign({},k.i18n),e.i18n),breakpoints:void 0}),de(k)}function V(){if(!C||!Object.keys(C).length)return;const o=Object.keys(C).map(h=>Number(h)).sort((h,S)=>+S-+h);let g=Object.assign({},k);o.some(h=>{const S=window.matchMedia(`(min-width: ${h}px)`).matches;return S&&(g=Object.assign(Object.assign({},g),C[h])),S}),de(g)}function de(o){Object.entries(o).forEach(([g,h])=>i[g]=h)}const ue=et(()=>{V(),X()},16);function X(){if(!r.value)return;const o=r.value.getBoundingClientRect();m.value=o.width/i.itemsToShow}function Q(){p.value<=0||(ce.value=Math.ceil((p.value-1)/2),M.value=Je({config:i,slidesCount:p.value}),N.value=Ke({config:i,slidesCount:p.value}),i.wrapAround||(f.value=re({val:f.value,max:M.value,min:N.value})))}Ee(()=>{Be(()=>X()),setTimeout(()=>X(),1e3),V(),ve(),window.addEventListener("resize",ue,{passive:!0}),a("init")}),Ve(()=>{J&&clearTimeout(J),D&&clearInterval(D),window.removeEventListener("resize",ue,{passive:!0})});let b=!1;const P={x:0,y:0},z={x:0,y:0},$=L({x:0,y:0}),R=u(!1),Z=u(!1),De=()=>{R.value=!0},Le=()=>{R.value=!1};function me(o){["INPUT","TEXTAREA","SELECT"].includes(o.target.tagName)||(b=o.type==="touchstart",b||o.preventDefault(),!(!b&&o.button!==0||U.value)&&(P.x=b?o.touches[0].clientX:o.clientX,P.y=b?o.touches[0].clientY:o.clientY,document.addEventListener(b?"touchmove":"mousemove",he,!0),document.addEventListener(b?"touchend":"mouseup",fe,!0)))}const he=Ze(o=>{Z.value=!0,z.x=b?o.touches[0].clientX:o.clientX,z.y=b?o.touches[0].clientY:o.clientY;const g=z.x-P.x,h=z.y-P.y;$.y=h,$.x=g},i.throttle);function fe(){const o=i.dir==="rtl"?-1:1,g=Math.sign($.x)*.4,h=Math.round($.x/m.value+g)*o;if(h&&!b){const S=se=>{se.stopPropagation(),window.removeEventListener("click",S,!0)};window.addEventListener("click",S,!0)}I(f.value-h),$.x=0,$.y=0,Z.value=!1,document.removeEventListener(b?"touchmove":"mousemove",he,!0),document.removeEventListener(b?"touchend":"mouseup",fe,!0)}function ve(){!i.autoplay||i.autoplay<=0||(D=setInterval(()=>{i.pauseAutoplayOnHover&&R.value||H()},i.autoplay))}function pe(){D&&(clearInterval(D),D=null),ve()}const U=u(!1);function I(o){const g=i.wrapAround?o:re({val:o,max:M.value,min:N.value});f.value===g||U.value||(a("slide-start",{slidingToIndex:o,currentSlideIndex:f.value,prevSlideIndex:q.value,slidesCount:p.value}),U.value=!0,q.value=f.value,f.value=g,J=setTimeout(()=>{if(i.wrapAround){const h=W({val:g,max:M.value,min:0});h!==f.value&&(f.value=h,a("loop",{currentSlideIndex:f.value,slidingToIndex:o}))}a("update:modelValue",f.value),a("slide-end",{currentSlideIndex:f.value,prevSlideIndex:q.value,slidesCount:p.value}),U.value=!1,pe()},i.transition))}function H(){I(f.value+i.itemsToScroll)}function ee(){I(f.value-i.itemsToScroll)}const ge={slideTo:I,next:H,prev:ee};j("nav",ge),j("isSliding",U);const _e=ye(()=>Qe({config:i,currentSlide:f.value,slidesCount:p.value}));j("slidesToScroll",_e);const Ne=ye(()=>{const o=i.dir==="rtl"?-1:1,g=_e.value*m.value*o;return{transform:`translateX(${$.x-g}px)`,transition:`${U.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${p.value*m.value}px`:"",width:"100%"}});function xe(){K(),V(),Q(),X(),pe()}Object.keys(Te).forEach(o=>{["modelValue"].includes(o)||ie(()=>e[o],xe)}),ie(()=>e.modelValue,o=>{o!==f.value&&I(Number(o))}),ie(p,Q),a("before-init"),K();const be={config:i,slidesCount:p,slideWidth:m,next:H,prev:ee,slideTo:I,currentSlide:f,maxSlide:M,minSlide:N,middleSlide:ce};l({updateBreakpointsConfigs:V,updateSlidesData:Q,updateSlideWidth:X,initDefaultConfigs:K,restartCarousel:xe,slideTo:I,next:H,prev:ee,nav:ge,data:be});const te=s.default||s.slides,ne=s.addons,we=L(be);return()=>{const o=Oe(te==null?void 0:te(we)),g=(ne==null?void 0:ne(we))||[];o.forEach((ae,oe)=>ae.props.index=oe);let h=o;if(i.wrapAround){const ae=o.map((le,E)=>ke(le,{index:-o.length+E,isClone:!0,key:`clone-before-${E}`})),oe=o.map((le,E)=>ke(le,{index:o.length+E,isClone:!0,key:`clone-after-${E}`}));h=[...ae,...o,...oe]}_.value=o,p.value=Math.max(o.length,1);const S=T("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:i.mouseDrag?me:null,onTouchstartPassiveCapture:i.touchDrag?me:null},h),se=T("div",{class:"carousel__viewport"},S);return T("section",{ref:r,class:{carousel:!0,"is-sliding":U.value,"is-dragging":Z.value,"is-hover":R.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:De,onMouseleave:Le},[se,g,T(tt)])}}}),Ce;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(Ce||(Ce={}));const nt=()=>{const e=y("config",L(Object.assign({},v))),s=y("maxSlide",u(1)),a=y("minSlide",u(1)),l=y("currentSlide",u(1)),n=y("nav",{}),r=m=>W({val:l.value,max:s.value,min:0})===m,_=[];for(let m=a.value;m<s.value+1;m++){const p=T("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(m)},"aria-label":Me(e.i18n.ariaNavigateToSlide,{slideNumber:m+1}),onClick:()=>n.slideTo(m)}),i=T("li",{class:"carousel__pagination-item",key:m},p);_.push(i)}return T("ol",{class:"carousel__pagination"},_)};var $e=F({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:s}){const a=y("config",L(Object.assign({},v))),l=y("currentSlide",u(0)),n=y("slidesToScroll",u(0)),r=y("isSliding",u(!1)),_=()=>e.index===l.value,m=()=>e.index===l.value-1,p=()=>e.index===l.value+1,i=()=>{const k=Math.floor(n.value),C=Math.ceil(n.value+a.itemsToShow-1);return e.index>=k&&e.index<=C};return()=>{var k;return T("li",{style:{width:`${100/a.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":i(),"carousel__slide--active":_(),"carousel__slide--prev":m(),"carousel__slide--next":p(),"carousel__slide--sliding":r.value},"aria-hidden":!i()},(k=s.default)===null||k===void 0?void 0:k.call(s))}}});const st={class:""},at={class:"rounded-lg"},ot=["alt"],lt={__name:"CarouselSection",props:{project:Object},setup(e){return F({name:"Autoplay",components:{Carousel:Ae,Slide:$e,Pagination:nt}}),(s,a)=>{const l=Ue("lazy");return c(),d("div",st,[B(G(Ae),{autoplay:3e3,"wrap-around":!0,class:"w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none shadow-md"},{default:Se(()=>[(c(!0),d(A,null,O(e.project,n=>(c(),Pe(G($e),{key:n,class:""},{default:Se(()=>[t("div",at,[Y(t("img",{alt:n,loading:"lazy",fetchpriority:"high",decoding:"async","data-nimg":"1",class:"w-full md:rounded-lg",style:{color:"transparent"},width:"700",height:"350"},null,8,ot),[[l,{src:n}]])])]),_:2},1024))),128))]),_:1})])}}},it={key:0,class:"mt-8 md:mt-16 scroll-smooth"},rt={class:"flex flex-col gap-20"},ct={class:"flex flex-col gap-3"},dt={class:"flex space-x-4"},ut={class:"text-secondary animate-fade-up"},mt={datetime:"2023-03-05"},ht={key:0,class:"animate-fade-up inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"},ft=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"-ms-1 me-1.5 h-4 w-4"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"})],-1),vt=t("p",{class:"whitespace-nowrap text-sm"},"Ongoing",-1),pt=[ft,vt],gt={class:"text-primary animate-fd-1 text-3xl font-bold tracking-tight leading-tight"},_t={class:"text-xl text-secondary animate-fd-2"},xt={key:0},bt=t("div",{class:"h-4"},null,-1),wt=t("p",{class:"text-secondary animate-fd-3"},[t("time",{datetime:"2023-03-05"},"Time spent in the project:")],-1),yt={class:"flex space-x-4 mt-2 animate-fd-4"},kt={alt:""},St=t("div",{class:"h-8"},null,-1),jt=t("div",{class:"h-16"},null,-1),Tt={class:"animate-fd-6"},At=t("h2",{class:"text-xl font-bold tracking-wide mb-4"},"Objective",-1),Ct=t("div",{class:"h-10"},null,-1),$t={class:"animate-fd-7"},Ut=t("h2",{class:"text-xl font-bold tracking-wide mb-4"},"Tools and Technologies Used",-1),It=["src"],Ot=t("br",null,null,-1),Mt={class:"pr-2"},Dt={key:1,class:"h-10"},Lt={key:2,class:"animate-fd-8"},Nt=["src"],Xt=t("div",{class:"h-10"},null,-1),Et={class:"animate-fd-9"},Bt=t("h2",{class:"text-xl font-bold tracking-wide mb-4"},"Challenge",-1),Vt={key:3,class:"h-10"},Pt={key:4,class:"animate-fd-10"},zt={alt:"Poster",class:"rounded-lg"},Rt={key:5,class:"h-8"},Ht=["href"],Yt=Ie('<span class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 group-hover:h-1 group-hover:animate-fade-up group-hover:animate-duration-[200ms]"></span><span class="absolute -end-full transition-all group-hover:end-4"><svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span><span class="text-sm font-medium transition-all group-hover:me-4"> Visit the website </span>',3),Gt=[Yt],Wt=t("div",{class:"divider py-8"},null,-1),Ft=t("h2",{class:"animate-fd-12 text-xl font-bold tracking-wide mb-4"},"Other Contributors",-1),qt={key:7,class:"animate-fd-12 border border-neutral-500 rounded-md p-4 w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16"},Jt={class:"flex items-center gap-4"},Kt={class:"h-16 w-16 rounded-full object-cover"},Qt={class:"text-md font-medium"},Zt={class:"flow-root"},en={class:"-m-1 flex flex-wrap"},tn={key:0,class:"p-1 leading-none"},nn=["href"],sn=t("span",{class:"absolute -end-full transition-all group-hover:end-4"},[t("svg",{class:"h-4 w-4 ml-auto text-secondary rtl:rotate-180",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"})])],-1),an=t("span",{class:"text-xs font-medium group-hover:me-4"}," Contact ",-1),on=[sn,an],ln={class:"hidden sm:block text-end"},rn={class:"text-sm font-medium text-secondary"},cn={class:"text-xs font-medium"},dn={__name:"ProjectDev",props:{data:{type:Object},project:{type:Object}},setup(e){return(s,a)=>{const l=Ue("lazy");return e.data?(c(),d("section",it,[t("div",rt,[t("article",null,[t("div",ct,[t("div",dt,[t("p",ut,[t("time",mt,x(e.data.date),1)]),e.data.isOngoing?(c(),d("span",ht,pt)):w("",!0)]),t("h1",gt,x(e.data.subject),1),t("p",_t,x(e.data.titleDesc),1)]),e.project.badges!=""?(c(),d("div",xt,[bt,wt,t("div",yt,[(c(!0),d(A,null,O(e.project.badges,n=>(c(),d("div",{key:n},[Y(t("img",kt,null,512),[[l,{src:n}]])]))),128))])])):w("",!0),St,B(lt,{project:e.project.img,class:"animate-fd-5"},null,8,["project"]),jt,t("div",Tt,[At,t("p",null,x(e.data.objective),1)]),Ct,t("div",$t,[Ut,(c(!0),d(A,null,O(e.project.icons,n=>(c(),d("div",{key:n,class:"inline-flex mr-4"},[t("img",{src:n,alt:"Programming Languages",class:"w-8 h-8"},null,8,It)]))),128)),Ot,(c(!0),d(A,null,O(e.project.tools,n=>(c(),d("ul",{key:n,class:"inline-flex"},[t("li",Mt,x(n)+" |",1)]))),128))]),e.data.embedLink?(c(),d("div",Dt)):w("",!0),e.data.embedLink?(c(),d("div",Lt,[t("iframe",{loading:"lazy",style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:"800",height:"450",class:"w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none",src:e.data.embedLink,allowfullscreen:""},null,8,Nt)])):w("",!0),Xt,t("div",Et,[Bt,(c(!0),d(A,null,O(e.project.challenge,n=>(c(),d("p",{key:n,class:"pb-4"},x(n),1))),128))]),e.project.poster?(c(),d("div",Vt)):w("",!0),e.project.poster?(c(),d("div",Pt,[Y(t("img",zt,null,512),[[l,{src:e.project.poster}]])])):w("",!0),e.data.liveLink?(c(),d("div",Rt)):w("",!0),e.data.liveLink?(c(),d("a",{key:6,class:"animate-fd-11 group relative underline-offset-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3",target:"_blank",href:e.data.liveLink},Gt,8,Ht)):w("",!0),Wt,Ft,e.data.contributors?(c(),d("div",qt,[(c(!0),d(A,null,O(e.project.contributors,n=>(c(),d("div",{key:n,class:"flex justify-between items-center py-2 gap-4"},[t("div",Jt,[Y(t("img",Kt,null,512),[[l,{src:n.image}]]),t("div",null,[t("h3",Qt,x(n.name),1),t("div",Zt,[t("ul",en,[n.link?(c(),d("li",tn,[t("a",{href:n.link,class:"text-xs font-medium group relative inline-flex overflow-hidden pr-8 py-2"},on,8,nn)])):w("",!0)])])])]),t("div",ln,[t("h3",rn,x(n.position),1),t("span",cn,x(n.company),1)])]))),128))])):w("",!0)])])])):w("",!0)}}},un={key:0,class:"mt-8 md:mt-16 scroll-smooth"},mn={class:"flex flex-col gap-20"},hn={class:"flex flex-col gap-3"},fn={class:"text-secondary animate-fade-up"},vn={datetime:"2023-03-05"},pn={class:"text-primary animate-fd-1 text-3xl font-bold tracking-tight leading-tight"},gn={class:"text-xl text-secondary animate-fd-2"},_n=t("div",{class:"h-8"},null,-1),xn={class:"animate-fd-3"},bn=["src"],wn=t("div",{class:"h-16"},null,-1),yn={class:"animate-fd-4"},kn=t("h2",{class:"text-xl font-bold tracking-wide mb-4"},"Objective",-1),Sn=t("div",{class:"h-10"},null,-1),jn={class:"animate-fd-5"},Tn=t("h2",{class:"text-xl font-bold tracking-wide mb-4"},"Challenge",-1),An=t("div",{class:"h-8"},null,-1),Cn=["href"],$n=Ie('<span class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 group-hover:h-1 group-hover:animate-fade-up group-hover:animate-duration-[200ms]"></span><span class="absolute -end-full transition-all group-hover:end-4"><svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span><span class="text-sm font-medium transition-all group-hover:me-4"> Visit the wireframe </span>',3),Un=[$n],In={__name:"ProjectDesign",props:{dataUIUX:{type:Object},projectUIUX:{type:Object}},setup(e){return(s,a)=>e.dataUIUX?(c(),d("section",un,[t("div",mn,[t("article",null,[t("div",hn,[t("p",fn,[t("time",vn,x(e.dataUIUX.date),1)]),t("h1",pn,x(e.dataUIUX.subject),1),t("p",gn,x(e.dataUIUX.titleDesc),1)]),_n,t("div",xn,[t("iframe",{loading:"lazy",style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:"800",height:"450",class:"w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none",src:e.dataUIUX.embedLink,allowfullscreen:""},null,8,bn)]),wn,t("div",yn,[kn,t("p",null,x(e.dataUIUX.objective),1)]),Sn,t("div",jn,[Tn,(c(!0),d(A,null,O(e.projectUIUX.challenge,l=>(c(),d("p",{key:l,class:"pb-4"},x(l),1))),128))]),An,t("a",{class:"animate-fd-6 group relative underline-offset-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3",target:"_blank",href:e.dataUIUX.embedLink},Un,8,Cn)])])])):w("",!0)}},On={class:"text-primary p-4 max-w-[700px] mx-auto"},Ln={__name:"ProjectDetails",setup(e){const s=ze(),a=u(s.params.id),l=u(null),n=u(null),r=je.projectDetails.find(m=>m.params===a.value),_=je.UIUXdesign.find(m=>m.params===a.value);return r&&(l.value=r),_&&(n.value=_),(m,p)=>(c(),d("main",On,[B(qe),B(dn,{data:l.value,project:G(r)},null,8,["data","project"]),B(In,{dataUIUX:n.value,projectUIUX:G(_)},null,8,["dataUIUX","projectUIUX"])]))}};export{Ln as default};
