const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const mongoose = require("mongoose")
const middlewares = require("./middleware")


mongoose.connect(process.env.)


const app = express()
app.use(morgan("common"))
app.use(helmet())
app.use(cors({
    origin : "http://localhost:3000"
}))

app.get("/",(req,res)=>{
    res.json({
        "message": "ok"
    })
})

app.use(middlewares.notFound)

app.use(middlewares.errorHandler)

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("serveur en ecoute ")
})