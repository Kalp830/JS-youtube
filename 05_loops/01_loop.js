// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

let myArry = ["Honda", "Hero", "Bajaj", "TVS"];
//console.log(myArry.length);
for (let i = 0; i < myArry.length; i++) {
    const element = myArry[i];
    //console.log(element)
}

// Break and continue

for (let i = 1; i <= 20; i++) {
    if(i === 5){
     // console.log(`Detected 5`);
      break
    }
   // console.log(`value of i is ${i}`)
    
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
      console.log(`Detected 5`);
      continue
    }
    console.log(`value of i is ${i}`)
    
}
