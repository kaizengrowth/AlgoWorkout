const express = require('express');
const path = require('path');
const router = express.Router();
const algoController = require('../controllers/algoController.js');


router.get('/', algoController.getQuestions, (req, res) => {
    console.log('getting questions');
    return res.status(200).json(res.locals.questions);
});

// get question by ID


// update questions
// router.get('/', algoController.updateQuestions, (req, res) => {
//     return res.status(200).json(res.locals.questions);
// });

module.exports = router;