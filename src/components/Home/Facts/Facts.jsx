/* eslint-disable no-lone-blocks */
import React from 'react'
import { FactsData } from './FactsData'
import "./Style.css"
import icon from "./play-icon.png"

const Facts = () => {

    return (
        <section className='Facts' id="facts">
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='head'>A Few Facts About Our University</h3>
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                            {FactsData.map((item) => (
                                <div className='col-sm-6 col-md-3' key={item.id}>
                                    <div className="n-count">
                                        <div className='count' >
                                            {item.count}
                                        </div>
                                        <div className='title'>{item.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-md-4 align-self-center'>
                        <div className='video'>
                            <a href='https://www.youtube.com/watch?v=HndV87XpkWg'>
                                <img src={icon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facts
