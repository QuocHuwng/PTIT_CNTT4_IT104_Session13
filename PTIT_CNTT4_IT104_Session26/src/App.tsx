import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
