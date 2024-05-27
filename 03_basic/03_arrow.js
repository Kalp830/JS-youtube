const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
//++++++++++ Arrow Function +++++++++++++++
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(5,6));

//+++++++ Implicit Arrrow Fucntion +++++++
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"Kalpesh"});
console.log(addTwo(5,6));