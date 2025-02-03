const sideMenu =document.querySelector('.sideMenu' );

function appear(){
    sideMenu.style.right= "0";
    
}

function dissappear(){
    sideMenu.style.right= "-200px"; 
    
}

const sections = document.querySelectorAll('.content-section');

function showSectionOnScroll() {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    // Check if the section is within the viewport
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

// Run the function when the page loads and on scroll
window.addEventListener('scroll', showSectionOnScroll);
showSectionOnScroll();
