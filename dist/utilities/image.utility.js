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
exports.checkOrCreateImageFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const checkOrCreateImageFile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, width, height } = req.query;
    const thumbPath = path_1.default.join(__dirname, "../../assets/thumb", fileName +
        parseInt(width) +
        parseInt(height) +
        ".jpg");
    // console.log("thumbPath", thumbPath);
    //check if file exists
    if (fs_1.default.existsSync(thumbPath)) {
        return next();
    }
    //create new file version
    try {
        fs_1.default.appendFileSync(thumbPath, "");
        yield (0, sharp_1.default)(path_1.default.join(__dirname, '../../assets/original', fileName + ".jpg"))
            .resize(parseInt(width), parseInt(height))
            .toFile(thumbPath);
        return next();
    }
    catch (err) {
        // console.log("err while image processing");
        return res.status(500).send("Error while processing the iamge");
    }
});
exports.checkOrCreateImageFile = checkOrCreateImageFile;
