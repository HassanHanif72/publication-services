'use client'
import Image from "next/image"
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';

const SectionSeven = () => {
    return (
        <section className="sec-seven">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="left-col">
                            <Image src="/assets/images/img-4.png" alt="" width={500} height={624} />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7">
                        <div className="right-col">
                            <div className="section-title">
                                <h3>The Value Behind Our <span>Partnership</span></h3>
                                <p>At Optimo, Our partnership goes beyond delivering solutions—it’s about
                                    building trust, aligning with your goals. We go beyond consulting to become
                                    your strategic partner delivering tailored solutions, expert insight, and
                                    measurable results.</p>
                            </div>
                            <div className="faqs-right-sec">
                                <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3">
                                    <Tab eventKey="home" title={<><div className="dot"></div> Deep Collaboration</>}>
                                        <div className="row align-items-start">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="tab-desc">
                                                    <p>We work side by side with your team, fostering open communication and
                                                        shared accountability to ensure strategies translate into real,
                                                        lasting impact.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title={<><div className="dot"></div> Expertise</>}>
                                        <div className="row align-items-start">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="tab-desc">
                                                    <p>We work side by side with your team, fostering open communication and
                                                        shared accountability to ensure strategies translate into real,
                                                        lasting impact.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="longer-tab" title={<><div className="dot"></div> Tailored Solutions</>}>
                                        <div className="row align-items-start">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="tab-desc">
                                                    <p>We work side by side with your team, fostering open communication and
                                                        shared accountability to ensure strategies translate into real,
                                                        lasting impact.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSeven
