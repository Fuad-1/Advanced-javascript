//undefined also say negative or falsy**
//1 variable without value = undefined
let pakhi;
console.log("1: " + pakhi);


//2 function explicit return na krle = undefined
//write return without any return value = undefined
function add(num1, num2){
    console.log(num1 + num2);
}
const result = add(13, 82);
console.log("2: " +result);


//3 right parameter value not passed
function adds(num1, num2){
    console.log(num1 + num2);
}
const result1 = adds(13);
console.log("3: " +result1);


//4 Object -> call others object properties
const premik = {
    name: "smart D",
    phone: 012566
}
console.log("4: " + premik.gf);

//variable defined but value is undefined(not accepted to that write)
let fun = undefined;
console.log("5: " + fun);

let ages = [2, 5, 3];
console.log("6: " + ages[11]);

//null = not existence and it (set explicitly)
