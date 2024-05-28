import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SHIPS } from "../../utils/queries";
import "../../styles/search.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const { loading, error, data } = useQuery(QUERY_SHIPS);
  const [filteredShips, setFilteredShips] = useState([]);

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    setSearchInput(searchQuery);
    filterShips(searchQuery);
  };

  const filterShips = (searchQuery) => {
    if (!searchQuery) {
      setFilteredShips([]);
      return;
    }

    const filteredShips = data.ships.filter((ship) =>
      ship.Ship.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ship.Model.toLowerCase().includes(searchQuery.toLowerCase())||
      ship.HRN.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ship.HIN.toLowerCase().includes(searchQuery.toLowerCase())||
      ship.annualInspectionDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ship.fiveYearInspectionDate.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredShips(filteredShips);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section>
      <form className="form w-50" onSubmit={handleFormSubmit}>
        <div className="form-control p-3 mb-2">
          <input
            className='p-2 w-100 border border-white'
            type="text"
            value={searchInput}
            onChange={handleChange}
            placeholder="Enter ship name or model"
          />
        </div>
      </form>
      <button className="btn btn-outline-warning" type="submit">Search</button>
      <section>
        <h2 className="bs-info-text-emphasis"></h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {filteredShips.length === 0 ? (
          <p>No results found</p>
        ) : (
          <ul>
            {filteredShips.map((ship) => (
              <li key={ship._id}>
                {ship.Ship} - {ship.Model}
                <Link to={`/ship/${ship._id}`}>View Details</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

export default Search;

