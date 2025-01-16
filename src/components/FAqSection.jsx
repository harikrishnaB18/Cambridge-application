import React, { useState } from 'react';

function FAqSection() {
  const [showQues, setQues] = useState(null);

  const openQuestion = (id) => {
    setQues((prev) => (prev === id ? null : id)); // Toggle between open and close
  };

  return (
    <>
      <section className="appie-faq-area pb-95 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title mt-5">Frequently Asked Questions</h3>
                <p className="mt-3 fs-5">
                  Here are some common questions to help you better understand the conveyancing process and how we can assist you.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                <div className="accrodion-grp animated fadeIn faq-accrodion wow" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
                  <div
                    onClick={() => openQuestion(1)}
                    className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>Why should I use a local Cambridge conveyancing solicitor?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 1 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                            A local conveyancing solicitor in Cambridge knows the area, local property market, and specific regulations. Their local knowledge can help ensure a smoother, quicker process and avoid unnecessary delays.
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
                        <h4>What is a fixed-fee conveyancing service?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 2 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                            Fixed-fee conveyancing means you’ll pay a set price for the solicitor’s services, with no hidden costs. This helps you budget more easily and avoid unexpected fees during the property transfer process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(3)}
                    className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>How long does the conveyancing process take?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 3 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                            Typically, conveyancing takes around 8-12 weeks from when an offer is accepted. However, this can vary depending on the complexity of the transaction and any delays in the chain.
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
                        <h4>What are disbursements in conveyancing?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 4 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                            Disbursements are additional costs paid to third parties during the conveyancing process, such as Land Registry fees, local authority searches, and stamp duty. These are separate from the solicitor’s fixed fee.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(9)}
                    className={`accrodion ${showQues === 9 ? 'active' : ''}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What is exchange and completion in conveyancing?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 9 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                          Exchange is when contracts are signed, and the sale becomes legally binding. Completion is when the final payment is made, and ownership of the property is transferred to the buyer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                <div className="accrodion-grp animated fadeIn faq-accrodion wow" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
                  <div
                    onClick={() => openQuestion(5)}
                    className={`accrodion ${showQues === 5 ? 'active' : ''}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>Do I need a conveyancing solicitor when remortgaging?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 5 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                            Yes, if you’re remortgaging, you’ll need a conveyancer to handle the legal paperwork, transfer the title, and ensure the new mortgage lender is registered with the Land Registry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(6)}
                    className={`accrodion ${showQues === 6 ? 'active' : ''}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What is the difference between a licensed conveyancer and a solicitor?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 6 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                            Licensed conveyancers are specialists in property law, while solicitors offer a wider range of legal services. Both can handle your property transaction, but licensed conveyancers focus solely on conveyancing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(7)}
                    className={`accrodion ${showQues === 7 ? 'active' : ''}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>When do I pay my conveyancing fees?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 7 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                            Most conveyancers will ask for payment in stages, including an initial deposit. The final payment is usually made once the property transaction completes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(8)}
                    className={`accrodion ${showQues === 8 ? 'active' : ''}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>Can I use a Cambridge solicitor if I’m buying property elsewhere?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{ display: showQues === 8 ? 'block' : 'none' }}
                      >
                        <div className="inner">
                          <p>
                          Yes, although using a local Cambridge conveyancing solicitor is beneficial if you're buying in the area, they can still assist with property purchases across the UK, ensuring the process runs smoothly.
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
    </>
  );
}

export default FAqSection;
