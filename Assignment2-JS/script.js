


document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;

    const id = document.getElementById('id').value;
    const dob = document.getElementById('dob').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;

    // Clear previous errors
    document.getElementById('idError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('numberError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // ID validation
    if (id === '') {
        document.getElementById('idError').textContent = 'ID is required';
        isValid = false;
    }

    // DOB validation
    if (dob === '') {
        document.getElementById('dobError').textContent = 'DOB is required';
        isValid = false;
    }

    // Number validation
    if (number === '') {
        document.getElementById('numberError').textContent = 'Number is required';
        isValid = false;
    } else if (isNaN(number)) {
        document.getElementById('numberError').textContent = 'Number must be numeric';
        isValid = false;
    }

    // Email validation
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('myForm').style.display = 'none';
        document.getElementById('card').style.display = 'block';
        document.getElementById('cardId').textContent = id;
        document.getElementById('cardDob').textContent = dob;
        document.getElementById('cardNumber').textContent = number;
        document.getElementById('cardEmail').textContent = email;
    }
});

document.getElementById('flipButton').addEventListener('click', function() {
    document.querySelector('.card-front').style.display = 'none';
    document.querySelector('.card-back').style.display = 'block';
});

document.getElementById('flipBackButton').addEventListener('click', function() {
    document.querySelector('.card-front').style.display = 'flex';
    document.querySelector('.card-back').style.display = 'none';
});

document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('card').style.display = 'none';
    document.getElementById('myForm').style.display = 'block';
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
