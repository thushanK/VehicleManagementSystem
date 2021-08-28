const router = require("express").Router();
let vehicle = require ("../models/vehicle");

// adding a vehicle
router.route("/add").post((req,res) => {

    const vehicleOwner = req.body.vehicleOwner;

    const vehicleType = req.body.vehicleType;

    const vehicleModel = req.body.vehicleModel; 

    const ManufacherYear = Number(req.body.ManufacherYear);

    const LicensePlateNumber = req.body.LicensePlateNumber;
    
    const vehicleRate = Number(req.body.vehicleRate);

    const Discription = req.body.Discription;

    const url1 = req.body.url1 ;

    const url2 = req.body.url2 ;

    const url3 = req.body.url3 ;

    const newVehicle = new vehicle({

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

    })

    newVehicle.save().then( () => {

        res.json("New vehicle is added")
   
    }).catch( (err) => {

        console.log(err);
    })


})

router.route("/").get( (req,res) => {

    vehicle.find().then((vehicles) => {

        res.json(vehicles)

    }).catch((err) => {

        console.log(err);

    })

})

//update vehicle details

router.route("/update/:id").put(async(req,res) => {

    let vehicleId =req.params.id;
    const {  vehicleOwner, vehicleType, vehicleModel, ManufacherYear, LicensePlateNumber, vehicleRate, Discription } = req.body;

    const updateVehicle = {

        vehicleOwner,

         vehicleType, 

         vehicleModel,  

         ManufacherYear, 

         LicensePlateNumber, 

         vehicleRate, 

         Discription

    }


    const update = await vehicle.findByIdAndUpdate(vehicleId, updateVehicle).then(() => {

        res.status(200).send({status:"Vehicle updated"});

    }).catch((err) => {

        console.log(err);
        res.status(500).send({status :"Error with updating data"});

    })
})

    //deleting a vehicle
router.route("/delete/:id").delete(async (req,res) =>{

    let vehicleId = req.params.id;

    await vehicle.findByIdAndDelete(vehicleId).then( () => {

        res.status(200).send({status: "Vehicle is deleted"});

    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({status :"Error with deleting data", error:err.message});

    })
})



module.exports = router;