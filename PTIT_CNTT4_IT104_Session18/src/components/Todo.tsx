import React, { useReducer, useState } from 'react'

type Job = {
    id: number;
    title: string;
    completed: boolean;
}

type State = {
    jobs: Job[];
    new_title: string;
}

export default function Todos() {
    const initial: State = {
        jobs: [
            { id: 1, title: "học C++", completed: true },
            { id: 2, title: "python", completed: false }
        ],
        new_title: ""
    }

    const todoReducer = (state: State, action: any): State => {
        switch (action.type) {
            case "SET_TITLE":
                return { ...state, new_title: action.payload };
            case "ADD":
                return {
                    ...state,
                    jobs: [...state.jobs, action.payload],
                    new_title: ""
                };
            case "EDIT":
                const updatedJobs = state.jobs.map(job =>
                    job.id === action.payload.id
                        ? { ...job, title: action.payload.title }
                        : job
                );
                return { ...state, jobs: updatedJobs, new_title: "" };
            case "DELETE":
                return {
                    ...state,
                    jobs: state.jobs.filter(job => job.id !== action.payload)
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(todoReducer, initial);
    const [editId, setEditId] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "SET_TITLE", payload: e.target.value });
    }

    const addOrEditTodo = () => {
        if (editId !== null) {
            dispatch({ type: "EDIT", payload: { id: editId, title: state.new_title } });
            setEditId(null);
        } else {
            const newTodo: Job = {
                id: Math.floor(Math.random() * 9999999),
                title: state.new_title,
                completed: false
            };
            dispatch({ type: "ADD", payload: newTodo });
        }
    }

    const startEdit = (job: Job) => {
        dispatch({ type: "SET_TITLE", payload: job.title });
        setEditId(job.id);
    }

    const deleteJob = (id: number) => {
        dispatch({ type: "DELETE", payload: id });
        if (editId === id) {
            setEditId(null);
            dispatch({ type: "SET_TITLE", payload: "" });
        }
    }

    return (
        <div>
            <input
                onChange={handleChange}
                type="text"
                value={state.new_title}
                placeholder="Nhập công việc"
            />
            <button onClick={addOrEditTodo}>
                {editId !== null ? "Cập nhật công việc" : "Thêm công việc"}
            </button>

            <h1>DANH SÁCH CÔNG VIỆC</h1>
            <ul>
                {state.jobs.map((job: Job) => (
                    <li key={job.id}>
                        {job.title}
                        <button onClick={() => deleteJob(job.id)}>Xóa</button>
                        <button onClick={() => startEdit(job)}>Sửa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
