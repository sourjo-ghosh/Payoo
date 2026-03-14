document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        // get the agent number and validate it 
        const agentNumberInput = document.getElementById('cashout-number');
        const agentNumber = agentNumberInput.value;
        // console.log(agentNumber)
        if (agentNumber.length != 11 || isNaN(agentNumber)) {
            alert("Enter Correct Agent Number")
            alert("Just wait we just printing your money")
            agentNumberInput.style.borderColor = "red";
            return;
        }
        // get the amount value 
        const cashOutInput = document.getElementById('cashout-amout')
        const cashOutAmount = cashOutInput.value;
        // console.log(cashOutAmount)
        // get the balance info
        const balanceInfo = document.getElementById('balance');
        const currentBalance = balanceInfo.innerText;
        console.log(currentBalance);
        // Update the new balance 
        const newBalance = Number(currentBalance) - Number(cashOutAmount);
        // if(cashOutAmount = o)
        if (cashOutAmount <= 0 || newBalance < 0) {
            alert("Invalid Amount")
            const amount = document.getElementById('cashout-amout')
            amount.style.borderColor = "red"
            amount.style.color = "red"
            return;
        }
        // console.log("New Balance ", newBalance)
        const cashOutPinInput = document.getElementById("cashOut-pin");
        const cashoutPin = cashOutPinInput.value;
        if (cashoutPin === "1234") {
            alert("Just wait we just printing your money")
            alert(`Cash Out Successful! Available Balance: ${newBalance}`)
        } else {
            alert('Wrong Pin Number')
            const amount = document.getElementById('cashOut-pin')
            amount.style.borderColor = "red";
            amount.value = '';
            return;
        }
        balanceInfo.innerText = newBalance;
        agentNumberInput.value = "";
        cashOutInput.value = "";
        cashOutPinInput.value = "";

    })

const pinInput = document.getElementById('cashOut-pin');

pinInput.addEventListener('input', function () {
    pinInput.style.borderColor = "";
});

const cashOutInput = document.getElementById('cashout-number')
cashOutInput.addEventListener('input', function () {
    cashOutInput.style.borderColor = "";
})

const cashOutAmountInput = document.getElementById('cashout-amout')
cashOutAmountInput.addEventListener('input',function(){
    cashOutAmountInput.style.borderColor = "";
    cashOutAmountInput.style.color = "";
})