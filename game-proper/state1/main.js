const container = document.getElementById('container');
const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const description1 = document.getElementById('description2');
const description2 = document.getElementById('description1');
const aurora = document.getElementById('faction-A');
const umbral = document.getElementById('faction-B');


// SECTION 1 HOVER
section1.addEventListener("mouseover", function () {
    setTimeout(() => {
        description1.style.opacity = '0.01';
    }, 200);
    setTimeout(() => {
        description1.style.opacity = '1';


    }, 400);

})

section1.addEventListener("mouseout", function () {
    setTimeout(() => {
        description1.style.opacity = '1';
    }, 200);

    setTimeout(() => {
        description1.style.opacity = '0.01';

    }, 400);
})

// SECTION 2 HOVER
section2.addEventListener("mouseover", function () {
    setTimeout(() => {
        description2.style.opacity = '0.01';
    }, 200);
    setTimeout(() => {
        description2.style.opacity = '1';


    }, 400);

})

section2.addEventListener("mouseout", function () {
    setTimeout(() => {
        description2.style.opacity = '1';
    }, 200);

    setTimeout(() => {
        description2.style.opacity = '0.01';

    }, 400);
})

//Void Funtions



// Factions Choosing

// THE AURORA FACTION

// THE HANDLER
let clicked = false;
function auroraHandler() {

    if (!clicked) {
        aurora.textContent = 'Faction Chosen...';
        description1.textContent = 'Game is updating...';
        setTimeout(() => {
            description1.textContent = 'Game is updated... You will now be teleported to your homeworld';
            container.style.backgroundColor = 'hsl(35, 96%, 29%)'
        }, 2000);
        setTimeout(() => {
            section2.style.display = 'none';
            section1.style.width = '100%';
            section1.style.backgroundColor = 'hsl(227, 72%, 6%)';
        }, 3000);
        setTimeout(() => {
            aurora.style.color = 'blue';
            aurora.textContent = 'Good news, the developer is available!';
            aurora.classList.add('blinkingAurora');
            description1.textContent = 'Please fill up the form in the next page!';

            const proceedBtn = document.createElement('button');
            proceedBtn.setAttribute('id', 'proceed-btn');
            proceedBtn.textContent = "Proceed";
            proceedBtn.classList.add('proceed')
            section1.appendChild(proceedBtn);


            proceedBtn.addEventListener("click", function () {
                window.location.href = '../state0/index.html';
                return;

            })






        }, 6000);

        clicked = true;

    } else {
        alert("click only once dum dum");
    }

}



// 
aurora.addEventListener('click', auroraHandler)

// THE UMBRAL FACTION
let notClicked = true;
umbral.addEventListener('click', function () {


    if (notClicked) {
        container.style.backgroundColor = 'hsl(227, 72%, 6%)';
        section1.style.opacity = '0';
        aurora.style.opacity = '0';
        description1.style.opacity = '0';
        section1.style.width = '0%';
        section2.style.width = '100%';
        umbral.textContent = "Coming Soon!";
        description2.textContent = "Apologies for the inconvience, still working on it";
        notClicked = false;
        return;
    } else {
        umbral.textContent = "Coming Soon!";
        description2.textContent = "Apologies for the inconvience, still working on it";

        section1.style.opacity = '1';
        section1.style.width = '50%';
        section2.style.width = '50%';

        setTimeout(() => {
            aurora.style.opacity = '1';
            description1.style.opacity = '1';
        }, 500);

    }

})