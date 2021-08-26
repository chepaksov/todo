import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";
import {todoData, filterElem, createTodoItem} from "./constants/constants";

class Form extends PureComponent {
    itemId = 1;
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
    editItem = (id, text) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newItem = createTodoItem(text);
            const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    };
    addItem = (text) => {
        const newItem = createTodoItem(text);
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)];
    };

    toggleSelected(arr, id) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, selected: !oldItem.selected};
        let newArr = [...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)];
        return newArr.map(obj => obj !== newItem ? {...obj, selected: false} : {...obj, selected: true});
    };

    onToggleCompleted = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'completed')
            };
        });
    };
    onToggleEditing = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'editing')
            };
        });
    };

    onToggleSelected = (id) => {
        this.setState(({filterElem}) => {
            return {filterElem: this.toggleSelected(filterElem, id, 'selected')};
        });
    };
    onClear = () => {
        this.setState(({todoData}) => {
            const newArr = (todoData.filter(item => !item.completed))
            return {
                todoData: newArr
            };
        });
    };

    render() {
        const {todoData, filterElem} = this.state;
        const activeTaskLength = todoData.filter((el) => !el.completed).length;
        const [all, active, completed] = filterElem;
        return (
            <><NewTaskForm addItem={this.addItem}/>
                <section className='main'>
                    <TaskList
                        todoData={todoData}
                        onDeleted={this.deleteItem}
                        onToggleCompleted={this.onToggleCompleted}
                        onToggleEditing={this.onToggleEditing}
                        editItem={this.editItem}
                        all={all}
                        active={active}
                        completed={completed}/>
                    <Footer elements={filterElem}
                            activeTaskLength={activeTaskLength}
                            onToggleSelected={this.onToggleSelected}
                            onClear={this.onClear}/>
                </section>
            </>
        );
    };
}

const App = () => {
    ReactDOM.render(<Form/>, document.getElementById('todoapp'));
};
export default App;