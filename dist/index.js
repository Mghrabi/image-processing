"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const validation_1 = require("./utilities/validation");
// app.set("view engine", "pug");
// console.log(path.join(__dirname)),
(0, sharp_1.default)(path_1.default.join(__dirname, "../assets/original/ahmed.jpg"))
    .resize(200, 100)
    .toFile(path_1.default.join(__dirname, "../assets/thumb/ahmed100100.jpg"), (err, info) => {
    console.log(err);
});
const app = (0, express_1.default)();
app.get("/", validation_1.validateParamsFunc, (req, res, next) => {
    // next();
    res.send('success');
    // res.sendFile(path.join(__dirname, "../assets/thumb/ahmed100100.jpg"));
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log("server is on port ", PORT);
});
