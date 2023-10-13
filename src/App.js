// import {Routes, Route } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Ministries from './components/Ministries';
import Serviceinfo from './components/Serviceinfo';
import Contact from './components/Contact';
import Event from './components/event';
import './style.css'
import './style2.css'
import React from 'react';


function App() {
  const [toggle, setToggle] = React.useState(false)
  const toggleNavigatio = () => {
    setToggle(!toggle) 
  }
  return (
    <div className='App'>
      <Header toggle ={toggle} toggleNavigation = {toggleNavigatio} />
      <main>
        <Serviceinfo/>
        <About/>
        <Ministries/>
        <Event/>
        <Contact/>
      </main>

    </div>
  );
}

export default App;
