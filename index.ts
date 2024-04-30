#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgGreenBright.bold("\n*****WORD-COUNTER*****\n"));

const answer:
 {Sentence : string} 
= await inquirer.prompt([
    
    { name:"Sentence",
      message:(chalk.yellow("Enter your sentence here:")),
      type:"input", }
]);

// Split method is a separator and give the value in array.
// Trim method remove the white spaces from the both end of the string.
// Filter method is remove the white spaces between the array.

let words = answer.Sentence.split(" ").filter(item => item. trim() !== "" && "\t" && "\n"  );
let letter= answer.Sentence.split("").filter(item => item. trim() !== "");
console.log( words);
console.log(letter);
console.log(chalk.bgBlue(`The words in your sentence are: ${words.length}.`));
console.log(chalk.bgRed(`The letters in your sentence are: ${letter.length}.`));
