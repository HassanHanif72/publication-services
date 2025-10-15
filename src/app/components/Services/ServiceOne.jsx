import Image from 'next/image'
import React from 'react'
import GlobalBtn from '../GlobalBtn'

const ServiceOne = ({ title, spanTitle, desc }) => {
    return (
        <section className="service-one">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="left-col">
                            <div className="section-title">
                                <h3>{title} <span>{spanTitle}</span></h3>
                                <p>{desc}</p>
                            </div>
                            <GlobalBtn />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div className="right-col">
                            <Image src="/assets/images/img-11.png" alt="" width={526} height={464} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceOne
