document.getElementById('login-btn').addEventListener('click', function(){
    const mobileInput = document.getElementById('mobile-input');
    const mobileNumber = mobileInput.value;
    console.log(mobileNumber)
    const pinInput = document.getElementById('pin-input');
    const Pin = pinInput.value;
    console.log(Pin)
    if(mobileNumber == '01402723682' && Pin == '1234' ){
        alert('Login Successful')
        mobileInput.value = '';
        pinInput.value = '';
        window.location.assign("/Home.html");
    } else{
        alert('Wrong Credential, Try Again')
        return;
    }
})