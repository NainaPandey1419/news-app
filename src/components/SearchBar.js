import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../features/newsSlice';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchNews({ searchQuery })); // Dispatching action with searchQuery
    setSearchQuery(''); // Resetting searchQuery state after dispatch
  };

  return (
    <form onSubmit={handleSearch} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
