function startFan(first) {
    console.log('start fan', first);
}

startFan('warner')



function bringSingara(taka,sed) {
    console.log(taka,sed);
}

bringSingara(100, 50)



function bringSingara(taka) {
    var singaraQuantity = taka / 10;
    return singaraQuantity
}

var result = bringSingara(2000);
console.log(result);

function addTwoNumber(first,second) {
    var total = first + second;
    return total;

}

var result = addTwoNumber(101,303)

var result2 = addTwoNumber(5,7)

console.log(result);
console.log(result2);


function multiply(number1, number2) {
    var multiplyResult = number1 * number2;
    return multiplyResult;
}

var folafol = multiply(170, 58)
console.log(folafol);



var person = {
    name: 'man',
    age: 22,
    dress:'green'
}

console.log(person);



var student = {
    name: 'Ronaldo',
    age: 38,
    primary: 'Noakhali School',
    isRich: true ,
    isClean: true  
}

var iccAge = student.age;
console.log(iccAge);

var color = 'red';

if(color == 'green'){
    console.log('color matched');
}
else if(color == 'gray'){
    console.log('color matched');
}
else if(color == 'blue'){
    console.log('color matched');
}
else if(color == 'red'){
    console.log('color matched');
}
else {
    console.log('no color matched');
}


var i = 0;
while (i <= 10) {
    console.log(i);
    if (i == 5) {
        break
    }
    i++
}


var numbers = [12, 44, 5, 88, 99, 90, 7, 23, 55]
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    console.log(number);
    if (number == 90){
        break
    }
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    
    if (number > 90){
        continue 
    }
    console.log(number);
}

}
