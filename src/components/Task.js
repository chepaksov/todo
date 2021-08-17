import React, {Component} from 'react';
import {formatDistanceToNow} from 'date-fns';

export default class Task extends Component {
    render() {
        const {label} = this.props;
        return (
                <label>
                    <span className="description">{label}</span>
                    <span className="created">created {formatDistanceToNow(new Date(), {
                        addSuffix: true,
                        includeSeconds: true
                    })}</span>
                </label>
        )
    }
}