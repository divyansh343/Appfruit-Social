import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signInUser = async (e) => {
        e.preventDefault();

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "email": email,
            "password": password
        });

        let reqOptions = {
            url: "https://infmark.herokuapp.com/api/auth/signin",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        try {
            const response = await axios.request(reqOptions)
            
        } catch (error) {
        }

        try {
            const response = await axios.request(reqOptions)
            const { token } = response.data;
            localStorage.setItem('token', token)

            toast.success(`Welcome ${response.data.user.name}`)
            // setEmail("")
            // setPassword("")
        } catch (error) {
            toast.error("Wrong email & Password");
        }
    }

    return (

        <>
            <form onSubmit={signInUser} >
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
                        <h1 className="text-center text-lg font-bold text-gray-500">Admin login</h1>
                        <div className="space-y-4 mt-6">
                            <div className="w-full">
                                <input onChange={e => setEmail(e.target.value)}
                                value={email} type="text" placeholder="email" className="px-4 py-2 bg-gray-50" />
                            </div>
                            <div className="w-full">
                                <input onChange={e => setPassword(e.target.value)}
                                value={password} type="password" placeholder="password" className="px-4 py-2 bg-gray-50" />
                            </div>
                        </div>
                        <button type='submit' className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">login</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login