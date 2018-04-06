import React, { Component } from 'react';


export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        };
    }
    renderError() {
        if (!this.state.error) { return null; }
        return <div style={{ color: red }}>{this.state.error}</div>;
    }

    render() {
        return (
            
                <div>

                    <div className='tagline'>
                        <h3 id='title' className='tagline'>Very Simple To Do App</h3>
                        <h5 id='h5'>Track all of the things</h5>
                    </div>

                    <hr />

                    <div id='info'>
                        <label id='label'>Add New Todo</label>
                    </div>
                    <div id='box'>
                        <label>I want to....</label>
                    </div>
                    <form onSubmit={this.handleCreate.bind(this)}>
                        <div id='box1'>
                            <textarea type='text' className='create-todo-text' id='textarea' ref='createInput' />
                        </div>
                        <div className='text-left' id='box2'>
                            <label>How much of a priority is this?</label>
                        </div>
                        <div id='box3'>
                            <select id='priority' name='priority' className='create-todo-priority form-control'>
                                <option id='select' selected disabled>Select a Priority</option>
                                <option value='1'> Low Priority </option>
                                <option value='2'> Medium Priority </option>
                                <option value='3'> High Priority </option>
                            </select>
                        </div>
                        <div id='button'>
                        <button className="btn btn-success col-lg-12" >Add</button>
                        {this.renderError()}
                        </div>
                    </form>
                </div>
           
        );
    }
    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }
        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'This task already exists!';
        } else {
            return null;
        }

    }

}