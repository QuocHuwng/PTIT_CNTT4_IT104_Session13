import React from 'react';
import EmailFormInputText from './components/PTIT_CNTT4_IT104_Session14_bai1/EmailFormInputText';
import ColorFormInput from './components/PTIT_CNTT4_IT104_Session14_bai2/ColorFormInput';
import DateFormInput from './components/PTIT_CNTT4_IT104_Session14_bai3/DateFormInput';
import RangeFormInput from './components/PTIT_CNTT4_IT104_Session14_bai4/RangeFormInput';
import StudentTable from './components/PTIT_CNTT4_IT104_Session14_bai5/StudentTable';
import ListPost from './components/PTIT_CNTT4_IT104_Session14_bai6/ListPost';
import Clock from './components/PTIT_CNTT4_IT104_Session14_bai7/Clock';
import Counter from './components/PTIT_CNTT4_IT104_Session14_bai8/Counter';
import TodoApp from './components/PTIT_CNTT4_IT104_Session14_bai9/TodoApp';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Bài 1: Nhập Email</h2>
      <EmailFormInputText />

      <h2>Bài 2: Chọn Màu</h2>
      <ColorFormInput />

      <h2>Bài 3: Nhập Ngày Sinh</h2>
      <DateFormInput />

      <h2>Bài 4: Tiến độ hoàn thành</h2>
      <RangeFormInput />

      <h2>Bài 5: Ứng dụng quản lý sinh viên</h2>
      <StudentTable />

      <h2>Bài 6: Quản lý danh sách bài viết</h2>
      <ListPost />

      <h2>Bài 7: Hiển thị thời gian thực</h2>
      <Clock />

      <h2>Bài 8: Ứng dụng đếm số tự động</h2>
      <Counter />

      <h2>Bài 9: Ứng dụng Todolist</h2>
      <TodoApp />
    </div>
  );
}

export default App;
