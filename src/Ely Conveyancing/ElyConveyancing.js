import React, { useState, } from 'react';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import localconveyancing from '../Images/local conveyancing solicitors.png';
import '../Conveyancing Process/ConveyancingProcess.css';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../components/useToggle.js';

const ElyConveyancing = (style,className) => {
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
            <h1>Ely Conveyancing Solicitors
            </h1>
            {/* <h3 className='pt-4'>Free Instant Online Quotes</h3> */}
            <p className='pt-4 '>
            Providing expert, reliable services to ensure buying, selling, or remortgaging a property in Ely is a smooth and stress-free experience.
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
                        <div className="appie-about-content"> 
                                            <h5 className="title">
                                            Trusted Expertise for a Smooth Property Journey</h5>
                                            <p className=' justify-text '>
                                            Finding the right support for property transactions in Ely can make all the difference in ensuring a smooth, hassle-free process.<b>Ely conveyancing solicitors are here to provide experienced guidance</b> through every step, whether you're buying your first home, selling a property, or remortgaging. For reliable, affordable, and efficient conveyancing in Ely, turn to professionals who understand the local market and have a track record of success.</p>
                                        </div>
                            <div
                                className="appie-about wow animated fadeInUp mt-5"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                                                    <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d77912.1961585366!2d0.22803185603616621!3d52.39297108902703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1730212469693!5m2!1sen!2suk"    width="100%"
    height="500"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      <div className='container'>
        <div className='row '>
          <div className='ml-3 mr-3 pt-3 section-2'>
            <h2>Why Use Local Ely Conveyancing Solicitors?            </h2>
            <p className='pt-4 '>
            Choosing local Ely conveyancing solicitors offers several key benefits. A firm with deep knowledge of Ely and surrounding areas will better understand the unique aspects of the property market here, including neighbourhoods, land types, and planning permissions. Local solicitors bring an informed perspective that can speed up the process, avoid potential obstacles, and make communication easy. Access to the latest insights on property transactions within Ely ensures that your experience is efficient and cost-effective while meeting your specific needs            </p>
            <p className='pt-4 '>
            <b>Personalised Service with Local Market Expertise</b><br/>
Ely conveyancing solicitors provide an individualised approach to each client, offering the peace of mind that comes from knowing your case is in knowledgeable, experienced hands. With extensive experience in Ely and its surroundings, local conveyancers can advise on specific areas, from assessing property values to knowing about any pending developments that may impact your sale or purchase.<br/>
<b>Clear and Transparent Pricing</b><br/>
For anyone buying or selling property, understanding the costs involved is crucial. Ely conveyancing solicitors offer clear, fixed-fee quotes to help you plan your budget accurately. With no hidden fees, clients are assured of transparent pricing. Simply use the free quote calculator on this page to get a quick, accurate cost estimate tailored to your needs.
            </p>
          </div>
        </div>
      </div>
      <section className="appie-features-area pt-10" id="features">
        <div className='container'>
      <h2 className='mt-5 text-center'>Residential Conveyancing Services in Ely
      </h2>
      <p className='mt-3 '>Whether buying, selling, or remortgaging, the legal side of property transactions can be complex. Ely conveyancing solicitors handle all aspects of residential conveyancing to ensure each stage is managed professionally and efficiently. With a local team dedicated to staying ahead of any challenges that may arise, you can be confident that every detail will be covered.</p>
      </div>
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
                    Re-Mortgaging in Ely
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
                                            Buying a property is an exciting step, but it can be daunting without the right guidance. Ely conveyancing solicitors manage every aspect of property purchases, from initial enquiries to liaising with mortgage lenders and completing the transaction. Local knowledge helps anticipate issues specific to Ely, allowing a quicker, more streamlined buying experience.                                            </p>
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
                                            Selling a property is often time-sensitive, and reliable conveyancing is essential for a smooth transaction. Ely conveyancing solicitors ensure the legal paperwork is completed efficiently, allowing sellers to focus on their next steps. Regular updates and clear communication keep everything on track, minimising delays and ensuring a stress-free process.                                            </p>
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
                                            When remortgaging, accurate, efficient conveyancing is essential. Ely conveyancing solicitors provide the expertise needed to handle remortgages effectively, including managing lender requirements and completing the process promptly. With experience in various types of mortgages, they ensure a seamless remortgaging experience that meets all legal requirements.</p>
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
                                <img src={localconveyancing} alt="image" /> 
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
            <section className="appie-features-area pt-10" id="features">
        <div className='container'>
      <h2 className='mt-5 text-center'>Key Steps in the Conveyancing Process
      </h2>
      <p className='mt-3 '>Understanding the conveyancing process is helpful for buyers, sellers, and anyone remortgaging a property. Ely conveyancing solicitors follow a structured approach to manage each transaction stage effectively. Here’s a look at the critical steps involved in the conveyancing process:</p>
      </div>
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
                     Initial Enquiries and Searches
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
                   Contract Preparation and Exchange
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
                    Completion and Final Steps
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
                                            The first step in the conveyancing process involves conducting necessary property searches and gathering details about the property. These include local authority searches, environmental checks, and water and drainage checks to uncover any issues affecting the transaction. This stage is crucial for ensuring there are no surprises after the sale is completed.
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
                                            Once searches and initial checks are complete, the solicitor drafts a contract outlining the sale or purchase terms. Both parties review and agree to the contract terms before exchanging contracts. The sale becomes legally binding at this point, providing peace of mind that both parties are committed to the transaction.
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
                                            On completion day, funds are transferred, and keys are exchanged. Ely conveyancing solicitors handle the financial transactions and final paperwork, ensuring everything is legally compliant. At this stage, ownership is transferred, and the process is completed smoothly and efficiently.
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
                                                <h4>Benefits of Fixed-Fee Quotes for Ely Conveyancing Services
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
                                                    Opting for a fixed-fee quote provides predictability and peace of mind. With a clear outline of all costs upfront, clients can proceed confidently without concerns about unexpected charges. Ely conveyancing solicitors offer competitive, fixed-fee quotes tailored to each transaction,
                                                    making the process transparent and budget-friendly.<br/>

<b>Getting an Accurate Fixed-Fee Quote</b><br/>
For a straightforward estimate cost estimate, simply complete the free quote calculator on this page. You can receive a detailed estimate that covers all aspects of the conveyancing process by entering some basic details. This user-friendly calculator provides an accurate quote that reflects the unique requirements of your property transaction, offering full transparency from the start.
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
                                                <h4>Additional Services from Ely Conveyancing Solicitors
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
                                                    Beyond buying, selling, and remortgaging, Ely conveyancing solicitors offer various related services to support all types of property transactions. From the transfer of equity to resolving boundary issues, local conveyancers are well-equipped to handle complex legal matters specific to property law.<br/>

<b>Transfer of Equity</b><br/>
When transferring property ownership between parties, having the right legal expertise is essential.
Whether adding or removing a name on the deed, Ely conveyancing solicitors provide accurate,
efficient service to complete the transaction smoothly.<br/>

<b>Property Lease Extensions</b><br/>
Lease extensions are a specialised area requiring in-depth knowledge.Ely conveyancing solicitors offer assistance with negotiating and completing lease extensions, ensuring clients meet all legal obligations and receive a fair deal.


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
                                                <h4>Choosing the Right Ely Conveyancing Solicitors
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
                                                    Choosing the right solicitor can make a significant difference in the success of a property transaction.
                                                    Ely conveyancing solicitors are known for their expertise, customer focus, and commitment to excellent service.
                                                    With a transparent approach to pricing and a dedication to timely, effective solutions,
                                                    local solicitors are an ideal choice for Ely residents.<br/>

<b>Clear Communication and Client Support</b><br/>
Reliable communication is essential for a smooth conveyancing experience.
Ely solicitors maintain regular contact to provide updates, answer questions,
and guide clients through the process.
This client-focused approach makes property transactions stress-free and 
allows clients to feel confident every step of the way.<br/>

<b>Experienced Local Professionals</b><br/>
Conveyancing requires a comprehensive understanding of local property laws, land regulations, and market trends. Ely conveyancing solicitors bring years of experience, making handling even the most complex transactions easy.


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
                                                <h4>Get Your Free, Fixed-Fee Quote Today
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
                                                    For a clear, accurate quote tailored to your property needs, fill in the free quote calculator on this page. This tool provides a quick, detailed cost estimate with no obligation. With fixed-fee pricing, transparent service, and experienced local support, Ely conveyancing solicitors are here to make your property journey smooth and successful. Start your quote today for expert conveyancing assistance designed to meet all your property needs in Ely and beyond.
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

export default ElyConveyancing;
