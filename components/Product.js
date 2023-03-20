import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating,setRating] = useState(0);
    const [hasPrime,setHasPrime] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
        setHasPrime(Math.random() < 0.5);
    }, [rating,hasPrime])
    
    const addItem = () =>{
        const product = {
            id, title, rating, price, description, category, image, hasPrime
        };
        dispatch(addToBasket(product));
    }

    return (
        <div className="flex relative flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} alt="image"/>
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <p className="mb-5 font-bold">&#8377;{(price * 10).toFixed(2)}</p>
            {hasPrime && (
                <div className="items-center flex space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            <button onClick={addItem} className=" mt-auto button">Add to Basket</button>

        </div>
    )
}

export default Product
