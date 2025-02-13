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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Drawer from "../Mobile/Drawer.jsx";
import useToggle from "../components/useToggle.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellingProperty = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isAccordion1Open, setAccordion1Open] = useState(true);
  const [isAccordion2Open, setAccordion2Open] = useState(false);
  const [isAccordionCompleted, setAccordionCompleted] = useState(false);
  const [isAccordion2Completed, setAccordion2Completed] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  
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

  const handleAccordion1Change = (key) => (event) => {
    setAccordion1Data((prevData) => ({
      ...prevData,
      [key]: event.target.value,
    }));
  };

  const handleAccordion2Change = (key) => (event) => {
    setAccordion2Data((prevData) => ({
      ...prevData,
      [key]: event.target.value,
    }));
  };

  const handleSubmitClick = () => {
    const allFieldsFilled = Object.values(accordion1Data).every((value) => Boolean(value));
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
    if (allFieldsFilled) {
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
      <Box sx={{ padding: '50px', maxWidth: '900px', margin: 'auto' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Selling Property
        </Typography>

        <Accordion expanded={isAccordion1Open}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Step 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Enter Property Price"
                  name="price"
                  variant="outlined"
                  fullWidth
                  type='number'
                  value={accordion1Data.price}
                  onChange={handleAccordion1Change('price')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Leasehold</InputLabel>
                  <Select
                    name="leasehold"
                    value={accordion1Data.leasehold}
                    onChange={handleAccordion1Change('leasehold')}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box sx={{ marginTop: '14px' }}>
              <button className="next-btn" onClick={handleSubmitClick}>Next</button>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={isAccordion2Open}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
                />
              </Grid>
            </Grid>
            <Box sx={{ marginTop: '16px' }}>
              <button className="next-btn mr-2" onClick={handlePrevious}>Previous Step</button>
              <button className="next-btn" onClick={handleAccordion2Submit}>Submit</button>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Snackbar
          open={toastOpen}
          autoHideDuration={3000}
          onClose={() => setToastOpen(false)}
        >
          <Alert severity="error">Please fill all required fields!</Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default SellingProperty;
