import Image from 'next/image'
import React from 'react'

const serviceTwoBox = [
    {
        image: "/assets/images/01.png",
        boxTitle: "Editing and Proofreading",
        boxDesc: "Our experts refine your writing for better flow and precision. They proofread the grammar, tone, and style of every sentence to make sure your ideas shine without any distractions."
    },
    {
        image: "/assets/images/02.png",
        boxTitle: "Journal Selection Guidance",
        boxDesc: "It is difficult for researchers to decide where to submit their manuscripts for publication. That’s why we check the scope and acceptance rates to help you target the most suitable publishers."
    },
    {
        image: "/assets/images/03.png",
        boxTitle: "Submission Support",
        boxDesc: "We make sure that your manuscript meets the standards and the requirements of the publishers. We provide you with the cover letter, reference style, figures, and more."
    }
]

const ServiceTwo = ({ title, spanTitle }) => {
    return (
        <section className="service-sec-two">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <div className="section-title">
                            <h3>{title} <span>{spanTitle}</span></h3>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="btn-right">
                            <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-theme-dark">Get Started <span><i className="ri-arrow-right-up-line"></i></span></button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center g-3">
                    {
                        serviceTwoBox?.map((items, i) => (
                            <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                                <div className="service-sec-two-box">
                                    <Image src={items.image} alt="" width={60} height={60} />
                                    <span>{items.boxTitle}</span>
                                    <p>{items.boxDesc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceTwo
