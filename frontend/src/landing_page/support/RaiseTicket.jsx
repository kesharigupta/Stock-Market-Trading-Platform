import React from 'react'
function RaiseTicket() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className='text-muted fs-3 '>To create a ticket, select a relevant topic</h1>
          
            <div className="col-4 p-5 mb-2">
                <h4 className=''> <i class="fa-solid fa-plus-circle"></i> Account Opening</h4>
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Resident individual</a> <br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Minor</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Non Resident Indian (NRI)</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Company, Partnership, HUF and LLP</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Glossary</a>    
            </div>

            <div className="col-4 p-5 mb-2">
                <h4 className=''> <i class="fa-solid fa-user-plus"></i> Your Zerodha Account</h4>
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Your Profile</a> <br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Nomination</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Transfer and conversion of securities</a><br />
            </div>

            <div className="col-4 p-5 mb-2">
                <h4 className=''>  <i class="fa-regular fa-chart-bar"></i> Kite</h4>
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> IPO</a> <br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Charts and orders</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Alerts and Nudges</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> General</a>    
            </div>

            <div className="col-4 p-5 mb-2">
                <h4 className=''> <i class="fa-thin fa-money-check"></i> Funds</h4>
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add money</a> <br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Withdraw money</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Add bank accounts</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> eMandates</a><br />
            </div>

            <div className="col-4 p-5 mb-2">
                <h4 className=''> <i class="fa-solid fa-terminal"></i> Console</h4>
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Portfolio</a> <br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Funds statement</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Reports</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Profile</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}> Segments</a>    
            </div>

            <div className="col-4 p-5 mb-2">
                <h4 className=''> <i class="fa-solid fa-coins"></i>  Coin</h4>
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Understanding mutual funds and Coin</a> <br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Coin app</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Coin web</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transactions and reports</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme (NPS)</a>    
            </div>

            </div>
        </div>
     );
}

export default RaiseTicket;