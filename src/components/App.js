import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";

class Form extends Component {
    state = {
        filterElem : [
            {label: 'All', id: 1},
            {label: 'Active', id: 2},
            {label: 'Completed', id: 3},
        ],
        todoData: [
            {label: 'Completed task', id: 1},
            {label: 'Editing task', id: 2},
            {label: 'Active task', id: 3},
        ],
    }
    render() {
        const { todoData,filterElem} = this.state
            return (
                <span>
        <NewTaskForm/>
        <section className='main'>
            <TaskList todoData={todoData}/>
            <Footer elements={filterElem}/>
        </section>
        </span>
            )
    }

}
 const App = () => {
     ReactDOM.render(<Form/>, document.getElementById('todoapp'));
 }
export default App;