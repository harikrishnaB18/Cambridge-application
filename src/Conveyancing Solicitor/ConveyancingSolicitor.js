import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import localconveyancing from '../Images/local conveyancing solicitors.png';
import '../Conveyancing Process/ConveyancingProcess.css';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../components/useToggle.js';

const ConveyancingSolicitor = (style,className) => {
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
            <h1>What Conveyancing Solicitors Do</h1>
            <h3 className='pt-4'>Experienced Cambridge Conveyancing Solocitors Guide You</h3>
            <p className='pt-4 '>
            Understand Just How Good Local Solicitors Can Help You Get Moving Faster & Easier
            </p>
          </div>
        </div>
        <p className='pt-4 text-center  fw-medium section-1'>
        When buying or selling a property, you’ll encounter the term “conveyancing solicitor.”
        But what exactly does a conveyancing solicitor do? Here, we’ll break down a conveyancing solicitor's key roles and responsibilities,
        helping you understand why they’re essential for a smooth property transaction.
        </p>
        <p className='pt-2 '>Whether you’re new to the property market or a seasoned buyer or seller,
            knowing the process can help make your experience more straightforward and less stressful.
            Our Cambridge Conveyancing Solicitors are experienced in handling property transactions across the region and offer fixed-fee quotes for all our services,
            so you know what to expect right from the start.
        </p>
      </div>
      <div className='container'>
        <div className='row '>
          <div className='ml-3 mr-3 pt-3 section-2'>
            <h2>The Role of a Conveyancing Solicitor</h2>
            <p className='pt-4 '>
            A conveyancing solicitor is a qualified legal professional who specialises in property law and oversees the legal aspects of transferring property ownership from one party to another. From managing complex paperwork to ensuring all legal requirements are met, your conveyancing solicitor works to safeguard your interests throughout the process.
            </p>
            {/* <p className='pt-5 fs-5'>
              When moving home in Cambridge, you'll need to hire a licensed conveyancer or a
              conveyancing solicitor to guide you through this process. They will handle the legal
              paperwork, communicate with the other party's solicitor, and ensure everything is in
              place before completing the transaction. Choosing the right conveyancer can make a
              significant difference in keeping the process simple, stress-free, and cost-effective.
            </p> */}
          </div>
        </div>
      </div>
      <section className="appie-features-area pt-10" id="features">
      <h2 className='mt-5 text-center'>What Are the Key Stages of Conveyancing?</h2>
      <p className='mt-3  text-center'>Many people aren't entirely sure what the conveyancing process entails. Let's break it down step by step so you know what to expect:</p>
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
                    Initial Instructions
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
                   Legal Checks and Searches
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
                    Drafting and Reviewing Contracts
                  </a>
                  {/* <a
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
                  </a> */}
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
                                            The conveyancing process typically begins with you instructing a solicitor. This involves selecting a conveyancing solicitor, ideally a local professional familiar with the Cambridge area, as they’ll bring helpful local insights to your case. After agreeing to a fixed fee,
                                            the solicitor begins by gathering information about your property and transaction goals.
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
                                            Conveyancing solicitors conduct a range of legal checks, including land registry checks, title deed reviews, and property searches, to ensure no legal issues are associated with the property. Common searches include:?<br/>

Local authority searches**: Checking for any potential planning permissions or restrictions on the property.<br/>

Environmental searches**: Ensuring the property is free from environmental risks, like flood zones or contamination.<br/>

Water and drainage searches**: Confirming property connection to the public water and sewerage systems.<br/>
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
                                            Once the property searches are completed, your conveyancing solicitor will prepare the necessary legal documents,
                                            including the draft contract. This contract outlines the terms of the sale,
                                            and your solicitor must thoroughly review it to ensure everything is correct.
                                            They’ll negotiate with the other party’s solicitor if needed, ensuring your best interests are protected.
                                            </p>
                                            {/* <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link> */}
                                        </div>
                                    </div>                 
                                    </div>
                {/* <div
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
                                            <h3 className="title">
                                                Let the <br /> Conversation flow
                                            </h3>
                                            <p className='fs-5'>
                                            The final stage of the conveyancing process is completion, where the purchase price balance 
                                            is transferred, and you receive the keys to your new home. At this point, all legal ownership
                                             is transferred, completing the process. Your solicitor will ensure that any outstanding fees,
                                             including stamp duty, are paid and will register the property in your name with the HM Land Registry.
                                            </p>
                                            <Link className="main-btn" to="/about-us">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                    </div> */}
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
                                            Finalising the Process: Exchange and Completion</h5>
                                            <p className=' justify-text  '>
                                            When searching for the best conveyancing quotes in Cambridge, choosing a local solicitor who understands the area is essential. Here's why:
<br/><br/><p className='fw-semibold '>Exchange of Contracts?</p>
Once all checks are completed and any issues are resolved, contracts can be exchanged.
At this stage, the transaction is legally binding.Your conveyancing solicitor coordinates this step,
ensuring all required documents are signed and exchanged.<br/><br/>
<p className='fw-semibold '>Completion Day</p>
Completion day is the final stage in the conveyancing process, where funds are transferred to the seller, and the property keys are handed over to the buyer. Your solicitor will ensure that all final payments are made, and they’ll register the property in your name with the Land Registry.
</p>
                                        </div>
                                        <div className="appie-btn-box mt-5">
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
                                                <h4>Why Choose a Local Cambridge Conveyancing Solicitor?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    A local conveyancing solicitor offers advantages that can make your transaction smoother and more efficient. Local knowledge is particularly beneficial for understanding regional property issues, common local searches, and council requirements.
                                                    Cambridge conveyancing solicitors have unique insights into the area,
                                                    helping you address any location-specific problems that could impact your property transaction.
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
                                                <h4>How Long Does Conveyancing Take?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    While each transaction is unique, the conveyancing process usually takes 8-12 weeks. Factors like the property chain, legal complexities, and the efficiency of the other party’s solicitors can impact the timeline. A dedicated solicitor keeps the process as streamlined as possible, maintaining communication to avoid unnecessary delays.
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
                                                <h4>Benefits of a Fixed-Fee Conveyancing Quote
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                   <strong>Predictable Costs:</strong> 
You know precisely what you’re paying upfront by choosing a fixed-fee conveyancing solicitor. This approach offers peace of mind, avoiding unexpected costs arising from hourly billing.
Cambridge Conveyancing offers transparent, itemised quotes to ensure you know what you’ll pay.<br/>

<strong>Budget-Friendly:</strong>
Fixed-fee services help you budget accurately and avoid financial surprises. Knowing that your conveyancing fee is set lets you focus on other aspects of buying or selling your property.<br/>

<strong>No Hidden Fees:</strong>
Our fixed-fee quote covers all essential aspects of the process, from legal advice to property searches, giving you confidence that there won’t be hidden charges.
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
                                                <h4>How to Get Started with Cambridge Conveyancing
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
                                                    Our expert team at Cambridge Conveyancing is here to guide you through each stage of your transaction. With extensive knowledge of the Cambridge property market and a commitment to transparency, we offer fixed-fee quotes to ensure a smooth, predictable experience for our clients.<br/>
                                                    By choosing Cambridge Conveyancing, you benefit from local expertise and the reassurance that experienced professionals handle your transaction.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div
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
                                    </div> */}
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

export default ConveyancingSolicitor;
