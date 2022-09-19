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
const path_1 = __importDefault(require("path"));
const imageUtility_1 = require("../../utilities/imageUtility");
describe("image processing test", () => {
    it("createImageFile func should return true", () => __awaiter(void 0, void 0, void 0, function* () {
        const fileName = "fjord";
        const width = "120";
        const height = "120";
        const thumbPath = path_1.default.join(__dirname, "../../../src/tests/assetsSpec/thumb", fileName +
            parseInt(width) +
            parseInt(height) +
            ".jpg");
        // console.log('thumbPath before', thumbPath)
        const created = yield (0, imageUtility_1.createImageFile)(thumbPath, fileName, width, height);
        expect(created).toEqual(true);
    }));
});
