document.getElementById('cash-out-btn')
    .addEventListener('click', function () {
        // get the agent number and validate it 
        const agentNumberInput = document.getElementById('cash-out-number');
        const agentNumber = agentNumberInput.value;
        if (agentNumber.length != 11 || isNaN(agentNumber)) {
            alert("Enter Correct Agent Number")
            agentNumberInput.style.borderColor = "red";
            return;
        } 
        // get the amount value 
        const cashOutInput = document.getElementById('cashOut-amout')
        const cashOutAmount = cashOutInput.value;
        // get the balance info
        const balanceInfo = document.getElementById('balance');
        const currentBalance = balanceInfo.innerText;
        console.log(currentBalance);
        // Update the new balance 
        const newBalance = Number(currentBalance) - Number(cashOutAmount);
        if (cashOutAmount <= 0 || newBalance < 0) {
            alert("Invalid Amount")
            const amount = document.getElementById('cashOut-amout')
            amount.style.borderColor = "red"
            amount.style.color = "red"
            return;
        }
        const cashOutPinInput = document.getElementById("cashOut-pin");
        const cashOutPin = cashOutPinInput.value;
        if (cashOutPin === "1234") {
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
        document.getElementById('cashout').classList.add('hidden')
    })

const pinInput = document.getElementById('cash-out-pin');
pinInput.addEventListener('input', function () {
    pinInput.style.borderColor = "";
});

const cashOutInput = document.getElementById('cash-out-number')
cashOutInput.addEventListener('input', function () {
    cashOutInput.style.borderColor = "";
})

const cashOutAmountInput = document.getElementById('cash-out-amout')
cashOutAmountInput.addEventListener('input', function () {
    cashOutAmountInput.style.borderColor = "";
    cashOutAmountInput.style.color = "";
})


const tabToggling = () => {
    const allBtns = document.querySelectorAll('.service-btn')
    const allSections = document.querySelectorAll('.service-section')
    // console.log(allBtns)
    allBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            allSections.forEach(section => {
                section.classList.add('hidden')
            })
            const targetId = e.currentTarget.dataset.target
            const targetSection = document.getElementById(targetId)
            targetSection.classList.remove('hidden')
        })
    })
}


tabToggling()

// const allSections = document.querySelectorAll('.service-section')

// const showSection = (sectionId) => {
//     allSections.forEach(section => section.classList.add('hidden'))
//     document.getElementById(sectionId).classList.remove('hidden')
// }

// const tabToggling = () => {
//     const allBtns = document.querySelectorAll('.service-btn')
    
//     showSection('transaction') // default

//     allBtns.forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             showSection(e.currentTarget.dataset.target)
//         })
//     })
// }

