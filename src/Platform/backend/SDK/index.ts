import { Recording } from '../Recordings/Domain/Agregates/recording'
import { RecordingRepositoryMongoDB } from '../Recordings/Infrastructure/Persistence/recordingRepositoryMongoDB'
import { uploadRecording } from '../Recordings/Application/Services/uploadRecording'

export class PlatformSDK {
  public static uploadRecording(recording: Recording) {
    const repository = new RecordingRepositoryMongoDB()
    repository.setup()
    uploadRecording(recording, repository)
  }
}
