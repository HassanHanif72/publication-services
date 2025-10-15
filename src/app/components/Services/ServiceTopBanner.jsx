import React from 'react'
import GlobalBtn from '../GlobalBtn'
import TopForm from '../TopForm'

const ServiceTopBanner = ({ title, spanTitle, desc, bgImageClass }) => {

    return (
        // top banner
        <section className={`top-banner top-sec-service ${bgImageClass}`}>
            <div className="container">
                <div className="row align-items-start justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="right-col">
                            <h1>{title} <span>{spanTitle}</span></h1>
                            <p>{desc}</p>
                            <GlobalBtn />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div className="top-form">
                            <TopForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // end
    )
}

export default ServiceTopBanner
