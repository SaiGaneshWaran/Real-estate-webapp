import { useState, useEffect } from "react";
import { listData } from "../../../lib/properties.js";
import "./listPage.scss";
import Filter from "../../../components/filter/Filter.jsx";
import Card from "../../../components/card/Card";
import Map from "../../../components/map/Map";

function ListPage() {
  const [filteredData, setFilteredData] = useState(listData);

  useEffect(() => {
    const savedProperties = JSON.parse(localStorage.getItem("favourites")) || [];
    setFilteredData((prev) =>
      prev.map((item) => ({
        ...item,
        isSaved: savedProperties.some((saved) => saved.id === item.id),
      }))
    );
  }, []);

  const handleFilterChange = (filters) => {
    const filtered = listData.filter((item) => {
      const matchesLocation =
        !filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesType =
        !filters.type ||
        (filters.type === "buy" && item.tenure === "Freehold") ||
        (filters.type === "rent" && item.tenure === "Leasehold");
      const matchesProperty =
        !filters.property || item.type.toLowerCase() === filters.property.toLowerCase();
      const matchesMinPrice =
        !filters.minPrice || item.price >= parseInt(filters.minPrice, 10);
      const matchesMaxPrice =
        !filters.maxPrice || item.price <= parseInt(filters.maxPrice, 10);
      const matchesBedrooms =
        !filters.bedrooms || item.bedrooms === parseInt(filters.bedrooms, 10);

      return (
        matchesLocation &&
        matchesType &&
        matchesProperty &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBedrooms
      );
    });

    setFilteredData(filtered);
  };

  const handleSave = (property) => {
    const savedProperties = JSON.parse(localStorage.getItem("favourites")) || [];
    const exists = savedProperties.some((item) => item.id === property.id);

    if (!exists) {
      savedProperties.push(property);
      localStorage.setItem("favourites", JSON.stringify(savedProperties));
    }
  };

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter onFilterChange={handleFilterChange} />
          {filteredData.map((item) => (
            <Card key={item.id} item={item} onSave={handleSave} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={filteredData} />
      </div>
    </div>
  );
}

export default ListPage;
