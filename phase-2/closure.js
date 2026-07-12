//  closure :-  ek function jo apne bahar ke variable ko yaad rkhta hai - chahe outer function bhi khtm ho jaaye

function outer(){
    const name = 'himanshu';

    function inner(){
        // console.log(name)
    }
    return inner;
}
// const myFunc = outer()
// myFunc();

// Closure ek aisa function hai jo apne outer scope ke variables ko yaad rakhta hai — chahe outer function execute hoke khatam bhi ho jaaye.
// Jab bhi ek function doosre function ke andar define hota hai — inner function ek closure bana leta hai aur bahar ke variables ko apne saath pack kar leta hai.
// Real world mein closures data privacy, factory functions, aur middleware banane mein use hote hain. Jaise agar mujhe ek counter banana ho jo apni state yaad rakhe — toh closure use karunga.

// practice
function makeMultiplayer(a){

    function player(b){
        return (a*b);
    }
    return player;
}
const double = makeMultiplayer(2)
const triple = makeMultiplayer(3)

console.log(double(4))   
console.log(triple(4))   