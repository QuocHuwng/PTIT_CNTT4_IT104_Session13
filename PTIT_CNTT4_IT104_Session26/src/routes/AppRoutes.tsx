import { Routes, Route } from 'react-router-dom';
import ProductDetail from '../componenst/bai1/ProductDetail';
import Student from '../componenst/bai2/Student';
import Students from '../componenst/bai3/Students';
import Login from '../componenst/bai5/Login';
import PrivateRouter from '../componenst/bai5/PrivateRouter';
import Account from '../componenst/bai5/Account';
import Login1 from '../componenst/bai6/Login1';
import Teams from '../componenst/bai7/Teams';
import TeamsIndex from '../componenst/bai7/TeamsIndex';
import Team from '../componenst/bai7/Team';


export default function AppRoutes() {
  return (
      <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/student/:name" element={<Student />} />
          <Route path="/student" element={<Students />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRouter />}>
              <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/login1" element={<Login1 />} />
          <Route path="/teams" element={<Teams />}>
              <Route index element={<TeamsIndex />} />
              <Route path=":teamId" element={<Team />} />
          </Route>
      </Routes>
  )
}
  