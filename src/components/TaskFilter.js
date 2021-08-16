import React, {Component} from 'react';
import classNames from "classnames";

export default class TaskFilter extends Component {
    render() {
        const {selected, label} = this.props;
        return (
            <button className={classNames({selected})}>{label}</button>
        )
    }
};

