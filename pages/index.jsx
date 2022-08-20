import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Hero from '../components/homepage/hero'
import Features from '../components/homepage/features'
import ConnectSection from '../components/homepage/connectSection'
import Gallery from '../components/homepage/gallery'
import WhyInfluencers from '../components/homepage/whyInfluencers'
import Faq from '../components/homepage/faq'
import ExaggerationSection from '../components/homepage/exaggerationSection'
export default function Home() {
    return (
        <>
            <div className='pt-0'>
                <Hero />
                <section className="px-2 py-32 bg-white md:px-0">
                    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-1/2 md:px-3">
                                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                        <span className="block xl:inline">Get to know your audience with us
                                        </span>
                                        <span className="block text-indigo-600 xl:inline">Tell Your Story!</span>
                                    </h1>
                                    <p className="mx-auto mt-2 text-base text-gray-900 sm:max-w-md lg:text-xl md:max-w-3xl">We help your brand convey the right message to it’s customers. We have worked with Social Media Influencers from All over India.</p>
                                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                        <Link href="/brands">
                                            <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                                                Get started
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                    <Image src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Influencer marketing agency"
                                        width={550}
                                        height={360}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Features />

                <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                            <Image
                                width={550}
                                height={360}
                                alt="social media marketing agency theSocialCharts"
                                src="https://images.unsplash.com/photo-1522204538344-922f76ecc041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
                        </div>

                        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                                Automate the process
                            </h2>
                            <p className="pt-4 pb-8 m-0 leading-7 text-gray-900 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                                Choose best fit creators with a proven and easy way to amplify your brand
                            </p>
                            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                                <li className="box-border relative py-1 pl-0 text-left text-gray-900 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-gray-900 bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> social media marketing strategy tailored to your needs
                                </li>
                                <li className="box-border relative py-1 pl-0 text-left text-gray-900 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-gray-900 bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> quality campaigns to reach their target audience.
                                </li>
                                <li className="box-border relative py-1 pl-0 text-left text-gray-900 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-gray-900 bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> We believe in organic process
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                                Companies deserve expert social media management.
                            </h2>
                            <p className="pt-4 pb-8 m-0 leading-7 text-gray-900 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                                Social media marketing strategy tailored to your needs, and then execute it with our expertise.d
                            </p>
                            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                                <li className="box-border relative py-1 pl-0 text-left text-gray-900 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-gray-900 bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Execute marketing is most critical part of business.
                                </li>
                                <li className="box-border relative py-1 pl-0 text-left text-gray-900 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-gray-900 bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> We believe in Data & analytics
                                </li>
                            </ul>
                        </div>

                        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                            <Image
                                width={550}
                                height={360}
                                alt="social media marketing agency in india"
                                src="https://images.unsplash.com/photo-1590402494693-bd0499aefe00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        </div>
                    </div>
                </section>

                {/* why do you need influencer */}

                <WhyInfluencers />

                <ConnectSection />

                {/* Associated brands */}

                <ExaggerationSection />

                {/* What everyone say about us */}



                {/* Faq section */}

                <Faq />


                {/* showoff image gallery */}
                
                <Gallery pagefor="homePage" />
            </div>
        </>
    )
}