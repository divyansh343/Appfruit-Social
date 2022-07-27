import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';
const Page = () => {
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            router.push('/')
        }
    }, [router])

    return (
        <div className="py-20 white font-mono">
            <div className="container m-auto px-6 text-black md:px-12 xl:px-6">
                <h2 className="mb-12 pt-4 text-center text-2xl font-mono text-gray-900 font-bold md:text-4xl">
                    Welcome admin, user
                </h2>
                <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <Link href="/admin/dashboard/brands">
                    <a >
                    <div className="row-span-2 p-6 border border-black rounded-xl bg-gray-50 text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center space-y-4">
                            <p className="text-gray-600 md:text-2xl"> Registerd Brands </p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none">The Social Charts</h6>
                                 
                            </div>
                        </div>
                    </div>
                    </a>
                    </Link>

                    <Link href="/admin/dashboard/influencer">
                    <a >
                    <div className="border-black p-6 border rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-gray-600 sm:2xl md:text-2xl"> Registerd influencers</p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none ">The Social Charts</h6>
                                 
                            </div>
                        </div>
                    </div>
                    </a>
                    </Link>

                    <Link href="/admin/dashboard/contacts">
                    <a >
                    <div className="border-black p-6 border rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-gray-600 sm:2xl md:text-2xl">Contacts feed</p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none ">The Social Charts</h6>
                            </div>
                        </div>
                    </div>
                    </a>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Page