import Image from "next/image"
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { signIn,signOut,useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const {data:session} = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={()=>router.push('/')}
                        src="https://www.linkpicture.com/q/amazon_4.png"
                        width={150}
                        height={40}
                        className="cursor-pointer" 
                        alt="img"
                        />
                </div>
                <div className="hidden sm:flex items-center h-10 bg-yellow-400 hover:bg-yellow-500 rounded-md cursor-pointer flex-grow">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                <div className="text-white text-xs flex items-center space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session?signIn:signOut} className="link">
                        <p className="hover:underline">{session?`Hello, ${session.user.name}`:'SignIn'}</p>
                        <p className="font-extrabold md:text-sm">Accounts & lists</p>
                    </div>
                    <div className="link">
                        <p className="font-extrabold md:text-sm">Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={()=>router.push('/checkout')} className="link relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="flex link items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Bussiness</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Foods & Grocer</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shooper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
