import{_ as d,r as h,o as e,c as s,a as t,t as r,b as f,e as c,F as p,f as m,d as v,p as g,g as b}from"./app-ba012248.js";const S="/images/construction.png";const y={computed:{issueUrl:function(){return this.$frontmatter&&this.$frontmatter.issueUrl},repo:function(){return this.$site&&this.$site.themeConfig&&this.$site.themeConfig.docsRepo},related:function(){return this.$frontmatter.related}},props:{title:{type:String,default:"به زودی محتوای این صفحه اضافه می‌شود!"}}},i=n=>(g("data-v-b535c81b"),n=n(),b(),n),C={class:"content-status"},k={class:"content-status-all"},I={key:0,class:"content-status-status"},x=["href"],$=i(()=>t("div",{class:"illustration"},[t("img",{src:S})],-1)),N={class:"content-status-info",style:{clear:"both"}},U={key:0,class:"section content-other-resources"},V=i(()=>t("h3",null,"مطالعات آزاد مربوط به بلاک‌چین",-1)),B=["href","alt"];function E(n,F,l,O,w,o){const _=h("EditOrIssue");return e(),s("main",C,[t("div",null,[t("h2",null,r(l.title),1),t("div",k,[t("div",null,[o.issueUrl?(e(),s("div",I,[t("p",null,[f(" شما می‌توانید ما را در تکمیل این مستندات یاری کنید. "),t("a",{target:"_blank",href:o.issueUrl},"همراهی در تکمیل این صفحه!",8,x)])])):c("v-if",!0)]),$])]),t("div",N,[o.related?(e(),s("div",U,[V,t("ul",null,[(e(!0),s(p,null,m(o.related,(u,a)=>(e(),s("li",null,[t("a",{href:u,alt:a,target:"_blank"},r(a),9,B)]))),256))])])):c("v-if",!0),v(_)])])}const L=d(y,[["render",E],["__scopeId","data-v-b535c81b"],["__file","ContentStatus.vue"]]);export{L as default};
