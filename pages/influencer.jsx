import React from 'react'

const InfluencerRegister = () => {
  return (
    <>
      <section className="text-gray-700 pt-14 sm:pt-20">
        <div className="container px-5 pt-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-mono sm:text-3xl text-3xl font-medium text-center title-font text-gray-900 mb-4">
              Join the network
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do htmlFor you.
            </p>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center p-2 mb-10">
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
                htmlFor="contact"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Contact
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Contact"
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
                htmlFor="category"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                category?
              </label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="fitness, tech, gaming"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="budget"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Youtube name
              </label>
              <input
                type="text"
                name="ytname"
                id="budget"
                placeholder="Mr Freak"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="ytname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Youtube Link
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="ytname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Youtube subscribers
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="ytname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Youtube subscribers
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="ytname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Instagram
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="ytname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Instagram link
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="ytname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Instagram Followers
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            
            <div>
            <a
                className="text-white bg-purple-700 font-mono hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Register</a>
            </div>
          </htmlForm>
        </div>
      </div>
    </>

  )
}

export default InfluencerRegister