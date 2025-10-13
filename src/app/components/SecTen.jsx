import Image from 'next/image'
import React from 'react'

const secTenContent = [
    {
        src: '/assets/images/img-10.png',
        textOne: 'Political Sciences',
        textTwo: '150+ Subjects',
        textThree: '350+ experts',
        textFour: '35,000+ papers',
    },
    {
        src: '/assets/images/img-10.png',
        textOne: 'Political Sciences',
        textTwo: '150+ Subjects',
        textThree: '350+ experts',
        textFour: '35,000+ papers',
    },
    {
        src: '/assets/images/img-10.png',
        textOne: 'Political Sciences',
        textTwo: '150+ Subjects',
        textThree: '350+ experts',
        textFour: '35,000+ papers',
    },
    {
        src: '/assets/images/img-10.png',
        textOne: 'Political Sciences',
        textTwo: '150+ Subjects',
        textThree: '350+ experts',
        textFour: '35,000+ papers',
    },
    {
        src: '/assets/images/img-10.png',
        textOne: 'Political Sciences',
        textTwo: '150+ Subjects',
        textThree: '350+ experts',
        textFour: '35,000+ papers',
    },
    {
        src: '/assets/images/img-10.png',
        textOne: 'Political Sciences',
        textTwo: '150+ Subjects',
        textThree: '350+ experts',
        textFour: '35,000+ papers',
    },
    {
        src: '/assets/images/img-10.png',
        textOne: 'Political Sciences',
        textTwo: '150+ Subjects',
        textThree: '350+ experts',
        textFour: '35,000+ papers',
    },
    {
        src: '/assets/images/img-10.png',
        textOne: 'Political Sciences',
        textTwo: '150+ Subjects',
        textThree: '350+ experts',
        textFour: '35,000+ papers',
    },
]

const SecTen = () => {
    return (
        <section className="sec-ten">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="section-title">
                            <h3>Subject-Specific <span>Consultantions</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center g-3">
                    {secTenContent?.map((content, index) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                            <div className="sec-ten-inner">
                                <div className="sec-ten-inner-one">
                                    <span>{content.textOne}</span>
                                    <p>{content.textTwo}</p>
                                </div>
                                <div className="sec-ten-inner-two">
                                    <Image src={content.src} alt={content.textOne} width={80} height={80} />
                                    <div className="mb-0">
                                        <span>{content.textThree}</span>
                                        <span>{content.textFour}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SecTen
