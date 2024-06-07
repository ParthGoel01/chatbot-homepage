import React from 'react';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
import './header.css';

const Header = () => {
  return (
      <div className='header'>
        <div className='header_content'>
          <h1 className='gradient__text'>Let's Build Something amazing with OpenAI</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          <div className='header_input'>
            <input type='email' placeholder='Your Email Address'></input>
            <button type='button'>Get Started</button>
          </div>
          <div className='header_people'>
            <img src={people} alt='people'/>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='header_img'>
          <img src={ai} alt='ai'/>
        </div>
      </div>
  )
}

export default Header;
