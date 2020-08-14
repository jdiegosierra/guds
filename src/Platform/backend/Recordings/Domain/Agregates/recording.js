"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recording = void 0;
var Type;
(function (Type) {
    Type[Type["LOL"] = 0] = "LOL";
    Type[Type["Fornite"] = 1] = "Fornite";
})(Type || (Type = {}));
var Recording = /** @class */ (function () {
    function Recording(_id, _type, _title, _url, _courseId) {
        this._id = _id;
        this._type = _type;
        this._title = _title;
        this._url = _url;
        this._courseId = _courseId;
        //TODO: Launch domain event
        // record(
        //     new VideoCreatedDomainEvent(
        //         $id->value(), $type->value(), $title->value(), $url->value(), $courseId->value()
        //     )
        // );
    }
    Recording.prototype.id = function () {
        return this._id;
    };
    Recording.prototype.type = function () {
        return this._type;
    };
    Recording.prototype.title = function () {
        return this._title;
    };
    Recording.prototype.url = function () {
        return this._url;
    };
    Recording.prototype.courseId = function () {
        return this._courseId;
    };
    return Recording;
}());
exports.Recording = Recording;
