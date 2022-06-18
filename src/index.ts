import {statsRoute} from "./routers/stats.router";

const express = require("express")
require("dotenv").config() ;
const app = express()




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", statsRoute)



app.listen(process.env.PORT , ()=> {
    console.log("Server started on port: "+ process.env.PORT)
})