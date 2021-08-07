import React from 'react';
import Task from "./Task";
// import {TaskCompleted} from "./Task";
// import {TaskEditing} from "./Task";
import * as data from './NewTaskForm';

const TaskList = () => {

    return (
        <ul className="todo-list">

            {/*<li className="completed">  <TaskCompleted/></li>*/}
            {/*<li className="editing"><TaskEditing/></li>*/}
            <li><Task/></li>
            <li><Task label={data.textOut}/></li>
        </ul>)
}

export default TaskList;