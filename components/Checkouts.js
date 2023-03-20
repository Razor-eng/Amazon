import Image from "next/image";
import Header from "./Header"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/basketSlice"
import CheckoutProduct from "./CheckoutProduct";
import { useSession } from "next-auth/react";

function Checkouts() {
    const items = useSelector(selectItems);
    const { data: session } = useSession();
    const total = useSelector(selectTotal);

    return (
        <>
            <main className="lg:flex max-w-screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image src="https://links.papareact.com/ikj" width={1020} height={250} alt="image" />
                    <div className="flex flex-col p-5 xl:p-10 space-y-10 bg-white">
                        <h1 className="text-3xl border-b p-4">
                            {items.length === 0 ? "Your Amazon Basket is Empty." : "My Shopping Basket"}
                        </h1>
                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({items.length} items):
                                <span className="font-bold">
                                    <p>&#8377;{(total * 10).toFixed(2)}</p>
                                </span>
                            </h2>
                            <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-black-300 cursor-not-allowed'}    `}>
                                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </>
    )
}

export default Checkouts;