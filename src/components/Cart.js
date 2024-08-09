import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    return(
        <div>
            <h2 className="flex justify-center mt-4 font-bold text-2xl">Cart</h2>

            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;