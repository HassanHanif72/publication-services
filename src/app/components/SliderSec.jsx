'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const slideContent = [
    {
        src: 'assets/images/img-5.png',
        alt: 'image-1',
        text: 'Phasellus pharetra tortor Eget lacus ullamcor'
    },
    {
        src: 'assets/images/img-6.png',
        alt: 'image-2',
        text: 'Phasellus pharetra tortor Eget lacus ullamcor'
    },
    {
        src: 'assets/images/img-7.png',
        alt: 'image-3',
        text: 'Phasellus pharetra tortor Eget lacus ullamcor'
    },
    {
        src: 'assets/images/img-8.png',
        alt: 'image-4',
        text: 'Phasellus pharetra tortor Eget lacus ullamcor'
    },
    {
        src: 'assets/images/img-9.png',
        alt: 'image-4',
        text: 'Phasellus pharetra tortor Eget lacus ullamcor'
    }
]


const SliderSec = () => {
    const sliderRef = useRef(null);

    const nextSlider = () => {
        sliderRef.current?.slickNext();
    }

    const prevSlider = () => {
        sliderRef.current?.slickPrev();
    }

    var settings = {
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '150px',
        autoplay: true,
    };
    return (
        <section className="sec-eight">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <div className="section-title">
                            <h3>How We Helped Clients Grow <span>Smarter</span></h3>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="btn-arrow">
                            <Image className="slick-left" onClick={prevSlider} src="/assets/images/left-arrow.png" alt="" width={44} height={44} />
                            <Image className="slick-right" onClick={nextSlider} src="/assets/images/right-arrow.png" alt="" width={44} height={44} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0">
                <div className="sec-eight-body sec-eight-slider">
                    <Slider ref={sliderRef} {...settings}>
                        {slideContent?.map((item, index) => (
                            <div className="sec-eight-col" key={index}>
                                <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
                                <div className="sec-eight-col-inner">
                                    <span>{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default SliderSec
