import React from 'react'
import Image from 'next/image'

const Testimonal = () => {
    return (
        <div className='bg-gray-100'>
            <div className='flex flex-col justify-center items-center py-7'>
                <div className='bg-white px-3 py-2 rounded-full shadow-sm bg-opacity-5 w-[150px]'>
                    <p className='text-black font-extralight text-[11px]'>🔥 Testimonial</p>
                </div>

                <div>
                    <p className='text-black text-3xl font-extrabold w-[380px] text-center'>GET TO KNOW OUR CLIENTS</p>
                </div>
                <div>
                <div className='w-[210px] h-[210px] bg-white rounded-xl flex justify-center items-center' >
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
                </div>
            </div>

        </div>
    )
}

export default Testimonal
