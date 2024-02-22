"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[699],{699:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var a=r(2791),t=r(4420),i=r(4942),s=r(1413),c=r(9439),l=r(3553),o=function(e){return e.contacts},u=(0,l.P1)([o,function(e){return e.filter}],(function(e,n){if(!n)return e.items;var r=n.toLowerCase();return e.items.filter((function(e){return e.name.toLowerCase().includes(r)}))})),d=r(296),m=r(5350),f=r(7438),x=r(7236),h=r(9055),p=r(3329),j={name:"",number:""},g=function(){var e=(0,a.useState)(j),n=(0,c.Z)(e,2),r=n[0],l=n[1],u=(0,t.v9)(o).items,g=(0,t.I0)(),v=function(e){var n=e.target,r=n.name,a=n.value;l((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,i.Z)({},r,a))}))};return(0,p.jsx)("form",{onSubmit:function(e){var n;e.preventDefault(),n=(0,s.Z)({},r),u.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts.")):(g((0,d.uK)(n)),l((0,s.Z)({},j)))},children:(0,p.jsxs)(m.NI,{w:400,isRequired:!0,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(f.l,{children:"Name"}),(0,p.jsx)(x.I,{value:r.name,type:"text",name:"name",onChange:v})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(f.l,{children:"Number"}),(0,p.jsx)(x.I,{value:r.number,type:"tel",name:"number",onChange:v})]}),(0,p.jsx)(h.z,{type:"submit",colorScheme:"teal",size:"sm",children:"Add contact"})]})})},v=r(4925),w=r(6992),y=r(5597),b=r(5113),C=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],N=["className"],Z=(0,y.G)((function(e,n){var r=e.spacing,t=void 0===r?"0.5rem":r,i=e.spacingX,c=e.spacingY,l=e.children,o=e.justify,u=e.direction,d=e.align,m=e.className,f=e.shouldWrapChildren,x=(0,v.Z)(e,C),h=(0,a.useMemo)((function(){return f?a.Children.map(l,(function(e,n){return(0,p.jsx)(_,{children:e},n)})):l}),[l,f]);return(0,p.jsx)(b.m.div,(0,s.Z)((0,s.Z)({ref:n,className:(0,w.cx)("chakra-wrap",m)},x),{},{children:(0,p.jsx)(b.m.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:o,alignItems:d,flexDirection:u,listStyleType:"none",gap:t,columnGap:i,rowGap:c,padding:"0"},children:h})}))}));Z.displayName="Wrap";var _=(0,y.G)((function(e,n){var r=e.className,a=(0,v.Z)(e,N);return(0,p.jsx)(b.m.li,(0,s.Z)({ref:n,__css:{display:"flex",alignItems:"flex-start"},className:(0,w.cx)("chakra-wrap__listitem",r)},a))}));_.displayName="WrapItem";var k=r(824),I=function(){var e=(0,t.v9)(u),n=(0,t.I0)(),r=e.map((function(e){var r=e.id,a=e.name,t=e.number;return(0,p.jsxs)(_,{w:"100%",justifyContent:"space-between",alignItems:"center",children:[a,": ",t,"  ",(0,p.jsx)(h.z,{onClick:function(){return function(e){n((0,d.GK)(e))}(r)},type:"button",colorScheme:"teal",size:"xs",width:"80px",children:"Delete"})]},r)}));return(0,p.jsx)(k.xu,{fontSize:"md",w:"md",p:"10px",borderWidth:"1px",borderRadius:"lg",borderColor:"teal",overflow:"hidden",children:Boolean(e.length)&&(0,p.jsx)(Z,{direction:"column",w:"100%",children:r})})},G=r(5653),S=["direction","align","justify","wrap","basis","grow","shrink"],z=(0,y.G)((function(e,n){var r=e.direction,a=e.align,t=e.justify,i=e.wrap,c=e.basis,l=e.grow,o=e.shrink,u=(0,v.Z)(e,S),d={display:"flex",flexDirection:r,alignItems:a,justifyContent:t,flexWrap:i,flexBasis:c,flexGrow:l,flexShrink:o};return(0,p.jsx)(b.m.div,(0,s.Z)({ref:n,__css:d},u))}));z.displayName="Flex";var L=r(6516),W=r(2996);var D=["className","align","decoration","casing"],T=(0,y.G)((function(e,n){var r=(0,L.mq)("Text",e),a=(0,W.Lr)(e),t=(a.className,a.align,a.decoration,a.casing,(0,v.Z)(a,D)),i=function(e){var n=Object.assign({},e);for(var r in n)void 0===n[r]&&delete n[r];return n}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,p.jsx)(b.m.p,(0,s.Z)((0,s.Z)((0,s.Z)({ref:n,className:(0,w.cx)("chakra-text",e.className)},i),t),{},{__css:r}))}));T.displayName="Text";var F=function(){var e=(0,t.I0)();return(0,p.jsxs)(z,{w:"md",mb:"20px",children:[(0,p.jsx)(T,{fontSize:"lg",mr:"10px",children:"Find contacts by name:"}),(0,p.jsx)(x.I,{name:"filter",flex:"1",size:"sm",width:"auto",onChange:function(n){var r=n.target;e((0,G.T)(r.value))},borderRadius:4})]})},B=function(){var e=(0,t.v9)(o),n=e.items,r=e.isLoading,i=e.error,s=(0,t.I0)();return(0,a.useEffect)((function(){s((0,d.yF)())}),[s]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Phonebook"}),(0,p.jsx)(g,{}),r&&(0,p.jsx)("p",{children:"...Loading"}),i&&(0,p.jsx)("p",{children:i}),Boolean(n.length)&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(F,{}),(0,p.jsx)(I,{})]})]})}}}]);
//# sourceMappingURL=699.d25b0d1b.chunk.js.map