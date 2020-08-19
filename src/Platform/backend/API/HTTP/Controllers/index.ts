import {Controller} from './Controller';
import express = require('express');


export class Controllers {
    private app: express.Application;

    constructor(controllers: Array<Controller>) {
        this.app = express();
        this.app.get('/', (req, res) => {
            res.send('Welcome to GUDS server!');
        });
        controllers.forEach((controller: Controller) => {
            this.app.use(controller.router())
        });
        this.app.use('*', (req, res) => {
            res.status(404).send({msg: 'not found'})
        });
        this.app.listen(3000, function () {
            console.log('App is listening on port 3000!');
        });
    }
}
