import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

const Testimonal = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <div className='flex flex-col justify-center items-center py-7'>
                    <div className='bg-white px-3 py-2 rounded-full shadow-sm bg-opacity-12 w-[100px]'>
                        <p className='text-black font-extralight text-[11px]'>🔥 Testimonial</p>
                    </div>

                    <div>
                        <p className='text-black text-3xl font-extrabold w-[380px] text-center my-5'>GET TO KNOW OUR CLIENTS</p>
                    </div>
                    <div className='flex flex-warp gap-5'>
                        <div className='w-[210px] h-[210px] bg-white rounded-xl space-y-3 px-3 py-5 ' >
                            <Image
                                src="/whitequote.png"
                                alt="Background"
                                width="40"
                                height="40"
                                layout=""
                                objectFit=""
                                quality={100}
                                className="-z-10"
                            />

                            <p className='text-black text-[11px] max-w-[280px] font-extralight'>I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product</p>

                            <div className='flex gap-5'>
                                <Image
                                    src="/c1.jpg"
                                    alt="Background"
                                    width="40"
                                    height="40"
                                    layout=""
                                    objectFit=""
                                    quality={100}
                                    className=""
                                />
                                <div>
                                    <Image
                                        src="/start1.png"
                                        alt="Background"
                                        width="40"
                                        height="40"
                                        layout=""
                                        objectFit=""
                                        quality={100}
                                        className=""
                                    />

                                    <p className='text-black text-[11px]  font-bold' >Mike Torello</p>
                                    <p className='text-black text-[11px]  font-extralight'>CEO of Initech</p>

                                </div>

                            </div>


                        </div>

                        <div className='w-[210px] h-[210px] bg-green-900 rounded-xl space-y-3 px-3 py-5 ' >
                            <Image
                                src="/whitequote.png"
                                alt="Background"
                                width="40"
                                height="40"
                                layout=""
                                objectFit=""
                                quality={100}
                                className="-z-10"
                            />

                            <p className='text-white text-[11px] max-w-[280px] font-extralight'>I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product</p>

                            <div className='flex gap-5'>
                                <Image
                                    src="/c2.png"
                                    alt="Background"
                                    width="40"
                                    height="40"
                                    layout=""
                                    objectFit=""
                                    quality={100}
                                    className=""
                                />
                                <div>
                                    <Image
                                        src="/start1.png"
                                        alt="Background"
                                        width="40"
                                        height="40"
                                        layout=""
                                        objectFit=""
                                        quality={100}
                                        className=""
                                    />

                                    <p className='text-white text-[11px]  font-bold' >Mike Torello</p>
                                    <p className='text-white text-[11px]  font-extralight'>CEO of Initech</p>

                                </div>

                            </div>


                        </div>

                        <div className='w-[210px] h-[210px] bg-white rounded-xl space-y-3 px-3 py-5 ' >
                            <Image
                                src="/whitequote.png"
                                alt="Background"
                                width="40"
                                height="40"
                                layout=""
                                objectFit=""
                                quality={100}
                                className="-z-10"
                            />

                            <p className='text-black text-[11px] max-w-[280px] font-extralight'>I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product</p>

                            <div className='flex gap-5'>
                                <Image
                                    src="/c1.jpg"
                                    alt="Background"
                                    width="40"
                                    height="40"
                                    layout=""
                                    objectFit=""
                                    quality={100}
                                    className=""
                                />
                                <div>
                                    <Image
                                        src="/start1.png"
                                        alt="Background"
                                        width="40"
                                        height="40"
                                        layout=""
                                        objectFit=""
                                        quality={100}
                                        className=""
                                    />

                                    <p className='text-black text-[11px]  font-bold' >Mike Torello</p>
                                    <p className='text-black text-[11px]  font-extralight'>CEO of Initech</p>

                                </div>

                            </div>


                        </div>
                    </div>

                    <div className='flex relative my-6'>
                        <button className='text-black bg-gray-100  border-solid border-[1px] border-green-400 rounded-full px-7 py-2 text-sm font-normal'>
                            View More
                        </button>
                        <div className='bg-green-500 w-[35px] h-[35px] rounded-full absolute top-0 left-28 flex justify-center items-center'><MdArrowOutward className='text-white' /></div>
                    </div>
                </div>

            </div>

            <div className='bg-white h-[500px]'>


                <div className='flex justify-center items-center py-12'>



                    <div
                        className=" h-[800px] md:h-[350px] w-[700px] rounded-3xl "
                        style={{
                            backgroundImage: "url('/trust.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '',
                        }}
                    >
                        <div className=' p-10 '>


                            <div className='flex flex-col-reverse md:flex-row justify-center  gap-7 items-center'>
                              

                                <div className='space-y-4'>
                                   


                                    <p className='text-white text-3xl font-extrabold w-[380px]'>
                                    Are you ready to start?
                                    </p>

                                    <p className='text-white max-w-[400px] font-extralight'>
                                    Personalize your settings, follow your progress, archive your highlights and notes automatically Glose is the ultimate reading 
                                    </p>

                                    <div className='flex relative'>
                                        <button className='text-white bg-green-500 rounded-full px-7 py-2 text-sm font-light'>
                                            Get Started
                                        </button>
                                        <div className='bg-white w-[35px] h-[35px] rounded-full absolute top-0 left-28 flex justify-center items-center'><MdArrowOutward className='text-gray-700' /></div>
                                    </div>


                                </div>

                                <div>
                                    <Image
                                        src="/pp.png"
                                        alt="Background"
                                        width="450"
                                        height="950"
                                        layout=""
                                        objectFit=""
                                        quality={100} // Optional: Adjust quality
                                        className="mt-[38px]" // Ensure it stays in the background
                                    />

                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Testimonal
