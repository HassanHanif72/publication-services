'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const testimonialContent = [
    {
        src: '/assets/images/t-1.png',
        name: 'Annette Black',
        designation: 'Construction worker',
        desc: `“One of the things that impressed us most was their
                 transparency and communication. We were kept in
                 the loop at every stage of the  project, with regular updates and
                 clear reporting.”`
    },
    {
        src: '/assets/images/t-2.png',
        name: 'Jane Cooper',
        designation: 'Mechanic',
        desc: `"They provided clarity where we
                                had confusion, and structure
                                where we had chaos. It’s been
                                one of the best investments
                                we’ve made as a company.”`
    },
    {
        src: '/assets/images/t-3.png',
        name: 'Arlene McCoy',
        designation: 'Janitor',
        desc: `"From the first meeting, they
                                were invested in our success.
                                Their structured process and
                                sharp strategy helped us turn a
                                struggling department into a
                                high-performing unit and boost
                                team productivity, and refocus
                                our entire operation on what
                                truly matters."`
    },
    {
        src: '/assets/images/t-4.png',
        name: 'Cameron Williamson',
        designation: 'Stocking associate',
        desc: `"Their strategic insight and
                                hands-on approach helped us
                                streamline operations and
                                unlock new growth
                                opportunities. We saw
                                measurable results within
                                months."`
    },
    {
        src: '/assets/images/t-2.png',
        name: 'Arlene McCoy',
        designation: 'Janitor',
        desc: `"Their consultants didn’t just
                                offer advice—they rolled up their
                                sleeves and worked alongside us
                                to solve complex challenges and
                                deliver real results.”`
    }
]

const Testimonials = () => {

    var settings = {
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '150px',
        autoplay: true,
    };

    return (
        <section className="testimonial-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="section-title">
                            <h3>Proven What Our <span>Clients Says</span></h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-0">
                <div className="testimonial-body testi-slider">
                    <Slider {...settings}>
                        {
                            testimonialContent?.map((content, index) => (
                                <div className="testimonial-inner" key={index}>
                                    <div className="testimonial-inner-sec">
                                        <Image src="/assets/images/quote.png" alt="" width={34} height={26} />
                                        <p>{content.desc}</p>
                                    </div>
                                    <div className="testimonial-inner-bottom">
                                        <Image src={content.src} alt={content.name} width={48} height={48} />
                                        <div className="mb-0">
                                            <span>{content.name}</span>
                                            <p>{content.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
