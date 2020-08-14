import {Schema} from "mongoose";

export const recordingSchema: Schema = new Schema({
    title: { type: String, required: true }
});
// private _identifier: RecordingID, private _type: Type, private _title: string, private _url: string, private _courseId: string
