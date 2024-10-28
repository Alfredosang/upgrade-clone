import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center m-10'>
            <div className='bg-gray-300 px-3 py-2 rounded-full bg-opacity-5 w-[150px]'>
                <p className='text-black font-extralight text-[11px]'>🔥 TRUSTWORTHNESS</p>
            </div>

            <div>
                <p className='text-black text-3xl font-extrabold w-[380px] text-center'>CAN HELP YOU ACHIEVE FINANCIAL SUCCESS</p>
            </div>

            <div className='bg-gray-100 w-[320px] md:w-[750px] lg:w-[1000] h-[600px] md:h-[250px] my-5 rounded-xl'>
                <div className='flex justify-center items-center gap-10'>
                    <div>
                        <Image
                            src="/services.png"
                            alt="Background"
                            width="200"
                            height="350"
                            layout=""
                            objectFit=""
                            quality={100} // Optional: Adjust quality
                            className="-z-10 min-w-[150px] mt-3" // Ensure it stays in the background
                        />

                    </div>

                    <div>
                        <Image
                            src="/internetIcon.png"
                            alt="Background"
                            width="30"
                            height="30"
                            layout=""
                            objectFit=""
                            quality={100}
                            className="-z-10 mb-3"
                        />
                        <p className='text-black text-2xl font-bold w-[300px] '>Transfers across the globe are free</p>
                    </div>
                </div>

            </div>

            <div className='flex gap-10'>
                <div className='bg-gray-100 rounded-lg w-[350px] h-[450px] py-7 px-7'>

                    <div className=''>
                        <div className=''>
                            <Image
                                src="/internetIcon.png"
                                alt="Background"
                                width="30"
                                height="30"
                                layout=""
                                objectFit=""
                                quality={100}
                                className="-z-10 mb-3"
                            />
                        </div>
                        <p className='text-black text-xl font-bold w-[280px] '>Create A Card That Is Unique And Customized</p>
                        <p className='text-black text-[11px] max-w-[280px] font-extralight'>we offer a comprehensive range of innovative financial services tailored to meet your needs. Our services include High-Yield Savings Accounts.</p>
                    </div>

                    <div>
                        <Image
                            src="/chart.png"
                            alt="Background"
                            width="270"
                            height="270"
                            layout=""
                            objectFit=""
                            quality={100}
                            className="-z-10 mb-0 mt-14"
                        />

                    </div>

                </div>

                <div className='bg-blue-950 rounded-lg w-[350px] h-[450px] py-7 px-7'>

                    <div className=''>
                        <div className=''>
                            <Image
                                src="/settingsIcon.png"
                                alt="Background"
                                width="30"
                                height="30"
                                layout=""
                                objectFit=""
                                quality={100}
                                className="-z-10 mb-3"
                            />
                        </div>
                        <p className='text-white text-xl font-bold w-[280px] '>Personalized Insights And Financial Goals</p>
                        <p className='text-white text-[11px] max-w-[280px] font-extralight'>savings accounts that offer competitive interest rates and flexible deposit options. Investment Invest wisely with our personalized.Our services include High-Yield Savings </p>
                    </div>

                    <div>
                        <Image
                            src="/bonus.png"
                            alt="Background"
                            width="270"
                            height="270"
                            layout=""
                            objectFit=""
                            quality={100}
                            className="-z-10 mb-0 mt-2"
                        />

                    </div>

                </div>


            </div>

            <div className='flex flex-wrap gap-5 mt-7'>
                <div className='w-[230px] h-[160px] bg-lime-300 rounded-lg flex flex-col justify-center items-start px-4 space-y-2'>
                    <p className='text-black text-xl font-bold w-[150px]'>100% Dedication</p>
                    <p className='text-black text-[11px] max-w-[280px] font-extralight'>we offer a comprehensive range of innovative financial services tailored to meet your needs.</p>

                </div>

                <div className='w-[230px] h-[160px] bg-gray-100 rounded-lg flex flex-col justify-center items-start px-4 space-y-[2px]'>
                    <div className=''>
                        <Image
                            src="/settingsIcon.png"
                            alt="Background"
                            width="30"
                            height="30"
                            layout=""
                            objectFit=""
                            quality={100}
                            className="-z-10"
                        />
                    </div>
                    <p className='text-black text-lg font-normal w-[150px] leading-normal'>Hold money in 30+ currencies</p>

                </div>

                <div className='w-[230px] h-[160px] bg-green-800 rounded-lg flex justify-center items-center' >
                    <p className='text-white text-xl text-center font-bold w-[150px]'>Visit Our Services page</p>

                </div>

            </div>
            <div className='flex relative my-6'>
                            <button className='text-black bg-white border-solid border-[1px] border-green-400 rounded-full px-7 py-2 text-sm font-normal'>
                                View More
                            </button>
                            <div className='bg-green-500 w-[35px] h-[35px] rounded-full absolute top-0 left-28 flex justify-center items-center'><MdArrowOutward className='text-white' /></div>
                        </div>

        </div>
    )
}

export default Services
