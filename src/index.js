import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewTaskForm from "../src/comoinents/NewTaskForm";
import TaskList from "../src/comoinents/TaskList";
import Footer from "../src/comoinents/Footer";


const Form = () => {
    const todoData = [
        {label: 'Drink', id: 1},
        {label: 'Eat', id: 2},
        {label: 'Break', id: 3}
    ];
    return (
        <span>
        <NewTaskForm/>
        <section className='main'>
            <TaskList todos={todoData}/>
            <Footer/>
        </section>
        </span>
    )
}

ReactDOM.render(<Form/>, document.getElementById('todoapp'));
















