import React from 'react'
import '../AStyles/MixedPhoto.css'

import mixedPNG from '../Assets/HomeAssets/KhanMainImage.png'

const MixedPhoto = () => {
    return (
        <div className='main_main_mex'>
            <div className="mixed_image">
                <img src={mixedPNG} alt='mixed_Photo' />
            </div>
        </div>
    )
}

export default MixedPhoto