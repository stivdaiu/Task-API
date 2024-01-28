"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.post('/findNumbers', (req, res) => {
    const { minNumber, maxNumber, feature } = req.body;
    // Input Validationts
    if (!Number.isInteger(minNumber) || minNumber <= 0) {
        return res.status(400).json({ error: 'minNumber should be a positive integer greater than 0' });
    }
    if (!Number.isInteger(maxNumber) || maxNumber <= minNumber) {
        return res.status(400).json({ error: 'maxNumber should be a positive integer greater than minNumber' });
    }
    if (!Array.isArray(feature) || feature.length === 0 || !feature.every(f => ['palindrome', 'prime'].includes(f))) {
        return res.status(400).json({ error: 'feature should be a non-empty array containing only "palindrome" and/or "prime"' });
    }
    const startTime = process.hrtime.bigint();
    const data = (0, utils_1.findNumbers)(minNumber, maxNumber, feature);
    const endTime = process.hrtime.bigint();
    const timeOfExecution = parseFloat((Number(endTime - startTime) / 1e6).toFixed(2)); // in milliseconds
    res.json({ data, timeOfExecution });
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
