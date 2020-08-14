


// import { Module } from '@nestjs/common';
// // import { RpcModule } from './transport-layers/rpc/rpc.module';
// import { RestModule } from './transport-layers/rest/rest.module';
// import { LoggerModule } from './shared/logger/logger.module';
// import {NestFactory} from "@nestjs/core";
// import config from "./config/default";
// import {LoggerService} from "./shared/logger/logger.service";
//
// @Module({
//     imports: [RestModule, LoggerModule],
// })
// export class AppModule {
//     static async start(loggerService: LoggerService) {
//         const app = await NestFactory.create(this, {
//             logger: false,
//         });
//         await app.listen(config.server['PORT'] || 3000, () => {
//             loggerService.setContext('App');
//             loggerService.logger.info('API server made by J. Diego Sierra');
//             loggerService.logger.info(
//                 'Current environment: ' + (process.env.NODE_ENV || 'development'),
//             );
//             loggerService.logger.info(
//                 'Application is running on: ' + (config.server['PORT'] || 3000),
//             );
//         });
//     }
// }
//
// // Helpers
// // TODO: Check for enviroments file
// const config = require('./environments.js').config();
// const logger = require('./helpers/logger');
//
// // Routes
// const auth = require('./routes/auth');
// const docs = require('./routes/docs');
// const events = require('./routes/events');
//
// // TODO:  https://github.com/joze144/pool-shark-api/blob/master/index.js
// // pagination
// // const pagination = require('./pagination')
//
// // Middleware
// app.use(helmet())
// app.use(bodyParser.json({limit: '500kb'}));
// app.use(bodyParser.urlencoded({limit: '500kb', extended: true}));
// app.use(cors());
// app.use(errorhandler());
//
// // TODO: Add verbose flag
// if ((process.env.NODE_ENV || 'development') === 'development'){
//     const morgan = require('morgan');
//     const morganBody = require('morgan-body');
//     //app.use(morgan('combined'));
//     //app.use(morgan('dev', { 'stream': logger.stream }));
//     morganBody(app);
// }
//
// // API
// app.use(express.static(__dirname + '/docs'));
// app.use('', docs);
//
// // Import routes to be served HACER ASI
// // app.use('/api/', routes)
//
// // V1
// const v1Routes = express.Router()
// app.use('/api/v1', v1Routes)
// v1Routes.use('', auth);
// v1Routes.use(auth.verifyToken);
// v1Routes.use('/events', events);
//
// // If no route is matched by now, return API version
// app.use(function (req, res) {
//     logger.info('Wrong end point: ' + req.originalUrl)
//     res.status(httpStatus.OK)
//     res.json({
//         'api_endpoint': '/api/' + config.API_VERSION,
//         'request': req.originalUrl
//     })
// });
//
// // HTTPS
// if (config.HTTPS) {
//     server = https.createServer(settings.https,function(req,res) {app(req,res);});
// } else {
//     server = http.createServer(function(req,res) {app(req,res);});
// }
//
// // Start the server
// server.setMaxListeners(0);
// server.listen(config.PORT, config.HOST, () => {
//     logger.info('Andsoft API');
//     logger.info('Current environment: ' + process.env.NODE_ENV);
//     logger.info('Server listening on port ' + config.PORT);
//     logger.info('Domain: ' + config.HOST)
// });
//
// // Handle Errors
// process.on('uncaughtException',function(err) {
//     console.log('Uncaught Exception:');
//     if (err.stack) {
//         console.log(err.stack);
//     } else {
//         console.log(err);
//     }
// });
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const http = require('http');
// const cors = require('cors');
//
// // Development setup
// const app = express();
// if (process.env.NODE_ENV === "development") {
//     const morgan = require('morgan');
//     app.use(morgan('combined'));
//     app.use(cors());
// }
//
// // Soporte para JSON
// app.use(bodyParser.json());
// //
// app.use(bodyParser.urlencoded({extended: false}));
// // Manejo de errores y los devuelve al browser
// app.use(errorhandler());
// // Acceso a los archivos estáticos (imágenes, logos, et)
// app.use(express.static(__dirname + '/docs'));
//
// // ENDPOINTS
// app.use(require('routes'));
//
// // HTTPS
// if (config.HTTPS) {
//     server = https.createServer(settings.https,function(req,res) {app(req,res);});
// } else {
//     server = http.createServer(function(req,res) {app(req,res);});
// }
// server.setMaxListeners(0);
// server.listen(config.PORT, config.HOST, () => console.log('>> Running on ' + config.HOST + ':' + config.PORT));
//
// // Handle Errors
// process.on('uncaughtException',function(err) {
//     console.log('Uncaught Exception:');
//     if (err.stack) {
//         console.log(err.stack);
//     } else {
//         console.log(err);
//     }
// });

import {uploadRecording} from "./Recordings/Application/Services/uploadRecording";
import {Recording} from "./Recordings/Domain/Agregates/recording";
import {RecordingRepositoryMongoDB} from "./Recordings/Infrastructure/Persistence/recordingRepositoryMongoDB";
import {RecordingID} from "./Recordings/Domain/ValueObjects/recordingID";

(async () => {
    console.log('vamh a ver')
    const recording = new Recording(new RecordingID('1'), 0, 'test', 'test.com', 'ehe');
    const recordingRepository: RecordingRepositoryMongoDB = new RecordingRepositoryMongoDB();
    await recordingRepository.setup();
    uploadRecording({author: 'putonnnnnnn', title: 'puta tu'}, recordingRepository);
})();


