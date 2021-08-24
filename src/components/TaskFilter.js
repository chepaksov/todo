import React, {PureComponent} from 'react';
import classNames from "classnames";

export default class TaskFilter extends PureComponent {
    render() {
        const {label, selected, onToggleSelected} = this.props;
        return (
            <button className={classNames({selected})}
                    onClick={onToggleSelected}>{label}
            </button>
        );
    };
};