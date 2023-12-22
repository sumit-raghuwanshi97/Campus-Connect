const express = require('express');
const { RegisterUser, getUser, getLoggedInUser, logoutUser, verifyEmail } = require('../controllers/user');
const { loginUser } = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");
const bodyParser = require('body-parser');


const router = express.Router();
router.use(bodyParser.json());


router.route('/register').post(RegisterUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/:id').get(isAuthenticated,getUser);
router.route('/profile/me').get(isAuthenticated, getLoggedInUser);
router.route('/verify/email/:id').get(verifyEmail);


module.exports = router ;