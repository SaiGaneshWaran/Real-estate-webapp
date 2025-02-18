import PropTypes from "prop-types";
import { useState } from "react";
import "./filter.scss";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    property: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="filter">
      <h1>Search results for <b>Properties</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City Location"
            value={filters.location}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" value={filters.type} onChange={handleChange}>
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" value={filters.property} onChange={handleChange}>
            <option value="">any</option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
            <option value="Bungalow">Bungalow</option>
            <option value="Studio">Studio</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="0"
            value={filters.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="0"
            value={filters.maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="bedrooms">Bedroom</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            placeholder="any"
            value={filters.bedrooms}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired, 
};

export default Filter;
