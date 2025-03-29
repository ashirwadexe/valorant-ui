import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Home/Navbar'
import Hero from './components/Home/Hero'
import BlogCard from './components/Home/BlogCard'
import Hero2 from './components/Home/Hero2'
import Hero3 from './components/Home/Hero3'
import Hero5 from './components/Home/Hero5'
import Footer from './components/Home/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BlogCard/>
      <Hero2/>
      <Hero3/>
      <Hero5/>
      <Footer/>
    </div>
  )
}

export default App