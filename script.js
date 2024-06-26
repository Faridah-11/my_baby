'use strict'

const pictures = document.querySelectorAll('.history-container');

const revealPicture = function (entries, observer) {
  const [entry] = entries;
    // console.log(entries)
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('hidden-container');
  observer.unobserve(entry.target);
};

const pictureObserver = new IntersectionObserver(revealPicture, {
  root: null,
  threshold: 0.05,
});

pictures.forEach(function (picture) {
  pictureObserver.observe(picture);
});



