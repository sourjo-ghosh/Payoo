const addMoneySec = document.getElementById('add-money');
const bankInput = document.getElementById('bank-input');
const bankItems = document.querySelectorAll('.dropdown-content li a');

bankItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        bankInput.value = this.textContent;
        // close the preview 
        document.activeElement.blur();
    })
})

const addMoneyBtn = document.getElementById('add-money-btn');
addMoneyBtn.addEventListener('click', () => {

    const addMoneyNumberInput = document.getElementById('add-money-number');
    const addMoneyNumber = addMoneyNumberInput.value
    const addMoneyBankName = bankInput.value
    // validating the bank name
    if(addMoneyBankName === ""){
        alert("Kingly Select Your Bank Name")
        bankInput.style.borderColor = "red";
        return;
    }
    // validating the agent number 
    if (addMoneyNumber.length != 11 || isNaN(addMoneyNumber)) {
        alert("Enter Correct Agent Number")
        addMoneyNumberInput.style.borderColor = "red";
        return;
    }
    const addMoneyAmountInput = document.getElementById('add-money-amount')
    const addMoneyAmount = addMoneyAmountInput.value;
    const addMoneyPinInput = document.getElementById('add-money-pin')
    const addMoneyPin = addMoneyPinInput.value;
    const balanceInfo = document.getElementById('balance');
    const currentBalance = balanceInfo.innerText;
    // calculating the new balance 
    const newBalance = Number(currentBalance) + Number(addMoneyAmount);
    // validating add money amount 
    if (addMoneyAmount <= 0) {
        alert("Invalid Amount")
        addMoneyAmountInput.style.borderColor = "red"
        amount.style.color = "red"
        return;
    }
    // validating pin number 
    if (addMoneyPin === "1234") {
        alert(`Add Money Successful! Available Balance: ${newBalance}`)
    } else {
        alert('Wrong pin Number')
        addMoneyPinInput.style.borderColor = "red";
        return;
    }
    // updating new balance 
    balanceInfo.innerText = newBalance;
    addMoneyNumberInput.value = ""
    addMoneyAmountInput.value = ""
    addMoneyPinInput.value = ""
    bankInput.value = ""
    addMoneySec.classList.add('hidden')
})
