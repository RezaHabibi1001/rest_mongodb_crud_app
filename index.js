// import modules 

const express  =  require("express")
const app  = express()
const mongoose  = require("mongoose")
require("dotenv/config")
const bodyParser = require("body-parser")
const routers = require("./routers")



// using routers
app.use(bodyParser.json())
app.use("/customers",routers)



// Connection to Database
mongoose
    .connect(process.env.CONNECTION_DB, {
      useNewUrlParser: true,
      autoIndex: true,
    })
    .then(() => console.log('Connected to database'))
    // @ts-ignore
    .catch((err) => console.error('Failed to connect to database', err))



    //listening to port 
app.listen(3000,() => {
  console.log("server is running on port:3000")
})