interface Animal
{
    talking():void
}

class Tiger implements Animal{
    talking(): void {
        console.log('roar');
    }
}

class Cat implements Animal{
    talking(): void {
        console.log('meow');        
    }
}

class Dog implements Animal{
    talking(): void {
        console.log('Woff!')
    }
}

export {Dog, Cat, Tiger, Animal};