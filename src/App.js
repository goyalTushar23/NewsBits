import './App.css';
// import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newshead from './components/Newshead';
// import { Router } from 'express';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        {/* <Newshead pageSize ={6} category = "general"></Newshead> */}
        <Routes>
            <Route exact path='/' element={<Newshead pageSize ={6} category = "general"></Newshead>} />
            <Route exact path='/general' element={<Newshead pageSize ={6} category = "general"></Newshead>} />
            <Route exact path='/entertainment' element={<Newshead pageSize ={6} category = "entertainment"></Newshead>} />
            <Route exact path='/sports' element={<Newshead pageSize ={6} category = "sports"></Newshead>} />
            <Route exact path='/science' element={<Newshead pageSize ={6} category = "science"></Newshead>} />
            <Route exact path='/technology' element={<Newshead pageSize ={6} category = "technology"></Newshead>} />
            <Route exact path='/health' element={<Newshead pageSize ={6} category = "health"></Newshead>} />
            <Route exact path='/business' element={<Newshead pageSize ={6} category = "business"></Newshead>} />
          </Routes>
        </Router>
      </div>
    )
  }
}
