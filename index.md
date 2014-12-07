---
title: CSS in the ShadowDOM
---
<link rel="stylesheet" href="/adorn/adorn.css" />
<script src="/adorn/adorn.js" async></script>
<style>
h1{ 
  color:white;
  text-shadow:0 0 100px black;
  background-position:inherit;
}
h1:before{ 
  background: url(http://photos2.meetupstatic.com/photos/event/d/6/2/d/highres_432114829.jpeg);
  background-size: 100%;
  background-position: inherit;
}
</style>

{% include_relative README.md %}

<script>
(function(){
  var b = document.body;
  var h = Array.prototype.slice.call(document.getElementsByTagName('h1'));
  function bgPos(h){
    h.style.backgroundPosition = "0 "+ (h.getBoundingClientRect().top*100/b.clientHeight)+"%";
  }
  window.addEventListener('scroll', function(){
    h.forEach(bgPos);
  });
})();
</script>
