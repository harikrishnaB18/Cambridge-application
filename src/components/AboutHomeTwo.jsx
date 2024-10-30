import React from 'react';
import fixedcomveyancing from '../Images/fixed fee comveyancing.png';

function AboutHomeTwo() {
    return (
        <>
            <section className="appie-about-area mb-20">
                <div className='container'>
                    <div className='row mb-50'>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="150px" fill="#233955"><path d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                            <div className='text-left ml-3'>
                                <h4 className='mb-1'>Local Conveyancing</h4>
                                <p>Quicker Communication & Local Knowledge for a Smoother Property Transaction.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 d-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="150px" fill="#233955"><path d="M80-40v-60h800v60H80Zm80-120v-210q-39-91-54-147.5T91-631q0-58 14.5-122T146-874q10-22 26.5-33.5T209-919q27 0 41 17.5t14 52.5v131q0 44 17 83t46.5 68q29.5 29 68.5 45.5t84 16.5q81 0 141 12t100 35q40 23 59.5 58.5T800-316v156H390v-37q0-38 26-65.5t64-27.5h150v-60H480q-63 0-106.5 45T330-197v37H160Zm320-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" /></svg>
                            <div className='text-left ml-3'>
                                <h4 className='mb-1'>Local Conveyancing</h4>
                                <p>Quicker Communication & Local Knowledge for a Smoother Property Transaction.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 d-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="150px" fill="#233955"><path d="M360-860v-60h240v60H360Zm90 447h60v-230h-60v230Zm30 332q-74 0-139.5-28.5T226-187q-49-49-77.5-114.5T120-441q0-74 28.5-139.5T226-695q49-49 114.5-77.5T480-801q67 0 125.5 22T710-717l51-51 43 43-51 51q36 40 61.5 97T840-441q0 74-28.5 139.5T734-187q-49 49-114.5 77.5T480-81Z"/></svg>                            <div className='text-left ml-3'>
                                <h4 className='mb-1'>Local Conveyancing</h4>
                                <p>Quicker Communication & Local Knowledge for a Smoother Property Transaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-about-box wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="row">
                                    <div className="col-lg-8">
                                    <div className="appie-about-content"> 
                                            <h5 className="title white-text">
                                            Local Cambridge Conveyancing Solicitors
                                            </h5>
                                            <p className='white-text justify-text'>
                                            When buying or selling property in Cambridge, choosing a local conveyancing company can make a real difference. Local solicitors have a deep understanding of the Cambridge property market and familiarity with the area leads to smoother, faster transactions.
                                            </p>
                                            <p className='mt-3 white-text justify-text'>
                                            Local conveyancers often have established relationships with estate agents, surveyors, and other professionals in the area. Taping into these strong networks can speed up communication, streamline the process, and help avoid unnecessary delays. Having someone who understands the local market and has reliable contacts is invaluable.
                                            </p>
                                            <p className='mt-3 white-text justify-text'>
                                            With <strong>local Cambridge conveyancers</strong>,you will get a more personalised service. Unlike national firms that may treat you as just another client, local solicitors provide a more hands-on approach, offering you direct access to the team handling your case. Whether buying, selling, or remortgaging, working with a local conveyancer ensures you're in expert hands..
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="about-thumb mt-160">
                                            <img src={fixedcomveyancing} alt="" />
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

export default AboutHomeTwo;
