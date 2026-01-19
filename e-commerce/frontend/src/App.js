import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "../src/components/NavBar"
import Shop from "../src/pages/Shop"
import CartPage from "../src/pages/CartPage"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Wishlist from "../src/pages/WishList"
import { getProducts, getCart, addToCart, removeFromCart } from "./api"
import "./App.css"

export default function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [searchQuery, setSearchQuery] = useState("")


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }


  const load = () => {
    getProducts().then(setProducts)
    getCart().then(setCart)
  }

  useEffect(() => {
    load()
  }, [])

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.filter((p) => p.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id))
  }

  const addToCartFromWishlist = (id) => {
    addToCart(id).then(load)
  }



  return (
    <div className="app">
      <NavBar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onSearch={setSearchQuery}
        theme={theme}              
        toggleTheme={toggleTheme} 
      />


      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              onAddToCart={(id) => addToCart(id).then(load)}
            />
          }
        />


        <Route
          path="/shop"
          element={
            <Shop
              products={filteredProducts}
              onAdd={(id) => addToCart(id).then(load)}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              onRemoveFromWishlist={removeFromWishlist}
              onAddToCart={addToCartFromWishlist}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              onRemove={(id) => removeFromCart(id).then(load)}
            />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
