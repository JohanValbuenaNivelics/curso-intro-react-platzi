(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=(n(12),n(6)),l=n(2);var u=n(0),d=c.a.createContext();function i(e){var t=function(e,t){var n=c.a.useState(!0),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!1),u=Object(l.a)(s,2),d=u[0],i=u[1],j=c.a.useState(t),b=Object(l.a)(j,2),m=b[0],h=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(n=t,localStorage.setItem(e,JSON.stringify(n))),h(n),r(!1)}catch(d){i(!0)}}),1e3)}),[]),{item:m,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),h(t)}catch(d){i(d)}},loading:a,error:d}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,i=c.a.useState(""),j=Object(l.a)(i,2),b=j[0],m=j[1],h=c.a.useState(!1),O=Object(l.a)(h,2),f=O[0],x=O[1],p=n.filter((function(e){return!!e.completed})).length,v=n.length,T=[];T=0===b.length?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(u.jsx)(d.Provider,{value:{totalTodos:v,completedTodos:p,searchValue:b,setSearchValue:m,searchedTodos:T,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},loading:a,error:r,openModal:f,setOpenModal:x},children:e.children})}n(14);function j(){var e=c.a.useContext(d),t=e.completedTodos,n=e.totalTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",t," de ",n," ToDos"]})}n(15);function b(){var e=c.a.useContext(d),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Busqueda de Todos",onChange:function(e){n(e.target.value)},value:t})}n(16);function m(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}n(17);function h(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onCompleted,children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDeleted,children:"X"})]})}n(18);function O(e){return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(19);function f(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(20);function x(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(d),r=a.addTodo,s=a.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(u.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Cortar la cebolla para el almuerzo."}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){s(!1)},children:"Cancelar"}),Object(u.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}function p(){var e=c.a.useContext(d),t=e.error,n=e.loading,o=e.completeTodo,a=e.deleteTodo,r=e.searchedTodos,s=e.setOpenModal,l=e.openModal;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsxs)(m,{children:[t&&Object(u.jsx)("p",{children:"hubo en un error"}),n&&Object(u.jsx)("p",{children:"Esta cargando"}),!n&&!r.length&&Object(u.jsx)("p",{children:"crea tu primer todo"}),r.map((function(e){return Object(u.jsx)(h,{text:e.text,completed:e.completed,onCompleted:function(){return o(e.text)},onDeleted:function(){return a(e.text)}},e.text)}))]}),!!l&&Object(u.jsx)(f,{children:Object(u.jsx)(x,{})}),Object(u.jsx)(O,{setOpenModal:s})]})}var v=function(){return Object(u.jsx)(i,{children:Object(u.jsx)(p,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.98f6fb34.chunk.js.map