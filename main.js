var navbar = document.getElementById('navbar');
const enterGameButton = document.getElementById('enterGameButton');
const land = document.getElementById('landing-page');
const mainMenu = document.getElementById('main-menu');
const loadingScreen = document.getElementById('loading-screen');
const loadingHeader = document.getElementById('header');
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');
const mainText = document.getElementById('main-text');
const clickImg = document.getElementById('clickable-img');

// The navbar functions
let lastScrollTop = 0;
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Background color change
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
        navbar.style.transition = "500ms"
    }
    else {
        navbar.style.backgroundColor = " rgba(245, 245, 220, 0)";
    }

    // Hide/Show navbar based on scroll direction
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scrolling down - hide navbar
        navbar.classList.add('hidden');
    } else {
        // Scrolling up - show navbar
        navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

// Clickable-img
// let clickImgCounter = 0;
// let seconds = 0;

// function imageChanger () {
//     seconds++;
//     if (seconds > 3) {
//         clickImgCounter++;
//         clickImg.src = "components/videos/img/thumbnails/wizard.jpg";

//     }
//     else if (seconds > 6) {
//         clickImg.src = "components/videos/img/thumbnails/download_image_1708688550253.png";
//         clickImgCounter++;
//     }
//     else if (seconds > 9) {
//         clickImg.src = "components/videos/img/thumbnails/horse.jpg";
//         clickImgCounter++;

//     }
//     else if (seconds > 12) {
//         clickImgCounter = 0;
//     }

// }

// let timer = setInterval(changeImage, 1000);


// if (clickImgCounter === 0) {
//             clickImg.src = "components/videos/img/thumbnails/wizard.jpg";
//             clickImgCounter++;
//         }
//         else if (clickImgCounter === 1) {
//             clickImg.src = "components/videos/img/thumbnails/download_image_1708688550253.png";
//             clickImgCounter++;
//         }
//         else if (clickImgCounter === 2) {
//             clickImg.src = "components/videos/img/thumbnails/horse.jpg";
//             clickImgCounter = 0;
//         }
let clickImgCounter = 0;

clickImg.addEventListener('click', function () {

    if (clickImgCounter === 0) {
        clickImg.src = "components/videos/img/thumbnails/wizard.jpg";
        clickImgCounter++;
    }
    else if (clickImgCounter === 1) {
        clickImg.src = "components/videos/img/thumbnails/horse.jpg";

        clickImgCounter++;
    }
    else if (clickImgCounter === 2) {
        clickImg.src = "components/videos/img/thumbnails/download_image_1708688550253.png";
        clickImgCounter = 0;
    }
})

let seconds = 0;

function timer() {
    seconds++;

    if (seconds > 3 && seconds < 6) {
        clickImg.src = "components/videos/img/thumbnails/wizard.jpg";
        clickImgCounter = 0;
    }
    else if (seconds > 6 && seconds < 9) {
        clickImg.src = "components/videos/img/thumbnails/horse.jpg";
        clickImgCounter = 1;
    }
    else if (seconds > 9 && seconds < 12) {
        clickImg.src = "components/videos/img/thumbnails/download_image_1708688550253.png";
        clickImgCounter = 2;
        seconds = 0;
    }
}

let interval = setInterval(timer, 1500);










// Entergame funtion

enterGameButton.addEventListener("click", function enterGame() {
    enterGameButton.textContent = 'Loading...'
    setTimeout(() => {

        land.style.display = 'none';
        loadingScreen.style.display = 'block';
        mainMenu.style.display = 'none';
    }, 2000);
    setTimeout(() => {

        window.location.href = 'game-proper/state0/index.html';
    }, 5000);


});



