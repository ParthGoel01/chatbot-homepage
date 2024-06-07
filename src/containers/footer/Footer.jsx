import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_heading gradient__text'>Do you want to step in to the future before others?</div>
      <div className='footer_button'><button type='button'>Request Early Access</button></div>
      <div className='menu'>
        <div className='menu_1'>
          <div className='menu_1_head'>
            <p>CHATBOT</p>
          </div>
          <div className='menu_1_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className='menu_2_ctr'>
          <div className='menu_2'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
          </div>
          <div className='menu_2'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='menu_2'>
            <h4>Get in touch</h4>
            <p>Lorem Ipsum</p>
            <p>(123) 456-7890</p>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
      <div className='footer_end'>© 2024 ChatBot. All rights reserved.</div>
    </div>
  )
}

export default Footer