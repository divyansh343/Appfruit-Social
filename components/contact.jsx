import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from "axios";
const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const handleContact = async (e) => {
        e.preventDefault();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "name": name,
            "email": email,
            "phone": parseInt(phone),
            "description": description
        });

        let reqOptions = {
            url: `https://infmark.herokuapp.com/api/v1/social/contact`,
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        try {
            const response = await axios.request(reqOptions)
            setName("")
            setPhone("")
            setEmail("")
            setDescription("")
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <>

            <div className="bg-white sm:mx-32 lg:mx-32 py-20 xl:mx-72 ">
                <div className="flex justify-between container mx-auto">
                    <div className="w-full">
                        <div className="mt-4 px-4">
                            {/* <h1 className="text-3xl font-semibold py-7 px-5">addbyme</h1> */}
                            <h1 className="font-thinner flex text-4xl pt-10 px-5">Contact With Us
                            </h1>
                            <form onSubmit={handleContact} className="mx-5 my-5">

                                <label className="relative block p-3 border-2 border-black rounded" htmlFor="name">
                                    <span className="text-md font-semibold text-zinc-900" htmlFor="name">
                                        Name
                                    </span>
                                    <input 
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="name" type="text" placeholder="Your name" />
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

                                <label className="relative block p-3 border-2 my-4 border-black rounded" htmlFor="description">
                                    <span className="text-md font-semibold text-zinc-900" htmlFor="description">
                                        How we can help you
                                    </span>
                                    <textarea
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
                                    className="w-full bg-transparent p-0 text-sm h-32  text-gray-500 focus:outline-none" id="description" type="text" placeholder="Type your message here." />
                                </label>

                                {/* <h1 className="text-2xl font-semibold mt-5">Category :</h1>
                                <p className="text-black text-sm font-normal flex gap gap-2 pt-2">
                                    <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Business</button>
                                    <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Creative</button>
                                    <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Education</button>
                                </p>

                                <p className="text-black text-sm font-normal flex gap gap-2 pt-2">
                                    <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Tech</button>
                                    <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Entertainment</button>
                                    <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Other</button>
                                </p> */}

                                <button type="submit" className="mt-5 border-2 px-5 py-2 rounded-lg border-black border-b-4 font-black translate-y-2 border-l-4">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact