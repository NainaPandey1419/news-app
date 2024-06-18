import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/newsSlice";
import ArticleCard from "../components/ArticleCard";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import FavoritesList from "../components/FavoritesList";

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [favorites, setFavorites] = useState([]);

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchNews({})); 
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [dispatch]);

  const addToFavorites = (article) => {
    const updatedFavorites = [...favorites, article];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (article) => {
    const updatedFavorites = favorites.filter((fav) => fav.url !== article.url);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <SearchBar />
          <CategoryFilter />
          <div>
            {currentArticles.map((article) => (
              <ArticleCard
                key={article.url}
                article={article}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
          <FavoritesList
            favorites={favorites}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
