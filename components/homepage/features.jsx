import React from 'react'

const Features = () => {
  return (
    <section className="px-4 py-20 bg-purple-200">
                    <div className="container max-w-6xl mx-auto">
                        <h2 className="text-4xl font-semibold font-mono tracking-tight text-center">Influencer Marketing Services</h2>
                        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 rounded">
                                <div className="p-3 text-white bg-blue-500 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-800">Youtube Influencers</h4>
                                <p className="text-base text-center font-mono text-gray-600">Collaborate with top, high-reach YouTube channels to feature your brand, deliver brand messaging, and engage targeted audiences. testing, targeting, and analytics to measure the effectiveness of campaigns are all included in this one-stop solution</p>
                            </div>

                            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded">
                                <div className="p-3 text-white bg-blue-500 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-800">Social Influencers</h4>
                                <p className="text-base text-center font-mono text-gray-600">We are a marketing agency that specializes in influencer marketing. We work with brands to find the best influencers for their needs and create custom campaigns to reach their target audience to deliver a more effective, cost-effective marketing strategy..</p>
                            </div>

                            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded">
                                <div className="p-3 text-white bg-blue-500 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                                </div>
                                <h4 className="text-2xl text-center font-bold text-gray-800">Social Media Marketing</h4>
                                <p className="text-base text-center font-mono text-gray-600">We can help you reach the widest audience possible, build an engaged customer base, and grow your business. We can help you create a social media marketing strategy tailored to your needs, and then execute it with our expertise.</p>
                            </div>

                            {/* <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded">
                                <div className="p-3 text-white bg-blue-500 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                                </div>
                                <h4 className="text-xl font-medium text-gray-700">Developer Tools</h4>
                                <p className="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
                            </div>

                            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded">
                                <div className="p-3 text-white bg-blue-500 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="9.5" y1="11" x2="9.51" y2="11"></line><line x1="14.5" y1="11" x2="14.51" y2="11"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path></svg>
                                </div>
                                <h4 className="text-xl font-medium text-gray-700">Building Blocks</h4>
                                <p className="text-base text-center text-gray-500">The right kind of building blocks to take your company to the next level.</p>
                            </div>

                            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded">
                                <div className="p-3 text-white bg-blue-500 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                                </div>
                                <h4 className="text-xl font-medium text-gray-700">Coupons</h4>
                                <p className="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
                            </div> */}

                        </div>
                    </div>
                </section>

  )
}

export default Features