"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const stockSchema = new mongoose_1.default.Schema({
    stock_id: { type: Number, required: true, unique: true, autoIncrement: true },
    product_id: { type: Number, required: true },
    quantity: { type: Number, required: true },
    location: { type: String, required: true },
});
const Stock = mongoose_1.default.model('Stock', stockSchema);
exports.Stock = Stock;
