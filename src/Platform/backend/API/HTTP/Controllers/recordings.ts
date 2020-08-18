import {Request, Response, Router} from "express";
import {uploadRecording} from "../../../Recordings/Application/Services/uploadRecording";
import {PlatformSDK} from "../../../SDK";
import {Recording} from "../../../Recordings/Domain/Agregates/recording";
import { Multer } from 'multer';
import multer = require('multer');

const diskStorage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '/tmp/my-uploads');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}`);
    }
});

const upload: Multer = multer({ storage: diskStorage });

// const upload = multer({
//     dest: 'uploads/',
//     fileFilter: (req, file, cb) => {
//         cb(null, false);
//         cb(null, true);
//         cb(new Error(`I don't have a clue!`));
//     },
// });

export class RecordingsController {
    private _router: Router;

    constructor() {
        this._router = Router();
        this._router.post('/api/v1/uploadRecording', upload.single('video'), RecordingsController.uploadRecording)
    }

    private static uploadRecording(req: Request, res: Response) {
        console.info('uploadRecording');
        // Create recording DTO
        const recording = new Recording(req.file.filename);
        PlatformSDK.uploadRecording(recording);
        res.send('OKAY');
    }

    public router(): Router {
        return this._router;
    }
}
