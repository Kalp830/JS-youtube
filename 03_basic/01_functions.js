
function multiNames(){
    // console.log("T");
    // console.log("R");
    // console.log("P");
    // console.log("S");
    // console.log("N");
    // console.log("Q");
}

multiNames();

function myNumber(num1, num2){
    console.log(num1 + num2);
}
// myNumber(12,2);


function myNumber(num1, num2){
    return num1 + num2
}
const result = myNumber(12,2)
// console.log("Result", result);


function userNameLogin(username){
    return `Print the ${username} who want's to loin`;
}
// console.log(userNameLogin("Kalpesh"))


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...number){
    return number;
}
// console.log(calculateCartPrice(200, 331, 500,600));



// Pass the object data through function.
const user = {
    userName: "Kalptaru",
    age:36

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.age}`);
}

handleObject(user);

// Pass the array data through function.

const myArry = [200,300,900,400];

function returnArrayValue(getArry){
    return getArry[2]
}
console.log(returnArrayValue(myArry));
console.log(returnArrayValue([100,700,100,500]));