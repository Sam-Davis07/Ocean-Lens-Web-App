import { Link, useNavigate } from "react-router-dom"
import { FaMoon, FaSun } from "react-icons/fa"
import { useState } from "react"
import {
  FaBars,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa"
import "../components/NavBar.css"

export default function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onSearch,
  toggleTheme,
  theme,
}) {
  const [search, setSearch] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearch(value)
    onSearch(value)

    if (window.location.pathname !== "/shop") {
      navigate("/shop")
    }
  }

  return (
    <>
      {/* HAMBURGER DROPDOWN */}
      {menuOpen && (
        <div className="dropdown-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}

      <header className="navbar">
        {/* LEFT */}
        <div className="nav-left">
          <FaBars
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </div>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <Link to="/" className="logo">E-Commerce</Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          {/* SEARCH */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearchChange}
            />
            <FaSearch />
          </div>

          {/* WISHLIST */}
          <Link to="/wishlist" className="icon-badge">
            <FaHeart />
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </Link>

          {/* CART */}
          <Link to="/cart" className="icon-badge">
            <FaShoppingCart />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>

          {/* LOGIN (HOVER + CLICK) */}
          <div
            className="user-dropdown"
            onMouseEnter={() => setUserOpen(true)}
            onMouseLeave={() => setUserOpen(false)}
          >
            <FaUser
              className="icon-btn"
              onClick={() => setUserOpen((prev) => !prev)}
            />

            {userOpen && (
              <div className="user-menu">
                <Link to="/login" onClick={() => setUserOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" onClick={() => setUserOpen(false)}>
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* THEME TOGGLE */}
          <div className="icon-btn" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </div>

        </div>
      </header>
    </>
  )
}
