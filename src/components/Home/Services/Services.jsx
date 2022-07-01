import React from 'react'
import Slider from "react-slick";
import { SerData } from './SerData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css"

const Services = () => {
    let settings = {    //respone Screen
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='services'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Slider {...settings}>
                            {SerData.map((item) => (
                                <div className='' key={item.id}>
                                    <div className='item'>
                                        <div className='img'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="text">
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services