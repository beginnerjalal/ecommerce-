const express = require('express');
const {authController, getUserProfile, registerUser} =require("../controllers/usersRouteController")
const {protect} = require('../middlewares/authMiddelware');
// require("colors")

const router = express.Router();

//new user registration 
router.route("/").post(registerUser);


// post email, password auth 
router.post("/login",authController);


//get user private/protected route
router.route("/profile").get(protect,getUserProfile);

module.exports = router;