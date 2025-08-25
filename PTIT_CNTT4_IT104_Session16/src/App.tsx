import React from 'react';
import SubjectList from './components/PTIT_CNTT4_IT104_Session16_bai1/SubjectList';
import LoginStatus from './components/PTIT_CNTT4_IT104_Session16_bai2/LoginStatus';
import Button from './components/PTIT_CNTT4_IT104_Session16_bai3/Button';
import Click from './components/PTIT_CNTT4_IT104_Session16_bai4/Click';
import User from './components/PTIT_CNTT4_IT104_Session16_bai5/UserForm';
import ThemeSwitcher from './components/PTIT_CNTT4_IT104_Session16_bai6/ThemeSwitcher';
import ShoppingCart from './components/PTIT_CNTT4_IT104_Session16_bai7/ShoppingCart';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Bài 1: </h2>
      <SubjectList />

      <h2>Bài 2: </h2>
      <LoginStatus />

      <h2>Bài 3: </h2>
      <Button></Button>

      <h2>Bài 4:</h2>
      <Click></Click>

      <h2>Bài 5</h2>
      <User></User>

      <h2>Bài 6</h2>
      <ThemeSwitcher></ThemeSwitcher>

      <h2>Bài 7</h2>
      <ShoppingCart />
    </div>
  );
}

export default App;