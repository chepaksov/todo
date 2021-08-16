import React from 'react';
import classNames from "classnames";

const TaskFilter = ({selected, label}) => {
    return (
        <button className={classNames({selected})}>{label}</button>
    )
}

export default TaskFilter;