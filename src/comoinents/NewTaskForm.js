import React from 'react';
import Task from "./Task";
export let textInput = React.createRef();
export let textOut = React.createRef()
export function showInput(event) {
    // console.log(event.target.value);
    console.log(textInput.current.value);
    textOut.current.innerHTML = textInput.current.value;
}


const NewTaskForm = () => {



    return (
        <header className='header'>
            <h1>todos</h1>
            {/*<form onKeyDown={this.handle}>*/}
                <input type='text' className="new-todo" placeholder="What needs to be done?" autoFocus={true} onInput={showInput} ref={textInput} defaultValue='' />
            {/*</form>*/}


        </header>

    )
}


export default NewTaskForm;