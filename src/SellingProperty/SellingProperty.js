import React, { useState } from 'react';
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
  Modal,
  FormHelperText,
} from '@mui/material';
import jsPDF from 'jspdf';
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

  const [isAccordion1Open, setAccordion1Open] = useState(true);
  const [isAccordionCompleted, setAccordionCompleted] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

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
  };

  const handleFormSubmit = (formData) => {
    console.log("Contact form submitted:", formData);
    setShowPopup(false); // Close popup after submission
  };

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
      console.log('Form Data:', accordion1Data); // Print data to console
      setAccordionCompleted(true);
      setAccordion1Open(false);
    } else {
      setToastOpen(true);
    }
  };
  const handlePreviewPDF = () => {
    const doc = new jsPDF();
  
    // Title for the PDF
    doc.setFontSize(18);
    doc.text('Selling Purchase Information', 10, 10);
  
    // Function to calculate price based on price input
    const calculatePrice = (price) => {
      if (price < 250001) return 1140;
      if (price < 500001) return 1140;
      if (price < 750001) return 1450;
      if (price < 900001) return 1800;
      if (price < 1000001) return 2400;
      if (price < 1500001) return 2500;
      if (price < 2000001) return 3000;
      return "Please Contact Us";
    };
  
    // Create table headers
    const headers = [['Field', 'Value', 'Cost']];
  
    // Calculate cost based on the user-provided price
    const priceCost = calculatePrice(accordion1Data.price);
  
    // Create the data array dynamically from the form data
    const data = [
      ['Price', accordion1Data.price, priceCost], // Price entered by user as Value, calculated cost as Cost
      ['Leasehold', accordion1Data.leasehold, accordion1Data.leasehold === 'Yes' ? '£300' : '-'],
      ['Mortgage', accordion1Data.mortgage, accordion1Data.mortgage === 'Yes' ? '£360' : '-'],
      ['Shared Ownership', accordion1Data.sharedOwnership, accordion1Data.sharedOwnership === 'Yes' ? '£150' : '-'],
      ['New Build', accordion1Data.newBuild, accordion1Data.newBuild === 'Yes' ? '£420' : '-'],
      ['Staircasing', accordion1Data.staircasing, accordion1Data.staircasing === 'Yes' ? '£420' : '-'],
      ['Unregistered', accordion1Data.unregistered, accordion1Data.unregistered === 'Yes' ? '£420' : '-'],
    ];
  
    // Calculate the total amount, excluding non-numeric values (like "-")
    const totalAmount = data.reduce((total, row) => {
      let cost = row[2];
  
      // Only process cost if it's a number or string that can be parsed to a number
      if (cost === '-' || cost === 'Please Contact Us') {
        return total;  // Skip non-numeric or unprocessable values
      }
  
      // Ensure cost is a string if it's numeric
      const parsedCost = typeof cost === 'string' ? parseFloat(cost.replace('€', '').trim()) : cost;
  
      // If parsed cost is valid, add it to the total
      if (!isNaN(parsedCost)) {
        return total + parsedCost;
      }
  
      return total;
    }, 0);
  
    // Add the total row to the data array
    data.push(['Total', '', `€${totalAmount}`]);
  
    // Add the table to the PDF with styling
    doc.autoTable({
      head: headers,
      body: data,
      startY: 20, // Adjust starting Y position for the table
      margin: { top: 20 }, // Add top margin to avoid collision with title
      styles: {
        font: 'helvetica',
        fontSize: 10,
        cellPadding: 5,
        overflow: 'linebreak',
        lineColor: [44, 62, 80],
        lineWidth: 0.3,
      },
      headStyles: {
        fillColor: [44, 62, 80], // Header background color
        textColor: [255, 255, 255], // Header text color
        fontSize: 12,
        fontStyle: 'bold',
      },
      bodyStyles: {
        fillColor: [255, 255, 255], // Body background color
      },
    });
  
    // Generate the PDF as a Blob and preview it in a modal
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
  
    // Set the PDF URL and open the modal
    setPdfUrl(pdfUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Revoke the URL to free memory
    URL.revokeObjectURL(pdfUrl);
    setPdfUrl('');
  };

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    toast.success("Data successfully submitted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    setShowPopup(false);
  };

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
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <Modal open={open} onClose={handleClose}>
        <Box
          sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: '80%',height: '80%',bgcolor: 'background.paper',boxShadow: 24, p: 4,display: 'flex',flexDirection: 'column',
          }}
        >
          <iframe
            src={pdfUrl}
            title="PDF Preview"
            style={{ flex: 1, border: 'none' }}
          ></iframe>
          <button
            className='next-btn mt-2' onClick={handleClose}
            style={{
              float:'left',
              width: '200px', 
            }}
          >
            Close
          </button>
        </Box>
      </Modal>
      <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Column on mobile, row on larger screens
    alignItems: 'center', // Center align items
    justifyContent: { sm: 'flex-end' }, // Right align on larger screens if needed
    marginTop: '14px',
    gap: '10px', // Space between buttons
  }}
>
  {/* <button className="next-btn" onClick={handlePreviewPDF}>
    Preview Data
  </button> */}
  <button className="next-btn" onClick={handleSubmitClick}>
    Submit
  </button>
</Box>

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
      <ToastContainer />
      <FooterHomeTwo />
    </>
  );
};

export default SellingProperty;
