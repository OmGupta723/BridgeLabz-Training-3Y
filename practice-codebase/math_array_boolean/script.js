// let a=4.5;
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.pow(2,3));



// let num=Math.random();   //range is 0.0 to 0.999
// let num=Math.floor(Math.random()*10);   //range is 0 to 9
// console.log(`random num ${num}`);

// let num=Math.floor(Math.random()*100)+1;   //range is 1 to 100
// console.log(`random num ${num}`);



// let min=100;
// let max=600;

// let num=Math.floor(Math.random()*(max-min))+min;

// console.log(num);



// Task 2 : generate 4-digit otp
// function generateOtp(){
//     let min=1000;
//     let max=9999;
//     let num=Math.floor(Math.random()*(max-min))+min;
//     console.log(num);
// }


// generateOtp();




// Arrays

// let arr=["hello","hi",5,true];

// for(let x of arr){
//     console.log(x);
// }


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let ans="";
// for(let i=0;i<arr.length;i++){
//     ans+=arr[i]+" ";
// }
// console.log(ans);


// console.log(arr.slice(1,3));
// arr.unshift("apple");
// console.log(arr);
// arr.push("mango");  //append at last 
// console.log(arr);

// console.log(arr.indexOf("hi"));


// task 3: generate random hex-color value

// background-color:#000000;
// background-color:#ffffff;

// function generateHexColor(){
//     let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
//     let color="#";
//     for(let i=0;i<6;i++){
//         let num=Math.floor(Math.random()*16);
//         color+=hex[num];
//     }
//     console.log(color);
//     document.body.style.background=color;
// }

// generateHexColor();




// task 3: random password generator

// boolean


// type conversion
//  implict conversion :

// let result="Hello"+5;
// console.log(result);
// console.log(typeof result);



// let result=10-"4";
// console.log(result);
// console.log(typeof result);



// console.log(true + 3);
// console.log(false +5);


// let result="Value is "+ true;
// console.log(result);
// console.log(typeof result);


// Explicit conversion :


// let str="123";
// let num1=Number(str);
// console.log(num1, typeof num1);


// let str=123;
// let num1=String(str);
// console.log(num1, typeof num1);


// let str="5.67";
// let num1=parseFloat(str);
// console.log(num1, typeof num1);


// let bool1=true;
// let num1=Number(bool1);
// console.log(num1, typeof num1);

// function Declaration,function expression,function arrow 



// let a=10;
// let b=20;


// Function Declaration
// function sum(){
//     return a+b;
// }
// console.log(sum());



// Function Expression
// const sum = function() {
//     return a + b;
// };

// console.log(sum());


// Arrow Function
// let sum = () => a + b;

// console.log(sum());



// Higher Order Function - Function which accepts another function 
// fun - callback function
// let add = function (a, b){
//     return a + b;
// }

// let mul = function (a, b){
//     return a * b;
// }

// function calculate(a, b, callback){
//     return callback(a, b);
// }

// let sum = calculate(10, 20, add)
// let multi = calculate(10, 20, mul)
// console.log(sum);
// console.log(multi);


// let arr = [1 , 2, 3, 4, 5, 6];

// let fun = x => {
//     return x * 2;
// }
// let res = arr.map(fun);

// console.log(res);


// let res = arr.map((x)=> {
//     return x * 2;
// });
// console.log(res);


// let arr1=["Apple","mango","apple","bananna","apple"];

// let result=arr1.filter(function(item){
    // return item.toLowerCase()!="apple";
// });

// console.log(result);




// objects

// let student={
//     id:"101",
//     name:"rahul",
//     marks:90,
//     display:()=>
// }

// let username=student["name"];
// console.log(username);




// let studentArr=
// let  studentNames=studentArr.map((x)=>{
//     return x.name;
// })