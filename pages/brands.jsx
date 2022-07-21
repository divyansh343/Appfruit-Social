const BrandRegister = () => {
    return (
        <>
            <section className="text-gray-700 pt-14">
                <div className="container px-5 py-6 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="font-mono sm:text-3xl text-3xl font-medium text-center title-font text-gray-900 mb-4">
                            Let&apos;s talk business
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what
                            can do htmlFor you.
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <htmlForm>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="brand"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Name of Brand / Agency?
                            </label>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                placeholder=""
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="budget"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Budget Overview
                            </label>
                            <input
                                type="text"
                                name="budget"
                                id="budget"
                                placeholder=""
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                How can we help you?
                            </label>
                            <textarea
                                rows="4"
                                name="description"
                                id="description"
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className="hover:shadow-htmlForm rounded-md bg-yellow-500 py-3 px-8 text-base font-semibold font-mono text-black outline-none border-black border-spacing-3"
                            >
                                Submit
                            </button>
                        </div>
                    </htmlForm>
                </div>
            </div>
        </>
    )
}

export default BrandRegister