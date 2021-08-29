import React from "react";
import logo from '../images/logo.png';


function Header() {

return(
 
  <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"> <img src={logo} alt="Logo" /> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/addvehicle">Add Vehicles <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/DisplayAllVehicles">Display All Vehicles</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Vehicle Request</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">View Reports</a>
      </li>
    </ul>
    
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
   
  </div>
</nav>



   

    )
}

export default Header;