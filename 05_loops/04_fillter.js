const myNumber = [1,2,3,4,5,6,7];

const newNums =  myNumber.filter((num)=> {
    return num > 4
});
console.log(newNums);