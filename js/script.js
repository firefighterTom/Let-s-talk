const btnHeader = document.querySelector('.button-header');
const headingText = document.querySelector('.heading-text');
const burgerIcon = document.querySelector('.burger-icon');
const backgroundNav = document.querySelector('.background-navigation');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.navigation-link');
const tvImages = document.querySelectorAll('.tv-img');
const remoteBtn = document.querySelectorAll('.remote-btn');
const img = {
	imgInterview: document.querySelector('.interview-img'),
	imgBooking: document.querySelector('.hotel-img'),
	imgOrdering: document.querySelector('.ordering-img'),
	img911: document.querySelector('.emergency-img'),
};

const startAnimationShowUp = () => {
	headingText.classList.add('animation-show-up');
	btnHeader.classList.add('animation-show-up');
};
setTimeout(startAnimationShowUp, 2000);

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('open');
	if (backgroundNav.classList.contains('active')) {
		backgroundNav.classList.remove('active');
		backgroundNav.classList.add('dis-active');
		setTimeout(function removeLink() {
			nav.style.display = 'none';
		}, 300);
	} else {
		backgroundNav.classList.add('active');
		backgroundNav.classList.remove('dis-active');
		setTimeout(function showLink() {
			nav.style.display = 'flex';
		}, 500);
	}
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		backgroundNav.classList.remove('active');
		backgroundNav.classList.add('dis-active');
		burgerIcon.classList.remove('open');
		setTimeout(function removeLink() {
			nav.style.display = 'none';
		}, 300);
	});
});
remoteBtn.forEach((element) => {
	element.addEventListener('click', (e) => {
		tvImages.forEach((element) => {
			element.classList.remove('active-img');
		});
		remoteBtn.forEach((element) => {
			element.classList.remove('active-btn');
		});
		const chosenButton = e.target.getAttribute('data-name');
		img[chosenButton].classList.add('active-img');
		element.classList.add('active-btn');
	});
});
