import Head from "next/head";
import Checkouts from "../components/Checkouts";
import Header from "../components/Header";

function checkout() {

    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon-Basket</title>
            </Head>
            <Header/>
            <Checkouts/>
        </div>
    )
}

export default checkout;