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
          <Route path="/conveyancing-solicitor" element={<ConveyancingSolicitor />} />
          <Route path="/stages-conveyancing" element={<StagesConveyancing />} />
          <Route path="/remortgaging-cambridge" element={<Remortgaging />} />
        </Routes>
      </Router>
      </>
  
  );
};

export default App;
