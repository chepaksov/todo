import React, {Component} from 'react';
import Task from "./Task";
import classNames from "classnames";
import BtnIconEdit from "./Buttons/BtnIconEdit";
import BtnIconDestroy from "./Buttons/BtnIconDestroy";

export default class TaskList extends Component {
    state = {
        completed: false,
        editing : false
    };
    onToggleClick = () => {
        this.setState({
            completed: true
        });
    };
    onIconEditClick = () => {
        this.setState({
            editing: true
        });
    }
    render() {
        const {completed , editing} = this.state;
        const {todos} = this.props;
        const elements = todos.map((item) => {
            const {id, ...itemProps} = item;

            return (editing) ? (
                <li key={id} className={classNames({editing})}>
                    <div className="view">
                        <input className="toggle" type="checkbox" onClick={this.onToggleClick}/>
                        <Task {...itemProps}/>
                        <button className="icon icon-edit" onClick={this.onIconEditClick}  />
                        <button className="icon icon-destroy"/>
                    </div>
                    <input type="text" className="edit" defaultValue="Editing task"/>
                </li>
            ) : (
                <li key={id} className={classNames({completed})}>
                    <div className="view">
                        <input className="toggle" type="checkbox" onClick={this.onToggleClick}/>
                    <Task {...itemProps}/>
                        <button className="icon icon-edit" onClick={this.onIconEditClick}  />
                        <button className="icon icon-destroy"/>
                    </div>
                </li>);
        });
        return (
            <ul className="todo-list">
                {elements}
            </ul>);
    }
}
