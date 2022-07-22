import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from "axios";
const InfluencerRegister = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [category, setCategory] = useState("")
  const [ytname, setYtname] = useState("")
  const [ytLink, setYtLink] = useState("")
  const [ytSubs, setYtSubs] = useState("")
  const [instaLink, setinstaLink] = useState("")
  const [instaFollo, setinstaFollo] = useState("")
  const [instaEngRate, setinstaEngRate] = useState("")

  const handleInfluencer = async (e) => {
    e.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "name": name,
      "email": email,
      "contact": phone,
      "category": category,
      "ytname": ytname,
      "ytlink": ytLink,
      "ytsubs": ytSubs,
      "priceForIntegratedVideo": "not known",
      "priceForDedicatedVideo": "not known",
      "instaLink": instaLink,
      "instaFollowers": instaFollo,
      "instaEngRate": instaEngRate,
      "facebookLink": "unknown",
      "twitterLink": "unknown",
      "linkdinLink": "unknown"
    });

    let reqOptions = {
      url: `https://infmark.herokuapp.com/api/v1/social/reginfluencer`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }

    try {
      const response = await axios.request(reqOptions)
      setName("")
      setPhone("")
      setEmail("")
      setCategory("")
      setYtname("")
      setYtLink("")
      setYtSubs("")
      setinstaLink("")
      setinstaFollo("")
      setinstaEngRate("")

      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

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
          <form onSubmit={handleInfluencer}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                onChange={e => setName(e.target.value)}
                value={name}
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
                onChange={e => setPhone(e.target.value)}
                value={phone}
                type="text"
                name="phone"
                id="phone"
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
                onChange={e => setEmail(e.target.value)}
                value={email}
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
                onChange={e => setCategory(e.target.value)}
                value={category}
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
                onChange={e => setYtname(e.target.value)}
                value={ytname}
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
                onChange={e => setYtLink(e.target.value)}
                value={ytLink}
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
                onChange={e => setYtSubs(e.target.value)}
                value={ytSubs}
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
                onChange={e => setinstaLink(e.target.value)}
                value={instaLink}
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
                onChange={e => setinstaFollo(e.target.value)}
                value={instaFollo}
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
                Instagram engagement rate
              </label>
              <input
                onChange={e => setinstaEngRate(e.target.value)}
                value={instaEngRate}
                type="text"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type='submit'
                className="text-white bg-purple-700 font-mono hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default InfluencerRegister