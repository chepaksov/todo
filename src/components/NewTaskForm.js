import React from 'react';

const Input = () => {
    return (
        <input type='text' className="new-todo" placeholder="What needs to be done?" autoFocus={true}
               defaultValue=''/>
    )
}
const NewTaskForm = () => {
    return (
        <header className='header'>
            <h1>todos</h1>
            <Input/>
        </header>
    )
}
export default NewTaskForm;

	