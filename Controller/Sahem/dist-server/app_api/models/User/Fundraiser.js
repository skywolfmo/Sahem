"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fundraiser = exports.FundRaiserSchema = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseTimestamp = _interopRequireDefault(require("mongoose-timestamp"));

var _PersonalInformation = require("./PersonalInformation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FundRaiserSchema = new _mongoose.Schema({
  user_id: {
    type: _mongoose["default"].Types.ObjectId,
    ref: 'User'
  },
  personal_information: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'PersonalInformation'
  },
  payment_information: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'PaymentInformation'
  },
  address: {
    type: String
  },
  projects: {
    type: [_mongoose.Schema.Types.ObjectId],
    ref: 'Project'
  }
});
exports.FundRaiserSchema = FundRaiserSchema;
FundraiserSchema.plugin(_mongooseTimestamp["default"]);
FundraiserSchema.index({
  createdAt: 1,
  updatedAt: 1
});

var Fundraiser = _mongoose["default"].model('Fundraiser', fundRaiserSchema);

exports.Fundraiser = Fundraiser;