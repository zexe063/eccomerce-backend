


const express = require('express');
const {createotp} = require('../controller/auth');
const authrouter = express.Router();


authrouter.post("/", createotp);


module.exports = authrouter;