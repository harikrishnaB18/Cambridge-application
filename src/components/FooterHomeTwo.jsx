import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

function FooterHomeTwo() {
    return (
        <>
            <section className="appie-footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="footer-about-widget footer-about-widget-2">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div> 
                                <p>
                                Cambridge Conveyancing offers quotes for expert, fixed-fee property transfer services, with local knowledge and personalised support for smooth home buying, selling, and remortgaging experiences.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation footer-navigation-2">
                                <h4 className="title">Advice</h4>
                                <ul>
                                    <li>
                                        <Link to="#">Conveyancing Process</Link>
                                    </li>
                                    <li>
                                        <Link to="#">What a Conveyancing Solicitor Does</Link>
                                    </li>
                                    <li>
                                    <Link to="#">3 Stages of Conveyancing</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Guide to Remortgaging in Cambridge</Link>
                                    </li>
                                    <li>
                                        <Link to="#">How Long Does Conveyancing Take</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Conveyancing for First Time Buyers</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation footer-navigation-2">
                                <h4 className="title">Quick Links</h4>
                                <ul>
                                    <li>
                                        <Link to="#">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/form">Contact Us</a>
                                    </li>
                               
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation footer-navigation-2">
                                <h4 className="title">Follow Us</h4>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="
                footer-copyright
                d-flex
                align-items-center
                justify-content-between
                pt-35
              "
                            >
                                <div className="apps-download-btn">
                                    
                                </div>
                                <div className="copyright-text">
                                    <p>Copyright © 2024 Appie. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeTwo;
