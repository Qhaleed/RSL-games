const usernameInput = document.getElementById("username");
const typeInput = document.getElementById("password");
const identityInput = document.getElementById("email");
const submitButton = document.getElementById("submitbtn");
const submitButtonNew = document.getElementById("submitbtnNew");
const worldHeader = document.getElementById('world-header');
const form = document.getElementById('loginForm');

const accounts = [
    {
        username: 'Captain Res',
        type: 'Melee',
        identity: 'Male'
    },
    {
        username: 'user2',
        type: 'pass2',
        identity: 'user2@example.com'
    }
];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    authentication();
});
// For user credential authentication

function authentication() {
    const username = usernameInput.value.trim();
    const type = typeInput.value.trim();
    const identity = identityInput.value.trim();

    const account = accounts.find(account => account.username == username && account.type == type);
    if (account) {
        worldHeader.textContent = 'Game is updating...';
        setTimeout(() => {
            window.location.href = '../state1/index.html';
        }, 5000);


    } else {
        worldHeader.textContent = 'Invalid Login... User does not exist';
    }
    usernameInput = '';
    typeInput = '';
    identityInput = '';
}

submitButton.addEventListener("click", authentication);

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
