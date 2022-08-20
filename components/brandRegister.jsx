import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from "axios";
import Gallery from './homepage/gallery';
import WhyInfluencers from './homepage/whyInfluencers';
import ExaggerationSection from './homepage/exaggerationSection';
const BrandRegister = () => {
    
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [budget, setBudget] = useState("")
    const [description, setDescription] = useState("")

    const handleBrand = async (e) => {
        e.preventDefault();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "name": name,
            "brand": brand,
            "email": email,
            "phone": phone,
            "influencertype": "unknown",
            "description": description,
            "budget": budget
        });

        let reqOptions = {
            url: `https://infmark.herokuapp.com/api/v1/social/regbrand`,
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        try {
            const response = await axios.request(reqOptions)
            toast.success(response.data.message)
            setName("")
            setPhone("")
            setEmail("")
            setBrand("")
            setBudget("")
            setDescription("")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            {/* <div className="flex items-center justify-center p-2 mb-10">
                <div className="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleBrand}>
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
                                placeholder=""
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
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="9000050000"
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
                                htmlFor="brand"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Name of Brand / Agency?
                            </label>
                            <input
                                onChange={e => setBrand(e.target.value)}
                                value={brand}
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
                                onChange={e => setBudget(e.target.value)}
                                value={budget}
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
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                                rows="4"
                                name="description"
                                id="description"
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className="text-white bg-purple-700 font-mono hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Submit</button>
                        </div>
                    </form>
                </div>
            </div> */}
            <div className="bg-white sm:mx-32 lg:mx-32 py-20 xl:mx-72 ">
                <div className="flex justify-between container mx-auto">
                    <div className="w-full">
                        <div className="mt-4 px-4">
                            {/* <h1 className="text-3xl font-semibold py-7 px-5">addbyme</h1> */}
                            <h1 className="font-thinner flex text-4xl pt-10 px-5">Let&apos;s talk business
                            </h1>
                            <form onSubmit={handleBrand} className="mx-5 my-5">

                                <label className="relative block p-3 border-2 border-black rounded" htmlFor="name">
                                    <span className="text-md font-semibold text-zinc-900" htmlFor="name">
                                        Name
                                    </span>
                                    <input 
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="name" type="text" placeholder="Your name" />
                                </label>

                                <label className="relative block p-3 border-2 my-3 border-black rounded" htmlFor="brand">
                                    <span className="text-md font-semibold text-zinc-900" htmlFor="name">
                                        Brand Name
                                    </span>
                                    <input 
                                    onChange={e => setBrand(e.target.value)}
                                    value={brand}
                                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="brand" type="text" placeholder="Brand name" />
                                </label>

                                <label className="relative block p-3 border-2 my-3 border-black rounded" htmlFor="email">
                                    <span className="text-md font-semibold text-zinc-900" htmlFor="name">
                                        Email
                                    </span>
                                    <input
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="email" type="email" placeholder="Your email" />
                                </label>

                                <label className="relative block p-3 border-2 my-3 border-black rounded" htmlFor="phone">
                                    <span className="text-md font-semibold text-zinc-900" htmlFor="name">
                                        Phone
                                    </span>
                                    <input 
                                    onChange={e => setPhone(e.target.value)}
                                    value={phone}
                                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="phone" type="text" placeholder="Your contact no." />
                                </label>

                                <label className="relative block p-3 border-2 my-3 border-black rounded" htmlFor="phone">
                                    <span className="text-md font-semibold text-zinc-900" htmlFor="budget">
                                        Budget estimated
                                    </span>
                                    <input 
                                    onChange={e => setBudget(e.target.value)}
                                    value={budget}
                                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="budget" type="text" placeholder="How much you can spend." />
                                </label>

                                <label className="relative block p-3 border-2 my-4 border-black rounded" htmlFor="description">
                                    <span className="text-md font-semibold text-zinc-900" htmlFor="description">
                                        What are you looking for?
                                    </span>
                                    <textarea
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
                                    className="w-full bg-transparent p-0 text-sm h-32  text-gray-500 focus:outline-none" id="description" type="text" placeholder="Type your message here." />
                                </label>

                                <button type="submit" className="mt-5 border-2 px-5 py-2 rounded-lg border-black border-b-4 font-black translate-y-2 border-l-4">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <WhyInfluencers />
            <ExaggerationSection />
            {/* <Gallery pagefor="brandPage" /> */}
        </>
    )
}

export default BrandRegister