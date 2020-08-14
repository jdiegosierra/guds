import {Request, Response, Router} from "express";
import {uploadRecording} from "../../../Recordings/Application/Services/uploadRecording";
import {PlatformSDK} from "../../../SDK";
import {Recording} from "../../../Recordings/Domain/Agregates/recording";

export class RecordingsController {
    private _router: Router;

    constructor() {
        this._router = Router();
        this._router.post('/api/v1/uploadRecording', this.uploadRecording)
    }

    private uploadRecording(req: Request, res: Response) {
        console.log('uploadRecording');
        // Create recording DTO
        const recording = new Recording();
        PlatformSDK.uploadRecording(recording);
        res.send('OKAY');
    }

    public router(): Router {
        return this._router;
    }
}
