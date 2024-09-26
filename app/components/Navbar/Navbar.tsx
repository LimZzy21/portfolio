import Image from "next/image"
import img from '@/app/assets/logo.svg'

export const Navbar = () => {


    return (
        <div className="flex  max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">



            <div>
                <h1 className="text-4xl  first-letter:bg-orange-500 first-letter:font-bold "><span className=" text-white bg-clip-padding border-r-8 border-l-8 border-orange-500">M</span>uhammad</h1>    
            </div>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-row p-4 md:p-0 mt-1  sm:">

                    <li>
                        <a className="block py-2 px-3">Home</a>
                    </li>
                    <li>
                        <a className="block py-2 px-3">About</a>
                    </li>
                    <li>
                        <a className="block py-2 px-3">Services</a>
                    </li>
                    <li>
                        <a className="block py-2 px-3">Projects</a>
                    </li>
                    <li>
                        <a className="block py-2 px-3">Testmonials</a>
                    </li>
                    <li>
                        <a className="block py-2 px-3">Contact Us</a>
                    </li>
                    <li>
                        <a className="block py-2 px-3">Testmonials</a>
                    </li>
                    <li>
                        <button className="block py-2 px-3 bg-orange-500 text-white rounded">Download CV</button>
                    </li>
                  
                </ul>
            </div>



        </div>
    )
}