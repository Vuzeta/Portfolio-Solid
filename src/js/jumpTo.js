import jump from 'jump.js';
import easeInOutQuad from './easeInOutQuad';

const jumpTo = target => {
	jump(target, {
		duration: 800,
		offset: -85,
		a11y: false,
		easing: easeInOutQuad,
	});
};

export default jumpTo;
