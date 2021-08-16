import React from 'react';
import classNames from "classnames";


const TaskFilter = ({selected, label}) => {
    const classes = classNames({
        selected: selected,
    })

    return (
        <button className={classes}>{label}</button>
    )
}

export default TaskFilter;