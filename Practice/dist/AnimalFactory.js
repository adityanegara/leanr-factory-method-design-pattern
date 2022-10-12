"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class AnimalFactory {
    static createAnimal(type) {
        switch (type) {
            case 'tiger':
                return new Animal_1.Tiger();
            case 'cat':
                return new Animal_1.Cat();
            case 'dog':
                return new Animal_1.Dog();
            default:
                return null;
        }
    }
}
exports.default = AnimalFactory;
