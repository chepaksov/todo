import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const header = (
    <header className={'header'}>
    <h1>todos</h1>
    <input className={"new-todo"} placeholder={"What needs to be done?"} autoFocus={true}/>
    </header>
)
 ReactDOM.render(header, document.getElementById('todoapp'));