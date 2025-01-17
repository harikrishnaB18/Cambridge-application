import React, { useState, } from 'react';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import localconveyancing from '../Images/local conveyancing solicitors.png';
import '../Conveyancing Process/ConveyancingProcess.css';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../components/useToggle.js';

const PeterboroughConveyancing = (style,className) => {
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
            <h1>Peterborough Conveyancing Solicitors
            </h1>
            {/* <h3 className='pt-4'>Free Instant Online Quotes</h3> */}
            <p className='pt-4 '>
            Providing expert, dependable services to ensure a smooth, stress-free experience when buying, selling, or remortgaging a property in Peterborough.
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
                                            Peterborough Conveyancing Solicitors – Professional and Personalised Service</h5>
                                            <p className=' justify-text '>
                                            Finding reliable and <b>experienced conveyancing solicitors in Peterborough</b> is crucial for ensuring a smooth property transaction.Whether you’re buying,selling or remortgaging,Peterborough’s conveyancing solicitors specialise in making each step of the process clear and manageable.</p>
                                            <p className=' justify-text  mt-5'>For property transactions in areas such as Werrington, Orton Waterville, and Hampton Vale, experienced solicitors provide invaluable local knowledge to guide buyers and sellers through the unique aspects of the Peterborough property market</p>
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
            <h2>Comprehensive Conveyancing Services in Peterborough
            </h2>
            <p className='pt-4 '>
            A wide range of conveyancing services is available in Peterborough, catering to first-time buyers and seasoned property investors. Experienced solicitors handle each transaction carefully,
            ensuring that all legal requirements are met on time.
            Sellers aiming to achieve the best return on investment and buyers looking for a hassle-free purchase can greatly benefit from reliable conveyancing services.</p>
        
          </div>
          <div className='ml-3 mr-3 pt-3 section-2'>
            <h2>Why Choose Peterborough Conveyancing Solicitors?
            </h2>
            <p className='pt-4 '>
            Choosing a conveyancing solicitor with extensive local expertise can significantly impact your experience, especially in a diverse market like Peterborough. Experienced solicitors understand the specifics of the local housing market and are adept at addressing its unique nuances. Whether dealing with historic properties in the Cathedral Quarter or new builds in Cardea, conveyancing professionals familiar with Peterborough’s laws and regulations provide exceptional service, ensuring smooth and streamlined transactions.
            </p>
        
          </div>
        </div>
      </div>
      <section className="appie-features-area pt-10" id="features">
      <h2 className='mt-5 text-center'>Understanding the Peterborough Conveyancing Process</h2>
      <p className='mt-3  text-center'>Many clients are surprised by the number of stages involved in the conveyancing process.<br/>From initial inquiries and property searches to final exchanges and completion, skilled conveyancing solicitors manage each<br/>step to ensure a stress-free experience.In Peterborough, the conveyancing process generally follows this structured pattern:</p>
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
                   Drafting Contracts and Conducting Searches
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
                    Reviewing Contracts and Arranging Finances
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
                     Exchange and Completion
                  </a>
                  {/* <a onClick={(e) => handleClick(e, 'completion')} className={`nav-link ${tab === 'completion' ? 'active' : ''}`} id="v-pills-completion-tab" data-toggle="pill" href="#v-pills-completion" role="tab" aria-controls="v-pills-completion" aria-selected="false">
                  Shared Ownership and Leasehold Services
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
                                            Once a solicitor has been engaged, the process begins by gathering necessary details about the property and the parties involved. This includes verifying identification documents and outlining any specific requirements or circumstances related to the property, particularly in areas like Dogsthorpe or Alwalton.                                            </p>
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
                                            The solicitor will draft contracts and conduct essential property searches. These searches cover local authority information, water and drainage data, environmental factors, and other relevant checks specific to areas in Peterborough, such as Eastfield or Bretton. Conducting searches helps to ensure no surprises could impact the property’s value or usage.                                            </p>
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
                                            After the searches are complete, the contract details are reviewed with clients to ensure they understand every element involved. For buyers, this stage may also include arranging mortgage financing, a process that conveyancing solicitors guide with clarity and precision.
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
                                            Once both parties are satisfied and the contracts are signed, an exchange of contracts takes place, legally binding the transaction. Completion typically follows soon after finalising the transfer of property ownership. This critical stage is managed meticulously to ensure clients in Peterborough experience a smooth and successful handover.                                            </p>
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
                                                <h4>Transparent and Fixed-Price Quotes for Conveyancing
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
                                                    Clear, fixed-price conveyancing quotes are essential for clients who want to budget effectively. Those seeking quotes in Peterborough can rely on straightforward pricing to eliminate unexpected expenses. Comprehensive quotes ensure every cost is accounted for upfront, making it easier for clients to budget without hidden fees. This commitment to transparent pricing provides peace of mind for buyers and sellers in Peterborough.
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
                                                <h4>Expert Knowledge of Peterborough and Surrounding Areas</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Local knowledge is vital to the Peterborough property market. Conveyancing solicitors familiar with the neighbourhoods in and around Peterborough can offer invaluable insights and advice. Each location, whether a suburban area like Fletton or a rural outskirts like Newborough, has its property-related nuances, and local conveyancers are well-equipped to manage these distinct requirements. Choosing a solicitor with expertise in Peterborough is a considerable advantage for those looking to buy or sell in these areas.
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
                                                <h4>Fixed Fee Conveyancing – Transparency and No Surprises</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    At Cambridge Conveyancing, we believe in providing clarity and transparency from the very beginning. Our fixed fee conveyancing structure ensures you know exactly what to expect regarding costs.
                                                    We take pride in offering competitive, all-inclusive quotes that cover everything you need to complete your transaction.<br/>
                                                    When you fill out our free quote calculator, you'll receive a comprehensive breakdown of fees with no hidden costs. This transparent approach allows you to budget confidently, knowing the full scope of what's included in our conveyancing services.
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
                                                <h4>Supporting First-Time Buyers in Peterborough
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
                                                    Peterborough is an attractive location for first-time buyers, and the homeownership journey can be exciting and overwhelming. Conveyancing solicitors are here to simplify the process, ensuring that every step is clear and manageable.
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

export default PeterboroughConveyancing;
