import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='text-3xl text-blue-700 p-2 border-t-4 border-red-600 hover: border-b-black'>
      <span className>
        Welcome everyone
      </span>
    </div>
  )
}
