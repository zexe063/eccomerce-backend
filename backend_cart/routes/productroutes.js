

const express = require("express");
const productRouter = express.Router();
const {getproduct, sortproduct} = require("../controller/product");







productRouter.get("/", getproduct)
productRouter.get("/sort/", sortproduct)


module.exports = productRouter;