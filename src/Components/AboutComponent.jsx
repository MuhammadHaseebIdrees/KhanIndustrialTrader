import React from 'react'
import '../AStyles/AboutUs.css'

import fbrReg from '../Assets/AboutAssets/FbrRegister.JPG'

const AboutComponent = () => {

    return (

        <div className='About_us_div'>

            <div className="about_upper">

                <div className="about_us_left_side">

                    <div className="about_us_heading">
                        ABOUT US
                    </div>

                    <div className="about_us_paragraph">
                        Deals in All Kinds of Pipes, Pipe Fittings, Valves, Valves Fittings, Joints and Flanges, Firefighting Equipment and Various Pumps Which Used In Steam Line, Gas Line, Boiler, Generator, Cooling Tower, Chiller, A/C Plant, Power Plant Etc. Leads the business transparently with preservation of quality to give the best technology and equipment to the development of industrial sectors.
                    </div>

                    <p className="moto_about">
                        We are one of the most trustable in this sector.
                    </p>

                </div>

                <div className="about_us_right">

                    <div className="Mission_heading">
                        Our Missions:
                    </div>

                    <div className="missions_points">
                        <ul>
                            <li>To provide the best quality products to our customers.</li>
                            <li>To be global leader in the quality of goods manufactured & supplied.</li>
                            <li>To grow as a top-class specialized-technology trading company.</li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="lower_certificates_about">

                <div className="registration_left">

                    <div className="regiatration_heading">
                        REGISTRATION
                    </div>

                    <div className="intro_fbr">
                        Khan Industrial Trader is legally registered to FBR (Federal Board of Revenue) with the NTN  number 1350302124275.
                    </div>

                    <div className="ntn_main">
                        Here is our NTN Number: 1350302124275
                    </div>

                </div>

                <div className="registration_right">
                    <img src={fbrReg} alt="" />
                </div>

            </div>
        </div>

    )
}

export default AboutComponent