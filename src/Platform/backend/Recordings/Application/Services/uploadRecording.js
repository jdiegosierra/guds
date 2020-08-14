"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRecording = void 0;
function uploadRecording(recording, recordingRepository) {
    console.log('comenamos');
    recordingRepository.save(recording);
}
exports.uploadRecording = uploadRecording;
