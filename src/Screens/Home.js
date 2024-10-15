import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Browse from '../Components/Browse'
import Different from '../Components/Different'
import CoursesOverview from '../Components/CoursesOverview'
import Faq from '../Components/Faq'
import How from '../Components/How'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <How/>
        <Browse/>
        <Different/>
        <CoursesOverview/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home