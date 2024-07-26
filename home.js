
console.log(1);
document.addEventListener('DOMContentLoaded', () => {
  // Toggle navigation menu
  const navList = document.querySelector('nav ul');

  navList.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  // Smooth scrolling effect for sections
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50; // Adjust offset as needed

      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });

  // Add hover effect and click event listener to project cards

    const projectCards = document.querySelectorAll('.project-card');
    // Add click event listener to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }else{
              console.log("N.A");
            }
        });
    });
  

});
