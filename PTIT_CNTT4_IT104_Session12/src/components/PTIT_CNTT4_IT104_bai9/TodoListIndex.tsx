import React from "react";
import TodoInput from "./TodoInput";
import TodoTabs from "./TodoTabs";
import TodoList from "./TodoList";

const TodoListIndex: React.FC = () => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: "40px" }}>
                  Quản lý công việc
                </h3>

                {/* Input thêm công việc */}
                <TodoInput />

                {/* Tabs */}
                <TodoTabs />

                {/* Danh sách công việc */}
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoListIndex;
