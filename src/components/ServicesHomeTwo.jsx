import React from 'react';
import Buying from '../Images/buying.png'
import Sale from '../Images/for sale.png'
import buyandsell from '../Images/buying and selling.png'
import remortgage from '../Images/remortgage.png'


function ServicesHomeTwo({ className }) {
    return (
        <>
            <section className={`appie-services-2-area pb-50 pt-50 ${className}`} id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12 col-md-8 text-center">
                            <div className="appie-section-title">
                                <h3 className="appie-title">Conveyancing Solicitors in Cambridge</h3>
                                <h5 className='mt-3'>Free Instant Online Quotes</h5>
                                <p>
                                Get moving with the help of our expert independent conveyancing solicitors. <strong>We offer Fast, Free,and No-obligation Conveyancing Quotes.</strong>Let's make your move a smooth and hassle-free experience.                                </p>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-4">
                            <div className="appie-section-title text-right">
                                <a className="main-btn" href="#">
                                    View all Features <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-single-service-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="Conveyancing-services">
                                    <img src={Buying} alt='' className='w-10'/>
                                </div>
                                <h4 className="title">Buying a Property</h4>
                                <p>
                                Cost for conveyancing when buying a property
                                </p>
                                <a href="/purchasing-property">
                                   Get a Quote <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-single-service-2 item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="Conveyancing-services">
                                <img src={Sale} alt='' />
                                </div>
                                <h4 className="title">Selling a Property</h4>
                                <p>
                                Use a conveyancing solicitor you can rely on
                                </p>
                                <a href="/purchasing-property">
                                Get a Quote <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-single-service-2 item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="Conveyancing-services">
                                <img src={buyandsell} alt='' />
                                </div>
                                <h4 className="title">Buying & Selling</h4>
                                <p>
                                Unlock savings when you buy and sell with us
                                </p>
                                <a href="/purchasing-property">
                                Get a Quote <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-single-service-2 item-4 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="Conveyancing-services">
                                <img src={remortgage} alt='' className='w-10'/>
                                </div>
                                <h4 className="title">Remortgaging</h4>
                                <p>
                                Affordable quotes when you are remortgaging
                                </p>
                                <a href="/purchasing-property">
                                Get a Quote <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                <div className='mt-5'>
                    <h3 className='text-center mb-10'>Get an Instant Conveyancing Quote from Expert Conveyancing Solicitors</h3>
                    <p className='text-center fw-bold fs-2'>Get an instant fixed fee conveyancing quote in just 30 seconds - absolutely FREE!</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeTwo;
