import mongoose from 'mongoose'

export class Recording {
  public _id: mongoose.Types.ObjectId

  constructor(readonly title: string) {
    this._id = new mongoose.Types.ObjectId()

    //TODO: Launch domain event
    // record(
    //     new VideoCreatedDomainEvent(
    //         $id->value(), $type->value(), $title->value(), $url->value(), $courseId->value()
    //     )
    // );
  }
}
