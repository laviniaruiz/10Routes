const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const studentControllers = require('../controllers/studentControllers')

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', studentControllers.index)

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:index', studentControllers.show)

module.exports = router