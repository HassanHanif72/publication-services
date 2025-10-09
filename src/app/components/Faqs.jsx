'use client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Accordion } from 'react-bootstrap';

const accordionContent = [
    {
        title: 'Publication Support',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto quo eos odio omnis, voluptatum cum officia delectus ullam.Molestiae odio officia velit doloribus culpa atque inventore quasi ipsum ipsam?',
        link: '#'
    },
    {
        title: 'Journal Selection',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto quo eos odio omnis, voluptatum cum officia delectus ullam.Molestiae odio officia velit doloribus culpa atque inventore quasi ipsum ipsam?',
        link: '#'
    },
    {
        title: 'Pre-Submission Review',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto quo eos odio omnis, voluptatum cum officia delectus ullam.Molestiae odio officia velit doloribus culpa atque inventore quasi ipsum ipsam?',
        link: '#'
    },
    {
        title: 'Formatting And Artwork Editing',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto quo eos odio omnis, voluptatum cum officia delectus ullam.Molestiae odio officia velit doloribus culpa atque inventore quasi ipsum ipsam?',
        link: '#'
    },
    {
        title: 'Journal Submission',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto quo eos odio omnis, voluptatum cum officia delectus ullam.Molestiae odio officia velit doloribus culpa atque inventore quasi ipsum ipsam?',
        link: '#'
    },
    {
        title: 'Resubmission Support',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto quo eos odio omnis, voluptatum cum officia delectus ullam.Molestiae odio officia velit doloribus culpa atque inventore quasi ipsum ipsam?',
        link: '#'
    },
    {
        title: 'Plagiarism Check',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto quo eos odio omnis, voluptatum cum officia delectus ullam.Molestiae odio officia velit doloribus culpa atque inventore quasi ipsum ipsam?',
        link: '#'
    },
];


const Faqs = () => {

    return (
        <section className="faqs-sec">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <div className="section-title">
                            <h3><span>Rearmet</span> partur traiger Lorem ipsum</h3>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="btn-right">
                            <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal"
                                className="btn btn-theme-dark">Get Started <span><i
                                    className="ri-arrow-right-up-line"></i></span></button>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-2">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="left-col">
                            <Accordion defaultActiveKey="0">
                                {accordionContent.map((item, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>{`[0${index + 1}]`} <span>{item.title}</span></Accordion.Header>
                                        <Accordion.Body>
                                            <p>{item.content}</p>
                                            <Link href={item.link} className="btn btn-theme-dark d-inline-flex mt-3">
                                                Explore Service <span><i className="ri-arrow-right-up-line"></i></span>
                                            </Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="right-col text-end">
                            <Image src="/assets/images/img-3.png" alt="" className="animate-up" width={572} height={572} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs
