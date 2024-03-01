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


// Factions Choosing

// THE AURORA FACTION
aurora.addEventListener('click'  ,function(){
    aurora.textContent='Faction Chosen...';
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
        aurora.textContent = 'Welcome to the Auroran Stalwart faction';
        description1.textContent = 'You are now member of the faction, from here on, you are to take a vow and swor fealty to the Auroran Queen';
    }, 6000);
})

// THE UMBRAL FACTION

umbral.addEventListener('click', function () {
    umbral.textContent = "Coming Soon!";
    description2.textContent = "Apologies for the inconvience, still working on it";
})