import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList'

export default function EX4() {
  return (
    <div>
          <Routes>
              <Route path="/products" element={<ProductList />} />  
        </Routes>
    </div>
  )
}
