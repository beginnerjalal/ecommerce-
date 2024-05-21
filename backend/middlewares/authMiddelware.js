const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const protect = async(req, res, next) =>{
    let token
    console.log(req.headers.authorization);
    next();
}

module.exports = {protect};