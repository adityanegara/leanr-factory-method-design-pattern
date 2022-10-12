import AnimalFactory from "./AnimalFactory";

const tiger = AnimalFactory.createAnimal('tiger');
const cat = AnimalFactory.createAnimal('cat');
const dog = AnimalFactory.createAnimal('dog');
tiger?.talking();
cat?.talking();
dog?.talking();