import React,{useState}  from "react"
import axios from "axios";
import './AddVehicle.css'
import {storage} from "./firebase";



export default function AddVehicle() {

  const  [vehicleOwner, setvehicleOwner] = useState("");

  const [vehicleType, setvehicleType] = useState("");

  const [vehicleModel, setvehicleModel] = useState("");

  const [ManufacherYear, setManufacherYear] = useState("");

  const [LicensePlateNumber, setLicensePlateNumber] = useState("");
 
  const [vehicleRate, setvehicleRate] = useState("");

  const [Discription, setDiscription] = useState("");

  const [File, setFile]=  useState([null]);


  const [image1, setImage1]=  useState([null]);
  const [image2, setImage2]=  useState([null]);
  const [image3, setImage3]=  useState([null]);

  const [pre1, setPre1]=  useState([null]);
  const [pre2, setPre2]=  useState([null]);
  const [pre3, setPre3]=  useState([null]);

  const [url1, setUrl1]=  useState(null)
  const [url2, setUrl2]=  useState(null)
  const [url3, setUrl3]=  useState(null)

  function sendData(e){

    e.preventDefault();
    handleSave();
  console.log(File);

    
    const newVehicle={

      vehicleOwner,

      vehicleType, 

      vehicleModel,  

      ManufacherYear, 

      LicensePlateNumber, 

      vehicleRate, 

      Discription,

      url1,

      url2,

      url3

    

    }

    axios.post("http://localhost:8070/vehicle/add",newVehicle).then(() =>{
        alert("A new vehicle is added")
    }).catch((err) =>{
        alert(err)
    })


  }

  //adding images to fierbase

  /*const handleChange =(e) =>{
     

    setFile(e.target.files[0])

  }*/

  const handleSave =() => {

    const uploadTask = storage.ref(`images/${image1.name}`).put(image1);
    uploadTask.on(
      "state_changed",
      snapshot=>{},
      error=>{
        console.log(error);
      },
      ()=>{
        storage
        .ref("images")
        .child(image1.name)
        .getDownloadURL()
        .then(url=>{
          setUrl1(url)
          console.log(url);
        })
      }
    )




    const uploadTask2 = storage.ref(`images/${image2.name}`).put(image2);
    uploadTask2.on(
      "state_changed",
      snapshot=>{},
      error=>{
        console.log(error);
      },
      ()=>{
        storage
        .ref("images")
        .child(image2.name)
        .getDownloadURL()
        .then(url=>{
          setUrl2(url)
          console.log(url);
        })
      }
    )


    const uploadTask3 = storage.ref(`images/${image3.name}`).put(image3);
    uploadTask3.on(
      "state_changed",
      snapshot=>{},
      error=>{
        console.log(error);
      },
      ()=>{
        storage
        .ref("images")
        .child(image3.name)
        .getDownloadURL()
        .then(url=>{
          setUrl3(url)
          console.log(url);
        })
      }
    )

  }





        return(

                <div class="body" >
                 <br/><br/>
                <h1>Add Vehicle</h1>
                <br/>
                <form onSubmit={sendData}>
                    <div class="container" >
                        <div class="row align-items-center;">
                            <div class="col-lg-2"></div>
                            <div class="col-lg-7">
                            <div class="border" >
                                <div class=" aln-div col-lg-12 ">
                                    
                                    <div class="form-group">
                                            <input type="OwnerName" class="form-control" id="OwnerName" aria-describedby=" " placeholder="Enter the vehicle owner's name"
                                            onChange={(e) =>{

                                              setvehicleOwner(e.target.value);

                                            }} />
                                    </div>
        
                                          
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="Motorbike"
                                              onChange={(e) =>{

                                                setvehicleType(e.target.value);
                                                
                                                }}
                                          /> 
                                          <label class="btn btn-outline-dark " for="btnradio1" >Motorbike</label>

                                          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="Car"
                                           onChange={(e) =>{

                                            setvehicleType(e.target.value);
                                            
                                            }}
                                          /> 
                                          <label class="btn btn-outline-dark" for="btnradio2">Car</label>

                                          <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" value="Van"
                                           onChange={(e) =>{

                                            setvehicleType(e.target.value);
                                            
                                            }}
                                          /> 
                                          <label class="btn btn-outline-dark" for="btnradio3">Van</label>

                                          <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" value="Bus"
                                           onChange={(e) =>{

                                            setvehicleType(e.target.value);
                                            
                                            }}
                                          /> 
                                          <label class="btn btn-outline-dark" for="btnradio4">Bus</label>

                                   
                                        </div>

                                    <div class="form-group">
                                            <input type="model" class="form-control" id="model" aria-describedby=" " placeholder="Enter vehicle model"
                                            onChange={(e) =>{

                                              setvehicleModel(e.target.value);

                                            }}/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="year" class="form-control" id="year" aria-describedby=" " placeholder="Enter manufacturer year"
                                            onChange={(e) =>{

                                              setManufacherYear(e.target.value);

                                            }}/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="licenseplate" class="form-control" id="licenseplate" aria-describedby=" " placeholder="Enter license plate number"
                                            onChange={(e) =>{

                                              setLicensePlateNumber(e.target.value);

                                            }}/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="rate" class="form-control" id="rate" aria-describedby=" " placeholder="Enter the rate"
                                            onChange={(e) =>{

                                              setvehicleRate(e.target.value);

                                            }}/>
                                    </div>
        
                                    <div class="form-group">
                                            <input type="discription" class="form-control" id="discription" aria-describedby=" " placeholder="Enter the description"
                                            onChange={(e) =>{

                                              setDiscription(e.target.value);

                                            }}/>
                                    </div>
                                            
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-2"></div>
                            
                            </div>
                        </div>
                        <br/>
                    <div class="container">
                        <div class="wrapper">
                            <div class="box">
                              <div class="js--image-preview" style={{height:'230px' ,width:"350px"}}>  <img src={pre1} hidden={pre1==""}  style={{height:'250px' ,width:"350px"}}></img> </div>
                            
                              <div class="upload-options">
                                <label>
                                  <input type="file" class="image-upload" onChange={(e)=>{setImage1(e.target.files[0]) 
                                    setPre1(URL.createObjectURL(e.target.files[0]))}} />
                                </label>

                             
                              </div>
                            </div>
                          
                            <div class="box">
                              <div class="js--image-preview"style={{height:'230px' ,width:"350px"}}>  <img hidden={pre2==""} src={pre2} style={{height:'250px' ,width:"350px"}}></img> </div>
                              <div class="upload-options">
                                <label>
                                  <input type="file" class="image-upload" accept="image/*"onChange={(e)=>{setImage2(e.target.files[0])
                                  setPre2(URL.createObjectURL(e.target.files[0]))
                                }}
                                   />
                                </label>
                              </div>
                            </div>
                          
                            <div class="box">
                              <div class="js--image-preview"style={{height:'230px' ,width:"350px"}}>  <img hidden={pre3==""}  src={pre3} style={{height:'250px' ,width:"350px"}}></img> </div>
                              <div class="upload-options">
                                <label>
                                  <input type="file" class="image-upload" accept="image/*" onChange={(e)=>{setImage3(e.target.files[0])
                                setPre3(URL.createObjectURL(e.target.files[0]))
                                  }} />
                                </label>
                              </div>
                            </div>
                          </div>
                    </div>
                    <br/>
                    <div class="container ">
                        <div class="row">
                            <div class="btn-div col-lg-12 "><button type="submit" class="btn btn-dark mb-2 align-center"> &nbsp; &nbsp; Add &nbsp; &nbsp;  </button></div>
                        </div>
                    </div>
                </form>
   </div>
      

        )

}

