import React from 'react';
import {Accordion,AccordionSummary,AccordionDetails,Typography,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function FAqSection ({ className }) {
    return (
        <>
            <section className={`appie-download-area pt-10 pb-50 mb-50 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                    <div className='col-lg-12'>
                        <h3 className='text-center mb-4'>Frequently Asked Questions</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Why should I use a local Cambridge conveyancing solicitor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A local conveyancing solicitor in Cambridge knows the area, local property market, and specific regulations. Their local knowledge can help ensure a smoother, quicker process and avoid unnecessary delays.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">What is a fixed-fee conveyancing service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Fixed-fee conveyancing means you’ll pay a set price for the solicitor’s services, with no hidden costs. This helps you budget more easily and avoid unexpected fees during the property transfer process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">How long does the conveyancing process take?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Typically, conveyancing takes around 8-12 weeks from when an offer is accepted. However, this can vary depending on the complexity of the transaction and any delays in the chain.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">What are disbursements in conveyancing?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Disbursements are additional costs paid to third parties during the conveyancing process, such as Land Registry fees, local authority searches, and stamp duty. These are separate from the solicitor’s fixed fee.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">Do I need a conveyancing solicitor when remortgaging?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, if you’re remortgaging, you’ll need a conveyancer to handle the legal paperwork, transfer the title, and ensure the new mortgage lender is registered with the Land Registry.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">What is the difference between a licensed conveyancer and a solicitor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Licensed conveyancers are specialists in property law, while solicitors offer a wider range of legal services. Both can handle your property transaction, but licensed conveyancers focus solely on conveyancing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">When do I pay my conveyancing fees?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Most conveyancers will ask for payment in stages, including an initial deposit. The final payment is usually made once the property transaction completes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">Can I use a Cambridge solicitor if I’m buying property elsewhere?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, although using a local Cambridge conveyancing solicitor is beneficial if you're buying in the area, they can still assist with property purchases across the UK, ensuring the process runs smoothly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">What is exchange and completion in conveyancing?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Exchange is when contracts are signed, and the sale becomes legally binding. Completion is when the final payment is made, and ownership of the property is transferred to the buyer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FAqSection;
