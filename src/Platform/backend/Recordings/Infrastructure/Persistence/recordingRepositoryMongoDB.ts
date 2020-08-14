import {Recording} from "../../Domain/Agregates/recording";
import {connect, model, Document, Schema} from "mongoose";

export class RecordingRepositoryMongoDB {
    private recording: any;

    constructor(){
        console.log('tus muertos')
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

        interface Recording extends Document {
            title: string;
            author: number;
        }

        const recordingSchema: Schema = new Schema({
            title: { type: String, required: true },
            author: { type: String, required: true }
        });

        this.recording = model<Recording>("Recording", recordingSchema);
    }

    public save(recording: any): void {
        const test = new this.recording({author: 'putonnn', title: 'puta tu'})
        test.save().then(
            console.log('ALLLRIGHTH')
        );
    }
}


