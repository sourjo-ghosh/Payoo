const addMoneySec = document.getElementById('add-money');
const bankInput = document.getElementById('bank-input');
const bankItems = document.querySelectorAll('.dropdown-content li a');

bankItems.forEach(item => {
    item.addEventListener('click', function (e) {
        console.log(e.target)
        e.preventDefault();
        bankInput.value = this.textContent;
        document.activeElement.blur();
    })
})