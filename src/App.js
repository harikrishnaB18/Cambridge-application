import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'
import PropertyManagemntForm from './PropertyManagementForm/PropertyManagemntForm';
import SellingProperty from './SellingProperty/SellingProperty'
import HomeTwo from './components/index'
// import ContactUsForm from './PropertyManagementForm/ContactUs';
import ConveyancingProcess from './Conveyancing Process/ConveyancingProcess';
import ConveyancingSolicitor from './Conveyancing Solicitor/ConveyancingSolicitor';
import StagesConveyancing from './Stages of Conveyancing/StagesConveyancing';
import Remortgaging from './Remortgaging Cambridge/Remortgaging';
import ConveyancingTake from './Conveyancing Take/ConveyancingTake';
import FirstTimeBuyers from './First Time Buyers/FirstTimeBuyers';
const App = () => {
  return (
    
    <>
      <Router>
        <Routes> 
          <Route path='/' element={<HomeTwo />} />
          <Route path='/purchasing-property' element={<PropertyManagemntForm/>} />
          <Route path='/selling-property' element={<SellingProperty/>} />
          {/* <Route path="/contact-us" element={<ContactUsForm />} /> */}
          <Route path="/conveyancing-process" element={<ConveyancingProcess />} />
          <Route path="/what-a-conveyancing-solicitor-does" element={<ConveyancingSolicitor />} />
          <Route path="/3-stages-of-conveyancing" element={<StagesConveyancing />} />
          <Route path="/guide-to-remortgaging-in-cambridge" element={<Remortgaging />} />
          <Route path="/how-long-does-conveyancing-take" element={<ConveyancingTake />} />
          <Route path="/conveyancing-for-first-time-buyers" element={<FirstTimeBuyers />} />
        </Routes>
      </Router>
      </>
  
  );
};

export default App;
