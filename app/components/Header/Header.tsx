import img from '@/app/assets/photo.png'
import facebook from '@/app/assets/facebook.svg'
import instagram from '@/app/assets/instagram.svg'
import twitter from '@/app/assets/twitter.svg'
import linkedin from '@/app/assets/linkedin.svg'
import Image from 'next/image'

export const Header = () => {

    return (
        <div className='flex  max-w-screen-xl flex-wrap items-center justify-between mx-auto  mt-[7rem]'>

            <div className='block md:flex items-center'>

                <div>
                    <p className='text-2xl font-semibold'>Hi I am</p>
                    <p className='text-3xl py-2 font-semibold text-orange-500'>Muhhamad Bin Jameel</p>
                
                    <div className='h-fit mb-4  text-6xl md:text-7xl lg:text-8xl font-bold sm:h-fit'>
                        <h1 className='text-start md:text-start'>UI & UX</h1>
                        <h2 className='text-start md:text-end'>Designer</h2>
                    </div>

                    <p className='md:w-[706px] text-xl '>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
                    <button className='bg-orange-500 text-white px-3 py-2 rounded mt-4'>Hire me</button>
                
                </div>

                <div className=" flex flex-col items-center justify-center ps-3">

                    <div className='pb-10'>
                        <Image src={img} alt='photo' />
                    </div>

                    <div className='flex justify-center space-x-8 pe-[7rem] '>
                        <Image src={facebook} alt='facebook' />
                        <Image src={twitter} alt='twitter' />
                        <Image src={instagram} alt='instagram' />
                        <Image src={linkedin} alt='linkedin' />
                    </div>

                </div>

            </div>

        </div>
    )
}