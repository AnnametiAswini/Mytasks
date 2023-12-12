import React from 'react';
import './PriceCard.css'

const PriceCard = ({ planName, price, features }) => {
    return (
        <div className="price-card">
            <h5>{planName}</h5>
            <h2> ${price}/month</h2>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>
                        {feature.supported ? '✔️' : '❌'} {feature.name}
                    </li>
                ))}
            </ul>
            <button className='Btn'>
                button
            </button>
        </div>
    );
};

export default PriceCard;
