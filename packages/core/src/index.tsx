import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export * from 'styled-components'

export const main = (views: Record<string, { path: string, element: JSX.Element }>) => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {Object.values(views).map(({ path, element: Element }, i) => {
            // @ts-ignore
            return <Route path={path} element={<Element />} key={i} />
          })}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
