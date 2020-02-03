import jumpTo from './jumpTo';

export const toggleHamburger = menu => {
	menu.classList.toggle('is-active');
	showNavList();
};

export const showNavList = () => {
	const nav = document.querySelector('.navigation__menu');
	nav.classList.toggle('navigation__menu--active');
};

export const linkClicked = e => {
	const hamburger = document.querySelector('.hamburger');
	toggleHamburger(hamburger);
	let target = e.target.hash;
	jumpTo(target);
};
