import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToBasket,removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ id, title, rating, price, description, category, image, hasPrime}) {
    const dispatch = useDispatch();
    const addItem = () =>{
        const product = {
            id, title, rating, price, description, category, image, hasPrime
        };
        dispatch(addToBasket(product));
    }
    const removeItem = () =>{
        dispatch(removeFromBasket({id}));
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} alt="image"/>
            <div className="col-span-2 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))}
                </div>
                <p className="text-xs-my-2 line-clamp-3">{description}</p>
                <p className="mb-5 font-bold">&#8377;{(price * 10).toFixed(2)}</p>
                {hasPrime && (
                <div className="items-center flex space-x-2">
                    <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button className="button" onClick={addItem}>Add to Cart</button>
            <button className="button" onClick={removeItem}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
