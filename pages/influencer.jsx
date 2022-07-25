import Head from 'next/head'
import React from 'react'
import InfluencerRegister from '../components/influencerRegister'

const influencer = () => {
  return (
    <>
      <Head>
        <title>For Influencers | theSocialCharts</title>
        <meta name='description' content="We connect social influencers with the top leading brands." />
      </Head>
      <InfluencerRegister />
    </>
  )
}

export default influencer