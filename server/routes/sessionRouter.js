const express = require('express');
const path = require('path');
const sessionRouter = express.Router();
const sessionController = require('../controllers/sessionController.js');

sessionRouter.get('/', sessionController.getAllSessions, (req, res) => {
    console.log('getting all sessions');
    return res.status(200).json(res.locals.sessions);
});

// get session by ID
// router.get('/:id', sessionController.getSessionById, (req, res) => {
//     console.log(`get question by name: ${req.params.name}`);
//     return res.status(200).json(res.locals); // res.locals?
// });

// create a session
sessionRouter.post('/', sessionController.createSession, (req, res) => {
    console.log(`create session:` + req.body);
    return res.status(200).json(res.locals.session);
});

// update questions
// router.get('/', algoController.updateQuestions, (req, res) => {
//     return res.status(200).json(res.locals.questions);
// });

module.exports = sessionRouter;