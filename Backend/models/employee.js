const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const vehicleschema = new Schema({

    
    // Employee  modeule
    
    EmployeeName :{
        type :String,
        required:true

    },

    vehicleType :{
        type :String,
        required:true
    },

    vehicleModel :{
        type :String,
        required:true
    },

    ManufacherYear :{
        type :Number,
        required:true
    },

    LicensePlateNumber :{
        type :String,
        required:true
    },

    vehicleRate :{
        type :Number,
        required:true
    },

    Discription :{
        type :String,
        required:true
    },

}); 

const vehicle = mongoose.model("vehicle",vehicleschema);

module.exports = vehicle;