import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#what'>What is ChatBot?</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#possibility'>Open AI</a></p>
      <p><a href='#blog'>Library</a></p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar' id='home'>
      <div className='nav_links'>
        <div className='nav_logo'>
          <p>CHATBOT</p>
        </div>
        <div className='nav_menu'>
          <Menu />
        </div>
      </div>
      <div className='nav_sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='nav_toggle'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu &&
          <div className='nav_dropdown scale-up-center'>
            <div className='nav_dropdown_menu'>
              <Menu />
              <div className='nav_dropdown_sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default Navbar;
