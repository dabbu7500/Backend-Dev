// console.log("hello world");

// const hello1=require('./hello1');

// console.log(hello1.add(5,10));

const {add,sub,multi,div}=require('./hello1');
console.log(add(10,5));
console.log(sub(10,5));
console.log(multi(10,5));
console.log(div(10,5));

// to take input from user

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("enter first num ",)