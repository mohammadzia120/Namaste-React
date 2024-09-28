import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.item);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-2xl"> Cart</h1>
      <h1 className="text-center w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="m-2 p-2 ">
            Cart is Empty. Please add item to the cart
          </h1>
        )}
        <ItemList items={cartItems} />
      </h1>
    </div>
  );
};

export default Cart;
