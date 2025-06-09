import React, { useState, useCallback, useMemo } from 'react';
import TodoForm from './components/TodoForm';
import TodoTabs from './components/TodoTabs';
import TodoList from './components/TodoList';
import ConfirmModal from './components/ConfirmModal';
import ErrorModal from './components/ErrorModal';

function App() {
  const [todos, setTodos] = useState([{ id: 1, text: 'Quét nhà', completed: true }, { id: 2, text: 'Giặt quần áo', completed: false }]);
  const [activeTab, setActiveTab] = useState('all');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const addTodo = useCallback((text) => {
    if (!text.trim()) return setShowErrorModal(true);
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodoToDelete(id);
    setShowConfirmModal(true);
  }, []);

  const confirmDelete = useCallback(() => {
    setTodos((prev) => prev.filter(todo => todo.id !== todoToDelete));
    setShowConfirmModal(false);
    setTodoToDelete(null);
  }, [todoToDelete]);

  const filteredTodos = useMemo(() => {
    if (activeTab === 'completed') return todos.filter(todo => todo.completed);
    if (activeTab === 'incomplete') return todos.filter(todo => !todo.completed);
    return todos;
  }, [activeTab, todos]);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <TodoForm addTodo={addTodo} />
                <TodoTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal show={showConfirmModal} onClose={() => setShowConfirmModal(false)} onConfirm={confirmDelete} todoText={todos.find(todo => todo.id === todoToDelete)?.text} />
      <ErrorModal show={showErrorModal} onClose={() => setShowErrorModal(false)} />
    </section>
  );
}

export default App;