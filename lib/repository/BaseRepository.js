"use strict";
var mongoose = require("mongoose");
var BaseRepository = (function () {
    function BaseRepository(schemaModel) {
        this._model = schemaModel;
    }
    BaseRepository.prototype.create = function (item, callback) {
        this._model.create(item, callback);
    };
    BaseRepository.prototype.retrieve = function (callback) {
        this._model.find({}, callback);
    };
    BaseRepository.prototype.update = function (_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    };
    BaseRepository.prototype.delete = function (_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, function (err) { return callback(err, null); });
    };
    BaseRepository.prototype.findById = function (_id, callback) {
        this._model.findById(_id, callback);
    };
    BaseRepository.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;
