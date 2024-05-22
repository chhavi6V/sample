import React , {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import ReactGA from "react-ga4";

useEffect(()=>{
  ReactGA.initialize("G-KF9V9PEKQF");

  ReactGA.preview(window.location.pathname + window.location.search)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
)
