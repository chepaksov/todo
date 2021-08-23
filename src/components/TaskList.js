import React, {PureComponent} from 'react';
import Task from "./Task";

export default class TaskList extends PureComponent {
    render() {
        const {todoData, onDeleted} = this.props;
        const elements = todoData.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <span key={id}>
                 <Task {...itemProps}
                       onDeleted={() => onDeleted(id)}
                 />
            </span>
            );
        });
        return (
            <ul className="todo-list">
                {elements}
            </ul>);
    };
};