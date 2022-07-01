/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import SingleMeet from './SingleMeet'
import "./Style.css"

const Meeting = () => {
    return (
        <section className='web-meeting'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h3 className='head'>Upcoming Meetings</h3>
                    </div>
                    <div className='col-lg-4'>
                        <div className='categories'>
                            <h4>Meeting Catgories</h4>
                            <ul>
                                <li>
                                    <a href='#'>Sed tempus enim leo</a>
                                </li>
                                <li>
                                    <a href='#'>Aenean molestie quis</a>
                                </li>
                                <li>
                                    <a href='#'>Cras et metus vestibulum</a>
                                </li>
                                <li>
                                    <a href='#'>Nam et condimentum</a>
                                </li>
                                <li>
                                    <a href='#'>Phasellus nec sapien</a>
                                </li>
                            </ul>
                            <div className='main-button'>
                                <a className='red' href='#'>All Upcoming Meetings</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12'>
                        <div className='row'>
                            <SingleMeet />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Meeting