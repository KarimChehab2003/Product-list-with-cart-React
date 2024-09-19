import { useEffect, useState } from "react";


function DesertItem(props) {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        props.addToCart({ ...props, quantity: quantity })
    }, [quantity])

    return (
        <div className="mx-auto">
            <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                    <img className="transition-transform duration-300 ease-in-out hover:scale-105" src={props.picture} alt="" />
                </div>
                {
                    quantity == 0 ? (
                        <button onClick={() => { setQuantity(quantity + 1) }} className="w-3/4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 bg-white border border-black flex justify-center items-center space-x-2 px-6 py-2 rounded-full transition-colors active:border-rose-700 active:text-rose-700">
                            <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                            <span className="font-semibold ">Add to Cart</span>
                        </button>
                    ) : (
                        <div className="w-3/4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 rounded-full bg-rose-700 flex justify-between items-center px-6 py-2">
                            <button className="border border-white text-white rounded-full w-5 h-5 m-0 flex justify-center items-center transition-colors hover:bg-white hover:text-rose-600 text-lg" onClick={() => setQuantity(quantity - 1)}>&#8722;</button>
                            <span className="text-white">{quantity}</span>
                            <button className="border border-white text-white rounded-full w-5 h-5 m-0 flex justify-center items-center transition-colors hover:bg-white hover:text-rose-600 text-lg" onClick={() => setQuantity(quantity + 1)}>&#43;</button>
                        </div>
                    )
                }

            </div>

            <article className="mt-8">
                <p className="text-gray-500">{props.category}</p>
                <p className="font-semibold">{props.name}</p>
                <p className="font-semibold text-red-700">${(props.price).toFixed(2)}</p>
            </article>
        </div>
    );
}


export default DesertItem;