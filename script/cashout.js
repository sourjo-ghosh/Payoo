document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        // get the agent number and validate it 
        const agentNumberInput = document.getElementById('cashout-number');
        const agentNumber = agentNumberInput.value;
        console.log(agentNumber)
        if(agentNumber.length != 11){
            alert("Wrong Agent Number")
            agentNumberInput.style.borderColor = "red";
            return;
        }
        // get the amount value 
        const cashOutInput = document.getElementById('cashout-amout')
        const cashoutAmount = cashOutInput.value;
        console.log(cashoutAmount)
        // get the balance info
        const balanceInfo = document.getElementById('balance');
        const currentBalance = balanceInfo.innerText;
        console.log(currentBalance);
        // Update the new balance 
        const newBalance = Number(currentBalance) - Number(cashoutAmount);
        if (newBalance < 0) {
            alert("Invalid Amount")
            const amount = document.getElementById('cashout-amout')
            amount.style.borderColor = "red";
            amount.style.color = "red";
            return;
        }
        console.log("New Balance ", newBalance)
        const cashOutPinInput = document.getElementById("cashout-pin");
        const cashoutPin = cashOutPinInput.value;
        if (cashoutPin === "1234") {
            alert('Cash Out Successful!')
            
        } else {
            alert('Wrong Pin Number')
            const amount = document.getElementById('cashout-pin')
            amount.style.borderColor = "red";
            amount.value = '';
            return;
        }
        balanceInfo.innerText = newBalance;

    })