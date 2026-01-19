import React from "react"
import "./FilterSidebar.css"

const FilterSidebar = ({ filters, setFilters }) => {
  const toggleCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(cat)
        ? prev.category.filter((c) => c !== cat)
        : [...prev.category, cat],
    }))
  }

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
        <button
          className="clear-btn"
          onClick={() =>
            setFilters({
              price: [1000, 30000],
              category: [],
              rating: null,
              inStock: false,
            })
          }
        >
          Clear all
        </button>
      </div>

      {/* PRICE */}
      <div className="filter-group">
        <p className="filter-title">Price</p>
        <p className="price-range">
          ₹{filters.price[0]} – ₹{filters.price[1]}
        </p>
        <input
          type="range"
          min="1000"
          max="30000"
          value={filters.price[1]}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              price: [1000, Number(e.target.value)],
            }))
          }
        />
      </div>

      {/* CATEGORY */}
      <div className="filter-group">
        <p className="filter-title">Category</p>
        {["Camera Lenses", "Tripods", "Drone Cameras"].map((cat) => (
          <label key={cat} className="filter-option">
            <input
              type="checkbox"
              checked={filters.category.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* RATING */}
      <div className="filter-group">
        <p className="filter-title">Rating</p>
        {[4, 3].map((r) => (
          <label key={r} className="filter-option">
            <input
              type="radio"
              checked={filters.rating === r}
              onChange={() =>
                setFilters((prev) => ({ ...prev, rating: r }))
              }
            />
            ⭐⭐⭐⭐{r === 3 && "⭐"} & up
          </label>
        ))}
      </div>

      {/* STOCK */}
      <label className="filter-option">
        <input
          type="checkbox"
          checked={filters.inStock}
          onChange={() =>
            setFilters((prev) => ({
              ...prev,
              inStock: !prev.inStock,
            }))
          }
        />
        Hide unavailable items
      </label>
    </aside>
  )
}

export default FilterSidebar
