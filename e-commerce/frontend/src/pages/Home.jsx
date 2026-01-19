import { Link } from "react-router-dom"
import "./Home.css"

export default function Home({ products = [], onAddToCart }) {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Style</h1>
          <p>Shop the latest trends at the best prices</p>
          <Link to="/shop" className="hero-btn">Shop Now</Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">🚚 Free Delivery</div>
        <div className="feature-card">💳 Secure Payments</div>
        <div className="feature-card">⭐ Premium Quality</div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured">
        <h2>Featured Products</h2>

        <div className="featured-grid">
          {featuredProducts.map((p) => (
            <div key={p.id} className="featured-card">
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <button onClick={() => onAddToCart(p.id)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <Link to="/shop" className="view-all">
          View All Products →
        </Link>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <Link to="/shop" className="category-card">Men</Link>
          <Link to="/shop" className="category-card">Women</Link>
          <Link to="/shop" className="category-card">Sneakers</Link>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>Great quality products and fast delivery!</p>
            <span>- Rahul</span>
          </div>

          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>Loved the collection. Will shop again.</p>
            <span>- Ananya</span>
          </div>
        </div>
      </section>


    </div>
  )
}
