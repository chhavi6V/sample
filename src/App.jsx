import { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Hello from './Hello'
import Bye from './Bye'
import Home from './Home'

function App() {

  return (
    <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/hello" element={<Hello/>}/>
            <Route path="/bye" element={<Bye/>}/>
    </Routes>
  )
}

export default App
