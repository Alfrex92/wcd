// let displayElement = (getElement, displayDiv) => {
//     let displayElement = document.querySelector(getElement);
//     if (!displayElement) { return; }

//     let getDiv = document.querySelector(displayDiv);
//     displayElement.addEventListener('click', e => {
//         e.preventDefault();
//         let elementHeight = calculateHeight('.Dropdown-body');
//         getDiv.style.height = `${elementHeight}px`;
//         if (getDiv.clientHeight > 0) { getDiv.style.height = '0';};
//       });
//   };

// displayElement('.Dropdown', '.Dropdown-Panel');

// const textarea = document.querySelector('ContactForm-textarea')

// textarea.style.removeProperty('background');

// console.log('Hello  wordpress');

// to avoid conflict with JQuery's versions between Wordpress and plugins

document.body.style.overflow = "hidden"

window.addEventListener('load', function () {
	scrollHandle();
    const bodyStyle = document.body.style;
    let overlay = document.getElementById('preloader');
    overlay.style.display = 'none';
    bodyStyle.removeProperty('overflow');

});


function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

let scrollHandle = () => {
	const images = [...document.querySelectorAll('.-stagger')];
	images.forEach((image) => {
		let imagesCoords = image.getBoundingClientRect(),
			offsetI = imagesCoords.top;
		if (offsetI <= window.innerHeight) {
			image.classList.add('fade');
			staggerElements()
		}
	});
};

window.addEventListener('scroll', debounce(scrollHandle));

let staggerElements = () => {
	let items = document.querySelectorAll('.-stagger'),
		docElemStyle = document.documentElement.style,
		transitionProp = typeof docElemStyle.transition == 'string' ?
		'transition' : 'WebkitTransition';
	for (var i = 0; i < items.length; i++) {
		let item = items[i];
		// stagger transition with transitionDelay
		item.style[transitionProp + 'Delay'] = (i * 80) + 'ms';
		item.classList.toggle('is-moved');
	}
}
