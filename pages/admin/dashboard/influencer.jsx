import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout'
import toast from 'react-hot-toast';
import axios from "axios";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { exportToCsv } from '../../../utils/csv';

const Page = () => {
  const router = useRouter();
  const [contacts, setcontacts] = useState([])
  const [count, setCount] = useState("")

  const getAllInfluencer = async () => {
       const token = localStorage.getItem('token');

    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
       }
       
       let reqOptions = {
         url: "https://social-charts.onrender.com/api/v1/dashboard/influencers",
         method: "GET",
         headers: headersList,
       }
       
       try {
        const response = await axios.request(reqOptions)
        setCount(response.data.count)
        setcontacts(response.data.influencer.reverse())
      } catch (error) {
        toast.error("you are not authorizied");
  
      }
}

  useEffect(() => {
    if (localStorage.getItem('token')=== null) {
      router.push('/')
    }
    getAllInfluencer()
  }, [router])

  return (
    <section className="container mx-auto pt-20 p-4 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              
              <th className=" font-thin text-sm px-7 py-3">registerd influencers</th>
              <th className="text-xs px-4 py-1">total influencers : {count}</th>
              <th type="button" className=" px-4 py-1 text-base text-purple-800">
                  <button className='my-3' onClick={() => exportToCsv(contacts, "influencers.csv")}>Download csv</button>
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Name/Brand name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">youtube</th>
                <th className="px-4 py-3">YT Subscribers</th>
                <th className="px-4 py-3">youtube link</th>
                <th className="px-4 py-3">instagram link</th>
                <th className="px-4 py-3">insta Followers</th>
                <th className="px-4 py-3">Engagement Rate</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {contacts.map((b) => (
                <>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          {/* <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" /> */}
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className=" font-semibold text-black">{b.name}</p>
                          <p className="text-xs text-gray-600">{b.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm border">{b.email}</td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {b.contact} </span>
                    </td>
                    <td className="px-4 py-3 text-sm  border">{b.category}</td>
                    <td className="px-4 py-3 text-sm border">{b.ytname}</td>
                    <td className="px-4 py-3 text-sm border">{b.ytsubs}</td>
                    <td className="px-4 py-3 text-sm border">{b.ytlink}</td>
                    <td className="px-4 py-3 text-sm border">{b.instaLink}</td>
                    <td className="px-4 py-3 text-sm border">{b.instaFollowers}</td>
                    <td className="px-4 py-3 text-sm border">{b.instaEngRate}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Page