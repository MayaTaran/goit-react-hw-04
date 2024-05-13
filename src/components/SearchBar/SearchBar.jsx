import React, { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

    return (
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
          name="searchQuery"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
      
  };


export default SearchBar;
