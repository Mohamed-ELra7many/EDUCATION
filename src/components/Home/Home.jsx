import React from 'react'
import Contact from './Contact/Contact'
import Courses from './Courses/Courses'
import Facts from './Facts/Facts'
import Meeting from './Meeting/Meeting'
import Services from './Services/Services'
import Video from './Video/Video'

const Home = () => {
    return (
        <>
            <Video />
            <Services />
            <Meeting />
            <Courses />
            <Facts />
            <Contact />
        </>
    )
}

export default Home