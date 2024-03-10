import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/main.sass'

import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import TechPages from './components/TechPages.jsx'
// import Page2 from './components/Page2.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/tech',
    element: <TechPages/>,
  },
  // {
  //   path: '/portfolio-guilherme/page2',
  //   element: <Page2/>,
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
