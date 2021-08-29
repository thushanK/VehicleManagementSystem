const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const requestschema = new Schema({

    
    // request modeule
    
    vehicleOwner :{
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

    InsuranceCompany :{
        type :String,
        required:true
    },

    InsuranceType :{
        type :String,
        required:true
    },

    Discription :{
        type :String,
        required:true
    },

  

}); 

const request = mongoose.model("request",requestschema);

module.exports = request;