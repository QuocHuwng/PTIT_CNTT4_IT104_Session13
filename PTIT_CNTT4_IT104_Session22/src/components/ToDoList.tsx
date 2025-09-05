import { Button, Input } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { v7 as uuid } from "uuid";

interface Task {
    id: number | string;
    name: string;
    isCompleted: boolean;
}

export default function TodoList() {
    const [task, setTask] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>(() => {
        const taskLocals = localStorage.getItem("tasks");
        return taskLocals ? JSON.parse(taskLocals) : [];
    });

    // State cho việc sửa
    const [editTaskId, setEditTaskId] = useState<string | number | null>(null);
    const [editName, setEditName] = useState<string>("");

    // Lấy giá trị trong input
    const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setError("Tên công việc không được để trống");
            return;
        } else {
            setError("");
            setTask(event.target.value);
        }
    };

    // Sự kiện submit form
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!task.trim()) {
            setError("Tên công việc không được để trống");
            return;
        }

        const newTask: Task = {
            id: uuid(),
            name: task,
            isCompleted: false,
        };

        const taskClones = [...tasks, newTask];
        setTasks(taskClones);
        localStorage.setItem("tasks", JSON.stringify(taskClones));
        setTask("");
    };

    // Hàm cập nhật trạng thái hoàn thành
    const handleChangeStatus = (id: number | string) => {
        const updateTasks = tasks.map((task: Task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });

        setTasks(updateTasks);
        localStorage.setItem("tasks", JSON.stringify(updateTasks));
    };

    // Hàm xóa công việc
    const handleDeleteTask = (id: number | string) => {
        const updateTasks = tasks.filter((task: Task) => task.id !== id);
        setTasks(updateTasks);
        localStorage.setItem("tasks", JSON.stringify(updateTasks));
    };

    // Hàm bắt đầu sửa
    const handleEditTask = (task: Task) => {
        setEditTaskId(task.id);
        setEditName(task.name);
    };

    // Hàm lưu sau khi sửa
    const handleSaveTask = (id: number | string) => {
        if (!editName.trim()) return;
        const updateTasks = tasks.map((task: Task) =>
            task.id === id ? { ...task, name: editName } : task
        );
        setTasks(updateTasks);
        localStorage.setItem("tasks", JSON.stringify(updateTasks));
        setEditTaskId(null);
        setEditName("");
    };

    const completedCount = tasks.filter((task) => task.isCompleted).length;

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-[1000px] border border-[#dadada] p-6 rounded-lg shadow-sm">
                <h3 className="text-center text-[24px] font-semibold mb-6">
                    Danh sách công việc
                </h3>

                {/* Form thêm công việc */}
                <form onSubmit={handleSubmit} className="flex gap-5 mb-3">
                    <Input
                        value={task}
                        onChange={handleChangeTask}
                        placeholder="Nhập tên công việc"
                    />
                    <Button htmlType="submit" type="primary">
                        Thêm
                    </Button>
                </form>

                {error && (
                    <p className="mb-6 text-red-600 text-[14px]">{error}</p>
                )}

                {/* Danh sách công việc */}
                <ul className="mb-6 space-y-3">
                    {tasks.map((task: Task) => (
                        <li
                            key={task.id}
                            className="flex justify-between items-center"
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    onChange={() => handleChangeStatus(task.id)}
                                    type="checkbox"
                                    checked={task.isCompleted}
                                />

                                {editTaskId === task.id ? (
                                    <Input
                                        value={editName}
                                        onChange={(e) =>
                                            setEditName(e.target.value)
                                        }
                                        onPressEnter={() =>
                                            handleSaveTask(task.id)
                                        }
                                        onBlur={() => handleSaveTask(task.id)}
                                        size="small"
                                        className="w-[250px]"
                                    />
                                ) : task.isCompleted ? (
                                    <s>{task.name}</s>
                                ) : (
                                    <span>{task.name}</span>
                                )}
                            </div>

                            <div className="flex items-center gap-3">
                                <Pencil
                                    size={18}
                                    className="text-orange-400 hover:text-orange-600 cursor-pointer"
                                    onClick={() => handleEditTask(task)}
                                />
                                <Trash2
                                    size={18}
                                    className="text-red-400 hover:text-red-600 cursor-pointer"
                                    onClick={() => handleDeleteTask(task.id)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Thống kê */}
                <div>
                    <span>Công việc đã hoàn thành: </span>
                    <span>{completedCount}</span> / <span>{tasks.length}</span>
                </div>
            </div>
        </div>
    );
}
