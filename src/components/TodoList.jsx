import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="tab-content" id="ex1-content">
            <div className="tab-pane fade show active">
                <ul className="list-group mb-0">
                    {todos.map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;