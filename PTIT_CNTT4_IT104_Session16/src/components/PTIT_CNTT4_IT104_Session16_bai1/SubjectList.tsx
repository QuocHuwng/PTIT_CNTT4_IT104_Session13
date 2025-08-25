import React, { Component } from 'react';

class SubjectList extends Component {
    state = {
        subjects: ['Toan', 'Văn', 'Anh', 'Hóa', 'Sinh'],
    };

    render() {
        return (
            <div>
                <h2>Danh sách môn học</h2>
                <ul>
                    {this.state.subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default SubjectList;