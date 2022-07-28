// currently not included
import React from 'react'
import Link from 'next/link'
const Tesimonials = () => {
  return (
    <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
                    <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
                        <div className="flex flex-col items-center lg:flex-row">
                            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                                <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">What customers love about us</p>
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-3xl">Testimonials</h2>
                                <p className="my-6 text-lg text-gray-900">Don&apos;t just take our word for it, read from our extensive list of case studies and customer testimonials.</p>
                                <Link href="/" >
                                    <a className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10 rounded">View Case Studies</a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white shadow rounded">
                                    <div className="flex flex-col pr-8">
                                        <div className="relative pl-12">
                                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                                            </svg>
                                            <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">We’ve teamed up with the Social charts to create an array of affiliate campaigns. The team is highly agile, and they are always willing to help.⁣⁣</p>
                                        </div>

                                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm">
                                            Jayesh dabli
                                            {/* <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span> */}
                                        </h3>
                                    </div>
                                    {/* <Image className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""> */}
                                </blockquote>
                                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white shadow rounded">
                                    <div className="flex flex-col pr-10">
                                        <div className="relative pl-12">
                                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                                            </svg>
                                            <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">We know that in this competitive industry, it’s important to work with a partner who understands your goals like The Socail charts</p>
                                        </div>
                                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm">
                                            rimika agarwal
                                            {/* <span className="mt-1 text-sm leading-5 text-gray-500 truncate">-</span> */}
                                        </h3>
                                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                                    </div>
                                    {/* <Image className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""> */}
                                </blockquote>

                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Tesimonials
