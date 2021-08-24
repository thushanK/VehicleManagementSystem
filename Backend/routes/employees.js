const router = require("express").Router();
let employee = require("../models/employee");

// adding a employee
router.route("/add").post((req,res) => {


    const EmployeeName = req.body.EmployeeName;

    const Address = req.body.Address;

    const NICNumber = req.body.NICNumber;

    const Gender = req.body.Gender;

    const Email = req.body.Email;

    const MobileNumber = Number(req.body.MobileNumber);

    const JobType = req.body.JobType;

    const newEmployee = new employee({

         
    EmployeeName, 

    Address,

    NICNumber,

    Gender,

    Email,

    MobileNumber,

    JobType

    })

    newEmployee.save().then( () => {

        res.json("New employee is added")
   
    }).catch( (err) => {

        console.log(err);
    })


})

router.route("/").get( (req,res) => {

    employee.find().then((employees) => {

        res.json(employees)

    }).catch((err) => {

        console.log(err);

    })

})

//update Employee details

router.route("/update/:id").put(async(req,res) => {

    let employeeId =req.params.id;
    const {  EmployeeName, Address, NICNumber, Gender, Email, MobileNumber, JobType } = req.body;

    const updateEmployee = {

        EmployeeName, 

        Address,
    
        NICNumber,
    
        Gender,
    
        Email,
    
        MobileNumber,
    
        JobType

    }


    const update = await employee.findByIdAndUpdate(employeeId, updateEmployee).then(() => {

        res.status(200).send({status:"employee updated"});

    }).catch((err) => {

        console.log(err);
        res.status(500).send({status :"Error with updating data"});

    })
})

router.route("/delete/:id").delete(async (req,res) =>{

    let employeeId = req.params.id;

    await employee.findByIdAndDelete(employeeId).then( () => {

        res.status(200).send({status: "employee is deleted"});

    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({status :"Error with deleting data", error:err.message});

    })
})



module.exports = router;