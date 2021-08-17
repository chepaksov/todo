import React, {Component} from 'react';
import {formatDistanceToNow} from 'date-fns';
import classNames from "classnames";

export default class Task extends Component {
state = {
    completed: false,
    editing: false
}
    onToggleClick = () => {
        this.setState(({completed}) => {
            return {
                completed: !completed
            };
        });
    };
    onIconEditClick = () => {
        this.setState(({editing}) => {
            return {
                editing: !editing
            };
        });
    };
    render() {
        const {label} = this.props;
        const {completed, editing} = this.state;
        return (editing) ? (<li className={classNames({editing})}>
            <input type="text" className="edit" value="Editing task"/>
        </li>) : (
            <li className={classNames({completed})}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={this.onToggleClick}/>
                <label>
                    <span className="description">{label}</span>
                    <span className="created">created {formatDistanceToNow(new Date(), {
                        addSuffix: true,
                        includeSeconds: true
                    })}</span>
                </label>
                <button className="icon icon-edit" onClick={this.onIconEditClick}/>
                <button className="icon icon-destroy"/>
            </div>
                </li>
        )
    }
}