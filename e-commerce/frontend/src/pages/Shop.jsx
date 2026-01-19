import { useState } from "react"
import FilterSidebar from "../components/FilterSidebar"
import ProductList from "../components/ProductList"
import "./Shop.css"

export default function Shop({ products, onAdd, wishlist, onToggleWishlist }) {
  const [filters, setFilters] = useState({
    price: [1000, 30000],
    category: [],
    rating: null,
    inStock: false,
  })

  const filteredProducts = products.filter((p) => {
    if (p.price < filters.price[0] || p.price > filters.price[1]) return false
    if (filters.category.length && !filters.category.includes(p.category))
      return false
    if (filters.rating && p.rating < filters.rating) return false
    if (filters.inStock && !p.inStock) return false
    return true
  })

  return (
    <div className="shop-layout">
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <div className="product-area">
        <ProductList
          products={filteredProducts}
          onAdd={onAdd}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
        />
      </div>
    </div>
  )
}
