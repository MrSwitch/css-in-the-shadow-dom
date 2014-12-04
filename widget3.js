//
// Widget JS - shadow condom
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

		// Styles
		var styles = Array.prototype.slice.call(document.querySelector('link[href$="widget3.css"]').sheet.rules).map(function(rule){return rule.cssText;}).join('');

		root.innerHTML = '<style>'+ styles.replace(/([^\s\}]*\.player[^\s\{]*) /g, ':host($1) ') +'</style>';
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
