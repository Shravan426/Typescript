"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("4");
signUpUser("Shravan", "shravansuresh@gmail.com", false);
loginUser("h", "h@h.com");
// function getValue(myVal: number):boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1,2,3]
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmasg) {
    console.log(errmasg);
}
function handleError(errmasg) {
    throw new Error(errmasg);
}