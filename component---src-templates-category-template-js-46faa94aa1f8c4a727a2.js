"use strict";(self.webpackChunkpersonal_log=self.webpackChunkpersonal_log||[]).push([[555],{2705:function(e,t,r){r.d(t,{A:function(){return F}});var n=r(4506),l=r(6540),a=r(7994),i=r(4091),o=r(7771),c=r(4950);const m=a.I4.div`
  position: relative;
`,s=a.I4.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  position: absolute;
  top: ${e=>{let{size:t}=e;return t[1]-5}}px;
  right: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.btn}};
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,d=a.I4.div`
  padding: 8px 16px;
  color: ${e=>{let{theme:t}=e;return t.btnText}};
  font-size: 0.75rem;
  font-weight: bolder;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.btnActive}};
    color: ${e=>{let{theme:t}=e;return t.btnActiveText}};
  }
`;var u=e=>{let{className:t,onClick:r,size:n=[30,30],list:a,icon:i}=e;const{0:o,1:u}=(0,l.useState)(!1),h=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=e=>{h.current&&!h.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),l.createElement(m,{className:t,ref:h},l.createElement(c.A,{size:n,onClick:()=>{u((e=>!e))},icon:i}),o&&l.createElement(s,{size:n},a.map(((e,t)=>l.createElement(d,{key:t,onClick:()=>{r(e),u(!1)}},e)))))},h=r(4810),g=r(2532);const x=a.I4.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 2rem;
  width: 100%;
  cursor: pointer;

  :hover h4 {
    color: ${e=>{let{theme:t}=e;return t.highlightText}};
    transition: color 0.3s ease-in-out;
  }

  :hover img {
    transform: scale(1.125);
    transition: transform 0.3s ease-in-out;
  }

  &:active {
    transform: scale(0.975);
  }

  // 0 ~ 480px
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,p=a.I4.div`
  flex-shrink: 0;
  margin: 0 1.75rem 0 0;
  width: 10rem;
  min-height: 7.5rem;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

  // 0 ~ 480px
  @media (max-width: 480px) {
    margin-left: 10%;
    width: 90%;
  }
`,f=(0,a.I4)(g.G)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,v=a.I4.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  padding: 0 0.75rem 0 0;
  width: 100%;
  overflow: hidden;

  // 0 ~ 480px
  @media (max-width: 480px) {
    width: 90%;
  }
`,w=a.I4.h4`
  margin: 0;
  width: 100%;
  color: ${e=>{let{theme:t}=e;return t.text}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
`,b=a.I4.p`
  display: flex;
  align-items: center;
  height: 2rem;
  color: ${e=>{let{theme:t}=e;return t.bgText}};
  font-weight: bolder;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 1rem;
    width: 1rem;
    height: 1rem;
    fill: ${e=>{let{theme:t}=e;return t.bgText}};
  }

  svg:first-of-type {
    margin: 0 0.5rem 0 0;
  }
`,E=a.I4.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.25rem;
  width: 100%;
  min-height: 1.75rem;

  svg {
    flex-shrink: 0;
    margin: 0.3rem 0.3rem 0 0;
    width: 1rem;
    height: 1rem;
    fill: ${e=>{let{theme:t}=e;return t.bgText}};
  }
`,k=a.I4.p`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0 0.5rem;
  height: 1.5rem;
  background-color: ${e=>{let{theme:t}=e;return t.btnActiveText}};
  color: ${e=>{let{theme:t}=e;return t.btnActive}};
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;var I=e=>{let{className:t,post:r}=e;return l.createElement(x,{className:t,onClick:()=>(0,h.oo)(`/post/${null==r?void 0:r.slug}`)},l.createElement(p,null,l.createElement(f,{image:(0,g.c)(null==r?void 0:r.coverImage),alt:"_thumbnail"})),l.createElement(v,null,l.createElement(w,null,null==r?void 0:r.title),l.createElement(b,null,l.createElement(o.Ez,null),null==r?void 0:r.category,l.createElement(o.Ow,null),null==r?void 0:r.createDate),l.createElement(E,null,l.createElement(o.P3,null),null==r?void 0:r.tag.map((e=>l.createElement(k,{key:e},e))))))};const $=a.I4.button`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 0;
  width: ${e=>{let{width:t}=e;return t}}px;
  height: ${e=>{let{height:t}=e;return t}}px;
  background-color: ${e=>{let{theme:t}=e;return t.btn}};
  color: ${e=>{let{theme:t}=e;return t.btnText}};
  font-size: 0.9rem;
  font-weight: bolder;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.btnActive}};
    color: ${e=>{let{theme:t}=e;return t.btnActiveText}};
  }

  &:active {
    transform: scale(0.9);
  }
