import React, { Component } from 'react';

type Props = {
    todo: {
        id: number;
        name: string;
        completed: boolean;
    };
    onToggle: (id: number) => void;
    onDelete: (todo: any) => void;
    onEdit: (todo: any) => void;
};

class TodoItem extends Component<Props> {
    render() {
        const { todo, onToggle, onDelete, onEdit } = this.props;
        return (
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.name}
                </span>
                <button onClick={() => onEdit(todo)}>✏️</button>
                <button onClick={() => onDelete(todo)}>🗑️</button>
            </div>
        );
    }
}

export default TodoItem;
