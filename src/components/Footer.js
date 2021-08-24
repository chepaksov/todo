import React, {PureComponent} from 'react';
import TaskFilter from "./TaskFilter";

export default class Footer extends PureComponent {
    static defaultProps ={
        onClear: ()=>{console.log('function onClear not passed')},
        onToggleSelected: ()=> {console.log('function onToggleSelected not passed')},
        elements: [],
        activeTaskLength: '0'
    }
    render() {
        const {elements, activeTaskLength, onToggleSelected, onClear} = this.props;
        const elementFilter = elements.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id}>
                    <TaskFilter
                        {...itemProps}
                        onToggleSelected={() => onToggleSelected(id)}
                    />
                </li>
            );
        });
        return (
            <footer className="footer">
                <span className="todo-count">{activeTaskLength} items left</span>
                <ul className="filters">
                    {elementFilter}
                </ul>
                <button className="clear-completed" onClick={onClear}>Clear completed</button>
            </footer>
        );
    };
};