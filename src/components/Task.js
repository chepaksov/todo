import React, {PureComponent} from 'react';
import {formatDistanceToNow} from 'date-fns';
import classNames from "classnames";
import PropTypes from "prop-types";

export default class Task extends PureComponent {
    state = {
        label: ''
    };
    static defaultProps ={
        onDeleted: ()=>{console.log('function onDeleted not passed')},
        onToggleCompleted: ()=> {console.log('function onToggleCompleted not passed')},
        onToggleEditing: ()=>{console.log('function onToggleEditing not passed')},
        editItem: ()=>{console.log('function editItem not passed')},
        onLabelChange: ()=>{console.log('function onLabelChange not passed')},
        active: {},
        completed: {},
        label: null,
    }
    static propTypes = {
        label: PropTypes.string
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.editItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        const {label, onDeleted, onToggleCompleted, onToggleEditing, completed, editing,onLabelChange} = this.props;

        return ((editing) ? (
                <li className={classNames({editing})}>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" className="edit"
                               onChange={onLabelChange(this.state.label)}
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