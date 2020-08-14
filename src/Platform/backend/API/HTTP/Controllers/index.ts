// const app = module.exports = require('express')();
import express from 'express';
import {RecordingsController} from "./recordings";
const app: express.Application = express();

app.get('/', (req, res) => {
    res.send({msg: 'Welcome to GUDS server!'});
})

// app.use('', docs);
// app.use('/api/v1/auth', require('./auth'));
// app.use(require('./auth').verifyToken);
app.use(new RecordingsController().router());

app.use('*', (req, res) => {
    res.status(404).send({msg: 'not found'})
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
