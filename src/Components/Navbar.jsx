import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../AStyles/Navbar.css'

import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [expandNav, setExpandNav] = useState(false)

    return (
        <div className='nav_bar_main'>

            <div className="left_side_nav">

                <div className="text_logo_nav">

                    <div className="khan_nav_heading">
                        KHAN INDUSTRIAL TRADER
                    </div>

                    <div className="pipes_and_valves_hwading">
                        Pipes and Valves
                    </div>

                </div>

            </div>

            <div className={`nav_links ${expandNav ? "show_nav" : ""}`}>

                <p>
                    <Link to='/'>HOME</Link>
                </p>

                <p>
                    <Link to='/about'>ABOUT</Link>
                </p>

                <p>
                    <Link to='/products'>PRODUCTS</Link>
                </p>

                <p>
                    <Link to='/contact'>CONTACT US</Link>
                </p>

            </div>

            <div className="toogle_icons_nav"
                onClick={() => setExpandNav(!expandNav)}
            >
                {expandNav ? <FaTimes /> : <FaBars />}
            </div>

        </div>
    )
}

export default Navbar