document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery-container');
  const footer = document.getElementById('footer');
  let isLocked = false;

  function lockScroll() {
    document.body.style.overflow = 'hidden';
    isLocked = true;
  }

  function unlockScroll() {
    document.body.style.overflow = '';
    isLocked = false;
  }

  window.addEventListener('scroll', () => {
    const galleryRect = gallery.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (galleryRect.top <= 0 && !isLocked) {
      lockScroll();
      footer.classList.add('visible');
      window.scrollTo({ top: document.documentElement.scrollHeight - windowHeight, behavior: 'smooth' });
    }

    if (window.scrollY < gallery.offsetTop) {
      footer.classList.remove('visible');
      unlockScroll();
    }
  });

  window.addEventListener('wheel', (e) => {
    if (isLocked && e.deltaY > 0) {
      unlockScroll();
      footer.classList.add('visible');
    }
  });

  window.addEventListener('touchmove', () => {
    if (isLocked) {
      unlockScroll();
      footer.classList.add('visible');
    }
  });
});
