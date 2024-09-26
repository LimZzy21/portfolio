import img from '@/app/assets/photo2.png'
import Image from 'next/image'


export const About = ()=>{

    return (
        <div className='flex max-w-screen-xl flex-wraenp items-center  mx-auto  mt-[4rem]'>

            <div className=" flex flex-col items-center justify-center ps-3">
                <div>
                    <div className='pb-10'>
                        <Image src={img} alt='photo' />
                    </div>
                </div>
                


            </div>
            <div className=" flex  ">

                <div className='block md:flex flex-col  md:w-[756px] '>
                    <div>
                        <h1 className='text-6xl font-semibold'>About me</h1>
                    </div>
                    <p className='py-10 text-xl'>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>


                    <div className=" items-center space-x-2">
                        <label htmlFor="ux" className="text-black font-semibold ps-4 text-xl">UX</label>
                        <input id="ux" type="range" value="90" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none m-2 range-orange"/>
                    </div>
                    <div className=" items-center space-x-2">
                        <label htmlFor="ds" className="text-black font-semibold ps-4 text-xl">Website Design</label>
                        <input id="ds" type="range" value="70" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none m-2 range-orange"/>
                    </div>
                    <div className=" items-center space-x-2">
                        <label htmlFor="ux" className="text-black font-semibold ps-4 text-xl">App Design</label>
                        <input id="ux" type="range" value="85" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none m-2 range-orange"/>
                    </div>
                    <div className=" items-center space-x-2">
                        <label htmlFor="ux" className="text-black font-semibold ps-4 text-xl">Graphic Design</label>
                        <input id="ux" type="range" value="75" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none m-2 range-orange"/>
                    </div>
                    

                </div>

            </div>

            

        </div>
    )
}