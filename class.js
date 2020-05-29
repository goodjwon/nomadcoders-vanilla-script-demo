'use strict'

// 1. Class declarations
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

}

const user1 = new Person('Steve', 'Job', -1)
console.log(user1.age)


// 5 Inheritance
// a way for one class to extend another class.

class Shape{
    constructor(width, height, color){
        this.width = width
        this.height = height
        this.color = color
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        console.log('삼각형')
    }
    getAera(){
        return(this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getAera())


// 6. Class check instanceOf
console.log(rectangle instanceof Rectangle)