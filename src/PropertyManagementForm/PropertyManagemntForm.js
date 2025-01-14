import React, { useState,useEffect } from 'react';
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
} from '@mui/material';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import '../PropertyManagementForm/PropertyManagemntForm.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "jspdf-autotable";
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import FooterHomeTwo from '../components/FooterHomeTwo';
import ContactCard from './ContactCard'


const PurchasingPropertyForm = () => {
  const [formData, setFormData] = useState({
    // Step 1
    price: '',
    leasehold: '',
    mortgage: '',
    sharedOwnership: '',
    giftedFunds: '',
    newBuild: '',
    staircasing: '',
    unregistered: '',
    
    // Step 2
    buyersIndividuals: '',
    ukResidents: '',
    residentialProperty: '',
    newLeasehold: '',
    ownedBefore: '',
    moreThanOneHouse: '',
    mainResidence: '',
  });

  const [step1Total, setStep1Total] = useState(0);
  const [step2Total, setStep2Total] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted1, setFormSubmitted1] = useState(false);
  const [formSubmitted2, setFormSubmitted2] = useState(false);
  const [error, setError] = useState(false);

    console.log('Step1 Total:', step1Total);

    console.log('Step2 Total:', step2Total);

  // Update state when inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      const numericValue = parseFloat(value);

      // Check if the value is empty or a valid number greater than 0
      if (value === "") {
        setError(false); // Reset error when input is cleared
      } else if (numericValue <= 0 || isNaN(numericValue)) {
        setError(true); // Set error if value is <= 0 or NaN
        toast.error("Price must be greater than 0"); // Show error toast
      } else {
        setError(false); // Reset error if value is valid
      }
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit1 = (data) => {
    console.log("Form Submitted:", data); // You should see the submitted data in the console
    setFormSubmitted1(true);
    setShowPopup(false); // Close the popup after submission
    toast.success("Data submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleFormSubmit2 = (data) => {
    console.log("Form Submitted:", data); // You should see the submitted data in the console
    setFormSubmitted2(true);
    setShowPopup(false); // Close the popup after submission
    toast.success("Data submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  useEffect(() => {
  const handlePopupVisibility = () => {
    // Show the popup only if conditions are met and form is not submitted yet
    if ((formData.buyersIndividuals === "No" && formData.residentialProperty === "No" && formData.newLeasehold === "Yes") && !formSubmitted2) {
      setShowPopup(true); // Show the popup
    } else {
      setShowPopup(false); // Hide the popup
    }
  };

    handlePopupVisibility();
  }, [formData, formSubmitted2]); // Add handlePopupVisibility as a dependency
  
  
  

  // Calculate total for Step 1
  useEffect(() => {
    const calculateStep1Total = () => {
      const price = parseFloat(formData.price) || 0;
  
      let priceFee = 0;
      if (price < 250001) priceFee = 1200;
      else if (price < 500001) priceFee = 1500;
      else if (price < 750001) priceFee = 1800;
      else if (price < 900001) priceFee = 2100;
      else if (price < 1000001) priceFee = 2400;
      else if (price < 1500001) priceFee = 2500;
      else if (price < 2000001) priceFee = 3000;
      else if (price < 2500001) priceFee = 3600;
      else if (price >= 2500002 && !formSubmitted1) {
        setShowPopup(true); // Show the popup for ContactCard
        return; // Exit from function early
      }
  
      const leaseholdFee = formData.leasehold === 'Yes' ? 300 : 0;
      const mortgageFee = formData.mortgage === 'Yes' ? 360 : 0;
      const sharedOwnershipFee = formData.sharedOwnership === 'Yes' ? 150 : 0;
      const giftedFundsFee = formData.giftedFunds === 'Yes' ? 150 : 0;
      const newBuildFee = formData.newBuild === 'Yes' ? 420 : 0;
      const staircasingFee = formData.staircasing === 'Yes' ? 420 : 0;
      const unregisteredFee = formData.unregistered === 'Yes' ? 420 : 0;
  
      let step1TotalAmount = priceFee + leaseholdFee + mortgageFee + sharedOwnershipFee + giftedFundsFee + newBuildFee + staircasingFee + unregisteredFee;
  
      if (step1TotalAmount === "Please Contact Us") {
        setStep1Total("Please Contact Us");
        return;
      }  
      setStep1Total(step1TotalAmount);
    };
  
    const calculateStep2Total = () => {
      const price = parseFloat(formData.price) || 0;
      let step2TotalAmount = 0;
          // Handle other Step 2 submission logic here
          
      if (formData.ukResidents === 'No') {
        step2TotalAmount += price * 0.02;
      }
  
      if (formData.moreThanOneHouse === 'Yes') {
        step2TotalAmount += price * 0.03;
      }
  
      if (formData.mainResidence === 'Yes' && formData.ownedBefore === 'Yes') {
        if (price > 250000) {
          if (price <= 925000) {
            step2TotalAmount += (price - 250000) * 0.05;
          } else if (price <= 1500000) {
            step2TotalAmount += (925000 - 250000) * 0.05 + (price - 925000) * 0.1;
          } else {
            step2TotalAmount +=
              (925000 - 250000) * 0.05 +
              (1500000 - 925000) * 0.1 +
              (price - 1500000) * 0.12;
          }
        }
      } else if (formData.ownedBefore === 'No') {
        if (price <= 450000) {
          // No tax for prices up to 450,000
          step2TotalAmount += 0;
        } else if (price <= 625000) {
          // Add 5% tax for the amount exceeding 450,000
          step2TotalAmount += (price - 450000) * 0.05;
        } else {
          // Add 5% tax for the range 450,001 to 625,000
          step2TotalAmount += (625000 - 450000) * 0.05;
          // Add remaining tax (if needed) for prices above 625,000
          step2TotalAmount += (price - 625000);  /* applicable tax rate */
        }
      }
        
        setStep2Total(step2TotalAmount);  
    }
    calculateStep1Total();
    calculateStep2Total();
  }, [formData,formSubmitted1]);
  
  const popupOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it's above the step content
  };
  
  // ContactCard Container Style (Centering the ContactCard)
  const contactCardContainerStyle = {
    padding: '20px',
    maxWidth: '600px', // Increased width
    width: '100%', // Ensure it takes up full width of the container (if needed)
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    background: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1001, // To ensure the contact card is above the overlay
  };


  const validateStep1Fields = () => {
    const requiredFields = [
      'price',
      'leasehold',
      'mortgage',
      'sharedOwnership',
      'giftedFunds',
      'newBuild',
      'staircasing',
      'unregistered',
    ];
  

    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill the ${field.replace(/([A-Z])/g, ' $1')} field!`, {
          position: 'top-right',
          autoClose: 3000,
        });
        return false;
      }
    }
     setIsStep1Complete(true);
    return true;

  };
  const [activeStep, setActiveStep] = useState(1); // 1 = Step 1, 2 = Step 2
  const [isStep1Complete, setIsStep1Complete] = useState(false);
  const [isStep2Complete, setIsStep2Complete] = useState(false);

  const handleNext = () => {
    if (validateStep1Fields()) {
      // Proceed to Step 2
      toast.success('Step 1 is complete! Moving to Step2.', {
        position: 'top-right',
        autoClose: 3000,
      });
      setActiveStep(2); // Set active step to Step 2
    }
  };
  
  const validateStep2Fields = () => {
    const requiredFields = [
      'buyersIndividuals',
      'ukResidents',
      'residentialProperty',
      'newLeasehold',
      'ownedBefore',
      'moreThanOneHouse',
      'mainResidence',
    ];
  
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill the ${field.replace(/([A-Z])/g, ' $1')} field!`, {
          position: 'top-right',
          autoClose: 3000,
        });
        return false;
      }
    }
    return true;
  };
  const handleNextStep2 = () => {
    if (validateStep2Fields()) {
      setIsStep2Complete(true); // Mark Step 2 as complete
      toast.success('Step2 is complete! successfully Submit your form', {
        position: 'top-right',
        autoClose: 3000,
      });
      // Logic to move to Step 3
      setActiveStep(3);
    }
  };
  
  const handlePrevious = () => {
    // Logic to move back to Step 1
    toast.success('Moved to Step 1', {
      position: 'top-right',
      autoClose: 3000,
    });
    // Update active step state
    setActiveStep(1);
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

    <Accordion className='mb-2' expanded={activeStep === 1}>
      <AccordionSummary
        sx={{
          borderBottom: '1px solid #ddd',
          '& .MuiTypography-root': {
            fontSize: '1.15rem',
          },
        }}
        
      >
        <Typography variant="h6">Step 1</Typography>
{isStep1Complete && (
  <div
    style={{
      color: 'green',
      marginLeft: 'auto',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid green',
      borderRadius: '50%',
    }}
  >
    ✔
  </div>
)}
      
      </AccordionSummary>
      {activeStep === 1 && (
      <AccordionDetails>
      <Grid container spacing={2}>
        {/* Step 1 Fields */}
        <Grid item xs={12} md={12}>
          <TextField
            label="Enter Property Price"
            name="price"
            variant="outlined"
            fullWidth
            value={formData.price}
            onChange={handleInputChange}

          />
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth
          >
            <InputLabel>Leasehold</InputLabel>
            <Select
              label="Leasehold"
              name="leasehold"
              value={formData.leasehold}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Mortgage</InputLabel>
            <Select
              label="Mortgage"
              name="mortgage"
              value={formData.mortgage}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} >
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Shared Ownership</InputLabel>
            <Select
              label="Shared Ownership"
              name="sharedOwnership"
              value={formData.sharedOwnership}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>New Build</InputLabel>
            <Select
              label="New Build"
              name="newBuild"
              value={formData.newBuild}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} display="flex" alignItems="center">
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Purchase Funds Being Gifted</InputLabel>
            <Select
              label="Purchase Funds Being Gifted"
              name="giftedFunds"
              value={formData.giftedFunds}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="Funds being gifted by a third party or family to assist with the purchase." arrow>
    <InfoOutlinedIcon
      sx={{
        color: "#233955", // Blue color for the icon
        marginLeft: "2px", // Add spacing between icon and field
        cursor: "pointer", // Make it look clickable
      }}
    />
  </Tooltip>
        </Grid>

        <Grid item xs={12} md={12} display="flex" alignItems="center">
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Staircasing</InputLabel>
            <Select
              label="Staircasing"
              name="staircasing"
              value={formData.staircasing}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="Process of purchasing additional shares in a shared ownership property." arrow>
    <InfoOutlinedIcon
      sx={{
        color: "#233955",
        marginLeft: "2px",
        cursor: "pointer",
      }}
    />
  </Tooltip>
        </Grid>

        <Grid item xs={12} md={12} display="flex" alignItems="center">
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Unregistered Property</InputLabel>
            <Select
              label="Unregistered Property"
              name="unregistered"
              value={formData.unregistered}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="A property that has not been registered with the Land Registry." arrow>
    <InfoOutlinedIcon
      sx={{
        color: "#233955",
        marginLeft: "2px",
        cursor: "pointer",
      }}
    />
  </Tooltip>
        </Grid>

        {/* Display Step 1 Total */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', marginLeft: '16px' }}>
          <button className="next-btn" onClick={handleNext}>Next</button>
        </Box>  

             
      </Grid>
      {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={contactCardContainerStyle}>
            <ContactCard
              onSubmit={handleFormSubmit1}
              closePopup={() => setShowPopup(false)} // Close popup on cancel
            />
          </div>
        </div>
      )}
    </AccordionDetails>
    )}
    </Accordion>

    <Accordion expanded={activeStep === 2}>
      <AccordionSummary
        sx={{
          borderBottom: '1px solid #ddd',
          '& .MuiTypography-root': {
            fontSize: '1.25rem',
          },
        }}
      >
        <Typography variant="h6">Step 2</Typography>
        {isStep2Complete &&  (
         <div
    style={{
      color: 'green',
      marginLeft: 'auto',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid green',
      borderRadius: '50%',
    }}
  >
    ✔
  </div>
  )}
      </AccordionSummary>
      {activeStep === 2 && (
      <AccordionDetails>
    <Grid container spacing={2}>
    <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Are all Buyers Individuals?</InputLabel>
            <Select
              label="Are all Buyers Individuals?"
              name="buyersIndividuals"
              value={formData.buyersIndividuals}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Are all Buyers UK Residents?</InputLabel>
            <Select
              label="Are all Buyers UK Residents?"
              name="ukResidents"
              value={formData.ukResidents}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Is it a Residential Property?</InputLabel>
            <Select
              label="Is it a Residential Property?"
              name="residentialProperty"
              value={formData.residentialProperty}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Is it a New Leasehold?</InputLabel>
            <Select
              label="Is it a New Leasehold?"
              name="newLeasehold"
              value={formData.newLeasehold}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Have any buyer ever owned a house before anywhere in the world?</InputLabel>
            <Select
              label="Have any buyer ever owned a house before anywhere in the world?"
              name="ownedBefore"
              value={formData.ownedBefore}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>At the end of this transaction will you own more than one house</InputLabel>
            <Select
              label="At the end of this transaction will you own more than one house"
              name="moreThanOneHouse"
              value={formData.moreThanOneHouse}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Will this house be your main residence</InputLabel>
            <Select
              label="Will this house be your main residence"
              name="mainResidence"
              value={formData.mainResidence}
              onChange={handleInputChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', marginLeft: '12px'}}>
          <button className="next-btn" onClick={handlePrevious}>Previous Step</button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', marginLeft: '12px' }}>
          <button className="next-btn" onClick={handleNextStep2}>Submit</button>
        </Box>
    </Grid>
    <div> 
          {/* <Typography variant="h6">console.log(Step2 Total: {step2Total})</Typography> */}
        </div>
        {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={contactCardContainerStyle}>
            <ContactCard
              onSubmit={handleFormSubmit2}
              closePopup={() => setShowPopup(false)}
            />
          </div>
        </div>
      )}
      </AccordionDetails>
      )}
    </Accordion>

    {/* <Accordion expanded={activeStep === 3}>
      <AccordionSummary
        sx={{
          borderBottom: '1px solid #ddd',
          '& .MuiTypography-root': {
            fontSize: '1.25rem',
          },
        }}
      >
        <Typography variant="h6">Step 3</Typography>
      </AccordionSummary>
      {activeStep === 3 && (
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Are all buyers individuals?</InputLabel>
              <Select label="Are all buyers individuals?">
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          <div className='d-flex justify-content-end align-items-end'>
            <button className='next-btn mr-2'>Preview Data</button>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <button className='next-btn'>Previous Step</button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', marginLeft: '16px' }}>
              <button className='next-btn'>Submit</button>
            </Box>
          </div>
        </Grid>
      </AccordionDetails>
        )}
    </Accordion>

    <Snackbar open={false} autoHideDuration={4000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert severity="error" sx={{ width: '100%' }}>
        Please fill out all fields before proceeding.
      </Alert>
    </Snackbar> */}
  </Box>
  <ToastContainer />
</div>

      <FooterHomeTwo />
    </>
  );
};

export default PurchasingPropertyForm;