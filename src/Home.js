import React from 'react'
// import Navbar from './Navbar'
import Header from './Header'
import UpperCards from './UpperCards'
import Aboutus from './Aboutus'
import AboutCards from './AboutCards'
import ContactUs from './ContactUs'
// import Footer from './Footer'


function Home() {
  return(
  <>
   
    {/* <Navbar/> */}
    <Header/>
    <UpperCards/>
    <Aboutus/>
    <AboutCards/>
    <ContactUs/>
    {/* <Footer/> */}
    </>
  )
}

export default Home