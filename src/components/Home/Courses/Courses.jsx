import React from 'react'
import SingleCourses from './SingleCourses'
import "./Style.css"
const Courses = () => {
    return (
        <section className='courses' id='courses'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 className='head'>Our Popular Courses</h2>
                    </div>
                    <div className='col-lg-12'>
                        <SingleCourses />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses