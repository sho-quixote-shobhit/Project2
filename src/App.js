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
import { Routes, Route } from 'react-router-dom'
import ContactSales from './components/Contact/Contact'

import EnterpriseHeader from './components/EnterPrisePage/EnterpriseHeader/EnterpriseHeader'
import ScrollingImages from './components/EnterPrisePage/ScrollingImages/ScrollingImages'
import EnterprisePass from './components/EnterPrisePage/EnterprisePass/EnterprisePass'
import YoutubeAd from './components/EnterPrisePage/YoutubeAd/YoutubeAd'
import EnterpriseTestti from './components/EnterPrisePage/Testimonials/EnterpriseTestti'
import CallUs from './components/EnterPrisePage/CallUs/CallUs'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<>
                    <Header />
                    <Pass />
                    <Ad />
                    <Content />
                    <MovingAd />
                    <Images />
                    <Testimonials />
                    <Contact />
                </>} />
                <Route path="/contact" element={<ContactSales />} />
                <Route path = "/enterprise" element = {<>
                    <EnterpriseHeader />
                    <ScrollingImages />
                    <EnterprisePass />
                    <YoutubeAd />
                    <EnterpriseTestti />
                    <CallUs />
                </>} />
                <Route path = "/ugc" element = {<></>} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
