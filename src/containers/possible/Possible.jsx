import React from 'react';
import possible from '../../assets/possible.png';
import './possible.css';

const Possible = () => {
  return (
    <div className='possible'>
      <div className='poss_img'>
        <img src={possible} alt='possible' />
      </div>
      <div className='poss_text'>
        <div className='early_access'><p>Request Early Access to Get Started</p></div>
        <div className='main gradient__text'><p>The possibilities are beyond your imagination</p></div>
        <div className='description'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p></div>
        <div className='cta'><p>Request Early Access to Get Started</p></div>
      </div>
    </div>
  )
}

export default Possible;
