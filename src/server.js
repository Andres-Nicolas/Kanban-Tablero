import { createRequire } from "module";
const require = createRequire(import.meta.url);


const express = require ("express");
const mongoose =require ("mongoose");
const cors = require ("cors");

const server =express()
server.use(cors())
server.use(express.json())

mongoose.connect("mongodb://localhost:27017")


server.listen (3000, ()=>{
    console.log("el servidor se esta ejecuntando")
});