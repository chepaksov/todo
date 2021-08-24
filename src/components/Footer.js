import React, {PureComponent} from 'react';
import TaskFilter from "./TaskFilter";

export default class Footer extends PureComponent {
    render() {
        const {elements, todo, onToggleSelected, showCompletedTasks, onClear} = this.props;
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
                <button className="clear-completed" onClick={onClear}>Clear completed</button>
            </footer>
        );
    };
};