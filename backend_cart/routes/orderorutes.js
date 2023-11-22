


const express = require('express');
const{createorder, getorder, deleteorder} =  require("../controller/order")

const orderroutes = express.Router();



orderroutes.post("/", createorder)
.get("/", getorder)

.delete("/:id", deleteorder)


module.exports = orderroutes;