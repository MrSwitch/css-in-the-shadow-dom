//
// Widget JS
//

document.addEventListener('DOMContentLoaded', function(){

	var el = document.querySelector('.player');
	var controls = document.getElementById('tmpl-player').content;

	// trigger ready animation
	el.classList.add('ready');

	// Insert controls
	el.appendChild(controls);


}, true);
