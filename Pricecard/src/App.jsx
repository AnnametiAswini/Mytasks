import React from 'react';
import PriceCard from './Components/PriceCard';
import './App.css'

const App = () => {
  // Sample card data
  const card1 = {
  
    planName: 'Free',
    price: 0,
    features: [
      { name: 'Single User', supported: true },
      { name: '50GB Storage', supported: true },
      { name: 'Unlimited Public Projects', supported: true },
      { name: 'Community Access', supported: true },
      { name: 'Limited Private Projects', supported: false },
      { name: 'DedicatedPhone Support', supported: false },
      { name: 'Free Subdomain', supported: true },
      { name: 'Monthly Status Report', supported: false },
    ],
  };
  const card2 = {
    planName: 'Plus',
    price: 29,
    features: [
      { name: ' 5Users', supported: true },
      { name: '50GB Storage', supported: true },
      { name: 'Unlimited Public Projects', supported: true },
      { name: 'Community Access', supported: true },
      { name: 'Limited Private Projects', supported: true },
      { name: 'DedicatedPhone Support', supported: true },
      { name: 'Free Subdomain', supported: true },
      { name: 'Monthly Status Report', supported: false },
    ],
  };
  const card3 = {
    planName: 'PRO',
    price: 49,
    features: [
      { name: 'Unlimited Users', supported: true },
      { name: '50GB Storage', supported: true },
      { name: 'Unlimited Public Projects', supported: true },
      { name: 'Community Access', supported: true },
      { name: 'Unlimited Private Projects', supported: true },
      { name: 'Dedicated Phone Support', supported: true },
      { name: 'Free Subdomain', supported: false },
      { name: 'Monthly Status Report', supported: false },
    ],
  };

  
 

  return (
    <div className="container">
    
      <h1>Price Cards</h1>
      <div className="price-cards">
        <PriceCard {...card1} />
        <PriceCard {...card2} />
        <PriceCard {...card3} />
      
      </div>
    </div>
  );
};


export default App;