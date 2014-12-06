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
<script>
window.addEventListener('scroll', function(){
  var b = document.body;
  b.style.backgroundPosition = "0 -"+(b.scrollTop*100/b.scrollHeight)+"%";
});
</script>

{% include_relative README.md %}
