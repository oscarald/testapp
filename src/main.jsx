import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import App from './App'
import ProblemOne from './components/ProblemOne';
import ProblemTwo from './components/ProblemTwo';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<ProblemOne/>} />
        <Route path="problemtwo" element={<ProblemTwo/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
