import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Bottom from './components/Bottom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Welcome from './components/Welcome'
import Card from './Cards/Cards'

class App extends Component {
  render(){
  return (
    <div className="page-container">
     <Greet/>
     <Home/>
      <About/>
      <Services/>
      <Card/>

      <div className="content-wrap"> 
      </div>
      <Bottom/>
    
      
    </div>
  );
  }
}

export default App;
