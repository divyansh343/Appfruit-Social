import Head from 'next/head'
import React from 'react'
import BrandRegister from '../components/brandRegister'

const brands = () => {
  return (
    <>
    <Head>
        <title>For brands | theSocialCharts</title>
        <meta name='description' content="We help your brand convey the right message to it’s customers. We have worked with Social Media Influencers from All over India." />
      </Head>
    <BrandRegister />
    </>
  )
}

export default brands