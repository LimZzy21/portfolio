
export const Navbar = () => {


    return (
        <nav className="flex  max-w-screen-xl flex-wrap items-center justify-between mx-auto pt-10">



            <div>
                <h1 className="text-4xl  first-letter:bg-orange-500 font-bold "><span className=" text-white bg-clip-padding border-r-8 border-l-8 border-orange-500">M</span>uhammad</h1>
            </div>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="text-lg flex flex-row p-4 md:p-0 mt-1">

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
                        <a className="block py-2 px-3">Testmonials</a>
                    </li>
                    <li>
                        <a className="block py-2 px-3">Contact Us</a>
                    </li>

                    <li className="ms-5">
                        <button className="block py-2 px-4 bg-orange-500 text-white rounded">Download CV</button>
                    </li>

                </ul>
            </div>



        </nav>
    )
}