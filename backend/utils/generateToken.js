const jwt = require('jsonwebtoken');

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWt_KEY,{
        expiresIn:'15d'
    });
}

module.exports = generateToken;