import React from 'react'
import './TermsConditions.css';
import useToggle from '../components/useToggle.js';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderHomeTwo from '../components/HeaderHomeTwo';

const TermsConditions = () => {
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
                                      <h2 className="color-brand-1 mb-10">Terms and Conditions</h2>
                                      <p className="font-lg color-grey-500 pb-10">These terms and conditions, along with our privacy statement, govern the use of the Cambridge Conveyancing website ("the Website"). By accessing the Website, users agree to comply with these terms and conditions and our privacy statement. Continued use of the Website signifies acceptance of any modifications to these terms. If these terms are not accepted, please refrain from using the Website.</p>
                                      
                                  </div>
                                  <div className="row mt-70">
                                      <div className="col-lg-3 col-md-5">
                                          <div className='sticky-sidebar sidebar-author'>
                                          <h6 className="color-brand-1 mb-15">Table of contents</h6>
                                          <ul className="list-terms">
                                              <li> <a href="#limitation">Service Overview</a></li>
                                              <li> <a href="#ServiceAvailability">Accuracy of Information</a></li>
                                              <li> <a href="#DisclaimerofWarranties">Access to the Website</a></li>
                                              <li> <a href="#IntellectualProperty">Modifications to Terms</a></li>
                                              <li> <a href="#PaymentandFees">Personal Information</a></li>
                                              <li> <a href="#LimitationofLiability">Intellectual Property Rights</a></li>
                                              <li> <a href="#Termination">Links to Third-Party Sites</a></li>
                                              <li> <a href="#GoverningLaw">Linking to the Website</a></li>
                                              <li> <a href="#ImportantNotes">Prohibited Uses</a></li>
                                              <li> <a href="#RefundPolicy">Virus Protection</a></li>
                                              <li> <a href="#refund">Limitation of Liability</a></li>
                                              <li> <a href="#email">General Terms</a></li>
                                              <li> <a href="#agreement">Contact Information</a></li>
                                          </ul>
                                          </div>
                                      </div>
                                      <div className="col-lg-8 col-md-8">
                                          <h3 className="color-brand-1 mb-20" id="limitation">Service Overview</h3>
                                          <p className="font-md color-grey-500 mb-10 ">The Website provides a service where users can submit their property requirements and personal details. This information enables Cambridge Conveyancing to connect users with partner conveyancing solicitors and other service providers to offer competitive quotations. It is important to note that Cambridge Conveyancing acts as an intermediary and is not a broker. Third parties provide the services and products available through the Website, and Cambridge Conveyancing does not exercise control over these entities.</p>
                                          <p className="font-md color-grey-500 mb-10 ">A direct contractual relationship is established between the user and the chosen service provider When a user decides to engage a partner for their services following a quotation. The terms and conditions of the service provider will apply, and it is advisable to review these carefully. Cambridge Conveyancing does not hold any contractual involvement and will not be liable for any issues arising from the products or services offered by partners.</p>
                                         
                                          <h4 className="color-brand-1 mb-10" id="ServiceAvailability">Accuracy of Information</h4>
                                          <p className="font-md color-grey-500 mb-10">While reasonable efforts have been made to ensure the accuracy and completeness of the content on the Website, the information provided does not constitute legal or professional advice. It should not be relied upon as such. There are no representations or warranties, express or implied, regarding the website's content's accuracy, completeness, or timeliness.</p>
                                          <p className="font-md color-grey-500 mb-10">Quotes provided by partner solicitors are estimates and not binding. Users must supply correct contact information and clear details about their property requirements to receive the most accurate and competitive quotes. Providing false or misleading information may result in irrelevant quotes or services that do not meet user needs.</p>
                                          <h4 className="color-brand-1 mb-10" id="DisclaimerofWarranties">Access to the Website </h4>
                                          <p className="font-md color-grey-500 mb-10">Cambridge Conveyancing reserves the right to terminate access to the Website or any part without prior notice. There is no guarantee that the Website will always be available or uninterrupted. Access to the Website is provided temporarily and may be suspended or withdrawn at any time.</p>
                                          <h4 className="color-brand-1 mb-10" id="IntellectualProperty">Modifications to Terms</h4>
                                          <p className="font-md color-grey-500 mb-10 ">These terms and conditions may be modified at any time. Users are encouraged to periodically review the terms and conditions (along with the privacy statement) for any updates. The latest terms will apply each time the Website is accessed.</p>
                                          
                                          <h4 className="color-brand-1 mb-10" id="PaymentandFees">Personal Information</h4>
                                          <p className="font-md color-grey-500 mb-10 ">Any personal information collected through the Website will be used by our privacy statement.</p>
                                          
                                          <h4 className="color-brand-1 mb-10" id="LimitationofLiability">Intellectual Property Rights </h4>
                                          <p className="font-md color-grey-500 mb-10">All logos, trademarks, service marks, and domain names displayed on the Website are the property of their respective owners and cannot be reproduced without prior written consent. The intellectual property rights related to the content and materials on the Website are owned or licensed by Cambridge Conveyancing. All rights are reserved.</p>
                                          <h4 className="color-brand-1 mb-10" id="support">Links to Third-Party Sites</h4>
                                          <p className="font-md color-grey-500 mb-10">The Website may contain links to other websites ("Linked Sites"). These Linked Sites are not under the control of Cambridge Conveyancing, and no responsibility is accepted for their content, updates, or changes. Links are provided solely for convenience, and inclusion of any link does not imply endorsement by Cambridge Conveyancing.</p>
                                          <h4 className="color-brand-1 mb-10" id="Termination">Linking to the Website</h4>
                                          <p className="font-md color-grey-500 mb-10">Users may link to the Website provided it is done fairly and legally that does not harm the reputation of Cambridge Conveyancing. Links should not suggest any association, approval, or endorsement where none exists. The Website should not be framed on any other site, and links should be directed only to the Home Page. Cambridge Conveyancing reserves the right to withdraw linking permissions without notice.</p>
                                          <h4 className="color-brand-1 mb-10" id="GoverningLaw">Prohibited Uses </h4>
                                          <p className="font-md color-grey-500 mb-10">As a condition of using the Website, users warrant that they will not engage in any unlawful activities or use the Website in a manner that could damage, disable, or impair its operation. Users must not attempt to gain unauthorized access to any part of the Website or engage in denial-of-service attacks.</p>
                                          <h4 className="color-brand-1 mb-10" id="email">Virus Protection </h4>
                                          <p className="font-md color-grey-500 mb-10">Cambridge Conveyancing does not guarantee that the Website will be secure or free from bugs or viruses. Users are responsible for configuring their technology to access the Website and should use their virus protection software. Misuse of the Website by introducing malicious materials is strictly prohibited and may lead to criminal prosecution under applicable laws.</p>
                                          <h4 className="color-brand-1 mb-20" id="ImportantNotes">Limitation of Liability</h4>
                                          <p className="font-md color-grey-500 mb-20">Please read this section carefully as it outlines the limitations of Cambridge Conveyancing's liability. Nothing in these terms limits or excludes liability for death or personal injury due to negligence or fraud. To the fullest extent permitted by law, Cambridge Conveyancing excludes all conditions, warranties, 
                                            and representations regarding the Website and its content.<br/><br/>
                                            Cambridge Conveyancing will not be liable for any loss or damage arising from the use or inability to use the Website or reliance on any content displayed. This includes losses arising from third-party services or products accessed through the Website. Cambridge Conveyancing is not liable for any indirect or consequential loss or damage for business users.


      </p>
      <h4 className="color-brand-1 mb-20" id="ImportantNotes">General Terms</h4>
      <p className="font-md color-grey-500 mb-20">These terms and conditions are governed by English law, and users agree that any disputes will be resolved within the courts of England and Wales. If any provision of these terms is found invalid or unenforceable, the remaining terms will continue to apply. Cambridge Conveyancing may transfer rights and obligations under these terms to another organization, providing written notice to users of any such transfer.</p>
      <h4 className="color-brand-1 mb-20" id="ImportantNotes">Contact Information</h4>
      <p className="font-md color-grey-500 mb-30">For any inquiries or concerns, please contact us at info@cambridgeconveyancing.com.

Copyright © Cambridge Conveyancing. All rights reserved.</p>
      
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
    <FooterHomeTwo/>
    </section>
  )
}

export default TermsConditions
