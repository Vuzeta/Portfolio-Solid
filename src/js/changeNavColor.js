import changeNavHeight from './changeNavHeight';

const changeColor = () => {
	let fromTop = window.pageYOffset;
	const navigation = document.querySelector('.navigation');
	const navigationMenu = document.querySelector('.navigation__menu');
	const navigationItem = document.querySelectorAll('.navigation__item');
	const nav = document.querySelector('.navigation');
	if (fromTop >= 60) {
		navigation.style.backgroundColor = '#f2f2f2';
		navigation.style.boxShadow = '2px 2px 2px rgba(0, 0, 0, 0.1)';
		navigationMenu.style.backgroundColor = '#f2f2f2';
		navigationItem.forEach(item => {
			item.style.backgroundColor = '#f2f2f2';
		});
		changeNavHeight();
	} else {
		navigation.style.backgroundColor = '#fff';
		navigation.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.1)';
		navigationMenu.style.backgroundColor = '#fff';
		navigationMenu.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.1)';
		navigationItem.forEach(item => {
			item.style.backgroundColor = '#fff';
			item.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.1)';
		});
		changeNavHeight();
	}
};

export default changeColor;
