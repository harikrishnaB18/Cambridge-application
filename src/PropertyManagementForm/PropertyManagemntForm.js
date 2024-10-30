import React from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeaderHomeTwo from '../components/HeaderHomeTwo';
import FooterHomeTwo from '../components/FooterHomeTwo';


const PurchasingPropertyForm = () => {
  return (
    <>
    <HeaderHomeTwo/>
    <div className='mt-3'>
    <Box sx={{ padding: '50px', maxWidth: '800px', margin: 'auto', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Purchasing Property
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Complete these simple steps to get your quote for purchasing the property.
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderBottom: '1px solid #ddd', // Adding border below the title
            '& .MuiTypography-root': {
              fontSize: '1.25rem', // Increase the font size
            },
          }}
        >
          <Typography variant="h6">Purchasing Property</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Enter Price"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Leasehold</InputLabel>
                <Select label="Leasehold">
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Mortgage</InputLabel>
                <Select label="Mortgage">
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Shared Ownership</InputLabel>
                <Select label="Shared Ownership">
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Purchase Funds Being Gifted</InputLabel>
                <Select label="Purchase Funds Being Gifted">
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>New Build</InputLabel>
                <Select label="New Build">
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
            <button className='next-btn'>
              Next
            </button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderBottom: '1px solid #ddd', // Adding border below the title
            '& .MuiTypography-root': {
              fontSize: '1.25rem', // Increase the font size
            },
          }}
        >
          <Typography variant="h6">Purchasing Property</Typography>
        </AccordionSummary>
      </Accordion>
    </Box>
    </div>
    <FooterHomeTwo/>
    </>
  );
};

export default PurchasingPropertyForm;
