import React, {Component} from 'react';
import Task from "./Task";
import classNames from "classnames";

export default class TaskList extends Component {

    render() {

        const {todos} = this.props;
        const elements = todos.map((item) => {
            const {id,...itemProps} = item;
            return (
                <li key={id}>
                    <Task {...itemProps} />
                </li>
                    );
        });
        return (
            <ul className="todo-list">
                {elements}
            </ul>);
    }
}
