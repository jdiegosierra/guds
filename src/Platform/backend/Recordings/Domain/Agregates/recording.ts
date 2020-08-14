// import {RecordingID} from "../ValueObjects/recordingID";
import * as mongoose from "mongoose";

enum Type {
    LOL,
    Fornite
}

export class Recording {
    public _id: mongoose.Types.ObjectId
    public title: string

    constructor(title?: string){
        this._id = new mongoose.Types.ObjectId();
        this.title = title || "AMIGO";
        //TODO: Launch domain event
        // record(
        //     new VideoCreatedDomainEvent(
        //         $id->value(), $type->value(), $title->value(), $url->value(), $courseId->value()
        //     )
        // );
    }

    // public identifier(): RecordingID
    // {
    //     return this._identifier;
    // }
    //
    // public type(): Type
    // {
    //     return this._type;
    // }
    //
    // public title(): string
    // {
    //     return this._title;
    // }
    //
    // public url(): string
    // {
    //     return this._url;
    // }
    //
    // public courseId(): string
    // {
    //     return this._courseId;
    // }
}
