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
import { jsPDF } from "jspdf";
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import FooterHomeTwo from '../components/FooterHomeTwo';
import ContactCard from './ContactCard'
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../components/useToggle.js';


const PurchasingPropertyForm = () => {
  const [drawer, drawerAction] = useToggle(false);
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
    firstTimeBuyer: '',
    
    // Step 2
    buyersIndividuals: '',
    ukResidents: '',
    residentialProperty: '',
    newLeasehold: '',
    ownedBefore: '',
    moreThanOneHouse: '',
    mainResidence: '',

   // Step 3
   fullName: '',
   emailAddress: '',
   phoneNumber: '',
   
  });
  // const [formData, setFormData] = useState({
  //   // Existing fields from Steps 1 and 2...
  
  // });
  
  const [step1Total, setStep1Total] = useState(0);
  const [step2Total, setStep2Total] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted1, setFormSubmitted1] = useState(false);
  const [formSubmitted2, setFormSubmitted2] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [error, setError] = useState(false);
  const [isStep3Complete, setIsStep3Complete] = useState(false);

    console.log('Step1 Total:', step1Total);

    console.log('Step2 Total:', step2Total);
    const handleSubmitStep3 = () => {
      const errorField = validateStep3Fields();
    
      if (!errorField) {
        setIsStep3Complete(true);
        toast.success('Step 3 is complete! Form submitted successfully.', {
          position: 'top-right',
          autoClose: 3000,
        });
        // Perform any final submission actions here
        setShowThankYouMessage(true);
        setActiveStep(4);
      } else {
        // Display a specific error message for the field
        let errorMessage = '';
        switch (errorField) {
          case 'fullName':
            errorMessage = 'Full Name is required!';
            break;
          case 'emailAddress':
            errorMessage = 'Please enter a valid email address!';
            break;
          case 'phoneNumber':
            errorMessage = 'Please enter a valid phone number!';
            break;
          default:
            errorMessage = 'Please fix the errors before proceeding!';
        }
    
        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    };
    

  // Update state when inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      const numericValue = parseFloat(value);

      // Check if the value is empty or a valid number greater than 0
      if (value === "") {
        setError(false);
      } else if (numericValue <= 0 || isNaN(numericValue)) {
        setError(true); 
        toast.error("Price must be greater than 0"); 
      } else {
        setError(false); 
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
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };
  
  // ContactCard Container Style (Centering the ContactCard)
  const contactCardContainerStyle = {
    position: "fixed",
            top: "58%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            background: "#fff",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            maxHeight: "80vh",
            overflowY: "auto",
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
      'firstTimeBuyer',
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
      toast.success('Step2 is complete! Move to Step3', {
        position: 'top-right',
        autoClose: 3000,
      });
      // Logic to move to Step 3
      setActiveStep(3);
      // setShowThankYouMessage(true);

    }
  };
  
  const validateStep3Fields = () => {
    const requiredFields = ['fullName', 'emailAddress', 'phoneNumber'];
  
    for (const field of requiredFields) {
      if (!formData[field]) {
        return field; // Return the field name with an error
      }
    }
  
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      return 'emailAddress'; // Return the field name with an error
    }
  
    // Phone number format validation
    const phoneRegex = /^([+](44|1|91)[\s]?)?[0-9\s]{10,11}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      return 'phoneNumber'; // Return the field name with an error
    }
  
    return null; // Return null if no errors
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
  const handlePrevious2 = () => {
    // Logic to move back to Step 1
    toast.success('Moved to Step 2', {
      position: 'top-right',
      autoClose: 3000,
    });
    // Update active step state
    setActiveStep(2);
  }; 

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("PropertyManagemntForm", 14, 20);
  
    // Step 1: Calculate fees
    const price = parseFloat(formData.price);
    let priceFee = 0;
    let leaseholdFee = formData.leasehold === "Yes" ? 300 : 0;
    let mortgageFee = formData.mortgage === "Yes" ? 360 : 0;
    let sharedOwnershipFee = formData.sharedOwnership === "Yes" ? 150 : 0;
    let giftedFundsFee = formData.giftedFunds === "Yes" ? 150 : 0;
    let newBuildFee = formData.newBuild === "Yes" ? 420 : 0;
    let staircasingFee = formData.staircasing === "Yes" ? 420 : 0;
    let unregisteredFee = formData.unregistered === "Yes" ? 420 : 0;
  
    if (price < 250001) priceFee = 1200;
    else if (price < 500001) priceFee = 1500;
    else if (price < 750001) priceFee = 1800;
    else if (price < 900001) priceFee = 2100;
    else if (price < 1000001) priceFee = 2400;
    else if (price < 1500001) priceFee = 2500;
    else if (price < 2000001) priceFee = 3000;
    else if (price < 2500001) priceFee = 3600;
  
    const step1Total =
      priceFee +
      leaseholdFee +
      mortgageFee +
      sharedOwnershipFee +
      giftedFundsFee +
      newBuildFee +
      staircasingFee +
      unregisteredFee;
  
    // Step 2: Stamp Duty Logic (unchanged)
    const calculateStampDuty = (price, firstTimeBuyer) => {
      if (firstTimeBuyer === "Yes") {
        return 0; // No stamp duty for first-time buyers
      }
  
      let stampDuty = 0;
  
      // Normal rates for non-first-time buyers
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
  
    const stampDuty = calculateStampDuty(price, formData.firstTimeBuyer);
  
    // Updated Solicitors Fees Logic
    const calculateSolicitorsFees = (price) => {
      let fee = 0;
      let vat = 0;
  
      if (price <= 250000) {
        fee = 1000;
        vat = 200;
      } else if (price === 250001) {
        fee = 1250;
        vat = 250;
      } else if (price === 250002) {
        fee = 1500;
        vat = 300;
      } else if (price === 250003) {
        fee = 1750;
        vat = 350;
      } else if (price === 250004) {
        fee = 2000;
        vat = 400;
      } else if (price === 250005) {
        fee = 2500;
        vat = 500;
      } else if (price >= 250006) {
        fee = 3000;
        vat = 600;
      }
  
      return { fee, vat, total: fee + vat };
    };
  
    const solicitorsFees = calculateSolicitorsFees(price);
  
    // Calculate Step 2 Total
    const ukResidentsFee = formData.ukResidents === "No" ? price * 0.02 : 0;
    const moreThanOneHouseFee = formData.moreThanOneHouse === "Yes" ? price * 0.03 : 0;
  
    let mainResidenceFee = 0;
    if (formData.mainResidence === "Yes" && formData.ownedBefore === "Yes") {
      if (price > 250000) {
        if (price <= 925000) {
          mainResidenceFee = (price - 250000) * 0.05;
        } else if (price <= 1500000) {
          mainResidenceFee =
            (925000 - 250000) * 0.05 + (price - 925000) * 0.1;
        } else {
          mainResidenceFee =
            (925000 - 250000) * 0.05 +
            (1500000 - 925000) * 0.1 +
            (price - 1500000) * 0.12;
        }
      }
    } else if (formData.ownedBefore === "No") {
      if (price > 450000) {
        if (price <= 625000) {
          mainResidenceFee = (price - 450000) * 0.05;
        } else {
          mainResidenceFee = (625000 - 450000) * 0.05 + (price - 625000);
        }
      }
    }
  
    const step2Total =
      ukResidentsFee +
      moreThanOneHouseFee +
      mainResidenceFee +
      stampDuty +
      solicitorsFees.total;
  
    // Step 1 Table
    const step1Entries = [
      ["Price", formData.price, `£ ${priceFee}`],
      ["Leasehold", formData.leasehold, `£ ${leaseholdFee}`],
      ["Mortgage", formData.mortgage, `£ ${mortgageFee}`],
      ["Shared Ownership", formData.sharedOwnership, `£ ${sharedOwnershipFee}`],
      ["Gifted Funds", formData.giftedFunds, `£ ${giftedFundsFee}`],
      ["New Build", formData.newBuild, `£ ${newBuildFee}`],
      ["Staircasing", formData.staircasing, `£ ${staircasingFee}`],
      ["Unregistered", formData.unregistered, `£ ${unregisteredFee}`],
      ["First Time Buyer", formData.firstTimeBuyer, `  -`], 
      ["Step 1 Total", "", `£ ${step1Total}`],
    ];
  
    // Step 2 Table
    const step2Entries = [
      ["Buyers (Individuals)", formData.buyersIndividuals, "-"],
      ["UK Residents", formData.ukResidents, `£ ${ukResidentsFee.toFixed(2)}`],
      ["Residential Property", formData.residentialProperty, "-"],
      ["New Leasehold", formData.newLeasehold, "-"],
      ["Owned Before", formData.ownedBefore, "-"],
      ["More Than One House", formData.moreThanOneHouse, `£ ${moreThanOneHouseFee.toFixed(2)}`],
      ["Main Residence", formData.mainResidence, `£ ${mainResidenceFee.toFixed(2)}`],
      ["Stamp Duty", "-", `£ ${stampDuty.toFixed(2)}`],
      ["Solicitors' Fees", "-", `£ ${solicitorsFees.total.toFixed(2)}`],
      ["Step 2 Total", "-", `£ ${step2Total.toFixed(2)}`],
    ];
  
    // Step 3 Table (with new field)
    const step3Entries = [
      ["Full Name", formData.fullName, ""],
      ["Email Address", formData.emailAddress, ""],
      ["Phone Number", formData.phoneNumber, ""],
      // Added field here
    ];
  
    // Add Step 1 to PDF
    doc.setFontSize(18);
    doc.text("PropertyManagemntForm", 14, 20);
    doc.setFontSize(13);
    doc.text("Step 1", 14, 28);
    doc.autoTable({
      startY: 30,
      head: [["Field", "Value", "Amount"]],
      body: step1Entries,
      headStyles: { fillColor: [35, 57, 85] },
    });
  
    // Add Step 2 to PDF
    const step2StartY = doc.previousAutoTable.finalY + 10;
    doc.setFontSize(13);
    doc.text("Step 2", 14, step2StartY);
    doc.autoTable({
      startY: step2StartY + 10,
      head: [["Field", "Value", "Amount"]],
      body: step2Entries,
      headStyles: { fillColor: [35, 57, 85] },
    });
  
    // Add Step 3 to PDF
    const step3StartY = doc.previousAutoTable.finalY + 10;
    doc.setFontSize(13);
    doc.text("Step 3", 14, step3StartY);
    doc.autoTable({
      startY: step3StartY + 10,
      head: [["Field", "Value"]],
      body: step3Entries,
      headStyles: { fillColor: [35, 57, 85] },
    });
  
    // Save the PDF
    window.open(doc.output("bloburl"), "_blank");
  };
  
  
  const price = parseFloat(formData.price);
  let priceFee = 0;
  let leaseholdFee = formData.leasehold === "Yes" ? 300 : 0;
  let mortgageFee = formData.mortgage === "Yes" ? 360 : 0;
  let sharedOwnershipFee = formData.sharedOwnership === "Yes" ? 150 : 0;
  let giftedFundsFee = formData.giftedFunds === "Yes" ? 150 : 0;
  let newBuildFee = formData.newBuild === "Yes" ? 420 : 0;
  let staircasingFee = formData.staircasing === "Yes" ? 420 : 0;
  let unregisteredFee = formData.unregistered === "Yes" ? 420 : 0;

  if (price < 250001) priceFee = 1200;
  else if (price < 500001) priceFee = 1500;
  else if (price < 750001) priceFee = 1800;
  else if (price < 900001) priceFee = 2100;
  else if (price < 1000001) priceFee = 2400;
  else if (price < 1500001) priceFee = 2500;
  else if (price < 2000001) priceFee = 3000;
  else if (price < 2500001) priceFee = 3600;

  const step1Totalinfo =
    priceFee +
    leaseholdFee +
    mortgageFee +
    sharedOwnershipFee +
    giftedFundsFee +
    newBuildFee +
    staircasingFee +
    unregisteredFee;

    const calculateStampDuty = (price, firstTimeBuyer) => {
      if (firstTimeBuyer === "Yes") {
        return 0; // No stamp duty for first-time buyers
      }
  
      let stampDuty = 0;
  
      // Normal rates for non-first-time buyers
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

  // Updated Solicitors Fees Logic
  const calculateSolicitorsFees = (price) => {
    let fee = 0;
    let vat = 0;

    if (price <= 250000) {
      fee = 1000;
      vat = 200;
    } else if (price <= 500000) {
      fee = 1250;
      vat = 250;
    } else if (price <= 750000) {
      fee = 1500;
      vat = 300;
    } else if (price <= 900000) {
      fee = 1750;
      vat = 350;
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

  // Calculate Step 2 Total
  const ukResidentsFee = formData.ukResidents === "No" ? price * 0.02 : 0;
  const moreThanOneHouseFee = formData.moreThanOneHouse === "Yes" ? price * 0.03 : 0;

  let mainResidenceFee = 0;
  if (formData.mainResidence === "Yes" && formData.ownedBefore === "Yes") {
    if (price > 250000) {
      if (price <= 925000) {
        mainResidenceFee = (price - 250000) * 0.05;
      } else if (price <= 1500000) {
        mainResidenceFee =
          (925000 - 250000) * 0.05 + (price - 925000) * 0.1;
      } else {
        mainResidenceFee =
          (925000 - 250000) * 0.05 +
          (1500000 - 925000) * 0.1 +
          (price - 1500000) * 0.12;
      }
    }
  } else if (formData.ownedBefore === "No") {
    if (price > 450000) {
      if (price <= 625000) {
        mainResidenceFee = (price - 450000) * 0.05;
      } else {
        mainResidenceFee = (625000 - 450000) * 0.05 + (price - 625000);
      }
    }
  }

  const step2Totalinfo =
    ukResidentsFee +
    moreThanOneHouseFee +
    mainResidenceFee +
    calculateStampDuty(price, formData.firstTimeBuyer) +
    solicitorsFees.total;

    const subtotal=step1Totalinfo+step2Totalinfo;
    const overalltotal=subtotal+stampDuty+solicitorsFees.total;
    // window.open(doc.output("bloburl"), "_blank");  };
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeTwo action={drawerAction.toggle} />
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
        <TextField label="Enter Property Price" name="price"
          variant="outlined" fullWidth value={formData.price}  onChange={handleInputChange}
          error={error && formData.price === ""}  helperText={error && formData.price === "" ? "Price is required" : ""} />
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
        <Grid item xs={12} md={12}>
  <FormControl variant="outlined" fullWidth>
    <InputLabel>Are You a First Time Buyer</InputLabel>
    <Select
      label="Are You a First Time Buyer"
      name="firstTimeBuyer"
      value={formData.firstTimeBuyer}
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
  <Tooltip
    title="Funds being gifted by a third party or family to assist with the purchase."
    arrow disableInteractive enterTouchDelay={0} leaveTouchDelay={3000}  >
    <div style={{ display: "flex", alignItems: "center",cursor: "pointer", }}>
      <InfoOutlinedIcon sx={{color: "#233955", marginLeft: "2px",}}
      />
    </div>
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
          <Tooltip title="Process of purchasing additional shares in a shared ownership property." arrow disableInteractive enterTouchDelay={0} leaveTouchDelay={3000}>
          <div style={{ display: "flex", alignItems: "center",cursor: "pointer", }}>
    <InfoOutlinedIcon
      sx={{
        color: "#233955",
        marginLeft: "2px",
        cursor: "pointer",
      }}
    />
    </div>
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
          <Tooltip title="A property that has not been registered with the Land Registry." arrow disableInteractive enterTouchDelay={0} leaveTouchDelay={3000}>
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
          <button className="next-btn" onClick={handleNextStep2}>Next</button>
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
    <Accordion expanded={activeStep === 3}>
  <AccordionSummary
    sx={{
      borderBottom: '1px solid #ddd',
      '& .MuiTypography-root': {
        fontSize: '1.25rem',
      },
    }}
  >
    <Typography variant="h6">Step 3</Typography>
    {isStep3Complete && (
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
  {activeStep === 3 && (
    
    <AccordionDetails>
      <Grid container spacing={2}>
        {/* Full Name Field */}
        <Grid item xs={12} md={12}>
          <TextField
            label="Full Name"
            name="fullName"
            variant="outlined"
            fullWidth
            value={formData.fullName}
            onChange={handleInputChange}
            error={error && formData.fullName === ''}
            helperText={error && formData.fullName === '' ? 'Full Name is required' : ''}
          />
        </Grid>

        {/* Email Field */}
        <Grid item xs={12} md={12}>
          <TextField
            label="Email"
            name="emailAddress"
            variant="outlined"
            fullWidth
            value={formData.emailAddress}
            onChange={handleInputChange}
            error={error && formData.emailAddress === ''}
            helperText={error && formData.emailAddress === '' ? 'Email is required' : ''}
          />
        </Grid>

        {/* Phone Field */}
        <Grid item xs={12} md={12}>
          <TextField
            label="Phone"
            name="phoneNumber"
            variant="outlined"
            fullWidth
            value={formData.phoneNumber}
            onChange={handleInputChange}
            error={error && formData.phoneNumber === ''}
            helperText={error && formData.phoneNumber === '' ? 'Phone number is required' : ''}
          />
        </Grid>
      </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px'  ,   flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons vertically on mobile
    gap: '8px',}}>
        <button className="next-btn mr-2" onClick={generatePDF}>Preview Data</button>
          <button className="next-btn" onClick={handlePrevious2}>Previous Step</button>
          <button className="next-btn ml-2" onClick={handleSubmitStep3}>Submit</button>
        </Box>
    </AccordionDetails>
  )}
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
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{formData.firstTimeBuyer === "Yes" ? "0" : stampDuty.toFixed(2)}
      </td>
    </tr>
    <tr style={{ backgroundColor: '#ffffff', textAlign: 'center' }}>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>Solicitors Fees</td>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{solicitorsFees.total}</td>
    </tr>
    <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>SubTotal</td>
      <td style={{ padding: '12px', border: '1px solid #ddd' }}>£{subtotal}</td>
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
  </Box>
  <ToastContainer />
</div>
      <FooterHomeTwo />
    </>
  );
};

export default PurchasingPropertyForm;