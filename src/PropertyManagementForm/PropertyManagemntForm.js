import {React,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; 
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
  Alert,
  FormHelperText
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
  const navigate = useNavigate();
  const [isAccordion1Open, setAccordion1Open] = useState(true);
  const [isAccordion2Open, setAccordion2Open] = useState(false);
  const [isAccordion3Open, setAccordion3Open] = useState(false);
  const [isAccordionCompleted, setAccordionCompleted] = useState(false);
  const [isAccordionCompleted2, setAccordionCompleted2] = useState(false);
  const [isAccordionCompleted3, setAccordionCompleted3] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [totalCost2, setTotalCost2] = useState(0);

  useEffect(() => {
    let cost = 0;
  
    // Update costs based on field selections
    if (accordion1Data.mortgage === 'Yes') {
      cost += 360; // Mortgage cost
    }
    if (accordion1Data.sharedOwnership === 'Yes') {
      cost += 150; // Shared Ownership cost
    }
    if (accordion1Data.purchaseFunds === 'Yes') {
      cost += 150; // Purchase Funds Gifted cost
    }
    if (accordion1Data.newBuild === 'Yes') {
      cost += 420; // New Build cost
    }
    if (accordion1Data.unregistered === 'Yes') {
      cost += 420; // Unregistered cost
    }
  
    // Other fields can remain the same or be updated as needed
    if (accordion1Data.leasehold === 'Yes') {
      cost += 300; // Leasehold cost
    }
    if (accordion1Data.staircasing === 'Yes') {
      cost += 420; // Staircasing cost
    }
  
    setTotalCost(cost);
  }, [accordion1Data]);

  useEffect(() => {
    let coststep2=0;

    // Update costs based on field selections
    if (accordion2Data.allbuyersindividuals === 'Yes') {
      coststep2 += 0; // Mortgage cost
    }
    if (accordion2Data.allbuyersindividuals === 'no') {
      navigate('/contact-us'); // Mortgage cost
    }
    if (accordion2Data.allbuyersUKresidents === 'no') {
      coststep2 += 80000; // Shared Ownership cost
    }
    if (accordion2Data.residentialproperty === 'Yes') {
      coststep2 += 0; // Purchase Funds Gifted cost
    }
    if (accordion2Data.residentialproperty === 'no') {
      navigate('/contact-us'); // Mortgage cost
    }
    if (accordion2Data.newleasehold === 'no') {
      coststep2 += 0; // New Build cost
    }
    if (accordion2Data.newleasehold === 'Yes') {
      navigate('/contact-us'); // Mortgage cost
    }
    if (accordion2Data.mainresidence === 'Yes') {
      coststep2 += 0; // Unregistered cost
    }
  
    // Other fields can remain the same or be updated as needed
    if (accordion2Data.anybuyerseverowned === 'Yes') {
      coststep2 += 0; // Leasehold cost
    }
    if (accordion2Data.ownmorethanonehouse === 'Yes') {
      coststep2 += 120000; // Staircasing cost
    }
  
    setTotalCost2(coststep2);
  }, [accordion2Data]);

  const handleAccordion1Change = (field,name) => (event) => {
    setAccordion1Data({
      ...accordion1Data,
      [field]: event.target.value,
      [name]: event.target.value
    })
      setValidationErrors({ ...validationErrors, [field]: false });
      // if (parseFloat(accordion1Data.price) > 4000000) {
      //   navigate('/contact-us');
      // } 

  };

  const handleAccordion2Change = (field,name) => (event) => {
    setAccordion2Data({
      ...accordion2Data,
      [field]: event.target.value,
      [name]: event.target.value
    });
    setValidationErrors({ ...validationErrors, [field]: false });
  };

  const handleNextClick = () => {
    // Check if all fields in Accordion 1 are filled
    const allFieldsFilled = Object.values(accordion1Data).every(value => value !== '') ;
    let errors = {};
    Object.keys(accordion1Data).forEach((field) => {
      if (!accordion1Data[field]) errors[field] = true;
    });

    setValidationErrors(errors);
   

    if (Object.keys(errors).length === 0) {
      // All fields are filled, proceed to next step
      setAccordionCompleted(true);
      // handle your next steps here
    }

    if (allFieldsFilled) {
      setAccordion2Open(true);
      setAccordion1Open(false);
      setAccordionCompleted(true);
    } else {
      setToastOpen(true);
    }
    if (parseFloat(accordion1Data.price) > 4000000) {
      navigate('/contact-us');
    } 
  };

  const handleNext2Click = () => {
    // Check if all fields in Accordion 1 are filled
    const allFieldsFilled = Object.values(accordion2Data).every(value => value !== '') ;
    let errors = {};
    Object.keys(accordion2Data).forEach((field) => {
      if (!accordion2Data[field]) errors[field] = true;
    });
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      // All fields are filled, proceed to next step
      setAccordionCompleted(true);
      // handle your next steps here
    }
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
  // console.log('step-1:','€',totalCost)
  // console.log('step-2:','€',totalCost2)
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

          <Accordion expanded={isAccordion1Open} className='mb-2'>
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
            <AccordionDetails className='pt-4'>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>

                  <TextField
                    label="Enter Property Price"
                    name="price"
                    variant="outlined"
                    fullWidth
                    type='number'
                    value={accordion1Data.price}
                    onChange={handleAccordion1Change('price','price')}
                    error={validationErrors.price}
                    helperText={validationErrors.price ? 'This field is required' : ''}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-error': { borderColor: 'red' },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.leasehold} >
                <InputLabel>Leasehold</InputLabel>
                    <Select   label="Leasehold"
                    name='leasehold'
                      value={accordion1Data.leasehold}
                      onChange={handleAccordion1Change('leasehold','leasehold')}
                      sx={{
                        '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                      }}
                      >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                    {validationErrors.leasehold && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.mortgage} >
                    <InputLabel>Mortgage</InputLabel>
                    <Select label="Mortgage"
                    name='mortgage'
                     value={accordion1Data.mortgage}
                     onChange={handleAccordion1Change('mortgage','mortgage')}
                     sx={{
                      '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                    }}
                     >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.mortgage && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.sharedOwnership} >
                    <InputLabel>Shared Ownership</InputLabel>
                    <Select label="Shared Ownership"
                    name='sharedOwnership'
                                         value={accordion1Data.sharedOwnership}
                                         onChange={handleAccordion1Change('sharedOwnership','sharedOwnership')}
                                         sx={{
                                          '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                                        }}
                                         >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.sharedOwnership && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.purchaseFunds} >
                    <InputLabel>Purchase Funds Being Gifted</InputLabel>
                    <Select label="Purchase Funds Being Gifted"
                    name='purchaseFunds'
                                                             value={accordion1Data.purchaseFunds}
                 onChange={handleAccordion1Change('purchaseFunds','purchaseFunds')}
                 sx={{
                  '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                }}
                 >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.purchaseFunds && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.newBuild} >
                    <InputLabel>New Build</InputLabel>
                    <Select label="New Build"
                    name='newBuild'
                                          value={accordion1Data.newBuild}
                                          onChange={handleAccordion1Change('newBuild','newBuild')}
                                          sx={{
                                            '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                                          }}
                                          >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.newBuild && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.staircasing} >
                    <InputLabel>Staircasing?</InputLabel>
                    <Select label="Staircasing"
                    name='staircasing'
                                          value={accordion1Data.staircasing}
                                          onChange={handleAccordion1Change('staircasing','staircasing')}
                                          sx={{
                                            '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                                          }}
                                          >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.staircasing && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.unregistered} >
                    <InputLabel>Unregistered?</InputLabel>
                    <Select label="Unregistered"
                    name='unregistered'
                                          value={accordion1Data.unregistered}
                                          onChange={handleAccordion1Change('unregistered','unregistered')}
                                          sx={{
                                            '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                                          }}
                                          >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.unregistered && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
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
              <Typography variant="h6">Step-2 </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>

                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.allbuyersindividuals} >
                    <InputLabel>Are all buyers individuals?</InputLabel>
                   
                    <Select label="Are all buyers individuals?"
                     name='allbuyersindividuals'
                           value={accordion2Data.allbuyersindividuals}
                           onChange={handleAccordion2Change('allbuyersindividuals','allbuyersindividuals')}
                           sx={{
                            '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                          }}
                           >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.allbuyersindividuals && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.allbuyersUKresidents} >
                    <InputLabel>Are all buyers UK residents?</InputLabel>
                    <Select label="Are all buyers UK residents?"
                      name='allbuyersUKresidents'
                        value={accordion2Data.allbuyersUKresidents}
                        onChange={handleAccordion2Change('allbuyersUKresidents','allbuyersUKresidents')}
                        sx={{
                          '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                        }}
                        >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.allbuyersUKresidents && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth error={validationErrors.residentialproperty} >
                    <InputLabel>Is it a residential property?</InputLabel>
                    <Select label="Is it a residential property?"
                    name='residentialproperty'
                     value={accordion2Data.residentialproperty}
                     onChange={handleAccordion2Change('residentialproperty','residentialproperty')}
                     sx={{
                      '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                    }}
                     >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.residentialproperty && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl variant="outlined" fullWidth error={validationErrors.newleasehold} >
                    <InputLabel>Is it a new leasehold?</InputLabel>
                    <Select label="Is it a new leasehold?"
                    name='newleasehold'
                     value={accordion2Data.newleasehold}
                     onChange={handleAccordion2Change('newleasehold','newleasehold')}
                     sx={{
                      '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                    }}
                     >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.newleasehold && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl variant="outlined" fullWidth error={validationErrors.mainresidence} >
                    <InputLabel>Will this house be your main residence?</InputLabel>
                    <Select label="Will this house be your main residence?"
                    name='mainresidence'
                     value={accordion2Data.mainresidence}
                     onChange={handleAccordion2Change('mainresidence','mainresidence')}
                     sx={{
                      '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                    }}
                     >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.mainresidence && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                <FormControl variant="outlined" fullWidth error={validationErrors.anybuyerseverowned} >
                    <InputLabel >Have any buyers ever owned a house before anywhere in the world?</InputLabel>
                    <Select label="Have any buyers ever owned a house before anywhere in the world?"
                    name='anybuyerseverowned'
                     value={accordion2Data.anybuyerseverowned}
                     onChange={handleAccordion2Change('anybuyerseverowned','anybuyerseverowned')}
                     sx={{
                      '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                    }}
                     >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.anybuyerseverowned && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                <FormControl variant="outlined" fullWidth error={validationErrors.ownmorethanonehouse} >
                    <InputLabel>At the end of this transaction will you own more than one house?</InputLabel>
                    <Select label="At the end of this transaction will you own more than one house?"
                    name='ownmorethanonehouse'
                     value={accordion2Data.ownmorethanonehouse}
                     onChange={handleAccordion2Change('ownmorethanonehouse','ownmorethanonehouse')}
                     sx={{
                      '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                    }}
                     >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                    {validationErrors.ownmorethanonehouse && (
                <FormHelperText error>This field is required</FormHelperText>
              )}
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
            <Alert onClose={() => setToastOpen(false)} severity="error" sx={{ width: '100%' }}>
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
