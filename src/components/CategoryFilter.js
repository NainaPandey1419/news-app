import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../features/newsSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(fetchNews({ category }));
  };

  return (
    <div className="btn-group mb-3" role="group" aria-label="Category Filter">
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => handleCategoryChange(null)}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => handleCategoryChange('business')}
      >
        Business
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => handleCategoryChange('technology')}
      >
        Technology
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => handleCategoryChange('entertainment')}
      >
        Entertainment
      </button>
    </div>
  );
};

export default CategoryFilter;