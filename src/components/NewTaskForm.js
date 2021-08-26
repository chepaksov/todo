import React, {PureComponent} from 'react';

export default class NewTaskForm extends PureComponent {
    state = {
        label: '',
    };
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <header className='header'>
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='text'
                           className="new-todo"
                           placeholder="What needs to be done?" autoFocus={true}
                           onChange={this.onLabelChange}
                           value={this.state.label}/>
                </form>
            </header>
        );
    };
};