import React, { useState } from 'react'

import '../AStyles/PipesDetails.css'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import hp1 from '../Assets/PipeAssets/hp1.jpg'
import hp2 from '../Assets/PipeAssets/hp2.jpg'
import hp3 from '../Assets/PipeAssets/hp3.jpg'
import hp4 from '../Assets/PipeAssets/hp4.jpg'
import lp1 from '../Assets/PipeAssets/lp1.jpg'
import lp2 from '../Assets/PipeAssets/lp2.jpg'
import lpc1 from '../Assets/PipeAssets/lpc1.jpg'
import lpc2 from '../Assets/PipeAssets/lpc2.jpg'
import pp1 from '../Assets/PipeAssets/pp1.jpg'
import pp2 from '../Assets/PipeAssets/pp2.jpg'
import pp3 from '../Assets/PipeAssets/pp3.jpg'
import pp4 from '../Assets/PipeAssets/pp4.jpg'
import Linep1 from '../Assets/PipeAssets/Linep1.jpg'
import Linep2 from '../Assets/PipeAssets/Linep2.jpg'
import Linep3 from '../Assets/PipeAssets/Linep3.jpg'
import Linep4 from '../Assets/PipeAssets/Linep4.jpg'
import msPipe from '../Assets/PipeAssets/ms_pipe.png'
import giPipe from '../Assets/PipeAssets/Gi_pipe.png'

const PipesDetails = () => {

    const [highOne, setHighOne] = useState(false)
    const [highTwo, setHighTwo] = useState(false)
    const [highThree, setHighThree] = useState(false)
    const [highFour, setHighFour] = useState(false)
    const [highFive, setHighFive] = useState(false)
    const [highSix, setHighSix] = useState(false)
    const [highSeven, setHighSeven] = useState(false)

    return (
        <div className='pipe_details_main'>

            <div className="pipes_details_heading">
                SEAMLESS PIPES
            </div>

            <div className="kinds_area">

                <div className="types_heading">
                    Follwoing are different kinds of Pipes:
                </div>

                <div className="different_expand_types">

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                High Temperature Services Pipes
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighOne(!highOne); setHighTwo(false); setHighThree(false); setHighFour(false); setHighFive(false) }}
                            >
                                {highOne ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highOne ? "animation_drop" : ""}`}>
                            <img src={hp1} alt="hp1" />
                            <img src={hp2} alt="hp1" />
                            <img src={hp3} alt="hp1" />
                            <img src={hp4} alt="hp1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Low Temperature Services Pipes
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighTwo(!highTwo); setHighOne(false); setHighThree(false); setHighFour(false); setHighFive(false) }}
                            >
                                {highTwo ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        {
                            highTwo &&
                            <div className={`pipe_image_div ${highTwo ? "animation_drop" : ""}`}>
                                <img src={lp1} alt="lp1" />
                                <img src={lp2} alt="lp1" />
                            </div>
                        }

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Precision Pipes
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighThree(!highThree); setHighTwo(false); setHighOne(false); setHighFour(false); setHighFive(false) }}
                            >
                                {highThree ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highThree ? "animation_drop" : ""}`}>
                            <img src={pp1} alt="pp1" />
                            <img src={pp2} alt="pp1" />
                            <img src={pp3} alt="pp1" />
                            <img src={pp4} alt="pp1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                3 Layers Pipe Coating
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighFour(!highFour); setHighTwo(false); setHighThree(false); setHighOne(false); setHighFive(false) }}
                            >
                                {highFour ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highFour ? "animation_drop" : ""}`}>
                            <img src={lpc1} alt="lpc1" />
                            <img src={lpc2} alt="lpc1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Line Pipes
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighFive(!highFive); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false) }}
                            >
                                {highFive ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highFive ? "animation_drop" : ""}`}>
                            <img src={Linep1} alt="Linep1" />
                            <img src={Linep2} alt="Linep1" />
                            <img src={Linep3} alt="Linep1" />
                            <img src={Linep4} alt="Linep1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                MS Pipe
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighSix(!highSix); setHighFive(false); setHighSeven(false); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false) }}
                            >
                                {highSix ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highSix ? "animation_drop" : ""}`}>
                            <img src={msPipe} alt="Linep1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                GI Pipe
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighSeven(!highSeven); setHighFive(false); setHighSix(false); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false) }}
                            >
                                {highSeven ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highSeven ? "animation_drop" : ""}`}>
                            <img src={giPipe} alt="Linep1" />
                        </div>

                    </div>

                </div>

            </div>

            <div className="sizes_area">

                <div className="sizes_heading">
                    Sizes
                </div>

                <div className="diameter_outer">
                    <span>Outer Dia:</span> 12mm - 600mm
                </div>

                <div className="diameter_outer">
                    <span>Length</span> 1mtr - 18 Mtr
                </div>

                <div className="diameter_outer">
                    <span>Wall Thickness:</span> 0.75mm - 25mm
                </div>

            </div>

        </div>
    )
}

export default PipesDetails