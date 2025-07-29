// import Navlinkn from '../component/navlinkn'
import './App.css'
import Jobsearch from '/Pages/jobSearch.jsx';
import About from '/Pages/about.jsx'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navlink from '/component/navlink.jsx'
import Home from '/Pages/home.jsx'
import PrivacyPolicy from '/Pages/privacy.jsx';
import TermsAndConditions from '/Pages/terms.jsx';

// import PhoneBn from '/component/phone_bn.jsx'
function App() {
  return (
    <BrowserRouter>
      <Navlink/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobSearch" element={<Jobsearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy.jsx" element={<PrivacyPolicy />} />
        <Route path="/terms.jsx" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
