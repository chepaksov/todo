import React, {PureComponent} from 'react';
import classNames from "classnames";

export default class TaskFilter extends PureComponent {
    state = {
        selected: false
    };
    onFilterClick = () => {
        this.setState(({selected}) => {
            return {
                selected: !selected
            };
        });
    };

    render() {
        const {label} = this.props;
        const {selected} = this.state;
        return (
            <button className={classNames({selected})} onClick={this.onFilterClick}>{label}</button>
        );
    };
};