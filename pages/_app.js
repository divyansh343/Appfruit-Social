import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import HeaderFirst from '../components/HeaderFirst'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>SocialCharts</title>
        <meta name='description' content="theSocialCharts is leading Influencer Marketing Agency in India connecting top brands with passionate socially engaged audiences through social media influencers.
        " />
      </Head>
      {/* <Header /> */}
      <HeaderFirst />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
