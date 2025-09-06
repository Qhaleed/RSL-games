// Get form elements
const form = document.getElementById('freelanceForm');
const submitButton = document.querySelector('.form-submit');
const worldHeader = document.getElementById('world-header');

// Handle form submission
form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = {
        clientName: formData.get('clientName'),
        projectType: formData.get('projectType'),
        email: formData.get('email'),
        description: formData.get('description')
    };

    // Update UI to show loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Sending...</span>';
    worldHeader.textContent = 'Sending your inquiry...';

    try {
        // Send to Vercel Function
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            // Success
            worldHeader.textContent = 'Thank you! Your inquiry has been sent successfully.';
            worldHeader.style.color = '#4CAF50';
            form.reset();

            // Redirect after success (optional)
            setTimeout(() => {
                window.location.href = '../state1/index.html';
            }, 3000);

        } else {
            // Error from server
            throw new Error(result.error || 'Failed to send email');
        }

    } catch (error) {
        console.error('Error:', error);
        worldHeader.textContent = 'Sorry, there was an error sending your message. Please try again.';
        worldHeader.style.color = '#f44336';
    } finally {
        // Reset button
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>Submit Inquiry</span>';
    }
});

// Form validation feedback
const inputs = form.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value.trim() === '') {
            this.style.borderColor = 'rgba(244, 67, 54, 0.5)';
        } else {
            this.style.borderColor = 'rgba(76, 175, 80, 0.5)';
        }
    });

    input.addEventListener('focus', function () {
        this.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    });
});

// Account creation function
// function createAccount () {
//     const usernameNew = usernameInput.value.trim();
//     const typeNew = typeInput.value.trim();
//     const identityNew = identityInput.value.trim();

//     //check for existing accounts

//     const existingAccount = accounts.find(account => account.username == usernameNew);
//     if (existingAccount){
//         worldHeader.textContent = "Username already exists...";
//         return;
//     }

//     const newAccount = {
//         username: usernameNew,
//         password: typeNew,
//         email: identityNew

//     };
//     accounts.push(newAccount);
//     alert("Account Saved");

//     console.log(newAccount);
// }

// submitButtonNew.addEventListener("click", createAccount);
