import React, {Component} from 'react';
import Task from "./Task";
export default class TaskList extends Component {
    state = {
        todoData: [
            {label: 'Completed task', id: 1},
            {label: 'Editing task', id: 2},
            {label: 'Active task', id: 3},
        ],
    }
    render() {
       const {todoData} = this.state;
        const elements = todoData.map((item) => {
            const {id,...itemProps} = item;

            return (
            <span key={id}>
                 <Task {...itemProps} />
            </span>
                    );
        });
        return (
            <ul className="todo-list">
                {elements}
            </ul>);
    }
}
