import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";
import {filterElem, todoData} from "./constants/constants";

class Form extends PureComponent {
    state = {
        filterElem,
        todoData,
    };
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    };

    render() {
        const {todoData, filterElem} = this.state;
        return (<>
            <NewTaskForm/>
            <section className='main'>
                <TaskList todoData={todoData}
                          onDeleted={this.deleteItem}/>
                <Footer elements={filterElem}/>
            </section>
        </>);
    };
}

const App = () => {
    ReactDOM.render(<Form/>, document.getElementById('todoapp'));
};
export default App;