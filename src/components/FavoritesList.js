import React from 'react';
import ArticleCard from './ArticleCard';

const FavoritesList = ({ favorites, addToFavorites, removeFromFavorites }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.map((article) => (
        <ArticleCard
          key={article.url}
          article={{ ...article, isFavorite: true }}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      ))}
    </div>
  );
};

export default FavoritesList;