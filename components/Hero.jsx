import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
    const logo = [
        '/logo1.png',
        '/logo2.png',
        '/logo3.png',
        '/logo4.png',
        '/logo5.png',
        '/logo6.png',

    ]
    
    return (
        <>
        <div
            className=" h-[150vh] md:h-[100vh] "
            style={{
                backgroundImage: "url('/heroBg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '',
            }}
        >
            <div className='container mx-auto p-7 '>
                <nav className='flex justify-between m-10 items-center'>
                    <div>
                        <Image
                            src="/upgradeLogo.png"
                            alt="Background"
                            width="150"
                            height="100"
                            layout=""
                            objectFit=""
                            quality={100} // Optional: Adjust quality
                            className="-z-10" // Ensure it stays in the background
                        />
                    </div>

                    <div className='justify-between gap-5 text-white hidden md:flex '>
                        <p className='text-white text-sm font-extralight'>Person Loan</p>
                        <p className='text-white text-sm font-extralight'>One Card</p>
                        <p className='text-white text-sm font-extralight'>Savings</p>
                        <p className='text-white text-sm font-extralight'>Checking</p>
                        <p className='text-white text-sm font-extralight'>Help</p>
                    </div>

                    <button className='text-white text-md border-solid border-2 px-5 py-1 rounded-md border-white'>
                        Sign in 
                    </button>


                </nav>

                <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                    <div className='space-y-4'>
                        <div className='bg-white px-3 py-2 rounded-full bg-opacity-5 w-[200px]'>
                        <p className='text-white font-extralight text-[11px]'>🔥 100% TRUSTED PLATFORM</p>
                        </div>
                        
                        
                        <p className='text-white text-5xl font-extrabold w-[558px]'>
                            FINANCE WITH SECURITY AND <span className='text-lime-300'>FLEXIBILITY</span>
                        </p>

                        <p className='text-white max-w-[400px] font-extralight'>
                        no-fee checking account with cash back rewards. 
                        Enjoy fee-free banking and earn 
                        cash back on your everyday purchases.
                        </p>

                       <div className='flex relative'>
                        <button className='text-white bg-green-500 rounded-full px-4 py-2 text-sm font-light'>
                            Open Account
                        </button>
                        <div className='bg-white w-[35px] h-[35px] rounded-full absolute top-0 left-28 flex justify-center items-center'><MdArrowOutward  className='text-gray-700'/></div>
                        </div>


                    </div>
                    <div>
                    <Image
                            src="/heroPic.png"
                            alt="Background"
                            width="300"
                            height="600"
                            layout=""
                            objectFit=""
                            quality={100} // Optional: Adjust quality
                            className="-z-10" // Ensure it stays in the background
                        />

                    </div>
                </div>


            </div>
        </div>
        <div className='h-[70px] w-[100%] bg-green-800 flex justify-center items-center'>
    <div className='flex gap-7 justify-center items-center'>
        {logo.map((logo, index) => (
        <img
          key={index}
          src={logo}
          width={100}
          alt={`logo image ${index + 1}`}
          className=""
        />
      ))}
    </div>
        </div>
        </>
    )
}

export default Hero





// import React from 'react'

// const Hero = () => {
//   return (
//     <div className="bg-red-600">
//         <p className='text-green-500 text-xl'>hello mac</p>
      
//     </div>
//   )
// }

// export default Hero
