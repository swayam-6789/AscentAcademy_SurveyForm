const form = document.getElementById('form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementById('gender')

form.addEventListener('submit', (event) => {
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address');
        event.preventDefault();
    }

    if (name.value.length < 3) {
        alert('Name must be at least 3 characters long');
        event.preventDefault();
    }

    if (isNaN(age.value)) {
        alert('Age must be a number');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
