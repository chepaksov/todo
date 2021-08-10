import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewTaskForm from "../src/comoinents/NewTaskForm";
import TaskList from "../src/comoinents/TaskList";
import Footer from "../src/comoinents/Footer";


const Form = () => {
    const todoData = [
        {label: 'Completed task', id: 1, status : 'completed'},
        {label: 'Editing task', id: 3, status : 'editing'},
        {label: 'Active task', id: 3, status : 'active'},

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
















