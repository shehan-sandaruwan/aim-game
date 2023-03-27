import React from 'react';

const plans = [
  {
    index: 1,
    name: 'Started plan',
    price: 'Free',
    duration: '7 Days',
    description: 'The easiest way to get started with for everyone.',
  },
  {
    index: 2,
    name: 'Started plan',
    price: '$19.00',
    duration: 'per month',
    description:
      'Advanced collaborative option for partners, families, freelancer.',
  },
  {
    index: 3,
    name: 'Started plan',
    price: '$49.00',
    duration: 'per month',
    description:
      'Collaborative financial tracking and planning for small businesses and enterprises.',
  },
];

const ChoosePlan = () => {
  return (
    <React.Fragment>
      <section className="choose-plan-container">
        <div className="header-details">
          <small>OUR PRICING</small>
          <h1>Choose the plan that’s right for your business</h1>
          <p>
            Get started for free, try out our platform for an unlimited period
            of time. Explore our monthly and yearly plans and pick the one that
            best suits your needs.
          </p>
          <div className="actions">
            <h6>Bill Monthly</h6>
            <div className="toggle">
              <span></span>
            </div>
            <h6>
              Bill Anually <span>Save 15%</span>
            </h6>
          </div>
        </div>
        <div className="plan-container">
          {plans.map(item => {
            return (
              <div className="plan-card-container" key={item.index}>
                <h3>{item.name}</h3>
                <h1>{item.price}</h1>
                <small>{item.duration}</small>
                <p>{item.description}</p>
                <button>Get Started</button>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ChoosePlan;
