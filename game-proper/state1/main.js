const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');


// SECTION 1 HOVER
section1.addEventListener("mouseover", function () {
    setTimeout(() => {
        description2.style.opacity = '0.01';
    }, 100);
    setTimeout(() => {
        description2.style.opacity = '1';
        
     
    }, 500);
    
})

section1.addEventListener("mouseout", function () {
    setTimeout(() => {
        description2.style.opacity = '1';
    }, 500);
   
    setTimeout(() => {
        description2.style.opacity = '0.01';
     
    }, 500);
})

// SECTION 2 HOVER
section2.addEventListener("mouseover", function () {
    setTimeout(() => {
        description1.style.opacity = '0.01';
    }, 100);
    setTimeout(() => {
        description1.style.opacity = '1';
        
     
    }, 500);
    
})

section2.addEventListener("mouseout", function () {
    setTimeout(() => {
        description1.style.opacity = '1';
    }, 500);
   
    setTimeout(() => {
        description1.style.opacity = '0.01';
     
    }, 500);
})

