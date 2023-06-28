// class Car  {
//     wheels = '4';
//     drive = function (){
//         console.log('this is a Class Car')
//     }
// }

// let Toyota = new Car;
// console.log(Toyota.wheels);
// Toyota.drive();

class Animal {
    constructor(name) {
        this.name = name ;
    }
    run() {
        console.log(`${this.name} : is running ....`)
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} : Woof Woof ... `)
    }
}

let Milo = new Dog('Milo');
Milo.run();
Milo.bark();

class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
    meow() {
        console.log(`${this.name} : meow meow ... `)
    }

}

let cat = new Cat("Pusi", "blue");
cat.meow();