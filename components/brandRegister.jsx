import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from "axios";
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
            <section className="text-gray-700 pt-14 sm:pt-20">
                <div className="container px-5 pt-5 mx-auto">
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

            <div className="flex items-center justify-center p-2 mb-10">
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
            </div>
        </>
    )
}

export default BrandRegister