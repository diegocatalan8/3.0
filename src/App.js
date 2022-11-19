import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Start from './Start';
import Splash from './Splash';
import Landing from './Landing';
import { Link, Route } from "wouter";
import {useState, useEffect} from 'react'


function App() {


  return (
    <div  className="App">
    <Route path="/" component={Splash}/>
    <Route path="/Start" component={Landing}/>  
    <Route path="/Home" component={Home}/>

        
    </div>
  );
}

export default App;

/*

        */