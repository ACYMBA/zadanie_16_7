import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
    const todoList = todos.map(todo => {
        return <Todo item={ todo } onRemoveClick={ onTodoClick } key={ todo.id } />
    });

    return (
        <ul>
            { todoList }
        </ul>
    );
};

export default TodoList