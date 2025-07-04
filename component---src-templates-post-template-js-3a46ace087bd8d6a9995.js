"use strict";(self.webpackChunkpersonal_log=self.webpackChunkpersonal_log||[]).push([[441],{9101:function(e,t,r){r.r(t),r.d(t,{Head:function(){return A},default:function(){return M}});var n=r(6540),a=r(4810),l=r(4848);function i({id:e,host:t,repo:a,repoId:i,category:o,categoryId:m,mapping:c,term:d,strict:p,reactionsEnabled:g,emitMetadata:h,inputPosition:s,theme:u,lang:x,loading:v}){const[b,f]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{b||(r.e(135).then(r.bind(r,1135)),f(!0))}),[]),b?(0,l.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:i,category:o,categoryid:m,mapping:c,term:d,strict:p,reactionsenabled:g,emitmetadata:h,inputposition:s,theme:u,lang:x,loading:v}):null}var o=r(6421),m=r(7994),c=r(4091),d=r(2532),p=r(7771);const g=m.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,h=m.I4.div`
  margin-bottom: 10px;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.brLine}};
`,s=m.I4.h2`
  margin: 0;
`,u=m.I4.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  // 0px ~ 768px
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`,x=m.I4.p`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  color: ${e=>{let{theme:t}=e;return t.bgText}};
  font-weight: bolder;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 0;
    width: 1rem;
    height: 1rem;
    fill: ${e=>{let{theme:t}=e;return t.bgText}};
  }
`,v=(0,m.I4)(x)`
  flex: 1;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  svg {
    margin: 0 0.5rem 0 0;
  }

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.highlightText}};
    transform: scale(1.025);
  }

  &:active {
    transform: scale(0.975);
  }
`,b=m.I4.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 1.75rem;

  svg {
    flex-shrink: 0;
    margin: 0.25rem 0.5rem 0.5rem 0;
    width: 1rem;
    height: 1rem;
    fill: ${e=>{let{theme:t}=e;return t.bgText}};
  }
`,f=m.I4.p`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0 0.5rem;
  min-height: 1.5rem;
  background-color: ${e=>{let{theme:t}=e;return t.btnActiveText}};
  color: ${e=>{let{theme:t}=e;return t.btnActive}};
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.highlightText}};
    transform: scale(1.025);
    span {
      color: ${e=>{let{theme:t}=e;return t.warningText}};
    }
  }

  &:active {
    transform: scale(0.975);
  }
`,w=m.I4.div`
  flex-shrink: 0;
  margin: 0.75rem 0 0.25rem 0;
  width: 100%;
  height: 15rem;
  border-radius: 0.75rem;
  overflow: hidden;
`,E=(0,m.I4)(d.G)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;var y=e=>{let{className:t,postData:r}=e;return n.createElement(g,{className:t},n.createElement(s,null,null==r?void 0:r.title),n.createElement(h,null),n.createElement(u,null,n.createElement(v,{onClick:()=>{return e=null==r?void 0:r.category,void(0,a.oo)(`/category/${e}`);var e}},n.createElement(p.Ez,null),null==r?void 0:r.category),n.createElement(x,null,n.createElement(p.Ow,null),null==r?void 0:r.createDate),n.createElement(x,null,n.createElement(p._A,null),null==r?void 0:r.lastDate)),n.createElement(b,null,n.createElement(p.P3,null),(null==r?void 0:r.tag)&&(null==r?void 0:r.tag.map(((e,t)=>n.createElement(f,{key:t,onClick:()=>(e=>{(0,a.oo)(`/search?tag=${encodeURIComponent(e)}`)})(e)},e))))),n.createElement(w,null,n.createElement(E,{image:(0,d.c)(null==r?void 0:r.coverImage),alt:"_coverImage"})))},$=r(4950);const k=m.I4.div`
  z-index: 500;
  padding: 0 1rem 1rem 1rem;
  position: fixed;
  top: 15vh;
  right: 8vw;
  width: 275px;
  max-height: 70vh;
  opacity: 0.95;
  background-color: ${e=>{let{theme:t}=e;return t.bgLayout}};
  border-radius: 0.75rem;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);
  overflow-x: hidden;
  overflow-y: auto;

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    top: 50px;
    right: 5px;
    width: ${e=>e.$open?"275px":"auto"};
    height: auto;
    padding: 0.25rem;
    padding-top: ${e=>e.$open?"0":"0.25rem"};
  }

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    margin-block: 0.75rem;
  }
`,I=m.I4.div`
  z-index: 501;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  flex-direction: row;
  padding-top: ${e=>e.$open?"0.5rem":"0"};
  padding-bottom: ${e=>e.$open?"0.5rem":"0"};
  background-color: ${e=>{let{theme:t}=e;return t.bgLayout}};

  svg {
    flex-shrink: 0;
    margin: 0.25rem 0.5rem 0 0;
    width: 1.25rem;
    height: 1.25rem;
    fill: ${e=>{let{theme:t}=e;return t.btnText}};

    :hover {
      fill: ${e=>{let{theme:t}=e;return t.highlightText}};
    }
    :active {
      transform: scale(0.975);
    }
  }

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    svg {
      margin: 0;
      fill: ${e=>{let{theme:t}=e;return t.highlightText}};
    }
  }
`,_=m.I4.h3`
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.btnText}};
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    display: ${e=>e.$open?"flex":"none"};
  }
`,T=m.I4.div`
  color: ${e=>{let{theme:t}=e;return t.btnText}};
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);

  a {
    display: block;
    color: ${e=>{let{theme:t}=e;return t.btnText}};
    word-break: break-word;
    white-space: normal;
    line-height: 1.4;
    text-decoration: none;

    &:hover {
      color: ${e=>{let{theme:t}=e;return t.btnActive}};
      font-weight: bolder;
    }
    &:active {
      color: ${e=>{let{theme:t}=e;return t.highlightText}};
    }
  }

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    display: ${e=>e.$open?"flex":"none"};
  }
`;var C=e=>{let{className:t,toc:r}=e;const{0:a,1:l}=(0,n.useState)(!1);return n.createElement(k,{className:t,$open:a},n.createElement(I,{$open:a},n.createElement($.A,{size:[32,32],icon:p.Kb,onClick:()=>{l((e=>!e))}}),n.createElement(_,{$open:a},"목차")),n.createElement(T,{dangerouslySetInnerHTML:{__html:r},$open:a}))};const z=m.I4.article`
  display: flex;
  flex-direction: row;
`,D=m.I4.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 768px;

  // 0 ~ 1279px
  @media (max-width: 1279px) {
    width: 66vw;
  }

  // 0px ~ 768px
  @media (max-width: 768px) {
    width: 75vw;
  }
