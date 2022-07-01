import React, { useState } from 'react'
import { MetData } from '../Metting'

const MeetingPage = () => {

    let Data = MetData
    let [filter, setFilter] = useState(Data)

    const HandleData = (category) => {  //This is a filter for Similar Items
        const Filter = Data.filter((item) => item.cat === category)
        setFilter(Filter)
    }

    return (
        <>
            <section className='head-meeting'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h5>Here are our upcoming meetings</h5>
                            <h2>Upcoming Meetings</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Metting-page' id="metting">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='filter'>
                                        <ul>
                                            <button onClick={() => setFilter(Data)}>All Meetings</button>
                                            <button onClick={() => HandleData("Soon")}>Soon</button>
                                            <button onClick={() => HandleData("Important")}>Important</button>
                                            <button onClick={() => HandleData("Attractive")}>Attractive</button>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='row position-relative  '>
                                        {filter.map((item) => (
                                            <div className='col-md-6 col-lg-4' key={item.id}>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MeetingPage