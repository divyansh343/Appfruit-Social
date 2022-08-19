import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <div className="py-16  bg-white">
                <div className="container mt-24 m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
                    <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
                        <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                            <h1 className="text-4xl text-gray-900 font-bold md:text-5xl">Your brands meet your targets as your <span className="text-blue-600">marketing companion.</span></h1>
                            <p className="text-lg">Increase brand awareness using our interesting influences. to provide you with the <span className="text-blue-600">Finest ROI</span></p>
                            <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">

                                <Link href="/influencer">
                                <button type="button" title="more about" className="w-full order-first py-3 px-6 text-center rounded-xl bg-blue-700 transition hover:bg-red-600 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                                        <span className="block text-white ">
                                            For Influencers
                                        </span>
                                    </button>
                                </Link>


                                <Link href="/brands">
                                    <button type="button" title="more about" className="w-full order-first py-3 px-6 text-center rounded-xl bg-blue-700 transition hover:bg-red-600 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                                        <span className="block text-white ">
                                            For Brands / Agency
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                            <div className="col-span-2 row-span-4">
                                <Image src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="rounded-full" width="640" height="960" alt="thesocialcharts" loading="lazy" />
                            </div>
                            <div className="col-span-2 row-span-2">
                                <Image src="https://images.unsplash.com/photo-1599824701954-d1d141704de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-full h-full object-cover object-top rounded-xl" width="640" height="640"  loading="lazy" alt="thesocialcharts" />
                            </div>
                            <div className="col-span-3 row-span-3">
                                <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG9mZmljZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="thesocialcharts" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}

export default Hero