import { useState } from "react";
import OrderedItem from "./OrderedItem";

function OrderConfirmed(props) {

    return (
        <div className={`absolute bg-black h-full w-full ${props.className} justify-center items-end lg:items-center bg-opacity-60 z-50`}>
            <div className="bg-white flex flex-col p-4 lg:p-8 w-full lg:max-w-lg rounded-2xl">
                <img className="w-10 h-10" src="./assets/images/icon-order-confirmed.svg" alt="" />
                <h2 className="capitalize font-bold text-3xl mt-4 mb-1">order confirmed</h2>
                <p className="text-gray-500">We hope you enjoy your food!</p>
                <div className="bg-amber-50 px-5 my-8 rounded-lg">
                    {
                        props.orderedItems.map((item, index) => (<OrderedItem key={index} picture={item.picture} name={item.name} quantity={item.quantity} price={item.price} />))
                    }
                    <div className="my-4 flex justify-between items-center">
                        <p className="capitalize">order total</p>
                        <p className="font-bold text-2xl">${(props.totalPrice).toFixed(2)}</p>
                    </div>
                </div>
                <button onClick={() => { window.location.reload() }} className="capitalize bg-rose-700 text-white rounded-full w-full py-2">start new order</button>
            </div>
        </div>
    );
}

export default OrderConfirmed;