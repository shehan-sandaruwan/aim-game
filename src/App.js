import React from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import HeroSection from './componets/HeroSection';
import NewSalesFunnel from './componets/NewSalesFunnel';
import NewFunnelActivities from './componets/NewFunnelActivities';
import MultiPlatform from './componets/MultiPlatform';
import Footer from './componets/Footer';
import ChoosePlan from './componets/ChoosePlan';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <HeroSection />
        <NewSalesFunnel />
      </div>
      <NewFunnelActivities />
      <div className="container">
        <MultiPlatform />
        <ChoosePlan />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
