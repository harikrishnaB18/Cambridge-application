import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'
import PropertyManagemntForm from './PropertyManagementForm/PropertyManagemntForm';
import SellingProperty from './SellingProperty/SellingProperty'
import HomeTwo from './components/index'
import ContactUsForm from './PropertyManagementForm/ContactUs';
import ConveyancingProcess from './Conveyancing Process/ConveyancingProcess';


const App = () => {
  return (
    
    <>
      <Router>
        <Routes> 
          <Route path='/' element={<HomeTwo />} />
          <Route path='/purchasing-property' element={<PropertyManagemntForm/>} />
          <Route path='/selling-property' element={<SellingProperty/>} />
          <Route path="/contact-us" element={<ContactUsForm />} />
          <Route path="/conveyancing-process" element={<ConveyancingProcess />} />
        </Routes>
      </Router>
      </>
  
  );
};

export default App;
