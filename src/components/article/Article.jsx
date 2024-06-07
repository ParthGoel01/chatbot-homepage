import React from 'react';
import './article.css';

const Article = ({imgUrl,date,text}) => {
  return (
    <div className='article'>
      <div className='article__img'>
        <img src={imgUrl} alt='article' />
      </div>
      <div className='article__content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article