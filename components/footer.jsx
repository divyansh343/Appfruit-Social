const Footer = () => {
    return (
        <>
            <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
                <div className="container mx-auto px-4">
                    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <h5 className="text-xl font-bold mb-6">Features</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cool stuff</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Stuff for developers</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another one</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Last time</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 className="text-xl font-bold mb-6">Resources</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">About</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl font-bold mb-6">Help</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        {/* social icons */}
                        

                    </div>

                    <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
                        <div className="sm:w-full px-4 md:w-1/6">
                            <strong>FWR</strong>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Address</h6>
                            <address className="not-italic mb-4 text-sm">
                                123 6th St.<br />
                                Melbourne, FL 32904
                            </address>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Free Resources</h6>
                            <p className="mb-4 text-sm">Use our HTML blocks for <strong>FREE</strong>.<br />
                                <em>All are MIT License</em></p>
                        </div>
                        <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                            <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer