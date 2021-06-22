// var commandLinesArgs = process.argv; Process is a global object that has information of where everything was executed. Argv is a property of process that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app. 
// console.log(commandLinesArgs);

 const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);

// // const animalArray = ['dog', 'cat', 'pig'];
// // animalArray.push('cow');

// // const personObj = {
// //     name: 'Lernantino',
// //     age: 99
// // };

// // personObj.age = 100;
// // personObj.occupation = 'Developer';

// // console.log(animalArray);
// // console.log(personObj);

// const printProfileData = (profileDataArr) =>{
//    for (let i=0; i<profileDataArr.length; i++){
//        console.log(profileDataArr[i]);
//    }

//    console.log("====================");

//    //Is the same as 
//    profileDataArr.forEach((profileItem) =>{
//        console.log(profileItem)
//    });
// };

// printProfileData(profileDataArgs);

/* ES6 Arrow functions 

//Using function expresion syntax 
const addNums = function(numOne, numTwo){
    return numOne + numTwo; 
};

// Using new arrow function syntax
const addNums = (numOne, numTwo) => {
    return numOne + numTwo; 
};

Both the statements are correct. */

// const addNums = (numOne, numTwo) => numOne + numTwo;
// const sum = addNums(5,3); 

// const message = 'Hello Node!';

// if (true === true){
//     const message = 'Hello ES6';
//     let sum = 5; 
//     sum += 10; 
//     console.log(message);
//     console.log(sum);
// }

// console.log(message);
// console.log(sum);