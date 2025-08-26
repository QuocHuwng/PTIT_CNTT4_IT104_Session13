import React, { useState, useEffect } from 'react';
import './bai9.css'; 

const TodoItem = ({ task, toggleComplete, startEdit, openDeleteModal }) => {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
            <button onClick={() => startEdit(task)}>✏️</button>
            <button onClick={() => openDeleteModal(task)}>🗑️</button>
        </div>
    );
};

const ConfirmModal = ({ taskName, onConfirm, onCancel }) => {
    return (
        <div className="modal">
            <h2>Xác nhận</h2>
            <p>Bạn có chắc chắn xóa công việc &lt;{taskName}&gt; không?</p>
            <div className="button-group">
                <button className="cancel" onClick={onCancel}>Hủy</button>
                <button className="confirm" onClick={onConfirm}>Đồng ý</button>
            </div>
        </div>
    );
};

const EditModal = ({ editingName, setEditingName, saveEdit, cancelEdit, error }) => {
    return (
        <div className="modal">
            <h2>Cập nhật công việc</h2>
            <input
                type="text"
                value={editingName}
                onChange={(e) => setEditingName(e.target.value)}
                placeholder="Tên công việc"
            />
            {error && <p className="error">{error}</p>}
            <div className="button-group">
                <button className="cancel" onClick={cancelEdit}>Hủy</button>
                <button className="confirm" onClick={saveEdit}>Đồng ý</button>
            </div>
        </div>
    );
};

const Bai8 = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editingName, setEditingName] = useState('');
    const [editError, setEditError] = useState('');

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        const name = input.trim();
        if (!name) {
            setError('Tên công việc không được để trống');
            return;
        }
        if (tasks.some((t) => t.name === name)) {
            setError('Tên công việc không được phép trùng');
            return;
        }
        setTasks([...tasks, { id: Date.now(), name, completed: false }]);
        setInput('');
        setError('');
    };

    const startEdit = (task) => {
        setEditingId(task.id);
        setEditingName(task.name);
        setEditError('');
        setShowEditModal(true);
    };

    const saveEdit = () => {
        const name = editingName.trim();
        if (!name) {
            setEditError('Tên công việc không được để trống');
            return;
        }
        if (tasks.some((t) => t.id !== editingId && t.name === name)) {
            setEditError('Tên công việc không được phép trùng');
            return;
        }
        setTasks(tasks.map((t) => (t.id === editingId ? { ...t, name } : t)));
        setShowEditModal(false);
        setEditingId(null);
        setEditingName('');
        setEditError('');
    };

    const cancelEdit = () => {
        setShowEditModal(false);
        setEditingId(null);
        setEditingName('');
        setEditError('');
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    };

    const openDeleteModal = (task) => {
        setSelectedTask(task);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        setTasks(tasks.filter((t) => t.id !== selectedTask.id));
        setShowDeleteModal(false);
        setSelectedTask(null);
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setSelectedTask(null);
    };

    const completedCount = tasks.filter((t) => t.completed).length;
    const allCompleted = tasks.length > 0 && completedCount === tasks.length;

    return (
        <div className="todo-container">
            <h2>Danh sách công việc</h2>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Nhập tên công việc"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTask}>Thêm</button>
            </div>
            {error && <p className="error">{error}</p>}
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    startEdit={startEdit}
                    openDeleteModal={openDeleteModal}
                />
            ))}
            <p>Công việc đã hoàn thành: {completedCount}/{tasks.length}</p>
            {allCompleted && <p className="success">✔️ Hoàn thành công việc</p>}
            {showDeleteModal && (
                <ConfirmModal
                    taskName={selectedTask.name}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
            {showEditModal && (
                <EditModal
                    editingName={editingName}
                    setEditingName={setEditingName}
                    saveEdit={saveEdit}
                    cancelEdit={cancelEdit}
                    error={editError}
                />
            )}
        </div>
    );
};

export default Bai8;