import React from 'react';
import ArticleCard from './ArticleCard';

const FavoritesList = ({ favorites, addToFavorites, removeFromFavorites }) => {
  return (
    <div className="card">
      <div className="card-header">Favorites</div>
      <div className="card-body">
        {favorites.map((article) => (
          <ArticleCard
            key={article.url}
            article={{ ...article, isFavorite: true }}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;