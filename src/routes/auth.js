const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

router.get('/register', authController.getRegister);
router.post('/register', authController.register);



module.exports = router;