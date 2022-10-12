import { Dog, Cat, Tiger, Animal} from "./Animal";

class AnimalFactory{
    static createAnimal(type: string):Animal|null{
        switch(type){
            case 'tiger':
                return new Tiger();
            case 'cat':
                return new Cat();
            case 'dog':
                return new Dog();
            default:
                return null;
        }
    }
}

export default AnimalFactory;