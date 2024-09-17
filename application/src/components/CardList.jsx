import React from 'react';
import ArticleCard from './ArticleCard';
import './CardList.css';

function CardList({ items,type }) {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <ArticleCard key={index} item={item} type={type}/>
      ))}
    </div>
  );
}

export default CardList;
