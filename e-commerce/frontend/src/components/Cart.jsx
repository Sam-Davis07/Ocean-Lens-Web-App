export default function Cart({ cart, onRemove }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <span>{item.name} × {item.quantity}</span>
          <span>₹{item.price * item.quantity}</span>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  )
}
