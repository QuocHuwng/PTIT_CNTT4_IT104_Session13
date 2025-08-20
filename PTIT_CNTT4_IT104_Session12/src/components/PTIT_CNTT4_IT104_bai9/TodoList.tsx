import React from "react";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
    return (
        <div className="tab-content">
            <div className="tab-pane fade show active">
                <ul className="list-group mb-0">
                    <TodoItem text="Cras justo odio" completed={true} />
                    <TodoItem text="Cras justo odio" completed={false} />
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
