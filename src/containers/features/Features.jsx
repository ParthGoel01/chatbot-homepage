import React from 'react';
import './features.css';
import { Feature } from '../../components';

const Features = () => {
  return (
    <div className='ftr' id='features'>
      <div className='ftr_heading'>
        <div className='ftr_heading-1 gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</div>
        <div className='ftr_heading-2'>Request Early Access to Get Started</div>
      </div>
      <div className='ftr_ctr'>
          <div className='ftr_head'>
                <div className='ftr_head_pt'>
                  <Feature/>
                  <h4>Lorem ipsum dolor sit amet consectetur</h4>
                </div>
                <div className='ftr_head_pt'>
                  <Feature/>
                  <h4>Lorem ipsum dolor sit amet consectetur</h4>
                </div>
                <div className='ftr_head_pt'>
                  <Feature/>
                  <h4>Lorem ipsum dolor sit amet consectetur</h4>
                </div>
                <div className='ftr_head_pt'>
                  <Feature/>
                  <h4>Lorem ipsum dolor sit amet consectetur</h4>
                </div>
          </div>
          <div className='ftr_content'>
                <div className='ftr_content_pt'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.</p>
                </div>
                <div className='ftr_content_pt'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.</p>
                </div>
                <div className='ftr_content_pt'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.</p>
                </div>
                <div className='ftr_content_pt'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.</p>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Features
