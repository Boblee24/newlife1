import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../newlife/logo.jpg'

const Header = (props) => {
  return (
    <nav>
      <div className='book'>
        <img className='logo' src={logo} alt="logo" />
        <input type="checkbox" class="toggle" checked={props.toggle} onClick={props.toggleNavigation} />
          <div class="toggle">
              <span class="common top_line"></span>
              <span class="common middle_line"></span>
              <span class="common bottom_line"></span>
          </div>
      </div>
      <div className={`${props.toggle ? "navigation super" : "navigation"}`} >
        <img className='logo' src={logo} alt="logo" />
        <ul>
          <li><HashLink className='link' to="/">Home</HashLink></li>
          <li><HashLink className='link' to="#serviceinfo">Service Info</HashLink></li>
          <li><HashLink className='link' to="#about">About Us</HashLink></li>
          <li><HashLink className='link' to="#ministries">Ministries</HashLink></li>
          <li><HashLink className='link' to="#event">Events</HashLink></li>
          <li><HashLink className='link' to="#contact">Contact</HashLink></li>
        </ul>
      </div>
    <div className='maintitle'>
      <div className='greet'>Welcome to</div>
      <div className='title'>Newlife <br/>Christian Center.</div>
      <p className='verse'>"Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." - <span>Proverbs 3:5-6</span> </p>
    </div>
    </nav>
  );
};

export default Header;
