import React from 'react';
import Task from "./Task";





const TaskList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        if (item.status === 'active'){
            return (
                <li key={id}>
                    <Task {...itemProps}/>
                </li>
            )
        }
        if(item.status === 'editing') {
            return (
                <li key={id} className='editing'>
                    <Task {...itemProps}/>
                    <input type="text" className="edit" defaultValue="Editing task"/>
                </li>
            )
        }
        if (item.status === 'completed'){
            return (
                <li key={id} className='completed'>
                    <Task {...itemProps}/>
                </li>
            )
        }

    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>);
};

export default TaskList;