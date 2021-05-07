//0 , "", undefined, null, NaN, false = falsy value
//'0', " ", [], {},  = truthy value
//any digit without 0 
const age = 4;
//const age = 0;
if(age){
    console.log("condition is true");
}
else{
     console.log("condition is false");
    }

// for string
const names = "solaiman khan" ;
//const names = "" ;
if(names){
    console.log("condition is true");
}
else{
        console.log("condition is false");
    }

//undefined value js think its false   
let name;
console.log(name);

let namess = NaN;
console.log(namess);
