import { Recording } from '../Recordings/Domain/Agregates/recording'
import { RecordingRepositoryMongoDB } from '../Recordings/Infrastructure/Persistence/recordingRepositoryMongoDB'
import { uploadRecording } from '../Recordings/Application/Services/uploadRecording'

export class PlatformSDK {
  private readonly repository: RecordingRepositoryMongoDB

  constructor() {
    this.repository = new RecordingRepositoryMongoDB('mongodb://127.0.0.1:27017/local')
    this.repository.connect().then()
  }
  public async uploadRecording(recording: Recording): Promise<void> {
    await uploadRecording(recording, this.repository)
  }
}
