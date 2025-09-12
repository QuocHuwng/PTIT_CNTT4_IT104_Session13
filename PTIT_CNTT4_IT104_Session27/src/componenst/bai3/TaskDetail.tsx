import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "./Task";

export default function TaskDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = tasks.find((t) => t.id === Number(id));

    if (!task) return <div>Không tìm thấy công việc</div>;

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => navigate(-1)}>Quay lại</button>
        </div>
    );
}
