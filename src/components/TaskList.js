import React, {Component} from 'react';
import Task from "./Task";

export default class TaskList extends Component {
    state = {
        label: ''
    };
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };
    render() {
        const {todoData, onDeleted, onToggleCompleted, onToggleEditing, editItem} = this.props;
        const elements = todoData.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <span key={id}>
                 <Task {...itemProps}
                       onDeleted={() => onDeleted(id)}
                       onToggleCompleted={()=> onToggleCompleted(id)}
                       onToggleEditing={()=> onToggleEditing(id)}
                       onLabelChange={()=> this.onLabelChange}
                       editItem={()=> editItem(id, this.state.label)}
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