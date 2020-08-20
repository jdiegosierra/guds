import * as mongoose from 'mongoose'
import { connect, Document, model, Model } from 'mongoose'
import { recordingSchema } from '../Schemas/Recording'
import { Recording } from '../../Domain/Agregates/recording'

interface RecordingModel extends Recording, Document {
  _id: mongoose.Types.ObjectId
  title: string
}

export class RecordingRepositoryMongoDB {
  private readonly recordingModel: Model<RecordingModel>

  constructor(readonly uri: string) {
    this.recordingModel = model<RecordingModel>('Recording', recordingSchema)
  }

  public async connect(): Promise<void> {
    // const uri = 'mongodb://127.0.0.1:27017/local'
    try {
      await connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (e) {
      console.log(e)
    }
  }

  public disconnect(): void {
    // //TODO: CLose connection
    // const uri = 'mongodb://127.0.0.1:27017/local'
    //
    // connect(uri, { useNewUrlParser: true })
    //   .then(() => {
    //     return console.info(`Successfully connected tow ${uri}`)
    //   })
    //   .catch((error) => {
    //     console.error('Error connecting to database: ', error)
    //     return process.exit(1)
    //   })
  }

  public async save(recording: Recording): Promise<RecordingModel | undefined> {
    try {
      const recordingDocument = new this.recordingModel(recording)
      return await recordingDocument.save()
    } catch (e) {
      console.log(e)
    }
  }
}
