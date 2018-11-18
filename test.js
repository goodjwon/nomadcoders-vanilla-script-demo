//alert('Im working');
console.log('Im working')



let a = 100;
console.log('let a is 100'+a);

a= 10;
console.log('change a is 10'+a);

const b = 100;
console.log(b);

// b = 200 test.js:15 Uncaught TypeError: Assignment to constant variable. 발생
console.log(b);

const daysOfweek = ["MON", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 56, true, false];  //is array

console.log(daysOfweek);

const jwonInfo = {
    name :"Jwon",
    age: 43,
    gender: "Male",
    isHandsome: true,
    idlikeis: ["coffee", "bread","tea"]
}   //is Object

console.log(jwonInfo.age);
console.log(jwonInfo.name);


jwonInfo.age = 42;
console.log(jwonInfo.age);



console.log(console);


function sayHello(name, age) {
    console.log("Hello!! ",name, "You have", age, "ages of your");

    console.log(`Hello!! ${name} You have ${age} ages of yours`);

    return `Hello!! ${name} You have ${age} ages of yours`;
}

sayHello("jwon", 15);
sayHello("Nicolas",10);


const says = sayHello("jwon", 15);
console.log(says);


const calculator = {
    plus: function (a, b) {
        return a+b;
    }
}

const cal = calculator.plus(5,5);
console.log(cal);
