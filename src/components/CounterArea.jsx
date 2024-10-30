import React from 'react';
// import counterIconOne from '../../assets/images/icon/counter-icon-1.svg';
// import counterIconTwo from '../../assets/images/icon/counter-icon-2.svg';
// import counterIconThree from '../../assets/images/icon/counter-icon-3.svg';
 import localconveyancing from '../Images/local conveyancing solicitors.png';

function CounterArea({ style }) {
    return (
        <>
            <section className="appie-counter-area pt-50 pb-50" id="counter" style={style}>
                <div className="container">
                <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-about wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="row">
                                <div className="col-lg-5">
                                    <div className="about-thumb mt-50">
                                            <img src={localconveyancing} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                    <div className="appie-about-content"> 
                                            <h5 className="title ml-5">
                                            Fixed Fee Conveyancing
                                            </h5>
                                            <p className=' justify-text'>
                                            Looking to move home or remortgage in Cambridge? Our team of <strong>Cambridge Conveyancing Solicitors</strong> is here to offer expert services for buying, selling, and remortgaging properties throughout Cambridge, and the surrounding areas. Get instant online fixed fee quote from a fully accredited solicitor and licensed conveyancer.
                                            </p>
                                            <p className='mt-3  justify-text'>
                                            When it comes to choosing a conveyancing solicitor, getting a competitive fixed fee is crucial. Our quotes come from highly efficient Cambridge property lawyers who ensure a smooth, quick completion. All quotes cover the fixed conveyancing fee based on the information you provide. Keep in mind that the final amount may vary if additional details affect the original quote, and disbursements may change depending on your circumstances.
                                            </p>
                                        </div>
                                        <div className="appie-btn-box mt-5">
                                    <a className="main-btn ml-30" href="/#">
                                        Get a Quote
                                    </a>

                                </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CounterArea;
