import React from 'react'
import './App.css';
import {Blog , Features, Footer,Header,What,Possible} from './containers';
import {CTA,Navbar,Brand} from './components';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <What />
        <div className='gradient__bg'>
          <Features />
          <Possible />
          <CTA />
          <Blog />
        </div>
        <Footer />
    </div>
  )
}

export default App