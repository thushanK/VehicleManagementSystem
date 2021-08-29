import React, {useState,useEffect} from 'react'
import axios from 'axios';



export default function AllVehicle( ) {

const [vehicles,setVehicles]=useState([]);

useEffect(() =>{
    function getVehicles() {

        axios.get("http://localhost:8070/vehicle/").then((res) =>{
            console.log(res.data.data)
            setVehicles(res.data.data);
        }).catch((err) =>{
            alert(err.message);
        })   
    }

    getVehicles();
},[])

let Count = 0


    return(
        <div>
            <br/>
            <h1>All Vehicles </h1>


            <div>
                <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand"></a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </nav>
            </div>
            <br/>

                <div>
                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">LicensePlate Number</th>
                            <th scope="col">Owner's Name</th>
                            <th scope="col">Type</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {vehicles.map(vehicles =>(

                                <tr key = {vehicles._id}>
                                    <td>{Count = Count+1}</td>
                                    <td> {vehicles.LicensePlateNumber} </td>
                                    <td> {vehicles.vehicleOwner} </td>
                                    <td> {vehicles.vehicleType} </td>
                                    <td> <button type="submit" class="btn btn-dark mb-2">Edit</button> </td>
                                </tr>

                            ))}
                        </tbody>
                        </table>
                </div>

        </div>
    )
}