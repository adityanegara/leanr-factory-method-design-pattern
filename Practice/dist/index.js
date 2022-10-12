"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnimalFactory_1 = __importDefault(require("./AnimalFactory"));
const tiger = AnimalFactory_1.default.createAnimal('tiger');
const cat = AnimalFactory_1.default.createAnimal('cat');
const dog = AnimalFactory_1.default.createAnimal('dog');
tiger === null || tiger === void 0 ? void 0 : tiger.talking();
cat === null || cat === void 0 ? void 0 : cat.talking();
dog === null || dog === void 0 ? void 0 : dog.talking();