`;var y=e=>{let{className:t,size:r=[80,30],text:n,onClick:a}=e;return l.createElement($,{className:t,onClick:a,width:r[0],height:r[1]},n)};const z=a.I4.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.text}};
  text-align: center;
`,C=(0,a.I4)(c.A)`
  margin: 0 0.1rem;
  border-radius: 50%;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.bgSub}};
  }
  &:active {
    background-color: ${e=>{let{theme:t}=e;return t.btnActive}};
  }
`,A=a.I4.div`
  display: flex;
`,D=(0,a.I4)(y)`
  margin: 0;
  background-color: ${e=>{let{$onPage:t}=e;return t?"":"transparent"}};
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;var M=e=>{let{totalPageSize:t,nowPage:r,onPageChange:n}=e;(0,l.useEffect)((()=>{r>t&&n(t||1)}),[t,r,n]);const a=(()=>{const e=[],n=Math.max(1,r-Math.floor(2.5)),l=Math.min(t,n+5-1);for(let t=Math.max(1,l-5+1);t<=l;t++)e.push(t);return e})();return l.createElement(z,null,l.createElement(C,{size:[20,20],icon:o.zP,onClick:()=>n(1)}),l.createElement(C,{size:[20,20],icon:o.$9,onClick:()=>n(Math.max(1,r-1))}),l.createElement(A,null,a.map((e=>l.createElement(D,{key:e,size:[30,30],text:e,$onPage:e===r,onClick:()=>n(e)})))),l.createElement(C,{size:[20,20],icon:o.Pt,onClick:()=>n(Math.min(t,r+1))}),l.createElement(C,{size:[20,20],icon:o.V0,onClick:()=>n(t)}))};const N=a.I4.div`
  display: flex;
  flex-direction: column;

  // 0 ~ 1279px
  @media (max-width: 1279px) {
    width: 95%;
  }
`,P=a.I4.div`
  margin-bottom: 10px;
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.brLine}};
`,T=a.I4.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`,S=a.I4.h2`
  margin: 0;
`,j=a.I4.span`
  color: ${e=>{let{theme:t}=e;return t.bgText}};
  font-size: 1.5rem;
`,L=(0,a.I4)(u)`
  z-index: 10;
`,H=a.I4.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
`,_=a.I4.p`
  margin: 0 0 2rem;
  width: 100%;
  color: ${e=>{let{theme:t}=e;return t.highlightText}};
  font-size: 1.2rem;
`;var F=e=>{let{className:t,postlist:r,listName:a}=e;const{0:c,1:m}=(0,l.useState)(i.HW[0]),{0:s,1:d}=(0,l.useState)(1),u=(0,l.useMemo)((()=>{const e=(0,n.A)(r);return"Latest"===c?e.sort(((e,t)=>new Date(t.createDate)-new Date(e.createDate))):"Oldest"===c?e.sort(((e,t)=>new Date(e.createDate)-new Date(t.createDate))):e}),[r,c]),h=(0,l.useMemo)((()=>{const e=10*(s-1);return u.slice(e,e+10)}),[u,s,10]);return l.createElement(N,{className:t},a&&l.createElement(T,null,l.createElement(S,null,a,l.createElement(j,null,` (${null==u?void 0:u.length})`||"-")),l.createElement(L,{size:[30,30],icon:o.yc,list:i.HW,onClick:e=>{m(e),d(1)}})),l.createElement(P,null),l.createElement(H,null,(null==h?void 0:h.length)>0?null==h?void 0:h.map((e=>l.createElement(I,{key:null==e?void 0:e.slug,post:e}))):l.createElement(_,null,"No results found")),(null==h?void 0:h.length)>0?l.createElement(l.Fragment,null,l.createElement(P,null),l.createElement(M,{totalPageSize:Math.ceil(u.length/10),nowPage:s,onPageChange:d})):l.createElement(l.Fragment,null))}},2874:function(e,t,r){var n=r(6540);t.A=e=>(0,n.useMemo)((()=>{var t,r;return(null==e||null===(t=e.allMarkdownRemark)||void 0===t||null===(r=t.edges)||void 0===r?void 0:r.map((e=>{var t,r;let{node:n}=e;return{title:n.frontmatter.title,coverImage:null===(t=n.frontmatter.coverImage)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.gatsbyImageData,tag:n.frontmatter.tag,category:n.frontmatter.category,createDate:n.frontmatter.createDate,slug:n.fields.slug}})))||[]}),[e])},3533:function(e,t,r){r.r(t),r.d(t,{Head:function(){return s}});var n=r(6540),l=r(4810),a=r(7994),i=r(4091),o=r(2874),c=r(2705);const m=a.I4.article`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  width: 768px;

  // 0 ~ 1279px
  @media (max-width: 768px) {
    width: 90%;
  }
`,s=()=>n.createElement("title",null,i.Ay.title);t.default=e=>{let{data:t,pageContext:r}=e;t||(0,l.oo)("/404");const a=(0,o.A)(t);return n.createElement(m,null,n.createElement(c.A,{postlist:a,listName:r.category}))}}}]);
//# sourceMappingURL=component---src-templates-category-template-js-46faa94aa1f8c4a727a2.js.map