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

const track = document.getElementById('testimonialTrack');
// CORRECCIÓN AQUÍ: Seleccionamos los botones específicamente usando sus nuevos IDs únicos
const btnPrev = document.getElementById('testimonialPrev');
const btnNext = document.getElementById('testimonialNext');

if (track && btnPrev && btnNext) {
  let currentIndex = 0;

  const updateSlider = () => {
    const card = track.querySelector('.testimonial-card');
    if (!card) return;

    const slideWidth = card.getBoundingClientRect().width;
    const gap = 20;
    const moveAmount = slideWidth + gap;

    track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
  };

  const getVisibleCards = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  btnNext.addEventListener('click', () => {
    const totalCards = track.children.length;
    const visibleCards = getVisibleCards();

    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      updateSlider();
    } else {
      currentIndex = 0;
      updateSlider();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    } else {
      const totalCards = track.children.length;
      const visibleCards = getVisibleCards();
      currentIndex = totalCards - visibleCards;
      updateSlider();
    }
  });

  window.addEventListener('resize', () => {
    updateSlider();
  });
}

const hiwTrack = document.getElementById('howItWorksTrack');
const hiwBtnPrev = document.getElementById('howItWorksPrev');
const hiwBtnNext = document.getElementById('howItWorksNext');

if (hiwTrack && hiwBtnPrev && hiwBtnNext) {
  let hiwCurrentIndex = 0;

  const updateHiwSlider = () => {
    const slide = hiwTrack.querySelector('.how-it-works-slide');
    if (!slide) return;

    const slideWidth = slide.offsetWidth;
    const gap = 20;
    const moveAmount = slideWidth + gap;

    hiwTrack.style.transform = `translateX(-${hiwCurrentIndex * moveAmount}px)`;
  };

  const getHiwVisibleCards = () => {
    return 1;
  };

  hiwBtnNext.addEventListener('click', () => {
    const totalSlides = hiwTrack.children.length;
    const visibleSlides = getHiwVisibleCards();

    if (hiwCurrentIndex < totalSlides - visibleSlides) {
      hiwCurrentIndex++;
    } else {
      hiwCurrentIndex = 0;
    }
    updateHiwSlider();
  });

  hiwBtnPrev.addEventListener('click', () => {
    const totalSlides = hiwTrack.children.length;
    const visibleSlides = getHiwVisibleCards();

    if (hiwCurrentIndex > 0) {
      hiwCurrentIndex--;
    } else {
      hiwCurrentIndex = totalSlides - visibleSlides;
    }
    updateHiwSlider();
  });

  window.addEventListener('resize', () => {
    updateHiwSlider();
  });
}