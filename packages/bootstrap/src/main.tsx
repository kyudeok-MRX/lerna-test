import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { views } from '@toaonly-makina/ui'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {Object.values(views).map(({ path, element: Element }: any, i) => {
          return <Route path={path} element={<Element />} key={i} />
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
