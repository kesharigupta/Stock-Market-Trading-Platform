import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
    return (  
        <footer  style={{backgroundColor: "rgb(250,250,250)"}}>
        <div className="container border-top mt-5">
            <div className="row mt-5">
                <div className="col">
                <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "35%" }} />
        </Link>
                    <p>&copy; 2010 - 2025, Zerodha Broking Ltd.

All rights reserved.</p>
                </div>
                <div className="col">
                    <h6>Company</h6>
                    
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>About</a> <br />
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>Products</a><br />
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>Pricing</a> <br />
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>Referral programme</a> <br />
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>Careers</a> <br />
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>Zerodha.tech</a> <br />
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>Open source</a> <br />
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>Press & media</a> <br />
                    <a href='' className='text-muted' style={{textDecoration:"none"}}>Zerodha Cares (CSR)</a>
                </div>
                
                <div className="col">
                <h6>Support</h6>
                <a href='' className='text-muted' style={{textDecoration:"none"}} >Contact us</a> <br />
                <a href='' className='text-muted' style={{textDecoration:"none"}} >Support portal</a><br />
                <a href='' className='text-muted' style={{textDecoration:"none"}} >Z-Connect blog</a><br />
                <a href='' className='text-muted' style={{textDecoration:"none"}} >List of charges</a><br />
                <a href='' className='text-muted' style={{textDecoration:"none"}} >Downloads & resources</a><br />
                <a href='' className='text-muted' style={{textDecoration:"none"}} >Videos</a><br />
                <a href='' className='text-muted' style={{textDecoration:"none"}} >Market overview</a><br />
                <a href='' className='text-muted' style={{textDecoration:"none"}} >How to file a complaint?</a><br />
                <a href='' className='text-muted' style={{textDecoration:"none"}} >Status of your complaints</a>   
                </div>
                <div className="col">
                <h6>Account</h6>
                <a href='' className='text-muted' style={{textDecoration:"none"}}>Open an account</a> <br />
                <a href='' className='text-muted' style={{textDecoration:"none"}}>Fund transfer</a>
                </div>
            </div>
            <div className='mt-5 text-small text-muted' style={{fontSize:"14px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;