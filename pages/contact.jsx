import React from 'react'
import Contact from '../components/contact'

const contact = () => {
    return (
        <>
            <Contact />
            <div className="2xl:container 2xl:mx-auto md:py-12 py-9 mx-4">
            <div className="bg-white dark:bg-gray-800 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
                <div className="">
                    {/* <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1.svg" alt="delivery">
                    <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1dark.svg" alt="delivery"> */}
                    <h3 className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">Address</h3>
                    <p className="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Indore,MP India</p>
                </div>
    
    
                <div className="">
                    {/* <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2.svg" alt="Customer Care"> */}
                    {/* <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2dark.svg" alt="Customer Care"> */}
                    <h3 className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">Mail address</h3>
                    <p className="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full"><span className="font-semibold cursor-pointer"></span> <span className="font-semibold cursor-pointer hover:text-[#6102d3]"><a href="mailto:hello@thesocialcharts.com">hello@thesocialcharts.com</a></span></p>
                </div>
    
            </div>
        </div>
    
        </>
    )
}

export default contact
