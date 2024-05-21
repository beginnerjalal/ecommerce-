const express = require('express');
const {authController, getUserProfile} =require("../controllers/usersRouteController")

// require("colors")

const router = express.Router();

// post email, password auth 
router.post("/login",authController);


//get user private/protected route
router.route("/profile").get(getUserProfile);

module.exports = router;