function OrderedItem(props) {

    return (
        <div className="flex justify-between items-center border-b border-gray-400 py-4">
            <div className="flex justify-center items-center space-x-4">
                <img className="w-20 h-20 rounded-lg" src={props.picture} alt="product picture" />
                <article className="flex flex-col justify-center items-start">
                    <p className="font-semibold">{props.name}</p>
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold text-rose-700">{props.quantity}x</p>
                        <p className="text-gray-500">@${(props.price).toFixed(2)}</p>
                    </div>
                </article>
            </div>
            <p className="font-semibold">
                ${(props.price * props.quantity).toFixed(2)}
            </p>
        </div>
    );
}

export default OrderedItem;