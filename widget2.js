//
// Widget JS - shadow condom - widget2.css intermingled rules, this breaks
//

document.addEventListener('DOMContentLoaded', function(){

	var el = document.querySelector('.player');
	var controls = document.getElementById('tmpl-player').content;

	// trigger ready animation
	el.classList.add('ready');


	// Does browser support ShadowRoot
	if( window.ShadowRoot ){

		// Create shadow root...
		var root = el.createShadowRoot();
		root.innerHTML = '<style>@import "widget2.css";</style>';
		root.innerHTML += '<content></content>';

		// Append to hosts shadow
		root.appendChild(controls);
	}

	// Fallback
	else{
		// Append to hosts decendents
		el.appendChild(controls);
	}

}, true);
