const changeNavHeight = () => {
	const nav = document.querySelector('.navigation');
	const navLink = document.querySelectorAll('.navigation__link');
	const navIcons = document.querySelectorAll('.navigation__icon');

	if (window.innerWidth >= 1024) {
		if (window.pageYOffset > 100) {
			nav.style.height = '55px';
			[...navLink].forEach(link => (link.style.fontSize = '1.4rem'));
			[...navIcons].forEach(icon => (icon.style.fontSize = '2.3rem'));
		} else {
			nav.style.height = '80px';
			[...navLink].forEach(link => (link.style.fontSize = '1.6rem'));
			[...navIcons].forEach(icon => (icon.style.fontSize = '2.5rem'));
		}
	}
};

export default changeNavHeight;
