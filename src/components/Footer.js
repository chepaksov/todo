import React from 'react';
import TaskFilter from "./TaskFilter";

const Footer = () => {
    const filter = [
        {elem : 'All', selected: true},
        {elem : 'Active', selected: false},
        {elem : 'Completed', selected: false}
    ]
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TaskFilter filterElem={filter}/>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;