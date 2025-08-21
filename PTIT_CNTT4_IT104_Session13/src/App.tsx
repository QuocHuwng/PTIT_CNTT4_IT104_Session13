import React from 'react';
import Exercises01 from './components/PTIT_CNTT4_IT104_Session13_bai1/Exercises01';
import Exercises02 from './components/PTIT_CNTT4_IT104_Session13_bai2/Exercises02';
import Exercise03 from './components/PTIT_CNTT4_IT104_Session13_bai3/Exercise03';
import ParentComponent from './components/PTIT_CNTT4_IT104_Session13_bai5/ParentComponent';
import ListPost from './components/PTIT_CNTT4_IT104_Session13_bai6/ListPost';
import AppStateManager from './components/PTIT_CNTT4_IT104_Session13_bai7/AppStateManager';
import Todolist from './components/PTIT_CNTT4_IT104_Session13_bai8/Todolist';
import UpdateState from './components/PTIT_CNTT4_IT104_Session13_bai9/UpdateState';
import Input from './components/PTIT_CNTT4_IT104_Session13_bai10/Input';
import Parent_Comp from './components/PTIT_CNTT4_IT104_Session13_bai4/Parent_Comp';
function App() {
  return (
    <div>
      <h2>Bai 1</h2>
      <Exercises01 />

      <h2>Bai 2</h2>
      <Exercises02 />

      <h3>Bai 3</h3>
      <Exercise03 />

      <h2>Bai 4</h2>
      <Parent_Comp/>
      <h2>Bai 5</h2>
      <ParentComponent />

      <h2>Bai 6</h2>
      <ListPost />

      <h2>Bai 7</h2>
      <AppStateManager />

      <h2>Bai 8</h2>
      <Todolist />

      <h2>Bai 9</h2>
      <UpdateState />

      <h2>Bai 10</h2>
      <Input />
    </div>
  );
}

export default App;