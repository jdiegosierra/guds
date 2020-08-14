"use strict";
exports.__esModule = true;
exports.PlatformSDK = void 0;
var recordingRepositoryMongoDB_1 = require("../Recordings/Infrastructure/Persistence/recordingRepositoryMongoDB");
var uploadRecording_1 = require("../Recordings/Application/Services/uploadRecording");
var PlatformSDK = /** @class */ (function () {
    function PlatformSDK() {
    }
    PlatformSDK.uploadRecording = function (recording) {
        var repository = new recordingRepositoryMongoDB_1.RecordingRepositoryMongoDB();
        repository.setup();
        uploadRecording_1.uploadRecording(recording, repository);
    };
    return PlatformSDK;
}());
exports.PlatformSDK = PlatformSDK;
