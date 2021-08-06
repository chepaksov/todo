import React from 'react';
import Task from "./Task";
// import {TaskCompleted} from "./Task";
// import {TaskEditing} from "./Task";

const TaskList = () => {
    return (
        <ul className="todo-list">

            {/*<li className="completed">  <TaskCompleted/></li>*/}
            {/*<li className="editing"><TaskEditing/></li>*/}
            <li><Task/></li>
        </ul>)
}

export default TaskList;