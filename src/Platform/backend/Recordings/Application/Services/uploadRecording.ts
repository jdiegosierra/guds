import {Recording} from "../../../Recordings/Domain/Agregates/recording";
import {RecordingRepositoryMongoDB} from "../../Infrastructure/Persistence/recordingRepositoryMongoDB";


export function uploadRecording(recording: any, recordingRepository: RecordingRepositoryMongoDB) {
    console.log('comenamos')
    recordingRepository.save({author: 'putonnnn', title: 'puta tu'});
}
