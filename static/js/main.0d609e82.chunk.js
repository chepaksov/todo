(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);n(16);var a=n(15),o=n(12),c=n(1),l=n(7),r=n(3),i=n(4),s=n(6),d=n(5),u=n(2),b=n(14),j=n.n(b),f=n(0),g=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.addItem(e.state.label),e.setState({label:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,onChange:this.onLabelChange,value:this.state.label})})]})}}]),n}(u.PureComponent),p=n(8),O=n(24),m=n(10),h=n.n(m),v=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onSubmit=function(t){t.preventDefault(),e.props.editItem(e.state.label),e.setState({label:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleCompleted,o=e.onToggleEditing,c=e.completed,l=e.editing;return l?Object(f.jsx)("li",{className:h()({editing:l}),children:Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{type:"text",className:"edit",onChange:this.props.onLabelChange(this.state.label),defaultValue:this.state.label})})}):Object(f.jsx)("li",{className:h()({completed:c}),children:Object(f.jsxs)("div",{className:"view",children:[Object(f.jsx)("input",{className:"toggle",type:"checkbox",onClick:a}),Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"description",children:t}),Object(f.jsxs)("span",{className:"created",children:["created ",Object(O.a)(new Date,{addSuffix:!0,includeSeconds:!0})]})]}),Object(f.jsx)("button",{className:"icon icon-edit",onClick:o}),Object(f.jsx)("button",{className:"icon icon-destroy",onClick:n})]})})}}]),n}(u.PureComponent),x=["id"],C=["id"],S=["id"],y=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e}return Object(i.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.todoData,o=n.onDeleted,l=n.onToggleCompleted,r=n.onToggleEditing,i=n.editItem,s=n.active;return e=n.completed.selected?a.filter((function(e){return e.completed})).map((function(e){var n=e.id,a=Object(p.a)(e,x);return Object(f.jsx)("span",{children:Object(f.jsx)(v,Object(c.a)(Object(c.a)({},a),{},{onDeleted:function(){return o(n)},onToggleCompleted:function(){return l(n)},onToggleEditing:function(){return r(n)},onLabelChange:function(){return t.onLabelChange},editItem:function(){return i(n,t.state.label)}}))},n)})):s.selected?a.filter((function(e){return!e.completed})).map((function(e){var n=e.id,a=Object(p.a)(e,C);return Object(f.jsx)("span",{children:Object(f.jsx)(v,Object(c.a)(Object(c.a)({},a),{},{onDeleted:function(){return o(n)},onToggleCompleted:function(){return l(n)},onToggleEditing:function(){return r(n)},onLabelChange:function(){return t.onLabelChange},editItem:function(){return i(n,t.state.label)}}))},n)})):a.map((function(e){var n=e.id,a=Object(p.a)(e,S);return Object(f.jsx)("span",{children:Object(f.jsx)(v,Object(c.a)(Object(c.a)({},a),{},{onDeleted:function(){return o(n)},onToggleCompleted:function(){return l(n)},onToggleEditing:function(){return r(n)},onLabelChange:function(){return t.onLabelChange},editItem:function(){return i(n,t.state.label)}}))},n)})),Object(f.jsx)("ul",{className:"todo-list",children:e})}}]),n}(u.PureComponent),D=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.selected,a=e.onToggleSelected;return Object(f.jsx)("button",{className:h()({selected:n}),onClick:a,children:t})}}]),n}(u.PureComponent),T=["id"],k=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.elements,n=e.todo,a=e.onToggleSelected,o=e.showCompletedTasks,l=e.onClear,r=t.map((function(e){var t=e.id,n=Object(p.a)(e,T);return Object(f.jsx)("li",{children:Object(f.jsx)(D,Object(c.a)(Object(c.a)({},n),{},{onToggleSelected:function(){return a(t)},showCompletedTasks:function(){return o(t)}}))},t)}));return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsxs)("span",{className:"todo-count",children:[n," items left"]}),Object(f.jsx)("ul",{className:"filters",children:r}),Object(f.jsx)("button",{className:"clear-completed",onClick:l,children:"Clear completed"})]})}}]),n}(u.PureComponent),I=1,N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return{label:e,id:I++,completed:t,editing:n,selected:a}},E=[N("All",void 0,void 0,!1),N("Active",void 0,void 0,!1),N("Completed",void 0,void 0,!1)],w=[N("Completed task",!1,!1),N("Editing task",!1,!1),N("Active task",!1,!1)],L=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).itemId=1,e.state={filterElem:E,todoData:w},e.deleteItem=function(t){e.setState((function(e){var n=e.todoData,a=n.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}}))},e.editItem=function(t,n){e.setState((function(e){var a=e.todoData,o=a.findIndex((function(e){return e.id===t})),c=N(n);return{todoData:[].concat(Object(l.a)(a.slice(0,o)),[c],Object(l.a)(a.slice(o+1)))}}))},e.addItem=function(t){var n=N(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(l.a)(t),[n])}}))},e.onToggleCompleted=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"completed")}}))},e.onToggleEditing=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"editing")}}))},e.onToggleSelected=function(t){e.setState((function(n){var a=n.filterElem;return{filterElem:e.toggleSelected(a,t,"selected")}}))},e.onClear=function(){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return!e.completed}))}}))},e}return Object(i.a)(n,[{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),r=e[a],i=Object(c.a)(Object(c.a)({},r),{},Object(o.a)({},n,!r[n]));return[].concat(Object(l.a)(e.slice(0,a)),[i],Object(l.a)(e.slice(a+1)))}},{key:"toggleSelected",value:function(e,t){var n=e.findIndex((function(e){return e.id===t})),a=e[n],o=Object(c.a)(Object(c.a)({},a),{},{selected:!a.selected});return[].concat(Object(l.a)(e.slice(0,n)),[o],Object(l.a)(e.slice(n+1))).map((function(e){return e!==o?Object(c.a)(Object(c.a)({},e),{},{selected:!1}):Object(c.a)(Object(c.a)({},e),{},{selected:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.filterElem,o=t.filter((function(e){return!e.completed})).length,c=Object(a.a)(n,3),l=c[0],r=c[1],i=c[2];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{addItem:this.addItem}),Object(f.jsxs)("section",{className:"main",children:[Object(f.jsx)(y,{todoData:t,onDeleted:this.deleteItem,onToggleCompleted:this.onToggleCompleted,onToggleEditing:this.onToggleEditing,editItem:this.editItem,all:l,active:r,completed:i}),Object(f.jsx)(k,{elements:n,todo:o,onToggleSelected:this.onToggleSelected,onClear:this.onClear})]})]})}}]),n}(u.PureComponent);(function(){j.a.render(Object(f.jsx)(L,{}),document.getElementById("todoapp"))})()}},[[22,1,2]]]);
//# sourceMappingURL=main.0d609e82.chunk.js.map