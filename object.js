// Objects
// noe of the Javascript's data types.
// a collection of reload date and/or functionality.
// Nearly all objects in javascript are instances of Object

const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age)
}

const ellie =  {name: 'ellie', age: 4};
print(ellie)

ellie.hasJob =  true;
console.log(ellie.hasJob)

// 2. Computed properties
// key should be always string

console.log(ellie.name);  // use Normally
console.log(ellie['name']); // use Non fixed agument

function printValue(obj, key){
    console.log(obj[key])
}

printValue(ellie, 'name')
printValue(ellie, 'age')

// 3. Property value shorthand
const person1 = {name: 'bob', age: 1};
const person2 = {name: 'steve', age: 2};
const person3 = {name: 'dave', age: 3};
const person4 = new Person('jwon', 30);

console.log(person4);

// 4. 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator 
console.log('name' in person4);

// 6. for .. in vs for..of
for (key in person4){
    console.log(key)
}

const array = [1,2,3,4,5];

for(value of array){
    console.log(value)
}

// 7. Fun cloning
const user = {name: 'ellie', age: '20'}
const user2 = user;

user2.name = 'coder';
console.log(user)

const user4 = Object.assign({}, user)
console.log(user4)



