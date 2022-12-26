import React from 'react'
import Navbar from './navbar/Navbar'
import './css/style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from './navbar/contacts'
import Models from './navbar/models'
import Photos from './navbar/photos'
import About from './navbar/about'
import Home from './navbar/home.js'

class App extends React.Component{
  render(){
    return(
    <Router>
        <Navbar />
        <Routes>
            <Route exact path ='/' element={<Home />}/>
            <Route exact path ='/about' element={<About/>}/>
            <Route exact path ='/photos' element={<Photos/>}/>
            <Route exact path ='/models' element={<Models/>}/>
            <Route exact path ='/contacts' element={<Contacts/>}/>
        </Routes>
    </Router>
    )
  }
}

export default App
