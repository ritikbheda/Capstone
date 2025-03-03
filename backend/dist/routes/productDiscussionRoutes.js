"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDicussionRoute = void 0;
const express_1 = __importDefault(require("express"));
const DiscussionModel_1 = require("../models/DiscussionModel");
const router = express_1.default.Router();
exports.productDicussionRoute = router;
// Create a new product message
router.post('/products/:productId/messages/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, userId } = req.params;
        const { message } = req.body;
        // Log the received data for debugging
        console.log('Received Data:', { productId, userId, message });
        const productMessage = new DiscussionModel_1.Discussions({
            product_id: productId,
            user_id: userId,
            message,
        });
        yield productMessage.save();
        // Log success message for debugging
        console.log('Message saved successfully:', productMessage);
        res.status(201).json(productMessage);
    }
    catch (error) {
        console.error('Error:', error);
        // Send a more specific error response
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}));
// Retrieve all messages for a specific product
router.get('/products/:productId/messages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const messages = yield DiscussionModel_1.Discussions.find({ product_id: productId }).sort({ createdAt: 'asc' });
        res.status(200).json(messages);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));
