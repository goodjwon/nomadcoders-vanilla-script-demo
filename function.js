
//2. 
function changeName(obj){
    obj.name = 'coder'
}
const jwon = {name: 'jwon'}
changeName(jwon)
console.log(jwon)

//3.
function showMessage(message, from = 'unknown' ) {
    console.log(`${message} by ${from}`)
}

showMessage('Hi', )


//4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i=0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg)
    }
}

printAll('dream', 'coding', 'ellie')

//5. Local scope
let globalMessage = 'global'
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello'
    }
    //console.log(childMessage)
}

printMessage()
;


//6. Return a value
function sum(a, b){
    return a+b
}

const result = sum(1, 3)
console.log(result)

//7. Early return, early exit
function upgradeUser(user){
    if(user.point <= 10 ){
        return;
    }
    // lona upgrade logic...
}

const print = function(){
    console.log('print')
}

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 1))

//2. CallBack function
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function(){
    console.log('yes!')
};

const printNo = function(){
    console.log('no!')
};

randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

// Arrow function
const simplePrint = function(){
    console.log('simplePrint');
}

const simplePrintArrow = ()=>console.log('simplePrint');
const adds = (a, b) => a+ b;
const simpleMultiply = (a, b) => {
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIEF');
})();

// Fun quiz time
// function calculate(command, a, b)
// commad: add, substract, divide, multiply, remlainder

const add = (a, b)=>{
    return a+b;
}

const substract = (a, b)=>{
    return a-b
}

const divide = (a, b)=>{
    return a /b 
}

const multiply = (a, b)=>{
    return a * b
}

const remlainder = (a, b)=>{
    return a%b
}

const calculate = (command, a, b)=>{
    
    switch(command){
        case 'add':
            return add(a, b)
        case 'substract':
            return substract(a, b)
        case 'divide':
            return  divide(a, b)
        case 'multiply':
            return multiply(a, b)
        case 'remlainder':
            return remlainder(a, b)
        default:
            throw Error('unkonwn commad')
    }
}

console.log(calculate('substract', 1, 3))