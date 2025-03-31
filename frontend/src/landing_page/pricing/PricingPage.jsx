import React from 'react'
import Brokerage from './Brokerage.jsx';
import Hero from './Hero.jsx';
import OpenAccount from './../OpenAccount';
function PricingPage() {
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </>
     );
}

export default PricingPage;