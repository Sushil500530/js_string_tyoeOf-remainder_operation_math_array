 console.log(25252)
console.log("sushil node")
let a = 25;
let b = 28;
let summation = a + b ;
console.log(summation) ;
function add(j){
    n=10;
    let nam ='it is the main point of score'
    for(let i = 0; i<=n; i++) {
        console.log([nam] + [i])
    }
}
add('j');


// // array practice in this time 
let numBer = [2,3,4,5,6,7,8,9,10];
for(let i = 0; i<=numBer.length; i++){
  console.log(numBer[i])
}
console.log(numBer)

//forEach loop
    let number = [2,3,4,5,6,7,8,9,10]
    number.forEach((element) =>{
    console.log(element**3)
    })

// Array.from (access with all element of array)
let Name = "SUSHIL"
let arr = Array.from(Name);

console.log(Name)
console.log(arr)

// for....of
let num = [2,3,4,5,6,7,8,9,10];
for(let i of num){
  console.log(i)
}
// // for i in (return array length)
for (let item in num){
  console.log(num[item])
}

var firstName = 'SUSHIL ';
var lastName = 'ROY';
var isHappy = true;
var name = firstName +lastName;
console.log(name)
console.log(isHappy)

// console.log(typeof firstName)
var isHappy = true;
var unHappy = false;
console.log(typeof isHappy)
console.log( unHappy)