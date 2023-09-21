import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<AllPlayers/>}/>
        <Route path='/ players/:id element={<SinglePlayer/>}'/> */}
        <App/>
      {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
)
