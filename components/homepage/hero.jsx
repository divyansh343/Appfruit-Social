import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <>

<section className="bg-purple-200 dark:bg-gray-900 pt-7">
                    <div className="pl-10 grid max-w-screen-xl px-4 pt-32 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 tracking-normal leading-2 text-4xl font-extrabold  md:text-5xl xl:text-6xl dark:text-white last-of-type:">Your marketing companion, your Brands meets with Your Targets.</h1>
                            <p className="max-w-2xl mb-6 font-light text-4xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Driving profits to your door.</p>
                            <Link href="/influencer">
                                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-semibold text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                    For influencers
                                </a>
                            </Link>
                            <Link href="/brands">
                                <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base 
                                
                                font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                    Brands /Agency
                                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </Link>
                        </div>
                        <div className="hidden overflow-hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <Image src="https://images.unsplash.com/photo-1658120461867-9c9279a06d50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="mockup" width={350} height={440} />
                        </div>
                    </div>
                </section>

        </>



    )
}

export default Hero