document.getElementById('login-btn').addEventListener('click', function () {
    const mobileInput = document.getElementById('mobile-input');
    const mobileNumber = mobileInput.value;
    console.log(mobileNumber)
    const cash-out-pinInput = document.getElementById('cash-out-pin-input');
    const Cash-out-pin = cash-out-pinInput.value;
    const myModal = document.getElementById("my_modal_3")
    if (mobileNumber == '01407273682' && Cash-out-pin == '1234') {
        myModal.showModal()
        mobileInput.value = '';
        cash-out-pinInput.value = '';
    } else {
        alert('Wrong Credential, Try Again')
        return;
    }
})

document.getElementById('goHome').addEventListener('click', () => {
    window.location.assign("Home.html");
});
