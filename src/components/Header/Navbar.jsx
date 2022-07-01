/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    const ShowMobile = () => {                 //to screen mobile
        setMobile(!mobile)
    }
    return (
        <nav>
            <div className='container position-relative d-flex justify-content-between align-items-center'>
                <NavLink to="/" className='logo'>
                EDUCATION
                </NavLink>
                <ul className={mobile ? "links-mobile-list" : "Links-List"} onClick={() => setMobile(false)}>
                    <li className='active'>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <NavLink to='/meetingpage'>Meetings</NavLink>
                    </li>
                    <li>
                        <a href='#facts'>Facts</a>
                    </li>
                    <li>
                        <a href='#courses'>Courses</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact Us</a>
                    </li>
                </ul>
                <button onClick={ShowMobile}>
                    {mobile ? <i className="fa fa-times close home-btn"></i> : <i className="fa fa-bars open"></i>}
                </button>
            </div>

        </nav>
    )
}

export default Navbar
