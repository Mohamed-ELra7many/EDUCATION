import React from 'react'
import { MetData } from '../Metting'

const SingleMeet = () => {
    const Data = MetData.slice(0, 4)    //to cut data from file MetData

    return (
        <>
            {Data.map((item) => (
                <div className='col-md-6' key={item.id}>
                    <div className='met-item'>
                        <div className='img-price'>
                            <div className='price'><span>${item.price}</span></div>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='text'>
                            <div className='date'>
                                <h5>Oct <span>{item.date}</span></h5>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SingleMeet