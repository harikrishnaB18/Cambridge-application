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
import CambridgeConveyancing from './Cambridge Conveyancing/CambridgeConveyancing';
import Forms from './components/Forms';
import ElyConveyancing from './Ely Conveyancing/ElyConveyancing';
import TermsConditions from './T&C and Privacy/TermsConditions';
import PrivacyPolicy from './T&C and Privacy/PrivacyPolicy';
import PeterboroughConveyancing from './Peterborough Conveyancing/PeterboroughConveyancing';
import ChelmsfordConveyancing from './Chelmsford Conveyancing/ChelmsfordConveyancing';


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
          <Route path="/conveyancing-in-cambridge" element={<CambridgeConveyancing />} />
          <Route path="/contact-us" element={<Forms />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/conveyancing-in-ely" element={<ElyConveyancing />} />
          <Route path="/peterborough-conveyancing" element={<PeterboroughConveyancing />} />
          <Route path="/chelmsford-conveyancing" element={<ChelmsfordConveyancing />} />
        </Routes>
      </Router>
      </>
  
  );
};

export default App;
