import {NextFunction, Request, Response, Router} from "express";
import {uploadRecording} from "../../../Recordings/Application/Services/uploadRecording";
import {RecordingRepositoryMongoDB} from "../../../Recordings/Infrastructure/Persistence/recordingRepositoryMongoDB";

export class RecordingsController {
    private _router: Router;

    constructor() {
        this._router = Router();
        this._router.use((req: Request, res: Response, next: NextFunction) => {
            console.log('Authenticate successfully!');
            next();
        })
        this._router.post('/api/v1/uploadRecording', this.uploadRecording)
    }

    private uploadRecording(req: Request, res: Response) {
        //Parse request
        console.log('uploadRecording');
        const repository = new RecordingRepositoryMongoDB();
        repository.setup();
        uploadRecording({}, repository);
        res.send('OKAY');
    }

    public router(): Router {
        return this._router;
    }
}
