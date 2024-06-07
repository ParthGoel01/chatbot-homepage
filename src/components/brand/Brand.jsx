import React from 'react';
import './brand.css';
import { google,atlassian,shopify,dropbox,slack } from './brands';

const Brand = () => {
  return (
    <div className='brand'>
      <img className='brand_img' src={google} alt='google'/>
      <img className='brand_img' src={slack} alt='slack'/>
      <img className='brand_img' src={atlassian} alt='atlassian'/>
      <img className='brand_img' src={dropbox} alt='dropbox'/>
      <img className='brand_img' src={shopify} alt='shopify'/>
    </div>
  )
}
export default Brand;