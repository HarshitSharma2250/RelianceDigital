import axios from 'axios';
import { useState, useEffect } from 'react';
import { AllRoutes } from './Routes/AllRoutes';

import './App.css';

import { useLocation } from 'react-router-dom';
import { NavBar } from './sections/NavBar';
import { NavBarAllPages } from './sections/NavBarForAllPages/NavBarAllPages';
import { Footer } from './sections/Footer/Footer';

function App() {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    setShowNavBar(location.pathname === '/');
  }, [location.pathname]);
  const checkWindowWidth = () => {
    return window.innerWidth >1050;
  };
  return (
    <>
  {checkWindowWidth() ? (showNavBar ? <NavBar /> : <NavBarAllPages />) : <NavBar />}
      <AllRoutes />
      <Footer/>
    </>
  );
}

export default App;
