import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import boats from '../utils/data';
import Results from '../components/results';

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
      <h1>Home Page</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <Results searchResult={searchResult} />
    </div>
  );
};

export default Home;
