import React from 'react';
import BtnIconDestroy from "./BtnIconDestroy";
import BtnIconEdit from "./BtnIconEdit";
import {textOut} from "./NewTaskForm";
const Task = (props) => {
    return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
                <span className="description" ref={textOut}/>
                {/*<span className="created">created <span>{ (new Date()).toString()}</span> minutes ago</span>*/}
            </label>
            <BtnIconEdit/>
            <BtnIconDestroy/>
        </div>
    )
}
// export const TaskCompleted = () => {
//     return (
//
//         <div className="view">
//             <input className="toggle" type="checkbox"/>
//             <label>
//                 <span className="description">Completed task</span>
//                 <span className="created">created 17 seconds ago</span>
//             </label>
//             <button className="icon icon-edit"/>
//             <button className="icon icon-destroy"/>
//         </div>
//     )
// }
// export const TaskEditing = () => {
//     return (
//         <span>
//              <div className="view">
//                 <input className="toggle" type="checkbox"/>
//                 <label>
//                     <span className="description">Editing task</span>
//                     {/*<span className="created">created  minutes ago</span>*/}
//                 </label>
//                 <BtnIconEdit/>
//                 <BtnIconDestroy/>
//             </div>
//             <input type="text" className="edit" defaultValue="Editing task"/>
//         </span>
//     )
// }

export default Task;