import React, { useState } from 'react'

import '../AStyles/PipesDetails.css'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import tb1 from '../Assets/TubeAssets/tb1.jpg'
import tb2 from '../Assets/TubeAssets/tb2.jpg'
import tb3 from '../Assets/TubeAssets/tb3.jpg'
import tb4 from '../Assets/TubeAssets/tb4.jpg'
import mt1 from '../Assets/TubeAssets/mt1.jpg'
import mt2 from '../Assets/TubeAssets/mt2.jpg'
import het1 from '../Assets/TubeAssets/het1.jpg'
import het2 from '../Assets/TubeAssets/het2.jpg'
import aht1 from '../Assets/TubeAssets/aht1.jpg'
import aht2 from '../Assets/TubeAssets/aht2.jpg'

const TubeDetails = () => {

    const [highOne, setHighOne] = useState(false)
    const [highTwo, setHighTwo] = useState(false)
    const [highThree, setHighThree] = useState(false)
    const [highFour, setHighFour] = useState(false)

    return (
        <div className='pipe_details_main'>

            <div className="pipes_details_heading">
                SEAMLESS Tubes
            </div>

            <div className="kinds_area">

                <div className="types_heading">
                    Follwoing are different kinds of Tubes:
                </div>

                <div className="different_expand_types">

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Boiler Tubes
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighOne(!highOne); setHighTwo(false); setHighThree(false); setHighFour(false) }}
                            >
                                {highOne ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highOne ? "animation_drop" : ""}`}>
                            <img src={tb1} alt="tb1" />
                            <img src={tb2} alt="tb1" />
                            <img src={tb3} alt="tb1" />
                            <img src={tb4} alt="tb1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Mechanical Tubes
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighTwo(!highTwo); setHighOne(false); setHighThree(false); setHighFour(false) }}
                            >
                                {highTwo ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        {
                            highTwo &&
                            <div className={`pipe_image_div ${highTwo ? "animation_drop" : ""}`}>
                                <img src={mt1} alt="mt1" />
                                <img src={mt2} alt="mt1" />
                            </div>
                        }

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Heat Exchanger Tubes
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighThree(!highThree); setHighTwo(false); setHighOne(false); setHighFour(false) }}
                            >
                                {highThree ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highThree ? "animation_drop" : ""}`}>
                            <img src={het1} alt="het1" />
                            <img src={het2} alt="het1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Air Heater Tube
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighFour(!highFour); setHighTwo(false); setHighThree(false); setHighOne(false) }}
                            >
                                {highFour ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highFour ? "animation_drop" : ""}`}>
                            <img src={aht1} alt="aht1" />
                            <img src={aht2} alt="aht1" />
                        </div>

                    </div>

                </div>

            </div>

            <div className="sizes_area">

                <div className="sizes_heading">
                    Sizes
                </div>

                <div className="diameter_outer">
                    <span>Outer Dia:</span> 12.7mm 101.6mm
                </div>

                <div className="diameter_outer">
                    <span>Length</span> 1 Meter - 18 Meters
                </div>

                <div className="diameter_outer">
                    <span>Wall Thickness:</span> 0.75mm - 8mm
                </div>

            </div>

        </div>
    )
}

export default TubeDetails