import React from 'react';

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
    return ( 
       <div className="container p-5 mt-5">
        <div className="row">
            <div className="col-5 p-5 mt-5">
                <h1 className='text-muted mt-5'>{productName}</h1>
                <p className='mt-3 fs-5' >{productDescription}</p>
                {learnMore && (
                    <a href={learnMore} style={{  textDecoration: "none" }}>
                        Learn More <i className="fa-solid fa-arrow-right"></i>
                    </a>
                )}
            </div>
            <div className="col-1"></div>
            <div className="col-6">
                <img src={imageUrl} alt={productName} className='mt-2' />
            </div>
            
        </div>
       </div>
    );
}

export default RightSection;
