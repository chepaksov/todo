import React, {Component} from 'react';
import Task from "./Task";

export default class TaskList extends Component {
    render() {
        const {todoData, onDeleted} = this.props;
        const elements = todoData.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <span key={id}>
                 <Task {...itemProps}
                       onDeleted={() => onDeleted(id)}
                       onToggleClick={() => this.onToggleClick}
                       onIconEditClick={() => this.onIconEditClick}/>
            </span>
            );
        });
        return (
            <ul className="todo-list">
                {elements}
            </ul>);
    };
};