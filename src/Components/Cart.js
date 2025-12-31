import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/addToCartSlices";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {

        dispatch(clearCart());
    }


    return (
         <div>
      <ul>
         {cartItems.length === 0 && <h1>Cart is Empty</h1>}
          <span>
            <button className="p-2 m-2 bg-black text-white rounded-xl text-sm cursor-pointer    "
          onClick={handleClearCart}
          >Clear Cart</button>
         </span>
        {cartItems.map((item) => (
        <div data-testid="cartItems"
            key={item.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-3">
                 <span>Name : { item.name }</span>
              </div>
            </div>
        </div>
        ))}
      </ul>
    </div>
    );

}

export default Cart;