import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewTaskForm from "../src/comoinents/NewTaskForm";
import TaskList from "../src/comoinents/TaskList";
import Footer from "../src/comoinents/Footer";



const Form = () => {
    return (
        <span>
        <NewTaskForm/>
        <section className='main'>
            <TaskList/>
            <Footer/>
        </section>
        </span>
    )
}

ReactDOM.render(<Form/>, document.getElementById('todoapp'));
















