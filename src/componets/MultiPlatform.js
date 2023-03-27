import React from 'react';
import Mobile1 from '../assets/iphone-x-black.png';
import Mobile2 from '../assets/iphone-x.png';
import { grid_2 } from 'react-icons-kit/ikons/grid_2';
import { folder_remove } from 'react-icons-kit/ikons/folder_remove';

const prosArray = [
  {
    key: 1,
    src: grid_2,
    title: 'Easy access',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
  },
  {
    key: 2,
    src: folder_remove,
    title: 'Budget that work',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in ',
  },
];

const MultiPlatform = () => {
  return (
    <React.Fragment>
      <section className="multilatform-container">
        <div className="left-platform">
          <small>MULTI PLATFORM</small>
          <h1>Landy builds for any platform. iOS, Android</h1>
          <p>Whichever platform you have. We prepared it, so don’t be worry.</p>
          <div className="platform-pros">
            {prosArray.map(item => {
              return (
                <div className="card-cotainer" key={item.key}>
                  <img src={item.src} alt="icons" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-platform">
          <figure className="mobile-images">
            <img src={Mobile2} alt="Mobile" />
            <img src={Mobile1} alt="Mobile" />
          </figure>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MultiPlatform;
