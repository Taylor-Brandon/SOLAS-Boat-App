import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import boats from '../utils/data';
import Results from '../components/results';

import '../styles/home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (Array.isArray(boats)) {
      const results = boats.filter((boat) =>
        boat.ship?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(results);
      navigate('/results', { state: { searchResult: results } });
    } else {
      console.error('Data is not an array:', boats);
      setSearchResult([]);
    }
  };

  
  return (
    <div>
      <h1 className='header'>Search</h1>
      <form className='form' onSubmit={handleSearch}>
        <div className='form-floating'>
          <input
          className='form-control'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        <button className='btn btn-primary mx-auto' type="submit">Search</button>
        </div>
      </form>
      <Results searchResult={searchResult} />
  <Link className='logLink' to="/">Logout</Link>
  <Link className='profileLink' to="/profile">Profile</Link>


    </div>
  );
};

export default Home;
