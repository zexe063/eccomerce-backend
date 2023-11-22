


const express = require("express");
const {getcart,createcart,deletecart} = require("../controller/cart");
const cartRouter = express.Router();


cartRouter.get("/", getcart)
.post("/", createcart)
.delete("/:id", deletecart);

module.exports = cartRouter