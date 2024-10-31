import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <Image
                        src="/upgrade.svg"
                        alt="Background"
                        width="300"
                        height="300"
                        layout=""
                        objectFit=""
                        quality={100}
                        className="mt-[38px]"
                    />

                </div>


                <div>
                    <Image
                        src="/playstore.png"
                        alt="Background"
                        width="250"
                        height="250"
                        layout=""
                        objectFit=""
                        quality={100}
                        className="mt-[38px]"
                    />

                </div>


                <div><p className='text-black font-normal text-center text-sm mt-7'>Personal Loan
                    One Card
                    Savings
                    Checking
                    Contact
                    Help
                    Support</p></div>



                <div className='mt-5'>
                    <Image
                        src="/social.png"
                        alt="Background"
                        width="150"
                        height="150"
                        layout=""
                        objectFit=""
                        quality={100}
                        className="mt-[38px]"
                    />

                </div>
                <div><p className='text-black font-extralight text-center text-sm mt-3'>Send Your Feedback :
                    moc.edargpu@tcatnoc</p></div>


                <div><p className='text-black font-normal text-center text-sm mt-3'>Privacy Policy   |   Terms & Condition   |   Cookie Notice   |   Copyright Policy   |   Data Policy    </p></div>

                <div><p className='text-black font-extralight text-center text-sm my-5'>© 2024 Design Monks. All rights reserved.</p></div>
            </div>


        </div>
    )
}

export default Footer
