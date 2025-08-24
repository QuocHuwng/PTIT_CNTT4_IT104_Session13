import React from 'react';
import type { Student } from './types/Student';

interface Props {
    student: Student;
    index: number;
}

function StudentRow({ student, index }: Props) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.dob}</td>
            <td>{student.email}</td>
            <td>{student.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}</td>
            <td>
                <button>Chặn</button>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>
    );
}

export default StudentRow;
