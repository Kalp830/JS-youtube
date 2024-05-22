let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.getDate());
console.log(myDate.toLocaleString('en-IN'));
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toTimeString());
console.log(myDate.getMilliseconds());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date("01-04-2024");
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

let myTimeStemp = Date.now();
console.log(myTimeStemp);
console.log(myCreatedDate.getTime());


