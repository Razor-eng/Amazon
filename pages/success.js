import Head from "next/head";
import Header from "../components/Header";
import Succession from "../components/Succession";

export default function success({ products }) {

    return (
        <div className="bg-gray-100 h-screen">
            <Head>
                <title>Checkout-Amazon</title>
            </Head>
            <Header />
            <Succession/>
        </div>
    );
}