import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import ConfirmModal from './ConfirmModal';

type Todo = {
    id: number;
    name: string;
    completed: boolean;
};

type State = {
    todos: Todo[];
    input: string;
    showModal: boolean;
    editingTodo: Todo | null;
    editName: string;
};

class TodoApp extends Component<{}, State> {
    state: State = {
        todos: [],
        input: '',
        showModal: false,
        editingTodo: null,
        editName: '',
    };

    handleAdd = () => {
        const { input, todos } = this.state;
        const name = input.trim();
        if (!name) return alert('Tên không được để trống');
        if (todos.some(todo => todo.name === name)) return alert('Tên bị trùng');

        const newTodo: Todo = {
            id: Date.now(),
            name,
            completed: false,
        };

        this.setState({ todos: [...todos, newTodo], input: '' });
    };

    handleToggle = (id: number) => {
        const todos = this.state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        this.setState({ todos });
    };

    handleDelete = (todo: Todo) => {
        this.setState({ showModal: true, editingTodo: todo });
    };

    confirmDelete = () => {
        const { editingTodo, todos } = this.state;
        if (editingTodo) {
            const updated = todos.filter(t => t.id !== editingTodo.id);
            this.setState({ todos: updated, showModal: false, editingTodo: null });
        }
    };

    cancelDelete = () => {
        this.setState({ showModal: false, editingTodo: null });
    };

    handleEdit = (todo: Todo) => {
        this.setState({ showModal: true, editingTodo: todo, editName: todo.name });
    };

    confirmEdit = () => {
        const { editName, editingTodo, todos } = this.state;
        const name = editName.trim();
        if (!name) return alert('Tên không được để trống');
        if (todos.some(t => t.name === name && t.id !== editingTodo?.id)) return alert('Tên bị trùng');

        const updated = todos.map(t =>
            t.id === editingTodo?.id ? { ...t, name } : t
        );

        this.setState({ todos: updated, showModal: false, editingTodo: null, editName: '' });
    };

    render() {
        const { todos, input, showModal, editingTodo, editName } = this.state;
        const completedCount = todos.filter(t => t.completed).length;
        const totalCount = todos.length;
        const isEditing = editingTodo && editName !== '';

        return (
            <div>
                <h2>Danh sách công việc</h2>
                <TodoForm
                    value={input}
                    onChange={e => this.setState({ input: e.target.value })}
                    onAdd={this.handleAdd}
                />
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={this.handleToggle}
                        onDelete={this.handleDelete}
                        onEdit={this.handleEdit}
                    />
                ))}
                <p>Công việc đã hoàn thành: {completedCount}/{totalCount}</p>
                {completedCount === totalCount && totalCount > 0 && (
                    <p style={{ color: 'green' }}>🎉 Hoàn thành công việc!</p>
                )}
                {showModal && editingTodo && (
                    isEditing ? (
                        <ConfirmModal
                            todoName={editName}
                            isEdit={true}
                            onCancel={() => this.setState({ showModal: false, editingTodo: null })}
                            onConfirm={this.confirmEdit}
                            onChange={e => this.setState({ editName: e.target.value })}
                        />
                    ) : (
                        <ConfirmModal
                            todoName={editingTodo.name}
                            isEdit={false}
                            onCancel={this.cancelDelete}
                            onConfirm={this.confirmDelete}
                        />
                    )
                )}
            </div>
        );
    }
}

export default TodoApp;
