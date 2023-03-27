import React from 'react';
import HeroMobile from '../assets/herophne.png';

const HeroSection = () => {
  return (
    <header className="hero-section">
      <section className="left-section">
        <h1>Manage All Of Your Game In One Place</h1>
        <p>
          Aim Game lets you take control of your team, balance your sales and
          pre-sales, and understand where your project progress goes.
        </p>
        <section className="inner-actions">
          <button></button>
          <button></button>
        </section>
      </section>
      <section className="right-section">
        <figure>
          <img src={HeroMobile} alt="phone image" />
        </figure>
      </section>
    </header>
  );
};

export default HeroSection;
