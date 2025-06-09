import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    };

    return (
        <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
            <div className="form-outline flex-fill">
                <input type="text" id="form2" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} style={{ cursor: 'pointer' }} />
                <label className="form-label" htmlFor="form2">Nhập tên công việc</label>
            </div>
            <button type="submit" className="btn btn-info ms-2" style={{ cursor: 'pointer' }}>Thêm</button>
        </form>
    );
}

export default TodoForm;