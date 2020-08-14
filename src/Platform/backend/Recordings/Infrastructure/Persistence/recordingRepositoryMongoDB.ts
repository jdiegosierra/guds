import {connect, model, Document, Model} from "mongoose";
import {recordingSchema} from "../Schemas/Recording";
import {Recording} from "../../Domain/Agregates/recording";
import * as mongoose from "mongoose";

interface RecordingModel extends Recording, Document {
    _id: mongoose.Types.ObjectId
    title: string
}

export class RecordingRepositoryMongoDB {
    private readonly recordingModel: Model<RecordingModel>;

    constructor(){
        this.recordingModel = model<RecordingModel>("Recording", recordingSchema);
    };

    public async setup() {
        const uri: string = "mongodb://127.0.0.1:27017/local";

        connect(
            uri,
            { useNewUrlParser: true }
        )
            .then(() => {
                return console.info(`Successfully connected tow ${uri}`);
            })
            .catch(error => {
                console.error('Error connecting to database: ', error);
                return process.exit(1);
            });
    }

    public save(recording: Recording): void {
        const test = new Recording('Un Pelicano');
        const recordingDocument = new this.recordingModel(test);
        console.log(recordingDocument);
        recordingDocument.save((err: any, doc: RecordingModel) => {
            if (err) { console.log(err)}
            console.log(doc) // id at DB
            console.log('Aqui no deberia llegar')
        });
    }
}


