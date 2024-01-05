import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/main.sass'

import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider
} from 'react-router-dom'

import TechPages from './components/TechPages.jsx'
import Page2 from './components/Page2.jsx'

const router = createBrowserRouter([
  {
    path: '/portfolio-guilherme',
    element: <App/>,
  },
  {
    path: '/portfolio-guilherme/#/tech',
    element: <TechPages/>,
  },
  {
    path: '/portfolio-guilherme/page2',
    element: <Page2/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
