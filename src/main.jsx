import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Index , About, Resume, Projects, Contact} from './components/index.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index/>} >
      <Route path='/' element={<About />} index />
      <Route path='resume' element={<Resume />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
