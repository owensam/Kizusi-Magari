import React, { useState } from 'react';

const AdvancedSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    budget: '',
    brand: '',
    model: '',
    minYOM: '',
    maxYOM: '',
    minPrice: '',
    maxPrice: '',
    currency: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearch(filters); // Send filters to parent or API
  };

  return (
    <div className="advanced-search">
      {/* Budget Filters */}
      <div className="budget-buttons">
        {['0-500K', '500K-1M', '1M-2M', '2M-3M', '3M-5M', '5M-10M', 'Above 10M'].map((range) => (
          <button key={range} onClick={() => setFilters({ ...filters, budget: range })}>
            {range}
          </button>
        ))}
      </div>

      {/* Brand and Model */}
      <input type="text" name="brand" placeholder="Vehicle Brand" onChange={handleChange} />
      <input type="text" name="model" placeholder="Brand Model" onChange={handleChange} />

      {/* Year of Manufacture */}
      <input type="text" name="minYOM" placeholder="Min YOM" onChange={handleChange} />
      <input type="text" name="maxYOM" placeholder="Max YOM" onChange={handleChange} />

      {/* Price and Currency */}
      <input type="text" name="minPrice" placeholder="Min Price" onChange={handleChange} />
      <input type="text" name="maxPrice" placeholder="Max Price" onChange={handleChange} />
      <select name="currency" onChange={handleChange}>
        <option value="">All Currencies</option>
        <option value="KES">KES</option>
        <option value="USD">USD</option>
      </select>

      {/* Vehicle Location */}
      <div className="location-buttons">
        {['Kenya', 'International', 'Both'].map((loc) => (
          <button key={loc} onClick={() => setFilters({ ...filters, location: loc })}>
            {loc}
          </button>
        ))}
      </div>

      {/* Search Button */}
      <button onClick={handleSearch}>Search Car</button>
    </div>
  );
};

export default AdvancedSearch;
