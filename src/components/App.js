import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";
class Form extends Component {
    itemId = 1;
    state = {
        filterElem: [
            this.createFilterElem('All'),
            this.createFilterElem('Active'),
            this.createFilterElem('Completed'),
        ],
        todoData: [
            this.createTodoItem('Completed task'),
            this.createTodoItem('Editing task'),
            this.createTodoItem('Active task'),
        ],
    };
    createTodoItem(label){
        return{
            label,
            id: this.itemId++,
            completed: false,
            editing: false
        }
    }
    createFilterElem(label){
        return{
            label,
            id: this.itemId++,
            selected : false
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    };
    editItem = (id, text) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newItem = this.createTodoItem(text);
            const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    };
    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            };
        });
    };
    toggleProperty(arr,id, propName){
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)];
    }
    toggleSelected(arr,id){

        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, selected: !oldItem.selected};
        let newArr = [...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)];
      const result = newArr.map(obj => obj!== newItem ? { ...obj, selected: false }: { ...obj, selected: true });
        return result;
    }
    onToggleCompleted = (id) => {
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData,id,'completed')
            };
        });
    };
    onToggleEditing = (id) => {
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData,id,'editing')
            };
        });
    };

    onToggleSelected = (id) => {
        this.setState(({filterElem}) => {
               return {filterElem: this.toggleSelected(filterElem,id,'selected')}
        });


    };

    render() {
        const {todoData, filterElem} = this.state;
        const activeTask = todoData.filter((el)=> !el.completed).length;
        return (
            <span>
        <NewTaskForm addItem={this.addItem}/>
        <section className='main'>
            <TaskList todoData={todoData}
                      onDeleted={this.deleteItem}
                      onToggleCompleted={this.onToggleCompleted}
                      onToggleEditing={this.onToggleEditing}
                      editItem={this.editItem}/>
            <Footer elements={filterElem}
                    todo={activeTask}
                    showCompletedTasks={this.showCompletedTasks}
                    onToggleSelected={this.onToggleSelected}/>
        </section>
        </span>
        );
    };
}
const App = () => {
    ReactDOM.render(<Form/>, document.getElementById('todoapp'))
};
export default App;