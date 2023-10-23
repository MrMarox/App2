import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './pages/Landing'
import "./assets/styles/global.scss";
import "./assets/styles/reset.scss";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
)
