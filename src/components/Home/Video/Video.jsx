import React from 'react'
import "./Video.css"
import video from "./course-video.mp4"
const Video = () => {
    return (
        <section className='video'>
            <video autoPlay muted loop className='bg-video'>
                <source src={video} type='video/mp4'></source>
            </video>
            <div className='veido-over'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="text">
                                <h5>HELLO STUDENTS</h5>
                                <h2>WELCOME TO EDUCATION</h2>
                                <p>This is an edu meeting HTML CSS template provided by Facebook website. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by Pressmaster.</p>
                                <div className="main-button mt-3">
                                    <a className="red" href='#contact'>Join Us Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video