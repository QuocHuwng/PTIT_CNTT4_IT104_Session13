import React, { useReducer } from "react";

type Job = {
    id: number;
    title: string;
    completed: boolean;
};

type State = {
    jobs: Job[];
    new_title: string;
};

type Action =
    | { type: "ADD" }
    | { type: "DELETE"; payload: number }
    | { type: "SET_TITLE"; payload: string };

export default function Todos() {
    const initial: State = {
        jobs: [
            { id: 1, title: "học C++", completed: true },
            { id: 2, title: "python", completed: false },
        ],
        new_title: "",
    };

    const todoReducer = (state: State, action: Action): State => {
        switch (action.type) {
            case "SET_TITLE":
                return { ...state, new_title: action.payload };
            case "ADD":
                if (state.new_title.trim() === "") return state;
                const newTodo: Job = {
                    id: Math.floor(Math.random() * 9999999),
                    title: state.new_title,
                    completed: false,
                };
                return { ...state, jobs: [...state.jobs, newTodo], new_title: "" };
            case "DELETE":
                return {
                    ...state,
                    jobs: state.jobs.filter((item) => item.id !== action.payload),
                };
            default:
                return state;
        }
    };

    const [todos, dispatch] = useReducer(todoReducer, initial);

    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa công việc này?");
        if (confirmDelete) {
            dispatch({ type: "DELETE", payload: id });
        }
    };

    return (
        <div>
            <input
                type="text"
                value={todos.new_title}
                onChange={(e) =>
                    dispatch({ type: "SET_TITLE", payload: e.target.value })
                }
            />
            <button onClick={() => dispatch({ type: "ADD" })}>
                Thêm công việc
            </button>

            <h1>DANH SÁCH CÔNG VIỆC</h1>
            <ul>
                {todos.jobs.map((item) => (
                    <li key={item.id}>
                        {item.title}{" "}
                        <button onClick={() => handleDelete(item.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
