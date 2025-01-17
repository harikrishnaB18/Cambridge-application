import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import localconveyancing from '../Images/local conveyancing solicitors.png';
import '../Conveyancing Process/ConveyancingProcess.css';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../components/useToggle.js';

const CambridgeConveyancing = (style,className) => {
    const [drawer, drawerAction] = useToggle(false);
  const [tab, setTab] = useState('setting');
  const [showQues, setQues] = useState(null);

  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  const openQuestion = (id) => {
    setQues((prev) => (prev === id ? null : id)); // Toggle between open and close
};
  return (
    <div>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderHomeTwo action={drawerAction.toggle} />
      <div className='container'>
        <div className='row '>
          <div className='text-center pt-5 '>
            <h1>Cambridge Conveyancing Solicitors
            </h1>
            {/* <h3 className='pt-4'>Free Instant Online Quotes</h3> */}
            <p className='pt-4 '>
            Offering expert, reliable services to make buying, selling, or remortgaging a property in Cambridge a smooth and stress-free experience.
            </p>
          </div>
        </div>
        {/* <p className='pt-4 text-center fs-5 fw-medium section-1'>
          Finding the best conveyancing quotes in Cambridge doesn't have to be complicated.
          Understanding the conveyancing process is crucial to ensure everything runs smoothly,
          whether buying, selling, or remortgaging a property. In this guide, we'll explain what
          conveyancing involves and how to get the best fixed-fee quotes from local solicitors
          in Cambridge.
        </p> */}
      </div>
      <section className="appie-counter-area pt-20 mt-5 pb-50" id="counter" style={style}>
                <div className="container">
                <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-about wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="row">
                                <div className="col-lg-6">
                                    <div className="about-thumb mt-50">
                                    <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d77912.1961585366!2d0.22803185603616621!3d52.39297108902703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1730212469693!5m2!1sen!2suk"
    width="100%"
    height="500"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
></iframe>
                                       
                </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="appie-about-content"> 
                                            <h5 className="title">
                                            Local Experts for a Smooth Property Transaction</h5>
                                            <p className=' justify-text '>
                                            Buying or selling a property is an exciting milestone, yet it often involves complex processes that can feel overwhelming. Cambridge Conveyancing is here to make the experience as straightforward and stress-free as possible, offering <b>trusted conveyancing services in Cambridge</b> to guide you through every essential step.</p>
                                            <p className=' justify-text  mt-5'>Engaging a local conveyancing solicitor with deep expertise in the Cambridge property market is invaluable, whether you're navigating your first home purchase, expanding an investment portfolio, or preparing to sell a family home. With a dedicated, experienced team handling all legal aspects, each stage of the conveyancing journey is managed efficiently, ensuring that the process remains smooth and hassle-free from beginning to end.</p>
                                            {/* <p className='mt-3  justify-text'>
                                            When it comes to choosing a conveyancing solicitor, getting a competitive fixed fee is crucial. Our quotes come from highly efficient Cambridge property lawyers who ensure a smooth, quick completion. All quotes cover the fixed conveyancing fee based on the information you provide. Keep in mind that the final amount may vary if additional details affect the original quote, and disbursements may change depending on your circumstances.
                                            </p> */}
                                        </div>
                                        <div className="appie-btn-box mt-5">
                                    {/* <a className="main-btn ml-30" href="/#">
                                        Get a Quote
                                    </a> */}

                                </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      <div className='container'>
        <div className='row '>
          <div className='ml-3 mr-3 pt-3 section-2'>
            <h2>Why Choose a Cambridge Conveyancing Solicitors?</h2>
            <p className='pt-4 '>
            Cambridge Conveyancing offers trusted local expertise and is dedicated to client satisfaction, making it the go-to website for conveyancing services. With extensive knowledge of the Cambridge property market and years of experience in handling both residential and commercial transactions, the team provides a friendly yet professional service that simplifies even the most complex conveyancing processes.
            </p>
            <p className='pt-4 '>
            Each solicitor is well-acquainted with local areas across Cambridge and surrounding towns, ensuring timely and efficient service tailored to the unique needs of each neighbourhood. From buying in Cherry Hinton to moving to Trumpington or selling in Milton, Cambridge Conveyancing is here to support every step of the way.
            </p>
          </div>
        </div>
      </div>
      <section className="appie-features-area pt-10" id="features">
      <h2 className='mt-5 text-center'>What Services Do Cambridge Conveyancing Solicitors Offer?</h2>
      <p className='mt-3  text-center'>Cambridge conveyancing solicitors provide a comprehensive range of services to cover all aspects of property transactions:</p>
        <div className="container mt-5 pb-2">
          <div className="row align-items-center pb-10">
            <div className="col-lg-3">
              <div className="appie-features-tabs-btn">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    onClick={(e) => handleClick(e, 'setting')}
                    className={`nav-link ${tab === 'setting' ? 'active' : ''}`}
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                     Buying a Property
                  </a>
                  <a
                    onClick={(e) => handleClick(e, 'report')}
                    className={`nav-link ${tab === 'report' ? 'active' : ''}`}
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                   Selling a Property
                  </a>
                  <a
                    onClick={(e) => handleClick(e, 'notice')}
                    className={`nav-link ${tab === 'notice' ? 'active' : ''}`}
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Re-Mortgaging
                  </a>
                  <a
                    onClick={(e) => handleClick(e, 'app')}
                    className={`nav-link ${tab === 'app' ? 'active' : ''}`}
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Transfer of Equity
                  </a>
                  <a onClick={(e) => handleClick(e, 'completion')} className={`nav-link ${tab === 'completion' ? 'active' : ''}`} id="v-pills-completion-tab" data-toggle="pill" href="#v-pills-completion" role="tab" aria-controls="v-pills-completion" aria-selected="false">
                  Shared Ownership and Leasehold Services
            </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`${
                    tab === 'setting' ? 'show active' : ''
                  } tab-pane fade`}
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                                                 <div className="row align-items-center">
                                    {/* <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Explanation</span>
                                            {/* <h3 className="title">
                                                Let the <br /> Conversation flow
                                            </h3> */}
                                            <p className=''>
                                            Purchasing a home is a major step, and conveyancing solicitors are available to handle all the legal details involved. From title checks to communicating with mortgage lenders, these services aim to make the process hassle-free, allowing buyers to focus on the excitement of their new home.
                                            </p>
                                            {/* <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                </div>
                <div
                  className={`${
                    tab === 'report' ? 'show active' : ''
                  } tab-pane fade`}
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                                    <div className="col-lg-12">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Explanation</span>
                                            {/* <h3 className="title">
                                                Let the <br /> Conversation flow
                                            </h3> */}
                                            <p className=''>
                                            Selling a property involves various legal requirements, and experienced conveyancing professionals can guide the process with confidence. They take care of essential tasks, including liaising with the buyer's solicitor, managing contracts, and resolving any queries that may arise.
                                            </p>
                                            {/* <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link> */}
                                        </div>
                                    </div>                
                                    </div>
                <div
                  className={`${
                    tab === 'notice' ? 'show active' : ''
                  } tab-pane fade`}
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                                    <div className="col-lg-12">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Explanation</span>
                                            {/* <h3 className="title">
                                                Let the <br /> Conversation flow
                                            </h3> */}
                                            <p className=''>
                                            For those looking to refinance a property, conveyancing solicitors simplify the remortgaging process by handling all necessary legal steps—from title deeds to coordinating with mortgage providers—saving time and reducing stress.
                                            </p>
                                            {/* <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link> */}
                                        </div>
                                    </div>                 
                                    </div>
                <div
                  className={`${
                    tab === 'app' ? 'show active' : ''
                  } tab-pane fade`}
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                                    <div className="col-lg-12">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Explanation</span>
                                            {/* <h3 className="title">
                                                Let the <br /> Conversation flow
                                            </h3> */}
                                            <p className=''>
                                            When property ownership needs to be transferred between parties, conveyancing solicitors ensure the transaction is handled smoothly, with all legal processes completed accurately and promptly.
                                            </p>
                                            {/* <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link> */}
                                        </div>
                                    </div>
                    </div>
                    <div className={`${tab === 'completion' ? 'show active' : ''} tab-pane fade`} id="v-pills-completion" role="tabpanel" aria-labelledby="v-pills-completion-tab">
            <div className="col-lg-12">
              <div className="appie-features-content wow animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                <span>Explanation</span>
                <p className=''>Whether purchasing a shared ownership property or navigating a leasehold purchase, conveyancing experts can assist with these more complex transactions. They provide clear, straightforward guidance to help clients make informed decisions throughout the process.</p>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="appie-features-area-2 appie-features-area-5 pt-50 pb-50" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="appie-section-title appie-section-title-2 text-center">
                                <h4 className="appie-title"> Get a Fixed Fee Conveyancing Quote <br />in as Little as 30 Seconds - Completely FREE</h4>
                                {/* <p>
                                    The full monty spiffing good time no biggie cack grub fantastic.
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-features-boxes">
                                <div className="appie-features-box-item">
                                    <h4 className="title">Tell us your property information</h4>
                                    <p>Fill out the short form to receive instant online quotes.</p>
                                </div>
                                <div className="appie-features-box-item item-2">
                                    <h4 className="title">Fixed fee conveyancing quote</h4>
                                    <p>See what you can save with a local property solicitors.</p>
                                </div>
                                <div className="appie-features-box-item item-3">
                                    <h4 className="title">Start conveyancing today</h4>
                                    <p>Instruct your Cambridge conveyancing solicitor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-features-thumb wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            > 
                                <img src={localconveyancing} alt="" /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-shape-1">
                    {/* <img src={shape15} alt="" /> */}
                </div>
                <div className="features-shape-2">
                    {/* <img src={shape14} alt="" /> */}
                </div>
                <div className="features-shape-3">
                    {/* <img src={shape13} alt="" /> */}
                </div>
            </section>

      <section className={`appie-faq-area pb-95 mt-5 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title mt-5">Frequently Asked Questions about Conveyancing in Cambridge</h3>
                                <p>If you still have questions about the process, here are some frequently asked questions that might help:</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(1)}
                                        className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Why Local Knowledge Matters in Cambridge Conveyancing
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Cambridge has a vibrant and unique property market with distinctive architectural styles and local requirements. Choosing a conveyancing solicitor who understands Cambridge is invaluable in ensuring a smooth and efficient transaction. Our knowledge of local councils, planning laws, and market trends helps us identify and address potential issues before they become problems, saving you time and money.

We also have established relationships with other local professionals, including surveyors, estate agents, and financial advisors, providing a network of support throughout the process.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Fixed Fee Conveyancing – Transparency and No Surprises</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    At Cambridge Conveyancing, we believe in providing clarity and transparency from the very beginning. Our fixed fee conveyancing structure ensures you know exactly what to expect regarding costs. We take pride in offering competitive, all-inclusive quotes that cover everything you need to complete your transaction.

When you fill out our free quote calculator, you'll receive a comprehensive breakdown of fees with no hidden costs. This transparent approach allows you to budget confidently, knowing the full scope of what's included in our conveyancing services.


                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(3)}
                                        className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>How to Get Started – Try Our Free Quote Calculator</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Ready to take the next step? Getting a fixed fee quote from Cambridge Conveyancing is quick and easy. Simply fill in our online quote calculator, and within moments, you'll receive a clear estimate tailored to your specific needs. There's no obligation, and our team is here to answer any questions as you review the quote.

Our experienced conveyancing solicitors are committed to providing exceptional service, whether you're buying, selling, or remortgaging. We invite you to see how stress-free the process can be with Cambridge Conveyancing by your side.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(4)}
                                        className={`accrodion ${showQues === 4 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Use Cambridge Conveyancing Solicitors Today
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    If you're looking for reliable, professional conveyancing solicitors in Cambridge, fill out the form today. We're here to make your property transaction as smooth and straightforward as possible, and we look forward to helping you achieve your goals.

Complete our free quote calculator now to receive your personalised quote. With Cambridge Conveyancing, your property journey starts with confidence and peace of mind.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Can't find an answer?{' '}
                                    <a href="mailto:demo@gmail.com">Email us</a>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <FooterHomeTwo/>
    </div>
  );
};

export default CambridgeConveyancing;
