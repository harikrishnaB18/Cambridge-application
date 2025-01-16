import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import localconveyancing from '../Images/local conveyancing solicitors.png';
import '../Conveyancing Process/ConveyancingProcess.css';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../components/useToggle.js';
import './StagesConveyancing.css'

const StagesConveyancing = (style,className) => {
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
            <h1>3 Stages of Conveyancing</h1>
            <h3 className='pt-4'>Get Expert Help at Affordable Rates</h3>
            <p className='pt-4 fs-5 lh-lg'>
            Understanding the 3 Stages of Conveyancing for Cambridge Property Buyers and Sellers
            </p>
          </div>
        </div>
        <p className='pt-4 text-center fs-5 fw-medium section-1'>
        Navigating the conveyancing process can feel overwhelming,
        whether you're buying or selling property in Cambridge or the surrounding villages.
        To help you feel confident in what to expect, let's break down the three main stages of conveyancing.
        This guide will make the steps more transparent and explain how working with local Cambridge Conveyancing Solicitors adds real value.
        </p>

      </div>
      <section className="appie-features-area pt-10 obligation-conveyance" id="features">
      <h2 className='mt-5 text-center'>Stage 1: Pre-Contract Phase</h2>
      <p className='mt-3 fs-5 text-center'>In the pre-contract phase, the groundwork is laid to ensure both parties are ready for the sale. This stage covers essential tasks like property searches, document reviews, and draft contracts, all necessary to give buyers peace of mind and sellers a clear path to sale.</p>
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
                    Property Searches
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
                   Reviewing and Drafting Contracts
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
                    Mortgage and Finances
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
                                            <p className='fs-5'>
                                            During this stage, a solicitor conducts various searches to uncover essential information about the property and surrounding area.Typical searches include:
                                            Local authority search: This examines planning permissions, building control records, and any potential issues affecting the property's value.<br/>

<b>Environmental search:</b>Environmental search: Ensures there are no environmental risks, such as flooding or contamination, associated with the land.<br/>

<b>Water and drainage search:</b> Confirms whether the property is connected to public water and drainage systems.<br/>

These searches help prevent unwanted surprises after purchase. With their local knowledge,Cambridge Conveyancing Solicitors can offer quicker turnarounds by knowing the specifics of Cambridge City and nearby villages.


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
                                            The solicitor prepares a draft contract, and the seller's solicitor will review this. The contract outlines the property price, boundaries, and any fixtures and fittings included. Both parties will review this carefully to reflect the agreed terms accurately. Any discrepancies or questions are resolved in this phase.
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
                                            The solicitor will also liaise with the mortgage lender for buyers.
                                            They ensure all loan conditions are clear and manageable and work to protect the buyer's legal rights.
                                            They'll also arrange to transfer funds for the purchase once contracts are exchanged.
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
      <section className="appie-features-area pt-10" id="features">
      <h2 className='mt-5 text-center'>Stage 2: Exchange of Contracts</h2>
      <p className='mt-3 fs-5 text-center'>The exchange of contracts is a significant milestone in conveyancing, as this is when the sale becomes legally binding. After this point, neither the buyer nor the seller can withdraw from the sale without a financial penalty.</p>
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
                   Signing Contracts
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
                   Deposits and Financial Arrangements
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
                     Setting a Completion Date
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
                                            <p className='fs-5'>
                                            Once all contract details are agreed upon, the buyer and the seller sign the final contract.
                                            Your solicitor will arrange for you to review the document and explain any terms or clauses.
                                            Once signed,the solicitor will send the contract to the other party's solicitor, completing the exchange.

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
                                            The buyer's solicitor will transfer the deposit, usually around 10% of the purchase price, to the seller's solicitor at this stage. This deposit serves as a commitment to follow through with the sale. Cambridge Conveyancing Solicitors can help streamline this process with local knowledge of banking times, ensuring funds transfer smoothly.</p>
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
                                            Both parties agree on a completion date when the contracts are exchanged.
                                            This is when the remaining funds are paid, and the buyer officially takes ownership of the property.
                                            The completion date typically occurs 7-28 days after the contract exchange,
                                            though this can vary based on each party's preferences and circumstances.
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
      <section className="appie-features-area pt-10 obligation-conveyance" id="features">
      <h2 className='mt-5 text-center'>Stage 3: Completion and Post-Completion</h2>
      <p className='mt-3 fs-5 text-center'>The final conveyancing stage is the completion phase, where ownership is officially transferred from the seller to the buyer. After this stage, the buyer can move into the property, and the conveyancing process concludes with final checks.</p>
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
                   Transferring the Balance
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
                   Registering Ownership
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
                     Post-Completion Check and Final Documentation
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
                                            <p className='fs-5'>
                                            On the completion date, the buyer's solicitor will transfer the remaining balance of the property price to the seller's solicitor.
                                            If the buyer's lender has a mortgage, the funds will be released to the buyer's solicitor to make this payment possible.
                                            Once the funds are received, the seller hands over the keys, and the buyer takes possession.

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
                                            Once the buyer has taken possession, the solicitor registers the new owner with the Land Registry. This involves submitting the title deed and paying any due Stamp Duty Land Tax (SDLT). The buyer's solicitor will also send the buyer a copy of the registered title for their records, confirming their legal ownership.
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
                                            The solicitor will conduct a final check to confirm that all legal requirements are met and documentation is complete. This step finalises the conveyancing process, allowing the buyer to enjoy their new property with peace of mind.
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
            <section >
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
                                                <h4>Why Work with Cambridge Conveyancing Solicitors?
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
                                                    While these stages apply to any conveyancing process, using a local Cambridge Conveyancing Solicitor can improve the speed and quality of service.
                                                    Cambridge solicitors have direct experience with property in the area, so they understand the unique aspects of the local market, potential legal quirks, and the typical turnaround times for critical searches.
                                                    They also have established relationships with local banks, councils, and agencies, allowing them to anticipate and manage location-specific issues.
                                                    </p>
                                                    <p>
                                                    For property transactions in Cambridge areas like Chesterton and Cherry Hinton and nearby villages like Sawston and Histon,
                                                    a local solicitor's expertise ensures a smoother process and clear communication.Additionally, local solicitors often offer flexible appointments and can provide insight into the unique aspects of the Cambridge property market, 
                                                    benefiting both first-time buyers and experienced investors.
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
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Get an Instant, Fixed Fee Conveyancing Quote
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    We offer a convenient, online fixed-fee quote if you're ready to begin the process. Simply fill out our form, and you'll receive an accurate estimate based on your needs. Fixed-fee quotes mean no surprise costs so that you can budget confidently.<br/>

Choosing a local Cambridge Conveyancing Solicitor for your property needs means that you're backed by expert local knowledge, ensuring that each conveyancing stage is handled efficiently. Our team is here to make this journey as easy as possible for you, from the first consultation to the final registration.<br/>

Take the first step towards securing your new property by filling out our form to get your quote today. Whether you're in the heart of Cambridge or nearby villages, we're here to provide expert support every step of the way. 
 </p>
                                                </div>
                                            </div>
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

export default StagesConveyancing;
