// import { FaHeart, FaRegHeart } from "react-icons/fa"

// export default function ProductCard({
//   product,
//   onAdd,
//   onToggleWishlist,
//   isWishlisted,
// }) {
//   return (
//     <div className="product-card">
//       <div className="wishlist-btn" onClick={() => onToggleWishlist(product)}>
//         {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
//       </div>

//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>

//       <button onClick={() => onAdd(product.id)}>Add to Cart</button>
//     </div>
//   )
// }


import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa"
import "./ProductCard.css"

export default function ProductCard({
  product,
  onAdd,
  onToggleWishlist,
  isWishlisted,
}) {
  const {
    name,
    image,
    price,
    oldPrice,
    discount,
    rating = 4.8,
    reviews = 128,
    inStock = true,
    stockLeft = 5,
  } = product

  return (
    <div className="product-card">
      {/* IMAGE SECTION */}
      <div className="product-image">
        {discount && (
          <span className="badge-off">{discount}% OFF</span>
        )}

        {!inStock && (
          <span className="badge-stock">Out of Stock</span>
        )}

        <span
          className="wishlist-icon"
          onClick={() => onToggleWishlist(product)}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </span>

        <img src={image} alt={name} />
      </div>

      {/* INFO */}
      <div className="product-info">
        {/* RATING */}
        <div className="rating-pill">
          <FaStar />
          {rating}
          <span>({reviews})</span>
        </div>

        <h3 className="product-name">{name}</h3>

        <p className="product-meta">
          Size: Medium • Zero Power
        </p>

        {/* PRICE */}
        <div className="price-row">
          <span className="price">₹{price}</span>
          {oldPrice && (
            <span className="old-price">₹{oldPrice}</span>
          )}
          {discount && (
            <span className="discount-text">
              ({discount}% OFF)
            </span>
          )}
        </div>

        {/* STOCK */}
        {inStock ? (
          <p className={`stock ${stockLeft <= 2 ? "low" : ""}`}>
            {stockLeft <= 2
              ? `Only ${stockLeft} left`
              : "In stock"}
          </p>
        ) : (
          <p className="stock out">Out of stock</p>
        )}

        {/* BUTTON */}
        <button
          className={`add-btn ${!inStock ? "disabled" : ""}`}
          disabled={!inStock}
          onClick={() => onAdd(product.id)}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  )
}
