var navbar = document.getElementById('navbar');
const enterGameButton = document.getElementById('enterGameButton');
const land = document.getElementById('landing-page')
const mainMenu = document.getElementById('main-menu');
const loadingScreen = document.getElementById('loading-screen');
const loadingHeader = document.getElementById('header');
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');
const mainText = document.getElementById('main-text'); 
// The navbar functions
window.onscroll = function() {scrollFunction()};
function scrollFunction () {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
        navbar.style.transition = "500ms"
    }
    else {
        navbar.style.backgroundColor = " rgba(245, 245, 220, 0)";
    }
}

// Entergame funtion

enterGameButton.addEventListener("click", function enterGame () {

        setTimeout(() => {
            
            land.style.display = 'none';
            loadingScreen.style.display = 'block';
            mainMenu.style.display = 'none';
        }, 2000);
        setTimeout(() => {
           
           window.location.href ='../state0/index.html';
        }, 5000);
    
    
});






// Lets try to define game logic

const game = {
    start: function () {
        output("Welcome to the game");
    },
    
}

