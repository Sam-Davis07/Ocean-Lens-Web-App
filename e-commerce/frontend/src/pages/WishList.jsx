import { FaTrash, FaShoppingCart } from "react-icons/fa"
import "./Wishlist.css"

export default function Wishlist({
  wishlist = [],
  onRemoveFromWishlist,
  onAddToCart,
}) {
  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty-text">Your wishlist is empty ❤️</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} />

              <div className="wishlist-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>

              <div className="wishlist-actions">
                <button
                  className="add-cart"
                  onClick={() => onAddToCart(item.id)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>

                <button
                  className="remove"
                  onClick={() => onRemoveFromWishlist(item.id)}
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
