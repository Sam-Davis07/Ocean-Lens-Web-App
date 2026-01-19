import "./About.css"

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted destination for quality products</p>
      </section>

      {/* CONTENT */}
      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a modern e-commerce platform focused on delivering high-quality
            products at affordable prices. Our goal is to make online shopping
            simple, reliable, and enjoyable for everyone.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide a seamless shopping experience with trusted products,
            secure payments, and fast delivery — all in one place.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <ul>
            <li>✔ Wide range of quality products</li>
            <li>✔ Secure and easy payments</li>
            <li>✔ Fast and reliable delivery</li>
            <li>✔ Customer-first support</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
