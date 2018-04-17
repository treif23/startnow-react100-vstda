import React, { Component } from 'react';


export default class CreateTodo extends Component {
    
    render() {
        return (

            <div>

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
                        <select id='priority' value={this.props.priority} name='priority' ref='priorityInput' className='create-todo-priority form-control'>
                            <option id='select' value='0' selected disabled>Select a Priority</option>
                            <option value='1'> Low Priority </option>
                            <option value='2'> Medium Priority </option>
                            <option value='3'> High Priority </option>
                        </select>
                    </div>
                    <div id='button'>
                        <button className="btn btn-success col-lg-12 create-todo" >Add</button>
                    </div>
                </form>
            </div>

        );
    }
    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = { text: createInput.value, priority: this.refs.priorityInput.value };
  
        if (task.text == '' && task.priority == '0') {
            return alert('Please enter a task and select a priority!')
        }
        else if (task.text == '') {
            return alert('Please enter a task!');
        } else if (task.priority == '0') {
            return alert('Please select a priority!');
        }
       
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

}