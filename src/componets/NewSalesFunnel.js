import React from 'react';
import { grid_2 } from 'react-icons-kit/ikons/grid_2';
import { polaroids } from 'react-icons-kit/ikons/polaroids';
import { folder_remove } from 'react-icons-kit/ikons/folder_remove';

const prosArray = [
  {
    key: 1,
    src: grid_2,
    title: 'Easy access',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
  },
  {
    key: 2,
    src: folder_remove,
    title: 'Budget that work',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
  },
  {
    key: 3,
    src: polaroids,
    title: 'Total control',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
  },
];

const NewSalesFunnel = () => {
  return (
    <section className="new-sales-container">
      <div className="new-sales-title">
        <h1>New Sales Funnel App</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </p>
      </div>
      <div className="pros-section">
        {prosArray.map(item => {
          return (
            <div className="card-cotainer" key={item.key}>
              <img src={item.src} alt="icons" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h4>Learn more</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewSalesFunnel;
