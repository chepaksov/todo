import React from 'react';

function showInput(event) {
  return (event.target.value).toString()
}

const NewTaskForm = () => {
    return (
        <header className='header'>
            <h1>todos</h1>
            {/*<form onKeyDown={this.handle}>*/}
                <input type='text' className="new-todo" placeholder="What needs to be done?" autoFocus={true} onInput={showInput} />
            {/*</form>*/}

        </header>
    )
}


export default NewTaskForm;