import React, {Component} from 'react';
import BtnIconDestroy from "./Buttons/BtnIconDestroy";
import BtnIconEdit from "./Buttons/BtnIconEdit";
import {formatDistanceToNow} from 'date-fns';

export default class Task extends Component {
    onToggleClick = () => {
        console.log(`Done: ${this.props.label}`);
    }

    render() {
        const {label} = this.props;
        return (
            <div className="view">
                <input className="toggle" type="checkbox" onClick={this.onToggleClick}/>
                <label>
                    <span className="description">{label}</span>
                    <span className="created">created {formatDistanceToNow(new Date(), {
                        addSuffix: true,
                        includeSeconds: true
                    })}</span>
                </label>
                <BtnIconEdit/>
                <BtnIconDestroy/>
            </div>
        )
    }
}