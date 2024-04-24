import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SHIPS } from "../utils/queries";
import ShipsList from "./ships";

const Search = () => {
    const { loading, error, data } = useQuery(QUERY_SHIPS);
    const [searchInput, setSearchInput] = useState('');
    const [filteredShips, setFilteredShips] = useState([]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const ships = data.ships;

    const handleChange = (event) => {
        setSearchInput(event.target.value);
        filterShips(event.target.value);
    };

    const filterShips = () => {
        const filteredShips = ships.filter((ship) => 
            ship.Ship.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredShips(filteredShips);
    };

    return (
        <div>
            <form className="form" role="search" onSubmit={(e) => e.preventDefault()}>
                <div className="form-control" type="search" placeholder="search" aria-label="search">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleChange}
                    />
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                </div>
            </form>
            <ShipsList />
            <ul>
                <h1>Result:</h1>
                {filteredShips.map((ship) => (
    <li key={ship.id}>{ship.Ship} - {ship.Model} - {ship.HRN}</li>
))}

            </ul>
        </div>
    )
};

export default Search;