`,L=m.I4.div`
  margin: 5px 0 15px 0;
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.brLine}};
`,S=m.I4.div`
  margin: 2rem 0;

  img {
    border: 1px solid ${e=>{let{theme:t}=e;return t.bgMainSub}};
    border-radius: 0.3rem;
  }
`,j=m.I4.div``,A=e=>{var t,r,a,l,i,o;let{data:m}=e;const c=null==m?void 0:m.markdownRemark,d=(null==c?void 0:c.frontmatter)||{},p=d.title||"Empty title..",g=(null==c?void 0:c.excerpt)||p,h=`https://lsj1206.github.io/post/${null==c||null===(t=c.fields)||void 0===t?void 0:t.slug}`,s=null===(r=d.coverImage)||void 0===r||null===(a=r.childImageSharp)||void 0===a||null===(l=a.gatsbyImageData)||void 0===l||null===(i=l.images)||void 0===i||null===(o=i.fallback)||void 0===o?void 0:o.src;return n.createElement(n.Fragment,null,n.createElement("title",null,p),n.createElement("meta",{name:"description",content:g}),n.createElement("meta",{name:"robots",content:"index, follow"}),n.createElement("link",{rel:"canonical",href:h}),n.createElement("meta",{property:"og:title",content:p}),n.createElement("meta",{property:"og:description",content:g}),n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"og:url",content:h}),s&&n.createElement("meta",{property:"og:image",content:s}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:p}),n.createElement("meta",{name:"twitter:description",content:g}),s&&n.createElement("meta",{name:"twitter:image",content:s}))};var M=e=>{let{data:t}=e;t||(0,a.oo)("/404");const r=null==t?void 0:t.markdownRemark,l=null==t?void 0:t.markdownRemark.frontmatter,{theme:m}=(0,n.useContext)(o.D),d="light"===m?"noborder_light":"noborder_gray";return n.createElement(z,null,n.createElement(D,null,n.createElement(y,{postData:l}),n.createElement(S,{dangerouslySetInnerHTML:{__html:r.html}}),n.createElement(L,null),n.createElement(j,{className:"giscus"},n.createElement(i,{id:"comments",repo:c.r8.repo,repoId:c.r8.repo_id,category:c.r8.category,categoryId:c.r8.category_id,mapping:c.r8.mapping,reactionsEnabled:c.r8.reactions_enabled,emitMetadata:c.r8.emit_metadata,inputPosition:c.r8.input_position,lang:c.r8.lang,theme:d,loading:"lazy"}))),n.createElement(C,{toc:r.tableOfContents}))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-3a46ace087bd8d6a9995.js.map