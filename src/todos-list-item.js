import React, { Component } from 'react';


export default class TodosListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
           // priority: null,
        };
        //this.onEdit = this.onEdit.bind(this);
    }

    renderTaskSelection() {
        const { task, isCompleted } = this.props;


        if (this.state.isEditing) {
            return (

                <li id="textarea1" className={this.renderSwitch(task.priority)}>
                    <form onSubmit={this.onSaveClick.bind(this)} className={this.renderSwitch(task.priority)}>
                        Description
                        <textarea id='textarea1' type='text' defaultValue={task.text} className='update-todo-text' ref='editInput' />
                    </form>
                    <select id='priority' name='priority1' ref='editPriority' defaultValue={task.priority} className='update-todo-priority'>
                        <option id='select' selected disabled>Select a Priority</option>
                        <option value='1'> Low Priority </option>
                        <option value='2'> Medium Priority </option>
                        <option value='3'> High Priority </option>
                    </select>
                    {this.renderActionsSection()}

                </li>
            );
        }

        return (
            <div id='item' className={this.renderSwitch(task.priority)} 
            //onClick={this.props.toggleTask.bind(this, task)}
            >
                <input className="form-check-input" type="checkbox" id="defaultCheck1"></input>
                <div id='text'>{task.text}{this.renderActionsSection()}</div>
            </div>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (

                <div>
                    <button id='save' className='update-todo' onClick={this.onSaveClick.bind(this)}><span className="glyphicon glyphicon-floppy-disk"></span></button>
                    <button id='cancel' className='cancel-todo' onClick={this.onCancelClick.bind(this)}><span className="glyphicon glyphicon-ban-circle"></span></button>
                </div>

            );
        }
        return (
            <div className='float-right' key={new Date()}>
                <button className='edit-todo' id='edit' onClick={this.onEditClick.bind(this)}><span className='glyphicon glyphicon-edit'></span></button>
                <button className='delete-todo' type='button' id='delete' onClick={this.props.deleteTask.bind(this, this.props.task)}><span className="glyphicon glyphicon-trash"></span></button>
            </div>
        );
    }

    render() {
        return (
            <li className='success'>
                {this.renderTaskSelection()}
            </li>
        );
    }
    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = { text: this.refs.editInput.value, priority: this.refs.editPriority.value };
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false })
    }

    renderSwitch(param) {
        //var param = document.getElementById('priority').value();

        switch (param) {


            case '1':
                return 'list-group-item list-group-item-success';
            case '2':
                return 'list-group-item list-group-item-warning';
            case '3':
                return 'list-group-item list-group-item-danger';
            default:
                return null;
        }
    }



}