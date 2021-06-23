// // var commandLinesArgs = process.argv; Process is a global object that has information of where everything was executed. Argv is a property of process that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app. 
// // console.log(commandLinesArgs);

//   const name = profileDataArgs[0];
//   const github = profileDataArgs[1];

// // // console.log(profileDataArgs);

// // // const animalArray = ['dog', 'cat', 'pig'];
// // // animalArray.push('cow');

// // // const personObj = {
// // //     name: 'Lernantino',
// // //     age: 99
// // // };

// // // personObj.age = 100;
// // // personObj.occupation = 'Developer';

// // // console.log(animalArray);
// // // console.log(personObj);

// // const printProfileData = (profileDataArr) =>{
// //    for (let i=0; i<profileDataArr.length; i++){
// //        console.log(profileDataArr[i]);
// //    }

// //    console.log("====================");

// //    //Is the same as 
// //    profileDataArr.forEach((profileItem) =>{
// //        console.log(profileItem)
// //    });
// // };

// // printProfileData(profileDataArgs);

// /* ES6 Arrow functions 

// //Using function expresion syntax 
// const addNums = function(numOne, numTwo){
//     return numOne + numTwo; 
// };

// // Using new arrow function syntax
// const addNums = (numOne, numTwo) => {
//     return numOne + numTwo; 
// };

// Both the statements are correct. */

// // const addNums = (numOne, numTwo) => numOne + numTwo;
// // const sum = addNums(5,3); 

// // const message = 'Hello Node!';

// // if (true === true){
// //     const message = 'Hello ES6';
// //     let sum = 5; 
// //     sum += 10; 
// //     console.log(message);
// //     console.log(sum);
// // }

// // console.log(message);
// // console.log(sum);


// Template Literals: Used with a backtick, we can interpolate the variable with the ${<variable>} syntax. 
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));

//Multi-line Strings: To do this, we simply enter a keyboard return in the template literal wherever we want a line break to occur. 

// const generatePage = (userName, githubName) => {
//     return `
//     Name: ${userName}
//     GitHub: ${githubName}
//     `;
// };

// console.log(name, github);
// console.log(generatePage(name, github));

//Making the HTML string:
const inquirer = require('inquirer'); 
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', pageHTML, err =>{
//     if (err) throw (err); 

//     console.log('Portfolio Complete! Check out index.html to see the output')
// });

inquirer.prompt([
    {
        type: 'input',
        name: 'name', 
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));


