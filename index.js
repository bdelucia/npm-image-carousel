// DOM elements
const prevEl = document.querySelector('#prev');
const nextEl = document.querySelector('#next');
const slidesEl = document.querySelector('#slides');
const navEl = document.querySelector('.nav');
const allImages = document.querySelectorAll('#slides img');

// Initial state
let moveWidth = 0;

const updateNav = () => {
  const allNavBtnElsArr = Array.from(document.querySelectorAll('.nav button'));
  allNavBtnElsArr.forEach((button) => button.classList.remove('active'));
  allNavBtnElsArr[moveWidth / 500].classList.add('active');
};

const updateSlider = () => {
  slidesEl.style.transform = `translateX(-${moveWidth}px)`;
  updateNav();
};

// Event handlers
const handleNextClick = () => {
  if (moveWidth === (allImages.length - 1) * 500) {
    moveWidth = 0;
  } else {
    moveWidth += 500;
  }
  updateSlider();
};

const handlePrevClick = () => {
  if (moveWidth === 0) {
    moveWidth = (allImages.length - 1) * 500;
  } else {
    moveWidth -= 500;
  }
  updateSlider();
};

const handleNavBtnClick = (e) => {
  const index = Array.from(navEl.children).indexOf(e.currentTarget);
  moveWidth = index * 500;
  updateSlider();
};

// Event listeners
nextEl.addEventListener('click', handleNextClick);
prevEl.addEventListener('click', handlePrevClick);

Array.from(allImages).forEach((image) => {
  const button = document.createElement('button');
  navEl.appendChild(button);
  button.addEventListener('click', handleNavBtnClick);
});

// Automatic slide change every 5 seconds
setInterval(handleNextClick, 5000);

//
updateNav();
