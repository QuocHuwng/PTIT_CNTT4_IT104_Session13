import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
    return (
        <div>
            Trang quan ly
            <NavLink to="/admin/user">Quan ly nguoi dung</NavLink>
            <NavLink to="/admin/product">Quan ly san pham</NavLink>
            <NavLink to="/admin/bill">Quan ly hoa don</NavLink>
            <div className='header'>
                phan dau
            </div>
            <Outlet></Outlet>
            <div className='footer'>
                phan chan trang
              </div>
        </div>
    )
}
