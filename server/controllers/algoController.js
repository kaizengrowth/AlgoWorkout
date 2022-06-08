const algoModel = require ('../models/algoModels.js')

const algoController = {};

algoController.getQuestions = (req, res, next) => {
    console.log('at getQuestions controller');
    algoModel.find({}).exec().then(data => {
        console.log(data);
        res.locals.questions = data;
        next();
    }).catch(err => {
        next(err);
    })
}

module.exports = algoController;