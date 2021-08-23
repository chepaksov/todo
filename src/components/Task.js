import React, {PureComponent} from 'react';
import {formatDistanceToNow} from 'date-fns';
import classNames from "classnames";
import {completed, editing} from "./constants/constants";

export default class Task extends PureComponent {
    state = {
        completed,
        editing,
    };

    render() {
        const {label} = this.props;
        const {completed, editing} = this.state;
        const onToggleClick = () => {
            this.setState(({completed}) => {
                return {
                    completed: !completed
                };
            });
        };
        const onIconEditClick = () => {
            this.setState(({editing}) => {
                return {
                    editing: !editing
                };
            });
        };
        return ((editing) ? (
                <li className={classNames({editing})}>
                    <input type="text" className="edit" defaultValue="Editing task"/>
                </li>) : (
                <li className={classNames({completed})}>
                    <div className="view">
                        <input className="toggle" type="checkbox" onClick={onToggleClick}/>
                        <label>
                            <span className="description">{label}</span>
                            <span className="created">created {formatDistanceToNow(new Date(), {
                                addSuffix: true,
                                includeSeconds: true
                            })}</span>
                        </label>
                        <button className="icon icon-edit" onClick={onIconEditClick}/>
                        <button className="icon icon-destroy" onClick={this.props.onDeleted}/>
                    </div>
                </li>)
        );
    };
};