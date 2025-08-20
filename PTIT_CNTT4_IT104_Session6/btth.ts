// Tao interface Animal
interface IAnimal{
    //Thuoc tinh
    name: string,
    age: number,
    category: string|number|boolean, 
    //phuong thuc
    sound(): string,
    getDetails(): string,
    move(): string,
    feed(): string,
}
//Tao abstract Animal
abstract class Animal implements IAnimal{
    name: string;
    age: number;
    category: string|number;
    constructor(name: string, age: number, category: string|number|boolean) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound(): string{
        return``
    }
    getDetails(): string{
        return ``
    }
    move(): string{
        return``
    }
    feed(): string{
        return``
    }
}
// tao cac class con ke thua class Animal
class Mammal extends Animal{
    furColor: string;
    constructor(name: string, age: number, furColor: string) {
        super(name,age, furColor);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move(): string {
        return``
    }
}
class Bird extends Animal{
    wingSpan: number;
    constructor(name: string, age: number, wingSpan: number) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move(): string {
        return``
    }
}
class Reptile extends Animal {
    venomous: boolean;
    constructor(name: string, age: number, venomous : boolean) {
        super(name, age, venomous );
        this.name = name;
        this.age = age;
        this.venomous  = venomous ;
    }
    move(): string {
        return ``
    }
}
// Tinh da hinh 
const animal: Animal[] = [
    new Bird("Bird", 2, 5),
    new Reptile("Ran", 2, true),
    new Mammal("Blue", 2,"mau xanh"),
];
animal.forEach(iteam => {
    console.log(iteam.move);
})