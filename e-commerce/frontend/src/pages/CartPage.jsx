import Cart from "../components/Cart"

export default function CartPage({ cart, onRemove }) {
  return <Cart cart={cart} onRemove={onRemove} />
}
