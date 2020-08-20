import { RecordingRepositoryMongoDB } from '../../Infrastructure/Persistence/recordingRepositoryMongoDB'
import { Recording } from '../../Domain/Agregates/recording'

export async function uploadRecording(recording: Recording, recordingRepository: RecordingRepositoryMongoDB): Promise<void> {
  await recordingRepository.save(recording)
}
