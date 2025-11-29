let gmrmenu = document.querySelector('.gmrmenu');
let nav = document.querySelector('.nav');

gmrmenu.addEventListener('click', function(e) {
	e.stopPropagation();
	nav.classList.toggle('active');
});

document.addEventListener('click', function(e) {
	if (!nav.contains(e.target)) {
		nav.classList.remove('active');
	}
});