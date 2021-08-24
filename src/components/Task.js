import React, {PureComponent} from 'react';
import {formatDistanceToNow} from 'date-fns';
import classNames from "classnames";

export default class Task extends PureComponent {
    state = {
        label: ''
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.editItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        const {label, onDeleted, onToggleCompleted, onToggleEditing, completed, editing} = this.props;
        return ((editing) ? (
                <li className={classNames({editing})}>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" className="edit"
                               onChange={this.props.onLabelChange(this.state.label)}
                               defaultValue={this.state.label}/>
                    </form>
                </li>) : (
                <li className={classNames({completed})}>
                    <div className="view">
                        <input className="toggle" type="checkbox" onClick={onToggleCompleted}/>
                        <label>
                            <span className="description">{label}</span>
                            <span className="created">created {formatDistanceToNow(new Date(), {
                                addSuffix: true,
                                includeSeconds: true
                            })}
                        </span>
                        </label>
                        <button className="icon icon-edit" onClick={onToggleEditing}/>
                        <button className="icon icon-destroy" onClick={onDeleted}/>
                    </div>
                </li>)
        );
    };
};