import React from "react";
import ListCourse from "./components/PTIT_CNTT4_IT104_bai1/ListCourse";
import Calculation from "./components/PTIT_CNTT4_IT104_bai2/Calculation";
import UserInfo from "./components/PTIT_CNTT4_IT104_bai3/UserInfo";
import ColorBox from "./components/PTIT_CNTT4_IT104_bai4/ColorBox";
import FormatName from "./components/PTIT_CNTT4_IT104_bai5/FormatName";
import AdminIndex from "./components/PTIT_CNTT4_IT104_bai6/AdminIndex";
import UserLayout from "./components/PTIT_CNTT4_IT104_bai7/UserLayout";
import UserTable from "./components/PTIT_CNTT4_IT104_bai8/UserTable";
import TodoListIndex from "./components/PTIT_CNTT4_IT104_bai9/TodoListIndex";

const App: React.FC = () => {
  return (
    <div>
      <h2>Bài 1</h2>
      <ListCourse />

      <h2>Bài 2</h2>
      <Calculation />

      <h2>Bài 3</h2>
      <UserInfo />

      <h2>Bài 4</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <ColorBox color="red" />
          <p>red</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <ColorBox color="blue" />
          <p>blue</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <ColorBox color="green" />
          <p>green</p>
        </div>
      </div>

      <h2>Bài 5</h2>
      <FormatName />

      <h2>Bài 6 - Admin Layout</h2>
      <AdminIndex />

      <h2>Bài 7 - User Layout</h2>
      <UserLayout />

      <h2>Bài 8 - User Table</h2>
      <UserTable />

      <h2>Bài 9 - Employee Manager</h2>
      <TodoListIndex />

    </div>
  );
};

export default App;
