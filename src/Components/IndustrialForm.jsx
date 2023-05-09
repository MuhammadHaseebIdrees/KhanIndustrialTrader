import React from 'react'
import '../AStyles/IndustrialForm.css'

const IndustrialForm = () => {
    return (
        <div className='form_industrial_main'>

            <div className="form_left_side_input">

                <div className="form_heading_main">
                    Contact Form
                </div>

                <div className="form_div">

                    <form action="https://formspree.io/f/xpzebjyk" method='POST'>

                        <label htmlFor="name">
                            Name
                        </label>

                        <input
                            id='name'
                            type="text"
                            name='Name'
                            required
                            autoCapitalize='off'
                            autoComplete='off'
                        />

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id='email'
                            type="email"
                            name='Email'
                            autoCapitalize='off'
                            autoComplete='off'
                            required
                        />

                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            name="Message"
                            id="message"
                            cols="30"
                            rows="4"
                            autoCapitalize='off'
                            autoComplete='off'
                            required
                        >
                        </textarea>

                        <div className='button_main_div'>
                            <button type="submit">
                                SEND
                            </button>
                        </div>

                    </form>

                </div>

            </div>

            <div className="form_right_side_input">
                <div className="find_us_here_heading">
                    Find Us Here
                </div>

                <div className="map">
                    <iframe title='unique' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54403.40016866578!2d74.20991832167967!3d31.54578199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190330c913a83d%3A0xcd8dd3151da0568d!2sSuper%20Market%20Gulshan-e-Ravi%20Lahore!5e0!3m2!1sen!2suk!4v1682934649819!5m2!1sen!2suk" width="100%" height="350" border='none' referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>

        </div>
    )
}

export default IndustrialForm