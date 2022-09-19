"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const imageUtility_1 = require("./utilities/imageUtility");
const validationUtility_1 = require("./utilities/validationUtility");
const app = (0, express_1.default)();
app.get("/", validationUtility_1.validateParamsFunc, imageUtility_1.checkOrCreateImageFile, (req, res) => {
    const { fileName, width, height } = req.query;
    const thumbPath = path_1.default.join(__dirname, "../assets/thumb/", fileName +
        parseInt(width) +
        parseInt(height) +
        ".jpg");
    // console.log("done");
    return res.status(200).sendFile(thumbPath);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log("server is on port ", PORT);
});
exports.default = app;
