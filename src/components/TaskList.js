import React, {PureComponent} from 'react';
import Task from "./Task";

export default class TaskList extends PureComponent {
    state = {
        label: ''
    };
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    render() {
        const {todoData, onDeleted, onToggleCompleted, onToggleEditing, editItem, active, completed} = this.props;
        let elements;
        (completed.selected) ? (elements = todoData.filter(item => item.completed).map((item) => {
            const {id, ...itemProps} = item;
            return (
                <span key={id}>
                        <Task {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onToggleCompleted={() => onToggleCompleted(id)}
                              onToggleEditing={() => onToggleEditing(id)}
                              onLabelChange={() => this.onLabelChange}
                              editItem={() => editItem(id, this.state.label)}/>
                    </span>
            );
        })) : (active.selected) ? (
            elements = todoData.filter(item => !item.completed).map((item) => {
                const {id, ...itemProps} = item;
                return (
                    <span key={id}>
                        <Task {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onToggleCompleted={() => onToggleCompleted(id)}
                              onToggleEditing={() => onToggleEditing(id)}
                              onLabelChange={() => this.onLabelChange}
                              editItem={() => editItem(id, this.state.label)}/>
                            </span>
                );
            })) : (elements = todoData.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <span key={id}>
                        <Task {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onToggleCompleted={() => onToggleCompleted(id)}
                              onToggleEditing={() => onToggleEditing(id)}
                              onLabelChange={() => this.onLabelChange}
                              editItem={() => editItem(id, this.state.label)}/>
                        </span>
            );
        }));

        return (
            <ul className="todo-list">
                {elements}
            </ul>);
    };
};