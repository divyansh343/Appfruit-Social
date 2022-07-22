import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const getToken = () =>{
    const token = localStorage.getItem('token')
    return token;
}
const logOutUser = () =>{
    if(localStorage.getItem('token') === null){
        console.log({message: "user alredy logged Out"});
        return
    }
    const token = localStorage.clear();
    console.log({message: "user logged Out"});
}
const About = () => {

    const handleInfluencer = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "name": "ibm",
            "email": "email",
            "contact": 6263960062,
            "category": "category",
            "ytname": "ytname",
            "ytlink": "ytlink",
            "ytsubs": "ytsubs",
            "priceForIntegratedVideo": "priceForIntegratedVideo",
            "priceForDedicatedVideo": "priceForDedicatedVideo",
            "instaLink": "instaLink",
            "instaFollowers": "instaFollowers",
            "instaEngRate": "instaEngRate",
            "facebookLink": "facebookLink",
            "twitterLink": "twitterLink",
            "linkdinLink": "linkdinLink"
        });

        let reqOptions = {
            url: `https://infmark.herokuapp.com/api/v1/social/reginfluencer`,
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        try {
            const response = await axios.request(reqOptions)
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleBrand = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "name": "natttm6e",
            "brand": "br6and",
            "email": "emai6l",
            "phone": 45546546654546,
            "influencertype": "influ6encertype",
            "description": "descri6ption",
            "budget": "bu6dget"
        });

        let reqOptions = {
            url: `https://infmark.herokuapp.com/api/v1/social/regbrand`,
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        try {
            const response = await axios.request(reqOptions)
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handlecontact = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "name": "natttm6e",
            "email": "emai6l",
            "phone": 45546546654546,
            "description": "descri6ption"
        });

        let reqOptions = {
            url: `https://infmark.herokuapp.com/api/v1/social/contact`,
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        try {
            const response = await axios.request(reqOptions)
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    // auth handlers

    const signInUser = async () => {

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "email": "div@gmail.com",
            "password": "divyansh"
        });

        let reqOptions = {
            url: "https://infmark.herokuapp.com/api/auth/signin",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        try {
            const response = await axios.request(reqOptions)
            const { token } = response.data;
            localStorage.setItem('token', token)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // dasboard

    const getAllInfluencer = async () => {
        const token = getToken();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
           }
           
           let reqOptions = {
             url: "https://infmark.herokuapp.com/api/v1/dashboard/influencers",
             method: "GET",
             headers: headersList,
           }
           
           axios.request(reqOptions).then(function (response) {
             console.log(response.data);
           })
    }

    const getAllBrands = async () => {
        const token = getToken();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
           }
           
           let reqOptions = {
             url: "https://infmark.herokuapp.com/api/v1/dashboard/brands",
             method: "GET",
             headers: headersList,
           }
           
           axios.request(reqOptions).then(function (response) {
             console.log(response.data);
           })
    }

    const getAllContacts = async () => {
        const token = getToken();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
           }
           
           let reqOptions = {
             url: "https://infmark.herokuapp.com/api/v1/dashboard/contacts",
             method: "GET",
             headers: headersList,
           }
           
           axios.request(reqOptions).then(function (response) {
             console.log(response.data);
           })
    }


    return (
        <>
            <button className="border-gray-500 border-b-2" onClick={handleInfluencer} >register influencer</button>
            <br />
            <button className="border-gray-500 border-b-2" onClick={handleBrand} >register brand</button>
            <br />
            <button className="border-gray-500 border-b-2" onClick={handlecontact} >register contact</button>

            <Link href="/admin/login">
                    <a
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">login</a>
                  </Link>

            <div className="pt-8 m-5 justify-center">
                <button className="text-red-500 border-teal-900 bottom-3" onClick={signInUser}>signin</button>
            </div>
            <div className="pt-8 m-5 justify-center">
                <button className="text-red-500 border-teal-900 bottom-3" onClick={logOutUser}>log out</button>
            </div>
            <div className="pt-8 m-5 justify-center">
                <button className="text-red-500 border-teal-900 bottom-3" onClick={()=>getToken()}>token</button>
            </div>

            <button  className="bg-red-600 text-black border-spacing-2 border-blue-700" onClick={getAllInfluencer}>
                getAllInfluencers
            </button>
            <br />
            <button  className="bg-red-600 text-black border-spacing-2 border-blue-700" onClick={getAllBrands}>
                getAllBrands
            </button>
            <br />
            <button  className="bg-red-600 text-black border-spacing-2 border-blue-700" onClick={getAllContacts}>
                getAllContacts
            </button>

        </>
    )
}
export default About