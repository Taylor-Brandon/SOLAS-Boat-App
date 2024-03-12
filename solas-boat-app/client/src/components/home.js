import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import boats from '../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


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
      <h2 className='header'>Search</h2>
      <form className='form p-2' onSubmit={handleSearch}>
        <div className='form-floating'>
          <input
            className='form-control'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button id='search' className='btn btn-warning mx-auto' type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
      <Link className='logLink' to="/">
      <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
      </Link>
      <Link className='profileLink' to="/profile">
      <FontAwesomeIcon icon={faUser} size="2x" />
      </Link>
    </div>
  );
};

export default Home;
