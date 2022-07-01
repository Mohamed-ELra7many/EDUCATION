import React from 'react'
import Slider from "react-slick";
import { CouData } from './CouData';

const SingleCourses = () => {
    let settings = {     // settings Slider
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
        <>
            <Slider {...settings}>
                {CouData.map((item) => (
                    <div key={item.id}>
                        <div className='item' >
                            <img src={item.image} alt="" />
                            <div className='text'>
                                <h4>{item.title}</h4>
                                <div className='rate-price'>
                                    <div className='row'>
                                        <div className='col-8'>
                                            <ul>
                                                <li>
                                                    <i className='fa fa-star'></i>
                                                </li>
                                                <li>
                                                    <i className='fa fa-star'></i>
                                                </li>
                                                <li>
                                                    <i className='fa fa-star'></i>
                                                </li>
                                                <li>
                                                    <i className='fa fa-star'></i>
                                                </li>
                                                <li>
                                                    <i className='fa fa-star'></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='col-4'>
                                            <span>${item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </>
    )
}

export default SingleCourses