'use strict'

// 1. Declaration 

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position

const fruits = ['🍎', '🍌']
console.log(fruits);
console.log(fruits[0])

// 3. forEach
fruits.forEach(((frutit, index)=>{
    console.log(frutit, index)
}))

// 4. Addtion, deletion, copy
fruits.push('🍋', '🥑')
fruits.forEach(((frutit, index)=>{
    console.log(frutit, index)
}))

fruits.pop()
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.push('🍋', '🥑', '🍑')
console.log(fruits)

fruits.splice(1, 1)
console.log(fruits)

fruits.splice(1, 1, '🍇')
console.log(fruits)

const frutis2 = ['🍞','🍔']
const newFruits = fruits.concat(frutis2)


// indexof
console.log(newFruits);
console.log(newFruits.indexOf('🍇'))

//includes
console.log(newFruits.includes('🍞'))