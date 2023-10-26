/****
 * advance arrays 
 * slice(a,b)
 * sort()
 * map()
 * forEach()
 * filter()
 * reduce()
 * every() && some()
 * rest operator
 * 
 */

let numbers=[1,2,3,4,5]
let squared=numbers.map((num)=>num*num)
console.log(squared)


// filter
let mynumbers=[1,2,3,4,5,6]
let evenNumbers=mynumbers.filter((num)=>num % 2 ==0)
console.log(evenNumbers)
let greaterNumbers=mynumbers.filter((num)=>num > 2 && num < 6)
console.log(greaterNumbers)


// reduce
let theNumbers=[1,2,3,4,5]
let sum=theNumbers.reduce((acc,num)=>acc+num,0)
console.log(sum)

// array detructing
let cordinates=[10,20]
let [x,y]=cordinates;
console.log(`${x} ${y}`);

// spread rest operator
// spread operator
let arg1=[1,2,3,4]
let arg2=[5,6,7,8]

let myArray=[...arg1,...arg2]
console.log(myArray)

// rest operator
function mYsum(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0)
}

console.log(mYsum(1,2,3,4,5))



// sort
let sweetFruit=["mango","pawpaw","avocado",'pinapple',"lemon","apple"]
sweetFruit.sort();
console.log(sweetFruit);

let ThisNumbers=[10,5,8,2,1,7,3,8]
ThisNumbers.sort((a,b)=>a-b);
console.log(ThisNumbers)

// array advance iteration
let colors=["red","blue","yellow","green"]
colors.forEach((color)=>console.log(color))

// every and some
let ages=[25,30,18,40]
let areAllAdult=ages.every((age)=>age >=18);
let isAnyOneTeen=ages.some((age)=>age <20);
console.log(areAllAdult)
console.log(isAnyOneTeen)