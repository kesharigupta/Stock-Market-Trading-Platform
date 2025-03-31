import React from 'react'
function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero image" className='mb-5' />
                <h1 className='mt-5'> Invest in everthing </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                
                <button className='p-2 btn btn-primary fs-5 mb-5'  style={{width:"15%" , margin: "0 auto"}}>SignUp Now</button>
            </div>
        </div>
     );
}

export default Hero;