(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);c(11);var n=c(2),a=c(3),s=c(5),i=c(4),l=c(1),r=c(10),o=c.n(r),d=c(0),j=function(){return Object(d.jsx)("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,defaultValue:""})},u=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"todos"}),Object(d.jsx)(j,{})]})},b=c(7),p=c(8),O=c(19),h=c(6),f=c.n(h),m=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={completed:!1,editing:!1},e.onToggleClick=function(){e.setState((function(e){return{completed:!e.completed}}))},e.onIconEditClick=function(){e.setState((function(e){return{editing:!e.editing}}))},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this.props.label,t=this.state,c=t.completed,n=t.editing;return n?Object(d.jsx)("li",{className:f()({editing:n}),children:Object(d.jsx)("input",{type:"text",className:"edit",defaultvalue:"",placeholder:"Editing task"})}):Object(d.jsx)("li",{className:f()({completed:c}),children:Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("input",{className:"toggle",type:"checkbox",onClick:this.onToggleClick}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{className:"description",children:e}),Object(d.jsxs)("span",{className:"created",children:["created ",Object(O.a)(new Date,{addSuffix:!0,includeSeconds:!0})]})]}),Object(d.jsx)("button",{className:"icon icon-edit",onClick:this.onIconEditClick}),Object(d.jsx)("button",{className:"icon icon-destroy"})]})})}}]),c}(l.Component),x=["id"],v=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={todoData:[{label:"Completed task",id:1},{label:"Editing task",id:2},{label:"Active task",id:3}]},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this.state.todoData.map((function(e){var t=e.id,c=Object(p.a)(e,x);return Object(d.jsx)("span",{children:Object(d.jsx)(m,Object(b.a)({},c))},t)}));return Object(d.jsx)("ul",{className:"todo-list",children:e})}}]),c}(l.Component),k=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={selected:!1},e.onFilterClick=function(){e.setState((function(e){return{selected:!e.selected}}))},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this.props.label,t=this.state.selected;return Object(d.jsx)("button",{className:f()({selected:t}),onClick:this.onFilterClick,children:e})}}]),c}(l.Component),y=["id"],g=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){var e=this.props.elements.map((function(e){var t=e.id,c=Object(p.a)(e,y);return Object(d.jsx)("li",{children:Object(d.jsx)(k,Object(b.a)({},c))},t)}));return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("span",{className:"todo-count",children:"1 items left"}),Object(d.jsx)("ul",{className:"filters",children:e}),Object(d.jsx)("button",{className:"clear-completed",children:"Clear completed"})]})}}]),c}(l.Component),N=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={filterElem:[{label:"All",id:1},{label:"Active",id:2},{label:"Completed",id:3}]},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this.state.filterElem;return Object(d.jsxs)("span",{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("section",{className:"main",children:[Object(d.jsx)(v,{}),Object(d.jsx)(g,{elements:e})]})]})}}]),c}(l.Component);(function(){o.a.render(Object(d.jsx)(N,{}),document.getElementById("todoapp"))})()}},[[17,1,2]]]);
//# sourceMappingURL=main.baeba5d2.chunk.js.map