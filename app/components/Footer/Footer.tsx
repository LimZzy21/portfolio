import Image from "next/image"
import facebook from '@/app/assets/facebook.svg'
import instagram from '@/app/assets/instagram.svg'
import twitter from '@/app/assets/twitter.svg'
import linkedin from '@/app/assets/linkedin.svg'

export const Footer = ()=>{


    return (
        <div className="bg-gray-200 flex justify-center flex-col text-center mt-14 pt-16 space-y-24">

            <div className=" bg-gray-200">
                <h1 className="text-4xl  first-letter:bg-orange-500 font-bold "><span className=" text-white bg-clip-padding border-r-8 border-l-8 border-t-8 h-fit border-orange-500">M</span>uhammad</h1>
            </div>
            <div className="hidden w-full md:block md:w-auto mx-auto space-y-20" id="navbar-default">
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


                </ul>
                <div className=" flex flex-col items-center justify-center  ">


                    <div className='flex justify-center space-x-8  '>
                        <Image src={facebook} alt='facebook' />
                        <Image src={twitter} alt='twitter' />
                        <Image src={instagram} alt='instagram' />
                        <Image src={linkedin} alt='linkedin' />
                    </div>

                </div>
            </div>
            <div className="bg-[#545454] text-white">
                <p className="py-8">© 2023 <span className="text-orange-500 font-semibold">Muhammad</span>  All Rights Reserved , Inc.</p>
            </div>
        </div>
    )
}