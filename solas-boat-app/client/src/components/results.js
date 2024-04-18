import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/result.css";

const Results = () => {
  const location = useLocation();
  const { state } = location;
  console.log("Received data in Results component:", state);
  const searchResult = state?.results || [];

  if (!searchResult || !Array.isArray(searchResult)) {
    return <div>No results found</div>;
  }

  return (
    <div>
      <h2 id="resultHeader">Search Results</h2>
      <ul>
        {searchResult.map((item) => (
          <li key={item._id}>
            <strong>{item.Ship}</strong>: {item.Model} - {item.HRN}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
