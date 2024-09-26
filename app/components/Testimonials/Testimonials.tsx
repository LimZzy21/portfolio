import Image from "next/image"
import custFirst from '@/app/assets/cust.png'
import custSecond from '@/app/assets/cust2.png'


export const Testimonials = ()=>{

    return(
        <div className="flex flex-col items-center mt-20">
            <div className="flex-col text-center">
                <h1 className="text-5xl font-bold h-fit overflow-hidden">Testimonials</h1>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            </div>
            <div className="flex flex-row justify-center  ">
                <div className="relative flex flex-row w-[52rem] p-4 bg-white/30">
                    <div className="absolute inset-0 bg-gray-500/50 pointer-events-none"></div>
                    <Image src={custSecond} alt=";" className="mr-4 z-10" />
                    <div className="flex flex-col justify-between z-10">
                        <div className="relative overflow-hidden">
                            <span className="inline ">
                                <span className="text-orange-500 text-4xl overflow-hidden">“</span>
                                Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.
                                Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.
                            </span>
                            <span className="text-orange-500 text-4xl align-top">„</span>
                        </div>
                        <p className="mt-auto font-semibold">Name</p>
                        <p>CEO</p>
                    </div>
                </div>
                <div className="bg-gray-100 flex flex-row w-[67rem] p-4 mx-8 ">
                    <Image src={custFirst} alt=";" className="mr-4" width={1080}/>
                    <div className="flex flex-col justify-between ">
                        <div className="relative overflow-hidden">
                            <span className="inline ">
                                <span className="text-orange-500 text-4xl h-fit ">“</span>
                                Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.
                                Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.
                            </span>
                            <span className="text-orange-500 text-4xl align-top">„</span>
                        </div>
                        <p className="mt-auto font-semibold">Name</p>
                        <p>CEO</p>
                    </div>
                </div>
                <div className="relative flex overflow-hidden w-[50rem] p-4 bg-white/30">
                   
                    <div className="absolute inset-0 bg-gray-500/50 pointer-events-none"></div>
                    <Image src={custSecond} alt=";" className="mr-4 z-10 w-[65rem]" />
                    <div className="flex flex-col justify-between z-10">
                        <div className="relative overflow-hidden">
                            <span className="inline">
                                <span className="text-orange-500 text-4xl ">“</span>
                                Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.
                                Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.
                            </span>
                            <span className="text-orange-500 text-4xl align-top">„</span>
                        </div>
                        <p className="mt-auto font-semibold">Name</p>
                        <p>CEO</p>
                    </div>
                </div>




               
              
            </div>
            <div className="flex space-x-3 my-16">
                <div className="w-[30px] bg-gray-200 h-[10px] rounded"></div>
                <div className="w-[30px] bg-orange-500 h-[10px] rounded"></div>
                <div className="w-[30px] bg-gray-200 h-[10px] rounded"></div>
                <div className="w-[30px] bg-gray-200 h-[10px] rounded"></div>
                
            </div>
        </div>

    )
}