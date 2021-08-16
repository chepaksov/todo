import React from 'react';
import Task from "./Task";
import classNames from "classnames";


const TaskList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, status, ...itemProps} = item;
        const classes = classNames({
            editing: item.status === 'editing',
            completed: item.status === 'completed',
        });

        return (item.status === 'editing') ? (
            <li key={id} className={classes}>
                <Task {...itemProps}/>
                <input type="text" className="edit" defaultValue="Editing task"/>
            </li>
        ) : (
            <li key={id} className={classes}>
                <Task {...itemProps}/>
            </li>);
    });
    return (
        <ul className="todo-list">
            {elements}
        </ul>);
};

export default TaskList;