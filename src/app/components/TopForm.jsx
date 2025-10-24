'use client'
import { sendMail } from '@/lib/sendEmail';
import { useState } from 'react'
import { Form } from 'react-bootstrap';

const TopForm = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setValidated(true);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        // form sending to email
        const formData = new FormData(form);
        await sendMail(formData);
        // end
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
                        <Form.Control required type="text" id="name" name='name' placeholder="Enter Name*" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control required type="email" id="email" name='email' placeholder="Enter Email Address*" pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <Form.Label htmlFor="contact">Contact No.</Form.Label>
                        <Form.Control type="number" id="contact" name="phone" placeholder="Enter Phone Number*" required />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <Form.Label htmlFor="service">Service</Form.Label>
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
