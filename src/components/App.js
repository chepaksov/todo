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
    }
    render() {
        const { filterElem} = this.state
            return (
                <span>
        <NewTaskForm/>
        <section className='main'>
            <TaskList/>
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