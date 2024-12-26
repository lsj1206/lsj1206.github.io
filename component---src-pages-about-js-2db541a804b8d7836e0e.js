"use strict";(self.webpackChunkpersonal_log=self.webpackChunkpersonal_log||[]).push([[432],{9434:function(e,t,r){r.r(t),r.d(t,{Head:function(){return k}});var l=r(6540),n=r(2532),i=r(7994),a=r(4091),o=r(7771);const d=i.I4.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 768px;

  // 0 ~ 768px
  @media (max-width: 768px) {
    width: 75vw;
  }
`,f=i.I4.div`
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.brLine}};
`,m=i.I4.h2`
  margin: 0;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);
`,p=i.I4.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  padding: 15px;
  width: 100%;
  height: 300px;
  background-color: ${e=>{let{theme:t}=e;return t.bgMainSub}};
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);

  // 0 ~ 768px
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 15px;
    padding-top: 15px;
    height: auto;
  }
`,x=i.I4.div`
  flex-shrink: 0;
  display: flex;
  margin: 15px;
  width: 180px;
  height: 240px;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);

  :hover img {
    transform: scale(1.125);
    transition: transform 0.3s ease-in-out;
  }

  // 0 ~ 480px
  @media (max-width: 480px) {
  }
`,h=i.I4.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 15px;
  width: 100%;
  height: 100%;

  // 0 ~ 768px
  @media (max-width: 768px) {
    padding: 15px;
  }
`,s=i.I4.h3`
  min-height: 3rem;
  color: ${e=>{let{theme:t}=e;return t.bgText}};
  font-weight: bolder;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${e=>{let{theme:t}=e;return t.bgText}};
  }
`,c=i.I4.p`
  min-height: 2.5rem;
  color: ${e=>{let{theme:t}=e;return t.bgText}};
  font-size: 1.15rem;
  font-weight: bolder;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${e=>{let{theme:t}=e;return t.bgText}};
  }
`,g=(0,i.I4)(c)`
  flex-grow: 1;
  margin-bottom: 0.75rem;
`,b=i.I4.a`
  display: flex;
  min-height: 2.5rem;
  color: ${e=>{let{theme:t}=e;return t.bgText}};
  font-size: 1.15rem;
  font-weight: bolder;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  svg {
    flex-shrink: 0;
    margin: 0 0.5rem 0 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${e=>{let{theme:t}=e;return t.bgText}};
  }

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.highlightText}};
    font-weight: bolder;
    transform: scale(1.025);
  }

  &:active {
    transform: scale(0.975);
  }
`,u=(0,i.I4)(h)`
  padding: 0 15px;
`,w=i.I4.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // 0 ~ 768px
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }

  // 0 ~ 480px
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,A=i.I4.p`
  display: flex;
  flex-direction: column;

  // 0 ~ 768px
  @media (max-width: 480px) {
    justify-content: flex-end;
    font-size: 0.8rem;
  }
`,E=i.I4.a`
  color: ${e=>{let{theme:t}=e;return t.bgText}};
  font-size: 0.9rem;
  text-align: end;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.highlightText}};
    transform: scale(1.025);
  }

  &:active {
    transform: scale(0.975);
  }
`,k=()=>l.createElement("title",null,a.Ay.title);t.default=()=>l.createElement(d,null,l.createElement(m,null,"About Page"),l.createElement(f,null),l.createElement(p,null,l.createElement(x,null,l.createElement(n.S,{src:"../assets/images/Profile.png",alt:"_profile",placeholder:"blurred",layout:"constrained",formats:["webp","avif"],__imageData:r(9038)})),l.createElement(h,null,l.createElement(s,null,a.Ay.name),l.createElement(g,null,a.Ay.self_introduction),l.createElement(b,{href:`mailto:${a.Ay.github_link}`,target:"_blank",rel:"noopener noreferrer nofollow"},l.createElement(o.aZ,null),"Email"),l.createElement(b,{href:a.Ay.github_link,target:"_blank",rel:"noopener noreferrer nofollow"},l.createElement(o.Hk,null),"Github"))),l.createElement(p,null,l.createElement(u,null,l.createElement(s,null,a.bt.title),l.createElement(g,null,a.bt.description),l.createElement(c,null,`개발 기간 : ${a.bt.start_date} - ${a.bt.end_date}`),l.createElement(w,null,l.createElement(b,{href:a.bt.repository,target:"_blank",rel:"noopener noreferrer nofollow"},l.createElement(o.lo,null),"Repository"),l.createElement(A,null,l.createElement(E,{href:a.bt.framework_link,target:"_blank",rel:"noopener noreferrer nofollow"},a.bt.framework),l.createElement(E,{href:a.bt.css_link,target:"_blank",rel:"noopener noreferrer nofollow"},a.bt.css),l.createElement(E,{href:a.bt.attr_link,target:"_blank",rel:"noopener noreferrer nofollow"},a.bt.attribution))))))},9038:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAABc0lEQVR42rVS626CYBTj/R8F3QDhQxBF5KKiIV5n1G0MQUD2FKt8Uwk6ZUuW9AeE09OeUmafpH8G8y/kKE7i9ADg4XdkcNJDFu7j3T5ODhleq5IxGoSR7Y6JppNWxxy4frDDisdkMKGm6j2WE59EGWB5iWidj114rc+U7kyzz5E3BYEnyrPUBDiisLzouOM0y6L4kW3NsOoNwp3IQF2U5bZ+nRxzHbLSMUA+MwGYl1QN+ZWcl8kIxrD7NUHiCrZrAoGdKjdnq/UWylA7K7OCNF2uEEfJOXOzG95sITTVs7LrTW62pUQ+KsN5GCeTxbJtWC3D9KbzMK8KahP9RMZuTLxstoYzFBWNl1Wh2TpCVhuK1rUHy/WGFrZMpq6s4QinIi1ajyJqDYIgzL5bzPxC7tp9lIEr/KEiuBwY0E3nokxbhQvvMC8r8rZ5szlNnqGyuuWgRrgTn+8AAzih3bOp82/bb36wffcr4tUPyjcj6qo4BfYFG1Hu5y8Lw/gAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/e96da880b5dd7f8f0e296825ff98d23e/90d07/Profile.webp","srcSet":"/static/e96da880b5dd7f8f0e296825ff98d23e/60b4d/Profile.webp 160w,\\n/static/e96da880b5dd7f8f0e296825ff98d23e/5e011/Profile.webp 320w,\\n/static/e96da880b5dd7f8f0e296825ff98d23e/90d07/Profile.webp 640w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[{"srcSet":"/static/e96da880b5dd7f8f0e296825ff98d23e/6de5b/Profile.avif 160w,\\n/static/e96da880b5dd7f8f0e296825ff98d23e/20389/Profile.avif 320w,\\n/static/e96da880b5dd7f8f0e296825ff98d23e/8c32c/Profile.avif 640w","type":"image/avif","sizes":"(min-width: 640px) 640px, 100vw"}]},"width":640,"height":640}')}}]);
//# sourceMappingURL=component---src-pages-about-js-2db541a804b8d7836e0e.js.map