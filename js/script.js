const btnHeader = document.querySelector('.button-header');
const headingText = document.querySelector('.heading-text');
const burgerIcon = document.querySelector('.burger-icon');
const backgroundNav = document.querySelector('.background-navigation');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.navigation-link');
const tvImages = document.querySelectorAll('.tv-img');
const imgInterview = document.querySelector('.interview-img');
const imgBooking = document.querySelector('.hotel-img');
const imgOrdering = document.querySelector('.ordering-img');
const img911 = document.querySelector('.emergency-img');

const remoteBtn = document.querySelectorAll('.remote-btn');

const startAnimationShowUp = () => {
	headingText.classList.add('animation-show-up');
	btnHeader.classList.add('animation-show-up');
};
setTimeout(startAnimationShowUp, 2000);
burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('open')
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
		setTimeout(function removeLink() {
			nav.style.display = 'none';
		}, 300);
	});
});

remoteBtn.forEach((element) => {
	element.addEventListener('click', () => {
		tvImages.forEach((element) => {
			element.classList.remove('active-img');
		});
		remoteBtn.forEach(element=>{
			element.classList.remove('active-btn')
		})
		if (element.classList.contains('interview-btn')) {
			imgInterview.classList.add('active-img');
		} else if (element.classList.contains('booking-btn')) {
			imgBooking.classList.add('active-img');
		} else if (element.classList.contains('ordering-btn')) {
			imgOrdering.classList.add('active-img');
		} else if (element.classList.contains('emergency-btn')) {
			img911.classList.add('active-img');
		}
		element.classList.add('active-btn');
	});
});
