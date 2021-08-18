import React, {Component} from 'react';
import Task from "./Task";
export default class TaskList extends Component {
    // state = {
    //
    // }
    render() {
       const {todoData} = this.props;
        const elements = todoData.map((item) => {
            const {id,...itemProps} = item;

            return (
            <span key={id}>
                 <Task {...itemProps} />
            </span>
                    );
        });
        return (
            <ul className="todo-list">
                {elements}
            </ul>);
    }
}
