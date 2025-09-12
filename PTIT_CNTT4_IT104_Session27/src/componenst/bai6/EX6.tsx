import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Detail from './Detail'

export default function EX6() {
  return (
    <div>
          <Routes>
              <Route path="/home/product" element={<Product />} />
              <Route path="/home/detail" element={<Detail />} />
      </Routes>
    </div>
  )
}
