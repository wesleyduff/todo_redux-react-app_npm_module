(this.webpackJsonptodo2=this.webpackJsonptodo2||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(0),i=n.n(o),r=n(6),a=n.n(r),d=n(3),l=n(4),s="ADD_TODO",u="TOGGLE_TODO",b="SET_FILTER",j={ALL:"all",COMPLETED:"completed",INCOMPLETE:"incomplete"},O=j.ALL,f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return e.payload.filter;default:return t}},p=n(5),v=n(16),h=n(2),y={allIds:[],byIds:{}},m=Object(l.b)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:var n=e.payload,c=n.id,o=n.content;return Object(h.a)(Object(h.a)({},t),{},{allIds:[].concat(Object(v.a)(t.allIds),[c]),byIds:Object(h.a)(Object(h.a)({},t.byIds),{},Object(p.a)({},c,{content:o,completed:!1}))});case u:var i=e.payload.id;return Object(h.a)(Object(h.a)({},t),{},{byIds:Object(h.a)(Object(h.a)({},t.byIds),{},Object(p.a)({},i,Object(h.a)(Object(h.a)({},t.byIds[i]),{},{completed:!t.byIds[i].completed})))});default:return t}},visibilityFilter:f}),T=Object(l.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),I=(n(31),n(13)),E=n(14),_=n(17),x=n(15),g=0,L=function(t){Object(_.a)(n,t);var e=Object(x.a)(n);function n(t){var c;return Object(I.a)(this,n),(c=e.call(this,t)).updateInput=function(t){c.setState({input:t})},c.handleAddTodo=function(){c.props.addTodo(c.state.input),c.setState({input:""})},c.state={input:""},c}return Object(E.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{onChange:function(e){return t.updateInput(e.target.value)},value:this.state.input}),Object(c.jsx)("button",{className:"add-todo",onClick:this.handleAddTodo,children:"Add Todo"})]})}}]),n}(i.a.Component),N=Object(d.b)(null,{addTodo:function(t){return{type:s,payload:{id:++g,content:t}}}})(L),C=n(7),F=n.n(C),D=Object(d.b)(null,{toggleTodo:function(t){return{type:u,payload:{id:t}}}})((function(t){var e=t.todo,n=t.toggleTodo;return Object(c.jsxs)("li",{className:"todo-item",onClick:function(){return n(e.id)},children:[e&&e.completed?"\ud83d\udc4c":"\ud83d\udc4b"," ",Object(c.jsx)("span",{className:F()("todo-item__text",e&&e.completed&&"todo-item__text--completed"),children:e.content})]})})),w=function(t){return t.todos},S=function(t){return function(t){return w(t)?w(t).allIds:[]}(t).map((function(e){return function(t,e){return w(t)?Object(h.a)(Object(h.a)({},w(t).byIds[e]),{},{id:e}):{}}(t,e)}))},k=Object(d.b)((function(t){return{todos:function(t,e){var n=S(t);switch(e){case j.COMPLETED:return n.filter((function(t){return t.completed}));case j.INCOMPLETE:return n.filter((function(t){return!t.completed}));case j.ALL:default:return n}}(t,t.visibilityFilter)}}))((function(t){var e=t.todos;return Object(c.jsx)("ul",{className:"todo-list",children:e&&e.length?e.map((function(t,e){return Object(c.jsx)(D,{todo:t},"todo-".concat(t.id))})):"No todos, yay!"})})),A=Object(d.b)((function(t){return{activeFilter:t.visibilityFilter}}),{setFilter:function(t){return{type:b,payload:{filter:t}}}})((function(t){var e=t.activeFilter,n=t.setFilter;return Object(c.jsx)("div",{className:"visibility-filters",children:Object.keys(j).map((function(t){var o=j[t];return Object(c.jsx)("span",{className:F()("filter",o===e&&"filter--active"),onClick:function(){n(o)},children:o},"visibility-filter-".concat(o))}))})}));n(32);function P(){return Object(c.jsxs)("div",{className:"todo-app",children:[Object(c.jsx)("h1",{children:"Todo List"}),Object(c.jsx)(N,{}),Object(c.jsx)(k,{}),Object(c.jsx)(A,{})]})}var M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};a.a.render(Object(c.jsx)(d.a,{store:T,children:Object(c.jsx)(P,{})}),document.getElementById("root")),M()}},[[33,1,2]]]);
//# sourceMappingURL=main.70dc3b53.chunk.js.map