(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{16:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(34),r=n.n(i),o=(n(46),n(47),n(13)),s=n(2),u=(n(16),n(1)),j=function(){return Object(u.jsx)("div",{className:"background",children:Object(u.jsxs)("div",{className:"modo",children:[Object(u.jsx)("button",{className:"botoninicio",children:Object(u.jsx)(o.b,{to:{pathname:"/normal",state:{rows:8,normal:!0}},style:{textDecoration:"none",color:"inherit"},children:"Normal"})}),Object(u.jsx)("button",{className:"botoninicio",children:Object(u.jsx)(o.b,{to:{pathname:"/dificil",state:{rows:18,normal:!1}},style:{textDecoration:"none",color:"inherit"},children:"Dificil"})})]})})},b=n(41),l=n(10),d=n.n(l),f=n(23),O=n(18),m=n(4),x=n(35),p=n.n(x);function h(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),c=t[e];t[e]=t[n],t[n]=c}return t}function v(t){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(d.a.mark((function t(e){var n,c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],c=1;case 2:if(!(c<=e)){t.next=10;break}return t.next=5,p()("https://cataas.com/cat?json=true&type=sq");case 5:a=t.sent,n.push(a.data,a.data);case 7:c++,t.next=2;break;case 10:return h(n),t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var S=n.p+"static/media/loadingp.6eb138fb.png",N=function(){return Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)("img",{className:"rotar",src:S,alt:""})})};var w,k=function(t){var e=t.carta,n=t.permitirVuelta,a=t.index,i=t.desabilitarPar,r=t.voltearPar,o=e.url,s=Object(c.useState)(!1),j=Object(m.a)(s,2),b=j[0],l=j[1],d=Object(c.useState)(!0),f=Object(m.a)(d,2),O=f[0],x=f[1];return Object(c.useEffect)((function(){r.includes(a)&&setTimeout((function(){return l(!1)}),750)}),[r]),Object(c.useEffect)((function(){i.includes(a)&&x(!1)}),[i]),Object(u.jsxs)("div",{className:"card ".concat(b?"flip":""),onClick:O?function(){1===n(a,e.id)&&l(!b)}:null,children:[Object(u.jsx)("div",{className:"front"}),Object(u.jsx)("div",{className:"back",children:Object(u.jsx)("img",{src:"https://cataas.com".concat(o),alt:"idol"})})]})},E=function(t){var e=t.movimientos,n=t.iniciar,a=t.parar,i=Object(c.useState)(0),r=Object(m.a)(i,2),o=r[0],s=r[1],j=Object(c.useRef)(null);Object(c.useEffect)((function(){n&&b()}),[n]),Object(c.useEffect)((function(){a&&l()}),[a]);var b=function(){j.current=setInterval((function(){s((function(t){return t+1}))}),1e3)},l=function(){clearInterval(j.current)};return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsxs)("section",{children:["Movimientos :  ",e]}),Object(u.jsxs)("section",{children:["Tiempo : ",o," s"]}),Object(u.jsx)("button",{className:"newgame",onClick:function(){window.location.reload()},children:"Otro Juego"})]})},y=n(36),J=n(37).a.div(w||(w=Object(y.a)(["\n    display: grid;\n    height: ",";\n    grid-template-rows: ",";\n    grid-template-columns: ",";\n    justify-content : center;\n    align-content: ",";\n   \n"])),(function(t){return t.modoJuego?"700px":"800px"}),(function(t){return t.modoJuego?"repeat(4, 110px)":"repeat(6,110px)"}),(function(t){return t.modoJuego?"repeat(4, 110px)":"repeat(6,110px)"}),(function(t){return t.modoJuego?"center":"flex-end"})),M=function(t){var e=t.modo,n=t.normal,a=Object(c.useState)(null),i=Object(m.a)(a,2),r=i[0],o=i[1],s=Object(c.useState)(!1),j=Object(m.a)(s,2),l=j[0],x=j[1],p=Object(c.useState)({gatos:[]}),h=Object(m.a)(p,2),g=h[0],S=h[1],w=Object(c.useState)(!1),y=Object(m.a)(w,2),M=y[0],P=y[1],D=Object(c.useState)(0),I=Object(m.a)(D,2),C=I[0],T=I[1],V=Object(c.useState)([]),q=Object(m.a)(V,2),B=q[0],R=q[1],z=Object(c.useState)(!1),A=Object(m.a)(z,2),F=A[0],G=A[1],H=Object(c.useState)({}),K=Object(m.a)(H,2),L=K[0],Q=K[1],U=Object(c.useState)({}),W=Object(m.a)(U,2),X=W[0],Y=W[1],Z=Object(c.useState)([]),$=Object(m.a)(Z,2),_=$[0],tt=$[1],et=Object(c.useState)([]),nt=Object(m.a)(et,2),ct=nt[0],at=nt[1];Object(c.useEffect)((function(){(function(){var t=Object(O.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e).then((function(t){x(!0),S(Object(f.a)(Object(f.a)({},g),{},{gatos:t}))}),(function(t){x(!0),o(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){st()}),[X]),Object(c.useEffect)((function(){it()}),[L]),Object(c.useEffect)((function(){rt()}),[B]);var it=function(){L.id&&!M&&P(!0)},rt=function(){B.length===e&&G(!0)},ot=function(t,e){return L.index===t&&L.id===e?0:(L.id?X.id||Y({index:t,id:e}):Q({index:t,id:e}),1)},st=function(){L.id&&X.id&&(T(C+1),L.id===X.id?ut():jt())},ut=function(){tt([L.index,X.index]),R([].concat(Object(b.a)(B),[L.index])),bt()},jt=function(){at([L.index,X.index]),bt()},bt=function(){Y({}),Q({})};return r?Object(u.jsxs)("div",{children:[" Error : ",r.message]}):l?Object(u.jsx)("div",{children:Object(u.jsxs)(J,{modoJuego:n,children:[g.gatos.map((function(t,e){return Object(u.jsx)("div",{children:Object(u.jsx)(k,{carta:t,permitirVuelta:ot,index:e,desabilitarPar:_,voltearPar:ct})},e)})),Object(u.jsx)(E,{movimientos:C,iniciar:M,parar:F})]})}):Object(u.jsx)(N,{})},P=function(t){var e=t.location.state.rows,n=t.location.state.normal;return Object(u.jsx)("div",{className:"tablero",children:Object(u.jsx)(M,{modo:e,normal:n})})};var D=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"inicio",children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(s.a,{path:"/normal",component:P}),Object(u.jsx)(s.a,{path:"/dificil",component:P})]})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.2ac0cbe1.chunk.js.map