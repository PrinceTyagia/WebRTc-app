const router = require('express').Router();
const AuthController = require('./controllers/auth-controller.js')

router.post("/api/send-otp", AuthController.sendOtp);
router.post("/api/verify-otp", AuthController.verifyOtp);
module.exports = router;