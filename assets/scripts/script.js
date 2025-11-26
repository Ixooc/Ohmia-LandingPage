document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;

      faqQuestions.forEach(function(q) {
        q.setAttribute('aria-expanded', 'false');
        q.nextElementSibling.classList.remove('active');
      });

      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        answer.classList.add('active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;

      faqQuestions.forEach(function (q) {
        q.setAttribute('aria-expanded', 'false');
        q.nextElementSibling.classList.remove('active');
      });

      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        answer.classList.add('active');
      }
    });
  });

  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarActions = document.querySelector('.navbar-actions');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      const isOpen = this.classList.contains('active');

      if (isOpen) {
        this.classList.remove('active');
        navbarMenu.classList.remove('active');
        navbarActions.classList.remove('active');
      } else {
        this.classList.add('active');
        navbarMenu.classList.add('active');
        navbarActions.classList.add('active');
      }
    });
  }

  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenuToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
      navbarActions.classList.remove('active');
    });
  });
});

// --- Lógica del Slider de Testimonios ---
const track = document.getElementById('testimonialTrack');
const btnPrev = document.querySelector('.slider-button--prev');
const btnNext = document.querySelector('.slider-button--next');

if (track && btnPrev && btnNext) {
  let currentIndex = 0;
  
  const updateSlider = () => {
    //Ancho de tarjeta y gap
    const card = track.querySelector('.testimonial-card');
    if (!card) return;
    
    //Asegura el ancho real con los margenes
    const slideWidth = card.getBoundingClientRect().width;
    const gap = 20; 
    const moveAmount = slideWidth + gap;
    
    track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
  };

  //Cantidad de cartas en la pantalla
  const getVisibleCards = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  btnNext.addEventListener('click', () => {
    const totalCards = track.children.length;
    const visibleCards = getVisibleCards();
    
   //Ya no avanza si muestra las ultimas cartas
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      updateSlider();
    } else {
      //Vuelve al inicio
      currentIndex = 0;
      updateSlider();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    } else {
      //Va a la ultima carta
      const totalCards = track.children.length;
      const visibleCards = getVisibleCards();
      currentIndex = totalCards - visibleCards;
      updateSlider();
    }
  });

  //Recalcula la posicion al cambiar el tamaño de la ventana
  window.addEventListener('resize', () => {
    updateSlider();
  });
}