import React from 'react';
export let textInput = React.createRef();
export let textOut = React.createRef()



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
            {/*<form onKeyDown={this.handle}>*/}
            <Input/>
            {/*</form>*/}

        </header>

    )
}
export default NewTaskForm;

	