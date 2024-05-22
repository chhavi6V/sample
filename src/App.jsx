import { useEffect } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Hello from './Hello'
import Bye from './Bye'
import Home from './Home'
import ReactGA from "react-ga4";

function App() {
  useEffect(()=>{
    ReactGA.initialize("G-7VF9PVX1X4");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Custom Title" });
  })
  return (
    <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/hello" element={<Hello/>}/>
            <Route path="/bye" element={<Bye/>}/>
    </Routes>
  )
}

export default App
