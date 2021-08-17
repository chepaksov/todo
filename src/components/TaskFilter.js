import React, {Component} from 'react';
import classNames from "classnames";

export default class TaskFilter extends Component {
    state = {
        selected: false
    };
    onToggleClick = () => {
        this.setState({
            selected: true
        });
    };
    render() {
        const {label} = this.props;
       const  {selected} = this.state;
        return (
            <button className={classNames({selected})} onClick={this.onToggleClick}>{label}</button>
        )
    }
};