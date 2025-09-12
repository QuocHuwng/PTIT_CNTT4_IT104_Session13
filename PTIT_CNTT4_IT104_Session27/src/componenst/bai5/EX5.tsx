import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogLayout from './BlogLayout'
import Posts from './Posts'
import PostDetail from './PostDetail'

export default function EX5() {
  return (
    <div>
          <Routes>
              <Route path="/blog" element={<BlogLayout />}>
                  <Route path="posts" element={<Posts />} />
                  <Route path="posts/:id" element={<PostDetail />} />
              </Route>
          </Routes>
    </div>
  )
}
