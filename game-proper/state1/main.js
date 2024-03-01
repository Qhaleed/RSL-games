const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');
const aurora = document.getElementById('faction-A');
const umbral = document.getElementById('faction-B');


// SECTION 1 HOVER
section1.addEventListener("mouseover", function () {
    setTimeout(() => {
        description2.style.opacity = '0.01';
    }, 200);
    setTimeout(() => {
        description2.style.opacity = '1';
        
     
    }, 400);
    
})

section1.addEventListener("mouseout", function () {
    setTimeout(() => {
        description2.style.opacity = '1';
    }, 200);
   
    setTimeout(() => {
        description2.style.opacity = '0.01';
     
    }, 400);
})

// SECTION 2 HOVER
section2.addEventListener("mouseover", function () {
    setTimeout(() => {
        description1.style.opacity = '0.01';
    }, 200);
    setTimeout(() => {
        description1.style.opacity = '1';
        
     
    }, 400);
    
})

section2.addEventListener("mouseout", function () {
    setTimeout(() => {
        description1.style.opacity = '1';
    }, 200);
   
    setTimeout(() => {
        description1.style.opacity = '0.01';
     
    }, 400);
})


// Factions Choosing

// THE AURORA FACTION
aurora.addEventListener('click'  ,function(){
    aurora.textContent='Faction Chosen';
})

// THE UMBRAL FACTION

umbral.addEventListener('click', function () {
    umbral.textContent = "Coming Soon!";
    description1.textContent = "Apologies for the inconvience, still working on it";
})