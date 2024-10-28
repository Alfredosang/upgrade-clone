import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';

const Trust = () => {
    return (
        
        <div
            className=" h-[150vh] md:h-[450px] "
            style={{
                backgroundImage: "url('/trust.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '',
            }}
        >
            <div className='container mx-auto p-10 '>


                <div className='flex flex-col-reverse md:flex-row justify-center  gap-10 items-center'>
                    <div>
                        <Image
                            src="/trustMobile.png"
                            alt="Background"
                            width="300"
                            height="600"
                            layout=""
                            objectFit=""
                            quality={100} // Optional: Adjust quality
                            className="-z-10" // Ensure it stays in the background
                        />

                    </div>

                    <div className='space-y-4'>
                        <div className='bg-white px-3 py-2 rounded-full bg-opacity-5 w-[150px]'>
                            <p className='text-white font-extralight text-[11px]'>🔥 TRUSTWORTHNESS</p>
                        </div>


                        <p className='text-white text-3xl font-extrabold w-[380px]'>
                            WE VALUE YOUR TRUST AND SECURITY
                        </p>

                        <p className='text-white max-w-[400px] font-extralight'>
                            Our mission is to make finance more accessible, transparent, and secure for everyone. With cutting.
                        </p>

                        <div className='flex relative'>
                            <button className='text-white bg-green-500 rounded-full px-4 py-2 text-sm font-light'>
                                Open Account
                            </button>
                            <div className='bg-white w-[35px] h-[35px] rounded-full absolute top-0 left-28 flex justify-center items-center'><MdArrowOutward className='text-gray-700' /></div>
                        </div>


                    </div>

                </div>


            </div>
        </div>
    )
}

export default Trust
