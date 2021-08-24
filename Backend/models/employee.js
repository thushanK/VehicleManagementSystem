const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const Employeeschema = new Schema({

    
    // Add Employee schema
    
    EmployeeName :{
        type :String,
        required:true

    },

    Address :{
        type :String,
        required:true
    },

    NICNumber:{
        type :String,
        required:true
    },

    Gender:{
        type :String,
        required:true
    },

    Email :{
        type :String,
        required:true
    },

    MobileNumber :{
        type :Number,
        required:true
    },

    JobType:{
        type :String,
        required:true
    },

}); 

const Employee = mongoose.model("Employee",Employeeschema);

module.exports = Employee;