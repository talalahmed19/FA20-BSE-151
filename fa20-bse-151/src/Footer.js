import{Link} from "react-router-dom";
import React from "react";
import "./h1.css"
function Footer() {
    return ( 
      <div className="divis">
<div  class="card text-center">
  <div class="card-body" >
  <div>
    <h5 class="card-title" className="t1">Key Series</h5>
    
    <p className="key">T20 World Cup</p>
    <p className="key">Australia v England</p>
    <p className="key">New Zealand v India</p>
    <p className="key">Srilanka v Afghanistan</p>
    <p className="key">Australia v Westindies</p>
    <p className="key">IRE-W in Pakistan</p>
    <Link to="/QeaTrophy">
    <p className="key">QEA Trophy</p>
    </Link>
    <p className="key">WBBL 2022</p>
    <p className="key">Marsh Cup</p>
    <p className="key">Sheffield Shield</p>
    <p className="key">Women's Championship</p>
    <p className="key">CSA 4-Day Series</p>
    <p className="key">World Test Championship</p>
    <p className="key">World Cup Super League</p>
    </div>
    <div>
    <h5 class="card-title" className="t2">Quick Links</h5>
    <p className="key1">T20 Timeout</p>
    <p className="key1">T20 Time Out</p>
    <p className="key1">Fantasy Pick</p>
    <p className="key1">ICC Rankings</p>
   </div>
   <div>
    <h5 class="card-title" className="t3">ESPNcricinfo Apps</h5>
    <p className="key2">Android App</p>
    <p className="key2">iOS App</p>
    </div>
    <div>
    <h5 class="card-title" className="t4">Follow ESPNcricinfo</h5>
    <p className="key3">Instagram</p>
    <p className="key3">Twitter</p>
    <p className="key3">Facebook</p>
    <p className="key3">Youtube</p>
    </div>
    <div>
    <h5 class="card-title" className="t5"> ESPN Sites</h5>
    <p className="key4">The Cricket Monthly</p>
    <p className="key4">ESPN</p>
    </div>
   
  </div >
  <div class="card-footer text-muted" className="ftext" >
    <h8 className="txt">Terms of use | Privacy Policy | Interest-Based Ads | Feedback</h8>
    <h8 className="txt1">2022 ESPN Sports Media Ltd. All rights reserved</h8>
  </div>
</div>
</div>
     );
}

export default Footer;