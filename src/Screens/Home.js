import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Browse from '../Components/Browse'
import Different from '../Components/Different'
import CoursesOverview from '../Components/CoursesOverview'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Browse/>
        <Different/>
        <CoursesOverview/>
    </div>
  )
}

export default Home