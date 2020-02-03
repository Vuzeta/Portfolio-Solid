const animateHeader = () => {
	var element = document.querySelector('.hero__header');
	var photo = document.querySelector('.hero__photo');
	var position = element.getBoundingClientRect();
	if (position.top > 0) {
		element.style.transform = 'scale(1)';
		photo.style.transform = 'scale(1.05)';
	} else if (position.top < -500) {
		element.style.transform = 'scale(0)';
		photo.style.transform = 'scale(0)';
	}
};

export default animateHeader;
