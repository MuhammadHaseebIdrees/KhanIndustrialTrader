import React from 'react'
import { Link } from 'react-router-dom'

import '../AStyles/Footer.css'

import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className='footer_main_div'>

                <div className="pages_footer_div">
                    <div className="pages_heading_footer">
                        PAGES
                    </div>
                    <div className="links_footer_pages">
                        <p>
                            <Link to='/'>Home</Link>
                        </p>

                        <p>
                            <Link to='/about'>About</Link>
                        </p>

                        <p>
                            <Link to='/products'>Products</Link>
                        </p>

                        <p>
                            <Link to='/contact'>Contact Us</Link>
                        </p>

                    </div>
                </div>
                {/* products_div */}
                <div className="pages_footer_div">
                    <div className="pages_heading_footer">
                        Products
                    </div>
                    <div className="links_footer_pages">
                        <p>
                            <Link to='/pipes'>Pipes</Link>
                        </p>

                        <p>
                            <Link to='/tubes'>Tubes</Link>
                        </p>

                        <p>
                            <Link to='/weldfittings'>Butt Weld Fittings</Link>
                        </p>

                        <p>
                            <Link to='/steelfittings'>Forged Steel Fittings</Link>
                        </p>
                        <p>
                            <Link to='/flanges'>Flanges</Link>
                        </p>
                        <p>
                            <Link to='/valves'>Valves</Link>
                        </p>
                        <p>
                            <Link to='/pumps'>Pumps</Link>
                        </p>
                    </div>
                </div>

                {/* get in touch */}
                <div className="pages_footer_div last_footer">
                    <div className="pages_heading_footer">
                        Get In Touch
                    </div>
                    <div className="touch_us">
                        <div className="address">
                            <a href="https://goo.gl/maps/4Pj9oMnBCPiz6jpA6" target='blank'>
                                <span className='footer_icon'><HiOutlineLocationMarker /></span><span className='span_text'> Office # 90, Railway Road, Gulshan Market, Lahore</span>
                            </a>
                        </div>
                        <div className="Phone_numbers second_footer_bottom">
                            <p className='ceo'>
                                <div className='ceo_head'>CEO:</div>
                                <div className='ceo_number'>0321-4949323</div>
                            </p>
                            <p className='ceo'>
                                <div className='ceo_head'>MD:</div>
                                <div className='ceo_number'>0321-8813823</div>
                            </p>
                            <p className='ceo_two'>
                                <p >042-37381667</p>
                                <p className='first_two'>
                                    <div className="form_social_links">

                                        <div className="icon_common facebook_icon">
                                            <a target='_blank' href="https://www.facebook.com/profile.php?id=100090115077393&mibextid=ZbWKwL">
                                                <FaFacebook />
                                            </a>
                                        </div>

                                        <div className="icon_common whatsapp_icon">
                                            <a target='_blank' href="https://wa.me/923214949323">
                                                <FaWhatsapp />
                                            </a>
                                        </div>

                                        <div className="icon_common email_icon">
                                            <a onClick={(e) => { window.location.href = 'mailto:khanindustrialtrader@gmail.com' }}><HiOutlineMail /></a>
                                        </div>

                                    </div>
                                </p>
                            </p>
                        </div>
                        <div className="mail_foooter">
                            <Link onClick={(e) => { window.location.href = 'mailto:khanindustrialtrader@gmail.com' }}><span className='footer_icon'><HiOutlineMail /></span><span className="span_text">khanindustrialtrader@gmail.com</span></Link>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Footer