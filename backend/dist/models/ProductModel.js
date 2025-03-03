"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true, unique: true, autoIncrement: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: String,
    image_uri: { type: String, required: true },
});
const Product = mongoose_1.default.model('Product', productSchema);
exports.Product = Product;
