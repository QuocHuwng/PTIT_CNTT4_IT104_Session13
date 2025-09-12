import { Link } from "react-router-dom";
import { tasks } from "./Task";

export default function TaskList() {
    return (
        <div>
            <h1>Danh sách công việc</h1>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
                </div>
            ))}
        </div>
    );
}
