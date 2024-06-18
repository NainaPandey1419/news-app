import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../features/newsSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(fetchNews({ category }));
  };

  return (
    <div className="category-filter">
      <button onClick={() => handleCategoryChange(null)}>All</button>
      <button onClick={() => handleCategoryChange('business')}>Business</button>
      <button onClick={() => handleCategoryChange('technology')}>Technology</button>
      <button onClick={() => handleCategoryChange('entertainment')}>Entertainment</button>
    </div>
  );
};

export default CategoryFilter;