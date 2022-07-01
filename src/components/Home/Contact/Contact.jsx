import React from 'react'
import "./Style.css"

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-8 align-self-center'>
                        <div className='row'>
                            <div className='col-12'>
                                <form>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <h2>Let's get in touch</h2>
                                        </div>
                                        <div className='col-lg-4'>
                                            <input type="text" placeholder='YOURNAME...*' required />
                                        </div>
                                        <div className='col-lg-4'>
                                            <input type="text" placeholder='YOUR EMAIL...' required />
                                        </div>
                                        <div className='col-lg-4'>
                                            <input type="text" placeholder='SUBJECT...*' required />
                                        </div>
                                        <div className='col-lg-12'>
                                            <textarea className='message' type="text" placeholder='YOUR MESSAGE...' required ></textarea>
                                        </div>
                                        <div className='col-lg-12 main-button'>
                                            <button className='red' type="submit">SEND MESSAGE NOW</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='info-text'>
                            <ul>
                                <li>
                                    <h5>Phone Number</h5>
                                    <span>010-020-0340</span>
                                </li>
                                <li>
                                    <h5>Email Address</h5>
                                    <span>mohamed@meeting.edu</span>
                                </li>
                                <li>
                                    <h5>Street Address</h5>
                                    <span>cairo, 28, Egypt</span>
                                </li>
                                <li>
                                    <h5>Website URL</h5>
                                    <span>www.meeting.edu</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact