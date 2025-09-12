import { BrowserRouter } from 'react-router-dom';
import Navbar from './componenst/bai1/NavLink';
import Ex1 from './componenst/bai1/EX1';
import Ex2 from './componenst/bai2/EX2';
import Ex3 from './componenst/bai3/EX3';
import Ex4 from './componenst/bai4/EX4';
import EX5 from './componenst/bai5/EX5';
import EX6 from './componenst/bai6/EX6';
import EX7 from './componenst/bai7/EX7';
import EX8 from './componenst/bai8/EX8';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Ex1></Ex1>
      <Ex2></Ex2>
      <Ex3></Ex3>
      <Ex4></Ex4>
      <EX5></EX5>
      <EX6></EX6>
      <EX7></EX7>
      <EX8></EX8>
    </BrowserRouter>
  );
}

export default App;