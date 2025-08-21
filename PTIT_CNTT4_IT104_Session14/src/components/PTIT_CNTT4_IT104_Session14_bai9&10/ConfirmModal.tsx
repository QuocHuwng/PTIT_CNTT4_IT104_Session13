import React, { Component } from 'react';

type Props = {
    todoName: string;
    isEdit: boolean;
    onCancel: () => void;
    onConfirm: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

class ConfirmModal extends Component<Props> {
    render() {
        const { todoName, isEdit, onCancel, onConfirm, onChange } = this.props;

        return (
            <div className="modal">
                <h3>{isEdit ? 'Cập nhật công việc' : 'Xác nhận xóa'}</h3>
                {isEdit ? (
                    <>
                        <input type="text" value={todoName} onChange={onChange} />
                        <button onClick={onCancel}>Hủy</button>
                        <button onClick={onConfirm}>Đồng ý</button>
                    </>
                ) : (
                    <>
                        <p>Bạn có chắc muốn xóa công việc "{todoName}"?</p>
                        <button onClick={onCancel}>Hủy</button>
                        <button onClick={onConfirm}>Xóa</button>
                    </>
                )}
            </div>
        );
    }
}

export default ConfirmModal;
