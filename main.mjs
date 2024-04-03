import inquirer from "inquirer";
async function main() {
    let setpin = await inquirer.prompt([
        {
            "name": "pin",
            "message": "Enter Pin to Setup your Account...",
            "type": "number"
        }
    ]);
    let balance = await inquirer.prompt([
        {
            "name": "debit_amount",
            "message": "Enter Amount do you want to debit in the account Balance? ",
            "type": "number"
        }
    ]);
    let check_pin = await inquirer.prompt([
        {
            "name": "q1",
            "message": "Enter your account pin to SignIn...",
            "type": "number"
        }
    ]);
    if (parseInt(check_pin.q1) === parseInt(setpin.pin)) {
        console.log("Correct PIN!");
        let oper_answer = await inquirer.prompt([
            {
                "name": "q2",
                "message": "what do you want to do?",
                "type": "list",
                "choices": ["Withdraw", "Check_Balance"]
            }
        ]);
        if (oper_answer.q2 === "Withdraw") {
            let amount = await inquirer.prompt([
                {
                    "name": "amount",
                    "message": "Enter Your Withdraw ammount?",
                    "type": "number"
                }
            ]);
            //make the transaction and update the balance
            balance.debit_amount -= parseInt(amount.amount);
            console.log(`Your new balance is ${balance.debit_amount}`);
        }
        else if (oper_answer.q2 === "Check_Balance") {
            console.log(`Your current balance is ${balance.debit_amount}`);
        }
        ;
    }
    else {
        console.log("Incorrect PIN!");
    }
}
main();
