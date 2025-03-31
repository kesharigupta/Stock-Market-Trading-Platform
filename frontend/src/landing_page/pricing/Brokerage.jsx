import React from 'react'
function Brokerage() {
    return ( 
        <div className="conatiner ">
            <div className="row p-5 mt-5 text-center border-top ">
            <div className="col-8 p-4">
              <a href="" style={{textDecoration:"none"}}> <h3 className='fs-4'>Brokerage Calculator</h3></a> 
              <ul className='text-muted' style={{textAlign:"left" , lineHeight: "1.8" , marginLeft:"20%" , marginTop:"20px"}}>
                <li>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</li>
                <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                <li>
                Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                </li>
                <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                <li>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</li>
              </ul>
            </div>
            <div className="col-4 p-4">
               <a href="" style={{textDecoration:"none", marginTop:"20px"}}><h3 className='fs-4'>List of charges</h3></a> 
            </div>

            </div>
        </div>
     );
}

export default Brokerage;