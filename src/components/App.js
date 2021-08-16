import React from 'react';
import ReactDOM from 'react-dom';

import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";

const App = () => {
    const Form = () => {
        const todoData = [
            {label: 'Completed task', id: 1, status : 'completed'},
            {label: 'Editing task', id: 2, status : 'editing'},
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
}
export default App;
