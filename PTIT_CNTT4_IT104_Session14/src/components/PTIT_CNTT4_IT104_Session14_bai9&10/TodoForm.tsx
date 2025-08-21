import React, { Component } from 'react';

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
};

class TodoForm extends Component<Props> {
    render() {
        const { value, onChange, onAdd } = this.props;
        return (
            <div>
                <input
                    type="text"
                    placeholder="Nhập tên công việc"
                    value={value}
                    onChange={onChange}
                />
                <button onClick={onAdd}>Thêm</button>
            </div>
        );
    }
}

export default TodoForm;
