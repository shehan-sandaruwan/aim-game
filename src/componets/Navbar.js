import React from 'react';
import Logo from '../assets/Artboard 4@3x.png';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/icomoon/menu';

const Navbar = () => {
  const IconHome = () => <Icon icon={menu} size={32} />;
  return (
    <React.Fragment>
      <nav className="nav-bar displaDesktop">
        <ul>
          <li className="nav-brand">
            <figure>
              <img src={Logo} alt="logo" />
            </figure>
          </li>
          <li className="home">Home</li>
          <li>Feature</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li className="nav-button">
            <button>Get It now</button>
          </li>
        </ul>
      </nav>
      <nav className="nav-bar displayMobile">
        <ul>
          <li className="nav-brand">
            <figure>
              <img src={Logo} alt="logo" />
            </figure>
          </li>
          <li className="nav-button">
            <IconHome />
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
