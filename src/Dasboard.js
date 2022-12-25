import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'
import User from './User'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Student from './Student'
import Viewusers from './Viewusers'
import Adduser from './Adduser'
import { Facultys } from './Facultys'
function Dasboard() {
  return (
    <div id='page-top'>
    <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <Toolbar></Toolbar>
          <div className='container-fluid'>
          <Routes>
      <Route path="/user" element={<User/>}></Route>
      <Route path="/student" element={<Student/>}></Route>
      <Route path="/viewusers/:name" element={<Viewusers/>}></Route>
      <Route path="/add-user" element={<Adduser/>}></Route>
      <Route path="/faculty" element={<Facultys/>}></Route>
    </Routes>
          </div>
          </div>
          
        </div>
        <Footer></Footer>
    </div>
    
  )
}

export default Dasboard