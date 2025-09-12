import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskDetail from './TaskDetail'
import TaskList from './TaskList'

export default function EX3() {
  return (
    <div>
          <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/task/:id" element={<TaskDetail />} />
          </Routes>
    </div>
  )
}
