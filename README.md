





# Shadow (Con)DOM


**tl;dr;**
	Shadow Dom, the CSS condom - preventing unwanted leakage.





# The problem

CSS suffers from leakage freakage!

[see images](images/)

[demo css styles](./demo.html)







## Fix 1: CSS *anti-patterns*

* Increase CSS specificity
* Use `!important`


CSS leakage *= unwanted impregnanation*.


	body.theme div#parent #child a{
		color: #DAD;
		position: sticky !important;
	}





> As we all (should) probably know by now, specificity is is one of CSS’ most troublesome features, and is an area that soon becomes hard to manage on projects of any reasonable size. Specificity is a trait best avoided, which is why we don’t use IDs in CSS, and we don’t nest selectors unless absolutely necessary.

[Harry Roberts](http://csswizardry.com/2014/10/the-specificity-graph/)





## Fix 2: Sandbox - iframe

	<iframe src="widget.html">
	    #document
	</iframe>

* Black box, no themes, nothing
* Unable to expand with content
* Performance poor





... a new hope!


*[drum role please]*







# Shadow DOM
(Shit Hot and Awesomeness, Dude! Omg! Wow!)

Like mini christmas presents within elements, lovingly wrapped, and hidden from view.


# What is it?

	<video>
	  #shadow-root
	     <tree>

[shadowy elements](./native-shadow.html)




# Browser

* Chrome √
* FireFox (flag)
* IE (under consideration)
* Safari ?




## Create Shadow in JS

Create a shadow-root and "distribute" the existing children.

	var root = el.createShadowRoot();
	root.innerHTML = `<content></content>`;





## importNode

Phyisically move the controls element to the shadow-root.

	var controls = el.querySelector('.controls');
	controls = document.importNode( controls, true);
	root.appendChild( controls );





## Style the Shadow DOM nodes

Import widget styles.

	root.innerHTML += '<style>@import "widget.css";</style>';

Note: BEM is best *Big Engineering Misunderstanding*

	.parent {...}
	.parent__child {...}
	.parent--mistake__child {...}



### Trigger styles from host

For host node conditions

	:host(.ready.player) .controls{
		display:block;
	}

For nodes ancestor conditions

	:host-context(body.touch){
		font-size: 1.2em;
	}



## Style distributed Nodes

	::content h2{
		text-decoration:underline;
	}


## Style based on context

	:host-context(body.touch) button{
		font-size:1.3em;
	}



## Backwards Compatibility CSS

These do not sit well together

	:host, .player{
		background:black;
	}

[demo entwined styles](demo2.html) will break in other browsers.


Hack: Change it via javascript!

	styles.replace( /.player\b/g, ':host')


[demo make styles compatible](demo3.html)





## Theming
Just to prove this isn't like an IFrame, lets let a little light into the black box

* `.player::shadow`  - reference the shadow psuedo element
* `body /deep/ .theme-background-color` - optionally target shadow content and elements nested nodes (see themes)[themes.css]







# Custom Elements

If you dont want to get caught by styles targeting native elements, create your own.

<custom-elements></custom-elements>

	custom-element{
		color:red;
		display:block;
	}


Even register handlers to style them before they are drawn to the page.

	registerHandler('custom-element', { proto : ... })


# Shadow Dom + Templates + Imports + Custom Elements 

*STIC*



# References

* [Shadow DOM 101](www.html5rocks.com/en/tutorials/webcomponents/shadowdom/)
* [Shadow DOM 201](www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201)
* [Shadow DOM 301](www.html5rocks.com/en/tutorials/webcomponents/shadowdom-301)
* [WebComponentsOrg](http://webcomponents.org/articles/)



