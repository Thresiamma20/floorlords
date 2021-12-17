import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css"
const Navbar = () =>{
  
    
    return(
        <div>
            
  <nav>
    <div className="nav-wrapper green">
    <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
      <Link to="/" className="brand-logo center">Home</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
        <li><Link to="/signin">signin</Link></li>
        <li><Link to="/signup">signup</Link ></li>
        <li><Link to="/Profile">Profile</Link ></li>
      </ul>
    </div>
  </nav>

  <ul id="slide-out" className="sidenav yellow">
    <li><div className="user-view">
   
     
    </div></li>
    <li><Link to="#!"><i className="material-icons">star</i>Music</Link></li>
    <li><Link to="https://www.google.com/aclk?sa=l&ai=CTe9pmAOzYcz5Me6jmsMPwr-_gAKWitaFZ4PIudHQCfSvswwIABABINyf22woBGDlAqABzf_Y7gPIAQHIAxuqBFhP0OD-2HuUnfaJGFklWFfaeztSwXw-3ycFCDpfMT7xDU6Hu8bgEqq7a43aciaR_8aYiZSx3X9D7rCB3hrvTrZZSVKpaR7Pmwl-P3vGFd23x65Qtrz5PIxGwAT36pqwe6AGZoAHm4CnEYgHAZAHAqgH1NIbqAemvhuoB7masQKoB_PRG6gH7tIbqAf_nLECqAfK3BuwCAXSCAQQAiAEsQnLP-YUZXGnL7kJyz_mFGVxpy_4CQGYCwG4DAHIFKqFnqHP9p6lLNAVAZgWAfgWAYAXAZIXCRIHCAEQAxi3Ag&ae=2&sig=AOD64_226gF8FbrJs_Q7gB9XStIAG9g68w&dct=1&adurl=https://bostonconservatory.berklee.edu/dance%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dbcb-gen-google-adwords-dance%26utm_content%3Dballet&q=">classical</Link></li>
    <li><a href="#!">pop</a></li>
    <li><div className="divider"></div></li>
    <li><a href="#!"><i className="material-icons">star</i>Dance</a></li>
    <li><a href="#!">classical</a></li>
    <li><a href="#!">eastern</a></li>
    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <h1>{
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  

  })}
</h1>
  
         </div>
    )

}
export default Navbar;