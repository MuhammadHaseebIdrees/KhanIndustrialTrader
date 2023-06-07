import React from 'react'
import Navbar from '../Components/Navbar'
import SwiperComponent from '../Components/SliderComponent'
import MixedPhoto from '../Components/MixedPhoto'
import Trustable from '../Components/Trustable'
import Footer from '../Components/Footer'
import Clientsdata from '../Components/Clientsdata' 

const Home = () => {
    return (
        <div>
            <Navbar />
            <SwiperComponent />
            <Trustable />
            <MixedPhoto />
            <Clientsdata />
            <Footer />
        </div>
    )
}

export default Home