const sessionModel = require ('../models/sessionModels.js')

const sessionController = {};

// get all questions
sessionController.getAllSessions = (req, res, next) => {
    console.log('at getAllSession controller');
    sessionModel.find({}).exec().then(data => {
        console.log(data);
        res.locals.sessions = data;
        next();
    }).catch(err => {
        next(err);
    })
}

// get question by ID -- probably does not work! [rough try]
sessionController.getSessionById = (req, res, next) => {
    console.log('at getSessionsByID controller');
    sesionModel.findOne({req}).exec().then(data => {
        console.log(data);
        res.locals.session = data;
        next();
    }).catch(err => {
        next(err);
    })
}

// create a session
sessionController.createSession = (req, res, next) => {
    console.log('creating session');
    // const Session = mongoose.model('session', sessionSchema);
    // let timeNow = new Date().getTime();
    const {userID, questionID} = req.body;
    console.log('questionID: ' + questionID);
    sessionModel.create({userID, questionID})
    .then(data => {
        res.locals.session = data;
        next();
    })
    .catch((err) => next(err));
}

module.exports = sessionController;