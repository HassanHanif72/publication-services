import Image from 'next/image'

const SectionSix = () => {
    return (
        <section className="sec-six">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="section-title">
                            <h3>Our Proven Process to Drive to <span>Success</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center g-3">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="sec-six-box">
                            <Image src="/assets/images/icon-6.png" alt="" width={60} height={60} />
                            <span>Discover &amp; Diagnose</span>
                            <p>Uncover challenges, opportunities, and root
                                causes with clarity.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="sec-six-box">
                            <Image src="/assets/images/icon-7.png" alt="" width={60} height={60} />
                            <span>Strategize &amp; Plan</span>
                            <p>Build actionable roadmaps aligned with your
                                business goals.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="sec-six-box">
                            <Image src="/assets/images/icon-8.png" alt="" width={60} height={60} />
                            <span>Execute &amp; Optimize</span>
                            <p>Build actionable roadmaps aligned with your
                                business goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSix
