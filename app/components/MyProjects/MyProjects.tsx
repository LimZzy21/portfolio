import img from '@/app/assets/uiux.png'

import Image from 'next/image'

export const MyProjects = ()=>{
    return (
        <div className="flex flex-col text-center ">
            <h1 className="text-5xl font-bold break-before">My Projects</h1>
            <p className='my-14'>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula <br /> aliquam venenatis fghh hgjj nisi ante.</p>
            <div className="space-x-3">
                <button className="px-2 py-2 rounded bg-gray-100">All</button>
                <button className="bg-orange-500 text-white px-2 py-2 rounded">UI/UX</button>
                <button className="px-2 py-2 rounded bg-gray-100">Website Design</button>
                <button className="px-2 py-2 rounded bg-gray-100">App Design</button>
                <button className="px-2 py-2 rounded bg-gray-100">Graphic Design</button>
            </div>

            <div className="flex  px-8 items-center justify-center space-x-28 pt-24">
                <div className="  ">
                    <Image src={img} width={449} height={500} alt="Landing Page Design" className=" h-auto" />
                        <h4 className="text-start text-orange-500  text-xl mt-4">UI UX</h4>
                        <h3 className="text-start text-black font-bold text-2xl">AirCalling Landing Page Design</h3>
                </div>
                <div className="  ">
                    <Image src={img} width={449} height={500} alt="Landing Page Design" className=" h-auto" />
                        <h4 className="text-start text-orange-500  text-xl mt-4">UI UX</h4>
                        <h3 className="text-start text-black font-bold text-2xl">AirCalling Landing Page Design</h3>
                </div>
                <div className="text-center  ">
                    <Image src={img} width={449} height={500} alt="Landing Page Design" className=" h-auto" />
                        <h4 className="text-start text-orange-500  text-xl mt-4">UI UX</h4>
                        <h3 className="text-start text-black font-bold text-2xl">AirCalling Landing Page Design</h3>
                </div>

            </div>

        </div>
    )
}