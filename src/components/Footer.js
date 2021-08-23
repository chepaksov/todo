import React, {Component} from 'react';
import TaskFilter from "./TaskFilter";

export default class Footer extends Component {
    render() {
        const {elements, todo, onToggleSelected, showCompletedTasks} = this.props;
        const elementFilter = elements.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id}>
                    <TaskFilter
                        {...itemProps}
                        onToggleSelected={() => onToggleSelected(id)}
                        showCompletedTasks={() => showCompletedTasks(id)}
                    />
                </li>
            );
        });
        return (
            <footer className="footer">
                <span className="todo-count">{todo} items left</span>
                <ul className="filters">
                    {elementFilter}
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        );
    };
};