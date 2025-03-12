import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import Features from '../components/Features/Features'
import MultiPlatform from '../components/MultiPlatform/MultiPlatform'
import Testimonials from '../components/Testimonials/Testimonials'
import Header from '../components/Header/Header'
import RecognitionSection from '../components/RecognitionSection/RecognitionSection'
import ComprehensiveDeviceManagement from '../components/ComprehensiveDeviceManagement/ComprehensiveDeviceManagement'
import TryHexnodeCTA from '../components/TryHexnodeCTA/TryHexnodeCTA'
import '../styles/global.scss';

const Home = () => {
    return (
        <div className="wrap">
            <div className="background400">
                <Header />
                <HeroSection />
            </div>
            <RecognitionSection />
            <Features />
            <ComprehensiveDeviceManagement />
            <MultiPlatform />
            <Testimonials />
            <TryHexnodeCTA />
            <Footer />
        </div>
    )
}

export default Home