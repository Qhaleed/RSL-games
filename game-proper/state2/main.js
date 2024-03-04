const menu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');
const topHeader = document.getElementById('top-header')
const middle = document.getElementById('middle');
const textArea = document.getElementById('text-area');
const input = document.getElementById('textInput');
// Navbar Hamburger
let notClicked = true;
menu.addEventListener("click", function () {
    navbar.style.transition = '500ms';
    middle.style.transition = '500ms';
    topHeader.style.transition = '500ms';
    if(notClicked) {
        topHeader.style.display = 'none';
        navbar.style.transition = '500ms';
        middle.style.display = 'none';
        navbar.style.width = '27px';
    }  else {
        navbar.style.width = "300px";
        
        setTimeout(() => {
            topHeader.style.display = 'flex';
            navbar.style.transition = '500ms';
            middle.style.display = 'block';
            
          
            navbar.style.overflow = 'hidden';
        }, 400);
        
       
    }
    notClicked = !notClicked;
})

// Player Level


function levelUpdate () {
    let level = 1;
    const playerLevel = document.getElementById('player-level');
    if (playerLevel) {
        playerLevel.textContent = level;
    }
}
window.onload = function () {
    levelUpdate();
};



textArea.textContent = 'You are now in the kingdom of aurora \nQueen: Tell me your name'

input.addEventListener('keypress', function (event) {
    const userInput = input.value;
    
    if (event.key === 'Enter') {
       textArea.textContent = 'So... our name is ' + userInput + ' ?';
       userInput = input.value;

       if (userInput === "yes"){ 
        textArea.textContent = 'Ohhh... thats a unfortunate name..';
    }
    }
        
   
})
