import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// pages 
import Home from './pages/home';
import { Login } from './pages/login';
import { AddTask } from './pages/addTask';





function App() {

  return (
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addtask" element={<AddTask />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
