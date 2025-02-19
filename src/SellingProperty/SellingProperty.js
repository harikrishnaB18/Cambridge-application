import React, { useState, useEffect, useCallback } from "react";
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
} from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../SellingProperty/SellingProperty.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HeaderHomeTwo from "../components/HeaderHomeTwo";
import FooterHomeTwo from "../components/FooterHomeTwo";
import Drawer from "../Mobile/Drawer.jsx";
import useToggle from "../components/useToggle.js";
import ContactCardSelling from "../PropertyManagementForm/ContactCardSelling.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellingProperty = () => {
  const [data, setData] = useState({});
    const [stampDuty, setStampDuty] = useState(0);
const [solicitorsFees, setSolicitorsFees] = useState(0);
  const [total, setTotal] = useState(0);
  const [overalltotal, setOverallTotal] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [drawer, drawerAction] = useToggle(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isAccordion1Open, setAccordion1Open] = useState(true);
  const [isAccordion2Open, setAccordion2Open] = useState(false);
  const [isAccordionCompleted, setAccordionCompleted] = useState(false);
  const [isAccordion2Completed, setAccordion2Completed] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  
  const [accordion1Data, setAccordion1Data] = useState({
    price: "",
    leasehold: "",
    mortgage: "",
    sharedOwnership: "",
    newBuild: "",
    staircasing: "",
    unregistered: "",
  });

  const [accordion2Data, setAccordion2Data] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^([+](44|1|91)[\s]?)?[0-9\s]{10,11}$/;

   const handleAccordion1Change = (key) => (event) => {
        const value = event.target.value;

        setAccordion1Data((prevData) => ({
            ...prevData,
            [key]: value,
        }));

        if (key === "price") {
            const price = parseFloat(value);
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
            if (price > 2000001) {
                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        }
    };
 const handleAccordion2Change = (key) => (event) => {
        const value = event.target.value;

        setAccordion2Data((prevData) => ({
            ...prevData,
            [key]: value,
        }));

        if (!value.trim() || (key === "email" && !emailRegex.test(value)) || (key === "phone" && !phoneRegex.test(value))) {
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
    };

  const handleSubmitClick = () => {
const allFieldsFilled = Object.values(accordion1Data).every((value) => Boolean(value));
    let errors = {};

    Object.keys(accordion1Data).forEach((field) => {
      if (!accordion1Data[field]) errors[field] = true;
    });

    setValidationErrors(errors);

    if (allFieldsFilled) {
      setAccordionCompleted(true);
      setAccordion1Open(false);
      setAccordion2Open(true);
    } else {
      setToastOpen(true);
    }
  };

   const handleAccordion2Submit = () => {
        const allFieldsFilled = Object.values(accordion2Data).every((value) => value.trim() !== "");
        let errors = {};

        Object.keys(accordion2Data).forEach((key) => {
            if (!accordion2Data[key].trim() || (key === "email" && !emailRegex.test(accordion2Data[key]))) {
                errors[key] = true;
            }
        });

        setValidationErrors(errors);

        if (allFieldsFilled && Object.keys(errors).length === 0) {
            setAccordion2Completed(true);
            setAccordion2Open(false);
            setShowThankYouMessage(true);
           toast.success("Form submitted successfully!", { position: "top-right", autoClose: 3000 });
        } else {
            setToastOpen(true);
            setShowThankYouMessage(false);
        }
    };

    const handlePrevious = () => {
        setAccordion1Open(true);
        setAccordion2Open(false);
    };
  const calculateTotal = useCallback(() => {
    const price = parseFloat(accordion1Data.price) || 0;
    const priceFees = {
      250000: 1200,
      500000: 1500,
      750000: 1800,
      900000: 2100,
      1000000: 2400,
      1500000: 2500,
      2000000: 3000,
      2500000: 3600,
    };

    let priceFee = Object.entries(priceFees).find(([max]) => price <= max)?.[1] || 0;

    if (price > 2500001) {
      setShowPopup(true);
      return;
    }

    let total = priceFee;
    const additionalFees = {
      leasehold: 300,
      mortgage: 360,
      sharedOwnership: 150,
      newBuild: 420,
      staircasing: 420,
      unregistered: 420,
    };

    for (const [key, fee] of Object.entries(additionalFees)) {
      if (accordion1Data[key] === "Yes") {
        total += fee;
      }
    }

    const stampDuty = 200;
    const solicitorsFees = 200;
    total += stampDuty + solicitorsFees;

    setTotalAmount(total);
  }, [accordion1Data]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

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
            <ContactCardSelling onSubmit={handleSubmit} closePopup={() => setPopupVisible(false)} />
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
              <button className="next-btn mr-2" onClick={() => generatePDF(data)}>
            Preview Data </button>
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
        <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{stampDuty ?? "0.00"}</td>
    </tr>
    <tr style={{ backgroundColor: '#ffffff', textAlign: 'center' }}>
        <td style={{ padding: '12px', border: '1px solid #ddd' }}>Solicitors Fees</td>
        <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{solicitorsFees?.total ?? "0.00"}</td>
    </tr>
    <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <td style={{ padding: '12px', border: '1px solid #ddd' }}>Sub-Total</td>
        <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{total ?? "0.00"}</td>
    </tr>
    <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <td style={{ padding: '12px', border: '1px solid #ddd' }}>Total</td>
        <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{overalltotal ?? "0.00"}</td>
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
