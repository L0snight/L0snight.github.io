import{d as w,i as k,j as d,D as z,o as s,b as i,t as p,h as f,_ as D,g as u,M as y,O as g,f as m,F as $,e as F,n as Y,q as h,a5 as H,z as M,J as V,a6 as A,c as S,w as N,r as b,a7 as E,a8 as G,a as L,a9 as O,aa as q}from"./app.532c456f.js";import{_ as J}from"./YunFooter.vue_vue_type_script_setup_true_lang.73a9aabd.js";const P={class:"say"},I={key:0,class:"say-content animate-fade-in animate-iteration-1"},K={key:1,class:"say-author"},Q={key:2,class:"say-from"},R=w({__name:"YunSay",setup(v){const n=k(),o=d(""),_=d(""),r=d("");function t(){const c=n.value.say.hitokoto.enable?n.value.say.hitokoto.api:n.value.say.api;!c||fetch(c).then(e=>{if(e.ok)e.json().then(l=>{if(n.value.say.hitokoto.enable)o.value=l.hitokoto,_.value=l.from_who,r.value=l.from;else{const a=l[Math.floor(Math.random()*l.length)];a.content?(o.value=a.content,_.value=a.author,r.value=a.from):o.value=a}});else throw new Error(`${n.value.say.api}, HTTP error, status = ${e.status}`)}).catch(e=>{console.error(e.message)})}return z(()=>{t()}),(c,e)=>(s(),i("div",P,[o.value?(s(),i("span",I,p(o.value),1)):f("v-if",!0),_.value?(s(),i("span",K,p(_.value),1)):f("v-if",!0),r.value?(s(),i("span",Q,p(r.value),1)):f("v-if",!0)]))}});const U={},W={class:"go-down","aria-label":"go-down",href:"javascript:window.scrollTo(0, window.banner.clientHeight);"},X=u("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),Z=[X];function ee(v,n){return s(),i("a",W,Z)}const ne=D(U,[["render",ee]]),te={id:"banner"},ae={class:"banner-char-container"},se={class:"char"},oe=w({__name:"YunBanner",setup(v){const n=k(),o=y(()=>{const t=[];for(let c=0;c<n.value.banner.title.length;c++){const e=H(1.5,3.5);t.push(e)}return t}),_=y(()=>o.value.reduce((t,c)=>t+c,0)/2),r=y(()=>({"--banner-line-height":`calc(50vh - ${_.value}rem)`}));return(t,c)=>{const e=ne;return s(),i($,null,[u("div",te,[u("div",{class:"banner-line vertical-line-top",style:g(m(r))},null,4),u("div",ae,[(s(!0),i($,null,F(m(n).banner.title,(l,a)=>(s(),i("div",{key:a,class:"char-box"},[u("span",{class:Y([a%2!==0?"char-right":"char-left"]),style:g({"--banner-char-size":`${m(o)[a]}rem`})},[u("span",se,p(l),1)],6)]))),128))]),u("div",{class:"banner-line vertical-line-bottom",style:g(m(r))},null,4)]),h(e)],64)}}});const le=w({__name:"home",setup(v){const n=M(),o=V(),_=k(),r=A("home");return(t,c)=>{const e=O,l=G,a=E,x=oe,C=R,B=L("router-view"),T=J,j=q;return s(),i($,null,[m(_).bg_image.enable?(s(),S(e,{key:0})):f("v-if",!0),u("main",{class:Y(["yun-main justify-center items-center",m(r)&&!m(n).isSidebarOpen&&"pl-0"]),flex:"~ col",w:"full"},[h(a,null,{default:N(()=>[b(t.$slots,"sidebar",{},()=>[h(l)])]),_:3}),h(x),h(C,{w:"full"}),b(t.$slots,"board"),b(t.$slots,"default",{},()=>[h(B)]),h(T)],2),m(o).search.enable?(s(),S(j,{key:1})):f("v-if",!0)],64)}}});export{le as default};
