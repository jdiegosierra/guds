import {Request, Response, Router} from "express";
import {uploadRecording} from "../../../Recordings/Application/Services/uploadRecording";
import {PlatformSDK} from "../../../SDK";
import {Recording} from "../../../Recordings/Domain/Agregates/recording";
import { Multer } from 'multer';
import multer = require('multer');
import {Controller} from "./Controller";

const diskStorage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './tmp/');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}`);
    }
});

const upload: Multer = multer({ storage: diskStorage });


export class RecordingsController implements Controller {
    private _router: Router;

    constructor() {
        this._router = Router();
        this._router.post('/api/v1/recording', upload.single('video'), RecordingsController.uploadRecording);
        this._router.get('/api/v1/recording', RecordingsController.getRecording);
    }

    private static uploadRecording(req: Request, res: Response) {
        console.info('uploadRecording');
        // Create recording DTO
        // const recording = new Recording(req.file.filename);
        // PlatformSDK.uploadRecording(recording);
        res.send('OKAY');
    }

    private static getRecording(req: Request, res: Response) {
        console.info('uploadRecording');
        // Create recording DTO
        // const recording = new Recording(req.file.filename);
        // PlatformSDK.uploadRecording(recording);
        res.sendFile('/home/JuanDiego/Projects/github/guds/tmp/video-1597862944213');
    }

    public router(): Router {
        return this._router;
    }
}
