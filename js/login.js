// step-1: add click event handler with the submit button  

document.getElementById('btn-submit').addEventListener('click', function(){

    // step-2: get the email address inside the email field

    //  always remember to use .value to get text form an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    

    // step-3: get password 
    // 3.a : set id on the html element
    // 3. b: get the element 
    // 3. c: get the value from the element
    // 3.d: 

    const passwordField = document.getElementById('user-passwrod');
    const password = passwordField.value;
   

    // DANGER!! DO NOT VERIFY email password on the client side

    // STEP-4: verify email and password and check whether valid or not 

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
       alert('Oopps!! You are a not son of this bank owner');
    }
})