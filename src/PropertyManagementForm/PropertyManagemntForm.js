import {React,useState} from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Grid,
  Snackbar,
  Alert
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FooterHomeTwo from '../components/FooterHomeTwo';


const PurchasingPropertyForm = () => {
  const [accordion1Data, setAccordion1Data] = useState({
    price: '',leasehold: '',mortgage: '',sharedOwnership: '',purchaseFunds: '',newBuild: '',staircasing: '',unregistered: '',
  });
  const [accordion2Data, setAccordion2Data] = useState({
    allbuyersindividuals: '',allbuyersUKresidents: '',residentialproperty: '',newleasehold: '',anybuyerseverowned: '',ownmorethanonehouse: '',mainresidence: '',
  });
  const [isAccordion1Open, setAccordion1Open] = useState(true);
  const [isAccordion2Open, setAccordion2Open] = useState(false);
  const [isAccordion3Open, setAccordion3Open] = useState(false);
  const [isAccordionCompleted, setAccordionCompleted] = useState(false);
  const [isAccordionCompleted2, setAccordionCompleted2] = useState(false);
  const [isAccordionCompleted3, setAccordionCompleted3] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const handleAccordion1Change = (field) => (event) => {
    setAccordion1Data({
      ...accordion1Data,
      [field]: event.target.value,
    });

  };

  const handleAccordion2Change = (field) => (event) => {
    setAccordion2Data({
      ...accordion2Data,
      [field]: event.target.value,
    });

  };

  const handleNextClick = () => {
    // Check if all fields in Accordion 1 are filled
    const allFieldsFilled = Object.values(accordion1Data).every(value => value !== '') ;
 
    if (allFieldsFilled) {
      setAccordion2Open(true);
      setAccordion1Open(false);
      setAccordionCompleted(true);
    } else {
      setToastOpen(true);
    }
  };

  const handleNext2Click = () => {
    // Check if all fields in Accordion 1 are filled
    const allFieldsFilled = Object.values(accordion2Data).every(value => value !== '') ;
 
    if (allFieldsFilled) {
      setAccordion2Open(false);
      setAccordion3Open(true);
      setAccordionCompleted2(true);
    } else {
      setToastOpen(true);
    }
  };
  const handlePreviousClick = () => {
    setAccordion2Open(false);
    setAccordion1Open(true);
    setAccordionCompleted(false)
  };
  const handlePrevious2Click = () => {
    setAccordion2Open(true);
    setAccordionCompleted2(false)
    setAccordion3Open(false)
  };
  const handleSubmit = () => {
    // Log data from all three accordions
    setAccordionCompleted3(true)
    setAccordion3Open(false)
    console.log("Accordion 1 Data:", accordion1Data);
    console.log("Accordion 2 Data:", accordion2Data);
    // You can also add third accordion data here if needed in future
  };
  return (
    <>
      <HeaderHomeTwo />
      <div className='mt-3 mb-3' style={{backgroundColor: '#f6f8fb'}}>
        <Box sx={{ padding: '50px', maxWidth: '900px', margin: 'auto' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Purchasing Property
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Complete these simple steps to get your quote for purchasing the property.
          </Typography>

          <Accordion expanded={isAccordion1Open}>
            <AccordionSummary
              expandIcon={isAccordionCompleted ? <CheckCircleIcon color="success" /> : <ExpandMoreIcon />}
              sx={{
                borderBottom: '1px solid #ddd', 
                '& .MuiTypography-root': {
                  fontSize: '1.15rem', 
                },
              }}
            >
              <Typography variant="h6">Step-1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Enter Property Price"
                    variant="outlined"
                    fullWidth
                    value={accordion1Data.price}
                    onChange={handleAccordion1Change('price')}

                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Leasehold</InputLabel>
                    <Select   label="Leasehold"
                      value={accordion1Data.leasehold}
                      onChange={handleAccordion1Change('leasehold')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Mortgage</InputLabel>
                    <Select label="Mortgage"
                     value={accordion1Data.mortgage}
                     onChange={handleAccordion1Change('mortgage')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Shared Ownership</InputLabel>
                    <Select label="Shared Ownership"
                                         value={accordion1Data.sharedOwnership}
                                         onChange={handleAccordion1Change('sharedOwnership')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Purchase Funds Being Gifted</InputLabel>
                    <Select label="Purchase Funds Being Gifted"
                                                             value={accordion1Data.purchaseFunds}
                 onChange={handleAccordion1Change('purchaseFunds')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>New Build</InputLabel>
                    <Select label="New Build"
                                          value={accordion1Data.newBuild}
                                          onChange={handleAccordion1Change('newBuild')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Staircasing?</InputLabel>
                    <Select label="New Build"
                                          value={accordion1Data.staircasing}
                                          onChange={handleAccordion1Change('staircasing')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Unregistered?</InputLabel>
                    <Select label="New Build"
                                          value={accordion1Data.unregistered}
                                          onChange={handleAccordion1Change('unregistered')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

              

              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <button className='next-btn' onClick={handleNextClick}>
                  Next
                </button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion  expanded={isAccordion2Open}>
            <AccordionSummary
              expandIcon={isAccordionCompleted2 ? <CheckCircleIcon color="success" /> : <ExpandMoreIcon />}
              sx={{
                borderBottom: '1px solid #ddd',
                '& .MuiTypography-root': {
                  fontSize: '1.25rem',
                },
              }}
            >
              <Typography variant="h6">Step-2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Are all buyers individuals?</InputLabel>
                    <Select label="Are all buyers individuals?"
                           value={accordion2Data.price}
                           onChange={handleAccordion2Change('allbuyersindividuals')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Are all buyers UK residents?</InputLabel>
                    <Select label="Are all buyers UK residents?"
                        value={accordion2Data.price}
                        onChange={handleAccordion2Change('allbuyersUKresidents')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Is it a residential property?</InputLabel>
                    <Select label="Is it a residential property?"
                     value={accordion2Data.price}
                     onChange={handleAccordion2Change('residentialproperty')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Is it a new leasehold?</InputLabel>
                    <Select label="Is it a new leasehold?"
                     value={accordion2Data.price}
                     onChange={handleAccordion2Change('newleasehold')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Will this house be your main residence?</InputLabel>
                    <Select label="Will this house be your main residence?"
                     value={accordion2Data.price}
                     onChange={handleAccordion2Change('mainresidence')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel >Have any buyers ever owned a house before anywhere in the world?</InputLabel>
                    <Select label="Have any buyers ever owned a house before anywhere in the world?"
                     value={accordion2Data.price}
                     onChange={handleAccordion2Change('anybuyerseverowned')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>At the end of this transaction will you own more than one house?</InputLabel>
                    <Select label="At the end of this transaction will you own more than one house?"
                     value={accordion2Data.price}
                     onChange={handleAccordion2Change('ownmorethanonehouse')}>
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
              </Grid>
              <div className='d-flex justify-content-end align-items-end'>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <button className='next-btn'onClick={handlePreviousClick}>
                  Previous Step
                </button>
              </Box> 
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px',marginLeft: '16px' }}>
                <button className='next-btn' onClick={handleNext2Click}>
                  Next
                </button>
              </Box>
              </div>
            </AccordionDetails>

          </Accordion>

          <Accordion expanded={isAccordion3Open}>
            <AccordionSummary
                expandIcon={isAccordionCompleted3 ? <CheckCircleIcon color="success" /> : <ExpandMoreIcon />}
              sx={{
                borderBottom: '1px solid #ddd',
                '& .MuiTypography-root': {
                  fontSize: '1.25rem',
                },
              }}
            >
              <Typography variant="h6">Step-3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Are all buyers individuals?</InputLabel>
                    <Select label="Are all buyers individuals?">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Are all buyers UK residents?</InputLabel>
                    <Select label="Are all buyers UK residents?">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>


                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Will this house be your main residence?</InputLabel>
                    <Select label="Will this house be your main residence?">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <div className='d-flex justify-content-end align-items-end'>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <button className='next-btn'onClick={handlePrevious2Click}>
                  Previous Step
                </button>
              </Box> 
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px',marginLeft: '16px' }}>
                <button className='next-btn' onClick={handleSubmit}>
                  Submit
                </button>
              </Box>
              </div>
            </AccordionDetails>

          </Accordion>
          <Snackbar open={toastOpen} autoHideDuration={4000} onClose={() => setToastOpen(false)}
             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={() => setToastOpen(false)} severity="warning" sx={{ width: '100%' }}>
              Please fill out all fields before proceeding.
            </Alert>
          </Snackbar>
        </Box>
      </div>
      <FooterHomeTwo />
    </>
  );
};

export default PurchasingPropertyForm;
