import Image from "next/image";
import GlobalBtn from "./components/GlobalBtn";
import ServiceFaqs from "./components/ServiceFaqs";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SliderSec from "./components/SliderSec";
import SecNine from "./components/SecNine";
import SecTen from "./components/SecTen";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
    <>
      {/* top banner */}
      <section className="top-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6 col-md-8">
              <div className="right-col">
                <h1>World's Leading Journal <span>Publication Service</span></h1>
                <p>Eu a pellentesque neque at. Tortor nullam placerat eget gravida scelerisque
                  consequat. A mi urna nulla aliquet erat dolor massa volutpat viverra. a pellentes.</p>
                <GlobalBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* top bottom */}
      <section className="top-bottom-sec">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="top-bottom-inner">
                <div className="bottom-col">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <Image src="/assets/images/img-1.png" alt="" width={119} height={52} />
                    <span>Connect Our Experts</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget
                    lacus ullamcorper.</p>
                </div>
                <div className="bottom-col">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <Image src="/assets/images/clutch-logo.png" alt="" width={119} height={52} />
                    <span>4.9 / 5</span>
                  </div>
                  <p>Dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus
                    ullamcorper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* sec three */}
      <section className="sec-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="left-col">
                <h2>Lorem ipsum dolor sit amet <span>Consectetur Rearmet</span> partur traiger</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus
                  ullamcorper.Lorem ipsum dolor sit amet consectetur. Amet parturient elementum lobortis sit
                  mauris blandit justo consectetur accumsan. Nulla mauris ut facilisis non non sit. Id
                  fermentum cras sapien semper dui tempor. </p>
                <div className="counter">
                  <Image src="/assets/images/line.png" alt="" width={6} height={102} />
                  <div className="mb-0">
                    <span>150+</span>
                    <p>Successful Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7">
              <div className="right-col">
                <Image src="/assets/images/img-2.png" alt="" width={498} height={414} />
                <div className="right-box-sec">
                  <div className="right-box">
                    <Image src="/assets/images/icon-1.png" alt="" width={20} height={20} />
                    <p>Dolorsit amet conse
                      Parturient elemoregbo
                      Dolorsit amet conse
                      Risk Management</p>
                  </div>
                  <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-theme-dark">Get Started <span><i className="ri-arrow-right-up-line"></i></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* sec four */}
      <section className="sec-four">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="section-title">
                <h3>With a 98% client <span>satisfaction,</span> Lorem ipsum dolor sit amet
                  50M+ Partut Traiger</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus
                  ullamcorper.Lorem ipsum dolor sit amet consectetur. Amet parturient elementum.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-3">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="sec-four-box">
                <Image src="/assets/images/icon-2.png" alt="" width={60} height={60} />
                <span>150+</span>
                <p>Over 300+ clients complete high-
                  impact projects.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="sec-four-box">
                <Image src="/assets/images/icon-3.png" alt="" width={60} height={60} />
                <span>98%</span>
                <p>Over 300+ clients complete high-
                  impact projects.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="sec-four-box">
                <Image src="/assets/images/icon-4.png" alt="" width={60} height={60} />
                <span>50+</span>
                <p>Over 300+ clients complete high-
                  impact projects.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="sec-four-box">
                <Image src="/assets/images/icon-5.png" alt="" width={60} height={60} />
                <span>10+</span>
                <p>Over 300+ clients complete high-
                  impact projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* faqs */}
      <ServiceFaqs />
      {/* end */}
      {/* sec six */}
      <SectionSix />
      {/* end */}
      {/* sec seven */}
      <SectionSeven />
      {/* end */}
      {/* slider sec */}
      <SliderSec />
      {/* end */}
      {/* sec nine */}
      <SecNine />
      {/* end */}
      {/* hr */}
      <section className="hr-sec p-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <hr />
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* sec ten */}
      <SecTen />
      {/* end */}
      {/* faqs */}
      <Faqs />
      {/* end */}
    </>
  );
}
