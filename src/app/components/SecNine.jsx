import Image from 'next/image'
import React from 'react'

const secNineContent = [
    {
        src: '/assets/images/icon-9.png',
        textOne: 'Journal Articles',
        textTwo: '75 Templates'
    },
    {
        src: '/assets/images/icon-9.png',
        textOne: 'Journal Articles',
        textTwo: '75 Templates'
    },
    {
        src: '/assets/images/icon-9.png',
        textOne: 'Journal Articles',
        textTwo: '75 Templates'
    },
    {
        src: '/assets/images/icon-9.png',
        textOne: 'Journal Articles',
        textTwo: '75 Templates'
    },
    {
        src: '/assets/images/icon-9.png',
        textOne: 'Journal Articles',
        textTwo: '75 Templates'
    },
    {
        src: '/assets/images/icon-9.png',
        textOne: 'Journal Articles',
        textTwo: '75 Templates'
    },
    {
        src: '/assets/images/icon-9.png',
        textOne: 'Journal Articles',
        textTwo: '75 Templates'
    },
    {
        src: '/assets/images/icon-9.png',
        textOne: 'Journal Articles',
        textTwo: '75 Templates'
    }
]

const SecNine = () => {
    return (
        <section className="sec-nine">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="section-title">
                            <h3>Type of Academic <span>Content</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center g-3">
                    {
                        secNineContent?.map((content, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                <div className="sec-nine-inner">
                                    <Image src={content.src} alt={content.textOne} height={24} width={24} />
                                    <div className="mb-0">
                                        <span>{content.textOne}</span>
                                        <p>{content.textTwo}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SecNine
