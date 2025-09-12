import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

export default function Ex2() {
  return (
    <div>
          <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
    </div>
  )
}
