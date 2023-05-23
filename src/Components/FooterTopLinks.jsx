import React from 'react'

import '../AStyles/Footer.css'

import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const FooterTopLinks = () => {
    return (
        <div className="Phone_numbers">
            <div className="number_div">
                <p className='ceo'>
                    <div className='ceo_head'>CEO:</div>
                    <div className='ceo_number'>0321-4949323</div>
                </p>
                <p className='ceo'>
                    <div className='ceo_head'>MD:</div>
                    <div className='ceo_number'>0321-8813823</div>
                </p>
                <p >042-37381667</p>
                <p >0312-4867999</p>
            </div>
            <p className='ceo_two'>
                <p className='first_two'>
                    <div className="form_social_links">

                        <div className="icon_common facebook_icon">
                            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=100090115077393&mibextid=ZbWKwL">
                                <FaFacebook />
                            </a>
                        </div>

                        <div className="icon_common whatsapp_icon">
                            <a target='_blank' rel="noreferrer" href="https://wa.me/923214949323">
                                <FaWhatsapp />
                            </a>
                        </div>

                        <div className="icon_common email_icon">
                            <p onClick={(e) => { window.location.href ='mailto:khanindustrialtrader@gmail.com' }} target='_blank' rel="noreferrer"><HiOutlineMail /></p>
                        </div>

                    </div>
                </p>
            </p>
        </div>
    )
}

export default FooterTopLinks