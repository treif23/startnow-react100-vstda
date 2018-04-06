import React, { Component } from 'react';


export default class TodosListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
        //this.onEdit = this.onEdit.bind(this);
    }

    renderTaskSelection() {
        const { task, isCompleted } = this.props;

        const taskStyle = {
            color: isCompleted ? 'black' : 'black',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                    Descripton
                        <textarea type='text' defaultValue={task} ref='editInput' />
                    </form>
                </td>
            );
        }

        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>


                    <select id='priority' name='priority' className='create-todo-priority form-control'>
                        <option id='select' selected disabled>Select a Priority</option>
                        <option value='1'> Low Priority </option>
                        <option value='2'> Medium Priority </option>
                        <option value='3'> High Priority </option>
                    </select>

                </td>
            );
        }
        return (
            <td>
                <button className='edit-todo' onClick={this.onEditClick.bind(this)}>Edit</button>
                <button type='button' onClick={this.props.deleteTask.bind(this, this.props.task)}><i class="fas fa-trash-alt"></i>

</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSelection()}
                {this.renderActionsSection()}
            </tr>
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
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false })

    }


}