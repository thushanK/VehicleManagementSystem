const router = require("express").Router();
let request = require ("../models/request");

// adding a request

router.route("/add").post((req,res) => {

    const vehicleOwner = req.body.vehicleOwner;

    const vehicleType = req.body.vehicleType;

    const vehicleModel = req.body.vehicleModel; 

    const ManufacherYear = Number(req.body.ManufacherYear);

    const LicensePlateNumber = req.body.LicensePlateNumber;
    
    const InsuranceCompany = req.body.InsuranceCompany;

    const InsuranceType = req.body.InsuranceType;

    const Discription = req.body.Discription;


    const newRequest = new request({

         vehicleOwner,

         vehicleType, 

         vehicleModel,  

         ManufacherYear, 

         LicensePlateNumber, 

         InsuranceCompany,

         InsuranceType,

         Discription

       

    })

    newRequest.save().then( () => {

        res.json("New request is added")
   
    }).catch( (err) => {

        console.log(err);
    })


})

//get request details

router.route("/").get( (req,res) => {

    request.find({}).then((data) => {

        res.status(200).send({data:data})

    }).catch((err) => {

        console.log(err);

    })

})


//update request details

router.route("/update/:id").put(async(req,res) => {

    let requestId =req.params.id;
    const {  vehicleOwner, vehicleType, vehicleModel, ManufacherYear, LicensePlateNumber,  InsuranceCompany, InsuranceType, Discription } = req.body;

    const updateRequest = {

        vehicleOwner,

         vehicleType, 

         vehicleModel,  

         ManufacherYear, 

         LicensePlateNumber, 

         InsuranceCompany,

         InsuranceType,

         Discription


    }


    const update = await request.findByIdAndUpdate(requestId, updateRequest).then(() => {

        res.status(200).send({status:"request updated"});

    }).catch((err) => {

        console.log(err);
        res.status(500).send({status :"Error with updating data"});

    })
})

    //deleting a request
router.route("/delete/:id").delete(async (req,res) =>{

    let requestId = req.params.id;

    await request.findByIdAndDelete(requestId).then( () => {

        res.status(200).send({status: "request is deleted"});

    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({status :"Error with deleting data", error:err.message});

    })
})



module.exports = router;