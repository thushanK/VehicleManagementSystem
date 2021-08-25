import React,{useState}  from "react"
import './AddVehicle.css'


export default function AddVehicle() {

        return(

                <div class="body" >
                <h1>Add Vehicle</h1>
                <br/>
                <form>
                    <div class="container" >
                        <div class="row align-items-center;">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6">
                            <div class="border" >
                                <div class=" aln-div col-lg-12 ">
                                    
                                    <div class="form-group">
                                            <input type="OwnerName" class="form-control" id="OwnerName" aria-describedby=" " placeholder="Enter the vehicle owner's name"/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="type" class="form-control" id="type" aria-describedby=" " placeholder="Enter vehicle type"/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="model" class="form-control" id="model" aria-describedby=" " placeholder="Enter vehicle model"/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="year" class="form-control" id="year" aria-describedby=" " placeholder="Enter manufacturer year"/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="licenseplate" class="form-control" id="licenseplate" aria-describedby=" " placeholder="Enter license plate number"/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="rate" class="form-control" id="rate" aria-describedby=" " placeholder="Enter the rate"/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="discription" class="form-control" id="discription" aria-describedby=" " placeholder="Enter the description"/>
                                    </div>
                                                            
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-3"></div>
                            
                            </div>
                        </div>
                        <br/>
                    <div class="container">
                        <div class="wrapper">
                            <div class="box">
                              <div class="js--image-preview"></div>
                              <div class="upload-options">
                                <label>
                                  <input type="file" class="image-upload" accept="image/*" />
                                </label>
                              </div>
                            </div>
                          
                            <div class="box">
                              <div class="js--image-preview"></div>
                              <div class="upload-options">
                                <label>
                                  <input type="file" class="image-upload" accept="image/*" />
                                </label>
                              </div>
                            </div>
                          
                            <div class="box">
                              <div class="js--image-preview"></div>
                              <div class="upload-options">
                                <label>
                                  <input type="file" class="image-upload" accept="image/*" />
                                </label>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div class="container ">
                        <div class="row">
                            <div class="btn-div col-lg-12 "><button type="submit" class="btn btn-dark mb-2 align-center"> &nbsp; &nbsp; Add &nbsp; &nbsp;  </button></div>
                        </div>
                    </div>
                </form>
   </div>
      

        )

}

