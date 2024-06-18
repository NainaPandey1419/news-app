import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article, addToFavorites, removeFromFavorites }) => {
  const handleFavoriteClick = () => {
    if (article.isFavorite) {
      removeFromFavorites(article);
    } else {
      addToFavorites(article);
    }
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={article.urlToImage} className="card-img" alt={article.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description}</p>
            <div className="d-flex justify-content-between">
              <Link to={`/article/${article.title}`} className="btn btn-primary">
                Read More
              </Link>
              <button
                onClick={handleFavoriteClick}
                className={`btn btn-${article.isFavorite ? 'danger' : 'success'}`}
              >
                {article.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;