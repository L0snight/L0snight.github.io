import{d as v,u as C,J as $,M as f,o as r,b as p,g as n,t as _,f as t,h as g,j as k,F as w,e as z,n as d,O as S,y as V,ab as L,c as y,w as h,Z as j,q as B,r as F}from"./app.49ac1763.js";import{_ as M}from"./YunPostMeta.vue_vue_type_style_index_0_lang.07a0eb0e.js";const N={class:"post-copyright"},U={class:"post-copyright-author"},Y={key:0,class:"post-copyright-link"},q=["href"],H={class:"post-copyright-license"},P=["innerHTML"],T=v({__name:"ValaxyCopyright",props:{url:{default:""}},setup(c){const{t:o,locale:l}=C(),e=$(),i=e.value.license.type==="zero"?"1.0":"4.0",a=e.value.license.type==="zero"?"publicdomain":"licenses",s=f(()=>{const m=e.value.license.language?e.value.license.language:l.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${a}/${e.value.license.type}/${i}/deed.${m}`}),u=f(()=>o("post.copyright.license_content",[`<a href="${s.value}" target="_blank" rel="noopener" title="CC ${`${e.value.license.type.toUpperCase()} ${i}`} ">CC ${e.value.license.type.toUpperCase()}</a>`]));return(m,x)=>(r(),p("ul",N,[n("li",U,[n("strong",null,_(t(o)("post.copyright.author")+t(o)("symbol.colon")),1),n("span",null,_(t(e).author.name),1)]),c.url?(r(),p("li",Y,[n("strong",null,_(t(o)("post.copyright.link")+t(o)("symbol.colon")),1),n("a",{href:c.url},_(c.url),9,q)])):g("v-if",!0),n("li",H,[n("strong",null,_(t(o)("post.copyright.license_title")+t(o)("symbol.colon")),1),n("span",{innerHTML:t(u)},null,8,P)])]))}});const D={class:"yun-sponsor-container flex justify-center items-center flex-col"},E=["title"],I=n("div",{"i-ri-heart-line":""},null,-1),J=[I],O=["href"],Q=["src","title"],R=v({__name:"YunSponsor",setup(c){const{t:o}=C(),l=$(),e=k(!1);return(i,a)=>(r(),p("div",D,[n("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:t(o)("reward.donate"),text:"red-400",onClick:a[0]||(a[0]=s=>e.value=!e.value)},J,8,E),n("div",{class:d(["qrcode-container qrcode flex justify-around",e.value&&"show"]),m:"y-4"},[(r(!0),p(w,null,z(t(l).sponsor.methods,(s,u)=>(r(),p("a",{key:u,class:d(["flex flex-col justify-center items-center animate-iteration-1",e.value&&"animate-fade-in"]),href:s.url,target:"_blank",style:S(`color:${s.color}`)},[n("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:s.url,title:s.name},null,8,Q),n("div",{text:"xl",m:"2",class:d(s.icon)},null,2)],14,O))),128))],2)]))}});const G=v({__name:"post",setup(c){const o=$(),l=V(),e=L(),i=f(()=>typeof l.value.sponsor=="boolean"?l.value.sponsor:o.value.sponsor.enable);return(a,s)=>{const u=M,m=R,x=T,b=j;return r(),y(b,null,{"main-header-after":h(()=>[B(u,{frontmatter:t(l)},null,8,["frontmatter"])]),"main-content-after":h(()=>[t(i)?(r(),y(m,{key:0})):g("v-if",!0),t(l).copyright||t(o).license.enabled?(r(),y(x,{key:1,url:t(e),m:"y-4"},null,8,["url"])):g("v-if",!0)]),"aside-custom":h(()=>[F(a.$slots,"aside-custom")]),_:3})}}});export{G as default};
