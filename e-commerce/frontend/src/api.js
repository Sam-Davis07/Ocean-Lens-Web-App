const API = "http://localhost:5000"


export const getProducts = () => fetch(`${API}/products`).then(res => res.json())
export const getCart = () => fetch(`${API}/cart`).then(res => res.json())
export const addToCart = (id) => fetch(`${API}/cart`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ productId: id })
})
export const removeFromCart = (id) => fetch(`${API}/cart/${id}`, { method: "DELETE" })