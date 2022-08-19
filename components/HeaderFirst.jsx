import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast';

const getToken = () => {
    const tok = localStorage.getItem('token')
    return tok;
}

const HeaderFirst = () => {
    const router = useRouter()
    const [token, settoken] = useState(false)

    useEffect(() => {
        settoken(getToken())
    }, [token])

    const logOutUser = () => {
        if (localStorage.getItem('token') === null) {
            toast("user alredy logged Out");
        }
        const token = localStorage.clear();
        settoken(false)
        router.push('/')
        toast.success("user logged Out");
    }
    return (
        <>
            <div className="relative w-full">
                <header>
                    <input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
                    <nav className="fixed z-10 w-full border-b bg-white backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-white lg:fixed">
                        <div className="container m-auto px-2 md:px-12 lg:px-7">
                            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                                <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                                    <Link href="/" >
                                        <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                                            <span className="mb-0 self-center text-xl font-semibold whitespace-nowrap sm:text-lg hover:border-b-1 dark:text-whit">
                                                <Image src="/logo.png"
                                                    height={45}
                                                    width={45}
                                                    className="h-6 mr-3 sm:h-9" alt="theSocialCharts"
                                                />
                                            </span>
                                            <span className="pl-2 self-center text-xl tracking-3 font-semibold whitespace-nowrap  hover:border-b-1 dark:text-white lg:text-xl">
                                                The Social Charts.
                                            </span>
                                        </a>
                                    </Link>
                                    <label htmlFor="hbr" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                        <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                        <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                    </label>
                                </div>

                                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
                                    <div className="text-gray-600 lg:pr-4">
                                        <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-lg lg:flex lg:space-y-0">
                                            <li>
                                                <Link href="/brands">
                                                    <a
                                                        className="block py-2 pl-3 pr-4 mx-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For brands</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/influencer">
                                                    <a
                                                        className="block py-2 pl-3 pr-4 mx-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For Influencers</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/contact">
                                                    <a
                                                        className="block py-2 pl-3 pr-4 mx-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">

                                        {token &&
                                            <>
                                                <Link href="/admin/dashboard">
                                                    <a
                                                        className="mx-3 text-white bg-blue-600 hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Dashboard</a>
                                                </Link>
                                                <a
                                                    onClick={logOutUser}
                                                    className="mx-3 text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Logout</a>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        </>
    )
}

export default HeaderFirst