import{d as t,u as o,j as e,R as s}from"./index-Dbu50_AZ.js";const i="/ksartez/assets/underConstruction-Az1A-RH-.png",a=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,c=t.img`
  display: flex;
  align-items: center;
  justify-content: center;
`,d=t.button`
  margin-top: 0.6rem;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  border: none;
  background: ${({theme:n})=>n.lightOrange};
  cursor: pointer;

  &:hover {
    background: ${({theme:n})=>n.orange};
  }
`,m=()=>{const n=o(),r=()=>{n(`${s.main}`)};return e.jsxs(a,{children:[e.jsx(c,{src:i,alt:"В разработке"}),e.jsx("div",{children:"Страница в разработке..."}),e.jsx(d,{onClick:r,children:"На главную"})]})};export{m as UnderConstruction};
