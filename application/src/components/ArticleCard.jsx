import React from 'react';
import './ArticleCard.css'; 
function ArticleCard({ item, type }) {
  return (
    <div className="card">
      <img src={item.image} alt={`${type} thumbnail`} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>⭐ {item.rating} | {item.author}</p>
    </div>
  );
}

export default ArticleCard;