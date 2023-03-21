import { CheckCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";


function Succession() {
    const router = useRouter();


    return (
        <main className="max-w-screen-lg mx-auto">
            <div className="flex flex-col p-10 bg-white">
                <div className="flex items-center space-x-2 mb-5">
                    <CheckCircleIcon className="text-green-500 h-10" />
                    <h1 className="text-3xl">Thank You, Your order has been confirmed!</h1>
                </div>
                <p>
                    Thank you for shopping with us. We'll send a confirmation once your item(s) has shipped, if you would like to check the status of your order(s) please press the link below.
                </p>
                <button onClick={() => router.push('/')} className="button mt-8">Go to Home</button>
            </div>
        </main>
    )
}

export default Succession
