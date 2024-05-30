// for of

// ["", "", ""]
// [{}, {}, {}]

const myArry = [1, 2, 3, 4, 5]

for (const num of myArry) {
    //console.log(num);
}

const greeting = "Hellow world!"
for (const greet of greeting) {
    //console.log(`Each Charectar is ${greet}`);
}

// for Each loop

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((item) => {
    //console.log(item);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )