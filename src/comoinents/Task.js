import React from 'react';
import BtnIconDestroy from "./BtnIconDestroy";
import BtnIconEdit from "./BtnIconEdit";

import {formatDistanceToNow} from 'date-fns';


const Task = ({label}) => {
    return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
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



export default Task;