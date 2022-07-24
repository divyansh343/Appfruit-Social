import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Hero from '../components/homepage/hero'
import Features from '../components/homepage/features'
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
                            {/* <Image src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "> */}
                        </div>

                        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                                Boost Productivity
                            </h2>
                            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                                Build an atmosphere that creates productivity in your organization and your company culture.
                            </p>
                            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                                </li>
                                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Speed past your competition
                                </li>
                                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Learn the top techniques
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                                Automated Tasks
                            </h2>
                            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                                Save time and money with our revolutionary services. We are the leaders in the industry.
                            </p>
                            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Automated task management workflow
                                </li>
                                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Detailed analytics for your data
                                </li>
                                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Some awesome integrations
                                </li>
                            </ul>
                        </div>

                        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                            {/* <Image src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"> */}
                        </div>
                    </div>
                </section>

                {/* why do you need influencer */}

                <section className="py-20 bg-gray-50">
                    <div className="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                                <div className="w-full lg:max-w-md">
                                    <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed with all the tools you need to succeed!</h2>
                                    <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">It&apos;s never been easier to build a business of your own. Our tools will help you with the following:</p>
                                    <ul>
                                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                                            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                            <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
                                        </li>
                                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                                            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                            <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
                                        </li>
                                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                            <span className="font-medium text-gray-500">100% Protection and Security for Your App</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                                {/* <Image className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image"> */}

                            </div>
                        </div>
                    </div>
                </section>

                {/* Associated brands */}

                <section className="py-12 sm:py-16 bg-white">
                    <div className="max-w-7xl px-10 mx-auto sm:text-center">
                        <p className="text-blue-500 font-medium uppercase">Our Application Integrations</p>
                        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">Connect with Your Favorite Apps.</h2>
                        <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">We&apos;ve built integrations with some of your favorite services.<br className="lg:hidden hidden sm:block" /> Check&apos;em out below 👇</p>
                        <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-6 gap-10 my-12 sm:my-16">
                            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                <svg className="w-9 h-auto" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M159.999 128.056a76.55 76.55 0 0 1-4.915 27.024 76.745 76.745 0 0 1-27.032 4.923h-.108c-9.508-.012-18.618-1.75-27.024-4.919A76.557 76.557 0 0 1 96 128.056v-.112a76.598 76.598 0 0 1 4.91-27.02A76.492 76.492 0 0 1 127.945 96h.108a76.475 76.475 0 0 1 27.032 4.923 76.51 76.51 0 0 1 4.915 27.02v.112zm94.223-21.389h-74.716l52.829-52.833a128.518 128.518 0 0 0-13.828-16.349v-.004a129 129 0 0 0-16.345-13.816l-52.833 52.833V1.782A128.606 128.606 0 0 0 128.064 0h-.132c-7.248.004-14.347.62-21.265 1.782v74.716L53.834 23.665A127.82 127.82 0 0 0 37.497 37.49l-.028.02A128.803 128.803 0 0 0 23.66 53.834l52.837 52.833H1.782S0 120.7 0 127.956v.088c0 7.256.615 14.367 1.782 21.289h74.716l-52.837 52.833a128.91 128.91 0 0 0 30.173 30.173l52.833-52.837v74.72a129.3 129.3 0 0 0 21.24 1.778h.181a129.15 129.15 0 0 0 21.24-1.778v-74.72l52.838 52.837a128.994 128.994 0 0 0 16.341-13.82l.012-.012a129.245 129.245 0 0 0 13.816-16.341l-52.837-52.833h74.724c1.163-6.91 1.77-14 1.778-21.24v-.186c-.008-7.24-.615-14.33-1.778-21.24z" fill="#FF4A00"></path></svg>
                                <p className="font-bold mt-4">Zapier</p>
                                <p className="mt-2 text-sm text-gray-500">Connect to 1,000+ apps</p>
                            </div>
                            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                <svg className="w-9 h-auto" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"></path><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"></path><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"></path><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"></path></g></svg>
                                <p className="font-bold mt-4">Slack</p>
                                <p className="mt-2 text-sm text-gray-500">Messaging Platform</p>
                            </div>
                            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                <svg className="w-9 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 262" fill="none"><path d="M192.277 86.567V55.5a23.953 23.953 0 0 0 13.815-21.594v-.727a23.998 23.998 0 0 0-23.934-23.934h-.726a24 24 0 0 0-23.935 23.934v.727A23.949 23.949 0 0 0 171.312 55.5v31.132a67.887 67.887 0 0 0-32.278 14.202l-85.44-66.541A27.259 27.259 0 1 0 40.828 50.9l84.004 65.395a68.079 68.079 0 0 0 1.049 76.757l-25.564 25.565a21.93 21.93 0 0 0-6.343-1.033 22.187 22.187 0 0 0-20.502 13.699 22.19 22.19 0 1 0 42.693 8.492 21.858 21.858 0 0 0-1.033-6.343l25.29-25.29a68.198 68.198 0 0 0 58.778 11.746 68.196 68.196 0 0 0 45.342-39.203 68.198 68.198 0 0 0-3.13-59.858 68.188 68.188 0 0 0-49.183-34.26h.048Zm-10.523 102.354a34.988 34.988 0 0 1-34.225-41.871 34.99 34.99 0 0 1 69.295 6.898 34.99 34.99 0 0 1-34.989 34.989" fill="#FF7A59"></path></svg>
                                <p className="font-bold mt-4">Hubspot</p>
                                <p className="mt-2 text-sm text-gray-500">Customer Relations</p>
                            </div>
                            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                <svg className="w-9 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 190" fill="none"><path d="M115.482 49.956V189.13H0L115.482 49.956ZM115.482 0A57.587 57.587 0 0 1 98.57 40.756a57.793 57.793 0 0 1-40.83 16.882c-15.313 0-30-6.073-40.828-16.882A57.586 57.586 0 0 1 0 0h115.482ZM134.507 189.13a57.586 57.586 0 0 1 16.912-40.757 57.792 57.792 0 0 1 40.829-16.881c15.313 0 30 6.072 40.828 16.881a57.586 57.586 0 0 1 16.912 40.757H134.507ZM134.507 139.174V0h115.494L134.507 139.174Z" fill="#03363D"></path></svg>
                                <p className="font-bold mt-4">Zendesk</p>
                                <p className="mt-2 text-sm text-gray-500">Customer Messaging</p>
                            </div>
                            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                <svg className="w-9 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 215" fill="none"><path d="M0 162.02V69.962c0-3.137 3.137-5.378 6.095-4.302l106.849 41.592c3.047 1.165 3.316 5.378.448 6.812L6.633 166.144C3.585 167.668 0 165.427 0 162.02Z" fill="#F82B60"></path><path d="M123.611 94.792 16.942 51.766c-3.406-1.434-3.406-6.275 0-7.709L119.31 1.479c4.661-1.972 9.95-1.972 14.7 0l102.367 42.578c3.406 1.434 3.406 6.275 0 7.709L130.155 94.792a8.3 8.3 0 0 1-6.544 0Z" fill="#FCB400"></path><path d="m139.835 214.369 107.386-41.323c1.703-.628 2.778-2.241 2.778-4.034V69.424c0-3.047-2.958-5.11-5.736-4.033l-107.387 41.323c-1.703.627-2.778 2.241-2.778 4.033v99.588c0 3.048 2.958 5.109 5.737 4.034Z" fill="#18BFFF"></path><path d="M112.944 107.252 6.095 65.66c-1.434-.538-2.868-.269-4.033.448l75.295 65.525 36.035-17.569c2.868-1.523 2.599-5.736-.448-6.812Z" fill="#BA2048"></path></svg>
                                <p className="font-bold mt-4">Airtable</p>
                                <p className="mt-2 text-sm text-gray-500">Data Management</p>
                            </div>
                            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                <svg className="w-9 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" fill="none"><path d="m146.101 236.335-42.529-41.47 91.337-93.269 44.032 43.155-92.84 91.584Z" fill="#8AB4F8"></path><path d="M146.283 52.982 103.907 9.717l-92.659 91.779c-11.944 11.944-11.944 31.308 0 43.265l91.267 91.863 43.156-40.37-69.536-73.125 70.148-70.147Z" fill="#4285F4"></path><path d="M238.329 102.209 146.45 10.332c-11.958-11.957-31.35-11.957-43.308 0-11.959 11.958-11.959 31.35 0 43.308l91.879 91.876c11.958 11.958 31.35 11.958 43.308 0 11.959-11.958 11.959-31.349 0-43.307Z" fill="#8AB4F8"></path><path d="M124.092 246.372c16.53 0 29.93-13.4 29.93-29.93 0-16.529-13.4-29.929-29.93-29.929-16.531 0-29.93 13.4-29.93 29.929 0 16.53 13.399 29.93 29.93 29.93Z" fill="#246FDB"></path></svg>
                                <p className="font-bold mt-4">Google Tag Manager</p>
                                <p className="mt-2 text-sm text-gray-500">Web Tag Manager</p>
                            </div>
                            {/* <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                <svg className="w-9 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlSpace="preserve"><path d="M362.9 243.5c3.1-.4 6.2-.4 9.3 0 1.7-3.8 2-10.5.5-17.6-2.2-10.7-5.3-17.2-11.5-16.2s-6.5 8.8-4.2 19.5c1.1 5.9 3.4 11.1 5.9 14.3zm-53.7 8.5c4.5 2 7.2 3.3 8.3 2.1 1.9-1.9-3.5-9.4-12.1-13.1-10.2-4.2-21.8-2.8-30.7 3.7-3 2.2-5.8 5.2-5.4 7.1.9 3.7 10-2.7 22.7-3.5 6.9-.5 12.7 1.7 17.2 3.7zm-9 5.1c-9.1 1.4-15 6.5-13.5 10.1.9.3 1.2.8 5.2-.8 6-2.3 12.4-2.9 18.8-2 2.9.3 4.3.5 5-.5 1.3-2.1-5.8-7.9-15.5-6.8zm54.2 17.2c3.4-6.9-10.9-14-14.3-7-3.4 6.9 11 13.9 14.3 7zm15.7-20.5c-7.7-.1-8 15.8-.3 16 7.8 0 8.1-15.9.3-16zm-219.2 79c-1.3.3-6 1.5-8.5-2.4-5.2-8 11.1-20.4 3-35.9-9.1-17.5-27.9-13.6-35.1-5.6-8.7 9.6-8.7 23.6-5 24.1 4.3.6 4.1-6.5 7.4-11.7 3.9-6 11.8-7.7 17.8-3.8 0 0 .1 0 .1.1 11.6 7.6 1.4 17.8 2.3 28.7 1.4 16.7 18.5 16.4 21.6 9 .4-.7.3-1.7-.2-2.3 0 1.1.6-1.1-3.4-.2zm300.4-17.1c-3.4-11.8-2.6-9.2-6.8-20.6 2.5-3.7 15.3-24.1-3.1-43.3-10.4-10.9-34-16.6-41.2-18.6-1.5-11.4 4.7-58.8-21.6-83.2 20.8-21.6 33.8-45.4 33.8-65.8-.1-39.2-48.3-51.1-107.7-26.5L292.1 63c-.1-.1-22.8-22.3-23.1-22.6-67.6-59-279.4 176.3-211.7 233.5l14.8 12.5c-4 10.7-5.4 22.2-4.1 33.6 3.4 33.5 36.1 60.6 67.7 60.5 57.9 133.4 268.5 133.6 323 3 1.7-4.5 9.1-24.7 9.1-42.5s-10.1-25.3-16.5-25.3zM134.5 364c-22.9-.6-47.6-21.2-50-45.6-6.2-61.4 74.4-75.4 84.2-12.4 4.6 29.7-4.7 58.6-34.2 58zM116 249.5c-15.2 3-28.6 11.6-36.8 23.5-4.9-4.1-14-12-15.6-15-13-24.9 14.3-73.2 33.4-100.4C144.2 90.2 218.1 39.2 252.4 48.4c5.6 1.6 24 22.9 24 22.9s-34.2 19-65.9 45.5c-42.9 33-75.2 80.8-94.5 132.7zm239.4 101.4s-35.8 5.3-69.7-7.1c6.2-20.2 27.1 6.1 96.6-13.8 15.3-4.4 35.4-13 51.1-25.4 3.4 7.8 5.8 16 7.1 24.3 3.7-.7 14.3-.5 11.5 18.1-3.3 19.9-11.8 36.1-26 51-8.9 9.6-19.5 17.6-31.2 23.4-6.5 3.4-13.4 6.3-20.4 8.6-53.6 17.5-108.5-1.7-126.3-43.1-1.4-3.2-2.6-6.4-3.6-9.8-7.5-27.3-1.1-60 18.9-80.6 1.2-1.3 2.5-2.9 2.5-4.8-.2-1.7-.8-3.3-1.9-4.6-7-10.2-31.3-27.5-26.4-61 3.5-24.1 24.5-41 44.2-40l5 .3c8.5.5 15.9 1.6 22.9 1.9 11.7.5 22.3-1.2 34.7-11.6 4.2-3.5 7.6-6.6 13.3-7.5 4.7-1.2 9.6-.3 13.6 2.2 10 6.7 11.4 22.8 11.9 34.6.3 6.7 1.1 23.1 1.4 27.7.6 10.7 3.4 12.2 9.1 14 3.2 1.1 6.2 1.8 10.5 3.1 13.2 3.7 21 7.5 26.1 12.3 2.6 2.5 4.2 5.8 4.8 9.3 1.6 11.4-8.8 25.5-36.4 38.2-46.8 21.7-93.9 14.5-100.7 13.7-20.2-2.7-31.7 23.4-19.6 41.2 22.7 33.5 122.7 20 151.7-21.4.7-1 .1-1.6-.7-1-41.9 28.6-97.3 38.3-128.8 26.1-4.8-1.9-14.8-6.5-16-16.7 43.7 13.5 71.2.7 71.2.7s2.2-2.6-.4-2.3zM203.2 157.3c16.8-19.4 37.4-36.3 56-45.7.3-.2.8-.1 1 .3.1.2.1.5 0 .7-1.5 2.7-4.3 8.4-5.2 12.7-.1.4.2.8.6.9.2.1.4 0 .6-.1 11.5-7.8 31.6-16.3 49.1-17.3.4 0 .8.3.8.7 0 .3-.1.5-.3.7-2.9 2.2-5.5 4.8-7.7 7.8-.2.3-.2.8.2 1 .1.1.3.1.4.1 12.3.1 29.7 4.4 41.1 10.8.8.4.2 1.9-.6 1.7-69.7-16-123.4 18.6-134.8 26.9-.4.2-.8.1-1.1-.2-.3-.4-.3-.8-.1-1z"></path></svg>
                <p className="font-bold mt-4">Mailchimp</p>
                <p className="mt2 text-sm text-gray-500">Email Marketing</p>
            </div> */}
                            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                <svg className="h-16 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 343" fill="none"><path d="M163.818 0H23.736C10.59 0 0 10.663 0 23.736v294.771c0 13.146 10.663 23.737 23.736 23.737H226.19c13.147 0 23.737-10.664 23.737-23.737V85.159h-86.109V0Z" fill="#34A853"></path><path d="M250.001 85.16h-86.182V0l86.182 85.16Z" fill="#188038"></path><path d="M46.89 132.194V245.18h156.149V132.194H46.889Zm136.722 19.354v27.388h-49.08v-27.388h49.08Zm-68.507 0v27.388H66.317v-27.388h48.788Zm-48.788 74.131v-27.388h48.788v27.388H66.317Zm68.215 0v-27.388h49.08v27.388h-49.08Z" fill="#fff"></path></svg>
                                <p className="font-bold mt-4">Google Sheets</p>
                                <p className="mt-2 text-sm text-gray-500">Spreadsheet</p>
                            </div>
                        </div>
                        <a href="#_" className="px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-blue-600 bg-blue-500">View All Integrations</a>
                    </div>
                </section>

                {/* What everyone say about us */}

                <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
                    <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
                        <div className="flex flex-col items-center lg:flex-row">
                            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                                <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">Our customers love our product</p>
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Testimonials</h2>
                                <p className="my-6 text-lg text-gray-600">Don&apos;t just take our word for it, read from our extensive list of case studies and customer testimonials.</p>
                                <a href="#_" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10 rounded">View Case Studies</a>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white shadow rounded">
                                    <div className="flex flex-col pr-8">
                                        <div className="relative pl-12">
                                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                                            </svg>
                                            <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Awesome product! And the customer service is exceptionally well.</p>
                                        </div>

                                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm">
                                            Jane Cooper
                                            <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
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
                                            <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">I can&apos;t express enough, how amazing this service has been for my company.</p>
                                        </div>
                                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm">
                                            John Doe
                                            <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                                        </h3>
                                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                                    </div>
                                    {/* <Image className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""> */}
                                </blockquote>
                                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white shadow rounded">
                                    <div className="flex flex-col pr-10">
                                        <div className="relative pl-12">
                                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                                            </svg>
                                            <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">I can&apos;t express enough, how amazing this service has been for my company.</p>
                                        </div>

                                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm ">
                                            John Smith
                                            <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                                        </h3>
                                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                                    </div>
                                    {/* <Image className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""> */}
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faq section */}

                <section className="text-gray-700">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                                Frequently Asked Question
                            </h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                The most common questions about how our business works and what
                                can do for you.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How Long is this site live?
                                    </summary>

                                    <span>
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                        Can I install/upload anything I want on there?
                                    </summary>

                                    <span>
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How can I migrate to another site?
                                    </summary>

                                    <span>
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </span>
                                </details>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Can I change the domain you give me?
                                    </summary>

                                    <span className="px-4 py-2">
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How many sites I can create at once?
                                    </summary>

                                    <span className="px-4 py-2">
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How can I communicate with you?
                                    </summary>

                                    <span className="px-4 py-2">
                                        Laboris qui labore cillum culpa in sunt quis sint veniam.
                                        Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                        minim velit nostrud pariatur culpa magna in aute.
                                    </span>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>

                {/* showoff image gallery */}
                <div className="container mx-auto px-4">

                    {/* <section className="py-8 px-4">
                  <div className="flex flex-wrap -mx-4">
                    <div className="hidden md:block md:w-1/2 px-4">
                      <div className="h-full w-full bg-cover rounded shadow-md" style="background-image: url('https://source.unsplash.com/random/1280x720')"></div>
                    </div>
                    <div className="md:w-1/2 h-auto px-4">
                      <div className="mb-8"><Image className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                      <div><Image className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                    </div>
                  </div>
                </section>
                          
                <section className="py-8 px-4">
                  <div className="flex flex-wrap -mx-4">
                    <div className="md:w-1/2 px-4 mb-8 md:mb-0"><Image className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                    <div className="md:w-1/2 px-4 mb-8 md:mb-0"><Image className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                  </div>
                </section> */}

                    <section className="pt-8 px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md" width={400} height={340} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md" width={400} height={340} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md" width={400} height={340} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md" width={400} height={340} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md" width={400} height={340} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md" width={400} height={340} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                        </div>
                    </section>

                    <section className="py-8 px-4">
                        <div className="flex flex-wrap -mx-4 -mb-8">
                            <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                            <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

