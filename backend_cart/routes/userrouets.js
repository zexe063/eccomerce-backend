

const express = require('express');
const useroutes = express.Router();
const{createuser, loginuser, forgetpassword} = require("../controller/user");

useroutes.post("/signup", createuser)
useroutes.post("/login", loginuser);
useroutes.post("/forgetpassword", forgetpassword)


module.exports = useroutes;