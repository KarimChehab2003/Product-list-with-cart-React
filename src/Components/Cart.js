import { useEffect, useState } from "react";
import CartItem from "./CartItem";

function Cart(props) {
    const [quantity, setQuantity] = useState(0);
    const cartItems = props.cartItems;
    const totalPrice = props.totalPrice;
    const setTotalPrice = props.modifyTotalPrice;

    useEffect(() => {
        const totalItems = cartItems.reduce((accumulator, item) => {
            return accumulator += item.quantity;
        }, 0)
        setQuantity(totalItems);
    }, [cartItems])


    const deleteCartItem = (dessert) => {
        const foundItem = cartItems.find((item) => item.name == dessert);
        console.log(foundItem)
        if (foundItem) {
            setQuantity(quantity - foundItem.quantity);
            setTotalPrice(totalPrice - (foundItem.quantity * foundItem.price))
            props.updateCartItems(dessert);
            console.log(cartItems)
        }
        else
            console.log("item not found");
    }

    return (
        <div className="w-full lg:w-2/4 bg-white h-fit p-5 rounded-2xl mx-auto mt-8 lg:mt-0">
            <h2 className="text-red-700 capitalize font-bold text-2xl mb-6">your cart({quantity})</h2>

            {!quantity == 0 ?
                (
                    <>
                        {cartItems.map((item, index) => (<CartItem key={index} name={item.name} price={item.price} quantity={item.quantity} deleteCartItem={deleteCartItem} />))}

                        <div className="flex flex-col mt-8 space-y-5">
                            <div className="flex justify-between items-center">
                                <p className="capitalize">order total</p>
                                <p className="font-bold text-2xl">${totalPrice.toFixed(2)}</p>
                            </div>
                            <div className="bg-amber-50 flex justify-center items-center space-x-2 p-3 rounded-lg">
                                <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
                                <p>This is a <span className="font-medium">carbon-neutral</span> delivery</p>
                            </div>
                            <button onClick={props.onConfirmOrder} className="bg-rose-700 text-white rounded-full capitalize py-2">confirm order</button>
                        </div>
                    </>
                )
                :
                (
                    <section className="emptyCart">
                        <img className="mx-auto" src="./assets/images/illustration-empty-cart.svg" alt="" />
                        <p className="text-yellow-800 text-center font-medium">Your added items will appear here</p>
                    </section>
                )
            }
        </div >
    );
}

export default Cart;
