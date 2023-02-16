const express = require('express');
const router = express.Router(); 
const path = require('path');

const userController = require('../controllers/userController')

router.get('/estudio', userController.estudio);
router.get('/exp', userController.exp);
// router.get('/portf', userController.portf);
router.get('/contact', userController.contact);
// router.post('/contact', userController.answer);


module.exports = router;
