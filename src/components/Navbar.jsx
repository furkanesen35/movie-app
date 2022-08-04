import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
 const currentUser = {displayName:"felix franko"}
 return (
  <div>
   <nav className="navbar navbar-extend-lg">
    <div className="container-fluid">
     <Link to={"/"} className="navbar-brand text-white" />
     <h4>React Movie App</h4>
     <div className="d-flex text-white align-items-center">

     </div>
    </div>
   </nav>
  </div>
 );
};

export default Navbar;
