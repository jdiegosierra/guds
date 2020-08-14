export class RecordingID {
    constructor(private _id: string) {
        console.log('holi')
    }

    public id(): string {
        return this._id;
    }
}
