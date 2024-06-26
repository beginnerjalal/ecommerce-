const User = require('../model/userModel'); 
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

const authController = asyncHandler(async(req, res) => {
    const {email,password} = req.body;
    const user = await User.findOne({ email });
if (user && (await user.matchPassword(password))) {
    res.json({
        _id : user._id,
        name : user.name,
        email : user.email,
        isAdmin : user.isAdmin,
        token : generateToken(user._id)
    });
}else{
    res.status(401);
    throw new Error ('Invalid email or password');
}
});


const getUserProfile = asyncHandler(async(req, res) => {
    res.send('success');

})

module.exports = {authController, getUserProfile};