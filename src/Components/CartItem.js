import { useEffect } from "react";


function CartItem(props) {
    const totalPricePerItem = props.quantity * props.price;


    return (
        <section className="flex justify-between items-center border-b pb-3 my-2">
            <div>
                <p className="capitalize font-semibold">{props.name}</p>
                <div className="flex justify-start items-center space-x-4">
                    <p className="text-red-700 font-bold ">{props.quantity}x</p>
                    <p className="text-gray-400">@${(props.price).toFixed(2)}</p>
                    <p className="text-gray-600 font-semibold">${totalPricePerItem.toFixed(2)}</p>
                </div>
            </div>
            <button onClick={() => { props.deleteCartItem(props.name) }} className="rounded-full border border-gray-400 text-2xl w-5 h-5 flex justify-center items-center text-gray-400 transition-colors hover:border-black hover:text-black">
                &#215;
            </button>
        </section>
    );
}

export default CartItem;