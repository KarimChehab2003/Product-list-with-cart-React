import { useEffect, useState } from "react";
import DesertItem from "./DessertItem";

import axios from "axios";

function DesertMenu(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('./data.json')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.log("there was an error"))

    }, [])

    // useEffect(() => {
    //     console.log(data);
    // }, [data])


    return (
        <div className="max-w-screen-lg">
            <h2 className="capitalize text-3xl font-bold mb-6">desserts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {data.map((dessert, index) => (<DesertItem key={index} picture={dessert.image.desktop} category={dessert.category} name={dessert.name} price={dessert.price} addToCart={props.addToCart} />))}
            </div>
        </div>
    );
}

export default DesertMenu