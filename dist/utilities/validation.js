"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParamsFunc = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const validateParamsFunc = (req, res, next) => {
    const { fileName, width, height } = req.query;
    //checking their existance
    if (!fileName || !width || !height) {
        return res
            .status(400)
            .send("Error: Make sure to provide three parameters fileName, width and height");
    }
    //validate fileName
    else if (!validateFileName(fileName)) {
        return res.status(400).send("Enter a valid fileName");
    }
    //validate width and height are numbers
    else if (!parseInt(width) || !parseInt(height)) {
        return res
            .status(400)
            .send("Error: Enter numbers in width and height parameters");
    }
    next();
};
exports.validateParamsFunc = validateParamsFunc;
const validateFileName = (fileName) => {
    //check if filename exists in original folder
    const fileNamePath = path_1.default.join(__dirname, "../../assets/original", fileName + ".jpg");
    console.log("filename in validateFileName", fileName);
    console.log('path to file name', fileNamePath);
    if (fs_1.default.existsSync(fileNamePath)) {
        console.log("File name exists");
        return true;
    }
    //   console.log("file name doesn't exist");
    return false;
};
