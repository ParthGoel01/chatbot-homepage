import React from 'react';
import './what.css';
import { Feature } from '../../components';

const What = () => {
  return (
    <div className='what_content' id='what'>
      <div className='what'>
        <div><Feature />
        <h4>What is ChatBot</h4></div>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
      </div>
      <div className='what_poss'>
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
        <p>Explore The Library</p>
      </div>
      <div className='what_types'>
        <div>
          <Feature />
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div>
          <Feature />
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div>
          <Feature />
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  )
}

export default What;
