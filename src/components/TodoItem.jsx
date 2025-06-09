import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded" style={{ backgroundColor: '#f4f6f7' }}>
            <div>
                <input className="form-check-input me-2" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                {todo.completed ? <s>{todo.text}</s> : <span style={{ cursor: 'pointer' }}>{todo.text}</span>}
            </div>
            <div className="d-flex gap-3" style={{ cursor: 'pointer' }}>
                <i className="fas fa-pen-to-square text-warning" />
                <i className="far fa-trash-can text-danger" onClick={() => deleteTodo(todo.id)} />
            </div>
        </li>
    );
}

export default TodoItem;