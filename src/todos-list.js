import _ from 'lodash';
import React, { Component } from 'react';

import TodosListItem from './todos-list-item';

export default class TodosList extends Component {

    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index}{...todo} {...props} />)
    }


    //(todo, index) => <TodosListItem key={index}{...todo} />) **SAME AS** 
    //
    //function(todo,index){
    //return <TodosListItem...>}
    //{...todo} SAME AS task={todo.task} isCompleted={todo.isCompleted}

    render() {
        if (this.props.todos.length < 1) {
            return (
                <div id='placeholder'>
                    <strong>Welcome to Very Simple Todo App!</strong>
                    <br/>
                    Get started now by adding a new todo on the left.
                    </div>
            )
        }
        else {
            return (

                <div id='table'>
                    <ul>

                        <tbody>
                            {this.renderItems()}
                        </tbody>
                    </ul>
                </div>

            );
        }
    }
}


