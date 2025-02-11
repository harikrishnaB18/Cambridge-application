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
  Snackbar,
  Alert,
  FormHelperText,
} from '@mui/material';
import jsPDF from "jspdf";
import "jspdf-autotable";
import '../SellingProperty/SellingProperty.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import FooterHomeTwo from '../components/FooterHomeTwo';
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../components/useToggle.js';
import ContactCardSelling from "../PropertyManagementForm/ContactCardSelling.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellingProperty = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [showPopup, setShowPopup] = useState(false);
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [accordion1Data, setAccordion1Data] = useState({
    price: '',
    leasehold: '',
    mortgage: '',
    sharedOwnership: '',
    // purchaseFunds: '',
    newBuild: '',
    staircasing: '',
    unregistered: '',
  });

  const [accordion2Data, setAccordion2Data] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [totalAmount, setTotalAmount] = useState(0); 
  const [isAccordion1Open, setAccordion1Open] = useState(true);
  const [isAccordion2Open, setAccordion2Open] = useState(false);
  const [isAccordionCompleted, setAccordionCompleted] = useState(false);
  const [isAccordion2Completed, setAccordion2Completed] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleAccordion1Change = (key, fieldName) => (event) => {
    const value = event.target.value;

    setAccordion1Data((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    if (fieldName === "price") {
      const price = parseFloat(value);

      // Validation logic
      if (isNaN(price) || price <= 0) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [key]: true,
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [key]: false,
        }));
      }

      // Check if price exceeds threshold
      if (price > 2000001) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }
    calculateTotal();
  };
  console.log("step1:" + totalAmount)

  const closePopup = () => {
    setShowPopup(false); // Close popup when close button is clicked
  };

  const handleSubmitClick = () => {
    const allFieldsFilled = Object.values(accordion1Data).every((value) => value !== '');
    let errors = {};
    Object.keys(accordion1Data).forEach((field) => {
      if (!accordion1Data[field]) errors[field] = true;
    });

    setValidationErrors(errors);

    if (allFieldsFilled) {
      console.log('Form Data:', accordion1Data); 
      setAccordionCompleted(true);
      setAccordion1Open(false);
      setAccordion2Open(true);
    } else {

      setToastOpen(true);
    }
  };

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    toast.success('Data Submitted Successfully.', {
      position: 'top-right',
      autoClose: 3000,
    });
    setShowPopup(false);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^([+](44|1|91)[\s]?)?[0-9\s]{10,11}$/;

  const handleAccordion2Change = (key) => (event) => {
    const value = event.target.value;
    setAccordion2Data((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    let error = false;

    if (value.trim() === '') {
      error = true;
    } else if (key === 'email' && !emailRegex.test(value)) {
      error = true;
    } else if (key === 'phone' && !phoneRegex.test(value)) {
      error = true;
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [key]: false,
      }));
    }
  };

  const handleAccordion2Submit = () => {
    const allFieldsFilled = Object.values(accordion2Data).every((value) => value.trim() !== '');
    let errors = {};
    Object.keys(accordion2Data).forEach((key) => {
      if (!accordion2Data[key].trim()) {
        errors[key] = true;
      } else if (key === 'email' && !emailRegex.test(accordion2Data[key])) {
        errors[key] = true;
      }
    });

    setValidationErrors(errors);
    if (allFieldsFilled && Object.keys(errors).length === 0) {
      setAccordion2Completed(true);
      setAccordion2Open(false);
      setShowThankYouMessage(true);
      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
    } else {
      setToastOpen(true);
      setShowThankYouMessage(false);
    }
  };

  const handlePrevious = () => {
    setAccordion1Open(true);
    setAccordion2Open(false);
  };

  const [formData] = useState({ price: "" });

  useEffect(() => {
    calculateTotal();
  }, [formData.price, accordion1Data]);
  
  const calculateTotal = () => {
    const price = parseFloat(accordion1Data.price) || 0;
  
    // Define price ranges and their corresponding fees
    const priceRanges = [
      { max: 250000, fee: 1200 },
      { max: 500000, fee: 1500 },
      { max: 750000, fee: 1800 },
      { max: 900000, fee: 2100 },
      { max: 1000000, fee: 2400 },
      { max: 1500000, fee: 2500 },
      { max: 2000000, fee: 3000 },
      { max: 2500000, fee: 3600 },
    ];
  
    // Determine the price fee based on the price range
    let priceFee = 0;
    for (const range of priceRanges) {
      if (price <= range.max) {
        priceFee = range.fee;
        break;
      }
    }
  
    // Show popup and exit if price exceeds the highest range
    if (price > 2500001 ) {
      setShowPopup(true); // Show the popup for ContactCard
      return; // Exit the function early
    }
  
    // Base total amount starts with the price fee
    let total = priceFee;
  
    // Add additional fees based on user selections
    const additionalFees = {
      leasehold: 300,
      mortgage: 360,
      sharedOwnership: 150,
      newBuild: 420,
      staircasing: 420,
      unregistered: 420,
    };
  
    for (const [key, fee] of Object.entries(additionalFees)) {
      if (accordion1Data[key] === 'Yes') {
        total += fee;
      }
    }
    const stampDuty = 200;
    const solicitorsFees = 200;
    total += stampDuty+solicitorsFees;
    // Update the total amount state
    setTotalAmount(total);
  };
  

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Add a title
    doc.setFontSize(18);
    doc.text("Selling Property Summary", 14, 20);
  
    // Add user selections and related amounts
    doc.setFontSize(12);
    doc.text("Step1:", 14, 30);
  
    // Calculate price fee
    const price = parseFloat(accordion1Data.price) || 0;
    const priceFee = calculatePriceFee(price);
    
    // Start creating table rows
    const accordion1Entries = [];
  
    // Add price and its fee
    accordion1Entries.push([
      "Property Price",
      `£${price.toLocaleString()}`, // Display price
      `£${priceFee}`, // Display fee for the price
    ]);
  
    // Add user selections and their respective amounts
    Object.entries(accordion1Data).forEach(([key, value]) => {
      if (key !== "price") {
        if (value === "Yes") {
          const amount = calculateAmountForKey(key); // Function to get amount for the specific key
          accordion1Entries.push([
            key.charAt(0).toUpperCase() + key.slice(1), // Capitalize key names
            value,
            `£${amount}`, // Add the amount
          ]);
        } else {
          accordion1Entries.push([
            key.charAt(0).toUpperCase() + key.slice(1),
            value || "Not Selected",
            "-", // No amount for "No" or unselected options
          ]);
        }
      }
    });
  
    // Stamp Duty calculation
    const calculateStampDuty = (price) => {
      let stampDuty = 0;
      if (price > 3000000) {
        stampDuty += (price - 3000000) * 0.12;
        price = 3000000;
      }
      if (price > 1500000) {
        stampDuty += (price - 1500000) * 0.10;
        price = 1500000;
      }
      if (price > 925000) {
        stampDuty += (price - 925000) * 0.05;
        price = 925000;
      }
      if (price > 250000) {
        stampDuty += (price - 250000) * 0.05;
        price = 250000;
      }
      return stampDuty;
    };
  
    const stampDuty = calculateStampDuty(price);
    accordion1Entries.push(["Stamp Duty", "-", `£${stampDuty.toLocaleString()}`]);
  
    // Solicitors Fees calculation
    const calculateSolicitorsFees = (price) => {
      let fee = 0;
      let vat = 0;
      if (price <= 500000) {
        fee = 950;
        vat = 190;
      } else if (price <= 750000) {
        fee = 1250;
        vat = 250;
      } else if (price <= 950000) {
        fee = 1500;
        vat = 300;
      } else if (price <= 1000000) {
        fee = 2000;
        vat = 400;
      } else if (price <= 1500000) {
        fee = 2500;
        vat = 500;
      } else if (price <= 2000000) {
        fee = 3000;
        vat = 600;
      }
      return { fee, vat, total: fee + vat };
    };
  
    const solicitorsFees = calculateSolicitorsFees(price);
    accordion1Entries.push([
      "Solicitors Fees",
      "-",
      `£${solicitorsFees.total.toLocaleString()}`,
    ]);

    // Calculate and add the total amount
    const total =
      priceFee +
      stampDuty +
      solicitorsFees.total +
      Object.values(accordion1Data)
        .filter((value) => value === "Yes")
        .reduce((sum, key) => sum + calculateAmountForKey(key), 0);
    accordion1Entries.push(["Total Amount", "", `£${total.toLocaleString()}`]);
  
    // Add table for user selections and amounts
    doc.autoTable({
      startY: 35,
      head: [["Field", "Value", "Amount"]],
      body: accordion1Entries,
      headStyles: { fillColor: [35, 57, 85] },
    });
  
    // Add user contact details
    doc.text("Step2", 14, doc.lastAutoTable.finalY + 10);
    const accordion2Entries = Object.entries(accordion2Data).map(([key, value]) => [
      key.charAt(0).toUpperCase() + key.slice(1),
      value || "Not Provided",
    ]);
  
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 15,
      head: [["Field", "Value"]],
      body: accordion2Entries,
      headStyles: { fillColor: [35, 57, 85] },
    });
  
    // Open the PDF in a new window for preview
    window.open(doc.output("bloburl"), "_blank");
  };
  
  
  // Helper function to calculate price fee based on ranges
  const calculatePriceFee = (price) => {
    const priceRanges = [
      { max: 250000, fee: 1200 },
      { max: 500000, fee: 1500 },
      { max: 750000, fee: 1800 },
      { max: 900000, fee: 2100 },
      { max: 1000000, fee: 2400 },
      { max: 1500000, fee: 2500 },
      { max: 2000000, fee: 3000 },
      { max: 2500000, fee: 3600 },
    ];
  
    for (const range of priceRanges) {
      if (price <= range.max) {
        return range.fee;
      }
    }
    return 0; // Default fee if no range matches
  };
  
  // Helper function to calculate amount for a specific key
  const calculateAmountForKey = (key) => {
    const amounts = {
      leasehold: 300,
      mortgage: 360,
      sharedOwnership: 150,
      newBuild: 420,
      staircasing: 420,
      unregistered: 420,
      // Add all your options and their respective amounts here
    };
    return amounts[key] || 0; // Return the amount or 0 if the key is not found
  };
  
  const price = parseFloat(accordion1Data.price) || 0;
  const priceFee = calculatePriceFee(price);
  
  // Start creating table rows
  const accordion1Entries = [];

  // Add price and its fee
  accordion1Entries.push([
    "Property Price",
    `£${price.toLocaleString()}`, // Display price
    `£${priceFee}`, // Display fee for the price
  ]);

  // Add user selections and their respective amounts
  Object.entries(accordion1Data).forEach(([key, value]) => {
    if (key !== "price") {
      if (value === "Yes") {
        const amount = calculateAmountForKey(key); // Function to get amount for the specific key
        accordion1Entries.push([
          key.charAt(0).toUpperCase() + key.slice(1), // Capitalize key names
          value,
          `£${amount}`, // Add the amount
        ]);
      } else {
        accordion1Entries.push([
          key.charAt(0).toUpperCase() + key.slice(1),
          value || "Not Selected",
          "-", // No amount for "No" or unselected options
        ]);
      }
    }
  });

  // Stamp Duty calculation
  const calculateStampDuty = (price) => {
    let stampDuty = 0;
    if (price > 3000000) {
      stampDuty += (price - 3000000) * 0.12;
      price = 3000000;
    }
    if (price > 1500000) {
      stampDuty += (price - 1500000) * 0.10;
      price = 1500000;
    }
    if (price > 925000) {
      stampDuty += (price - 925000) * 0.05;
      price = 925000;
    }
    if (price > 250000) {
      stampDuty += (price - 250000) * 0.05;
      price = 250000;
    }
    return stampDuty;
  };

  const stampDuty = calculateStampDuty(price);
  accordion1Entries.push(["Stamp Duty", "-", `£${stampDuty.toLocaleString()}`]);

  // Solicitors Fees calculation
  const calculateSolicitorsFees = (price) => {
    let fee = 0;
    let vat = 0;
    if (price <= 500000) {
      fee = 950;
      vat = 190;
    } else if (price <= 750000) {
      fee = 1250;
      vat = 250;
    } else if (price <= 950000) {
      fee = 1500;
      vat = 300;
    } else if (price <= 1000000) {
      fee = 2000;
      vat = 400;
    } else if (price <= 1500000) {
      fee = 2500;
      vat = 500;
    } else if (price <= 2000000) {
      fee = 3000;
      vat = 600;
    }
    return { fee, vat, total: fee + vat };
  };

  const solicitorsFees = calculateSolicitorsFees(price);
  accordion1Entries.push([
    "Solicitors Fees",
    "-",
    `£${solicitorsFees.total.toLocaleString()}`,
  ]);

  // Calculate and add the total amount
  const total =
    priceFee +
    stampDuty +
    solicitorsFees.total +
    Object.values(accordion1Data)
      .filter((value) => value === "Yes")
      .reduce((sum, key) => sum + calculateAmountForKey(key), 0);
  accordion1Entries.push(["Total Amount", "", `£${total.toLocaleString()}`]);

  const overalltotal=solicitorsFees.total+total+stampDuty
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderHomeTwo action={drawerAction.toggle} />
      <div className="mt-3 mb-3" style={{ backgroundColor: '#f6f8fb' }}>
        <Box sx={{ padding: '50px', maxWidth: '900px', margin: 'auto' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Selling Property
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Complete this step to get your quote for Selling the property.
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
              <Typography variant="h6">Step 1</Typography>
            </AccordionSummary>
            <AccordionDetails className='pt-4'>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>

                  <TextField
                    label="Enter Property Price"
                    name="price"
                    variant="outlined"
                    fullWidth
                    type='number'
                    value={accordion1Data.price}
                    onChange={handleAccordion1Change('price','price')}
                    error={validationErrors.price}
                    helperText={validationErrors.price ? 'This field is required & Only positive numbers are allowed' : ''}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-error': { borderColor: 'red' },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
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

                <Grid item xs={12} md={12}>
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

                <Grid item xs={12} md={12}>
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

                {/* <Grid item xs={12} md={4}>
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
                </Grid> */}
                
                <Grid item xs={12} md={12}>
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

                <Grid item xs={12} md={12}>
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

                <Grid item xs={12} md={12}>
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
      <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, 
    alignItems: 'center', 
    justifyContent: { sm: 'flex-end' },
    marginTop: '14px',
    gap: '10px',
  }}
