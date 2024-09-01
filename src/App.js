import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/LandingPage/Header/Header'
import Pass from './components/LandingPage/Pass/Pass'
import Ad from './components/LandingPage/Ad/Ad'
import Content from './components/LandingPage/Content/Content'
import MovingAd from './components/LandingPage/MovingAd/MovingAd'
import Images from './components/LandingPage/Images/Images'
import Testimonials from './components/LandingPage/Testimonials/Testimonials'
import Contact from './components/LandingPage/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Pass />
            <Ad />
            <Content />
            <MovingAd />
            <Images />
            <Testimonials />
            <Contact />
            <Footer />  
        </>
    )
}

export default App
