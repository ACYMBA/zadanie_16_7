import React from "react";

const Todo = ({item, onRemoveClick}) => {
    return (
        <li>
            { item.text }
            <button onClick={ () => onRemoveClick(item.id) }>X</button>
        </li>
    );
}

export default Todo;