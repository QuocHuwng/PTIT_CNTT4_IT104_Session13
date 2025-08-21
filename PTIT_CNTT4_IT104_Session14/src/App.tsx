import React from 'react';
import Exersice01 from './components/PTIT_CNTT4_IT104_Session14_bai1/Exersice01';
import ProductForm from './components/PTIT_CNTT4_IT104_Session14_bai5/ProductForm';
import GenderForm from './components/PTIT_CNTT4_IT104_Session14_bai6/GenderForm';
import RegisterForm from './components/PTIT_CNTT4_IT104_Session14_bai7/RegisterForm';
import LoginForm from './components/PTIT_CNTT4_IT104_Session14_bai8/LoginForm';
import TodoApp from './components/PTIT_CNTT4_IT104_Session14_bai9&10/TodoApp';
function App() {
  return (
    <div>
      <h2>Bai 1</h2>
      <Exersice01></Exersice01>

      <h2>Bai 5</h2>
      <ProductForm></ProductForm>

      <h2>Bai 6</h2>
      <GenderForm></GenderForm>

      <h2>Bai 7</h2>
      <RegisterForm></RegisterForm>
      
      <h2>Bai 8</h2>
      <LoginForm />
      
      <h2>Bai 9 va Bai 10</h2>
      <TodoApp/>
    </div>
  );
}

export default App;