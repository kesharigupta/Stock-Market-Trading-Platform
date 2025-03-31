import React from 'react';
import Hero from './Hero.jsx';
import Awards from './Awards.jsx';
import Stats from './Stats.jsx';
import Pricing from './Pricing.jsx';
import Eduction from "./Eduction.jsx"; 
import OpenAccount from '../OpenAccount.jsx';
// import Navbar from '../Navbar.jsx';
// import Footer from '../Footer.jsx';

function HomePage() {
    return ( 
        <>       
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Eduction/> 
            <OpenAccount/>
           
        </>
     );
}

export default HomePage;
