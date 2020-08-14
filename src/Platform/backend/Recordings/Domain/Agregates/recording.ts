import {RecordingID} from "../ValueObjects/recordingID";

enum Type {
    LOL,
    Fornite
}

export class Recording {
    constructor(private _id: RecordingID, private _type: Type, private _title: string, private _url: string, private _courseId: string){
        //TODO: Launch domain event
        // record(
        //     new VideoCreatedDomainEvent(
        //         $id->value(), $type->value(), $title->value(), $url->value(), $courseId->value()
        //     )
        // );
    }

    public id(): RecordingID
    {
        return this._id;
    }

    public type(): Type
    {
        return this._type;
    }

    public title(): string
    {
        return this._title;
    }

    public url(): string
    {
        return this._url;
    }

    public courseId(): string
    {
        return this._courseId;
    }
}
