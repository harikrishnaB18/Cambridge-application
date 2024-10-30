import React from 'react';
import localconveyancing from '../Images/local conveyancing solicitors.png';

function HelpingSection() {

    return (
        <> 
            <section className=" pt-30 mb-50 pb-50 help-content" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-about wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="row">

                                    <div className="col-lg-7">
                                        <div className="appie-about-content">
                                            <h5 className="title ml-5">
                                                We are here to help!
                                            </h5>
                                            <p className=' justify-text'>
                                                Our local conveyancing solicitors in Cambridge are experts in the property market across the city and neighboring villages such as Histon, Girton, Fulbourn, and Shelford. Benefit from an in-depth understanding of the unique aspects of buying and selling property in Cambridge. From local planning regulations to specific property searches, they are here to help make your transaction smoother and faster.
                                            </p>
                                            <p className='mt-3  justify-text'>
                                                Get a fixed fee quote and move forward with confidence. Whether you're buying your first home or remortgaging, our local experts are here for you.
                                            </p>
                                            <p className='mt-3  justify-text'>
                                                Ready to get started? Fill in the form today to receive your no-obligation fixed-fee quote and let our Cambridge-based team guide you through the process quickly and efficiently!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="about-thumb mt-50">
                                            <img src={localconveyancing} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='mt-50 mb-50 text-center'>
                <h2>Still not sure?<br />
                    Contact us to discuss your conveyancing questions.</h2>
                <div className='d-flex justify-content-center'>
                    <div className="appie-btn-box mt-5">
                        <a className="main-btn ml-30" href="/#">
                            Email Us
                        </a>

                    </div>
                    <div className="appie-btn-box mt-5">
                        <a className="main-btn ml-30" href="/#">
                            Start a Quote
                        </a>

                    </div>
                </div>
            </section> */}
        </>
    );
}

export default HelpingSection;
