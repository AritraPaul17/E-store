import React, { useEffect } from 'react'
import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'
import HomeSpecial from '../components/HomeSpecial'
import HomeFeatured from '../components/HomeFeatured'
import Testimonial from '../components/Testimonial'



const Home = () => {


  useEffect(() => {

  }, [])
  return (
    <>
      <Header/>
      <HomeBanner/>
      <HomeSpecial/>
      <HomeFeatured/>
      <Testimonial/>
    </>
  )
}

export default Home
