import{Link} from "react-router-dom";
import React from "react";
import "./menu.css"
function Menu() {
    
    return ( 
      <div>
      <nav className="title">
     <button class="navbar-brand" href="#" className="text">ESPN Cricinfo</button>
<div className="dropdown">
  <button className="dropbtn">Live Score</button>
  <div className="dropdown-content">
    <a href="#">Live Score Home</a>
    <Link to="/Results">
    <a href="#">Result</a>
    </Link>
    <a href="#">Season view</a>
    <a href="#">Desktop Scoreboard</a>
    <a href="#">Schedule</a>
    <a href="#">Month View</a>
    <a href="#">International Calender</a>

  </div>
</div>
   

<div className="dropdown">
  <button className="dropbtn">Series</button>
  <div className="dropdown-content">
    <a href="#">IRE-W in Pakistan</a>
    <a href="#">Australia v England</a>
    <a href="#">Newzealand v India</a>
    <a href="#">England v Westindies(W)</a>
    <a href="#">Marsh Cup</a>
    <a href="#">CSA 4-Day</a>
    <a href="#">Women's Championship</a>
    <a href="#">CWC League 2</a>
    <a href="#">-Archives-</a>
    <a href="#">QEA Trophy</a>
    <a href="#">Australia v Westindies</a>
    <a href="#">Srilanka v Afghanistan</a>
    <a href="#">WBBL 2022</a>
    <a href="#">Sheffield Sheild</a>
    <a href="#">Test Championship</a>
    <a href="#">CWC Super League</a>
    <a href="#">-Future series-</a>

  </div>
</div>

<div className="dropdown">
  <button className="dropbtn">Teams</button>
  <div className="dropdown-content">
    <a href="#">Australia</a>
    <a href="#">Bangladesh</a>
    <a href="#">England</a>
    <a href="#">India</a>
    <a href="#">New Zealand</a>
    <a href="#">Pakistan</a>
    <a href="#">South Africa</a>
    <a href="#">Srilanka</a>
    <a href="#">Westindies</a>
    <a href="#">Zimbabwe</a>
    <a href="#">Afghanistan</a>
    <a href="#">Ireland</a>
    <a href="#">Namibia</a>
    <a href="#">Nepal</a>
    <a href="#">Netherland</a>
    <a href="#">Oman</a>
    <a href="#">PNG</a>
    <a href="#">Scotland</a>
    <a href="#">UAE</a>
    <a href="#">USA</a>

  </div>
</div>

<div className="dropdown">
  <button className="dropbtn">News</button>
  <div className="dropdown-content">
    <a href="#">News Home</a>
    <a href="#">Future of ODIs</a>
    <a href="#">Ball-tempering</a>
    <a href="#">Technology in cricket</a>
    <a href="#">Racism</a>

  </div>
</div>

<div className="dropdown">
  <button className="dropbtn">Features</button>
  <div className="dropdown-content">
    <a href="#">Features Home Home</a>
    <a href="#">Writers</a>
    <a href="#">Photo galleries</a>
    <a href="#">The Cricket Monthly</a>

  </div>
</div>

<div className="dropdown">
  <button className="dropbtn">Videos</button>
  <div className="dropdown-content">
    <a href="#">T20 Time Out</a>
    <a href="#">Matchday</a>
    <a href="#">News and Analysis</a>
    <a href="#">Interviews</a>
    <a href="#">Press Conference</a>
    <a href="#">T20 Time Out Hindi</a>
    <a href="#">Polite Enquiries</a>
    <a href="#">Match Analysis</a>
    <a href="#">Features</a>
    <a href="#">Youtube</a>

  </div>
</div>

<div className="dropdown">
  <button className="dropbtn">Stats</button>
  <div className="dropdown-content">
    <a href="#">Stats Home</a>
    <a href="#">IPL 2022</a>
    <a href="#">SuperStats</a>
    <a href="#">All Records</a>
    <a href="#">Grounds</a>
    <a href="#">AskCricinfo</a>
    <a href="#">Statsguru</a>
    <a href="#">2022 records</a>
    <a href="#">Players</a>
    <a href="#">Rankings</a>

  </div>
</div>
<div className="edition">
<div className="dropdown">
    <button className="dropbtn">Edition PK</button>
    <div className="dropdown-content">
    <a href="#">Africa</a>
    <a href="#">Bangladesh</a>
    <a href="#">India-Hindi</a>
    <a href="#">Australia</a>
    <a href="#">India</a>
    <a href="#">Pakistan</a>
    <a href="#">United Kindom</a>
    <a href="#">New Zealand</a>
    <a href="#">Sri Lanka</a>
    <a href="#">United States</a>
    <a href="#">Global</a>
    </div>
    </div>
    </div>
    <div className="pic">
        <img src="moon.jpg" className="mode"/>
         <img src="bell.jpg" className="bell"/>
        <img src="menu.jpg" className="menu1"/>
        <img src="search.jpg" className="search"/>
        </div>
   </nav>
</div>
     );
}

export default Menu;