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