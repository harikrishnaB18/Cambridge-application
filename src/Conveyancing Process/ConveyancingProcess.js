import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import localconveyancing from '../Images/local conveyancing solicitors.png';
import '../Conveyancing Process/ConveyancingProcess.css';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../components/useToggle.js';

const ConveyancingProcess = (style,className) => {
    const [drawer, drawerAction] = useToggle(false);
  const [tab, setTab] = useState('setting');
  const [showQues, setQues] = useState(1);

  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  const openQuestion = (value) => {
      setQues(value);
  }
  return (
    <div>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderHomeTwo action={drawerAction.toggle} />
      <div className='container'>
        <div className='row '>
          <div className='text-center pt-5 '>
            <h1>Get the Best Conveyancing Quotes in Cambridge</h1>
            <h3 className='pt-4'>Free Instant Online Quotes</h3>
            <p className='pt-4 fs-5 lh-lg'>
              From start to finish, our guide will help you navigate through the process with
              precise, step-by-step information.<br />
              Get a Fast, Free, and No-obligation Conveyancing Quote today.
            </p>
          </div>
        </div>
        <p className='pt-4 text-center fs-5 fw-medium section-1'>
          Finding the best conveyancing quotes in Cambridge doesn't have to be complicated.
          Understanding the conveyancing process is crucial to ensure everything runs smoothly,
          whether buying, selling, or remortgaging a property. In this guide, we'll explain what
          conveyancing involves and how to get the best fixed-fee quotes from local solicitors
          in Cambridge.
        </p>
      </div>
      <div className='container'>
        <div className='row '>
          <div className='ml-3 mr-3 pt-3 section-2'>
            <h2>What is Conveyancing?</h2>
            <p className='pt-4 fs-5'>
              Conveyancing is the legal process of transferring property ownership from one
              person to another. It involves several steps, including initial property searches,
              checks, exchanging contracts, and completing the sale. A professional conveyancer or
              solicitor ensures that all legal aspects are properly managed, helping you avoid delays
              or potential issues down the line.
            </p>
            <p className='pt-5 fs-5'>
              When moving home in Cambridge, you'll need to hire a licensed conveyancer or a
              conveyancing solicitor to guide you through this process. They will handle the legal
              paperwork, communicate with the other party's solicitor, and ensure everything is in
              place before completing the transaction. Choosing the right conveyancer can make a
              significant difference in keeping the process simple, stress-free, and cost-effective.
            </p>
          </div>
        </div>
      </div>
      <section className="appie-features-area pt-10" id="features">
      <h2 className='mt-5 text-center'>The Conveyancing Process Explained</h2>
      <p className='mt-3 fs-5 text-center'>Many people aren't entirely sure what the conveyancing process entails. Let's break it down step by step so you know what to expect:</p>
        <div className="container mt-5 pb-2">
          <div className="row align-items-center pb-10">
            <div className="col-lg-3 mt-5">
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
                     Instruction of Solicitors
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
                   Property Searches
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
                    Drafting and Exchanging Contracts
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
                    Completion
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
                                            <p className='fs-5'>
                                            Once you've made an offer on a property or agreed to a sale, you'll need to instruct a conveyancing 
                                            solicitor. They will begin by gathering details about the property and preparing the initial paperwork.
                                            It's important to choose a solicitor who is experienced and local to Cambridge, 
                                            as they will have in-depth knowledge of the area and can help ensure that everything proceeds smoothly.
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
                                            <p className='fs-5'>
                                                Your solicitor will conduct several property searches to check for any issues that 
                                                could affect the sale. These include local authority searches, water and drainage searches, 
                                                and environmental checks. This is particularly important in Cambridge, 
                                                as some properties may be impacted by historical land use or environmental factors specific to the area.
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
                                            <p className='fs-5'>
                                            Once the searches are complete, your solicitor will draft the contract for the sale or purchase.
                                            They will liaise with the other party's solicitor to agree on the terms. Once both parties are satisfied with the contract, 
                                            you'll exchange contracts, which is when the sale becomes legally binding.
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
                                            <p className='fs-5'>
                                            The final stage of the conveyancing process is completion, where the purchase price balance 
                                            is transferred, and you receive the keys to your new home. At this point, all legal ownership
                                             is transferred, completing the process. Your solicitor will ensure that any outstanding fees,
                                             including stamp duty, are paid and will register the property in your name with the HM Land Registry.
                                            </p>
                                            {/* <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link> */}
                                        </div>
                                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                                <div className="col-lg-4">
                                    <div className="about-thumb mt-50">
                                            <img src={localconveyancing} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                    <div className="appie-about-content"> 
                                            <h5 className="title ml-5">
                                            Why Choose a Local Cambridge Solicitor?</h5>
                                            <p className=' justify-text fs-5'>
                                            When searching for the best conveyancing quotes in Cambridge, choosing a local solicitor who understands the area is essential. Here's why:
<br/><p className='fw-semibold fs-5'>Local Knowledge:</p>
Cambridge has unique property challenges, such as older buildings and conservation areas. A local solicitor will be aware of these issues and can ensure that all necessary checks are performed.

<p className='fw-semibold fs-5'>Faster Service:</p>
Being based locally allows your solicitor to respond to any issues quickly and even visit the property if necessary, helping to expedite the process.

<p className='fw-semibold fs-5'>Established Relationships:</p>
Local solicitors often have established relationships with estate agents and other professionals in the area, facilitating efficient communication and problem-solving.                                            </p>
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
            <section>
            <div>
              <div className='container'>
                <div className='row'>
                                    <div className="col-lg-12">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span className='m-4'>Conveyancing Quotes in as Little as 30 Seconds</span>
                                            <h2 className="mb-5">
                                            Free No Obligation Conveyance <br/>Quote with No Hidden Fees
                                            </h2>
                                            <p>
                                            When buying, selling, or remortgaging your home, it is important to handle the legal process quickly and efficiently.
                                            While high-quality service is crucial, it is also important to keep costs affordable.
                                            </p>
                                            <Link className="next-btn" to="#">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                    </div>
                    </div>
            </section>
            <section className="appie-features-area pt-10" id="features">
      <h2 className='mt-5 text-center'>How to Get the Best Conveyancing Quotes in Cambridge</h2>
      <p className='mt-3 fs-5 text-center'>Finding the best conveyancing quote doesn't always mean opting for the cheapest option. Here's what to consider:</p>
        <div className="container mt-5 pb-2">
          <div className="row align-items-center pb-10">
            <div className="col-lg-3 mt-5">
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
                     Fixed Fee Quotes
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
                   No Sale, No Fee
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
                    Fast Turnaround Times
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
                                            <p className='fs-5'>
                                            A reputable conveyancing solicitor will provide a fixed fee quote, ensuring you know what you'll pay from the start.
                                            Fixed fees are particularly beneficial as they prevent unexpected costs from arising during the process.
                                            Ensure that the quote includes all services to avoid any hidden extras. At Cambridge Conveyancing,
                                            we pride ourselves on offering transparent fixed-fee quotes covering all legal work aspects.
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
                                            <p className='fs-5'>
                                            Choose conveyancers with a "no sale, no fee" guarantee. This means that if your sale or purchase falls through,
                                            you won't have to pay for any legal work that has already been completed. This can provide peace of mind,
                                            especially when buying in a competitive market like Cambridge, where deals may not always go as planned.
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
                                            <p className='fs-5'>
                                            Time is often critical when it comes to property transactions.
                                            A good conveyancing solicitor should be able to work efficiently to ensure that everything is completed on schedule.
                                            Ask for an estimated timeline before committing to a conveyancer to ensure they can meet your needs.
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
                                            <p className='fs-5'>
                                            The final stage of the conveyancing process is completion, where the purchase price balance 
                                            is transferred, and you receive the keys to your new home. At this point, all legal ownership
                                             is transferred, completing the process. Your solicitor will ensure that any outstanding fees,
                                             including stamp duty, are paid and will register the property in your name with the HM Land Registry.
                                            </p>
                                            {/* <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link> */}
                                        </div>
                                    </div>
                    </div>
              </div>
            </div>
          </div>
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
                                                <h4>What is the difference between a conveyancer and a solicitor?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Both conveyancers and solicitors can manage property transactions.
                                                    However, solicitors are fully qualified lawyers who can provide a broader range of legal services,
                                                    while conveyancers specialize in property law. For most residential sales and purchases,
                                                    either a conveyancer or a solicitor can assist you.
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
                                                <h4>How long does the conveyancing process take?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    The process can last anywhere from 6 to 12 weeks, depending on the complexity of the transaction.
                                                    Local factors, such as property searches in Cambridge, may also impact the timeline.
                                                    Your solicitor will give you a clearer idea once they start the process.
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
                                                <h4>Can I get an online conveyancing quote?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Absolutely! At Cambridge Conveyancing, we offer instant online fixed-fee quotes for all property transactions.
                                                    Simply fill out the form on our website, and we'll provide you a tailored quote.
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
                                                <h4>Do I have to use a solicitor in Cambridge?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    No, but using a local solicitor has many advantages,
                                                    such as a better understanding of the local property market and addressing location-specific 
                                                    issues more effectively.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(5)}
                                        className={`accrodion ${showQues === 5 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Are there any hidden fees?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 5 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    At Cambridge Conveyancing, we value transparency. All our quotes are fixed-fee,
                                                    meaning you know exactly what you're paying for from the outset, with no hidden costs..
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
                                {/* <div className="col-lg-4">
                                    <div className="about-thumb mt-50">
                                            <img src={localconveyancing} alt="" />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                    <div className="appie-about-content"> 
                                            <h5 className="title ml-5">
                                            Get Your Fixed Fee Conveyancing Quote Today</h5>
                                            <p className=' justify-text mb-4 fs-5'>
                                            Now that you understand the conveyancing process and the importance of selecting the right solicitor, it's time to take action. If you're looking for the best conveyancing quotes in Cambridge, look no further. Our fixed-fee quotes are competitive, transparent, and designed to give you peace of mind throughout your property transaction.
                                            </p>
                                            <p className=' justify-text mb-4 fs-5'>
                                            We have extensive experience working with properties in Cambridge and surrounding areas, such as Chesterton, Milton, Histon, and Great Shelford. Our local knowledge enables us to offer you the best possible service tailored to the specific challenges of the Cambridge property market.                                            </p>
                                            <p className=' justify-text fs-5'>
                                            Fill out the form today to receive your fixed-fee quote from one of our expert conveyancing solicitors in Cambridge. We're here to make your property transaction as smooth and straightforward as possible.</p>
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
            <FooterHomeTwo/>
    </div>
  );
};

export default ConveyancingProcess;
