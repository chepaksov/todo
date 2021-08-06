import React from 'react';
function showInput(event) {

    console.log(event.target.value)
}


const NewTaskForm = () => {
    return (
        <header className='header'>
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onInput={showInput} />
        </header>
    )
}


// console.log('input')


export default NewTaskForm;