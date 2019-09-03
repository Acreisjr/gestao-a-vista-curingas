var slideIndex = 0;
const slides = [
  {
    name: 'Ritos Tribo',
    page:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQk9bPzyaZ-zuR1iazktzgY18D_2ZERRL9zI3ibxmHjGlT6cQ5_DkVoe2Ig-kyG-J8o3a9GLf_P9xB7/pubhtml?gid=1746976292&single=true',
    seconds: 60
  },
  {
    name: 'Diagnóstico',
    page:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQk9bPzyaZ-zuR1iazktzgY18D_2ZERRL9zI3ibxmHjGlT6cQ5_DkVoe2Ig-kyG-J8o3a9GLf_P9xB7/pubhtml?gid=1503450989&single=true',
    seconds: 60
  },
  {
    name: '1-1',
    page: 'https://curingas-dti-digital.github.io/curingas-dti-gestao-a-vista',
    seconds: 60
  },
  {
    name: 'Backlog marketing',
    page: 'https://trello.com/b/SQEq3qCq',
    seconds: 30
  }
];

let i = -1;
showSlides();

function showSlides() {
  if (i == slides.length - 1) {
    i = -1;
  }
  i++;
  document.getElementById('slideshow-viewport').src = slides[i].page;
  document.getElementById('slideshow-viewport').contentWindow.location.href = slides[i].page;
  // $('slideshow-viewport').attr('src', slides[i].page);
  setTimeout(showSlides, slides[i].seconds * 1000); // Change image every 2 seconds
}
