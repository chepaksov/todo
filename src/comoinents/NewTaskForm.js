import React from 'react';

export let textInput = React.createRef();
export let textOut = React.createRef()

export function showInput(event) {

    if (event.target.tagName === "INPUT") {
        textOut.current.innerHTML = textInput.current.value;
    }

}

const Input = () => {
    return (
        <input type='text' className="new-todo" placeholder="What needs to be done?" autoFocus={true}
               onInput={showInput} ref={textInput} defaultValue=''/>
    )
}
const NewTaskForm = () => {


    return (
        <header className='header'>
            <h1>todos</h1>
            {/*<form onKeyDown={this.handle}>*/}
            <Input/>
            {/*</form>*/}

        </header>

    )
}
export default NewTaskForm;

	