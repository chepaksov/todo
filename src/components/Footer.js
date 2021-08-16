import React from 'react';
import TaskFilter from "./TaskFilter";

const Footer = ({elements}) => {
    const elementFilter = elements.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <TaskFilter {...itemProps}  />
            </li>
        )
    });
    return (
        <footer className="footer">
            <span className={"todo-count"}>1 items left</span>
            <ul className="filters">
                {elementFilter}
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}
export default Footer;