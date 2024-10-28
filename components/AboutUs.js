import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
    return (
        <div>

            <div className='flex  gap-7 justify-center items-center py-20'>

                <div>
                    <Image
                        src="/savings.png"
                        alt="Background"
                        width="350"
                        height="650"
                        layout=""
                        objectFit=""
                        quality={100} // Optional: Adjust quality
                        className="-z-10" // Ensure it stays in the background
                    />

                </div>
                <div className='space-y-3'>
                    <div className='px-3 py-1 bg-gray-100 rounded-full w-[100px] '>
                    <p className='text-[9px]'>🔥 ABOUT US</p>

                    </div>
                    <p className='text-4xl font-extrabold w-[330px]'>ALL YOUR MONEY NEEDS IN ONE APP</p>
                    <div className='flex flex-col gap-2'>
                        <div className='w-[350px] h-[80px] py-3 px-4 border-solid border-[0.5px] border-gray-500 hover:border-none hover:bg-lime-100  duration-300 rounded-md'>
                            <p className='font-bold text-md'>Expenses Tracker</p>
                            <p className='font-extralight text-[10px] w-[340px]'>Our comprehensive selection of medications, supplements, and healthcare products .</p>
                        </div>

                        <div className='w-[350px] h-[80px] py-3 px-4 border-solid border-[0.2px] border-gray-500 hover:border-none hover:bg-lime-100 duration-300 rounded-md'>
                            <p className='font-bold text-md'>Expenses Tracker</p>
                            <p className='font-extralight text-[10px] w-[340px]'>Our comprehensive selection of medications, supplements, and healthcare products .</p>
                        </div>

                        <div className='w-[350px] h-[80px] py-3 px-4 border-solid border-[0.5px] border-gray-500 hover:border-none hover:bg-lime-100 duration-300 rounded-md'>
                            <p className='font-bold text-md'>Expenses Tracker</p>
                            <p className='font-extralight text-[10px] w-[340px]'>Our comprehensive selection of medications, supplements, and healthcare products .</p>
                        </div>

                       
                    </div>

                </div>
            </div>


            <div className='flex  gap-7 justify-center items-center pb-20'>

               

                <div className='space-y-3'>
                    <div className='px-3 py-1 bg-gray-100 rounded-full w-[100px] '>
                    <p className='text-[9px]'>🔥 FEATURED</p>

                    </div>
                    <p className='text-4xl font-extrabold w-[340px]'>ALL THE FEATURES IN ONE APP</p>
                    <div className='flex flex-col gap-2'>
                        
                    <p className='font-extralight text-[10px] w-[340px]'>Get 3% cash back on everyday purchases, 2% on everything else</p>
                    <p className='font-extralight text-[10px] w-[340px]'>Extra Spending Power when you have Rewards Checking through Upgrade6</p>

                    <div className='flex relative'>
                        <button className='text-black bg-white border-solid border-[1px] border-green-400 rounded-full px-7 py-2 text-sm font-normal'>
                            Get Started
                        </button>
                        <div className='bg-green-500 w-[35px] h-[35px] rounded-full absolute top-0 left-28 flex justify-center items-center'><MdArrowOutward  className='text-white'/></div>
                        </div>

                       
                    </div>

                </div>
                <div>
                    <Image
                        src="/2mobile.png"
                        alt="Background"
                        width="350"
                        height="650"
                        layout=""
                        objectFit=""
                        quality={100} // Optional: Adjust quality
                        className="-z-10" // Ensure it stays in the background
                    />
                </div>
            </div>


        </div >
    )
}

export default AboutUs
