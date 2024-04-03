"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var balance = 1000;
var setpin = 12345;
var check_pin = await inquirer_1.default.prompt([
    {
        "name": "q1",
        "message": "Enter your account pin...",
        "type": "number"
    }
]);
if (parseInt(check_pin.q1) === parseInt(setpin)) {
    console.log("Correct PIN!");
    var oper_answer = await inquirer_1.default.prompt([
        {
            "name": "q2",
            "message": "what do you want to do?",
            "type": "list",
            "choices": ["Withdraw", "Check_Balance"]
        }
    ]);
    if (oper_answer.q2 === "Withdraw") {
        var ammount = await inquirer_1.default.prompt([
            {
                "amount": "q3",
                "message": "Enter Your Withdraw ammount?",
                "type": "number"
            }
        ]);
        balance -= oper_answer.q3;
        console.log("Your new balance is ".concat(balance));
    }
    else if (oper_answer.q2 === "Check_Balance") {
        console.log("Your current balance is ".concat(balance));
    }
    else {
        console.log("Incorrect PIN!");
    }
}
