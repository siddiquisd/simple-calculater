#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the opraters to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional statemaent
if (asnwer.operator === "addition") {
  console.log(asnwer.firstnumber + asnwer.secondnumber);
} 
else if (asnwer.operator === "subraction") {
   console.log(asnwer.firstnumber - asnwer.secondnumber);
}
 else if (asnwer.operator === "multiplication") {
    console.log( asnwer.firstnumber * asnwer.secondnumber);
 }
  else if (asnwer.operator === "division") {
    console.log( asnwer.firstnumber / asnwer.secondnumber);
 }
  else {
      console.log("please select valid operator")
  }