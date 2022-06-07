const express = require('express');
const path = require('path');
const router = express.Router();


const algoController = require(path.resolve(__dirname,'../controllers/algoController.js'));

// router.get('/', algoController.getTables, (req, res) => {
//     console.log('at table router');
//     return res.status(200).json(res.locals.tables);
// });

module.exports = router;