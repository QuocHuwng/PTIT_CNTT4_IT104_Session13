import React from 'react';

interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

interface State {
    todos: Todo[];
    input: string;
    isEditing: boolean;
    editingId: number | null;
    showConfirmId: number | null;
}

class TodoApp extends React.Component<{}, State> {
    state: State = {
        todos: [],
        input: '',
        isEditing: false,
        editingId: null,
        showConfirmId: null,
    };

    componentDidMount() {
        const stored = localStorage.getItem('todos');
        if (stored) {
            this.setState({ todos: JSON.parse(stored) });
        }
    }

    saveToStorage(todos: Todo[]) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ input: e.target.value });
    };

    handleAddOrUpdate = () => {
        const { input, todos, isEditing, editingId } = this.state;
        const trimmed = input.trim();

        if (!trimmed) {
            alert('Tên công việc không được để trống');
            return;
        }

        const isDuplicate = todos.some(
            (todo) => todo.name === trimmed && todo.id !== editingId
        );
        if (isDuplicate) {
            alert('Tên công việc không được trùng');
            return;
        }

        if (isEditing && editingId !== null) {
            const updated = todos.map((todo) =>
                todo.id === editingId ? { ...todo, name: trimmed } : todo
            );
            this.setState({
                todos: updated,
                input: '',
                isEditing: false,
                editingId: null,
            });
            this.saveToStorage(updated);
        } else {
            const newTodo: Todo = {
                id: Date.now(),
                name: trimmed,
                completed: false,
            };
            const updated = [...todos, newTodo];
            this.setState({ todos: updated, input: '' });
            this.saveToStorage(updated);
        }
    };

    handleDelete = (id: number) => {
        this.setState({ showConfirmId: id });
    };

    confirmDelete = () => {
        const { todos, showConfirmId } = this.state;
        const updated = todos.filter((todo) => todo.id !== showConfirmId);
        this.setState({ todos: updated, showConfirmId: null });
        this.saveToStorage(updated);
    };

    cancelDelete = () => {
        this.setState({ showConfirmId: null });
    };

    handleEdit = (id: number) => {
        const todo = this.state.todos.find((t) => t.id === id);
        if (todo) {
            this.setState({
                input: todo.name,
                isEditing: true,
                editingId: id,
            });
        }
    };

    toggleComplete = (id: number) => {
        const updated = this.state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        this.setState({ todos: updated });
        this.saveToStorage(updated);
    };

    render() {
        const { todos, input, isEditing, showConfirmId } = this.state;

        return (
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h2>Danh sách công việc</h2>
                <input
                    type="text"
                    value={input}
                    onChange={this.handleChange}
                    placeholder="Thêm công việc mới..."
                    style={{ width: '70%', padding: '8px' }}
                />
                <button
                    onClick={this.handleAddOrUpdate}
                    style={{
                        padding: '8px 16px',
                        marginLeft: '10px',
                        backgroundColor: isEditing ? 'orange' : 'blue',
                        color: 'white',
                        border: 'none',
                    }}
                >
                    {isEditing ? 'Cập nhật' : 'Thêm'}
                </button>

                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => this.toggleComplete(todo.id)}
                            />
                            <span
                                style={{
                                    marginLeft: '10px',
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    flexGrow: 1,
                                }}
                            >
                                {todo.name}
                            </span>
                            <button
                                onClick={() => this.handleEdit(todo.id)}
                                style={{ marginRight: '10px', backgroundColor: 'orange' }}
                            >
                                Sửa
                            </button>
                            <button
                                onClick={() => this.handleDelete(todo.id)}
                                style={{ backgroundColor: 'red', color: 'white' }}
                            >
                                Xóa
                            </button>
                        </li>
                    ))}
                </ul>

                {showConfirmId !== null && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '30%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            padding: '20px',
                            border: '1px solid #ccc',
                            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                        }}
                    >
                        <p>Bạn có chắc chắn muốn xóa công việc này?</p>
                        <button onClick={this.confirmDelete} style={{ marginRight: '10px' }}>
                            Xác nhận
                        </button>
                        <button onClick={this.cancelDelete}>Hủy</button>
                    </div>
                )}
            </div>
        );
    }
}

export default TodoApp;