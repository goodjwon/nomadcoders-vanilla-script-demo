//alert('Im working');
console.log('Im working')



let a = 100;
console.log('let a is 100'+a);

a= 10;
console.log('change a is 10'+a);

const b = 100;
console.log(b);

// b = 200 index.js:15 Uncaught TypeError: Assignment to constant variable. 발생
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


function sayHello(poteto, checken) {
    console.log("Hello!! ",poteto, "You have", checken, "ages of your");
}

sayHello("jwon", 15);
sayHello("Nicolas",10);