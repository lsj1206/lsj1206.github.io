"use strict";(self.webpackChunkpersonal_log=self.webpackChunkpersonal_log||[]).push([[441],{9101:function(e,t,r){r.r(t),r.d(t,{Head:function(){return N},default:function(){return S}});var n=r(6540),l=r(4810),a=r(4848);function i({id:e,host:t,repo:l,repoId:i,category:o,categoryId:m,mapping:d,term:c,strict:h,reactionsEnabled:p,emitMetadata:g,inputPosition:s,theme:x,lang:u,loading:b}){const[v,f]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{v||(r.e(135).then(r.bind(r,1135)),f(!0))}),[]),v?(0,a.jsx)("giscus-widget",{id:e,host:t,repo:l,repoid:i,category:o,categoryid:m,mapping:d,term:c,strict:h,reactionsenabled:p,emitmetadata:g,inputposition:s,theme:x,lang:u,loading:b}):null}var o=r(6421),m=r(7994),d=r(4091),c=r(2532),h=r(7771);const p=m.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,g=m.I4.div`
  margin-bottom: 10px;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.brLine}};
`,s=m.I4.h2`
  margin: 0;
`,x=m.I4.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  // 0px ~ 768px
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`,u=m.I4.p`
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
`,b=(0,m.I4)(u)`
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
`,v=m.I4.div`
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
`,E=(0,m.I4)(c.G)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;var y=e=>{let{className:t,postData:r}=e;return n.createElement(p,{className:t},n.createElement(s,null,null==r?void 0:r.title),n.createElement(g,null),n.createElement(x,null,n.createElement(b,{onClick:()=>{return e=null==r?void 0:r.category,void(0,l.oo)(`/category/${e}`);var e}},n.createElement(h.Ez,null),null==r?void 0:r.category),n.createElement(u,null,n.createElement(h.Ow,null),null==r?void 0:r.createDate),n.createElement(u,null,n.createElement(h._A,null),null==r?void 0:r.lastDate)),n.createElement(v,null,n.createElement(h.P3,null),(null==r?void 0:r.tag)&&(null==r?void 0:r.tag.map(((e,t)=>n.createElement(f,{key:t,onClick:()=>(e=>{(0,l.oo)(`/search?tag=${encodeURIComponent(e)}`)})(e)},e))))),n.createElement(w,null,n.createElement(E,{image:(0,c.c)(null==r?void 0:r.coverImage),alt:"_coverImage"})))},$=r(4950);const k=m.I4.div`
  z-index: 500;
  padding: 1rem;
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
  }

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    margin-block: 0.75rem;
  }
`,I=m.I4.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 0 1rem 0;

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
    margin: 0;

    svg {
      margin: 0;
      fill: ${e=>{let{theme:t}=e;return t.highlightText}};
    }
  }
`,T=m.I4.h3`
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.btnText}};
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);

  // 0px ~ 1440px
  @media (max-width: 1440px) {
    display: ${e=>e.$open?"flex":"none"};
  }
`,_=m.I4.div`
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
`;var C=e=>{let{className:t,toc:r}=e;const{0:l,1:a}=(0,n.useState)(!1);return n.createElement(k,{className:t,$open:l},n.createElement(I,null,n.createElement($.A,{size:[32,32],icon:h.Kb,onClick:()=>{a((e=>!e))}}),n.createElement(T,{$open:l},"목차")),n.createElement(_,{dangerouslySetInnerHTML:{__html:r},$open:l}))};const z=m.I4.article`
  display: flex;
  flex-direction: row;
`,A=m.I4.div`
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
`,D=m.I4.div`
  margin: 5px 0 15px 0;
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.brLine}};
`,L=m.I4.div`
  margin: 2rem 0;

  img {
    border: 1px solid ${e=>{let{theme:t}=e;return t.bgMainSub}};
    border-radius: 0.3rem;
  }
`,M=m.I4.div``,N=e=>{let{data:t}=e;const r=null==t?void 0:t.markdownRemark;return n.createElement("title",null,(null==r?void 0:r.frontmatter.title)||"Title")};var S=e=>{let{data:t}=e;t||(0,l.oo)("/404");const r=null==t?void 0:t.markdownRemark,a=null==t?void 0:t.markdownRemark.frontmatter,{theme:m}=(0,n.useContext)(o.D),c="light"===m?"noborder_light":"noborder_gray";return n.createElement(z,null,n.createElement(A,null,n.createElement(y,{postData:a}),n.createElement(L,{dangerouslySetInnerHTML:{__html:r.html}}),n.createElement(D,null),n.createElement(M,{className:"giscus"},n.createElement(i,{id:"comments",repo:d.r8.repo,repoId:d.r8.repo_id,category:d.r8.category,categoryId:d.r8.category_id,mapping:d.r8.mapping,reactionsEnabled:d.r8.reactions_enabled,emitMetadata:d.r8.emit_metadata,inputPosition:d.r8.input_position,lang:d.r8.lang,theme:c,loading:"lazy"}))),n.createElement(C,{toc:r.tableOfContents}))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-e01735686deeed562b9d.js.map