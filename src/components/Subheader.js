// 3. import Link frm react router dom then use it
// to="/"-->means link kha pr krna hai,(isme hame route ko dalna h jise hme btn ke click pr open krna hai

import React from 'react'
import './Subheader.css'
import {Link} from 'react-router-dom';

export default function Subheader() {
    
    return (
        //  <!-- SUBHEADER START --> 
        < div className="subheader" >

            {/* 3. use link------------------------------------ */}
            <Link to="/" style={{textDecoration:"none", color:"greenyellow"}}>
                <div>All </div>
            </Link>
            <Link to="/shirt" style={{textDecoration:"none", color:"greenyellow"}}>
                <div>Shirt </div>
            </Link>
            <Link to="/pant" style={{textDecoration:"none", color:"greenyellow"}}>
                <div>Pant </div>
            </Link>
            
            <div>Best Sellers</div>
            <div>Mobiles</div>
            <div>Customer Service</div>
            <div>Fashion</div>
            <div>Electronics</div>
            <div>Rents</div>
            <div>Service</div>
            <div>Prime</div>
        </div >

        //  <!-- SUBHEADER END -->
    )
}
