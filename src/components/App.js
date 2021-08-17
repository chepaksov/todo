import React from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";

const App = () => {
    const Form = () => {
        const todoData = [
            {label: 'Completed task', id: 1},
            {label: 'Editing task', id: 2},
            {label: 'Active task', id: 3},
        ];
        const filterElem = [
            {label: 'All', id: 1},
            {label: 'Active', id: 2},
            {label: 'Completed', id: 3},
        ];
        return (
            <span>
        <NewTaskForm/>
        <section className='main'>
            <TaskList todos={todoData}/>
            <Footer elements={filterElem}/>
        </section>
        </span>
        )
    }
    ReactDOM.render(<Form/>, document.getElementById('todoapp'));
}
export default App;