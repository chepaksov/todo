import React, {PureComponent} from 'react';
import TaskFilter from "./TaskFilter";

export default class Footer extends PureComponent {
    render() {
        const {elements} = this.props;
        const elementFilter = elements.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id}>
                    <TaskFilter {...itemProps}  />
                </li>
            );
        });
        return (
            <footer className="footer">
                <span className="todo-count">1 items left</span>
                <ul className="filters">
                    {elementFilter}
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        );
    };
};