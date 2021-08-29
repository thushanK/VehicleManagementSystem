import React,{useState}  from "react"
import axios from "axios";
import './EditVehicles.css'




export default function EditVehicles() {

 

        return(

                <div class ="bg">
                    <br/>
                    <h1>Edit Vehicle</h1>

                                
                         <div class="counter">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        
                                        <div id="counter" class="border">
                                            <div class="cell">
                                                <div class="counter-value number-count" data-toggle="counterUp">575</div>
                                                <h4 class="counter-info">Motorbikes</h4>
                                                <i class="fas fa-motorcycle"></i>
                                            </div>
                                            <div class="cell">
                                                <div class="counter-value number-count" data-toggle="counterUp">125</div>
                                                <h4 class="counter-info">Cars</h4>
                                                <i class="fas fa-car"></i>
                                            </div>
                                            <div class="cell">
                                                <div class="counter-value number-count" data-toggle="counterUp">483</div>
                                                <h4 class="counter-info">Vans</h4>
                                                <i class="fas fa-shuttle-van"></i>
                                            </div>
                                            <div class="cell">
                                                <div class="counter-value number-count" data-toggle="counterUp">265</div>
                                                <h4 class="counter-info">Bus</h4>
                                                <i class="fas fa-bus"></i>
                                            </div>
                                        </div>
                                        
                                    </div> 
                                </div> 
                            </div> 
                        </div> 


                            <form>
                                    <div class="container cont-2" >
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="border" >
                                                    <div class="data col-lg-4">
                                                        <div class="form-group">
                                                        <input type="licenseplate" class="form-control col-lg-7 menu-item" id="licenseplate" aria-describedby=" " placeholder="license plate number" readonly/>
                                                        <input type="type" class="form-control col-lg-4" id="type" aria-describedby=" " placeholder="vehicle type" readonly/>
                                                        </div>
                                                        <div class="form-group">
                                                        <input type="OwnerName" class="form-control" id="OwnerName" aria-describedby=" " placeholder="vehicle owner's name"/>
                                                        </div>
                                                        <div class="form-group">
                                                        <input type="model" class="form-control" id="model" aria-describedby=" " placeholder="vehicle model"/>
                                                        </div>
                                                        <div class="form-group">
                                                        <input type="year" class="form-control" id="year" aria-describedby=" " placeholder="manufacturer year"/>
                                                        </div>
                                                        <div class="form-group">
                                                        <input type="rate" class="form-control" id="rate" aria-describedby=" " placeholder="rate"/>
                                                        </div>
                                                        <div class="form-group">
                                                        <input type="discription" class="form-control" id="discription" aria-describedby=" " placeholder="description"/>
                                                        </div>                                                      
                                                    </div>

                                                    <div class="col-lg-12 image-container"> 
                                                        <img src="../../logo/ios.png" class="image border" />&nbsp;&nbsp;
                                                        <img src="../../logo/android.png" class="image border" />&nbsp;&nbsp;
                                                        <img src="../../logo/windows.png" class="image border" />
                                                    </div>

                                                    <div class="col-lg-12 button">
                                                        <button type="submit" class="btn btn-dark mb-2">Edit</button>&nbsp;&nbsp;&nbsp;
                                                        <button type="submit" class="btn btn-danger mb-2">Delete</button>
                                                    </div>
                                                    
                                                    
                                                        
                                                        
                                                    
                                                </div>              
                                            </div>
                                        </div>
                                    </div>
                                    
                            </form>


                    </div>

                   
           

        )

}

