// ==  means just check the value (convert the type > convert same type value > check same or not)
// ===  means check the value and dataType (if type not matched then they're not equal)
const first = 2; //1, 0
const second = '2'; //true, false
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