>
  <button className="next-btn" onClick={handleSubmitClick}>Next</button>

</Box>
    {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            background: "#fff",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <ContactCardSelling onSubmit={handleSubmit} closePopup={closePopup} />
        </div>
      )}

      {/* Overlay for dimming background */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        ></div>
      )} 
            </AccordionDetails>
    </Accordion>
    <Accordion expanded={isAccordion2Open} className='mb-2'>
            <AccordionSummary
              expandIcon={isAccordion2Completed ? <CheckCircleIcon color="success" /> : <ExpandMoreIcon />}
            >
              <Typography variant="h6">Step 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Full Name"
                    name="fullName"
                    variant="outlined"
                    fullWidth
                    value={accordion2Data.fullName}
                    onChange={handleAccordion2Change('fullName')}
                    error={validationErrors.fullName}
                    helperText={validationErrors.fullName ? 'This field is required' : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    value={accordion2Data.email}
                    onChange={handleAccordion2Change('email')}
                    error={validationErrors.email}
                    helperText={
      validationErrors.email
        ? accordion2Data.email.trim() === ''
          ? 'This field is required'
          : 'Invalid email format'
        : ''
    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    fullWidth
                    value={accordion2Data.phone}
                    onChange={handleAccordion2Change('phone')}
                    error={validationErrors.phone}
                    helperText={
                      validationErrors.phone
                        ? accordion2Data.phone.trim() === ''
                          ? 'This field is required'
                          : 'Phone number must contain only numbers'
                        : ''
                    }
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px'  ,   flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons vertically on mobile
    gap: '8px',}}>
              <button className="next-btn mr-2" onClick={handlePrevious}>PreviousStep</button>
              <button className="next-btn mr-2" onClick={generatePDF}>Preview Data</button>
                <button className="next-btn" onClick={handleAccordion2Submit}>Submit</button>
              </Box>
            </AccordionDetails>
          </Accordion>
          {showThankYouMessage && (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Typography variant="h6" style={{ color: "green" }}>
        Thank you for submitting the form! A team member will reach out to you within 1-2 business days.
      </Typography> 
      <div className='container'>
          <table
  style={{
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }}
>
  <thead>
    <tr
      style={{
        backgroundColor: '#233955',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      <th style={{ padding: '12px' }}>Field</th>
      <th style={{ padding: '12px' }}>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>Stamp Duty</td>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{stampDuty}</td>
    </tr>
    <tr style={{ backgroundColor: '#ffffff', textAlign: 'center' }}>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>Solicitors Fees</td>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{solicitorsFees.total}</td>
    </tr>
    <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>Sub-Total</td>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{total}</td>
    </tr>
    <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>Total</td>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{overalltotal}</td>
    </tr>
  </tbody>
</table>

    </div>
    </div>

)}
          <Snackbar
            open={toastOpen}
            autoHideDuration={4000}
            onClose={() => setToastOpen(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Alert onClose={() => setToastOpen(false)} severity="error" sx={{ width: '100%' }}>
              Please fill out all fields before proceeding.
            </Alert>
          </Snackbar>
        </Box>


      </div>

      <ToastContainer/>
      <FooterHomeTwo />
    </>
  );
};

export default SellingProperty;
