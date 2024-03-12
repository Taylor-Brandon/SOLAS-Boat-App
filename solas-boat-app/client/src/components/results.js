import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/result.css";

const Results = () => {
  const location = useLocation();
  const { state } = location;
  const searchResult = state?.searchResult || [];

  if (!searchResult || !Array.isArray(searchResult)) {
    return <div>No results found</div>;
  }

  console.log("Rendering search results:", searchResult);

  return (
    <div>
      <h2 id="resultHeader">Search Results</h2>
      <ul>
        {searchResult.map((item) => (
          <li key={item.hrn}>
            <strong>{item.ship}</strong>: {item.model} - {item.hrn}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
