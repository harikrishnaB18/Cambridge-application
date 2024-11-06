import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'
import PropertyManagemntForm from './PropertyManagementForm/PropertyManagemntForm';
import HomeTwo from './components/index'
import ContactUsForm from './PropertyManagementForm/ContactUs';


const App = () => {
  return (
    
    <>
      <Router>
        <Routes> 
          <Route path='/' element={<HomeTwo />} />
          <Route path='/purchasing-property' element={<PropertyManagemntForm/>} />
          <Route path="/contact-us" element={<ContactUsForm />} />
        </Routes>
      </Router>
      </>
  
  );
};

export default App;
