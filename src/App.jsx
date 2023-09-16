// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./HOME/home"
// import Navigation from "./COMPONENTS/components"
import './App.css'

function App() {

  return (
    <>
      <Router>
          {/* <Navigation></Navigation> */}
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes> 
      </Router>      
    </>
  )
}

export default App
