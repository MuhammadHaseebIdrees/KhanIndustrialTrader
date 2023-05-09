import React from 'react'
import '../AStyles/PumpsPageImages.css'

import PumpsData from '../DataFolder/PumpsData'

const PumpsPageImages = () => {
    return (
        <div className='pump_page_main'>

            <div className="pump_heading">
                PUMPS
            </div>

            <div className="khan_pumps_mini_details">
                Khan Industrial Trader deals in differnet types of Pumps such as:
            </div>

            <div className="single_boxes_div">

                {
                    PumpsData.map((post) => {
                        return (
                            <div className="single_box" key={post.id}>
                                <div className="image_pump_single">
                                    {post.image}
                                </div>
                                <div className="text_pump_single">
                                    {post.title}
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default PumpsPageImages