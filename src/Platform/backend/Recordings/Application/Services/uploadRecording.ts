import { RecordingRepositoryMongoDB } from '../../Infrastructure/Persistence/recordingRepositoryMongoDB'
import { Recording } from '../../Domain/Agregates/recording'

export function uploadRecording(
  recording: Recording,
  recordingRepository: RecordingRepositoryMongoDB
) {
  recordingRepository.save(recording)
}
