import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast';

const getToken = () => {
  const tok = localStorage.getItem('token')
  return tok;
}
const Header = () => {
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
      <header className="fixed w-full navbar">
        <nav className="bg-white
         py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <Link href="/" >
              <a className="flex items-center">
                {/* <Image src="/public/logo.png"
                layout='fill'
                 className="h-6 mr-3 sm:h-9" alt="Landwind Logo" /> */}
                <span className="mb-0 self-center text-xl font-semibold whitespace-nowrap sm:text-lg hover:border-b-1 dark:text-whit">
                  <Image src="/logo.png"
                    height={45}
                    width={45}
                    className="h-6 mr-3 sm:h-9" alt="theSocialCharts"
                  />
                </span>
                {/* <div className='invisible hidden lg:visible lg:inline-block'> */}
                  <span className="pl-2 self-center text-xl tracking-3 font-semibold whitespace-nowrap  hover:border-b-1 dark:text-white lg:text-xl">
                    The Social Charts.
                  </span>
                {/* </div> */}
              </a>
            </Link>

            <div className="flex items-center lg:order-2">
              <div className='invisible hidden lg:visible lg:inline-block'>
                <Link href="/brands">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 sm:text-lg">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                </Link>
              </div>
              {/* <Link href="/brands">
                <a
                  className="text-white bg-purple-700 font-mono hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800" >Get Started
                </a>
              </Link> */}
              {
                token &&
                <a
                  onClick={logOutUser}
                  className="mx-3 text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Logout</a>
              }

              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 text-lg  lg:flex-row lg:space-x-8 lg:mt-0">

                {/* <li>
                  <Link href="/test">
                    <a href="#"
                    </Link>
                    className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">test</a>
                </li> */}
                <li>
                  <Link href="/brands">
                    <a
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For brands / Agencies</a>
                  </Link>
                </li>
                <li>
                  <Link href="/influencer">
                    <a
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For Influencers</a>
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    <a
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact us</a>
                  </Link>
                </li>

                {token &&
                  <li>
                    <Link href="/admin/dashboard">
                      <a
                        className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">dashboard</a>
                    </Link>
                  </li>
                }

              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header