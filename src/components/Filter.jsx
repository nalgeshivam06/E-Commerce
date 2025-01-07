import React from "react";

const Filter = ({ search, setSearch, category, setCategory, sort, setSort }) => (
  <div className="flex gap-4 p-4">
    <input
      type="text"
      placeholder="Search by name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded px-4 py-2"
    />
    <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded px-4 py-2">
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewellery</option>
    </select>
    <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded px-4 py-2">
      <option value="">Sort</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
      <option value="rating">Rating: High to Low</option>
    </select>
  </div>
);

export default Filter;
