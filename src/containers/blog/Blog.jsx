import React from 'react';
import Article from '../../components/article/Article';
import { blog1 , blog2 , blog3 , blog4 , blog5 }  from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog_text gradient__text'>A lot is happening,<br/> We are blogging about it.</div>
      <div className='blog_ctr'>
        <div className='blog_ctr-1'>
          <Article imgUrl={ blog1 } date="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
        <div className='blog_ctr-2'>
          <Article imgUrl={ blog2 } date="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <Article imgUrl={ blog3 } date="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <Article imgUrl={ blog4 } date="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <Article imgUrl={ blog5 } date="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
      </div>
    </div>
  )
}

export default Blog