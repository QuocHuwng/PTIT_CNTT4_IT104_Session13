import React from 'react';
import { students } from './types/data/students';
import StudentRow from './StudentRow';

function StudentTable() {
    return (
        <table border={1} cellPadding={8}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Ngày sinh</th>
                    <th>Email</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <StudentRow key={student.id} student={student} index={index} />
                ))}
            </tbody>
        </table>
    );
}

export default StudentTable;
