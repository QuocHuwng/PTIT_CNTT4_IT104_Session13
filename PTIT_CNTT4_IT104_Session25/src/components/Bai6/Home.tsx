import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
    return (
        <div>
            Trang quan ly
            <NavLink to="/home">home</NavLink>
            <NavLink to="/home/product">product</NavLink>
            <NavLink to="/home/deital">Detail</NavLink>
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
