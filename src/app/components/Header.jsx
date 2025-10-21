'use client'
import { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import OffCanvas from './OffCanvas';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isHover, setIsHover] = useState({
        editingServices: false,
        ourServices: false
    });

    // hover dropdown
    const handleMouseEnter = (dropdownName) => {
        setIsHover(prevState => ({
            ...prevState,
            [dropdownName]: true
        }))
    }
    const handleMouseLeave = (dropdownName) => {
        setIsHover(prevState => ({
            ...prevState,
            [dropdownName]: false
        }));
    }
    // end

    // add sticky class
    useEffect(() => {
        const handleScrool = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScrool)
        handleScrool();
        return () => {
            window.removeEventListener('scroll', handleScrool)
        }
    }, []);
    // end

    // Off canvas
    const [offcanvasShow, setOffcanvasShow] = useState(false);
    const handleClose = () => setOffcanvasShow(false);
    const handleShow = () => setOffcanvasShow(true);
    // end

    return (
        <>
            <header className={`header ${isSticky ? 'sticky' : ''}`}>
                <nav className="navbar navbar-expand-xl navbar-dark stroke bg-transparent">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <Image src="/assets/images/logo.png" alt="logo" width={75} height={21} />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={handleShow} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " href="about-us">About Us</Link>
                                </li>
                                <li className="nav-item dropdown navdesktop">
                                    <Link className="nav-link " href="#" onMouseEnter={() => handleMouseEnter('editingServices')} onMouseLeave={() => handleMouseLeave('editingServices')}>
                                        Editing Services <i className="ri-arrow-down-s-line"></i>
                                    </Link>
                                    <ul className={`dropdown-menu ${isHover.editingServices ? 'show' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('editingServices')}
                                        onMouseLeave={() => handleMouseLeave('editingServices')} aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" href="premium-editing">Premium Editing</Link></li>
                                        <li><Link className="dropdown-item" href="copy-editing">Copy Editing</Link></li>
                                        <li><Link className="dropdown-item" href="proofreading">Proofreading</Link></li>
                                        <li><Link className="dropdown-item" href="quality-assurance">Quality Assurance</Link></li>
                                        <li><Link className="dropdown-item" href="substantive-editing">Substantive Editing</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" href="#" onMouseEnter={() => handleMouseEnter('ourServices')} onMouseLeave={() => handleMouseLeave('ourServices')}>
                                        Our Services <i className="ri-arrow-down-s-line"></i>
                                    </Link>
                                    <ul className={`dropdown-menu ${isHover.ourServices ? 'show' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('ourServices')}
                                        onMouseLeave={() => handleMouseLeave('ourServices')}
                                        aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" href="publication-support">Publication Support</Link> </li>
                                        <li><Link className="dropdown-item" href="journal-selection">Journal Selection</Link></li>
                                        <li><Link className="dropdown-item" href="pre-submission-review">Pre-Submission Review</Link> </li>
                                        <li><Link className="dropdown-item" href="formatting-and-artwork-editing">Formatting And Artwork
                                            Editing</Link></li>
                                        <li><Link className="dropdown-item" href="journal-submission">Journal Submission</Link></li>
                                        <li><Link className="dropdown-item" href="resubmission-support">Resubmission Support</Link> </li>
                                        <li><Link className="dropdown-item" href="plagiarism-check">Plagiarism Check</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " href="#">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-xl-block d-none">
                            <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal"
                                className="btn btn-theme">Get Started <span><i className="ri-arrow-right-up-line"></i></span></button>
                        </div>
                    </div>
                </nav>
            </header>
            <OffCanvas show={offcanvasShow} handleClose={handleClose} />
        </>
    )
}

export default Header
