import { createRoot } from 'react-dom/client'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'

const router = createBrowserRouter([
  {path: '/test', element: <App />},
  {path: '/test2', element: <App2 />},
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
