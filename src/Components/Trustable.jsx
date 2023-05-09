import React from 'react'
import '../AStyles/Trustable.css'

import logoTrust from '../Assets/HomeAssets/LogoMain.jpeg'

const Trustable = () => {
    return (
        <div className='trustable_main_div'>
            <div className="left_side_logo">
                <img src={logoTrust} alt='haseeb'/>
            </div>
            <div className="right_side_trust">
                <div className="khan_industrial_heading">
                    KHAN INDUSTRIAL TRADER
                </div>
                <div className="khan_industrial_moto">
                    "We are one of the most trustable in this sector"
                </div>
            </div>
        </div>
    )
}

export default Trustable