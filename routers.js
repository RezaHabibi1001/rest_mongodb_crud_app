// import modules 
const express  = require("express")
const router = express.Router()
const CustomerModel = require("./model")


// getting information of all customers ........................................................................... (1)

router.get("/",async (req,res) => {
    try {
       const customers = await CustomerModel.find()
        res.json(customers)
   } 
   catch(err) {
        res.json({message:err})
   }    
})



// getting information of one customer ................. .......................................................... (2)

router.get("/:id",async (req,res) => {
    try {
       const customers = await CustomerModel.findById(req.params.id)
        res.json(customers)
   } 
   catch(err) {
        res.json({message:err})
   }    
})



// Creating a new Customer......................................................................................... (3)

router.post("/",async (req,res) => {
    
    const customer  = new CustomerModel({
         
              name:req.body.name,
              lastName:req.body.lastName,
              userName:req.body.userName,
              password:req.body.password,
              companyName : req.body.companyName,
              contractDuration :req.body.contractDuration,
              phoneNumber: req.body.phoneNumber,
              email: req.body.email,
              amount: req.body.amount,
              status: req.body.status,
              description : req.body.description,
              ui_prgress : req.body.ui_prgress,
              frontend_progress :req.body.frontend_progress,
              backend_progress :req.body.backend_progress,
              payedAmount: req.body.payedAmount,
              startDate : req.body.startDate,
              endDate : req.body.endDate
       }) 
    try {
       const newCustomer = await customer.save()
        res.json(newCustomer)
   } 
   catch(err) {
        res.json({message:err})
   }    
})



// deleting information of one customer .................... ....................................................... (4)

router.delete("/:id",async (req,res) => {
    try {
       const customers = await CustomerModel.findByIdAndDelete(req.params.id)
        res.json("Successfully deleted ")
   } 
   catch(err) {
        res.json({message:err})
   }    
})



// Updating a Customer......................................................................................... (3)

router.patch("/:id",async (req,res) => {
    
    const customer  = { 
              name:req.body.name,
              lastName:req.body.lastName,
              userName:req.body.userName,
              password:req.body.password,
              companyName : req.body.companyName,
              contractDuration :req.body.contractDuration,
              phoneNumber: req.body.phoneNumber,
              email: req.body.email,
              amount: req.body.amount,
              status: req.body.status,
              description : req.body.description,
              ui_prgress : req.body.ui_prgress,
              frontend_progress :req.body.frontend_progress,
              backend_progress :req.body.backend_progress,
              payedAmount: req.body.payedAmount,
              startDate : req.body.startDate,
              endDate : req.body.endDate
       }
    try {
        const updatedCustomer = await CustomerModel.findOneAndUpdate(
            { _id: req.params.id },
            { $set: customer },
            { new: true }
          )
              res.json(updatedCustomer)
   } 
   catch(err) {
        res.json({message:err})
   }    
})

module.exports = router