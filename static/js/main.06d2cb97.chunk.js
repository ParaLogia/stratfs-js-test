(this["webpackJsonpstratfs-js-project"]=this["webpackJsonpstratfs-js-project"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),i=(a(9),a(1)),o=function(e){var t=e.debt,a=e.checked,n=e.handleToggleCheck,l=a?"":"unchecked";return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",checked:a,onChange:n}),c.a.createElement("div",{className:l},t.creditorName),c.a.createElement("div",{className:l},t.firstName),c.a.createElement("div",{className:l},t.lastName),c.a.createElement("div",{className:l+" min-pay-percent right-align"},parseFloat(t.minPaymentPercentage).toFixed(2)),c.a.createElement("div",{className:l+" balance right-align"},parseFloat(t.balance).toFixed(2)))},m=function(e){return function(t){t.preventDefault(),e(t.target.value)}},s=function(e){var t=e.addDebt,a=Object(n.useState)(""),l=Object(i.a)(a,2),r=l[0],o=l[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),d=u[0],b=u[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),p=g[0],E=g[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),N=v[0],j=v[1],k=Object(n.useState)(""),y=Object(i.a)(k,2),C=y[0],O=y[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(e){e.preventDefault(),t({creditorName:r,firstName:d,lastName:p,minPaymentPercentage:N||0,balance:C||0}),[o,b,E,j,O].forEach((function(e){return e("")}))}},"Add Debt"),c.a.createElement("input",{type:"text",placeholder:"AMEX",value:r,onChange:m(o)}),c.a.createElement("input",{type:"text",placeholder:"Suman",value:d,onChange:m(b)}),c.a.createElement("input",{type:"text",placeholder:"Tester79",value:p,onChange:m(E)}),c.a.createElement("input",{type:"number",placeholder:"2.50",value:N,onChange:m(j)}),c.a.createElement("input",{type:"number",placeholder:"1200.00",value:C,onChange:m(O)}))},u=(a(10),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),m=Object(i.a)(r,2),u=m[0],d=m[1];Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json").then((function(e){return e.json()})).then((function(e){var t=Array(e.length);t.fill(!0),d(t),l(e)}))}),[]);var b=function(e){return function(t){var a=Array.from(u);a[e]=t.target.checked,d(a)}},h=[],g=0,p=0;return a.forEach((function(e,t){h.push(c.a.createElement(o,{key:t,debt:e,checked:u[t],handleToggleCheck:b(t)})),u[t]&&(g+=1,p+=parseFloat(e.balance))})),c.a.createElement("div",{className:"debt-table"},c.a.createElement("div",{className:"debt-table-grid"},c.a.createElement("input",{type:"checkbox",checked:g===a.length,onChange:function(e){var t=Array(u.length);t.fill(e.target.checked),d(t)}}),c.a.createElement("div",{className:"debt-table-header"},"Creditor"),c.a.createElement("div",{className:"debt-table-header"},"First Name"),c.a.createElement("div",{className:"debt-table-header"},"Last Name"),c.a.createElement("div",{className:"debt-table-header right-align"},"Min Pay%"),c.a.createElement("div",{className:"debt-table-header right-align"},"Balance"),h,c.a.createElement("button",{onClick:function(e){e.preventDefault(),d(u.slice(0,u.length-1)),l(a.slice(0,a.length-1))}},"Remove Debt"),c.a.createElement("span",{className:"grid-col-2-7"}),c.a.createElement(s,{addDebt:function(e){d(u.concat([!0])),l(a.concat([e]))}}),c.a.createElement("div",{className:"debt-table-total right-align"},"Total"),c.a.createElement("div",{className:"debt-table-total balance right-align grid-col-2-7"},p.toFixed(2))),c.a.createElement("footer",{className:"debt-table-footer"},c.a.createElement("span",null,"Total Row Count: ",a.length),c.a.createElement("span",null,"Check Row Count: ",g)))}),d=function(){return c.a.createElement(u,null)};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.06d2cb97.chunk.js.map