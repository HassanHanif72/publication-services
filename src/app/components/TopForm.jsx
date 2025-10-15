'use client'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const TopForm = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-4">
                        <h2>Connect Our Experts</h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control required type="text" id="name" placeholder="Enter Name*" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <Form.Label htmlFor="email">Email Address</Form.Label>
                        <Form.Control required type="email" id="email" placeholder="Enter Email Address*" pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <Form.Label htmlFor="contact">Contact Us</Form.Label>
                        <Form.Control type="number" id="contact" name="contact" placeholder="Enter Phone Number*" required />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <Form.Label htmlFor="service">Select Service</Form.Label>
                        <Form.Select name="service" id="service" defaultValue="" required>
                            <option value="" disabled>Select Service</option>
                            <option value="Publication Support">Publication Support</option>
                            <option value="Journal Selection">Journal Selection</option>
                            <option value="Pre-Submission Review">Pre-Submission Review</option>
                            <option value="Formatting And Artwork Editing">Formatting And Artwork Editing</option>
                            <option value="Journal Submission">Journal Submission</option>
                            <option value="Resubmission Support">Resubmission Support</option>
                            <option value="Plagiarism Check">Plagiarism Check</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-0">
                        <button className="btn btn-theme-dark">Submit <span><i className="ri-arrow-right-up-line"></i></span></button>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default TopForm
