// import React, { Children } from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Notfound from './pages/Notfound'
// import Admin from './layout/Admin'
// import UserManger from './pages/UserManger'
// import Product from './pages/Product'
// import Bill from './pages/Bill'
// import './App.css'
// import Login from './pages/Login'

// export default function App() {
//   const routers = createBrowserRouter([
//     {
//       path: "/about",
//       element:<About></About>
//     },


//     {
//       path: "/contact",
//       element: <Contact></Contact>
//     },
    
//     {
//       path: "login",
//       element: <Login></Login>
//     },

//     {
//       path: "*",
//       element: <Notfound></Notfound>
//     },

//     {
//       path: "/admin",
//       element: <Admin></Admin>,
//       children: [
//         {
//           path: "user",
//           element: <UserManger></UserManger>
//         },

//         {
//           path: "product",
//           element: <Product></Product>
//         },

//         {
//           path: "bill",
//           element: <Bill></Bill>
//         },
//       ]
//     },
    
//   ])

//   return (
//     <div>
//       <RouterProvider router={routers}></RouterProvider>
//     </div>
//   )
// }



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Bai1/Home';
import About from './components/Bai1/About';
import Contact from './components/Bai1/Contact';
import Login from './components/Bai3/Login';
import Register from './components/Bai4/Register';
import Notfound from './components/Bai5/Notfound';
import Product from './components/Bai6/Product';
import Detail from './components/Bai6/Detail';
import CustomLink from './components/bai7/CustomLink';
import HomePage from './components/bai7/HomePage';
import NotFoundCustom from './components/bai7/NotFound';
import ListUser from './components/bai8/ListUser';
import UserDetail from './components/bai8/UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home/product" element={<Product />} />
        <Route path="/home/detail" element={<Detail />} />

        <Route path="/custom-link" element={<CustomLink />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/not-found" element={<NotFoundCustom />} />

        <Route path="*" element={<Notfound />} />

        <Route path="/users" element={<ListUser />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
