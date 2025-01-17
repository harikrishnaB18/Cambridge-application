import React from 'react'
import './TermsConditions.css';
import useToggle from '../components/useToggle.js';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderHomeTwo from '../components/HeaderHomeTwo';

const PrivacyPolicy = () => {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <section>
                    <Drawer drawer={drawer} action={drawerAction.toggle} />
                    <HeaderHomeTwo action={drawerAction.toggle} />
                      <div className="section  content-term">
                          <div className="" />
                          <div className="container">
                              <div className="content-main mt-10">
                                  <div className="text-center">
                                      <h2 className="color-brand-1 mb-10">Privacy Policy</h2>
                                      <p className="font-lg color-grey-500 pb-10">Cambridge Conveyancing Limited ("Cambridge Conveyancing") is dedicated to safeguarding your privacy. This Privacy Policy, along with our terms and conditions, outlines the use, processing, and storage of the personal information that Cambridge Conveyancing collects from you through your use of www.cambridgeconveyancing.com ("the Website"). By continuing to use the Website, you consent to the data practices described in this Policy.</p>
                                      
                                  </div>
                                  <div className="row mt-70">
                                      <div className="col-lg-3 col-md-5">
                                          <div className='sticky-sidebar sidebar-author'>
                                          <h6 className="color-brand-1 mb-15">Table of contents</h6>
                                          <ul className="list-terms">
                                              <li> <a href="#limitation">Data Controller</a></li>
                                              <li> <a href="#ServiceAvailability">Compliance with Data Protection Law</a></li>
                                              <li> <a href="#DisclaimerofWarranties">Your Personal Information</a></li>
                                              <li> <a href="#IntellectualProperty">Links to Third-Party Websites</a></li>
                                              <li> <a href="#PaymentandFees">Aggregated Data</a></li>
                                              <li> <a href="#LimitationofLiability">Collection of Your Personal Information</a></li>
                                              <li> <a href="#Termination">Use of Your Personal Information</a></li>
                                              <li> <a href="#GoverningLaw">Marketing Purposes</a></li>
                                              <li> <a href="#ImportantNotes">Lawful Basis for Using Your Personal Information</a></li>
                                              <li> <a href="#RefundPolicy">Storage of Your Personal Information</a></li>
                                              <li> <a href="#refund">Disclosure of Personal Information</a></li>
                                              <li> <a href="#email">Your Rights</a></li>
                                              <li> <a href="#agreement">Contact Information</a></li>
                                          </ul>
                                          </div>
                                      </div>
                                      <div className="col-lg-8 col-md-8">
                                          <h3 className="color-brand-1 mb-20" id="limitation">Data Controller</h3>
                                          <p className="font-md color-grey-500 mb-10 ">Cambridge Conveyancing Limited is the data controller, responsible for deciding how your personal information is held and used. Under data protection legislation, you must be informed of the details in this privacy notice. For any questions about this Policy or requests to exercise your legal rights, please contact the company directors using the details below.</p>
                                          {/* <p className="font-md color-grey-500 mb-10 ">A direct contractual relationship is established between the user and the chosen service provider When a user decides to engage a partner for their services following a quotation. The terms and conditions of the service provider will apply, and it is advisable to review these carefully. Cambridge Conveyancing does not hold any contractual involvement and will not be liable for any issues arising from the products or services offered by partners.</p> */}
                                         
                                          <h4 className="color-brand-1 mb-10" id="ServiceAvailability">Compliance with Data Protection Law</h4>
                                          <p className="font-md color-grey-500 mb-10">Cambridge Conveyancing is committed to adhering to data protection laws, which state that personal information must be:<br/>

- Used lawfully, fairly, and transparently;<br/>

- Collected for valid purposes, which have been clearly explained;<br/>

- Relevant and limited to those purposes;<br/>

- Accurate and kept up to date;<br/>

- Retained only as long as necessary for the stated purposes;<br/>

- Stored securely.<br/>

This Website is not intended for children, and no data relating to children is knowingly collected.</p>
                                          {/* <p className="font-md color-grey-500 mb-10">Quotes provided by partner solicitors are estimates and not binding. Users must supply correct contact information and clear details about their property requirements to receive the most accurate and competitive quotes. Providing false or misleading information may result in irrelevant quotes or services that do not meet user needs.</p> */}
                                          <h4 className="color-brand-1 mb-10" id="DisclaimerofWarranties">Your Personal Information</h4>
                                          <p className="font-md color-grey-500 mb-10">Personal data, or personal information, refers to any information that can identify an individual. It does not include data where identity has been removed (anonymous data). Cambridge Conveyancing may collect, use, store, and transfer various types of personal data about you, including:<br/>
                                          - Identity and Contact Information: Name, email, phone number, address, and financial information.<br/>

- Anonymous Demographic Information: Information such as postcode, age, gender, preferences, and interests.<br/>

- Technical Information: Your IP address, browser type, and access times.<br/>

- Profile Information: Username, password, interests, preferences, feedback, and survey responses.<br/>

- Marketing and Communications Data: Preferences for receiving marketing communications.
                                          </p>
                                          <h4 className="color-brand-1 mb-10" id="IntellectualProperty">Links to Third-Party Websites</h4>
                                          <p className="font-md color-grey-500 mb-10 ">The Website may include links to third-party sites. Clicking these links may allow third parties to collect or share your data. Cambridge Conveyancing encourages users to review the privacy statements of any linked websites to understand how they collect, use, and share personal information. Cambridge Conveyancing is not responsible for external websites' privacy policies or content.</p>
                                          
                                          <h4 className="color-brand-1 mb-10" id="PaymentandFees">Aggregated Data</h4>
                                          <p className="font-md color-grey-500 mb-10 ">Cambridge Conveyancing may also collect and share aggregated data, whether statistical or demographic, for any purpose. This data does not directly identify individuals and is not considered personal data in law.</p>
                                          
                                          <h4 className="color-brand-1 mb-10" id="LimitationofLiability">Collection of Your Personal Information</h4>
                                          <p className="font-md color-grey-500 mb-10">Different methods are used to collect data from and about you, including:<br/>

<b>- Direct Interactions:</b> You may provide personal information by filling in forms or corresponding with us via post, phone, or email.<br/>

<b>- Automated Technologies:</b> As you interact with the Website, technical information may be automatically collected using cookies and server logs. For further details, refer to our cookie policy below.</p>
                                          <h4 className="color-brand-1 mb-10" id="support">Use of Your Personal Information</h4>
                                          <p className="font-md color-grey-500 mb-10">Cambridge Conveyancing collects and uses personal information to operate and provide services through the Website. This may include sharing your data with third-party partners for quotes and services. These third parties may have their privacy policies.</p>
                                          <h4 className="color-brand-1 mb-10" id="Termination">Marketing Purposes</h4>
                                          <p className="font-md color-grey-500 mb-10">Your personal information may also be used for marketing purposes, including:<br/>

- Informing you about other products or services offered by Cambridge Conveyancing;<br/>

- Contacting you for surveys regarding our services;<br/>

- Providing your information to trusted partners about offerings that may interest you.</p>
                                          <h4 className="color-brand-1 mb-10" id="GoverningLaw">Lawful Basis for Using Your Personal Information</h4>
                                          <p className="font-md color-grey-500 mb-10">The lawful basis for using your data typically falls under one of the following:<br/>

<b>- Performance of Contract:</b> Necessary to process your information for contractual obligations.<br/>

<b>- Consent:</b> You have consented to the use of your data (e.g., creating an account or subscribing).<br/>

<b>- Legitimate Interests:</b> Necessary for the operation and improvement of our services.<br/>

<b>- Legal Obligations:</b> Necessary to comply with legal requirements.</p>
                                          <h4 className="color-brand-1 mb-10" id="email">Storage of Your Personal Information</h4>
                                          <p className="font-md color-grey-500 mb-10">Cambridge Conveyancing will take reasonable steps to ensure that personal data is treated securely and by this privacy policy. The Website is served over HTTPS, ensuring data protection. However, while every effort is made to secure data, Cambridge Conveyancing cannot guarantee the security of any data transmitted to the Website.</p>
                                          <h4 className="color-brand-1 mb-20" id="ImportantNotes">Disclosure of Personal Information</h4>
                                          <p className="font-md color-grey-500 mb-20">Personal information may be disclosed to third parties in the following circumstances:<br/>

- In the event of a sale or acquisition of the business;<br/>

- As required by law;<br/>

- To protect the rights and safety of Cambridge Conveyancing or others.</p>
      <h4 className="color-brand-1 mb-20" id="ImportantNotes">Your Rights</h4>
      <p className="font-md color-grey-500 mb-20">Under data protection laws, you have rights regarding your data, including:<br/>

- Requesting access to your personal information;<br/>

- Requesting corrections of inaccurate data;<br/>

- Requesting erasure of your personal information;<br/>

- Objecting to processing based on legitimate interests;<br/>

- Requesting restrictions on processing;<br/>

- Requesting data portability;<br/>

- Withdrawing consent at any time.</p>
      <h4 className="color-brand-1 mb-20" id="ImportantNotes">Contact Information</h4>
      <p className="font-md color-grey-500 mb-30">Cambridge Conveyancing welcomes your feedback regarding this Privacy Policy. If you believe that Cambridge Conveyancing has not adhered to this Policy, please contact:<br/>

<b>- Full Name of Legal Entity:</b> Cambridge Conveyancing Limited<br/>

<b>- Email:</b> info@cambridgeconveyancing.com<br/>
<b>Changes to This Statement</b><br/>
Cambridge Conveyancing may update this Privacy Policy periodically. It is recommended to review this statement periodically to stay informed about how your information is protected.<br/>

© Cambridge Conveyancing Limited. All rights reserved.
</p>
      
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
    <FooterHomeTwo/>
    </section>
  )
}

export default PrivacyPolicy
