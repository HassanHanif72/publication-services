import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12">
                            <div className="footer-logo">
                                <Link href="#"><Image src="/assets/images/logo-footer.svg" alt='footer logo' width={173} height={48} /></Link>
                                <p>Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed etid aenean haretra quam
                                    placerat adipiscing penatibus aliquam.</p>
                                <div className="social">
                                    <Link target="_blank" aria-label="Facebook" href="#"><i className="ri-facebook-circle-line"></i></Link>
                                    <Link target="_blank" aria-label="LinkedIn" href="#"><i className="ri-linkedin-box-line"></i></Link>
                                    <Link target="_blank" aria-label="Instagram" href="#"><i className="ri-instagram-line"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                            <div className="footer-links">
                                <h6>Quick Links</h6>
                                <ul className="list-unstyled">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                            <div className="footer-links">
                                <h6>Editing Services</h6>
                                <ul className="list-unstyled">
                                    <li><Link href="premium-editing">Premium Editing</Link></li>
                                    <li><Link href="copy-editing">Copy Editing</Link></li>
                                    <li><Link href="proofreading">Proofreading</Link></li>
                                    <li><Link href="quality-assurance">Quality Assurance</Link></li>
                                    <li><Link href="substantive-editing">Substantive Editing</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-links">
                                <h6>Our Services</h6>
                                <ul className="list-unstyled">
                                    <li><Link href="publication-support">Publication Support</Link> </li>
                                    <li><Link href="journal-selection">Journal Selection</Link></li>
                                    <li><Link href="pre-submission-review">Pre-Submission Review</Link> </li>
                                    <li><Link href="formatting-and-artwork-editing">Formatting And Artwork
                                        Editing</Link></li>
                                    <li><Link href="journal-submission">Journal Submission</Link></li>
                                    <li><Link href="resubmission-support">Resubmission Support</Link> </li>
                                    <li><Link href="plagiarism-check">Plagiarism Check</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-links">
                                <h6>Contact Us</h6>
                                <ul className="list-unstyled">
                                    <li><Link className="d-flex align-items-start gap-2" href="tel:+1234567890"><Image src="/assets/images/phone.webp" alt='phone' width={24} height={24} /> +1234567890</Link></li>
                                    <li><Link className="d-flex align-items-start gap-2" href="mailto:info@example.com"><Image src="/assets/images/email.webp" alt='email' width={24} height={24} />
                                        info@example.com</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="footer-bootom-links">
                                <span>Copyright © 2024 - 2025 . Website Name . All Rights Reserved.</span>
                                <div className="term_and_conditions">
                                    <Link href="terms-and-conditions">Terms &amp; Conditions</Link>
                                    <Link href="privacy-policy">Privacy Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
