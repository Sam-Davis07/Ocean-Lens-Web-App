import ProductCard from "./ProductCard"

export default function ProductList({
  products,
  onAdd,
  wishlist,
  onToggleWishlist,
}) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
          onToggleWishlist={onToggleWishlist}
          isWishlisted={wishlist.some((p) => p.id === product.id)}
        />
      ))}
    </div>
  )
}
