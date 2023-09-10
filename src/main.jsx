import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import AboutTheProject from './pages/AboutTheProject/AboutTheProject.jsx'
import AboutMe from './pages/AboutMe/AboutMe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     
    <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="/project" element={<AboutTheProject />} />
          <Route path="/about" element={<AboutMe />} />
        </Route>

    </Routes>
    
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  
)
