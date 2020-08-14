// const app = module.exports = require('express')();
const express = require("express");
import {RecordingsController} from "./recordings";
const app: any = express();

app.get('/', (req, res) => {
    res.send({msg: 'Welcome to GUDS server!'});
})

// app.use('', docs);
// app.use('/api/v1/auth', require('./auth'));
// app.use(require('./auth').verifyToken);
const recordingController = new RecordingsController();
app.use(recordingController.router());

app.use('*', (req, res) => {
    res.status(404).send({msg: 'not found'})
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
